/* ============================================================
   fort_prac_01_problems.js — 1장 문제 본문 (공개 파일)

   정답은 이 파일에 없습니다. answer/fort_prac_01_answers.js 에 있습니다.
   복습 16 · 이론 20 · 실습 14 = 50문항, 한 문항 1점.

   셸 명령을 묻는 문항은 Colab 기준으로 줄 앞의 느낌표까지 함께 씁니다.
   ============================================================ */

window.PROBLEMS = {
  title: "FORTRAN 1장 실습",
  subtitle: "Fortran 소개와 개발 환경 · 50문제",

  sections: [
    { key: "review",   label: "복습", note: "수업 본문 예제" },
    { key: "theory",   label: "이론", note: "출제 예상 문제은행" },
    { key: "practice", label: "실습", note: "절별 보충 예제" }
  ],

  problems: [

    /* ===================== 복습 · 본문 예제 ===================== */

    { id: 1, section: "review", topic: "1.4 개발 환경", type: "text",
      title: "gfortran 설치",
      question: "Colab 셀에서 gfortran 컴파일러를 설치하는 명령을 쓰시오. 줄 앞의 기호까지 포함해 쓰시오.",
      hint: "apt-get 으로 설치하며, 되묻지 않도록 -y 를 붙인다. 셸 명령이므로 앞에 기호가 하나 붙는다." },

    { id: 2, section: "review", topic: "1.4 개발 환경", type: "text",
      title: "버전 확인",
      question: "설치한 gfortran의 버전을 확인하는 명령을 쓰시오. 줄 앞의 기호까지 포함해 쓰시오.",
      hint: "붙임표 두 개로 시작하는 옵션을 쓴다." },

    { id: 3, section: "review", topic: "1.5 첫 프로그램", type: "text",
      title: "코드 셀을 파일로",
      question: "Colab 코드 셀의 내용을 <code>hello.f90</code> 파일로 저장하려면 셀 <b>첫 줄</b>에 무엇을 적는가?",
      hint: "퍼센트 기호 두 개로 시작하는 매직 명령이며 파일 이름까지 적는다." },

    { id: 4, section: "review", topic: "1.5 첫 프로그램", type: "text",
      title: "표준 컴파일 명령",
      question: "<code>hello.f90</code> 을 최적화 2단계, Fortran 2018 표준 강제, 모든 경고 켜기 옵션으로 컴파일해 실행 파일 이름을 <code>hello</code> 로 만드는 명령을 Colab 기준으로 쓰시오.",
      hint: "옵션은 -O2, -std=f2018, -Wall 순으로 적고 소스 파일 뒤에 -o 로 출력 이름을 준다." },

    { id: 5, section: "review", topic: "1.5 첫 프로그램", type: "text",
      title: "실행하기",
      question: "컴파일로 만들어진 실행 파일 <code>hello</code> 를 Colab에서 실행하는 명령을 쓰시오.",
      hint: "현재 폴더를 뜻하는 표시를 앞에 붙인다." },

    { id: 6, section: "review", topic: "1.5 첫 프로그램", type: "choice",
      title: "-o 를 빼면",
      question: "컴파일 명령에서 <code>-o hello</code> 를 생략하면 어떤 실행 파일이 만들어지는가?",
      options: ["a.out", "hello.exe", "hello.f90.out", "실행 파일이 만들어지지 않는다"],
      hint: "기본 출력 파일 이름이 따로 정해져 있다." },

    { id: 7, section: "review", topic: "1.5 첫 프로그램", type: "line",
      title: "온도 변환식",
      question: "<code>hello.f90</code> 의 핵심인, 섭씨 <code>celsius</code> 를 화씨 <code>fahrenheit</code> 로 바꾸는 문장을 한 줄로 쓰시오. 모든 숫자를 <b>실수</b>로 적으시오.",
      hint: "화씨 = 섭씨 × 9 ÷ 5 + 32. 9, 5, 32 를 모두 소수점이 있는 형태로 적는다." },

    { id: 8, section: "review", topic: "1.5 첫 프로그램", type: "line",
      title: "변환 범위",
      question: "<code>hello.f90</code> 에서 <code>i</code> 가 −40부터 100까지 <b>10씩</b> 증가하는 반복문의 첫 줄을 쓰시오.",
      hint: "do 변수 = 시작, 끝, 증감폭" },

    { id: 9, section: "review", topic: "1.5 첫 프로그램", type: "text",
      title: "csv 헤더",
      question: "<code>hello.f90</code> 이 <code>temp.csv</code> 의 첫 줄에 써 넣는 헤더는? 그대로 쓰시오.",
      hint: "두 열의 이름을 쉼표로 잇는다. 빈칸은 없다." },

    { id: 10, section: "review", topic: "1.5 첫 프로그램", type: "text",
      title: "두 눈금이 만나는 곳",
      question: "섭씨 −40도는 화씨 몇 도인가? 숫자만 쓰시오.",
      hint: "그래프에서 두 축의 눈금이 정확히 교차하는 지점이다." },

    { id: 11, section: "review", topic: "오류 학습", type: "choice",
      title: "소수점에 쉼표를 찍으면",
      question: "<code>g = 9,8</code> 처럼 소수점 자리에 쉼표를 찍으면 어떤 오류가 나는가?",
      options: [
        "컴파일 에러 — Unclassifiable statement",
        "런타임 에러 — 실행 중에 멈춘다",
        "반올림 에러 — 값이 미세하게 어긋난다",
        "오류 없이 9.8 로 처리된다"
      ],
      hint: "번역 단계에서 걸리는지, 실행 단계에서 걸리는지 생각한다." },

    { id: 12, section: "review", topic: "오류 학습", type: "text",
      title: "조용한 정수 나눗셈",
      question: "<code>integer :: nine = 9, five = 5</code> 일 때 <code>nine / five</code> 의 값은? 숫자만 쓰시오.",
      hint: "정수끼리 나누면 소수부가 버려진다." },

    { id: 13, section: "review", topic: "오류 학습", type: "line",
      title: "212도가 나오게 고치기",
      question: "아래 문장은 100°C 를 212°F 가 아니라 132 로 계산한다. 올바른 값이 나오도록 고친 <b>한 줄</b>을 쓰시오.<pre>fahrenheit = celsius * (nine / five) + 32.0</pre>",
      hint: "괄호 안에서 정수끼리 나뉘는 것이 문제다. 한쪽을 실수로 바꾼다." },

    { id: 14, section: "review", topic: "오류 학습", type: "text",
      title: "0.1을 열 번 더하면",
      question: "단정밀도 <code>total</code> 에 <code>0.1</code> 을 열 번 더한 뒤 출력하면 무엇이 나오는가? 나오는 숫자를 그대로 쓰시오.",
      hint: "1.0 이 아니다. 소수점 아래 여덟째 자리쯤에 꼬리가 붙는다." },

    { id: 15, section: "review", topic: "오류 학습", type: "text",
      title: "1.0과 같은가",
      question: "위 <code>total</code> 에 대해 <code>print *, (total == 1.0)</code> 의 출력은? 글자 하나만 쓰시오.",
      hint: "논리값은 T 나 F 로 찍힌다." },

    { id: 16, section: "review", topic: "오류 학습", type: "choice",
      title: "위험한 순서",
      question: "네 가지 오류를 '드러나기 쉬운 것부터 조용해서 위험한 것' 순으로 바르게 늘어놓은 것은?",
      options: [
        "반올림 → 로직 → 런타임 → 컴파일",
        "컴파일 → 런타임 → 로직 → 반올림",
        "런타임 → 컴파일 → 반올림 → 로직",
        "로직 → 반올림 → 컴파일 → 런타임"
      ],
      hint: "번역 단계에서 바로 잡히는 오류가 가장 다루기 쉽다." },

    /* ===================== 이론 · 문제은행 ===================== */

    { id: 17, section: "theory", topic: "역사", type: "choice",
      title: "이름의 어원",
      question: "Fortran이라는 이름의 어원으로 옳은 것은?",
      options: ["Formal Translation", "Formula Translation", "Fortran Transaction", "Format Translator"],
      hint: "수식을 번역한다는 뜻이다." },

    { id: 18, section: "theory", topic: "역사", type: "choice",
      title: "등장 시기와 개발자",
      question: "Fortran의 등장 시기와 개발자로 옳은 것은?",
      options: [
        "1957년, 존 배커스(IBM)",
        "1972년, 데니스 리치(벨 연구소)",
        "1991년, 귀도 반 로섬",
        "1949년, 존 폰 노이만"
      ],
      hint: "나머지 보기는 각각 C, Python, 컴퓨터 구조와 얽힌 인물이다." },

    { id: 19, section: "theory", topic: "표준", type: "choice",
      title: "현대 Fortran의 출발점",
      question: "'현대 Fortran(Modern Fortran)'의 출발점으로 보는 표준은?",
      options: ["FORTRAN 66", "FORTRAN 77", "Fortran 90", "Fortran 2003"],
      hint: "자유형식, 모듈, 배열 연산, 동적 할당, 파생형이 한꺼번에 들어온 표준이다." },

    { id: 20, section: "theory", topic: "표준", type: "text",
      title: "이 책의 표준 옵션",
      question: "이 책의 모든 예제가 컴파일 명령에 쓰는 표준 강제 옵션을 그대로 쓰시오.",
      hint: "-std= 뒤에 표준 이름이 붙는다. 본문의 컴파일 명령을 그대로 떠올린다." },

    { id: 21, section: "theory", topic: "역사", type: "choice",
      title: "아폴로 계획에서의 역할",
      question: "아폴로 계획에서 Fortran의 역할을 가장 정확히 설명한 것은?",
      options: [
        "우주선에 탑재된 유도 컴퓨터(AGC)가 Fortran으로 작동했다",
        "지상의 대형 컴퓨터에서 궤적·임무 계산에 Fortran이 쓰였다",
        "Fortran은 아폴로 계획과 전혀 관련이 없다",
        "우주인의 음성 통신을 처리하는 데 쓰였다"
      ],
      hint: "탑재 컴퓨터는 메모리 제약 때문에 어셈블리로 작성되었다." },

    { id: 22, section: "theory", topic: "개발 환경", type: "choice",
      title: "gfortran 설명 중 틀린 것",
      question: "gfortran에 대한 설명으로 <b>옳지 않은</b> 것은?",
      options: [
        "GNU 컴파일러 모음(GCC)에 포함된 컴파일러다",
        "무료이며 오픈소스다",
        "인텔이 만든 상업용 컴파일러다",
        "Fortran 표준을 충실히 따른다"
      ],
      hint: "인텔의 상업용 컴파일러는 이름이 따로 있다." },

    { id: 23, section: "theory", topic: "개발 환경", type: "choice",
      title: "컴파일 옵션 설명 중 틀린 것",
      question: "<code>gfortran -O2 -std=f2008 -Wall hello.f90 -o hello</code> 의 옵션 설명으로 <b>옳지 않은</b> 것은?",
      options: [
        "-O2 — 최적화 수준 2",
        "-std=f2008 — Fortran 2008 표준 강제",
        "-Wall — 모든 경고를 켬",
        "-o hello — 입력 소스 파일을 지정"
      ],
      hint: "입력 소스는 이미 hello.f90 로 적혀 있다." },

    { id: 24, section: "theory", topic: "연산", type: "choice",
      title: "정수 나눗셈",
      question: "다음 중 옳은 것은?",
      options: [
        "5 / 2 의 결과는 2.5 다",
        "5 / 2 의 결과는 2 다",
        "5.0 / 2.0 의 결과는 2 다",
        "5 / 2.0 의 결과는 2 다"
      ],
      hint: "한쪽이라도 실수면 실수 연산이 된다." },

    { id: 25, section: "theory", topic: "표준", type: "choice",
      title: "참·거짓 · 표준과 컴파일러",
      question: "최신 표준이 Fortran 2023이므로, 모든 최신 컴파일러는 Fortran 2023의 모든 기능을 지원한다.",
      options: ["참", "거짓"],
      hint: "표준 제정과 컴파일러 구현 사이에 시차가 있다." },

    { id: 26, section: "theory", topic: "역사", type: "choice",
      title: "참·거짓 · 인기 추이",
      question: "Fortran은 1950년대 이후 인기가 계속 떨어지기만 했다.",
      options: ["참", "거짓"],
      hint: "TIOBE 인덱스에서 최근 어떤 일이 있었는지 떠올린다." },

    { id: 27, section: "theory", topic: "implicit none", type: "choice",
      title: "참·거짓 · implicit none",
      question: "<code>implicit none</code> 을 쓰면 선언하지 않은 변수를 실수로 사용할 때 컴파일 오류로 잡아 준다.",
      options: ["참", "거짓"],
      hint: "암묵적 형 지정을 끄면 무슨 일이 생기는지 생각한다." },

    { id: 28, section: "theory", topic: "컴파일", type: "choice",
      title: "참·거짓 · 인터프리터",
      question: "Fortran은 코드를 적으면 별도의 컴파일 단계 없이 곧바로 실행되는 인터프리터 언어다.",
      options: ["참", "거짓"],
      hint: "소스를 고쳤을 때 무엇을 다시 해야 하는지 떠올린다." },

    { id: 29, section: "theory", topic: "컴퓨터 구조", type: "text",
      title: "0과 1의 언어",
      question: "컴퓨터가 직접 이해하는, 0과 1로 이루어진 언어를 무엇이라 하는가? 우리말 용어로 쓰시오.",
      hint: "이것을 기호로 조금 알아보기 쉽게 바꾼 것이 어셈블리어다." },

    { id: 30, section: "theory", topic: "컴퓨터 구조", type: "text",
      title: "작은 전자 스위치",
      question: "전기로 켜고 끌 수 있는 작은 스위치 역할을 하며, 여러 개를 연결해 논리 게이트를 만드는 반도체 소자의 이름은?",
      hint: "p-n 접합을 바탕으로 만들어지며, 최신 칩 하나에 수백억 개가 들어간다." },

    { id: 31, section: "theory", topic: "활용", type: "text",
      title: "기상 빅데이터 플랫폼",
      question: "우리나라 기상청이 운영하며 R·Python과 함께 Fortran을 분석 환경으로 제공하는 기상기후 빅데이터 분석 플랫폼의 이름은?",
      hint: "주소가 bd.kma.go.kr 이다." },

    { id: 32, section: "theory", topic: "개발 환경", type: "text",
      title: "셸 명령 표시",
      question: "Colab의 코드 셀에서 셸(리눅스) 명령을 실행하려면 명령 맨 앞에 붙이는 기호는? 기호 하나만 쓰시오.",
      hint: "붙이지 않으면 Python 코드로 읽혀 오류가 난다." },

    { id: 33, section: "theory", topic: "언어의 계층", type: "choice",
      title: "고급 언어가 등장한 이유",
      question: "고급 언어가 등장한 이유로 가장 알맞은 것은?",
      options: [
        "기계어보다 실행 속도가 빨라서",
        "사람이 수식이나 일상 언어에 가깝게 코드를 적으면 컴파일러가 기계어로 번역해 주도록 하여 사람과 기계의 거리를 좁히려고",
        "어셈블리어가 특정 CPU에서만 동작해서 표준화가 필요했기 때문에",
        "메모리 용량이 커져서 긴 코드를 담을 수 있게 되었기 때문에"
      ],
      hint: "짧은 수식 하나에도 수십 줄을 적어야 했던 시절을 떠올린다." },

    { id: 34, section: "theory", topic: "분업", type: "choice",
      title: "계산은 Fortran, 시각화는 Python",
      question: "이 책이 '계산은 Fortran, 시각화는 Python'이라는 분업을 택한 이유로 가장 알맞은 것은?",
      options: [
        "Fortran으로는 파일을 쓸 수 없어서",
        "Fortran은 미리 컴파일되어 무거운 수치 계산에 강하고, Python은 matplotlib 같은 시각화 라이브러리가 풍부해서",
        "Python이 Fortran보다 계산이 빨라서",
        "Colab에서 Fortran 그래프 기능이 막혀 있어서"
      ],
      hint: "두 언어는 경쟁이 아니라 협업 관계다." },

    { id: 35, section: "theory", topic: "개발 환경", type: "choice",
      title: "3-셀 패턴",
      question: "Colab의 '3-셀 패턴'을 바르게 설명한 것은?",
      options: [
        "① Fortran 코드 셀(%%writefile 로 저장) ② 컴파일·실행 셀(줄 앞에 !) ③ Python 시각화 셀",
        "① 설치 셀 ② Fortran 코드 셀 ③ 컴파일 셀",
        "① Python 코드 셀 ② Fortran 코드 셀 ③ 텍스트 셀",
        "① 텍스트 셀 ② 코드 셀 ③ 출력 셀"
      ],
      hint: "작성 → 컴파일·실행 → 시각화가 한 노트북에서 끝난다." },

    { id: 36, section: "theory", topic: "컴퓨터 구조", type: "choice",
      title: "추상화 계층의 힘",
      question: "추상화 계층이 복잡한 칩 설계를 가능하게 하는 이유로 가장 알맞은 것은?",
      options: [
        "트랜지스터 개수를 줄여 주기 때문에",
        "각 단계에서 '이 블록이 무엇을 하는가'만 보고 '안에서 어떻게 하는가'는 잊어도 되기 때문에",
        "설계 도구가 자동으로 오류를 고쳐 주기 때문에",
        "물리 법칙을 무시할 수 있게 해 주기 때문에"
      ],
      hint: "아래층의 복잡함을 감추고 위층은 부품처럼 가져다 쓰는 구조다." },

    /* ===================== 실습 · 절별 보충 예제 ===================== */

    { id: 37, section: "practice", topic: "1.1-2 수식 번역", type: "line",
      title: "이차식을 그대로 코드로",
      question: "수식 y = a·x² + b·x + c 를 <code>y</code> 에 대입하는 문장을 한 줄로 쓰시오. 거듭제곱 연산자를 쓰시오.",
      hint: "곱셈은 *, 거듭제곱은 별표 두 개다." },

    { id: 38, section: "practice", topic: "1.1-2 수식 번역", type: "text",
      title: "이차식의 값",
      question: "<code>a = 1.0</code>, <code>b = -3.0</code>, <code>c = 2.0</code>, <code>x = 5.0</code> 일 때 y = a·x² + b·x + c 의 값은? 숫자만 쓰시오.",
      hint: "25 − 15 + 2" },

    { id: 39, section: "practice", topic: "1.1-3 현대 스타일", type: "line",
      title: "이름 있는 상수",
      question: "단정밀도 실수 명명 상수 <code>pi</code> 를 <code>3.141592653589793</code> 으로 선언하시오. 종류 접미사는 붙이지 마시오.",
      hint: "자료형, parameter :: 이름 = 값" },

    { id: 40, section: "practice", topic: "1.2-1 산술 연산", type: "text",
      title: "거듭제곱 연산",
      question: "<code>integer :: a = 7, b = 2</code> 일 때 <code>a ** b</code> 의 값은? 숫자만 쓰시오.",
      hint: "7의 2제곱이다." },

    { id: 41, section: "practice", topic: "1.2-3 논리 게이트", type: "text",
      title: "AND 게이트",
      question: "<code>logical :: p = .true., q = .false.</code> 일 때 <code>p .and. q</code> 의 출력은? 글자 하나만 쓰시오.",
      hint: "양쪽이 모두 참이어야 참이다." },

    { id: 42, section: "practice", topic: "1.3-1 반복 계산", type: "text",
      title: "1부터 100까지의 합",
      question: "1부터 100까지 모든 정수를 더하면 얼마인가? 숫자만 쓰시오.",
      hint: "100 × 101 ÷ 2" },

    { id: 43, section: "practice", topic: "1.3-2 평균", type: "line",
      title: "세 수의 평균",
      question: "실수 <code>a</code>, <code>b</code>, <code>c</code> 의 평균을 <code>mean</code> 에 넣는 문장을 한 줄로 쓰시오. 나누는 3 도 실수로 적으시오.",
      hint: "먼저 더하도록 괄호로 묶는다." },

    { id: 44, section: "practice", topic: "1.4-1 거듭제곱 연산자", type: "text",
      title: "2의 10제곱",
      question: "<code>2 ** 10</code> 의 값은? 숫자만 쓰시오.",
      hint: "1024 근처의 수다." },

    { id: 45, section: "practice", topic: "1.4-1 거듭제곱 연산자", type: "text",
      title: "C에는 없는 연산자",
      question: "C 언어에는 기본으로 제공되지 않지만 Fortran에는 있는, 거듭제곱을 나타내는 연산자는? 기호만 쓰시오.",
      hint: "별표를 두 번 쓴다." },

    { id: 46, section: "practice", topic: "1.5-3 추세값 csv", type: "line",
      title: "연도별 추세값",
      question: "2020년을 기준으로 해마다 0.5씩 오르는 값을 <code>value</code> 에 넣는 문장을 한 줄로 쓰시오. 기준값은 10.0 이고 정수 <code>year</code> 를 실수로 바꿔 쓰시오.",
      hint: "값 = 10.0 + 0.5 × (연도 − 2020). 괄호 안의 뺄셈 결과를 real 로 감싼다." },

    { id: 47, section: "practice", topic: "1.5-3 추세값 csv", type: "line",
      title: "연도 반복",
      question: "<code>year</code> 가 2020년부터 2025년까지 1씩 증가하는 반복문의 첫 줄을 쓰시오.",
      hint: "증감폭이 1이면 생략할 수 있다." },

    { id: 48, section: "practice", topic: "1.7-3 자유낙하", type: "line",
      title: "중력가속도 상수",
      question: "중력가속도 <code>g</code> 를 <code>9.81</code> 인 단정밀도 명명 상수로 선언하시오.",
      hint: "실행 중에 값이 바뀌지 않도록 속성을 붙인다." },

    { id: 49, section: "practice", topic: "1.7-3 자유낙하", type: "text",
      title: "2초 동안 떨어진 거리",
      question: "<code>g = 9.81</code>, <code>t = 2.0</code> 일 때 자유낙하 거리 ½·g·t² 의 값은? 소수점 둘째 자리까지 쓰시오.",
      hint: "0.5 × 9.81 × 4" },

    { id: 50, section: "practice", topic: "1.8-1 직선 데이터", type: "line",
      title: "직선의 값",
      question: "y = 2x + 1 을 <code>y</code> 에 넣는 문장을 한 줄로 쓰시오. <code>x</code> 는 실수이며 계수도 실수로 적으시오.",
      hint: "2.0 과 1.0 처럼 소수점을 붙인다." }
  ]
};
