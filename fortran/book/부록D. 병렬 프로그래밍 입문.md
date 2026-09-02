
---
## 부록 D. 병렬 프로그래밍 입문

### D.1 도입

이 부록을 마치면 다음을 할 수 있다.

- 반복이 서로 독립임을 컴파일러에 알리는 `do concurrent`를 작성한다.
- 코어레이로 작업을 여러 이미지에 나누고 결과를 모은다(단일 이미지로 정확성 검증 → 다중 이미지로 실행).

### D.2 개념 설명

- **`do concurrent`**: "이 반복들은 어떤 순서로 실행해도 결과가 같다"고 **프로그래머가 보증**하는 반복문이다. 표준은 자동 병렬을 강제하지 않는다. 컴파일러·플래그(예: gfortran의 `-ftree-parallelize-loops`)나 GPU 백엔드가 이 보증을 활용할 수 있다. 보증을 어기면(반복 간 의존이 있으면) 결과가 정의되지 않는다.
- **지역성 지정(locality specifier, F2018)**: `local`, `local_init`, `shared`, `default(none)`으로 각 반복이 변수를 사적으로 쓸지 공유할지 명시한다. (컴파일러 지원은 D.6 참고.)
- **코어레이(coarray)**: 프로그램이 여러 복사본(**이미지**)으로 동시에 실행되는 SPMD 모델이다. `x[*]`처럼 선언한 코어레이는 다른 이미지의 값을 `x[i]`로 직접 참조한다. `this_image()`, `num_images()`로 자신·전체 수를 안다. `sync all`로 동기화하고, `co_sum` 등 집합 서브루틴으로 한 번에 합산한다.

### D.3 문법 규격

```fortran
do concurrent (‹i› = ‹lo›:‹hi›[, ‹j› = ‹lo›:‹hi›][, ‹mask›])
   ‹body›
end do

real :: ‹name›[*]            ! 코어레이 선언(마지막 차원이 코디멘션)
‹var› = ‹coarray›[‹image›]   ! 다른 이미지의 값 읽기
sync all                     ! 모든 이미지 동기화
call co_sum(‹var›[, result_image=‹k›])
```

### D.4 예제 1 — `do concurrent`로 독립 반복 표시

각 `i`의 계산이 다른 `i`에 의존하지 않으므로 `do concurrent`가 적절하다.

**① Fortran 소스**

```fortran
%%writefile dc_plain.f90
program dc_plain
   use iso_fortran_env, only: real64
   implicit none
   integer, parameter :: n = 1000000
   integer :: i
   real(real64), allocatable :: a(:), b(:)
   real(real64) :: total

   allocate(a(n), b(n))

   do concurrent (i = 1:n)
      a(i) = real(i, real64)
      b(i) = sqrt(a(i)) + 1.0_real64 / a(i)
   end do

   total = sum(b)
   print '("sum(b) = ", ES14.7)', total
end program dc_plain
```

**② 컴파일·실행** (자동 병렬은 컴파일러 의존 기능이다. 결과는 직렬과 같아야 한다.)

```bash
!gfortran -O2 -std=f2018 -Wall dc_plain.f90 -o dc_plain
!./dc_plain
!gfortran -O2 -ftree-parallelize-loops=4 dc_plain.f90 -o dc_par
!./dc_par
```

**실행 결과** (두 빌드 모두 동일)

```text
sum(b) =  6.6666718E+08
```

`-ftree-parallelize-loops`는 표준이 아닌 gfortran 전용 최적화 플래그다. 표준 코드(`do concurrent`)는 그대로 두고, 병렬화 여부는 빌드 옵션이 결정한다.

### D.5 예제 2 — 코어레이로 합 나누기

1부터 100까지의 합을 이미지별로 나눠 계산한 뒤 1번 이미지가 모은다. `-fcoarray=single`로 빌드하면 **단일 이미지**로 실행되어, 멀티프로세스 환경 없이도 코어레이 코드의 정확성을 검증할 수 있다.

**① Fortran 소스**

