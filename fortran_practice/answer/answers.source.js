/* ============================================================
   answer/answers.source.js — 평문 정답 (강사용 원본)

   ★ 이 파일은 GitHub에 올리지 마세요. .gitignore 로 막아 두었습니다.
   ★ 정답을 고친 뒤에는 answer/build.html 을 열어 answers.js 를 다시 만드세요.

   answers : 인정할 답 목록. 하나라도 맞으면 정답 처리합니다.
             choice 문제는 정답 보기의 번호(0부터)를 문자열로 적습니다.
   explanation : 채점 뒤 학생에게 보여 줄 해설.
   ============================================================ */

window.ANSWER_SOURCE = {

  /* ---------- 복습 ---------- */
  1:  { answers: ["%%writefile f2c.f90"],
        explanation: "정답은 %%writefile f2c.f90 이다. Colab 셀의 첫 줄에 두면 그 아래 내용이 파일로 저장된다. 저장만 할 뿐 컴파일은 하지 않으므로 다음 셀에서 !gfortran 으로 따로 컴파일한다." },

  2:  { answers: ["0"],
        explanation: "1열에 C, *, ! 중 하나가 오면 그 줄 전체가 주석이다. 고정형식은 칸 위치가 곧 문법이라서 1열이 주석 전용 자리로 예약되어 있다." },

  3:  { answers: ["6"],
        explanation: "6열이다. 1열은 주석 표시, 1~5열은 문장 라벨, 6열은 줄잇기, 7~72열이 문장 본문이고 73열부터는 무시된다." },

  4:  { answers: ["42"],
        explanation: "42가 출력된다. 6열의 & 때문에 total = 21 + 21 이 한 문장으로 이어진다." },

  5:  { answers: ["0"],
        explanation: "Non-numeric character in statement label 이다. .f 로 저장하면 고정형식으로 읽혀 앞쪽 열을 라벨 자리로 해석하는데, 거기에 글자가 들어 있으니 라벨이 아니라고 항의하는 것이다. 이 메시지가 보이면 확장자를 .f90 으로 바꾸면 된다." },

  6:  { answers: ["integer :: hours, minutes, seconds, total"],
        explanation: "integer :: hours, minutes, seconds, total 이다. 같은 자료형이면 쉼표로 나란히 선언한다. :: 는 속성을 함께 쓸 때 필수이고, 없어도 동작하지만 현대 코드에서는 항상 붙인다." },

  7:  { answers: ["total = hours * minutes * seconds"],
        explanation: "total = hours * minutes * seconds 이다. 왼쪽이 받는 변수, 오른쪽이 계산식인 대입문의 기본 형태다." },

  8:  { answers: ["86400"],
        explanation: "86400 이다. 24 × 60 × 60 = 86400. 세 값이 모두 정수이므로 결과도 정수로 나온다." },

  9:  { answers: ["a = 1; b = 2; c = 3"],
        explanation: "a = 1; b = 2; c = 3 이다. 세미콜론으로 한 줄에 여러 문장을 넣을 수 있다. 다만 남용하면 가독성이 떨어지므로 권장하지는 않는다." },

  10: { answers: ["6"],
        explanation: "6이다. 줄 끝의 & 가 다음 줄의 c 를 같은 문장으로 이어 붙여 a + b + c = 1 + 2 + 3 이 계산된다." },

  11: { answers: ["&"],
        explanation: "& (앰퍼샌드)다. 끊는 줄의 끝에 붙인다. & 뒤에 꼬리 주석을 달아도 컴파일러가 주석을 먼저 걷어내므로 줄잇기는 그대로 동작한다." },

  12: { answers: ["15"],
        explanation: "15다. Fortran은 대소문자를 구분하지 않으므로 count 와 COUNT 는 같은 변수다. 10에 5를 더해 15가 된다. 다만 한 이름은 하나의 표기법으로 일관되게 쓰는 것이 좋다." },

  13: { answers: ["real :: fahrenheit, celsius"],
        explanation: "real :: fahrenheit, celsius 이다. 실수형은 real, 정수형은 integer 다." },

  14: { answers: [
          "celsius = (fahrenheit - 32.0) * 5.0 / 9.0",
          "celsius = (fahrenheit - 32.0) / 9.0 * 5.0",
          "celsius = 5.0 / 9.0 * (fahrenheit - 32.0)"
        ],
        explanation: "celsius = (fahrenheit - 32.0) * 5.0 / 9.0 이다. 괄호가 없으면 곱셈·나눗셈이 먼저 계산되어 값이 달라진다. 5 / 9 처럼 정수로 적으면 정수 나눗셈이 되어 0이 되므로 반드시 5.0 / 9.0 으로 적는다." },

  15: { answers: ["0.0", "0"],
        explanation: "0.0 이다. 선언되지 않은 fahreheit 가 값 0.0 인 새 실수 변수로 조용히 만들어지고, (0.0 - 32.0) * 5.0 / 9.0 = -17.78 이 계산된다. 이것이 implicit none 없이 생기는 대표적인 조용한 런타임 버그다." },

  16: { answers: ["1"],
        explanation: "Error: Symbol 'fahreheit' at (1) has no IMPLICIT type 오류가 나고 컴파일이 거부된다. 게다가 gfortran은 did you mean 'fahrenheit'? 처럼 올바른 철자까지 제안한다. implicit none 한 줄이 조용한 런타임 버그를 요란한 컴파일 오류로 바꾼 것이다." },

  17: { answers: ["integer :: a, b"],
        explanation: "integer :: a, b 이다. Fortran은 모든 선언이 실행문보다 앞서야 한다. 실행문 사이에 끼어든 integer :: b 를 위쪽 선언과 합치면 오류가 사라진다." },

  18: { answers: [
          "y = x**3 - 6.0 * x**2 + 9.0 * x + 1.0",
          "y = x ** 3 - 6.0 * x ** 2 + 9.0 * x + 1.0"
        ],
        explanation: "y = x**3 - 6.0 * x**2 + 9.0 * x + 1.0 이다. ** 가 * 보다 우선순위가 높아서 괄호 없이도 수학 표기와 거의 같게 읽힌다." },

  /* ---------- 이론 ---------- */
  19: { answers: ["1"],
        explanation: "! 다. Colab 셀에서 셸 명령은 ! 로 시작해야 한다. 붙이지 않으면 Python 코드로 해석되어 SyntaxError 가 난다. 소스 저장은 셀 첫 줄의 %%writefile 로 한다." },

  20: { answers: ["3"],
        explanation: "-o 다. -o hello 는 출력(실행) 파일 이름을 hello 로 지정한다. 생략하면 a.out 이 된다. -O2 는 최적화, -std=f2008 은 표준 강제, -Wall 은 경고 활성화다." },

  21: { answers: ["2"],
        explanation: ".f90 이다. gfortran은 확장자로 소스 형식을 판별한다. .f90 / .f95 / .f03 / .f08 은 자유형식, .f / .for / .ftn 은 고정형식으로 읽는다." },

  22: { answers: ["2"],
        explanation: "실제 문장 본문이다. 고정형식에서 1열은 주석 표시, 1~5열은 라벨, 6열은 줄잇기, 7~72열이 본문이며 73열부터는 무시된다." },

  23: { answers: ["1"],
        explanation: "integer 다. 암묵적 형 지정 규칙에 따라 첫 글자가 I, J, K, L, M, N 이면 정수가 된다. kount 는 k 로 시작하므로 정수다. 이런 규칙은 implicit none 으로 꺼야 한다." },

  24: { answers: ["1"],
        explanation: "use 문 다음, 변수 선언보다 앞이다. implicit none 은 선언부에 위치하며, use 문이 있다면 그 뒤, 모든 변수 선언보다는 앞에 온다." },

  25: { answers: ["1"],
        explanation: "3이다. 정수끼리의 나눗셈은 소수점 이하를 버린다. 실수 결과가 필요하면 7.0 / 2.0 처럼 한쪽이라도 실수로 적는다." },

  26: { answers: ["2"],
        explanation: "n_steps 다. 식별자는 영문자로 시작해 영문자·숫자·밑줄만 쓴다. 2nd_run 은 숫자로 시작해서, wave-speed 는 붙임표 때문에, my var 는 공백 때문에 무효다." },

  27: { answers: ["1"],
        explanation: "거짓이다. Fortran은 대소문자를 구분하지 않으므로 count 와 Count 는 같은 변수다." },

  28: { answers: ["0"],
        explanation: "참이다. 자유형식의 줄잇기는 끊는 줄의 끝에 & 를 붙인다. 문자열이나 토큰 중간을 끊을 때는 다음 줄 시작에도 & 를 붙인다." },

  29: { answers: ["1"],
        explanation: "거짓이다. Fortran 키워드는 예약어가 아니라서 문법적으로는 integer :: if 처럼 변수 이름으로 쓸 수 있다. 다만 혼란을 부르므로 쓰지 않을 뿐, 불가능한 것은 아니다." },

  30: { answers: ["1"],
        explanation: "거짓이다. Fortran은 컴파일 → 실행의 두 단계를 거친다. 실행 파일은 이전에 번역된 코드이므로 소스를 고치면 반드시 재컴파일해야 변경이 반영된다." },

  31: { answers: ["1"],
        explanation: "거짓이다. parameter 가 붙은 이름은 상수라서 값을 다시 대입할 수 없다. 시도하면 Named constant in variable definition context 같은 컴파일 오류가 난다." },

  32: { answers: ["!"],
        explanation: "! (느낌표)다. ! 부터 줄 끝까지가 주석이며, 코드 뒤에 붙이는 꼬리 주석도 가능하다." },

  33: { answers: [";"],
        explanation: "; (세미콜론)이다. 예를 들어 a = 1; b = 2; c = 3 처럼 쓴다. 다만 가독성을 해치므로 권장하지는 않는다." },

  34: { answers: ["**"],
        explanation: "** 다. radius**2 는 radius 의 제곱이다. ** 는 * 보다 우선순위가 높다." },

  35: { answers: ["-wall", "wall"],
        explanation: "-Wall 이다. Warn all 의 줄임말이며, 가능한 모든 경고를 켠다. 교재의 모든 예제는 -Wall 에서 경고 없이 컴파일된다." },

  36: { answers: ["0"],
        explanation: "암묵적 형 지정 규칙에 따라 새 변수로 조용히 만들어진다. 그래서 컴파일은 통과하지만 프로그램은 틀린 값을 낸다. implicit none 을 두면 같은 오타가 컴파일 시점에 오류로 잡힌다." },

  37: { answers: ["1"],
        explanation: "자유형식은 끊는 줄 끝에 &, 고정형식은 다음 줄 6열에 빈칸이 아닌 문자를 놓는다. 자유형식은 위치가 자유롭고, 고정형식은 칸 위치 자체가 문법이라는 차이에서 비롯된 것이다." },

  38: { answers: ["1"],
        explanation: "컴파일러가 변수의 자료형을 알아야 그 변수를 쓰는 문장을 번역할 수 있기 때문이다. 선언이 실행문 뒤에 오면 컴파일러가 아직 모르는 이름을 만나 오류가 난다. 그래서 선언 먼저, 동작 나중의 순서가 고정이다." },

  /* ---------- 실습 ---------- */
  39: { answers: ["0"],
        explanation: "정상 컴파일·실행된다. 자유형식에서 들여쓰기 칸 수는 가독성을 위한 것일 뿐 문법적 의미가 없다. 칸 위치가 문법인 고정형식과의 결정적 차이다." },

  40: { answers: ["total = 10 + 20 + 30 + &"],
        explanation: "total = 10 + 20 + 30 + & 이다. 덧셈 기호까지 적고 줄 끝에 & 를 붙여야 다음 줄의 40 + 50 이 같은 문장으로 이어진다. & 를 빠뜨리면 식이 잘려 Syntax error in expression 이 난다." },

  41: { answers: ["1095"],
        explanation: "1095 다. 3 × 365 = 1095. 고정형식이지만 계산 자체는 자유형식과 똑같다." },

  42: { answers: ["perimeter = 2 * (width + height)"],
        explanation: "perimeter = 2 * (width + height) 이다. 괄호가 없으면 2 * width 가 먼저 계산되어 값이 달라진다." },

  43: { answers: ["x = 2; y = 3; z = 4"],
        explanation: "x = 2; y = 3; z = 4 이다. 세미콜론으로 세 대입문을 한 줄에 넣었다. 이어서 x * y * z 를 출력하면 24가 나온다." },

  44: { answers: ["cubed = base ** 3"],
        explanation: "cubed = base ** 3 이다. base 가 5면 125가 된다. 제곱은 base ** 2 로 쓴다." },

  45: { answers: ["mod(seconds, 60)"],
        explanation: "mod(seconds, 60) 이다. seconds 가 90이면 나머지는 30이고, seconds / 60 은 정수 나눗셈이라 1이다. 그래서 90초는 1분 30초로 읽힌다." },

  46: { answers: ["101"],
        explanation: "101 이다. Total, TOTAL, total 은 모두 같은 변수다. 100에 1을 더해 101이 된다." },

  47: { answers: ["total_price = price_per_item * item_count"],
        explanation: "total_price = price_per_item * item_count 이다. 이름만 보아도 계산의 의미가 읽히는 것이 snake_case 명명의 장점이다. a, b, c 보다 훨씬 낫다." },

  48: { answers: ["average = 7.0 / real(count)"],
        explanation: "average = 7.0 / real(count) 이다. 정수 count 를 real() 로 실수로 바꿔야 실수 나눗셈이 된다. 결과는 1.75 다. 형 변환은 4장에서 자세히 다룬다." },

  49: { answers: ["3"],
        explanation: "3이다. 이름이 n 이면 암묵적 형 지정 규칙(첫 글자 i~n)에 따라 정수가 되어 3.7 이 3으로 잘린다. gfortran은 -Wconversion 경고로 알려 준다. implicit none 을 두면 이런 일이 원천 차단된다." },

  50: { answers: ["integer :: steps\nreal :: dt", "integer :: steps\nreal    :: dt"],
        explanation: "integer :: steps 와 real :: dt 를 두 줄로 쓴다. 참고로 dt = 0.01 을 출력하면 9.99999978E-03 처럼 보이는데, 이는 부동소수점 표현의 한계 때문이며 3장에서 다룬다." }
};
