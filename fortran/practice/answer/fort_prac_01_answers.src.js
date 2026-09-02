/* ============================================================
   answer/fort_prac_01_answers.src.js — 1장 평문 정답 (강사용 원본)

   ★ 이 파일은 GitHub에 올리지 마세요. .gitignore 로 막아 두었습니다.
   ★ 고친 뒤에는 answer/build_01.html 을 열어 정답 파일을 다시 만드세요.
   ============================================================ */

window.ANSWER_SOURCE = {

  /* ---------- 복습 ---------- */
  1:  { answers: ["!apt-get install -y gfortran", "apt-get install -y gfortran"],
        explanation: "!apt-get install -y gfortran 이다. Colab에서 셸 명령은 줄 앞에 ! 를 붙인다. -y 는 설치 여부를 되묻지 않고 진행하라는 뜻이다. 런타임이 초기화되면 gfortran 이 사라지므로 매 세션 첫 셀에 이 명령을 두는 것이 편하다." },

  2:  { answers: ["!gfortran --version", "gfortran --version"],
        explanation: "!gfortran --version 이다. GNU Fortran (Ubuntu ...) 13.3.0 같은 출력이 나오면 설치가 끝난 것이다. 버전 숫자는 환경에 따라 다를 수 있다." },

  3:  { answers: ["%%writefile hello.f90"],
        explanation: "%%writefile hello.f90 이다. 셀 첫 줄에 두면 그 아래 내용이 파일로 저장된다. 저장만 할 뿐 컴파일은 하지 않으므로 다음 셀에서 !gfortran 으로 따로 컴파일해야 한다." },

  4:  { answers: [
          "!gfortran -O2 -std=f2018 -Wall hello.f90 -o hello",
          "gfortran -O2 -std=f2018 -Wall hello.f90 -o hello"
        ],
        explanation: "!gfortran -O2 -std=f2018 -Wall hello.f90 -o hello 다. -O2 는 최적화 2단계, -std=f2018 은 표준 강제, -Wall 은 모든 경고 켜기, -o hello 는 출력 파일 이름 지정이다. 컴파일할 소스는 hello.f90 이다." },

  5:  { answers: ["!./hello", "./hello"],
        explanation: "!./hello 다. ./ 는 현재 폴더를 뜻한다. 컴파일로 만들어진 실행 파일을 지금 있는 폴더에서 실행하라는 뜻이다." },

  6:  { answers: ["0"],
        explanation: "a.out 이 만들어진다. -o 를 생략하면 컴파일러가 기본 이름을 쓴다. 실행할 때도 ./a.out 으로 부른다." },

  7:  { answers: [
          "fahrenheit = celsius * 9.0 / 5.0 + 32.0",
          "fahrenheit = celsius * (9.0 / 5.0) + 32.0",
          "fahrenheit = 9.0 / 5.0 * celsius + 32.0"
        ],
        explanation: "fahrenheit = celsius * 9.0 / 5.0 + 32.0 이다. 9 / 5 처럼 정수로 적으면 정수 나눗셈이 되어 1이 되고 답이 틀어진다. 이 장의 오류 학습에서 다룬 대표적인 조용한 버그다." },

  8:  { answers: ["do i = -40, 100, 10"],
        explanation: "do i = -40, 100, 10 이다. 세 번째 값이 증감폭이며 생략하면 1이다. −40부터 10씩 올라가 100까지 모두 15번 돈다." },

  9:  { answers: ["celsius,fahrenheit"],
        explanation: "celsius,fahrenheit 다. csv 의 첫 줄에 열 이름을 쉼표로 이어 적는다. Python 쪽에서 csv.reader 로 읽을 때 next(reader) 로 이 줄을 건너뛴다." },

  10: { answers: ["-40"],
        explanation: "-40 이다. 섭씨와 화씨의 눈금이 정확히 만나는 유일한 지점이다. 그래프에서도 두 축의 −40 자리에서 직선이 교차한다." },

  11: { answers: ["0"],
        explanation: "컴파일 에러다. Error: Unclassifiable statement at (1) 이 나면서 번역 단계에서 멈춘다. 소수점은 쉼표가 아니라 마침표로 찍어야 한다. 컴파일 에러는 어디가 틀렸는지 알려 주므로 네 오류 중 가장 다루기 쉽다." },

  12: { answers: ["1"],
        explanation: "1이다. 9 / 5 의 수학적 값은 1.8 이지만 정수끼리 나누면 소수부가 버려져 1이 된다. 그 결과 100°C 가 212°F 가 아니라 132 로 계산된다. 컴파일도 실행도 멀쩡한데 답만 틀리는 로직 에러의 대표 사례다." },

  13: { answers: [
          "fahrenheit = celsius * (real(nine) / five) + 32.0",
          "fahrenheit = celsius * (real(nine) / real(five)) + 32.0",
          "fahrenheit = celsius * real(nine) / real(five) + 32.0"
        ],
        explanation: "fahrenheit = celsius * (real(nine) / five) + 32.0 로 고친다. 한쪽을 실수로 바꾸면 나눗셈 전체가 실수 연산이 되어 1.8 이 나오고 결과도 212.000000 이 된다. 정수 나눗셈은 경고도 없이 틀린 답을 만들어 수치 코드에서 가장 흔한 버그 원인 중 하나다." },

  14: { answers: ["1.00000012"],
        explanation: "1.00000012 가 나온다. 0.1 이 2진수로 정확히 표현되지 않아 생긴 작은 오차가 열 번 누적된 결과다. 반올림 에러는 오류 메시지가 전혀 없어 네 오류 중 가장 조용하고 위험하다." },

  15: { answers: ["f"],
        explanation: "F 가 나온다. total 이 1.00000012 라서 1.0 과 같지 않다고 판정된다. 여기서 얻을 교훈은 실수를 == 로 직접 비교하면 안 된다는 것이다. 차이의 절댓값을 허용 오차와 비교해야 한다." },

  16: { answers: ["1"],
        explanation: "컴파일 → 런타임 → 로직 → 반올림 순이다. 뒤로 갈수록 조용해서 위험하다. 컴파일 에러는 번역 단계에서 즉시 잡히지만, 로직과 반올림 에러는 멀쩡히 실행되면서 틀린 답을 낸다. implicit none 과 -Wall 이 이런 조용한 오류를 줄여 준다." },

  /* ---------- 이론 ---------- */
  17: { answers: ["1"],
        explanation: "Formula Translation 이다. '수식 번역'을 뜻하며, 이름 자체가 이 언어가 과학 기술 계산을 위해 태어났음을 보여준다." },

  18: { answers: ["0"],
        explanation: "1957년, 존 배커스(IBM)다. 1953년 IBM의 John Backus 가 제안서를 냈고 1957년 최초의 FORTRAN 컴파일러가 나왔다. 나머지 보기는 각각 C(데니스 리치), Python(귀도 반 로섬), 컴퓨터 구조(폰 노이만)와 얽힌 인물이다." },

  19: { answers: ["2"],
        explanation: "Fortran 90 이다. 자유형식, 모듈, 배열 연산, 동적 할당, 파생형이 도입되어 현대 Fortran의 분기점이 되었다. 이때 표기도 FORTRAN 에서 Fortran 으로 바뀌었다." },

  20: { answers: ["-std=f2018", "f2018"],
        explanation: "-std=f2018 이다. 본문의 표준 컴파일 명령은 gfortran -O2 -std=f2018 -Wall 파일.f90 -o 실행파일 이다. 최신 표준은 2023이지만 Colab의 gfortran 이 아직 -std=f2023 을 인식하지 못해, 사용 가능한 최신 표준인 2018을 기준선으로 삼았다." },

  21: { answers: ["1"],
        explanation: "지상의 대형 컴퓨터에서 궤적·임무 계산에 쓰였다. 탑재 유도 컴퓨터(AGC)는 메모리 제약 때문에 어셈블리로 작성되었고, FORTRAN 은 지상 메인프레임에서 궤도와 연료 소모량을 계산했다. 오늘날에도 NASA 의 궤적 최적화 프로그램 Copernicus 가 Fortran 으로 돌아간다." },

  22: { answers: ["2"],
        explanation: "인텔이 만든 상업용 컴파일러라는 설명이 틀렸다. gfortran 은 GCC 에 포함된 무료·오픈소스 컴파일러다. 인텔의 상업용 컴파일러는 ifx(예전 이름 ifort)다." },

  23: { answers: ["3"],
        explanation: "-o hello 가 입력 소스를 지정한다는 설명이 틀렸다. -o 는 출력, 즉 실행 파일의 이름을 지정한다. 입력 소스는 hello.f90 이며, -o 를 생략하면 실행 파일 이름이 a.out 이 된다." },

  24: { answers: ["1"],
        explanation: "5 / 2 의 결과는 2다. 양쪽이 모두 정수면 정수 나눗셈이 되어 소수부가 버려진다. 한쪽이라도 실수면 실수 연산이 되어 2.5 가 나오므로 3번과 4번 설명은 틀렸다." },

  25: { answers: ["1"],
        explanation: "거짓이다. 표준 제정과 컴파일러 구현 사이에는 시차가 있다. 예를 들어 Colab 의 gfortran 은 -std=f2008 과 -std=f2018 은 받아들이지만 -std=f2023 은 아직 인식하지 못한다." },

  26: { answers: ["1"],
        explanation: "거짓이다. TIOBE 인덱스에서 Fortran 은 2021년 상위 20위로 복귀했고 2024년에는 한때 10위권에 진입했다. AI 와 HPC 수요의 폭발, 그리고 기존 시뮬레이션 자산의 유지보수 수요가 배경이다." },

  27: { answers: ["0"],
        explanation: "참이다. implicit none 은 암묵적 형 지정을 꺼서, 선언되지 않았거나 오타가 난 변수를 쓰면 컴파일 단계에서 오류로 막아 준다. gfortran 은 did you mean 'length'? 처럼 올바른 철자까지 제안하기도 한다." },

  28: { answers: ["1"],
        explanation: "거짓이다. Fortran 은 컴파일(번역) → 실행의 두 단계를 거치는 컴파일 언어다. 소스를 고쳤는데 결과가 그대로라면 십중팔구 재컴파일을 빠뜨린 것이다." },

  29: { answers: ["기계어", "기계어(machine language)", "machine language"],
        explanation: "기계어(machine language)다. 초창기 프로그래머들은 이 0과 1을 직접 타이핑하거나, 그것을 기호로 조금 알아보기 쉽게 바꾼 어셈블리어로 코딩했다." },

  30: { answers: ["트랜지스터", "transistor", "트랜지스터(transistor)"],
        explanation: "트랜지스터(transistor)다. p형과 n형 반도체를 접합해 만들며, 게이트에 전압을 걸거나 끊어 전류를 통제하는 아주 작은 스위치다. 최신 칩 하나에 수백억 개가 집적된다." },

  31: { answers: ["날씨마루"],
        explanation: "날씨마루다. 주소는 bd.kma.go.kr 이며 기상청이 운영한다. R, Python 과 함께 Fortran 을 분석 환경으로 제공한다." },

  32: { answers: ["!"],
        explanation: "! 다. Colab 셀에서 셸 명령은 반드시 ! 로 시작해야 한다. 붙이지 않으면 Python 코드로 해석되어 오류가 난다. 셀 내용을 파일로 저장하는 매직 명령은 %%writefile 이다." },

  33: { answers: ["1"],
        explanation: "사람이 수식이나 일상 언어에 가깝게 코드를 적으면 컴파일러가 기계어로 번역해 주도록 하여, 사람과 기계 사이의 거리를 좁히려는 시도에서 태어났다. 기계어와 어셈블리어는 짧은 계산에도 수십 줄이 필요했고 점 하나만 틀려도 밤을 새워야 했다. FORTRAN 이 그 최초의 널리 쓰인 사례다." },

  34: { answers: ["1"],
        explanation: "Fortran 은 미리 컴파일되고 배열을 통째로 빠르게 처리해 무거운 수치 계산에 강하고, Python 은 문법이 간결하며 matplotlib 같은 시각화 라이브러리가 풍부하다. 그래서 무거운 계산은 Fortran 이 맡아 csv 로 내보내고, 그 결과를 Python 이 읽어 그린다. 둘은 경쟁이 아니라 협업 관계다." },

  35: { answers: ["0"],
        explanation: "① Fortran 코드 셀은 맨 위에 %%writefile 파일명.f90 을 붙여 코드를 파일로 저장하고, ② 컴파일·실행 셀은 각 줄 앞에 ! 를 붙여 gfortran 으로 컴파일한 뒤 실행하며, ③ 시각화 셀은 순수 Python 으로 ①이 만든 데이터 파일을 읽어 그림을 그린다. 작성 → 컴파일·실행 → 시각화가 한 노트북에서 끝난다." },

  36: { answers: ["1"],
        explanation: "각 단계에서 '이 블록이 무엇을 하는가'만 보고 '안에서 어떻게 하는가'는 잊어도 되기 때문이다. 트랜지스터 → 논리 게이트 → 덧셈기·레지스터 → 프로세서로 아래층의 복잡함을 감추고 위층은 부품처럼 가져다 쓴다. 덕분에 수백억 개의 트랜지스터로 이뤄진 칩도 사람이 단계적으로 설계할 수 있다." },

  /* ---------- 실습 ---------- */
  37: { answers: [
          "y = a*x**2 + b*x + c",
          "y = a * x**2 + b * x + c",
          "y = a * x ** 2 + b * x + c"
        ],
        explanation: "y = a*x**2 + b*x + c 다. 수식을 거의 수학 표기 그대로 옮길 수 있다는 점이 고급 언어의 출발점이었다. ** 가 * 보다 우선순위가 높아 괄호 없이도 의도대로 계산된다." },

  38: { answers: ["12", "12.0"],
        explanation: "12 다. 1×25 − 3×5 + 2 = 25 − 15 + 2 = 12. 출력은 단정밀도라 12.0000000 으로 찍힌다." },

  39: { answers: ["real, parameter :: pi = 3.141592653589793"],
        explanation: "real, parameter :: pi = 3.141592653589793 이다. parameter 속성이 붙으면 실행 중에 값을 바꿀 수 없다. 다만 단정밀도라서 출력하면 3.14159274 까지만 보인다. 배정밀도로 담으려면 3장에서 배울 종류 접미사가 필요하다." },

  40: { answers: ["49"],
        explanation: "49 다. 7의 2제곱이다. + − * ** 같은 연산자가 결국 CPU 의 연산 명령으로 번역된다." },

  41: { answers: ["f"],
        explanation: "F 다. .and. 는 양쪽이 모두 참일 때만 참인데 q 가 거짓이다. 디지털 회로의 AND·OR·NOT 게이트가 Fortran 의 논리 연산에 그대로 대응한다. 참고로 p .or. q 는 T 다." },

  42: { answers: ["5050"],
        explanation: "5050 이다. 100 × 101 ÷ 2 = 5050. 수치 계산은 결국 같은 연산을 아주 빠르게 반복하는 일이라는 것을 보여주는 예제다." },

  43: { answers: ["mean = (a + b + c) / 3.0"],
        explanation: "mean = (a + b + c) / 3.0 이다. 괄호가 없으면 c / 3.0 만 먼저 계산되어 값이 틀어진다. 나누는 3 을 정수로 적어도 a, b, c 가 실수라 결과는 실수지만, 실수로 적는 습관을 들이는 편이 안전하다." },

  44: { answers: ["1024"],
        explanation: "1024 다. C 에는 거듭제곱 연산자가 기본 제공되지 않아 pow 함수를 불러야 하지만, Fortran 에는 ** 가 언어에 내장되어 있다." },

  45: { answers: ["**"],
        explanation: "** 다. 수학 공식을 교과서에 쓰인 형태 그대로 옮길 수 있게 해 주는 Fortran 의 특징 중 하나다. sqrt, sin, cos 같은 수학 함수가 내장된 것도 같은 맥락이다." },

  46: { answers: [
          "value = 10.0 + 0.5 * real(year - 2020)",
          "value = 10.0 + 0.5*real(year-2020)"
        ],
        explanation: "value = 10.0 + 0.5 * real(year - 2020) 이다. 정수 year 에서 2020 을 뺀 결과를 real 로 바꿔 실수 곱셈에 넘긴다. 이렇게 만든 값을 csv 로 내보내는 흐름이 기상 데이터를 다루는 과정의 축소판이다." },

  47: { answers: ["do year = 2020, 2025", "do year = 2020, 2025, 1"],
        explanation: "do year = 2020, 2025 다. 증감폭을 생략하면 1이 적용되어 2020, 2021, ... 2025 로 여섯 번 돈다." },

  48: { answers: ["real, parameter :: g = 9.81"],
        explanation: "real, parameter :: g = 9.81 이다. 중력가속도처럼 바뀌지 않는 값에 이름을 붙여 두면 코드 곳곳에 숫자가 흩어지는 매직 넘버 문제를 막을 수 있다." },

  49: { answers: ["19.62"],
        explanation: "19.62 다. 0.5 × 9.81 × 2.0² = 0.5 × 9.81 × 4 = 19.62. 실제 출력은 단정밀도라 19.6200008 로 찍히는데, 이는 부동소수점 표현의 한계 때문이며 3장에서 다룬다." },

  50: { answers: ["y = 2.0 * x + 1.0", "y = 2.0*x + 1.0"],
        explanation: "y = 2.0 * x + 1.0 이다. 이 값을 0부터 10까지 계산해 csv 로 내보내면 Python 이 읽어 직선 그래프를 그린다. 계산은 Fortran, 시각화는 Python 이라는 분업의 가장 단순한 사례다." }
};
