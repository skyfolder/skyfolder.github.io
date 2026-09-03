/* ============================================================
   fort_prac_06_problems.js — 6장 문제 본문 (공개 파일)

   정답은 이 파일에 없습니다. answer/fort_prac_06_answers.js 에 있습니다.
   복습 18 · 이론 20 · 실습 12 = 50문항, 한 문항 1점.

   서식 문자열은 따옴표 안쪽을 그대로 비교하므로,
   편집 기술자의 대소문자와 쉼표 뒤 띄어쓰기 변형을 모두 정답으로 인정합니다.
   ============================================================ */

window.PROBLEMS = {
  title: "FORTRAN 6장 실습",
  subtitle: "입출력 기초와 서식 · 50문제",

  sections: [
    { key: "review",   label: "복습", note: "수업 본문 예제" },
    { key: "theory",   label: "이론", note: "출제 예상 문제은행" },
    { key: "practice", label: "실습", note: "절별 보충 예제" }
  ],

  problems: [

    /* ===================== 복습 · 본문 예제 ===================== */

    { id: 1, section: "review", topic: "6.1 목록 지정 입출력", type: "line",
      title: "두 실수 읽기",
      question: "<code>list_io</code> 예제에서 표준 입력으로부터 실수 <code>a</code> 와 <code>b</code> 를 읽어 들이는 문장을 한 줄로 쓰시오. 목록 지정 입력을 쓰시오.",
      hint: "서식 자리에 별표를 두고 쉼표로 변수를 나열한다." },

    { id: 2, section: "review", topic: "6.1 목록 지정 입출력", type: "text",
      title: "합의 값",
      question: "<code>echo \"3.5 1.5\" | ./list_io</code> 로 실행했을 때 <code>a + b</code> 의 값은? 숫자만 쓰시오.",
      hint: "3.5 + 1.5" },

    { id: 3, section: "review", topic: "6.1 목록 지정 입출력", type: "text",
      title: "차의 값",
      question: "같은 입력에서 <code>a - b</code> 의 값은? 숫자만 쓰시오.",
      hint: "3.5 − 1.5" },

    { id: 4, section: "review", topic: "6.2 read·print·write", type: "line",
      title: "print를 write로",
      question: "<code>print *, \"hello\"</code> 와 똑같이 동작하는 <code>write</code> 문장을 한 줄로 쓰시오.",
      hint: "괄호 안에 별표를 두 개 적는다." },

    { id: 5, section: "review", topic: "6.2 read·print·write", type: "choice",
      title: "두 별표의 뜻",
      question: "<code>write(*, *)</code> 의 괄호 안 두 별표는 각각 무엇을 가리키는가?",
      options: [
        "첫째는 장치(표준 출력), 둘째는 서식(목록 지정)",
        "첫째는 서식, 둘째는 장치",
        "둘 다 장치 번호를 뜻한다",
        "둘 다 서식을 뜻한다"
      ],
      hint: "write(장치, 서식) 순서를 떠올린다." },

    { id: 6, section: "review", topic: "6.3 서식과 편집 기술자", type: "line",
      title: "정렬된 표의 데이터 행",
      question: "<code>formatted_table</code> 예제에서 <code>i</code>, <code>x</code>, <code>sq</code>, <code>cube</code> 를 각각 <b>너비 4의 정수</b>, <b>너비 10에 소수 3자리</b>, <b>너비 10에 소수 3자리</b>, <b>너비 12에 소수 4자리</b>로 출력하는 <code>print</code> 문을 한 줄로 쓰시오.",
      hint: "print '(기술자들)', 목록 형태다. 정수는 I, 실수는 F 기술자를 쓴다." },

    { id: 7, section: "review", topic: "6.3 서식과 편집 기술자", type: "text",
      title: "표 한 줄의 너비",
      question: "<code>I4, F10.3, F10.3, F12.4</code> 로 출력한 한 줄의 전체 너비는 몇 칸인가? 숫자만 쓰시오.",
      hint: "네 기술자의 너비를 더한다." },

    { id: 8, section: "review", topic: "6.3 서식과 편집 기술자", type: "text",
      title: "과학적 표기",
      question: "<code>avogadro = 6.022e23</code> 을 <code>ES12.4</code> 로 출력하면 어떻게 나오는가? 숫자 부분만 그대로 쓰시오.",
      hint: "가수가 1 이상 10 미만이 되도록 맞춘다." },

    { id: 9, section: "review", topic: "6.3 서식과 편집 기술자", type: "text",
      title: "일반 지수 표기",
      question: "같은 값을 <code>E12.4</code> 로 출력하면 어떻게 나오는가? 숫자 부분만 그대로 쓰시오.",
      hint: "가수가 0.1 이상 1 미만이 되도록 맞춘다. 지수도 함께 달라진다." },

    { id: 10, section: "review", topic: "6.4 csv 파일 생성", type: "line",
      title: "각도를 라디안으로",
      question: "<code>projectile</code> 예제에서 발사각 <code>deg</code>(도)를 라디안으로 바꿔 <code>theta</code> 에 넣는 문장을 한 줄로 쓰시오. 명명 상수 <code>pi</code> 가 이미 있고 180 은 실수로 적으시오.",
      hint: "라디안 = 도 × π ÷ 180" },

    { id: 11, section: "review", topic: "6.4 csv 파일 생성", type: "line",
      title: "파일 열기",
      question: "<code>trajectory.csv</code> 를 덮어쓰기 방식의 쓰기 전용으로 열고 장치 번호를 <code>u</code> 에 자동 할당받는 <code>open</code> 문을 쓰시오. 지시자는 newunit, file, status, action 순서로 적으시오.",
      hint: "status 와 action 의 값은 각각 덮어쓰기와 쓰기 전용을 뜻하는 영어 단어다." },

    { id: 12, section: "review", topic: "6.4 csv 파일 생성", type: "line",
      title: "csv 한 행 쓰기",
      question: "<code>x</code> 와 <code>y</code> 를 각각 <b>너비 10에 소수 4자리</b>로, 사이에 쉼표를 넣어 장치 <code>u</code> 에 한 행으로 쓰는 문장을 쓰시오.",
      hint: "서식 안에 리터럴 쉼표를 큰따옴표로 감싸 끼워 넣는다." },

    { id: 13, section: "review", topic: "6.4 csv 파일 생성", type: "text",
      title: "저장된 점의 개수",
      question: "<code>projectile</code> 예제는 <code>do i = 0, n</code> 으로 돌며 <code>n = 40</code> 이다. csv에 저장되는 데이터 점은 모두 몇 개인가? 숫자만 쓰시오.",
      hint: "0부터 40까지 빠짐없이 센다." },

    { id: 14, section: "review", topic: "6.5 NaN과 Inf", type: "text",
      title: "0을 0으로 나누면",
      question: "<code>zero = 0.0</code> 일 때 <code>zero / zero</code> 를 출력하면 화면에 무엇이 찍히는가? 그대로 쓰시오.",
      hint: "숫자가 아님을 뜻하는 세 글자다." },

    { id: 15, section: "review", topic: "6.5 NaN과 Inf", type: "text",
      title: "0이 아닌 수를 0으로 나누면",
      question: "<code>a = 7.7</code>, <code>zero = 0.0</code> 일 때 <code>a / zero</code> 를 출력하면 화면에 무엇이 찍히는가? gfortran이 찍는 단어를 그대로 쓰시오.",
      hint: "무한대를 뜻하는 영어 단어가 그대로 나온다." },

    { id: 16, section: "review", topic: "6.5 NaN과 Inf", type: "text",
      title: "NaN은 자기 자신과 같은가",
      question: "<code>ieee_check</code> 예제에서 <code>nan_val == nan_val</code> 의 출력은? 글자 하나만 쓰시오.",
      hint: "IEEE 754 표준에서 NaN은 그 어떤 값과도 같지 않다." },

    { id: 17, section: "review", topic: "오류 학습", type: "choice",
      title: "status=\"new\"로 두 번 실행하면",
      question: "<code>open(newunit=u, file=\"out.csv\", status=\"new\", ...)</code> 로 연 프로그램을 연달아 두 번 실행하면?",
      options: [
        "두 번 다 정상 실행되고 파일이 덮어쓰기 된다",
        "두 번째 실행에서 Cannot open file 'out.csv': File exists 런타임 오류가 난다",
        "두 번째 실행에서 컴파일 오류가 난다",
        "두 번째 실행에서 out2.csv 가 새로 만들어진다"
      ],
      hint: "\"new\" 는 대상 파일이 없어야만 성공한다." },

    { id: 18, section: "review", topic: "오류 학습", type: "text",
      title: "반복 실행에 알맞은 status",
      question: "위 오류를 없애고 몇 번이든 다시 실행할 수 있게 하려면 <code>status=</code> 에 어떤 값을 주어야 하는가? 값만 쓰시오.",
      hint: "파일이 있으면 지우고 새로 만든다는 뜻의 영어 단어다." },

    /* ===================== 이론 · 문제은행 ===================== */

    { id: 19, section: "theory", topic: "6.1 목록 지정 입출력", type: "choice",
      title: "서식 자리의 별표",
      question: "목록 지정 입출력에서 서식 자리에 쓰는 별표 <code>*</code> 는 무엇을 뜻하는가?",
      options: [
        "출력할 값이 없다는 뜻이다",
        "형식을 프로그래머가 정하지 않고 컴파일러가 정하도록 위임한다는 뜻이다",
        "모든 자릿수를 다 출력하라는 뜻이다",
        "곱셈 연산을 뜻한다"
      ],
      hint: "간편한 대신 통제권을 넘겨주는 방식이다." },

    { id: 20, section: "theory", topic: "6.1 목록 지정 입출력", type: "choice",
      title: "입력의 구분자",
      question: "목록 지정 입력에서 여러 값을 구분할 때 쓸 수 있는 구분자를 바르게 묶은 것은?",
      options: [
        "공백, 쉼표, 줄바꿈",
        "쉼표, 세미콜론, 마침표",
        "공백, 탭, 세미콜론",
        "쉼표만 가능하다"
      ],
      hint: "3.5 1.5 도, 3.5, 1.5 도, 두 줄에 나눠 써도 모두 읽힌다." },

    { id: 21, section: "theory", topic: "6.1 목록 지정 입출력", type: "choice",
      title: "표 정렬에 부적합한 이유",
      question: "목록 지정 출력이 표 형태의 정렬에 부적합한 이유로 가장 알맞은 것은?",
      options: [
        "출력 속도가 느려서",
        "칸 너비와 소수 자릿수를 컴파일러가 정해 통제할 수 없고 컴파일러마다 달라 이식성이 떨어져서",
        "문자열을 출력할 수 없어서",
        "한 줄에 값을 하나만 쓸 수 있어서"
      ],
      hint: "5.00000000 좌우의 공백을 누가 정했는지 생각한다." },

    { id: 22, section: "theory", topic: "6.2 read·print·write", type: "line",
      title: "print와 같은 write",
      question: "<code>print *, x</code> 와 똑같이 동작하는 <code>write</code> 문장을 한 줄로 쓰시오.",
      hint: "괄호 안에 장치와 서식을 별표로 적는다." },

    { id: 23, section: "theory", topic: "6.2 read·print·write", type: "choice",
      title: "세 문장의 역할",
      question: "<code>read</code>, <code>print</code>, <code>write</code> 의 역할을 바르게 설명한 것은?",
      options: [
        "read 는 입력, print 는 항상 표준 출력, write 는 장치를 골라 출력",
        "read 는 입력, print 는 파일 출력, write 는 화면 출력",
        "셋 다 화면 출력 전용이다",
        "read 와 write 는 같은 일을 하고 print 만 다르다"
      ],
      hint: "장치 번호를 적을 수 있는 문장이 어느 것인지 본다." },

    { id: 24, section: "theory", topic: "6.2 read·print·write", type: "choice",
      title: "write(6, *) 대신 write(*, *)",
      question: "표준 출력을 <code>write(6, *)</code> 처럼 숫자로 지정하기보다 <code>write(*, *)</code> 로 쓰라고 권하는 이유는?",
      options: [
        "6번 장치가 이미 파일에 쓰이고 있어서",
        "장치 번호와 표준 출력의 대응이 컴파일러·환경마다 다를 수 있어 이식성이 떨어져서",
        "숫자를 쓰면 출력 속도가 느려져서",
        "표준에서 숫자 장치 번호를 금지해서"
      ],
      hint: "newunit 을 권하는 이유와 같은 맥락이다." },

    { id: 25, section: "theory", topic: "6.3 편집 기술자", type: "choice",
      title: "I5와 I0",
      question: "편집 기술자 <code>I5</code> 와 <code>I0</code> 의 차이로 옳은 것은?",
      options: [
        "I5 는 다섯 자리까지만 출력하고 넘치면 잘라낸다",
        "I5 는 전체 5칸 너비로(앞쪽 부족분은 공백) 출력하고, I0 는 값에 필요한 최소 너비로만 출력한다",
        "I5 는 정수용, I0 는 실수용이다",
        "둘은 완전히 같다"
      ],
      hint: "42 를 각각 넣으면 어떻게 보이는지 떠올린다." },

    { id: 26, section: "theory", topic: "6.3 편집 기술자", type: "choice",
      title: "F8.3의 뜻",
      question: "<code>F8.3</code> 이 지정하는 출력 형식은?",
      options: [
        "정수부 8자리, 소수부 3자리",
        "부호·소수점·정수부를 모두 포함해 전체 8칸, 소수점 이하 3자리",
        "전체 8칸에 지수 표기, 가수 3자리",
        "소수점 이하 8자리, 반올림 3회"
      ],
      hint: "w.d 에서 w 가 무엇을 포함하는지 본다." },

    { id: 27, section: "theory", topic: "6.3 편집 기술자", type: "choice",
      title: "ES와 E의 차이",
      question: "<code>ES12.4</code> 와 <code>E12.4</code> 는 가수의 표현 범위가 어떻게 다른가?",
      options: [
        "ES 는 가수를 1 이상 10 미만으로, E 는 0 이상 1 미만으로 정규화한다",
        "ES 는 가수를 0 이상 1 미만으로, E 는 1 이상 10 미만으로 정규화한다",
        "둘 다 1 이상 10 미만이며 지수 자릿수만 다르다",
        "ES 는 지수를 쓰지 않는다"
      ],
      hint: "6.0220E+23 과 0.6022E+24 를 견주어 본다." },

    { id: 28, section: "theory", topic: "6.3 편집 기술자", type: "text",
      title: "반복 기술자",
      question: "<code>3I5</code> 는 어떤 기술자 나열과 같은가? 쉼표로 이어 쓰시오.",
      hint: "앞의 숫자가 반복 횟수다." },

    { id: 29, section: "theory", topic: "6.3 편집 기술자", type: "choice",
      title: "리터럴과 슬래시",
      question: "서식 문자열 안의 <code>\",\"</code> 와 <code>/</code> 가 하는 일을 바르게 짝지은 것은?",
      options: [
        "\",\" 는 기술자를 구분하고, / 는 나눗셈을 뜻한다",
        "\",\" 는 쉼표 문자를 그대로 출력하고, / 는 줄을 바꿔 다음 기록으로 넘어간다",
        "\",\" 는 공백을 만들고, / 는 소수점을 찍는다",
        "둘 다 아무 출력도 만들지 않는다"
      ],
      hint: "csv 구분자를 만들 때 어느 쪽을 쓰는지 생각한다." },

    { id: 30, section: "theory", topic: "6.3 편집 기술자", type: "text",
      title: "I4로 7을 출력하면",
      question: "<code>print '(I4)', 7</code> 을 실행하면 숫자 <code>7</code> 앞에 공백이 몇 칸 붙는가? 숫자만 쓰시오.",
      hint: "전체 너비에서 값이 차지하는 자릿수를 뺀다." },

    { id: 31, section: "theory", topic: "6.3 편집 기술자", type: "text",
      title: "F6.2로 원주율을 출력하면",
      question: "<code>print '(F6.2)', 3.14159</code> 가 출력하는 숫자는? 공백은 빼고 숫자만 쓰시오.",
      hint: "소수 셋째 자리에서 반올림한다." },

    { id: 32, section: "theory", topic: "6.4 csv 파일 생성", type: "choice",
      title: "newunit= 의 역할",
      question: "<code>open(newunit=u, ...)</code> 에서 <code>newunit=</code> 이 하는 일은?",
      options: [
        "파일을 새로 만든다",
        "비어 있는 장치 번호를 컴파일러가 골라 변수 u 에 넣어 준다",
        "장치 번호를 항상 6으로 고정한다",
        "파일 이름을 자동으로 정해 준다"
      ],
      hint: "번호 충돌을 직접 피하지 않아도 되는 이유다." },

    { id: 33, section: "theory", topic: "6.4 csv 파일 생성", type: "choice",
      title: "status=\"replace\"",
      question: "<code>open</code> 의 <code>status=\"replace\"</code> 가 지정하는 동작은?",
      options: [
        "파일이 있으면 오류를 내고 멈춘다",
        "같은 이름의 파일이 있으면 지우고 새로 만들어 덮어쓴다",
        "파일 끝에 이어서 쓴다",
        "파일을 읽기 전용으로 연다"
      ],
      hint: "파일이 없으면 \"new\" 와 똑같이 동작한다." },

    { id: 34, section: "theory", topic: "6.4 csv 파일 생성", type: "text",
      title: "머리글 건너뛰기",
      question: "Python의 <code>csv.reader</code> 로 csv를 읽을 때 머리글 한 줄을 건너뛰는 호출을 쓰시오. 변수 이름은 <code>reader</code> 를 쓰시오.",
      hint: "반복문에 들어가기 전에 한 번만 부른다." },

    { id: 35, section: "theory", topic: "6.4 csv 파일 생성", type: "line",
      title: "1.0,2.0 만들기",
      question: "실수 두 개를 각각 <b>너비 4에 소수 1자리</b>로 출력해 <code>1.0,2.0</code> 같은 한 행을 만들려 한다. <b>서식 문자열만</b> 따옴표까지 포함해 쓰시오.",
      hint: "두 기술자 사이에 리터럴 쉼표를 큰따옴표로 감싸 넣는다." },

    { id: 36, section: "theory", topic: "6.5 NaN과 Inf", type: "text",
      title: "0으로 나누기",
      question: "<code>x</code> 가 0이 아닐 때 <code>x / 0.0</code> 의 결과를 부르는 이름은? 영어 약어로 쓰시오.",
      hint: "무한대를 뜻하는 세 글자 약어다." },

    { id: 37, section: "theory", topic: "6.5 NaN과 Inf", type: "choice",
      title: "NaN의 동등 비교",
      question: "<code>NaN == NaN</code> 의 값과, 그로부터 얻는 결론으로 옳은 것은?",
      options: [
        "참이며, == 로 NaN 을 검출할 수 있다",
        "거짓이며, NaN 은 자기 자신과도 같지 않으므로 == 로는 검출할 수 없고 ieee_is_nan 을 써야 한다",
        "컴파일 오류가 나므로 비교 자체를 할 수 없다",
        "값이 정해져 있지 않아 실행할 때마다 달라진다"
      ],
      hint: "IEEE 754 가 NaN 의 비교를 어떻게 규정하는지 떠올린다." },

    { id: 38, section: "theory", topic: "6.5 NaN과 Inf", type: "choice",
      title: "두 판정 함수",
      question: "<code>ieee_is_finite(x)</code> 와 <code>ieee_is_nan(x)</code> 에 대한 설명으로 옳은 것은?",
      options: [
        "is_finite 는 유한한 정상 숫자일 때 참, is_nan 은 NaN 일 때 참이며, 음수의 log 는 is_nan 이 참이다",
        "is_finite 는 NaN 일 때 참, is_nan 은 Inf 일 때 참이다",
        "둘 다 Inf 에 대해서만 참이 된다",
        "음수의 log 는 Inf 이므로 is_finite 가 참이다"
      ],
      hint: "음수의 로그가 Inf 인지 NaN 인지부터 판단한다." },

    /* ===================== 실습 · 절별 보충 예제 ===================== */

    { id: 39, section: "practice", topic: "6.1-1 혼합 출력", type: "text",
      title: "논리값의 출력 모양",
      question: "<code>ok = .true.</code> 인 논리 변수를 <code>print *,</code> 로 함께 출력하면 화면에 어떤 글자가 찍히는가? 글자 하나만 쓰시오.",
      hint: ".true. 가 그대로 찍히지는 않는다." },

    { id: 40, section: "practice", topic: "6.1-2 세 값 읽기", type: "line",
      title: "정수 세 개 읽기",
      question: "정수 <code>a</code>, <code>b</code>, <code>c</code> 를 한 문장으로 읽어 들이는 목록 지정 입력문을 쓰시오.",
      hint: "쉼표로 변수를 나열한다." },

    { id: 41, section: "practice", topic: "6.1-2 세 값 읽기", type: "text",
      title: "세 값의 합",
      question: "<code>echo \"4 5 6\"</code> 으로 값을 넘겼을 때 <code>a + b + c</code> 의 값은? 숫자만 쓰시오.",
      hint: "공백으로 나뉜 세 값이 차례대로 들어간다." },

    { id: 42, section: "practice", topic: "6.3-1 정수 기술자", type: "text",
      title: "I6으로 2026을 출력하면",
      question: "<code>year = 2026</code> 을 <code>I6</code> 로 출력하면 숫자 앞에 공백이 몇 칸 붙는가? 숫자만 쓰시오.",
      hint: "2026 은 네 자리다." },

    { id: 43, section: "practice", topic: "6.3-1 정수 기술자", type: "text",
      title: "I0으로 출력하면",
      question: "같은 <code>year = 2026</code> 을 <code>I0</code> 로 출력하면 무엇이 찍히는가? 그대로 쓰시오.",
      hint: "필요한 만큼만 쓰므로 앞 공백이 없다." },

    { id: 44, section: "practice", topic: "6.3-2 지수 표기", type: "text",
      title: "ES14.5로 빛의 속도",
      question: "<code>speed = 299792.458</code> 을 <code>ES14.5</code> 로 출력하면 어떻게 나오는가? 숫자 부분만 그대로 쓰시오.",
      hint: "가수를 1 이상 10 미만으로 맞추고 소수 다섯 자리까지 적는다." },

    { id: 45, section: "practice", topic: "6.4-1 정수 csv", type: "line",
      title: "머리글 쓰기",
      question: "장치 <code>u</code> 에 머리글 <code>n,square</code> 를 한 줄로 쓰는 문장을 쓰시오. 문자열 기술자를 쓰시오.",
      hint: "서식은 문자열 하나만 내보내면 되므로 A 하나로 충분하다." },

    { id: 46, section: "practice", topic: "6.4-1 정수 csv", type: "line",
      title: "정수 두 열",
      question: "<code>i</code> 와 <code>i*i</code> 를 앞 공백 없이, 사이에 쉼표를 넣어 장치 <code>u</code> 에 한 행으로 쓰는 문장을 쓰시오.",
      hint: "앞 공백을 없애려면 너비를 0으로 준다." },

    { id: 47, section: "practice", topic: "6.4-2 실수 csv", type: "line",
      title: "실수 두 열",
      question: "<code>x</code> 를 <b>너비 4에 소수 1자리</b>로, <code>sqrt(x)</code> 를 <b>너비 8에 소수 5자리</b>로, 사이에 쉼표를 넣어 장치 <code>u</code> 에 쓰는 문장을 쓰시오.",
      hint: "두 번째 값은 계산식을 그대로 출력 목록에 적어도 된다." },

    { id: 48, section: "practice", topic: "6.5-1 NaN 검출", type: "line",
      title: "예외 판정 모듈",
      question: "<code>ieee_is_nan</code> 과 <code>ieee_is_finite</code> 를 쓰기 위해 선언부 맨 위에 적어야 하는 문장을 쓰시오.",
      hint: "표준이 제공하는 내장 모듈임을 밝히는 낱말이 use 뒤에 붙는다." },

    { id: 49, section: "practice", topic: "6.5-1 NaN 검출", type: "text",
      title: "음수의 제곱근",
      question: "<code>x = -4.0</code> 일 때 <code>y = sqrt(x)</code> 의 <code>ieee_is_nan(y)</code> 출력은? 글자 하나만 쓰시오.",
      hint: "음수의 제곱근은 수학적으로 정의되지 않는다." },

    { id: 50, section: "practice", topic: "6.5-2 유한 판정", type: "line",
      title: "정상 값만 골라내기",
      question: "실수 <code>r</code> 이 유한한 정상 숫자일 때만 안쪽을 실행하는 블록 <code>if</code> 의 <b>첫 줄</b>을 쓰시오.",
      hint: "Inf 와 NaN 을 한꺼번에 걸러 내는 함수를 쓴다." }
  ]
};
