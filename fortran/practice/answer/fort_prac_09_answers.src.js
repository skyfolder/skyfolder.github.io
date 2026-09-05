/* ============================================================
   answer/fort_prac_09_answers.src.js — 9장 평문 정답 (강사용 원본)

   ★ 이 파일은 GitHub에 올리지 마세요. .gitignore 로 막아 두었습니다.
   ★ 고친 뒤에는 answer/build_09.html 을 열어 정답 파일을 다시 만드세요.
   ============================================================ */

window.ANSWER_SOURCE = {

  /* ---------- 복습 ---------- */
  1:  { answers: ["real, allocatable :: v(:)"],
        explanation: "real, allocatable :: v(:) 다. 괄호 안의 콜론 하나가 계수 1을 뜻하고, 실제 길이는 실행 시점에 정해진다. 이 시점의 v 는 아직 메모리 주소를 갖지 못한 미할당 상태다." },

  2:  { answers: ["real, allocatable :: m(:,:)", "real, allocatable :: m(:, :)"],
        explanation: "real, allocatable :: m(:,:) 다. 콜론의 개수가 계수를 정하며, 이 개수는 나중에 바꿀 수 없다. 각 차원의 길이만 실행 중에 자유롭게 정할 수 있다." },

  3:  { answers: ["allocate(v(n))", "allocate(v(1:n))"],
        explanation: "allocate(v(n)) 이다. 하한을 생략하면 첨자가 1부터 n 까지 부여된다. 같은 뜻으로 allocate(v(1:n)) 이라 써도 된다. 소스를 고치지 않고 입력만 바꿔도 크기가 달라진다는 점이 정적 배열과의 결정적 차이다." },

  4:  { answers: ["deallocate(v)"],
        explanation: "deallocate(v) 다. 확보했던 메모리를 시스템에 반환한다. 빠뜨리면 프로그램이 도는 동안 메모리가 계속 낭비되는 메모리 누수가 생긴다." },

  5:  { answers: ["5"],
        explanation: "5다. read *, n 이 표준 입력에서 5를 받아 allocate(v(5)) 가 작동한다. echo 1000 으로 바꾸면 재컴파일 없이 길이 1000짜리 배열이 만들어진다." },

  6:  { answers: ["allocate(big(request), stat=ierr)"],
        explanation: "allocate(big(request), stat=ierr) 다. 할당에 성공하면 ierr 에 0이, 실패하면 0이 아닌 코드(gfortran 기준 5020 등)가 담긴다. 이어서 if (ierr /= 0) 으로 분기하면 프로그램을 안전하게 제어할 수 있다." },

  7:  { answers: ["1"],
        explanation: "곧바로 비정상 종료한다. Segmentation fault 나 Out of memory 메시지를 내며 제어권 없이 죽는다. 큰 메모리를 다루거나 크기를 사용자 입력·파일에서 받는 코드에서는 stat= 을 받는 습관을 들여야 한다." },

  8:  { answers: ["3"],
        explanation: "3이다. allocate(vals(3)) 로 요청한 크기가 그대로 반영된다. 이때 allocated(vals) 도 F 에서 T 로 바뀐다." },

  9:  { answers: ["if (allocated(vals)) deallocate(vals)"],
        explanation: "if (allocated(vals)) deallocate(vals) 다. 할당된 적이 없는 배열을 deallocate 하면 런타임 오류로 즉시 죽으므로, 상태를 먼저 확인하는 이 관용구를 외워 두는 것이 좋다." },

  10: { answers: ["if (.not. allocated(v)) allocate(v(n))"],
        explanation: "if (.not. allocated(v)) allocate(v(n)) 이다. 이미 할당된 변수에 다시 allocate 하면 Attempting to allocate already allocated variable 오류가 나므로, 상태를 뒤집어 확인한 뒤 할당한다." },

  11: { answers: ["u = [1.0, 2.0, 3.0, 4.0]"],
        explanation: "u = [1.0, 2.0, 3.0, 4.0] 이다. 좌변이 allocatable 이면 우변의 형상을 그대로 물려받아 자동으로 할당된다. allocate 를 부를 필요가 없다. 이것을 할당가능 대입이라 한다." },

  12: { answers: ["5"],
        explanation: "5다. w 는 처음 크기 2로 잡혔다가 원소 5개짜리를 대입받아 기존 메모리를 해제하고 크기 5로 다시 잡힌다. 이것이 자동 재할당이며 Fortran 2003 이후 표준이다." },

  13: { answers: ["allocate(collected(0))"],
        explanation: "allocate(collected(0)) 이다. 크기 0인 배열도 정상적인 할당 상태다. 몇 개를 모을지 미리 알 수 없을 때 여기서 시작해 하나씩 이어 붙인다." },

  14: { answers: ["collected = [collected, sq]"],
        explanation: "collected = [collected, sq] 다. 우변에서 기존 원소 전부와 sq 를 이어 붙인 임시 배열이 먼저 만들어지고, 자동 재할당으로 좌변이 한 칸 커지며 그 값이 들어간다. 다만 매번 전체를 복사하므로 대량에는 적합하지 않다." },

  15: { answers: ["10"],
        explanation: "10개다. 제곱이 짝수가 되려면 원래 수가 짝수여야 하므로 1부터 20까지 중 짝수 열 개가 걸린다. 값은 4, 16, 36, 64, 100, 144, 196, 256, 324, 400 이다." },

  16: { answers: [
          "allocate(xs(n+1), ys(n+1), xd(n+1), yd(n+1))",
          "allocate(xs(n + 1), ys(n + 1), xd(n + 1), yd(n + 1))"
        ],
        explanation: "allocate(xs(n+1), ys(n+1), xd(n+1), yd(n+1)) 이다. 쉼표로 나열하면 여러 배열을 한 문장에 할당할 수 있다. 해제도 deallocate(xs, ys, xd, yd) 처럼 한 번에 한다. 격자점이 n+1 개인 것은 0부터 n 까지 세기 때문이다." },

  17: { answers: ["2"],
        explanation: "두 번째 회차다. 첫 회차에서는 미할당 상태라 allocate 가 정상 작동하지만, 자동 해제는 반복문 끝이 아니라 프로그램 단위가 끝날 때 일어나므로 두 번째 회차에서 이미 할당된 변수를 또 할당하게 되어 Attempting to allocate already allocated variable 오류가 난다." },

  18: { answers: ["4"],
        explanation: "4분의 1이다. 오차가 1/n² 에 비례하므로 n 을 2배로 키우면 오차는 1/2² = 1/4 로 줄어든다. 로그-로그 그래프에서 기울기 −2인 직선으로 나타난다. 다만 단정밀도에서는 약 1e-6 부근에서 이 하강이 멈춘다." },

  /* ---------- 이론 ---------- */
  19: { answers: ["0"],
        explanation: "정적 배열은 컴파일 시점에 크기가 고정되지만, allocatable 배열은 계수만 고정되고 각 차원의 길이를 실행 시점에 정한다. 선언할 때 적은 콜론의 개수, 즉 계수는 나중에 바꿀 수 없다." },

  20: { answers: ["1"],
        explanation: "미할당(unallocated) 상태다. 메모리가 없으므로 이 상태에서 원소에 접근하거나 deallocate 하면 오류가 난다. 접근 전에 반드시 allocate 하거나 할당가능 대입으로 메모리를 확보해야 한다." },

  21: { answers: ["logical", "논리형", "logical(논리형)"],
        explanation: "logical 이다. 배열이 할당돼 있으면 .true., 아니면 .false. 를 돌려준다. 재할당 전 해제 여부를 판단하거나 미할당 접근을 피하는 점검에 쓴다. 관용구는 if (allocated(a)) deallocate(a) 다." },

  22: { answers: ["f t f"],
        explanation: "F T F 다. 할당 전에는 미할당이라 F, allocate 후에는 T, deallocate 후에는 다시 F 가 된다. 논리값은 화면에 T 와 F 로 찍힌다." },

  23: { answers: ["1"],
        explanation: "할당이 실패할 때 stat= 변수에 0이 아닌 값이 담겨, 프로그램을 멈추지 않고 분기 처리할 수 있기 때문이다. stat 을 생략하면 할당 실패 시 프로그램이 곧바로 비정상 종료한다." },

  24: { answers: ["0"],
        explanation: "지역 allocatable 변수는 선언된 프로그램 단위가 끝날 때 자동으로 해제된다. 반면 포인터로 잡은 동적 메모리는 자동 해제되지 않으므로 사용이 끝나면 직접 deallocate 해야 한다. 그러지 않으면 회수되지 않는 낭비된 메모리로 남는다." },

  25: { answers: ["0"],
        explanation: "형상은 호출 측의 실인수에서 가져온다. 더미 인수의 차원을 x(:) 또는 x(:,:) 처럼 콜론으로 선언하면 호출할 때마다 실인수의 형상에 자동으로 맞춰진다. 덕분에 길이가 다른 배열을 같은 프로시저에 넘길 수 있다." },

  26: { answers: ["0"],
        explanation: "프로시저 안에서 크기가 인수나 다른 값으로 정해지는 임시 지역 배열이다. 예를 들어 real :: work(size(x)) 처럼 쓴다. 프로시저에 들어올 때 자동으로 생기고 나갈 때 사라지므로 allocate·deallocate 를 직접 쓰지 않는다." },

  27: { answers: ["1"],
        explanation: "호출하는 쪽이 그 프로시저의 명시적 인터페이스(explicit interface)를 알고 있어야 한다. 같은 프로그램 단위 안의 contains 프로시저나 모듈 프로시저는 인터페이스가 자동으로 보이므로 조건을 만족한다." },

  28: { answers: ["3"],
        explanation: "3이다. 미할당이던 u 가 우변 [2.0, 4.0, 6.0] 의 형상에 맞춰 크기 3으로 자동 할당된다. allocate 를 부르지 않아도 된다." },

  29: { answers: ["0"],
        explanation: "좌변이 미할당이면 우변의 형상으로 할당되고, 할당돼 있는데 형상이 다르면 자동으로 해제된 뒤 새 형상으로 재할당되며, 형상이 같으면 재할당 없이 값만 복사된다. 세 번째 경우에 굳이 다시 잡지 않는 것이 성능상의 배려다." },

  30: { answers: ["4"],
        explanation: "4다. w 는 처음 크기 2로 할당되었다가 크기 4짜리를 대입받아 자동 재할당된다. 크기를 줄이는 방향으로도 똑같이 동작한다." },

  31: { answers: ["1"],
        explanation: "정적 배열에는 자동 재할당이 적용되지 않는다. 형상이 다르면 오류이며 gfortran 은 컴파일 단계에서 Different shape for array assignment 로 잡는다. 자동 재할당은 오직 좌변이 allocatable 일 때만 작동한다." },

  32: { answers: ["3 1 4 9", "3 : 1 4 9"],
        explanation: "크기는 3, 값은 1 4 9 다. 크기 0에서 시작해 매 회차 k*k 를 이어 붙이므로 1, 4, 9 가 차례로 쌓인다. v = [v, k*k] 한 줄이 확장과 재할당을 모두 처리한다." },

  33: { answers: ["0"],
        explanation: "p 는 미할당 상태가 되고, q 는 p 가 갖고 있던 메모리와 내용을 그대로 넘겨받아 할당 상태가 된다. 값을 복사하는 것이 아니라 소유권만 옮기므로 큰 배열에서도 비용이 거의 들지 않는다." },

  34: { answers: ["0"],
        explanation: "[v, x] 는 매번 기존 원소 전부를 복사해 한 칸 더 큰 새 배열을 만들므로, 원소를 n개 추가하면 비용이 n²에 비례한다. 대량의 원소를 모을 때는 용량을 두 배씩 키우고 move_alloc 으로 옮기는 방식을 쓴다. 그러면 추가당 평균 비용이 상수에 가까워진다." },

  35: { answers: ["5"],
        explanation: "5다. c = [a, b] 는 크기 3과 2를 이어 붙여 크기 5인 배열을 만들고, 좌변 c 가 자동으로 그 형상에 맞춰 할당된다." },

  36: { answers: ["1"],
        explanation: "단정밀도는 유효숫자가 약 7자리뿐이어서, 표본을 더 잘게 나눠도 합산 과정에서 생기는 반올림 오차가 적분 오차보다 커지는 지점이 온다. 그 뒤로는 n 을 키워도 정확도가 좋아지지 않고 오히려 들쭉날쭉해진다. 배정밀도를 쓰면 이 한계가 훨씬 아래로 내려간다." },

  37: { answers: ["1"],
        explanation: "m 은 계수 2로 선언되었으므로 allocate 에서도 두 차원의 길이를 모두 줘야 한다. 1차원으로 할당하면 선언과 사용처의 계수가 어긋나며, 이 오류는 컴파일 단계에서 Rank mismatch in array reference 로 잡힌다. 올바른 형태는 allocate(m(n, n)) 이다." },

  38: { answers: ["1"],
        explanation: "첫 회차에서 할당된 배열이 해제되지 않은 채 회차가 끝나므로, 두 번째 회차의 allocate 가 이미 할당된 변수를 또 할당하는 셈이 되어 Attempting to allocate already allocated variable 런타임 오류가 난다. 자동 해제는 반복문이 아니라 프로그램 단위 종료 시 일어나기 때문이다. 회차 끝에서 deallocate 를 부르거나, 할당가능 대입으로 바꿔 재할당을 자동으로 맡기면 된다." },

  /* ---------- 실습 ---------- */
  39: { answers: ["allocate(v(-2:2))"],
        explanation: "allocate(v(-2:2)) 다. allocate(v(n)) 은 하한 1을 가정하지만, 이렇게 하한과 상한을 모두 줄 수도 있다. 중심을 0으로 두는 격자에서 유용하다." },

  40: { answers: ["5"],
        explanation: "5다. 하한이 음수여도 길이는 ubound - lbound + 1 = 2 - (-2) + 1 = 5 로 계산된다. lbound 는 -2, ubound 는 2 를 돌려준다." },

  41: { answers: ["allocate(x(2), y(3), z(4))"],
        explanation: "allocate(x(2), y(3), z(4)) 다. allocate 와 deallocate 는 쉼표로 여러 배열을 한 번에 처리할 수 있다. 해제도 deallocate(x, y, z) 로 한 줄이면 된다." },

  42: { answers: ["real, intent(in) :: x(:)"],
        explanation: "real, intent(in) :: x(:) 다. 콜론으로 선언한 가정형상 더미는 호출마다 실인수의 형상을 물려받으므로, 길이가 4인 배열과 2인 배열을 같은 서브루틴에 넘길 수 있다. intent(in) 은 읽기 전용이라는 뜻이다." },

  43: { answers: ["1"],
        explanation: "1이다. 가정형상 배열의 하한은 호출 측 형상과 무관하게 언제나 1부터 시작한다. 호출한 쪽 배열의 하한이 -2 였더라도 프로시저 안에서는 1이 된다는 점을 기억해야 한다." },

  44: { answers: ["integer :: work(size(x))"],
        explanation: "integer :: work(size(x)) 다. 크기가 인수로부터 정해지는 자동 배열이며, 프로시저에 들어올 때 생기고 나갈 때 사라진다. allocate 와 deallocate 를 직접 부를 필요가 없다." },

  45: { answers: ["real, intent(in) :: a(:,:)", "real, intent(in) :: a(:, :)"],
        explanation: "real, intent(in) :: a(:,:) 다. 가정형상은 2차원에도 그대로 적용되며, 이렇게 받으면 shape 나 sum 같은 배열 내장 함수를 프로시저 안에서 그대로 쓸 수 있다." },

  46: { answers: ["u = [(i*i, i = 1, 6)]", "u = [(i * i, i = 1, 6)]", "u = [(i**2, i = 1, 6)]"],
        explanation: "u = [(i*i, i = 1, 6)] 이다. 배열 생성자 안에 묵시적 do 를 넣으면 그 결과 형상에 맞춰 좌변이 자동 할당된다. 결과는 크기 6인 배열 1 4 9 16 25 36 이다." },

  47: { answers: ["3"],
        explanation: "3이다. 자동 재할당은 크기를 늘릴 때뿐 아니라 줄일 때도 일어난다. 크기 5였던 메모리가 해제되고 크기 3으로 다시 잡힌다." },

  48: { answers: ["call move_alloc(src, dst)"],
        explanation: "call move_alloc(src, dst) 다. 함수가 아니라 서브루틴이므로 call 로 부른다. src 의 메모리를 복사 없이 dst 로 옮기며, 큰 배열을 다룰 때 복사 비용을 아낄 수 있다." },

  49: { answers: ["f t"],
        explanation: "F T 다. 소유권이 넘어갔으므로 src 는 미할당(F), dst 는 할당(T) 상태가 된다. 용량을 두 배로 키우며 배열을 확장할 때 이 함수가 핵심 역할을 한다." },

  50: { answers: [
          "x(i+1) = -1.0 + 2.0 * real(i) / real(n)",
          "x(i + 1) = -1.0 + 2.0 * real(i) / real(n)"
        ],
        explanation: "x(i+1) = -1.0 + 2.0 * real(i) / real(n) 이다. 왼쪽 끝 -1.0 에서 시작해 전체 길이 2를 n 등분한 간격을 i 만큼 더한다. i 와 n 을 real 로 바꾸지 않으면 정수 나눗셈이 되어 격자가 뭉개진다. 배열 첨자가 1부터라서 x(i+1) 에 담는다." }
};
