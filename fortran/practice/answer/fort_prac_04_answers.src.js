/* ============================================================
   answer/fort_prac_04_answers.src.js — 4장 평문 정답 (강사용 원본)

   ★ 이 파일은 GitHub에 올리지 마세요. .gitignore 로 막아 두었습니다.
   ★ 고친 뒤에는 answer/build_04.html 을 열어 정답 파일을 다시 만드세요.
   ============================================================ */

window.ANSWER_SOURCE = {

  /* ---------- 복습 ---------- */
  1:  { answers: ["3"],
        explanation: "3이다. 17 / 5 의 수학적 값은 3.4 지만, 정수끼리의 나눗셈은 소수부를 반올림 없이 버려 몫 3만 남긴다. 나머지가 필요하면 mod(a, b) 로 따로 구한다." },

  2:  { answers: ["mod(a, b)"],
        explanation: "mod(a, b) 다. Fortran에는 나머지를 구하는 기호 연산자가 없어서 내장 함수를 쓴다. a = 17, b = 5 이면 2가 나온다. 부호 규칙이 다른 modulo 도 있다." },

  3:  { answers: ["289"],
        explanation: "289다. 17 × 17 = 289. 거듭제곱 연산자 ** 는 * 나 / 보다 우선순위가 높다." },

  4:  { answers: [
          "is_adult = age >= 19",
          "is_adult = (age >= 19)",
          "is_adult = age .ge. 19"
        ],
        explanation: "is_adult = age >= 19 다. 괄호를 붙여 is_adult = (age >= 19) 로 써도 좋고 읽기에도 낫다. 관계식 자체가 이미 하나의 논리값이므로 if 문으로 감쌀 필요가 없다. 코드가 한 줄로 줄고 의미도 또렷해진다." },

  5:  { answers: ["can_enter = is_adult .and. has_ticket", "can_enter = has_ticket .and. is_adult"],
        explanation: "can_enter = is_adult .and. has_ticket 이다. .and. 는 둘 다 참일 때만 참이다. 논리 연산자는 양옆에 마침표를 반드시 붙인다." },

  6:  { answers: ["/=", ".ne."],
        explanation: "/= 다. C나 파이썬의 != 와 다르다는 점을 꼭 기억한다. 옛 표기로는 .ne. 이며 레거시 코드에서 자주 만난다." },

  7:  { answers: ["14"],
        explanation: "14다. 곱셈이 덧셈보다 우선하므로 3 * 4 가 먼저 계산된다. 덧셈을 먼저 하려면 (2 + 3) * 4 처럼 괄호로 묶어야 하고, 그러면 20이 된다." },

  8:  { answers: ["512"],
        explanation: "512다. ** 는 오른쪽부터 묶이므로 2 ** (3 ** 2) = 2 ** 9 = 512 다. 왼쪽부터 묶어 (2 ** 3) ** 2 = 64 를 원한다면 괄호를 직접 써야 한다." },

  9:  { answers: ["-4"],
        explanation: "-4다. ** 가 단항 마이너스보다 우선순위가 높아 -(2 ** 2) 로 해석된다. 수학에서 −2² = −4 인 것과 같다. 4를 얻으려면 (-2) ** 2 로 괄호를 쳐야 한다." },

  10: { answers: ["(-2) ** 2", "(-2)**2"],
        explanation: "(-2) ** 2 다. 부호까지 괄호로 묶어야 −2 자체가 밑이 된다. 괄호가 없으면 -(2 ** 2) = -4 가 된다." },

  11: { answers: ["1.0", "1", "1.00000000"],
        explanation: "1.0 이다. / 는 왼쪽부터 묶이므로 (10.0 / 2.0) / 5.0 = 5.0 / 5.0 = 1.0 이다. ** 와 결합 방향이 반대라는 점을 함께 기억한다." },

  12: { answers: ["avg_right = real(total, real64) / real(count, real64)"],
        explanation: "avg_right = real(total, real64) / real(count, real64) 다. 나누기 전에 두 피연산자를 각각 변환해야 한다. 대입 대상이 실수라는 사실은 오른쪽 계산에 아무 영향을 주지 않는다. total / count 로 적으면 정수 나눗셈이 먼저 끝나 3.0 이 들어간다." },

  13: { answers: ["3.0", "3"],
        explanation: "3.0 이다. 괄호 안의 7 / 2 가 정수 나눗셈으로 먼저 3이 되고, 그 3이 실수로 변환된다. 3.5 를 얻으려면 real(7) / real(2) 처럼 나누기 전에 변환해야 한다." },

  14: { answers: [
          "disc = b**2 - 4.0_real64 * a * c",
          "disc = b ** 2 - 4.0_real64 * a * c",
          "disc = b**2 - 4.0_real64*a*c"
        ],
        explanation: "disc = b**2 - 4.0_real64 * a * c 다. ** 가 가장 먼저, 그다음 곱셈, 마지막에 뺄셈이 일어나므로 괄호 없이도 의도대로 계산된다. 리터럴 4 에 _real64 를 붙이지 않으면 그 자리에서 정밀도가 떨어진다." },

  15: { answers: ["x1 = (-b + sqrt(disc)) / (2.0_real64 * a)"],
        explanation: "x1 = (-b + sqrt(disc)) / (2.0_real64 * a) 다. 분모 전체를 괄호로 묶는 것이 핵심이다. 묶지 않으면 * 와 / 의 우선순위가 같아 왼쪽부터 계산되어, 분자를 2로 나눈 뒤 a 를 곱하는 엉뚱한 식이 된다." },

  16: { answers: ["r = sqrt(real(n))", "r = sqrt(real(n, real64))"],
        explanation: "r = sqrt(real(n)) 이다. sqrt 의 인수는 실수나 복소수여야 해서 정수를 그대로 넣으면 Error: 'x' argument of 'sqrt' intrinsic at (1) must be REAL or COMPLEX 가 난다. 실행 전에 컴파일러가 막아 주는, 그나마 다행인 오류다." },

  17: { answers: ["0.30000000000000004"],
        explanation: "0.30000000000000004 가 나온다. 0.1 과 0.2 는 2진수로 유한하게 떨어지지 않아 저장할 때 이미 근사값이 된다. IEEE 754 를 따르는 모든 언어의 공통 한계이며 Fortran의 결함이 아니다. 그래서 실수를 == 로 비교하면 안 된다." },

  18: { answers: [
          "f3 = exp(-x / 5.0_real64) * sin(x)",
          "f3 = exp(-x/5.0_real64) * sin(x)",
          "f3 = sin(x) * exp(-x / 5.0_real64)"
        ],
        explanation: "f3 = exp(-x / 5.0_real64) * sin(x) 다. 지수 감쇠 항이 곱해져 x 가 커질수록 진폭이 잦아든다. 5 를 정수로 적으면 배정밀도 x 와 섞이지만, 리터럴에 종류를 붙이는 습관을 들이는 편이 안전하다." },

  /* ---------- 이론 ---------- */
  19: { answers: ["1"],
        explanation: "3이다. 정수끼리의 / 는 몫만 남기고 소수부를 버린다. 3.5 를 원하면 피연산자를 실수로 만들어야 한다." },

  20: { answers: ["1"],
        explanation: "512다. ** 는 오른쪽 결합이므로 2 ** (3 ** 2) = 2 ** 9 = 512 다. 헷갈리면 괄호로 의도를 적는다." },

  21: { answers: ["1"],
        explanation: "-4다. ** 가 단항 마이너스보다 우선순위가 높아 -(2 ** 2) 로 계산된다. (-2) ** 2 = 4 를 원하면 괄호를 써야 한다." },

  22: { answers: ["3"],
        explanation: "** 다. 우선순위는 ** → * / → + - → 관계 → .not. → .and. → .or. 순이다. 산술이 모두 끝난 뒤에 비교가, 비교가 끝난 뒤에 논리 결합이 일어난다." },

  23: { answers: ["1"],
        explanation: "라디안이다. sin(90.0) 은 90도가 아니라 90라디안의 사인을 계산한다. 도를 쓰려면 pi/180 을 곱해 직접 변환해야 한다." },

  24: { answers: ["1"],
        explanation: "3.0 이다. 괄호 안의 7 / 2 가 정수 나눗셈으로 먼저 3이 되고, 그 3을 실수로 변환하므로 3.0 이다. real(7) / real(2) 처럼 나누기 전에 변환해야 3.5 가 나온다." },

  25: { answers: ["0"],
        explanation: ".not. 이다. 논리 연산자 사이의 우선순위는 .not. → .and. → .or. → .eqv./.neqv. 순이다." },

  26: { answers: ["0"],
        explanation: ".true. 다. .and. 가 .or. 보다 우선하므로 .true. .or. (.false. .and. .false.) 로 묶여 .true. .or. .false. = .true. 가 된다." },

  27: { answers: ["0"],
        explanation: "real(real64) 다. use iso_fortran_env, only: real64 뒤에 real(real64) 로 선언하거나 selected_real_kind 로 종류를 얻는다. real*8 은 컴파일러 확장이고, real(8) 은 종류 값 숫자를 직접 박는 비이식적 방식이다." },

  28: { answers: ["2"],
        explanation: "2, 3 이다. int 는 0 방향으로 버려 2, nint 는 가장 가까운 정수로 반올림해 3이 된다. 목적에 맞는 함수를 골라 써야 한다." },

  29: { answers: [".eq."],
        explanation: ".eq. 다. 옛 표기는 .eq.(같다), .ne.(같지 않다), .lt., .le., .gt., .ge. 이다. 현대 코드에서는 기호 표기만 쓰지만 레거시 코드를 읽으려면 알아 두어야 한다." },

  30: { answers: ["real(real64) :: x"],
        explanation: "real(real64) :: x 로 고친다. real*8 은 표준이 아닌 컴파일러 확장이라 -std= 옵션을 켜면 Nonstandard type declaration 오류가 난다. integer, parameter :: dp = real64 를 두고 real(dp) :: x 로 써도 좋다." },

  31: { answers: ["-3"],
        explanation: "-3이다. floor 는 작은 쪽, 즉 음의 무한대 방향으로 보낸다. 양수에서는 int 와 같아 보이지만 음수에서 갈린다. int(-2.1) 은 -2 다." },

  32: { answers: ["-2"],
        explanation: "-2다. ceiling 은 큰 쪽, 즉 양의 무한대 방향으로 보낸다. floor(-2.1) 의 -3 과 짝지어 기억하면 좋다." },

  33: { answers: ["modulo"],
        explanation: "modulo 다. mod 는 결과의 부호가 피제수를 따르고, modulo 는 제수를 따른다. 그래서 mod(-7, 3) = -1, modulo(-7, 3) = 2 로 갈린다. 주기적인 격자 인덱스를 0부터 p−1 안으로 감쌀 때는 modulo 가 알맞다." },

  34: { answers: ["abs(x - y) < tol", "abs(y - x) < tol"],
        explanation: "abs(x - y) < tol 이다. 실수는 == 로 비교하지 않고 차이의 절댓값을 허용 오차와 비교한다. 부동소수점 근사 때문에 논리적으로 참이어야 할 조건이 거짓으로 판정될 수 있기 때문이다." },

  35: { answers: ["1"],
        explanation: "거짓이다. 부동소수점 표현 한계 때문에 직접 == 비교는 직관과 어긋날 수 있다. 0.1 + 0.2 는 0.30000000000000004 라서 0.3 과 같지 않다고 판정된다. abs 차이를 허용 오차와 비교해야 한다." },

  36: { answers: ["1"],
        explanation: "거짓이다. ** 는 오른쪽부터 결합한다. 그래서 2**3**2 = 2**(3**2) = 512 다. 산술 연산자 중 유일하게 오른쪽 결합이다." },

  37: { answers: ["1"],
        explanation: "거짓이다. mod(-7, 3) = -1 로 부호가 피제수를 따르고, modulo(-7, 3) = 2 로 부호가 제수를 따른다. 두 인수가 모두 양수일 때만 결과가 일치한다." },

  38: { answers: ["2"],
        explanation: "2다. 5 / 2 는 정수 나눗셈이라 몫 2만 남는다. 같은 5와 2라도 5.0 / 2.0 으로 적으면 2.5 가 나온다. 자료형이 결과를 바꾼다." },

  /* ---------- 실습 ---------- */
  39: { answers: ["perimeter = 2.0_real64 * (width + height)"],
        explanation: "perimeter = 2.0_real64 * (width + height) 다. 괄호가 없으면 2.0 * width 가 먼저 계산되고 거기에 height 가 더해져 전혀 다른 값이 된다." },

  40: { answers: ["t"],
        explanation: "T 다. 7 과 10 은 같지 않으므로 참이다. 관계 연산의 결과는 언제나 logical 이고 화면에는 T 나 F 로 찍힌다." },

  41: { answers: ["go_picnic = sunny .and. warm", "go_picnic = warm .and. sunny"],
        explanation: "go_picnic = sunny .and. warm 이다. .and. 는 두 조건이 모두 참일 때만 참이므로, 맑지만 따뜻하지 않은 날에는 소풍을 가지 않는다." },

  42: { answers: ["20"],
        explanation: "20이다. 괄호가 최우선이라 2 + 3 이 먼저 계산되어 5 * 4 = 20 이 된다. 괄호가 없으면 곱셈이 먼저라 14 다." },

  43: { answers: ["256"],
        explanation: "256이다. ** 는 오른쪽부터 묶이므로 2 ** (2 ** 3) = 2 ** 8 = 256 이다. (2 ** 2) ** 3 으로 괄호를 치면 4 ** 3 = 64 가 된다." },

  44: { answers: ["f"],
        explanation: "F 다. 괄호 안의 a .or. b 는 참이지만 c 가 거짓이라 .and. 의 결과가 거짓이 된다. 괄호 없이 a .or. b .and. c 로 쓰면 .and. 가 먼저 묶여 결과가 T 로 바뀐다." },

  45: { answers: ["average = real(sum_score, real64) / real(n, real64)"],
        explanation: "average = real(sum_score, real64) / real(n, real64) 다. sum_score = 17, n = 4 이면 4.25 가 나온다. 변환 없이 sum_score / n 으로 적으면 정수 나눗셈이 되어 4만 남는다." },

  46: { answers: ["-3"],
        explanation: "-3이다. nint 는 가장 가까운 정수로 반올림하므로 -2.7 은 -3 이 된다. 같은 값에서 int 는 0 방향으로 버려 -2, floor 는 -3, ceiling 은 -2 다. 음수에서 네 함수의 차이가 또렷하게 갈린다." },

  47: { answers: ["single = real(i, real32) / 3.0_real32"],
        explanation: "single = real(i, real32) / 3.0_real32 다. i = 1 이면 0.333333343 이 나온다. 같은 계산을 real64 로 하면 0.33333333333333331 까지 나온다. 변환할 때 종류를 지정하면 계산 전체의 정밀도가 달라진다." },

  48: { answers: ["3.0", "3"],
        explanation: "3.0 이다. log10 은 상용로그이므로 10을 세 번 곱해 1000이 되는 것을 그대로 알려 준다. 참고로 log 는 자연로그라서 log(exp(1.0)) 은 1이 된다." },

  49: { answers: ["rad = deg * pi / 180.0_real64"],
        explanation: "rad = deg * pi / 180.0_real64 다. * 와 / 는 우선순위가 같아 왼쪽부터 계산되므로 (deg * pi) / 180 이 되어 의도대로 맞는다. pi 는 매직 넘버로 흩뿌리지 않고 parameter 로 한 번만 선언한다." },

  50: { answers: ["2"],
        explanation: "2다. modulo 는 결과의 부호가 제수를 따르므로 -8 을 5로 나눈 나머지를 0 이상 5 미만 범위로 감싸 2를 준다. 같은 값에서 mod(-8, 5) 는 피제수의 부호를 따라 -3 이다." }
};
