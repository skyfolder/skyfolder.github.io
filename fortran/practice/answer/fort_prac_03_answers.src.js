/* ============================================================
   answer/fort_prac_03_answers.src.js — 3장 평문 정답 (강사용 원본)

   ★ 이 파일은 GitHub에 올리지 마세요. .gitignore 로 막아 두었습니다.
   ★ 고친 뒤에는 answer/build_03.html 을 열어 정답 파일을 다시 만드세요.
   ============================================================ */

window.ANSWER_SOURCE = {

  /* ---------- 복습 ---------- */
  1:  { answers: ["character(len=20) :: city", "character(20) :: city"],
        explanation: "character(len=20) :: city 다. 20개의 글자 칸을 만든다는 뜻이다. 길이를 생략하고 character :: c 라고 쓰면 한 글자만 담는 변수가 된다." },

  2:  { answers: ["impedance = (3.0, -4.0)"],
        explanation: "impedance = (3.0, -4.0) 이다. 괄호 안 첫 값이 실수부, 둘째 값이 허수부이며 수학의 3.0 - 4.0i 를 뜻한다." },

  3:  { answers: ["is_valid = .true."],
        explanation: "is_valid = .true. 다. 논리 리터럴은 양옆에 마침표를 반드시 찍는다. true 라고만 쓰면 선언되지 않은 변수 이름으로 해석된다." },

  4:  { answers: ["trim(city)"],
        explanation: "trim(city) 다. 문자형 변수 뒤쪽에 남은 빈 공백을 떼어 내고 글자만 남긴다. 이 함수 없이 출력하면 20칸이 그대로 찍혀 뒤가 지저분해진다." },

  5:  { answers: ["t"],
        explanation: "T 가 나온다. .true. 는 T, .false. 는 F 로 출력된다. 대입할 때의 표기(.true.)와 출력될 때의 표기(T)가 다르다는 점을 기억한다." },

  6:  { answers: ["0"],
        explanation: "남는 15칸은 빈 공백으로 채워진다. 반대로 길이를 넘치면 뒤에서부터 잘려 나가며, 그때 경고도 나오지 않는다." },

  7:  { answers: ["use iso_fortran_env, only: real64"],
        explanation: "use iso_fortran_env, only: real64 다. only 를 붙이면 필요한 이름만 가져와 이름 충돌을 줄일 수 있다. use 문은 implicit none 보다 앞, 선언부 맨 위에 온다." },

  8:  { answers: [
          "integer, parameter :: dp = selected_real_kind(15, 307)",
          "integer, parameter :: dp = selected_real_kind(15,307)"
        ],
        explanation: "integer, parameter :: dp = selected_real_kind(15, 307) 이다. 첫 인자가 유효숫자, 둘째가 십진 지수 범위다. real64 를 쓰는 방식과 결과는 같지만, 이쪽은 필요한 정밀도를 직접 요청하므로 이식성이 높다." },

  9:  { answers: ["8"],
        explanation: "8이다. gfortran에서 배정밀도의 종류 값은 8이고 selected_real_kind(15, 307) 과 real64 가 모두 같은 8을 준다. 다만 이 숫자 자체를 코드에 직접 박으면 안 된다. 컴파일러마다 다를 수 있다." },

  10: { answers: ["15"],
        explanation: "15다. precision 은 그 종류가 보장하는 유효숫자 자릿수를 알려 준다. 단정밀도는 6이다." },

  11: { answers: ["307"],
        explanation: "307이다. range 는 표현 가능한 10의 지수 폭을 알려 준다. 배정밀도는 대략 10의 -307승부터 10의 308승 근처까지 다룬다. 단정밀도는 37이다." },

  12: { answers: ["2147483647"],
        explanation: "2147483647, 약 21억이다. 32비트 기본 정수형의 최댓값이다. 이 한계를 넘는 인덱스나 총합을 다룰 때는 int64 를 써야 데이터 유실을 막는다." },

  13: { answers: [
          "real(dp), parameter :: pi = 3.141592653589793_dp",
          "real(dp), parameter :: pi=3.141592653589793_dp"
        ],
        explanation: "real(dp), parameter :: pi = 3.141592653589793_dp 다. 리터럴에 _dp 를 빠뜨리면 단정밀도로 만들어진 값이 배정밀도 상수에 들어가 정밀도를 잃는다." },

  14: { answers: ["area = pi * radius**2", "area = pi * radius ** 2"],
        explanation: "area = pi * radius**2 다. ** 가 * 보다 우선순위가 높아 괄호 없이도 수학 표기와 같게 읽힌다. pi 를 3.14 로 직접 적으면 정밀도를 잃고 매직 넘버가 된다." },

  15: { answers: ['character(len=*), parameter :: app_name = "Wave Solver"'],
        explanation: 'character(len=*), parameter :: app_name = "Wave Solver" 다. len=* 로 두면 초기식 문자열의 길이에 컴파일러가 알아서 맞춰 준다. 문자열을 고쳐도 길이를 따로 셀 필요가 없다.' },

  16: { answers: ["right = 0.1_dp"],
        explanation: "right = 0.1_dp 다. 처음부터 배정밀도로 만들어진 리터럴이라 0.10000000000000001 까지 정확히 들어간다. 접미사를 빼면 0.10000000149011612 가 되어 약 1.5e-9 만큼 어긋난다." },

  17: { answers: ["1"],
        explanation: "접미사 없는 0.1 이 먼저 단정밀도로 만들어진 뒤 배정밀도 공간에 들어가기 때문이다. 컴파일러는 등호 오른쪽을 먼저 해석하므로, 그 시점에 이미 유실된 정밀도는 되찾을 수 없다. 0.1_dp 로 적어야 한다." },

  18: { answers: ["-2147483648"],
        explanation: "-2147483648 이 나온다. 최댓값을 넘으면 값이 가장 큰 음수 쪽으로 뒤집히는 오버플로가 일어난다. 더 무서운 점은 컴파일러가 오류도 경고도 내주지 않는 경우가 있다는 것이다. 큰 값을 다룰 때는 int64 를 쓴다." },

  /* ---------- 이론 ---------- */
  19: { answers: ["2"],
        explanation: "string 이다. Fortran에 string 자료형은 없고, 글자와 문자열은 character 로 다룬다. 다섯 내장 자료형은 integer, real, complex, logical, character 다." },

  20: { answers: ["complex"],
        explanation: "complex, 복소수형이다. 수학적으로 2.0 - 5.0i 를 뜻한다. 괄호 안 첫 값이 실수부, 둘째 값이 허수부다." },

  21: { answers: ["1"],
        explanation: "거짓이다. 3은 integer, 3.0 은 real 이다. 같은 삼처럼 보여도 메모리 저장 방식과 연산 규칙이 다르다. 예를 들어 정수끼리의 나눗셈은 소수부를 버린다." },

  22: { answers: ["bus"],
        explanation: "Bus 가 저장된다. 길이가 3이라 앞 세 글자만 남고 나머지는 잘려 나간다. 이때 경고가 나오지 않으므로 조용한 버그가 되기 쉽다. 반대로 길이가 남으면 뒤가 공백으로 채워진다." },

  23: { answers: ["2"],
        explanation: "real(real64) :: x 다. real*8 은 비표준 컴파일러 확장이고, double 은 그 자체로 유효한 키워드가 아니며(double precision 은 가능), real(8) 은 종류 값 숫자를 직접 박는 비이식적 방식이다. iso_fortran_env 의 real64 를 쓰는 것이 표준이고 이식성도 높다." },

  24: { answers: ["-1"],
        explanation: "-1 을 돌려준다. 정밀도만 부족하면 -1, 지수 범위만 부족하면 -2, 둘 다 부족하면 -3 이다. 큰 정밀도를 요청할 때는 반환값이 양수인지 먼저 확인해야 한다. 음수가 종류 자리에 들어가면 Kind -1 not supported 오류가 난다." },

  25: { answers: ["1"],
        explanation: "거짓이다. 종류 값 숫자는 컴파일러 구현에 따라 다를 수 있다. 그래서 숫자에 직접 의존하지 말고 real64 나 selected_real_kind 같은 명명 상수로 종류를 다뤄야 이식성이 유지된다." },

  26: { answers: ["1"],
        explanation: "precision 은 보장 유효숫자 자릿수, range 는 표현 가능한 10의 지수 폭, huge 는 그 종류가 담을 수 있는 최댓값을 알려 준다. 여기에 epsilon(구분 가능한 최소 간격)과 tiny(표현 가능한 최소 양수)도 함께 익혀 두면 좋다." },

  27: { answers: ["4 8", "4, 8", "4  8"],
        explanation: "4 8 이 나온다. 접미사가 없는 1.0 은 단정밀도라 종류 4, 1.0d0 은 배정밀도라 종류 8이다. 이 숫자는 gfortran 기준이며 컴파일러에 따라 다를 수 있다." },

  28: { answers: ["1"],
        explanation: "단정밀도는 보장 유효숫자가 약 7자리뿐이라 반복·누적 연산에서 반올림 오차가 빠르게 쌓이기 때문이다. 0.1 을 십만 번 더하면 단정밀도는 참값에서 약 1.4 나 벗어나지만, 배정밀도는 오차가 1e-8 안팎에 머문다." },

  29: { answers: ["1"],
        explanation: "약 7자리다. 단정밀도의 precision 은 6이고 실질 유효숫자는 약 7자리다. 배정밀도는 15자리다." },

  30: { answers: ["1"],
        explanation: "단정밀도다. 접미사가 없는 실수 리터럴은 기본 단정밀도로 해석된다. 배정밀도가 필요하면 반드시 3.14_dp 처럼 종류 접미사를 붙여야 한다." },

  31: { answers: ["1"],
        explanation: "그 리터럴이 처음부터 dp 종류의 값이 되게 하는 역할이다. dp 는 보통 real64 로 정의한 명명 상수다. 접미사를 빠뜨리면 단정밀도로 해석되어 정밀도를 잃는다." },

  32: { answers: ["1"],
        explanation: "거짓이다. parameter 속성을 가진 이름은 컴파일 시점에 값이 고정되며 실행 중에는 대입할 수 없다. 그래서 원주율이나 최대 반복 횟수처럼 바뀌지 않는 값에 쓴다." },

  33: { answers: ["1"],
        explanation: "길이를 직접 세지 않아도 초기식 길이에 자동으로 맞춰진다는 점이 좋다. 문자열을 수정해도 길이를 따로 고칠 필요가 없다. 단, len=* 는 명명 상수(parameter)나 인자에만 쓸 수 있다." },

  34: { answers: ["1"],
        explanation: "의미 설명 없이 코드 곳곳에 박힌 상수값이며, parameter 로 이름을 붙여 없앤다. 원주율 자리에 3.141592 를 여러 곳에 직접 적으면 의미도 불분명하고 자릿수를 바꿀 때 모든 곳을 고쳐야 한다. pi 라는 이름으로 한 곳에서 정의하면 수정도 한 줄로 끝난다." },

  35: { answers: ["wrong = 0.1_dp"],
        explanation: "wrong = 0.1_dp 로 고친다. 접미사 없는 0.1 은 먼저 단정밀도로 저장되는데 0.1 은 단정밀도로 정확히 표현되지 않는다. 그 부정확한 값이 배정밀도 변수로 확장되어 들어가는 것이다." },

  36: { answers: ["1"],
        explanation: "거짓이다. 초기화하지 않은 변수의 값은 정해져 있지 않다. 컴파일러와 운영체제, 그때의 메모리 상태에 따라 쓰레기 값이 들어갈 수 있다. 특히 누적용 변수는 쓰기 전에 반드시 0 이나 0.0_dp 로 초기화해야 한다." },

  37: { answers: ["real(real64) :: x", "real(dp) :: x"],
        explanation: "real(real64) :: x 로 고친다. real*8 은 표준이 아닌 컴파일러 확장이라 Error: GNU Extension: Nonstandard type declaration REAL*8 이 난다. integer, parameter :: dp = real64 를 두고 real(dp) :: x 로 써도 좋다." },

  38: { answers: ["3.5"],
        explanation: "3.5 다. 실수끼리의 나눗셈이라 소수부가 그대로 남는다. 같은 식을 7 / 2 로 적으면 정수 나눗셈이 되어 3이 된다. 실수 결과가 필요하면 피연산자를 실수로 만들어야 한다." },

  /* ---------- 실습 ---------- */
  39: { answers: ["logical :: p, q", "logical :: q, p"],
        explanation: "logical :: p, q 다. 논리형 변수는 비교식의 결과를 그대로 담을 수 있다. 예를 들어 p = (3 > 2) 는 p 에 .true. 를 넣는다." },

  40: { answers: ["t"],
        explanation: "T 다. p 는 (3 > 2) 이므로 참, q 는 (5 == 4) 이므로 거짓이다. .or. 는 둘 중 하나만 참이어도 참이므로 T 가 나온다. 참고로 p .and. q 는 F 다." },

  41: { answers: ["2008"],
        explanation: "2008 이다. word(8:11) 은 8번째부터 11번째 글자까지를 가리킨다. 같은 방식으로 word(1:7) 은 Fortran 이 된다." },

  42: { answers: ["integer, parameter :: big = selected_int_kind(18)"],
        explanation: "integer, parameter :: big = selected_int_kind(18) 이다. 십진 18자리를 담을 정수 종류를 요청하며, gfortran에서는 8을 돌려준다. 실수용 selected_real_kind 와 짝을 이루는 함수다." },

  43: { answers: ["population = 8000000000_big"],
        explanation: "population = 8000000000_big 이다. 변수만 큰 종류로 선언하고 리터럴에 접미사를 빠뜨리면, 80억이 기본 정수(최대 약 21억)로 먼저 만들어지면서 오버플로가 난다. 리터럴에도 같은 종류를 붙여야 한다." },

  44: { answers: ["37"],
        explanation: "37이다. 단정밀도는 10의 지수를 대략 ±37 범위까지 다룬다. 배정밀도는 307이다. precision 과 함께 보면 단정밀도 6자리·지수 37, 배정밀도 15자리·지수 307로 정리된다." },

  45: { answers: ["14"],
        explanation: "14다. Modern Fortran 은 가운데 빈칸을 포함해 14글자다. len=* 로 선언했기 때문에 길이를 직접 세지 않아도 컴파일러가 맞춰 주고, len 함수가 그 값을 돌려준다." },

  46: { answers: ["integer, parameter :: total_days = days_per_week * weeks"],
        explanation: "integer, parameter :: total_days = days_per_week * weeks 다. 상수의 초기식에는 이미 값을 아는 다른 명명 상수를 쓸 수 있고, 계산은 컴파일 시점에 끝난다. 매직 넘버 28 대신 의미가 드러나는 식이 된다." },

  47: { answers: ["t"],
        explanation: "T 다. debug 가 .false. 이므로 .not. debug 는 참이고, verbose 도 참이라 .and. 의 결과가 참이 된다. 논리형 명명 상수는 컴파일 시점 설정값으로 쓰기 좋다." },

  48: { answers: ["real(dp) :: ratio = 0.5_dp"],
        explanation: "real(dp) :: ratio = 0.5_dp 다. 선언과 동시에 초기화하면 컴파일 시점에 방을 만들고 값을 채운다. 리터럴에 _dp 를 붙이지 않으면 여기서도 정밀도를 잃는다." },

  49: { answers: ["complex(dp) :: z = (1.0_dp, -1.0_dp)"],
        explanation: "complex(dp) :: z = (1.0_dp, -1.0_dp) 다. 복소수도 종류를 지정할 수 있고, 괄호 안 두 리터럴 모두에 접미사를 붙여야 배정밀도로 만들어진다." },

  50: { answers: ["real(dp) :: angle = pi / 4.0_dp"],
        explanation: "real(dp) :: angle = pi / 4.0_dp 다. 이미 선언된 명명 상수를 초기화 식에 쓸 수 있다. 결과는 45도를 라디안으로 나타낸 0.78539816339744828 이다. 4 를 정수로 적으면 실수와 정수가 섞이므로 4.0_dp 로 적는다." }
};
