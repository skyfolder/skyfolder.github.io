/* ============================================================
   answer/fort_prac_06_answers.src.js — 6장 평문 정답 (강사용 원본)

   ★ 이 파일은 GitHub에 올리지 마세요. .gitignore 로 막아 두었습니다.
   ★ 고친 뒤에는 answer/build_06.html 을 열어 정답 파일을 다시 만드세요.

   서식 문자열은 따옴표 안쪽을 그대로 비교하므로,
   대소문자와 쉼표 뒤 띄어쓰기 변형을 answers 에 함께 넣어 두었습니다.
   ============================================================ */

window.ANSWER_SOURCE = {

  /* ---------- 복습 ---------- */
  1:  { answers: ["read *, a, b"],
        explanation: "read *, a, b 다. 서식 자리의 별표는 형식을 컴파일러에 맡긴다는 뜻이다. 목록 지정 입력은 공백·쉼표·줄바꿈을 모두 구분자로 받아들이므로 3.5 1.5 로 주든 3.5, 1.5 로 주든 두 줄로 나눠 주든 똑같이 읽힌다." },

  2:  { answers: ["5.0", "5", "5.00000000"],
        explanation: "5.0 이다. 출력은 목록 지정이라 5.00000000 처럼 좌우에 넓은 공백과 함께 찍힌다. 이 칸 너비와 자릿수를 정한 것은 프로그래머가 아니라 컴파일러다." },

  3:  { answers: ["2.0", "2", "2.00000000"],
        explanation: "2.0 이다. 3.5 − 1.5 = 2.0. 값 자체는 맞지만 출력 모양을 통제할 수 없다는 점이 목록 지정 출력의 한계다." },

  4:  { answers: ['write(*, *) "hello"', "write(*, *) 'hello'"],
        explanation: 'write(*, *) "hello" 다. 첫 별표는 장치(표준 출력), 둘째 별표는 서식(목록 지정)을 가리킨다. print *, "hello" 와 결과가 완전히 같다.' },

  5:  { answers: ["0"],
        explanation: "첫 번째 별표는 장치(표준 출력)를, 두 번째 별표는 서식(목록 지정)을 가리킨다. write(장치, 서식) 순서를 기억하면 헷갈리지 않는다. print 는 장치를 적을 자리가 아예 없어 항상 화면으로만 나간다." },

  6:  { answers: [
          "print '(I4, F10.3, F10.3, F12.4)', i, x, sq, cube",
          "print '(I4,F10.3,F10.3,F12.4)', i, x, sq, cube",
          "print '(i4, f10.3, f10.3, f12.4)', i, x, sq, cube",
          "print '(i4,f10.3,f10.3,f12.4)', i, x, sq, cube",
          'print "(I4, F10.3, F10.3, F12.4)", i, x, sq, cube'
        ],
        explanation: "print '(I4, F10.3, F10.3, F12.4)', i, x, sq, cube 다. 머리글을 A4, A10, A10, A12 로 맞추면 문자와 숫자가 같은 너비를 차지해 세로줄이 정확히 정렬된다. Fortran의 편집 기술자는 지정된 칸 안에서 오른쪽 정렬이 기본이다." },

  7:  { answers: ["36"],
        explanation: "36칸이다. 4 + 10 + 10 + 12 = 36. 머리글의 A4, A10, A10, A12 와 같은 너비라서 두 줄의 세로 경계가 정확히 맞아떨어진다." },

  8:  { answers: ["6.0220E+23", "6.0220e+23"],
        explanation: "6.0220E+23 이다. ES 는 가수를 1 이상 10 미만인 한 자리 정수로 정규화한다. 학술 보고서의 수치 표기와 같은 모양이라 물리량을 보여 줄 때 자연스럽다." },

  9:  { answers: ["0.6022E+24", "0.6022e+24"],
        explanation: "0.6022E+24 다. E 는 소수점 왼쪽을 0으로 만들고 가수를 0.1 이상 1 미만으로 정규화한다. 같은 값이지만 가수가 작아진 만큼 지수가 하나 커진다." },

  10: { answers: ["theta = deg * pi / 180.0"],
        explanation: "theta = deg * pi / 180.0 이다. Fortran의 삼각함수는 라디안을 받으므로 도 단위 각도를 반드시 변환해야 한다. * 와 / 는 우선순위가 같아 왼쪽부터 계산되므로 괄호 없이도 (deg * pi) / 180.0 이 되어 의도대로 맞는다." },

  11: { answers: [
          'open(newunit=u, file="trajectory.csv", status="replace", action="write")',
          "open(newunit=u, file='trajectory.csv', status='replace', action='write')"
        ],
        explanation: 'open(newunit=u, file="trajectory.csv", status="replace", action="write") 다. newunit 은 비어 있는 장치 번호를 시스템이 골라 u 에 넣어 주므로 번호 충돌을 걱정하지 않아도 된다. status="replace" 는 덮어쓰기, action="write" 는 쓰기 전용이다.' },

  12: { answers: [
          'write(u, \'(F10.4, ",", F10.4)\') x, y',
          'write(u, \'(F10.4,",",F10.4)\') x, y',
          'write(u, \'(f10.4, ",", f10.4)\') x, y',
          'write(u, \'(f10.4,",",f10.4)\') x, y'
        ],
        explanation: "write(u, '(F10.4, \",\", F10.4)') x, y 다. 화면을 뜻하는 별표 대신 장치 변수 u 를 앞에 두면 출력이 파일로 흘러간다. 서식 안의 큰따옴표로 감싼 쉼표는 그대로 찍히는 리터럴이라 csv 구분자가 된다." },

  13: { answers: ["41"],
        explanation: "41개다. do i = 0, n 은 0부터 40까지 모두 41번 돈다. 0을 빼먹고 40이라고 세기 쉬우니 주의한다. 프로그램도 points = n + 1 로 41을 출력한다." },

  14: { answers: ["nan"],
        explanation: "NaN 이 찍힌다. 분모와 분자가 모두 0인 부정형 연산이라 수학적으로 값을 정할 수 없다. 음수의 제곱근이나 음수의 자연로그도 같은 NaN 이 된다." },

  15: { answers: ["infinity", "inf", "+infinity"],
        explanation: "Infinity 가 찍힌다. 0이 아닌 유한한 값을 정확히 0.0 으로 나누면 무한대가 된다. 부호에 따라 -Infinity 도 나온다. gfortran 은 Inf 가 아니라 Infinity 라는 단어를 그대로 출력한다." },

  16: { answers: ["f"],
        explanation: "F 다. IEEE 754 표준에서 NaN 은 그 어떤 값과도 같지 않으며 자기 자신과 비교해도 거짓이다. 그래서 if (x == nan) 같은 비교로는 NaN 을 절대 검출할 수 없고 ieee_is_nan(x) 를 써야 한다." },

  17: { answers: ["1"],
        explanation: "두 번째 실행에서 Cannot open file 'out.csv': File exists 런타임 오류가 난다. status=\"new\" 는 대상 파일이 없어야만 성공하며, 이미 있으면 기존 데이터를 지키려고 즉시 멈춘다. 매개변수를 바꿔가며 여러 번 돌리는 실습에서는 매번 파일을 손으로 지워야 해서 불편하다." },

  18: { answers: ["replace", '"replace"', "'replace'"],
        explanation: "replace 다. 파일이 이미 있으면 내용을 지우고 새로 쓰며, 없으면 \"new\" 와 똑같이 새로 만든다. 덮어쓰기가 잦은 출력에는 이 값을 기본으로 쓰는 것이 안전하다." },

  /* ---------- 이론 ---------- */
  19: { answers: ["1"],
        explanation: "형식을 프로그래머가 정하지 않고 컴파일러가 정하도록 위임한다는 뜻이다. 간편해서 값을 빠르게 확인할 때 좋지만, 칸 너비와 자릿수를 통제할 수 없다는 대가가 따른다." },

  20: { answers: ["0"],
        explanation: "공백, 쉼표, 줄바꿈이다. 그래서 3.5 1.5 로 주든 3.5, 1.5 로 주든, 두 줄에 나눠 넣든 값이 정확히 각 변수에 배정된다." },

  21: { answers: ["1"],
        explanation: "칸 너비와 소수 자릿수를 컴파일러가 정하므로 사용자가 통제할 수 없고, 그 결과가 컴파일러마다 달라 이식성이 떨어지기 때문이다. 표를 만들려면 서식 지정 출력으로 넘어가야 한다." },

  22: { answers: ["write(*, *) x"],
        explanation: "write(*, *) x 다. 첫 별표가 장치(표준 출력), 둘째 별표가 서식(목록 지정)이므로 print *, x 와 완전히 같은 동작을 한다." },

  23: { answers: ["0"],
        explanation: "read 는 입력, print 는 항상 표준 출력, write(장치, 서식) 는 장치를 골라 출력한다. print 에는 장치를 적을 자리가 없어 파일로 내보낼 수 없고, 파일 출력은 write 로만 가능하다." },

  24: { answers: ["1"],
        explanation: "장치 번호와 표준 출력의 대응이 컴파일러·환경마다 다를 수 있어 이식성이 떨어지기 때문이다. 같은 이유로 파일을 열 때도 번호를 직접 박지 말고 newunit 으로 받아 쓰는 것이 좋다." },

  25: { answers: ["1"],
        explanation: "I5 는 전체 5칸 너비로 출력하고 앞쪽 부족분을 공백으로 채우며, I0 는 값에 필요한 최소 너비로만 출력한다. 42 를 넣으면 각각 공백 세 칸과 함께 42, 그리고 그냥 42 가 된다. 표를 만들 때는 I5, csv 를 만들 때는 I0 가 알맞다." },

  26: { answers: ["1"],
        explanation: "부호·소수점·정수부를 모두 포함해 전체 8칸, 소수점 이하 3자리로 출력한다. w 가 소수점과 부호까지 포함한 전체 폭이라는 점이 핵심이다. 너비가 모자라면 칸이 별표로 채워진다." },

  27: { answers: ["0"],
        explanation: "ES 는 가수를 1 이상 10 미만으로, E 는 0 이상 1 미만으로 정규화한다. 같은 6.022e23 이 ES 로는 6.0220E+23, E 로는 0.6022E+24 가 된다. 가수가 작아진 만큼 지수가 하나 커진다." },

  28: { answers: ["i5, i5, i5", "i5,i5,i5"],
        explanation: "I5, I5, I5 와 같다. 같은 기술자를 여러 번 쓸 때는 앞에 반복 횟수를 붙인다. 3F8.2 처럼 실수 기술자에도 똑같이 쓸 수 있다." },

  29: { answers: ["1"],
        explanation: "\",\" 는 쉼표 문자를 그대로 출력하는 리터럴이라 csv 구분자를 만들 때 쓰고, / 는 줄을 바꿔 다음 기록으로 넘어간다. 기술자끼리를 구분하는 쉼표와 큰따옴표로 감싼 리터럴 쉼표는 역할이 전혀 다르다." },

  30: { answers: ["3"],
        explanation: "3칸이다. I4 는 전체 너비가 4인데 7 은 한 자리이므로 앞에 공백 세 칸이 붙어 오른쪽 정렬된다." },

  31: { answers: ["3.14"],
        explanation: "3.14 다. F6.2 는 전체 6칸에 소수 두 자리이므로 3.14159 를 반올림해 3.14 로 만들고, 네 글자를 뺀 앞쪽 두 칸을 공백으로 채운다." },

  32: { answers: ["1"],
        explanation: "비어 있는 장치 번호를 컴파일러가 골라 변수 u 에 넣어 준다. 예전처럼 open(10, ...) 같은 번호를 직접 박으면 다른 라이브러리나 서브루틴이 쓰는 번호와 겹칠 위험이 있는데, newunit 은 그 걱정을 없애 준다." },

  33: { answers: ["1"],
        explanation: "같은 이름의 파일이 있으면 지우고 새로 만들어 덮어쓴다. 파일이 없으면 \"new\" 와 똑같이 새로 만든다. 반복 실행이 잦은 실습 코드에는 이 값이 기본이다." },

  34: { answers: ["next(reader)"],
        explanation: "next(reader) 다. 반복문에 들어가기 전에 한 번만 부르면 머리글 줄이 소비되어 본문 데이터부터 읽힌다. 이 줄을 빼먹으면 열 이름을 실수로 바꾸려다 오류가 난다." },

  35: { answers: [
          '\'(F4.1, ",", F4.1)\'',
          '\'(F4.1,",",F4.1)\'',
          '\'(f4.1, ",", f4.1)\'',
          '\'(f4.1,",",f4.1)\''
        ],
        explanation: "'(F4.1, \",\", F4.1)' 이다. 값 사이에 큰따옴표로 감싼 리터럴 쉼표를 넣으면 그 자리에 쉼표가 그대로 찍혀 csv 한 행이 된다." },

  36: { answers: ["inf", "infinity", "무한대"],
        explanation: "Inf(infinity, 무한대)다. 0이 아닌 유한한 값을 0.0 으로 나누면 부호에 따라 +Inf 또는 -Inf 가 된다. 반면 0.0 / 0.0 은 NaN 이다." },

  37: { answers: ["1"],
        explanation: "값은 거짓(F)이다. NaN 은 자기 자신과도 같지 않으므로 == 로는 검출할 수 없고 ieee_is_nan 을 써야 한다. if (x == nan) 이나 if (x /= nan) 같은 코드는 언제나 의도와 다르게 동작한다." },

  38: { answers: ["0"],
        explanation: "ieee_is_finite 는 값이 유한한 정상 숫자일 때 참이고, ieee_is_nan 은 값이 NaN 일 때 참이다. 음수의 log 는 NaN 이므로 ieee_is_nan 이 참, ieee_is_finite 는 거짓이 된다. 무한대까지 한꺼번에 걸러 내려면 .not. ieee_is_finite(x) 를 쓴다." },

  /* ---------- 실습 ---------- */
  39: { answers: ["t"],
        explanation: "T 다. 논리값은 .true. 와 .false. 로 대입하지만 화면에는 T 와 F 로 찍힌다. 목록 지정 출력은 정수·실수·논리값을 한 문장에 섞어도 컴파일러가 알아서 형식을 정해 준다." },

  40: { answers: ["read *, a, b, c"],
        explanation: "read *, a, b, c 다. 값 세 개를 한 줄에 공백으로 주든 세 줄에 나눠 주든 차례대로 배정된다." },

  41: { answers: ["15"],
        explanation: "15다. 4 + 5 + 6 = 15. 공백으로 나뉜 세 값이 a, b, c 에 차례대로 들어간다." },

  42: { answers: ["2"],
        explanation: "2칸이다. I6 은 전체 너비가 6인데 2026 은 네 자리이므로 앞에 공백 두 칸이 붙는다. 같은 값을 I0 으로 쓰면 공백 없이 2026 만 나온다." },

  43: { answers: ["2026"],
        explanation: "2026 이다. I0 은 값에 필요한 최소 너비로만 출력해 앞 공백이 붙지 않는다. csv 처럼 빈칸이 끼면 곤란한 출력에 알맞다." },

  44: { answers: ["2.99792E+05", "2.99792e+05"],
        explanation: "2.99792E+05 다. ES 는 가수를 1 이상 10 미만으로 맞추므로 299792.458 이 2.99792 × 10^5 로 표현된다. 참고로 같은 값을 F12.3 으로 쓰면 299792.469 가 되는데, 단정밀도 자릿수 한계 때문에 끝자리가 어긋난 것이다." },

  45: { answers: [
          'write(u, \'(A)\') "n,square"',
          'write(u, \'(a)\') "n,square"',
          "write(u, '(A)') 'n,square'",
          "write(u, '(a)') 'n,square'"
        ],
        explanation: "write(u, '(A)') \"n,square\" 다. A 기술자는 문자열의 본래 길이만큼 그대로 출력한다. csv 첫 줄에 열 이름을 적어 두면 Python 쪽에서 어떤 열인지 알 수 있다." },

  46: { answers: [
          'write(u, \'(I0, ",", I0)\') i, i*i',
          'write(u, \'(I0,",",I0)\') i, i*i',
          'write(u, \'(i0, ",", i0)\') i, i*i',
          'write(u, \'(i0,",",i0)\') i, i*i',
          'write(u, \'(I0, ",", I0)\') i, i * i'
        ],
        explanation: "write(u, '(I0, \",\", I0)') i, i*i 다. I0 을 쓰면 앞 공백 없이 값만 찍혀 1,1 / 2,4 처럼 깔끔한 csv 가 된다. I6 같은 고정 너비를 쓰면 값 앞에 공백이 끼어 후처리가 번거로워진다." },

  47: { answers: [
          'write(u, \'(F4.1, ",", F8.5)\') x, sqrt(x)',
          'write(u, \'(F4.1,",",F8.5)\') x, sqrt(x)',
          'write(u, \'(f4.1, ",", f8.5)\') x, sqrt(x)',
          'write(u, \'(f4.1,",",f8.5)\') x, sqrt(x)'
        ],
        explanation: "write(u, '(F4.1, \",\", F8.5)') x, sqrt(x) 다. 출력 목록에는 변수뿐 아니라 계산식도 그대로 적을 수 있다. 실수 열은 F 기술자로 자릿수를 맞춰 두면 열이 가지런히 정렬된다." },

  48: { answers: [
          "use, intrinsic :: ieee_arithmetic",
          "use ieee_arithmetic"
        ],
        explanation: "use, intrinsic :: ieee_arithmetic 이다. intrinsic 을 붙이면 같은 이름의 사용자 모듈이 아니라 표준이 제공하는 내장 모듈을 쓰겠다는 뜻이 분명해진다. 이 문장은 선언부 맨 위, implicit none 보다 앞에 온다." },

  49: { answers: ["t"],
        explanation: "T 다. 음수의 제곱근은 수학적으로 정의되지 않아 NaN 이 되고, ieee_is_nan 이 그것을 참으로 판정한다. 화면에는 sqrt(x) 자리에 NaN 이 그대로 찍힌다." },

  50: { answers: ["if (ieee_is_finite(r)) then"],
        explanation: "if (ieee_is_finite(r)) then 이다. 유한한 정상 숫자일 때만 참이므로 Inf 와 NaN 을 한 번에 걸러 낸다. 이런 검사를 걸어 두면 비정상 값이 csv 에 섞여 들어가 후처리에서 사고를 내는 일을 막을 수 있다." }
};