```fortran
%%writefile coarray_demo.f90
program coarray_demo
   use iso_fortran_env, only: real64
   implicit none
   integer :: me, np
   real(real64) :: partial[*]
   real(real64) :: total
   integer :: i

   me = this_image()
   np = num_images()

   partial = 0.0_real64
   do i = me, 100, np
      partial = partial + real(i, real64)
   end do

   sync all

   if (me == 1) then
      total = 0.0_real64
      do i = 1, np
         total = total + partial[i]
      end do
      print '("images = ", I0)', np
      print '("sum 1..100 = ", F0.1)', total
   end if
end program coarray_demo
```

**② 컴파일·실행(단일 이미지)**

```bash
!gfortran -O2 -std=f2018 -Wall -fcoarray=single coarray_demo.f90 -o coarray_demo
!./coarray_demo
```

**실행 결과:**


```text
images = 1
sum 1..100 = 5050.0
```

집합 서브루틴 `co_sum`을 쓰면 직접 루프로 모으는 부분을 한 줄로 줄일 수 있다. `partial`을 이처럼 채운 뒤 `call co_sum(partial, result_image=1)`을 호출하면 1번 이미지의 `partial`에 전체 합이 들어온다.

### D.6 다중 이미지로 실제 실행하기 

진짜 병렬 실행에는 **OpenCoarrays**(MPI 기반 런타임)가 필요하다. Colab에서는 다음으로 설치·실행한다(검증된 절차).

**설치** 

```bash
!apt-get update -qq
!apt-get install -y libcoarrays-openmpi-dev libopenmpi-dev openmpi-bin
```

**컴파일·실행** — `caf`로 컴파일하고 `cafrun -np ‹N›`으로 N개 이미지를 띄운다. Colab은 root로 동작하므로 OpenMPI의 root 실행 허용 변수를 켠다.

```bash
caf -O2 coarray_demo.f90 -o coarray_caf
export OMPI_ALLOW_RUN_AS_ROOT=1
export OMPI_ALLOW_RUN_AS_ROOT_CONFIRM=1
cafrun -np 4 --oversubscribe ./coarray_caf
```

**실행 결과**

```text
images = 4
sum 1..100 = 5050.0
```

`--oversubscribe`는 물리 코어보다 많은 이미지를 요청할 때 필요하다. 합이 1 이미지일 때와 같음을 반드시 확인하라 — 병렬 결과는 직렬 결과와 일치해야 한다.

### D.7 그림 예제 — `do concurrent`로 2차원 장을 계산해 히트맵으로

격자의 각 점이 독립적으로 계산되므로 다차원 `do concurrent`가 자연스럽다.

**① Fortran 소스** 

```fortran
%%writefile field_dc.f90
program field_dc
   use iso_fortran_env, only: real64
   implicit none
   integer, parameter :: nx = 200, ny = 200
   integer :: i, j, u
   real(real64) :: x, y
   real(real64) :: field(nx, ny)

   do concurrent (i = 1:nx, j = 1:ny)
      x = -3.0_real64 + 6.0_real64 * real(i - 1, real64) / real(nx - 1, real64)
      y = -3.0_real64 + 6.0_real64 * real(j - 1, real64) / real(ny - 1, real64)
      field(i, j) = sin(x*x + y*y) * exp(-0.2_real64 * (x*x + y*y))
   end do

   open(newunit=u, file="field.csv", status="replace", action="write")
   do j = 1, ny
      do i = 1, nx
         if (i < nx) then
            write(u, '(F0.6, ",")', advance="no") field(i, j)
         else
            write(u, '(F0.6)') field(i, j)
         end if
      end do
   end do
   close(u)

   print '("field.csv written: ", I0, " x ", I0)', nx, ny
end program field_dc
```

**② 컴파일·실행**

```bash
!gfortran -O2 -std=f2018 -Wall field_dc.f90 -o field_dc
!./field_dc
```

**③ Python 시각화**


```python
import numpy as np
import matplotlib.pyplot as plt

field = np.loadtxt("field.csv", delimiter=",")
plt.imshow(field, origin="lower", extent=[-3, 3, -3, 3], cmap="viridis")
plt.colorbar(label="field value")
plt.xlabel("x")
plt.ylabel("y")
plt.title("do concurrent field (Fortran) - Python heatmap")
plt.savefig("field.png", dpi=120)
plt.show()
```


