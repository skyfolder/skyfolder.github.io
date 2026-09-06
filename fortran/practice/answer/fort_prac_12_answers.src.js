/* ============================================================
   answer/fort_prac_12_answers.src.js — 12장 평문 정답 (강사용 원본)

   ★ 이 파일은 GitHub에 올리지 마세요. .gitignore 로 막아 두었습니다.
   ★ 고친 뒤에는 answer/build_12.html 을 열어 정답 파일을 다시 만드세요.
   ============================================================ */

window.ANSWER_SOURCE = {

  /* ---------- 복습 ---------- */
  1:  { answers: ["use constants_mod, only: real64, pi, deg_to_rad"],
        explanation: "use constants_mod, only: real64, pi, deg_to_rad 다. only 를 붙이면 나열한 이름만 들어오므로 의존 관계가 코드에 그대로 드러나고 다른 모듈과의 이름 충돌 위험도 줄어든다. use 문은 반드시 implicit none 보다 위에 온다." },

  2:  { answers: [
          "real(real64), parameter :: two_pi = 2.0_real64 * pi",
          "real(real64), parameter :: two_pi = pi * 2.0_real64"
        ],
        explanation: "real(real64), parameter :: two_pi = 2.0_real64 * pi 다. 명명 상수의 초기식에는 이미 값을 아는 다른 명명 상수를 쓸 수 있고, 계산은 컴파일 시점에 끝난다." },

  3:  { answers: ["real(real64), parameter :: deg_to_rad = pi / 180.0_real64"],
        explanation: "real(real64), parameter :: deg_to_rad = pi / 180.0_real64 다. 180 을 정수로 적으면 실수와 정수가 섞이므로 180.0_real64 로 적는다. 이 상수를 쓰면 각도 변환을 곱셈 한 번으로 끝낼 수 있다." },

  4:  { answers: ["public :: real64"],
        explanation: "public :: real64 다. 다른 모듈에서 가져온 이름도 다시 공개할 수 있다. 이렇게 해 두면 호출하는 프로그램이 iso_fortran_env 를 따로 use 하지 않고 constants_mod 하나만 참조해도 real64 를 쓸 수 있어 코드가 간결해진다." },

  5:  { answers: ["use geo_constants, only: geo_pi => pi"],
        explanation: "use geo_constants, only: geo_pi => pi 다. 화살표의 방향은 지역에서_쓸_새_이름 => 모듈_안의_원래_이름 이다. 순서를 뒤집지 않도록 주의한다." },

  6:  { answers: ["use phys_constants, only: phys_pi => pi, c_light"],
        explanation: "use phys_constants, only: phys_pi => pi, c_light 다. 한 only 목록 안에서 이름을 바꿀 것과 그대로 쓸 것을 쉼표로 섞어 적을 수 있다." },

  7:  { answers: ["0"],
        explanation: "순환 참조가 되어 Cannot open module file 'b_mod.mod' for reading 오류가 난다. 컴파일러는 참조하는 상대 모듈의 .mod 파일이 먼저 만들어져 있어야 하는데, 서로를 기다리는 교착 상태가 되기 때문이다. 두 모듈이 공통으로 쓰는 상수나 자료형을 제3의 모듈로 빼고 양쪽이 그것을 use 하면 풀린다." },

  8:  { answers: ["private"],
        explanation: "private 다. 모듈 선언부 첫머리에 이 한 줄을 두면 그 아래 선언되는 모든 이름의 기본 접근성이 비공개로 바뀐다. 그다음 public :: ... 로 공개할 것만 골라 열면, 나중에 새 변수를 추가하다 접근성 지정을 빠뜨려도 밖으로 새지 않는다." },

  9:  { answers: [
          "public :: reset_counter, increment, current_count",
          "public :: increment, reset_counter, current_count"
        ],
        explanation: "public :: reset_counter, increment, current_count 다. 외부는 이 세 통로만 쓸 수 있고 내부 변수 count 에는 손댈 수 없다. 이것이 캡슐화의 실질적인 형태다." },

  10: { answers: [
          "integer, intent(in), optional :: step",
          "integer, optional, intent(in) :: step"
        ],
        explanation: "integer, intent(in), optional :: step 이다. optional 이 붙으면 호출할 때 생략할 수 있고, 프로시저 안에서는 present(step) 으로 전달 여부를 확인한 뒤에만 써야 한다." },

  11: { answers: ["7"],
        explanation: "7이다. 초기화로 0이 되고, 인수를 생략한 increment() 가 두 번 각각 1씩, increment(step=5) 가 5를 더해 1 + 1 + 5 = 7 이 된다." },

  12: { answers: ["value = count"],
        explanation: "value = count 다. count 는 비공개 모듈 변수지만 같은 모듈의 프로시저는 호스트 결합으로 그대로 볼 수 있다. 외부는 이 함수를 거쳐야만 값을 읽을 수 있다." },

  13: { answers: ["real(real64) :: total = 0.0_real64"],
        explanation: "real(real64) :: total = 0.0_real64 다. 모듈 변수의 초기화식은 프로그램 적재 시 한 번만 적용되고, 그 뒤로는 프로시저를 몇 번 부르든 값이 그대로 이어진다. 이 성질 덕분에 누적 통계가 가능하다." },

  14: { answers: ["total_sq = total_sq + x * x", "total_sq = total_sq + x*x"],
        explanation: "total_sq = total_sq + x * x 다. 평균과 분산을 나중에 한 번에 구하려고 합계와 제곱합을 함께 들고 다닌다. 값을 통째로 저장하지 않아도 통계가 갱신되는 것이 이 방식의 장점이다." },

  15: { answers: ["2", "2.0", "2.0000"],
        explanation: "2다. 평균이 4이므로 편차 제곱합은 4 + 0 + 0 + 4 + 0 = 8 이고, 자유도 n − 1 = 4 로 나누면 2가 된다. 출력은 f8.4 서식이라 2.0000 으로 찍힌다." },

  16: { answers: ["x(i) = a + (b - a) * real(i - 1, real64) / real(n - 1, real64)"],
        explanation: "x(i) = a + (b - a) * real(i - 1, real64) / real(n - 1, real64) 다. i − 1 을 n − 1 로 나누면 0부터 1까지가 나오므로 양 끝이 정확히 a 와 b 가 된다. 두 정수를 반드시 실수로 변환해야 정수 나눗셈을 피할 수 있다." },

  17: { answers: [
          "c(i) = c(i - 1) + 0.5_real64 * (y(i) + y(i - 1)) * (x(i) - x(i - 1))",
          "c(i) = c(i-1) + 0.5_real64 * (y(i) + y(i-1)) * (x(i) - x(i-1))"
        ],
        explanation: "c(i) = c(i - 1) + 0.5_real64 * (y(i) + y(i - 1)) * (x(i) - x(i - 1)) 다. 앞까지의 누적값에 사다리꼴 하나의 넓이를 더해 나간다. 윗변과 아랫변이 y(i-1) 과 y(i) 이고 높이가 x 의 간격이다." },

  18: { answers: ["1"],
        explanation: "Name 'pi' at (1) is an ambiguous reference 컴파일 오류가 난다. 두 모듈이 같은 이름을 공개하고 있어 컴파일러가 어느 쪽에서 온 것인지 결정하지 못한다. only 와 => 로 서로 다른 지역 이름을 붙이면 해결된다." },

  /* ---------- 이론 ---------- */
  19: { answers: ["0"],
        explanation: "모듈은 그 자체로 실행되지 않는 재사용 부품이다. 시작점이 되는 program 과 달리 모듈은 다른 프로그램 단위가 use 로 가져다 쓰는 상수·자료형·변수·프로시저의 묶음이며, 실행은 언제나 program 에서 시작한다." },

  20: { answers: ["0"],
        explanation: "only 를 붙이면 나열한 이름만 현재 범위로 들어오고 나머지 공개 이름은 가져오지 않는다. 의존 관계가 코드에 분명히 드러나고 이름 충돌 위험이 줄며, 어떤 이름이 어느 모듈에서 왔는지 추적하기도 쉬워진다." },

  21: { answers: ["0"],
        explanation: "use 문이 implicit none 뒤에 와서 거부된다. gfortran 은 USE statement at (1) cannot follow IMPLICIT NONE statement at (2) 를 낸다. use → implicit none → 나머지 선언 순서를 지키면 된다." },

  22: { answers: ["=>"],
        explanation: "=> 다. use 모듈, only: 새이름 => 원래이름 형태로 쓴다. 서로 다른 모듈이 같은 이름을 공개해 충돌할 때 각각 다른 지역 이름을 붙여 해결한다." },

  23: { answers: ["6.283185"],
        explanation: "6.283185 다. 2π ≈ 6.283185307 이고 f10.6 서식이 소수 여섯 자리까지 반올림해 출력한다. 명명 상수의 초기식으로 다른 명명 상수를 쓸 수 있음을 보여주는 예다." },

  24: { answers: ["0"],
        explanation: "기본은 공개(public)다. 별도 지정이 없으면 모듈의 모든 이름이 use 로 보인다. 그래서 캡슐화하려면 private 를 적어 기본을 직접 닫아야 한다." },

  25: { answers: ["0"],
        explanation: "모듈 첫머리에서 private 로 기본을 닫고, 밖에 보여 줄 것만 public :: ... 로 연다. 이렇게 해 두면 나중에 내부 변수나 함수를 추가하면서 접근성 지정을 실수로 빠뜨려도 밖으로 노출되지 않는다." },

  26: { answers: ["1"],
        explanation: "컴파일 오류가 난다. gfortran 은 Symbol 'count' at (1) has no IMPLICIT type 를 낸다. count 가 private 라 use 로 가져와지지 않으므로 프로그램 입장에서는 아예 선언되지 않은 이름이고, implicit none 아래에서 형이 없는 기호로 거부되는 것이다." },

  27: { answers: ["0"],
        explanation: "내부 표현을 나중에 바꿔도, 예를 들어 한 변수를 두 변수의 조합으로 교체해도, 공개 프로시저의 인터페이스만 그대로면 외부 코드를 고칠 필요가 없다. 또한 외부가 내부 규칙을 어기고 변수를 임의로 바꾸는 사고도 막는다." },

  28: { answers: ["12"],
        explanation: "12다. 인수 없는 inc() 가 1, inc(s=10) 이 10, 다시 inc() 가 1을 더해 0 + 1 + 10 + 1 = 12 가 된다. 모듈 변수가 호출 사이에 값을 유지하기 때문에 누적이 이어진다." },

  29: { answers: ["0"],
        explanation: "유지한다. 모듈 변수는 명시적 save 없이도 프로그램이 끝날 때까지 값을 유지하며, 이를 암묵적 save 성질이라 한다. 번호 발급기나 누적 통계처럼 상태를 들고 다니는 설계가 가능한 근거다." },

  30: { answers: ["0"],
        explanation: "contains 는 모듈의 명세부(자료형·상수·모듈 변수 선언)와 프로시저부를 가르는 경계다. 위쪽에 선언한 모듈 변수는 아래쪽 모든 프로시저가 호스트 결합으로 공유하므로 인수로 주고받을 필요가 없다." },

  31: { answers: ["12"],
        explanation: "12다. 같은 모듈 변수 s 에 3, 4, 5 가 차례로 누적되어 3 + 4 + 5 = 12 가 된다. 프로시저를 나갔다 들어와도 값이 사라지지 않는다는 점이 핵심이다." },

  32: { answers: ["1", "한 번"],
        explanation: "한 번만 적용된다. 초기화식은 프로그램 적재 시 한 번 실행될 뿐, 프로시저를 호출할 때마다 다시 0 으로 돌아가지 않는다. 값을 다시 0 으로 만들려면 직접 만든 초기화 루틴을 호출해야 한다." },

  33: { answers: ["0"],
        explanation: "모듈 변수가 첫 집합의 합계와 개수를 그대로 들고 있어서 두 번째 집합이 그 위에 누적되고, 결과적으로 두 집합을 합친 평균이 나온다. 문법은 완전히 옳으므로 컴파일러는 이 오류를 잡지 못한다. 두 번째 집합 앞에서 반드시 초기화 루틴을 불러야 한다." },

  34: { answers: ["0"],
        explanation: "인터페이스와 구현을 분리하는 것이 목적이다. 모듈에는 프로시저의 인터페이스만 두고 본문은 서브모듈에 둔다. 본문만 고칠 때 그 모듈을 use 하는 파일들을 다시 컴파일하지 않아도 되므로 큰 프로젝트의 재컴파일 부담이 줄어든다." },

  35: { answers: ["0"],
        explanation: "짧은 형태는 인수와 결과의 선언을 생략하고 모듈 인터페이스에 선언된 것을 그대로 물려받는다. 긴 형태는 인터페이스를 본문에서 한 번 더 그대로 적는다. 둘의 동작은 같고 본문의 간결함만 다르다." },

  36: { answers: ["0"],
        explanation: "접근할 수 있다. private 는 모듈 밖에서의 접근을 막을 뿐이고, 서브모듈은 부모 모듈의 일부로 취급되어 그 명세부 항목을 호스트 결합으로 모두 본다. 따라서 부모의 private 모듈 변수나 상수도 서브모듈 본문에서 그대로 쓸 수 있다." },

  37: { answers: ["0"],
        explanation: "모듈과 program 을 한 파일에 두면 그 모듈을 다른 프로그램과 함께 컴파일할 때 program 이 둘이 되어 충돌한다. 모듈만 담은 파일로 분리해 -c 로 먼저 컴파일해 두면 여러 프로그램이 그 오브젝트를 링크해 재사용할 수 있다." },

  38: { answers: ["0"],
        explanation: "모듈 안의 프로시저는 명시적 인터페이스를 자동으로 갖기 때문이다. use 만 하면 컴파일러가 그 프로시저의 인수 개수·형·결과를 이미 알고 있어 호출을 검사한다. 외부 프로시저는 이 정보가 없어 인터페이스 블록으로 손수 알려 주어야 했지만, 모듈은 그 수고를 없애 준다." },

  /* ---------- 실습 ---------- */
  39: { answers: ["integer, parameter :: max_level = 255"],
        explanation: "integer, parameter :: max_level = 255 다. 상수나 자료형만 담은 모듈은 contains 가 없어도 되며 실제로 흔하다. use 한 줄이면 그 이름이 프로그램으로 들어온다." },

  40: { answers: ["use phys_mod, only: real64, g_earth, g_mars"],
        explanation: "use phys_mod, only: real64, g_earth, g_mars 다. 가져오지 않은 g_moon 은 프로그램에서 아예 보이지 않는다. 필요한 것만 명시하면 이 파일이 무엇에 의존하는지 한눈에 드러난다." },

  41: { answers: ["use mathx_mod, only: real64, sq => square"],
        explanation: "use mathx_mod, only: real64, sq => square 다. 이름 변경은 상수뿐 아니라 프로시저 이름에도 쓸 수 있다. 지역에서 쓰기 편한 짧은 이름으로 바꿔 부를 수 있다." },

  42: { answers: ["v = hidden"],
        explanation: "v = hidden 이다. hidden 은 private 라 외부에서 직접 닿을 수 없지만, 같은 모듈의 프로시저는 호스트 결합으로 그대로 본다. 외부는 이 조회 함수라는 통로로만 값을 얻는다." },

  43: { answers: ["integer, private :: internal = 2"],
        explanation: "integer, private :: internal = 2 다. 접근성을 선언문에 속성으로 직접 붙이는 형태이며, 문장 형태(private 한 줄 + public 목록)와 함께 쓸 수 있다. 이렇게 숨긴 값도 같은 모듈의 프로시저는 자유롭게 쓴다." },

  44: { answers: ["100"],
        explanation: "100 이다. set_level 이 입력을 0~100 범위로 강제하므로 150 을 넣어도 100 으로 잘린다. level 이 공개되어 직접 대입할 수 있었다면 이 보호가 무너진다는 점이 캡슐화의 실질적 이점을 보여준다." },

  45: { answers: ["3"],
        explanation: "3이다. hit() 를 두 번 불러 hits 가 2가 되었고, misses_view(5) 는 전체 5에서 2를 빼 3을 돌려준다. 두 프로시저가 같은 모듈 변수를 공유 통로로 쓰는 모습이다." },

  46: { answers: ["last_id = last_id + 1"],
        explanation: "last_id = last_id + 1 이다. 초기화식 = 0 은 적재 시 한 번만 적용되므로 부를 때마다 값이 이어서 증가한다. 그래서 1, 2, 3 이 차례로 발급된다." },

  47: { answers: ["88"],
        explanation: "88 이다. 새 점수가 기존 최고보다 클 때만 갱신하므로 42 → 88 로 올라간 뒤 60 이 들어와도 바뀌지 않는다. 상태를 모듈 변수가 들고 다니는 전형적인 예다." },

  48: { answers: ["submodule (area_mod) area_impl", "submodule(area_mod) area_impl"],
        explanation: "submodule (area_mod) area_impl 이다. 괄호 안에 부모 모듈 이름을 적고 그 뒤에 서브모듈 이름을 붙인다. 부모 모듈에는 interface 블록으로 인터페이스만 두고 본문은 여기에 둔다." },

  49: { answers: ["module procedure cube_volume"],
        explanation: "module procedure cube_volume 이다. 짧은 형태이므로 인수 side 와 결과 v 를 다시 선언하지 않고 모듈 인터페이스의 선언을 그대로 물려받는다. 닫을 때는 end procedure cube_volume 으로 적는다." },

  50: { answers: ["180.00", "180.0", "180"],
        explanation: "180.00 이다. 200 × (1 − 0.10) = 180. rate 는 부모 모듈에서 private 로 선언되어 외부에는 공개되지 않지만, 서브모듈은 모듈의 일부라서 본문에서 그대로 볼 수 있다." }
};
