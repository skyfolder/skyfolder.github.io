/* ============================================================
   fort_prac_04_problems.js — 4장 문제 본문 (공개 파일)

   정답은 이 파일에 없습니다. answer/fort_prac_04_answers.js 에 있습니다.
   복습 18 · 이론 20 · 실습 12 = 50문항, 한 문항 1점.

   이 장의 코드는 필요한 곳에 아래 선언이 앞에 있다고 가정합니다.
     use iso_fortran_env, only: real32, real64
   ============================================================ */

window.PROBLEMS = {
  title: "FORTRAN 4장 실습",
  subtitle: "연산자와 식 · 50문제",

  sections: [
    { key: "review",   label: "복습", note: "수업 본문 예제" },
    { key: "theory",   label: "이론", note: "출제 예상 문제은행" },
    { key: "practice", label: "실습", note: "절별 보충 예제" }
  ],

  problems: [

    /* ===================== 복습 · 본문 예제 ===================== */

    { id: 1, section: "review", topic: "4.1 산술 연산자", type: "text",
      title: "정수 나눗셈의 함정",
      question: "<code>integer :: a = 17, b = 5</code> 일 때 <code>a / b</code> 의 출력값은? 숫자만 쓰시오.",
      hint: "정수끼리 나누면 몫만 남는다." },

    { id: 2, section: "review", topic: "4.1 산술 연산자", type: "line",
      title: "나머지 구하기",
      question: "정수 <code>a</code> 를 <code>b</code> 로 나눈 <b>나머지</b>를 구하는 내장 함수 호출을 쓰시오. 함수 호출 부분만 쓰시오. (부호가 피제수를 따르는 쪽)",
      hint: "Fortran에는 나머지 기호 연산자가 없다. 세 글자짜리 함수다." },

    { id: 3, section: "review", topic: "4.1 산술 연산자", type: "text",
      title: "거듭제곱",
      question: "<code>a = 17</code> 일 때 <code>a ** 2</code> 의 값은? 숫자만 쓰시오.",
      hint: "17 × 17" },

    { id: 4, section: "review", topic: "4.1 관계·논리 연산자", type: "line",
      title: "관계식을 그대로 대입하기",
      question: "<code>logic_ops</code> 예제처럼, 나이 <code>age</code> 가 19 이상인지를 논리형 변수 <code>is_adult</code> 에 <b>if 문 없이</b> 곧바로 대입하는 문장을 한 줄로 쓰시오.",
      hint: "관계식 자체가 이미 하나의 논리값이다." },

    { id: 5, section: "review", topic: "4.1 관계·논리 연산자", type: "line",
      title: "두 조건을 모두 만족",
      question: "<code>is_adult</code> 와 <code>has_ticket</code> 이 <b>둘 다</b> 참일 때만 <code>can_enter</code> 가 참이 되도록 하는 문장을 한 줄로 쓰시오.",
      hint: "논리 연산자는 양옆에 마침표를 붙인다." },

    { id: 6, section: "review", topic: "4.1 관계·논리 연산자", type: "text",
      title: "같지 않다",
      question: "Fortran에서 '같지 않다'를 뜻하는 현대 표기 기호는? 기호만 쓰시오.",
      hint: "C나 파이썬의 != 와 다르다." },

    { id: 7, section: "review", topic: "4.2 우선순위", type: "text",
      title: "곱셈이 먼저",
      question: "<code>2 + 3 * 4</code> 의 값은? 숫자만 쓰시오.",
      hint: "곱셈이 덧셈보다 우선한다." },

    { id: 8, section: "review", topic: "4.2 우선순위", type: "text",
      title: "거듭제곱의 결합 방향",
      question: "<code>2 ** 3 ** 2</code> 의 값은? 숫자만 쓰시오.",
      hint: "** 는 오른쪽부터 묶인다." },

    { id: 9, section: "review", topic: "4.2 우선순위", type: "text",
      title: "부호와 거듭제곱",
      question: "<code>-2 ** 2</code> 의 값은? 숫자만 쓰시오.",
      hint: "** 가 단항 마이너스보다 우선순위가 높다." },

    { id: 10, section: "review", topic: "4.2 우선순위", type: "line",
      title: "음수를 제곱하려면",
      question: "−2 <b>자체</b>를 제곱해 4 를 얻는 식을 쓰시오. 식만 쓰시오.",
      hint: "괄호로 부호까지 묶는다." },

    { id: 11, section: "review", topic: "4.2 우선순위", type: "text",
      title: "나눗셈의 결합 방향",
      question: "<code>10.0 / 2.0 / 5.0</code> 의 값은? 숫자만 쓰시오.",
      hint: "/ 는 왼쪽부터 묶인다." },

    { id: 12, section: "review", topic: "4.3 형 변환", type: "line",
      title: "나누기 전에 변환하기",
      question: "정수 <code>total</code> 과 <code>count</code> 를 배정밀도로 바꿔 나눈 값을 <code>avg_right</code> 에 넣는 문장을 한 줄로 쓰시오. 종류는 <code>real64</code> 를 직접 쓰시오.",
      hint: "real(값, 종류) 형태로 두 피연산자를 각각 변환한다." },

    { id: 13, section: "review", topic: "4.3 형 변환", type: "text",
      title: "괄호 안이 먼저",
      question: "<code>real(7 / 2)</code> 의 값은? 숫자만 쓰시오.",
      hint: "괄호 안의 나눗셈이 먼저 끝난다." },

    { id: 14, section: "review", topic: "4.4 수학 내장 함수", type: "line",
      title: "판별식",
      question: "<code>quadratic</code> 예제의 판별식 <code>disc</code> = b² − 4ac 를 한 줄로 쓰시오. <code>a</code>, <code>b</code>, <code>c</code> 는 배정밀도이며 리터럴에도 <code>_real64</code> 를 붙이시오.",
      hint: "제곱은 거듭제곱 연산자로 적는다. 4 는 4.0_real64 로." },

    { id: 15, section: "review", topic: "4.4 수학 내장 함수", type: "line",
      title: "근의 공식",
      question: "판별식 <code>disc</code> 를 이용해 큰 근 <code>x1</code> = (−b + √disc) ÷ (2a) 를 한 줄로 쓰시오. 분모 전체를 괄호로 묶고 리터럴에 <code>_real64</code> 를 붙이시오.",
      hint: "분모를 괄호로 묶지 않으면 2로 나눈 뒤 a를 곱하는 식이 된다." },

    { id: 16, section: "review", topic: "오류 학습", type: "line",
      title: "sqrt에 정수를 넣으면",
      question: "정수 <code>n</code> 에 대해 <code>r = sqrt(n)</code> 은 컴파일 오류가 난다. 실수 변수 <code>r</code> 에 √n 을 넣도록 고친 <b>한 줄</b>을 쓰시오.",
      hint: "sqrt 는 실수나 복소수만 받는다. 형 변환 함수로 감싼다." },

    { id: 17, section: "review", topic: "오류 학습", type: "text",
      title: "0.1 + 0.2",
      question: "<code>print *, 0.1_real64 + 0.2_real64</code> 의 출력값은? 나오는 숫자를 그대로 쓰시오.",
      hint: "0.3 이 아니다. 소수점 아래 17번째 자리에 꼬리가 붙는다." },

    { id: 18, section: "review", topic: "4.4 수학 내장 함수", type: "line",
      title: "감쇠 사인 함수",
      question: "감쇠 사인 함수 f3 = e^(−x/5) · sin x 를 <code>f3</code> 에 넣는 문장을 한 줄로 쓰시오. 배정밀도이며 리터럴에 <code>_real64</code> 를 붙이시오.",
      hint: "지수 함수는 exp 다. 5 는 5.0_real64 로 적는다." },

    /* ===================== 이론 · 문제은행 ===================== */

    { id: 19, section: "theory", topic: "산술 연산", type: "choice",
      title: "정수 나눗셈",
      question: "정수 표현식 <code>7 / 2</code> 의 값으로 옳은 것은?",
      options: ["3.5", "3", "4", "컴파일 오류"],
      hint: "소수부가 어떻게 처리되는지 생각한다." },

    { id: 20, section: "theory", topic: "우선순위", type: "choice",
      title: "연속된 거듭제곱",
      question: "<code>2 ** 3 ** 2</code> 의 값으로 옳은 것은?",
      options: ["64", "512", "256", "36"],
      hint: "왼쪽부터 묶는지 오른쪽부터 묶는지가 관건이다." },

    { id: 21, section: "theory", topic: "우선순위", type: "choice",
      title: "단항 마이너스와 거듭제곱",
      question: "<code>-2 ** 2</code> 의 값으로 옳은 것은?",
      options: ["4", "-4", "0", "컴파일 오류"],
      hint: "수학에서 −2² 이 얼마인지 떠올린다." },

    { id: 22, section: "theory", topic: "우선순위", type: "choice",
      title: "가장 높은 우선순위",
      question: "다음 연산자 중 우선순위가 가장 높은 것은?",
      options: [".and.", "==", "*", "**"],
      hint: "산술이 관계보다, 관계가 논리보다 먼저다." },

    { id: 23, section: "theory", topic: "수학 함수", type: "choice",
      title: "삼각함수의 단위",
      question: "내장 함수 <code>sin</code>, <code>cos</code>, <code>tan</code> 이 받는 인수의 단위로 옳은 것은?",
      options: ["도(degree)", "라디안(radian)", "그라드(grad)", "컴파일 시 선택"],
      hint: "도를 쓰려면 pi/180 을 곱해야 한다." },

    { id: 24, section: "theory", topic: "형 변환", type: "choice",
      title: "real(7 / 2)",
      question: "표현식 <code>real(7 / 2)</code> 의 값으로 옳은 것은?",
      options: ["3.5", "3.0", "4.0", "컴파일 오류"],
      hint: "변환은 나눗셈이 끝난 뒤에 일어난다." },

    { id: 25, section: "theory", topic: "우선순위", type: "choice",
      title: "논리 연산자의 우선순위",
      question: "<code>.not.</code>, <code>.and.</code>, <code>.or.</code> 세 논리 연산자 중 우선순위가 가장 높은 것은?",
      options: [".not.", ".and.", ".or.", "셋 다 같다"],
      hint: "부정이 먼저인지 결합이 먼저인지 생각한다." },

    { id: 26, section: "theory", topic: "우선순위", type: "choice",
      title: "논리식의 값",
      question: "논리 표현식 <code>.true. .or. .false. .and. .false.</code> 의 값으로 옳은 것은?",
      options: [".true.", ".false.", "우선순위 미정의", "컴파일 오류"],
      hint: ".and. 가 .or. 보다 먼저 묶인다." },

    { id: 27, section: "theory", topic: "형 변환", type: "choice",
      title: "real*8의 표준 대체",
      question: "비표준 표기 <code>real*8</code> 을 대체하는 표준 방식으로 옳은 것은?",
      options: [
        "real(real64)  (iso_fortran_env 사용)",
        "double real",
        "real8",
        "real(8.0)"
      ],
      hint: "종류 값을 숫자로 박지 않는 쪽이다." },

    { id: 28, section: "theory", topic: "형 변환", type: "choice",
      title: "int와 nint",
      question: "<code>int(2.9)</code> 와 <code>nint(2.9)</code> 의 값을 순서대로 옳게 나열한 것은?",
      options: ["2, 2", "3, 3", "2, 3", "3, 2"],
      hint: "하나는 버리고 하나는 반올림한다." },

    { id: 29, section: "theory", topic: "관계 연산자", type: "text",
      title: "== 의 옛 표기",
      question: "관계 연산자 <code>==</code>(같다)의 옛 Fortran 77 표기를 쓰시오.",
      hint: "양옆에 마침표를 찍은 두 글자 약어다." },

    { id: 30, section: "theory", topic: "형 변환", type: "line",
      title: "표준 배정밀도 선언",
      question: "<code>real*8 :: x</code> 를 <code>use iso_fortran_env, only: real64</code> 를 쓴 표준 방식으로 고친 <b>한 줄</b>을 쓰시오.",
      hint: "종류를 괄호 안에 명명 상수로 적는다." },

    { id: 31, section: "theory", topic: "수학 함수", type: "text",
      title: "floor",
      question: "<code>floor(-2.1)</code> 의 값은? 숫자만 쓰시오.",
      hint: "작은 쪽, 즉 음의 무한대 방향으로 보낸다." },

    { id: 32, section: "theory", topic: "수학 함수", type: "text",
      title: "ceiling",
      question: "<code>ceiling(-2.1)</code> 의 값은? 숫자만 쓰시오.",
      hint: "큰 쪽, 즉 양의 무한대 방향으로 보낸다." },

    { id: 33, section: "theory", topic: "수학 함수", type: "text",
      title: "제수의 부호를 따르는 나머지",
      question: "나머지를 구하는 두 내장 함수 가운데, 결과의 부호가 <b>제수</b>(두 번째 인수)를 따르는 쪽의 이름은? 함수 이름만 쓰시오.",
      hint: "격자 인덱스를 0부터 p−1 안으로 감쌀 때 쓰는 쪽이다." },

    { id: 34, section: "theory", topic: "실수 비교", type: "line",
      title: "거의 같은지 판정하기",
      question: "두 배정밀도 실수 <code>x</code>, <code>y</code> 가 허용 오차 <code>tol</code> 안에서 거의 같은지 판정하는 논리 표현식을 한 줄로 쓰시오. 식만 쓰시오.",
      hint: "차이의 절댓값을 허용 오차와 비교한다." },

    { id: 35, section: "theory", topic: "실수 비교", type: "choice",
      title: "참·거짓 · 실수의 == 비교",
      question: "Fortran에서 두 실수를 <code>==</code> 로 직접 비교하는 것은 안전하다.",
      options: ["참", "거짓"],
      hint: "0.1 + 0.2 가 0.3 과 같은지 떠올린다." },

    { id: 36, section: "theory", topic: "우선순위", type: "choice",
      title: "참·거짓 · ** 의 결합",
      question: "<code>**</code> 연산자는 왼쪽부터 결합한다.",
      options: ["참", "거짓"],
      hint: "2**3**2 가 64 인지 512 인지로 확인된다." },

    { id: 37, section: "theory", topic: "수학 함수", type: "choice",
      title: "참·거짓 · mod와 modulo",
      question: "<code>mod(-7, 3)</code> 과 <code>modulo(-7, 3)</code> 의 값은 서로 같다.",
      options: ["참", "거짓"],
      hint: "부호를 정하는 규칙이 서로 다르다." },

    { id: 38, section: "theory", topic: "산술 연산", type: "text",
      title: "출력 예측",
      question: "<code>print *, 5 / 2</code> 의 출력값은? 숫자만 쓰시오.",
      hint: "같은 식을 5.0 / 2.0 으로 적으면 2.5 가 된다." },

    /* ===================== 실습 · 절별 보충 예제 ===================== */

    { id: 39, section: "practice", topic: "4.1-a 산술 연산자", type: "line",
      title: "직사각형의 둘레",
      question: "배정밀도 <code>width</code> 와 <code>height</code> 로 둘레를 구해 <code>perimeter</code> 에 넣는 문장을 한 줄로 쓰시오. 둘레 = 2 × (가로 + 세로) 이며 리터럴에 <code>_real64</code> 를 붙이시오.",
      hint: "덧셈이 곱셈보다 먼저 일어나도록 괄호로 묶는다." },

    { id: 40, section: "practice", topic: "4.1-b 관계 연산자", type: "text",
      title: "같지 않은가",
      question: "<code>x = 7</code>, <code>y = 10</code> 일 때 <code>print *, x /= y</code> 의 출력은? 글자 하나만 쓰시오.",
      hint: "관계 연산의 결과는 논리형이다." },

    { id: 41, section: "practice", topic: "4.1-c 논리 연산자", type: "line",
      title: "소풍 갈까",
      question: "<code>sunny</code> 와 <code>warm</code> 이 둘 다 참일 때만 <code>go_picnic</code> 이 참이 되도록 하는 문장을 한 줄로 쓰시오.",
      hint: "논리곱 연산자를 쓴다." },

    { id: 42, section: "practice", topic: "4.2-a 괄호", type: "text",
      title: "괄호가 바꾸는 값",
      question: "<code>(2 + 3) * 4</code> 의 값은? 숫자만 쓰시오.",
      hint: "괄호가 없으면 14 다." },

    { id: 43, section: "practice", topic: "4.2-b 거듭제곱", type: "text",
      title: "오른쪽 결합 확인",
      question: "<code>2 ** 2 ** 3</code> 의 값은? 숫자만 쓰시오.",
      hint: "괄호를 (2 ** 2) ** 3 으로 치면 64 다." },

    { id: 44, section: "practice", topic: "4.2-c 논리 우선순위", type: "text",
      title: "괄호로 순서를 바꾸면",
      question: "<code>a = .true.</code>, <code>b = .false.</code>, <code>c = .false.</code> 일 때 <code>(a .or. b) .and. c</code> 의 출력은? 글자 하나만 쓰시오.",
      hint: "괄호 안이 참이어도 c 가 거짓이다." },

    { id: 45, section: "practice", topic: "4.3-a 정수 나눗셈", type: "line",
      title: "올바른 평균",
      question: "정수 <code>sum_score</code> 를 정수 <code>n</code> 으로 나눈 <b>정확한</b> 평균을 배정밀도 <code>average</code> 에 넣는 문장을 한 줄로 쓰시오. 종류는 <code>real64</code> 를 직접 쓰시오.",
      hint: "나누기 전에 두 값을 각각 변환한다." },

    { id: 46, section: "practice", topic: "4.3-b 버림과 반올림", type: "text",
      title: "음수의 반올림",
      question: "<code>v = -2.7</code> 일 때 <code>nint(v)</code> 의 값은? 숫자만 쓰시오.",
      hint: "가장 가까운 정수로 보낸다. int(v) 는 -2 다." },

    { id: 47, section: "practice", topic: "4.3-c 종류와 정밀도", type: "line",
      title: "단정밀도로 1/3 구하기",
      question: "정수 <code>i</code> 를 단정밀도로 바꿔 <code>3.0</code> 으로 나눈 값을 <code>single</code> 에 넣는 문장을 한 줄로 쓰시오. 종류는 <code>real32</code> 를 직접 쓰고 리터럴에도 붙이시오.",
      hint: "real(값, 종류) 로 변환하고, 나누는 3.0 에도 종류 접미사를 붙인다." },

    { id: 48, section: "practice", topic: "4.4-a 지수와 로그", type: "text",
      title: "상용로그",
      question: "<code>log10(1000.0_real64)</code> 의 값은? 숫자만 쓰시오.",
      hint: "10을 몇 번 곱해야 1000이 되는가." },

    { id: 49, section: "practice", topic: "4.4-b 삼각함수", type: "line",
      title: "도를 라디안으로",
      question: "각도 <code>deg</code>(도)를 라디안으로 바꿔 <code>rad</code> 에 넣는 문장을 한 줄로 쓰시오. 배정밀도 명명 상수 <code>pi</code> 가 이미 있고, 180 에는 <code>_real64</code> 를 붙이시오.",
      hint: "라디안 = 도 × π ÷ 180" },

    { id: 50, section: "practice", topic: "4.4-c 나머지와 부호", type: "text",
      title: "음수의 modulo",
      question: "<code>a = -8</code>, <code>b = 5</code> 일 때 <code>modulo(a, b)</code> 의 값은? 숫자만 쓰시오.",
      hint: "같은 값으로 mod 를 쓰면 -3 이다." }
  ]
};
