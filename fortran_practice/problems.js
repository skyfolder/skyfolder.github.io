/* ============================================================
   problems.js — 문제 본문 (공개 파일)
   정답은 이 파일에 없습니다. answer/ 폴더에 따로 보관합니다.
   ============================================================ */

window.PROBLEMS = {
  title: "FORTRAN 2장 실습",
  subtitle: "프로그램 구조와 기본 문법 · 50문제",

  sections: [
    { key: "review",   label: "복습", note: "수업 본문 예제" },
    { key: "theory",   label: "이론", note: "출제 예상 문제은행" },
    { key: "practice", label: "실습", note: "절별 보충 예제" }
  ],

  problems: [

    /* ===================== 복습 · 본문 예제 ===================== */

    { id: 1, section: "review", topic: "2.1 소스 형식", type: "text",
      title: "Colab에 소스 저장하기",
      question: "Colab 셀에 작성한 코드를 <code>f2c.f90</code> 파일로 저장하려면 셀 <b>첫 줄</b>에 무엇을 적는가?",
      hint: "퍼센트 기호 두 개로 시작하는 매직 명령이다. 파일 이름까지 함께 적는다." },

    { id: 2, section: "review", topic: "2.1 소스 형식", type: "choice",
      title: "고정형식 1열의 C",
      question: "<code>fixed_demo.f</code> 의 첫 줄 <code>C     Fixed-form example</code> 에서 1열의 <code>C</code>는 무엇을 뜻하는가?",
      options: ["그 줄 전체가 주석이다", "문장 라벨 번호다", "앞 줄에서 이어지는 문장이다", "문장 본문의 시작이다"],
      hint: "고정형식에서 1열은 특별한 자리다." },

    { id: 3, section: "review", topic: "2.1 소스 형식", type: "text",
      title: "고정형식 줄잇기 자리",
      question: "고정형식에서 앞 줄에 이어지는 문장임을 표시하려면 <b>몇 열</b>에 빈칸이 아닌 문자를 놓아야 하는가? 숫자만 쓰시오.",
      hint: "1~5열은 라벨, 7열부터는 본문이다. 그 사이에 낀 한 칸이다." },

    { id: 4, section: "review", topic: "2.1 소스 형식", type: "text",
      title: "고정형식 실행 결과",
      question: "아래 고정형식 코드가 출력하는 <code>total</code> 값은? 숫자만 쓰시오.<pre>      total = 21 +\n     &        21\n      print *, \"total =\", total</pre>",
      hint: "6열의 & 때문에 두 줄이 한 문장으로 이어진다." },

    { id: 5, section: "review", topic: "2.1 소스 형식", type: "choice",
      title: "확장자를 잘못 준 경우",
      question: "자유형식으로 쓴 코드를 실수로 <code>.f</code> 확장자로 저장했다. 컴파일할 때 나오기 쉬운 오류는?",
      options: [
        "Non-numeric character in statement label",
        "Symbol has no IMPLICIT type",
        "Unexpected data declaration statement",
        "Named constant in variable definition context"
      ],
      hint: "고정형식으로 읽히면 앞쪽 열을 라벨 자리로 해석한다." },

    { id: 6, section: "review", topic: "2.2 프로그램 단위", type: "line",
      title: "선언부 한 줄",
      question: "<code>seconds_per_day</code> 프로그램은 정수 변수 <code>hours</code>, <code>minutes</code>, <code>seconds</code>, <code>total</code> 네 개를 쓴다. 이 넷을 <b>한 줄</b>로 선언하시오.",
      hint: "타입 :: 이름1, 이름2, ... 순서로 쉼표를 써서 나열한다." },

    { id: 7, section: "review", topic: "2.2 프로그램 단위", type: "line",
      title: "하루의 총 초",
      question: "<code>hours</code>, <code>minutes</code>, <code>seconds</code> 를 곱해 <code>total</code> 에 넣는 대입문을 한 줄로 쓰시오.",
      hint: "곱셈 기호는 * 이다." },

    { id: 8, section: "review", topic: "2.2 프로그램 단위", type: "text",
      title: "하루는 몇 초인가",
      question: "<code>hours = 24</code>, <code>minutes = 60</code>, <code>seconds = 60</code> 일 때 <code>total</code> 의 출력값은? 숫자만 쓰시오.",
      hint: "24 × 60 × 60" },

    { id: 9, section: "review", topic: "2.2 문장 구조", type: "line",
      title: "세미콜론으로 세 문장",
      question: "<code>a</code>, <code>b</code>, <code>c</code> 에 각각 1, 2, 3을 대입하는 세 문장을 <b>한 줄</b>에 이어 쓰시오.",
      hint: "문장과 문장 사이를 세미콜론으로 구분한다." },

    { id: 10, section: "review", topic: "2.2 문장 구조", type: "text",
      title: "줄잇기한 print의 결과",
      question: "아래 코드의 출력값은? 숫자만 쓰시오.<pre>a = 1; b = 2; c = 3\nprint *, \"sum =\", a + b + &\n         c</pre>",
      hint: "& 는 다음 줄을 같은 문장으로 잇는다." },

    { id: 11, section: "review", topic: "2.2 문장 구조", type: "text",
      title: "줄잇기 기호",
      question: "자유형식에서 한 문장을 다음 줄로 이을 때 끊는 줄 끝에 붙이는 기호는? 기호 한 글자만 쓰시오.",
      hint: "앰퍼샌드라고 부른다." },

    { id: 12, section: "review", topic: "2.3 식별자", type: "text",
      title: "대소문자 비구분",
      question: "아래 코드의 출력값은? 숫자만 쓰시오.<pre>integer :: count\ncount = 10\nCOUNT = COUNT + 5\nprint *, \"count =\", count</pre>",
      hint: "Fortran이 count와 COUNT를 같은 변수로 보는지 다른 변수로 보는지 생각한다." },

    { id: 13, section: "review", topic: "2.4 implicit none", type: "line",
      title: "실수 두 개 선언",
      question: "<code>f2c</code> 프로그램에서 쓸 실수형 변수 <code>fahrenheit</code> 와 <code>celsius</code> 를 <b>한 줄</b>로 선언하시오.",
      hint: "실수형 타입 이름은 real 이다." },

    { id: 14, section: "review", topic: "2.4 implicit none", type: "line",
      title: "화씨를 섭씨로",
      question: "화씨 <code>fahrenheit</code> 를 섭씨 <code>celsius</code> 로 바꾸는 대입문을 한 줄로 쓰시오. 변환식은 (F − 32) × 5 ÷ 9 이며, 모든 숫자를 <b>실수 상수</b>로 적으시오.",
      hint: "32.0, 5.0, 9.0 처럼 소수점을 붙인다. 빼기를 먼저 하도록 괄호가 필요하다." },

    { id: 15, section: "review", topic: "2.4 implicit none", type: "text",
      title: "오타가 만든 유령 변수",
      question: "<code>implicit none</code> 없이 <code>fahrenheit</code> 를 <code>fahreheit</code> 로 잘못 쓰면 컴파일러가 오타 이름을 새 실수 변수로 만든다. 이때 그 변수가 가지는 값은 얼마인가? 숫자만 쓰시오.",
      hint: "결과 −17.78 을 역산해 본다. (□ − 32) × 5 ÷ 9 = −17.78" },

    { id: 16, section: "review", topic: "2.4 implicit none", type: "choice",
      title: "implicit none을 넣은 뒤의 메시지",
      question: "<code>implicit none</code> 을 넣고도 <code>fahreheit</code> 오타를 그대로 두면 gfortran은 어떻게 반응하는가?",
      options: [
        "경고만 내고 컴파일에 성공한다",
        "Error: Symbol 'fahreheit' at (1) has no IMPLICIT type 오류로 컴파일을 거부한다",
        "Warning: 'fahreheit' is used uninitialized 경고를 내고 실행 파일을 만든다",
        "아무 메시지 없이 컴파일된다"
      ],
      hint: "조용한 런타임 버그가 무엇으로 바뀌는지 떠올린다." },

    { id: 17, section: "review", topic: "2.2 프로그램 단위", type: "line",
      title: "선언 순서 위반 고치기",
      question: "아래 코드는 <code>Unexpected data declaration statement</code> 오류가 난다. 두 선언을 합쳐 선언부에 놓을 <b>한 줄</b>을 쓰시오.<pre>integer :: a\na = 10\ninteger :: b\nb = 20</pre>",
      hint: "같은 타입이면 쉼표로 나란히 선언한다." },

    { id: 18, section: "review", topic: "2.2 프로그램 단위", type: "line",
      title: "3차 다항식",
      question: "<code>io_flow</code> 예제의 계산식이다. y = x³ − 6x² + 9x + 1 을 <code>y</code> 에 대입하는 문장을 한 줄로 쓰시오. 계수는 모두 <b>실수 상수</b>로 적으시오.",
      hint: "거듭제곱은 별표 두 개다. 6.0, 9.0, 1.0 처럼 소수점을 붙인다." },

    /* ===================== 이론 · 문제은행 ===================== */

    { id: 19, section: "theory", topic: "환경", type: "choice",
      title: "셸 명령 표시",
      question: "Colab의 3-셀 패턴에서 컴파일·실행 같은 셸 명령 줄 앞에 붙이는 기호는?",
      options: ["%", "!", "#", "&"],
      hint: "이 기호가 없으면 Python 코드로 읽혀 SyntaxError가 난다." },

    { id: 20, section: "theory", topic: "환경", type: "choice",
      title: "실행 파일 이름 지정",
      question: "다음 명령에서 실행 파일의 이름을 지정하는 옵션은?<pre>gfortran -O2 -std=f2008 -Wall hello.f90 -o hello</pre>",
      options: ["-O2", "-std=f2008", "-Wall", "-o"],
      hint: "생략하면 a.out 이 만들어진다." },

    { id: 21, section: "theory", topic: "2.1 소스 형식", type: "choice",
      title: "자유형식 확장자",
      question: "자유형식 소스 파일의 확장자로 올바른 것은?",
      options: [".f", ".for", ".f90", ".ftn"],
      hint: "gfortran은 확장자로 소스 형식을 판별한다." },

    { id: 22, section: "theory", topic: "2.1 소스 형식", type: "choice",
      title: "고정형식 7~72열",
      question: "고정형식에서 7~72열에 적는 것은?",
      options: ["한 줄 전체 주석", "문장 라벨(번호)", "실제 문장 본문", "줄잇기 표시"],
      hint: "1열은 주석, 1~5열은 라벨, 6열은 줄잇기다." },

    { id: 23, section: "theory", topic: "2.4 implicit none", type: "choice",
      title: "암묵적 자료형",
      question: "<code>implicit none</code> 이 없을 때, 선언하지 않은 변수 <code>kount</code> 의 암묵적 자료형은?",
      options: ["real", "integer", "logical", "character"],
      hint: "첫 글자가 I~N 범위에 드는지 확인한다." },

    { id: 24, section: "theory", topic: "2.4 implicit none", type: "choice",
      title: "implicit none의 위치",
      question: "주 프로그램에서 <code>implicit none</code> 을 두는 올바른 위치는?",
      options: [
        "program 문보다 앞",
        "use 문 다음, 변수 선언보다 앞",
        "실행문 사이 아무 곳",
        "end program 직전"
      ],
      hint: "선언부 안에서의 순서를 떠올린다." },

    { id: 25, section: "theory", topic: "연산", type: "choice",
      title: "정수 나눗셈",
      question: "정수끼리의 나눗셈 <code>7 / 2</code> 의 결과는?",
      options: ["3.5", "3", "4", "컴파일 오류"],
      hint: "소수점 이하가 어떻게 처리되는지 생각한다." },

    { id: 26, section: "theory", topic: "2.3 식별자", type: "choice",
      title: "유효한 식별자",
      question: "다음 중 유효한 Fortran 식별자는?",
      options: ["2nd_run", "wave-speed", "n_steps", "my var"],
      hint: "영문자로 시작하고 영문자·숫자·밑줄만 쓴다." },

    { id: 27, section: "theory", topic: "2.3 식별자", type: "choice",
      title: "참·거짓 · 대소문자",
      question: "Fortran은 식별자와 키워드에서 대소문자를 구분하므로 <code>count</code> 와 <code>Count</code> 는 서로 다른 변수이다.",
      options: ["참", "거짓"],
      hint: "case_demo 예제의 출력이 15였던 이유를 떠올린다." },

    { id: 28, section: "theory", topic: "2.1 소스 형식", type: "choice",
      title: "참·거짓 · 줄잇기",
      question: "자유형식에서 한 문장을 다음 줄로 이으려면 끊는 줄의 끝에 앰퍼샌드 <code>&amp;</code> 를 붙인다.",
      options: ["참", "거짓"],
      hint: "고정형식의 6열 방식과 헷갈리지 않도록 한다." },

    { id: 29, section: "theory", topic: "2.3 식별자", type: "choice",
      title: "참·거짓 · 예약어",
      question: "<code>program</code>, <code>integer</code> 같은 키워드는 예약어이므로 변수 이름으로 사용하는 것이 문법적으로 불가능하다.",
      options: ["참", "거짓"],
      hint: "권장되지 않는 것과 불가능한 것은 다르다." },

    { id: 30, section: "theory", topic: "환경", type: "choice",
      title: "참·거짓 · 재컴파일",
      question: "소스를 수정하면 재컴파일하지 않아도 기존 실행 파일을 다시 실행할 때 변경이 반영된다.",
      options: ["참", "거짓"],
      hint: "실행 파일은 언제 만들어진 코드인가?" },

    { id: 31, section: "theory", topic: "변수", type: "choice",
      title: "참·거짓 · parameter",
      question: "<code>parameter</code> 속성이 붙은 이름에는 프로그램 실행 중 다른 값을 다시 대입할 수 있다.",
      options: ["참", "거짓"],
      hint: "parameter가 붙은 이름을 무엇이라 부르는지 생각한다." },

    { id: 32, section: "theory", topic: "2.3 주석", type: "text",
      title: "주석 기호",
      question: "자유형식에서 주석을 시작하는 기호는? 기호 한 글자만 쓰시오.",
      hint: "이 기호부터 줄 끝까지가 주석이다." },

    { id: 33, section: "theory", topic: "2.2 문장 구조", type: "text",
      title: "문장 구분 기호",
      question: "한 줄에 여러 문장을 나란히 쓸 때 문장을 구분하는 기호는? 기호 한 글자만 쓰시오.",
      hint: "a = 1 □ b = 2 에서 네모 자리에 오는 기호다." },

    { id: 34, section: "theory", topic: "연산", type: "text",
      title: "거듭제곱 연산자",
      question: "Fortran에서 거듭제곱을 나타내는 연산자는? 기호만 쓰시오.",
      hint: "radius의 제곱을 radius□2 로 쓸 때 네모 자리에 오는 기호다." },

    { id: 35, section: "theory", topic: "환경", type: "text",
      title: "경고 켜기 옵션",
      question: "gfortran에서 가능한 모든 경고를 켜는 컴파일 옵션은? 옵션 그대로 쓰시오.",
      hint: "Warn all 의 줄임말이며 붙임표로 시작한다." },

    { id: 36, section: "theory", topic: "2.4 implicit none", type: "choice",
      title: "오타 변수의 운명",
      question: "<code>implicit none</code> 이 <b>없을 때</b>, 오타가 든 변수 이름은 어떻게 처리되는가?",
      options: [
        "암묵적 형 지정 규칙에 따라 새 변수로 조용히 만들어진다",
        "그 자리에서 컴파일 오류가 난다",
        "실행 시점에 런타임 오류로 멈춘다",
        "컴파일러가 가장 비슷한 이름으로 자동 교정한다"
      ],
      hint: "컴파일은 통과하는데 답이 틀렸던 사례를 떠올린다." },

    { id: 37, section: "theory", topic: "2.1 소스 형식", type: "choice",
      title: "두 형식의 줄잇기 비교",
      question: "자유형식과 고정형식의 줄잇기 방식을 바르게 짝지은 것은?",
      options: [
        "자유형식은 다음 줄 1열에 &, 고정형식은 끊는 줄 끝에 &",
        "자유형식은 끊는 줄 끝에 &, 고정형식은 다음 줄 6열에 빈칸이 아닌 문자",
        "둘 다 끊는 줄 끝에 & 를 붙인다",
        "자유형식은 줄잇기가 없고 고정형식만 가능하다"
      ],
      hint: "고정형식은 칸 위치가 곧 문법이다." },

    { id: 38, section: "theory", topic: "2.2 프로그램 단위", type: "choice",
      title: "선언 먼저, 동작 나중",
      question: "주 프로그램에서 선언부가 실행부보다 반드시 먼저 와야 하는 이유로 가장 알맞은 것은?",
      options: [
        "실행 속도가 빨라지기 때문",
        "컴파일러가 변수의 자료형을 알아야 그 변수를 쓰는 문장을 번역할 수 있기 때문",
        "표준이 가독성을 위해 권장할 뿐 문법적 강제는 아니기 때문",
        "메모리를 프로그램 끝에서부터 할당하기 때문"
      ],
      hint: "번역이 먼저인지 실행이 먼저인지 생각한다." },

    /* ===================== 실습 · 절별 보충 예제 ===================== */

    { id: 39, section: "practice", topic: "2.1-1 자유형식", type: "choice",
      title: "들여쓰기를 더 줬을 때",
      question: "자유형식 코드에서 <code>b = 4</code> 만 다른 줄보다 훨씬 깊게 들여썼다. 결과는?",
      options: [
        "들여쓰기 칸 수는 문법적 의미가 없어 정상 컴파일·실행된다",
        "7열을 넘겨 컴파일 오류가 난다",
        "경고가 나지만 실행은 된다",
        "b 가 앞 문장에 이어지는 것으로 해석된다"
      ],
      hint: "고정형식과의 결정적 차이가 무엇이었는지 떠올린다." },

    { id: 40, section: "practice", topic: "2.1-2 줄잇기", type: "line",
      title: "긴 식 나누기",
      question: "<code>total = 10 + 20 + 30 + 40 + 50</code> 을 두 줄로 나누려 한다. 다음 줄에 <code>40 + 50</code> 이 이어지도록 <b>첫 줄</b>만 쓰시오.",
      hint: "30 다음의 덧셈 기호까지 적고, 줄 끝에 줄잇기 기호를 붙인다." },

    { id: 41, section: "practice", topic: "2.1-3 고정형식", type: "text",
      title: "고정형식 예제의 출력",
      question: "아래 고정형식 코드가 출력하는 <code>days</code> 값은? 숫자만 쓰시오.<pre>      years = 3\n      days  = years * 365\n      print *, \"days =\", days</pre>",
      hint: "3 × 365" },

    { id: 42, section: "practice", topic: "2.2-1 선언부와 실행부", type: "line",
      title: "직사각형의 둘레",
      question: "<code>width</code> 와 <code>height</code> 로 둘레를 구해 <code>perimeter</code> 에 넣는 문장을 한 줄로 쓰시오. 둘레 = 2 × (가로 + 세로).",
      hint: "덧셈을 먼저 하도록 괄호로 묶는다." },

    { id: 43, section: "practice", topic: "2.2-2 세미콜론", type: "line",
      title: "한 줄에 세 대입",
      question: "<code>x</code>, <code>y</code>, <code>z</code> 에 각각 2, 3, 4를 대입하는 세 문장을 <b>한 줄</b>에 쓰시오.",
      hint: "문장 사이를 세미콜론으로 구분한다." },

    { id: 44, section: "practice", topic: "2.2-3 거듭제곱", type: "line",
      title: "세제곱 구하기",
      question: "<code>base</code> 의 세제곱을 <code>cubed</code> 에 넣는 문장을 한 줄로 쓰시오.",
      hint: "거듭제곱 연산자는 별표 두 개다." },

    { id: 45, section: "practice", topic: "2.3-1 주석", type: "line",
      title: "나머지 구하기",
      question: "<code>seconds</code> 를 60으로 나눈 <b>나머지</b>를 구하는 내장 함수 호출을 쓰시오. 대입문 없이 함수 호출 부분만 쓰시오.",
      hint: "함수 이름은 세 글자이고 인자를 두 개 받는다." },

    { id: 46, section: "practice", topic: "2.3-2 대소문자", type: "text",
      title: "Total, TOTAL, total",
      question: "아래 코드의 출력값은? 숫자만 쓰시오.<pre>integer :: total\nTotal = 100\nTOTAL = total + 1\nprint *, \"total =\", total</pre>",
      hint: "세 이름이 같은 변수인지 다른 변수인지 판단한다." },

    { id: 47, section: "practice", topic: "2.3-3 명명 규칙", type: "line",
      title: "snake_case로 총액 구하기",
      question: "단가 <code>price_per_item</code> 와 수량 <code>item_count</code> 를 곱해 <code>total_price</code> 에 넣는 문장을 한 줄로 쓰시오.",
      hint: "이름이 길어도 그대로 쓴다. 곱셈 기호는 * 다." },

    { id: 48, section: "practice", topic: "2.4-1 명시적 선언", type: "line",
      title: "정수를 실수 나눗셈에 쓰기",
      question: "정수 <code>count</code> 로 <code>7.0</code> 을 나눈 값을 실수 <code>average</code> 에 넣으려 한다. 정수를 실수로 바꾸는 내장 함수를 써서 한 줄로 쓰시오.",
      hint: "형 변환 함수의 이름은 그 타입의 이름과 같다." },

    { id: 49, section: "practice", topic: "2.4-2 암묵적 형 지정", type: "text",
      title: "n에 3.7을 넣으면",
      question: "<code>implicit none</code> 이 없는 프로그램에서 <code>n = 3.7</code> 을 실행한 뒤 <code>n</code> 을 출력하면 무엇이 나오는가? 숫자만 쓰시오.",
      hint: "이름이 n이면 어떤 자료형이 되는지 먼저 판단한다." },

    { id: 50, section: "practice", topic: "2.4-3 두 자료형", type: "code",
      title: "정수와 실수 나란히 선언",
      question: "정수 <code>steps</code> 를 선언하는 줄과 실수 <code>dt</code> 를 선언하는 줄을 <b>두 줄</b>로 쓰시오. 정수 줄을 먼저 쓰시오.",
      hint: "타입 :: 이름 형태를 두 번 쓴다. 줄바꿈으로 구분한다." }
  ]
};
