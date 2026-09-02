---

---
---

## 부록 A. Colab·gfortran 사용법

### Colab 소개

**Google Colab**(Colaboratory)은 구글이 무료로 제공하는, 브라우저에서 도는 주피터 노트북 환경이다. 클릭 한 번이면 클라우드의 리눅스(Ubuntu) 가상 머신이 할당되고, 그 안에서 코드를 실행할 수 있다. 우리에게 중요한 점은 다음과 같다.

- 내 컴퓨터에 아무것도 설치하지 않아도 된다(브라우저만 있으면 된다).
- 리눅스 환경이라 `apt`로 컴파일러를 깔 수 있다.
- Python과 matplotlib이 이미 들어 있어 시각화를 바로 할 수 있다.
- 

### A.1 Colab 런타임의 기본 성질

Google Colab은 브라우저에서 동작하는 무료 Jupyter 노트북 (이하 노트북) 환경으로, 셀 단위로 코드를 실행한다. 알아 둘 핵심은 다음 세 가지다.

- **임시 가상머신**: 각 노트북은 일회용 리눅스 가상머신에서 돈다. 세션이 끝나거나 일정 시간 입력이 없으면 런타임이 회수되고, 설치한 패키지와 만든 파일은 모두 사라진다. 따라서 `apt`로 설치한 gfortran도 세션이 바뀌면 다시 설치해야 한다.
- **작업 디렉터리**: 기본 작업 폴더는 `/content`다. `%%writefile`로 저장한 소스와 Fortran이 출력한 `data.csv`는 모두 여기에 생긴다. 왼쪽 파일 탐색기로 직접 확인할 수 있다.
- **셀 종류**: 코드 셀에서 파이썬을 실행하고, 앞에 `!`를 붙이면 셸 명령을, 첫 줄에 `%%`를 쓰면 매직(magic) 명령을 실행한다. 매직은 구글 코랩(Google Colab) 환경에서 제공하는 특수한 확장 명령어인 '매직 명령어(Magic Command)'를 뜻한다.

### A.2 gfortran 설치

gfortran은 GCC에 포함된 무료·오픈소스 Fortran 컴파일러다. Colab 우분투에는 기본 포함되지 않을 수 있으므로, 아래와 같이 노트북 맨 앞에  설치 셀을 한 번 둔다.

```bash
!apt-get update
!apt-get install -y gfortran
!gfortran --version
```

설치가 끝나면 `gfortran --version`이 버전 정보를 출력한다. Colab의 우분투 베이스에 따라 제공되는 gfortran 버전이 달라지지만, 본문이 기준으로 삼는 Fortran 2008 기능은 어떤 최근 버전에서도 모두 지원된다.

### A.3 `%%writefile` 매직과 파일 저장

소스 코드를 파일로 저장하는 가장 간단한 방법은 셀 첫 줄의 `%%writefile` 매직이다.

```fortran
%%writefile hello.f90
program hello
   implicit none
   print *, "hello, modern fortran"
end program hello
```

- 첫 줄 `%%writefile hello.f90`은 Fortran 코드가 아니라 Colab 매직이다. 이 줄은 셀 내용을 `hello.f90`으로 저장하라는 뜻이며, 본문 인쇄본에서는 생략해 표기한다.
- 같은 파일에 덧붙이려면 `%%writefile -a 파일명`을 쓴다(잘 쓰지 않는다).
- 매직을 쓰지 않고 파이썬으로 저장할 수도 있다. 문자열을 직접 파일에 쓰는 방식이며, 코드 생성 자동화에 유용하다.

```python
source = '''program hello
   implicit none
   print *, "hello, modern fortran"
end program hello
'''
with open("hello.f90", "w") as f:
    f.write(source)
```

### A.4 컴파일 옵션 정리

컴파일·실행 셀은 셸 명령이므로 각 줄 앞에 `!`를 붙인다. 이후 모든 `!`를 생략한다. 

```bash
!gfortran -O2 -std=f2018 -Wall hello.f90 -o hello
!./hello
```

자주 쓰는 옵션을 용도별로 정리한다.

| 옵션                                 | 용도                                           |
| ---------------------------------- | -------------------------------------------- |
| `-std=f2008`                       | Fortran 2008 표준 적합성 검사. 비표준 확장을 경고/오류로 잡아 준다 |
| `-std=f2018`                       | 2018 기능(부록 C)을 다룰 때 사용                       |
| `-std=legacy`                      | 부록 H의 FORTRAN 77 고정형식 코드를 컴파일할 때만 사용         |
| `-Wall`                            | 일반 경고 모두 켜기(권장 기본값)                          |
| `-Wextra`                          | 추가 경고. 미사용 변수·인수 등을 더 엄격히 검사                 |
| `-O0` / `-O2` / `-O3`              | 최적화 수준. 학습용은 `-O0`(디버깅 쉬움), 성능 비교는 `-O2`     |
| `-g`                               | 디버그 정보 포함(gdb 사용 시)                          |
| `-fcheck=all`                      | 실행 시간 검사. 배열 첨자 초과, 형상 불일치 등을 잡아 준다          |
| `-fbacktrace`                      | 런타임 오류 발생 위치를 역추적해 출력                        |
| `-ffpe-trap=invalid,zero,overflow` | 부동소수점 예외(0 나눗셈 등)를 즉시 중단으로 전환                |
| `-finit-real=nan`                  | 미초기화 실수를 NaN으로 채워 미초기화 사용을 드러냄               |

### A.5 여러 파일 컴파일과 모듈 순서

모듈을 분리하면(본문 12장) 파일이 여러 개가 된다. gfortran은 모듈을 먼저 컴파일해 `.mod` 파일을 만든 뒤, 이를 사용하는 프로그램을 컴파일한다. **모듈이 항상 먼저** 와야 한다.

```bash
!gfortran -c -std=f2018 -Wall stats_mod.f90
!gfortran -std=f2008 -Wall stats_mod.o main.f90 -o main
!./main
```

또는 아래와 같이 한 줄로 의존 순서대로 나열해도 된다.

```bash
!gfortran -std=f2018 -Wall stats_mod.f90 main.f90 -o main
!./main
```

`.mod` 파일을 다른 폴더에 두려면 출력 폴더는 `-J 폴더`, 검색 폴더는 `-I 폴더`로 지정한다.

### A.6 자주 만나는 Colab 오류와 해결

| 증상                                      | 원인                  | 해결                             |
| --------------------------------------- | ------------------- | ------------------------------ |
| `gfortran: command not found`           | 새 세션이라 컴파일러 미설치     | A.2 설치 셀을 다시 실행                |
| `No such file or directory: 'data.csv'` | Fortran 실행 전에 시각화 셀을 돌림 | 셀 실행 순서를 작성 → 실행 → 시각화로        |
| 그래프가 빈 화면                               | csv가 비었거나 서식 불일치    | Fortran `write` 서식과 파이썬 파서 열 수를 맞춤 |
| 한참 뒤 파일이 사라짐                            | 런타임 회수              | 중요한 결과는 `files.download`로 저장   |
| 모듈 `.mod` 오류                            | 컴파일 순서 문제           | A.5의 모듈 우선 순서 적용               |


