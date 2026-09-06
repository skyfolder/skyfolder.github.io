/* ============================================================
   fort_prac_12_problems.js — 12장 문제 본문 (공개 파일)

   정답은 이 파일에 없습니다. answer/fort_prac_12_answers.js 에 있습니다.
   복습 18 · 이론 20 · 실습 12 = 50문항, 한 문항 1점.

   본문과 문제은행의 절 번호가 서로 달라, 절 번호 대신 주제명으로 표기했습니다.
   ============================================================ */

window.PROBLEMS = {
  title: "FORTRAN 12장 실습",
  subtitle: "모듈과 프로그램 구성 · 50문제",

  sections: [
    { key: "review",   label: "복습", note: "수업 본문 예제" },
    { key: "theory",   label: "이론", note: "출제 예상 문제은행" },
    { key: "practice", label: "실습", note: "절별 보충 예제" }
  ],

  problems: [

    /* ===================== 복습 · 본문 예제 ===================== */

    { id: 1, section: "review", topic: "모듈과 use", type: "line",
      title: "필요한 것만 가져오기",
      question: "<code>constants_mod</code> 에서 <code>real64</code>, <code>pi</code>, <code>deg_to_rad</code> 세 개만 골라 가져오는 문장을 쓰시오.",
      hint: "use 모듈, only: 이름 나열 형태다." },

    { id: 2, section: "review", topic: "모듈과 use", type: "line",
      title: "상수로 상수 만들기",
      question: "이미 선언된 <code>pi</code> 를 두 배로 한 배정밀도 명명 상수 <code>two_pi</code> 를 선언하시오. 리터럴에 <code>_real64</code> 를 붙이시오.",
      hint: "자료형(종류), parameter :: 이름 = 초기식" },

    { id: 3, section: "review", topic: "모듈과 use", type: "line",
      title: "도를 라디안으로 바꾸는 상수",
      question: "<code>pi</code> 를 180으로 나눈 배정밀도 명명 상수 <code>deg_to_rad</code> 를 선언하시오. 리터럴에 <code>_real64</code> 를 붙이시오.",
      hint: "180 도 실수 상수로 적는다." },

    { id: 4, section: "review", topic: "모듈과 use", type: "line",
      title: "가져온 이름 다시 공개하기",
      question: "<code>constants_mod</code> 가 <code>iso_fortran_env</code> 에서 가져온 <code>real64</code> 를 외부에도 그대로 공개하는 줄을 쓰시오.",
      hint: "공개 목록에 그 이름을 적으면 된다." },

    { id: 5, section: "review", topic: "이름 변경", type: "line",
      title: "이름 바꿔 가져오기",
      question: "<code>geo_constants</code> 의 <code>pi</code> 를 <code>geo_pi</code> 라는 이름으로 가져오는 문장을 쓰시오.",
      hint: "새 이름 => 원래 이름 순서다." },

    { id: 6, section: "review", topic: "이름 변경", type: "line",
      title: "이름 변경과 일반 가져오기 섞기",
      question: "<code>phys_constants</code> 에서 <code>pi</code> 는 <code>phys_pi</code> 로 바꿔 가져오고 <code>c_light</code> 는 그대로 가져오는 문장을 <b>한 줄</b>로 쓰시오.",
      hint: "한 only 목록 안에 쉼표로 섞어 적을 수 있다." },

    { id: 7, section: "review", topic: "오류 학습", type: "choice",
      title: "모듈이 서로를 부르면",
      question: "모듈 A가 모듈 B를 <code>use</code> 하고 모듈 B도 모듈 A를 <code>use</code> 하면 어떻게 되는가?",
      options: [
        "순환 참조가 되어 Cannot open module file 'b_mod.mod' for reading 오류가 난다",
        "컴파일러가 순서를 알아서 정리해 정상 빌드된다",
        "실행 중에 무한 루프가 생긴다",
        "경고만 나고 정상 동작한다"
      ],
      hint: "두 모듈이 서로의 .mod 파일을 기다리는 교착 상태가 된다. 공통 부분을 제3의 모듈로 빼면 풀린다." },

    { id: 8, section: "review", topic: "캡슐화", type: "text",
      title: "기본을 닫는 한 단어",
      question: "모듈 선언부 첫머리에 한 단어만 적어 그 아래 모든 이름의 기본 접근성을 비공개로 바꾸려면? 키워드만 쓰시오.",
      hint: "공개의 반대말이다." },

    { id: 9, section: "review", topic: "캡슐화", type: "line",
      title: "공개할 것만 열기",
      question: "<code>counter_mod</code> 에서 <code>reset_counter</code>, <code>increment</code>, <code>current_count</code> 세 프로시저만 외부에 공개하는 줄을 쓰시오.",
      hint: "public :: 이름 나열 형태다." },

    { id: 10, section: "review", topic: "캡슐화", type: "line",
      title: "생략 가능한 증가폭",
      question: "<code>increment</code> 서브루틴에서 정수 <code>step</code> 을 <b>생략 가능한 읽기 전용</b> 가인수로 선언하는 줄을 쓰시오.",
      hint: "intent 뒤에 속성을 하나 더 붙인다." },

    { id: 11, section: "review", topic: "캡슐화", type: "text",
      title: "계수기의 최종값",
      question: "<code>demo_counter</code> 예제에서 초기화 뒤 <code>increment()</code> 를 두 번, <code>increment(step=5)</code> 를 한 번 부르면 최종값은? 숫자만 쓰시오.",
      hint: "인수를 생략하면 1씩 늘어난다." },

    { id: 12, section: "review", topic: "캡슐화", type: "line",
      title: "숨긴 값을 읽는 통로",
      question: "<code>current_count</code> 함수에서 비공개 모듈 변수 <code>count</code> 의 값을 결과 변수 <code>value</code> 에 담는 문장을 쓰시오.",
      hint: "모듈 변수는 인수로 받지 않아도 그대로 보인다." },

    { id: 13, section: "review", topic: "모듈 변수", type: "line",
      title: "합계를 담을 모듈 변수",
      question: "<code>running_stats_mod</code> 에서 합계를 담을 배정밀도 모듈 변수 <code>total</code> 을 <code>0.0</code> 으로 초기화하며 선언하시오. 리터럴에 <code>_real64</code> 를 붙이시오.",
      hint: "선언과 동시에 초깃값을 준다." },

    { id: 14, section: "review", topic: "모듈 변수", type: "line",
      title: "제곱합 누적",
      question: "<code>stats_add</code> 에서 입력 <code>x</code> 의 제곱을 <code>total_sq</code> 에 누적하는 문장을 쓰시오. 거듭제곱 대신 곱셈을 쓰시오.",
      hint: "기존 값에 x 곱하기 x 를 더한다." },

    { id: 15, section: "review", topic: "모듈 변수", type: "text",
      title: "표본분산",
      question: "<code>demo_stats</code> 예제에서 <code>[2.0, 4.0, 4.0, 6.0, 4.0]</code> 의 표본분산은? 숫자만 쓰시오.",
      hint: "편차 제곱합을 자유도 n−1 로 나눈다." },

    { id: 16, section: "review", topic: "모듈 프로시저", type: "line",
      title: "등간격 격자",
      question: "<code>linspace</code> 에서 <code>a</code> 부터 <code>b</code> 까지 <code>n</code> 등분한 <code>i</code> 번째 격자점을 <code>x(i)</code> 에 넣는 문장을 쓰시오. 종류는 <code>real64</code> 를 직접 쓰시오.",
      hint: "i − 1 을 n − 1 로 나눠 0부터 1까지를 만든 뒤 구간 길이를 곱한다." },

    { id: 17, section: "review", topic: "모듈 프로시저", type: "line",
      title: "누적 사다리꼴",
      question: "<code>cumulative_trapz</code> 에서 <code>c(i)</code> 를 앞 값에 사다리꼴 넓이를 더해 구하는 문장을 쓰시오. 리터럴에 <code>_real64</code> 를 붙이시오.",
      hint: "사다리꼴 넓이 = ½ × (윗변 + 아랫변) × 높이. 높이는 x 의 간격이다." },

    { id: 18, section: "review", topic: "오류 학습", type: "choice",
      title: "같은 이름을 둘 다 가져오면",
      question: "<code>pi</code> 를 공개하는 두 모듈을 <code>only</code> 없이 모두 <code>use</code> 한 뒤 <code>pi</code> 를 쓰면?",
      options: [
        "먼저 적은 모듈의 값이 쓰인다",
        "Name 'pi' at (1) is an ambiguous reference 컴파일 오류가 난다",
        "나중에 적은 모듈의 값이 쓰인다",
        "실행 중에 값이 무작위로 정해진다"
      ],
      hint: "컴파일러가 어느 모듈에서 온 것인지 결정하지 못한다." },

    /* ===================== 이론 · 문제은행 ===================== */

    { id: 19, section: "theory", topic: "모듈과 use", type: "choice",
      title: "모듈과 program",
      question: "모듈이 <code>program</code> 과 근본적으로 다른 점으로 옳은 것은?",
      options: [
        "모듈은 그 자체로 실행되지 않는 재사용 부품이며, 다른 프로그램 단위가 use 로 가져다 쓰는 묶음이다",
        "모듈도 실행 시작점이 될 수 있어 단독 실행이 가능하다",
        "모듈에는 프로시저를 둘 수 없다",
        "모듈은 한 프로그램에 하나만 둘 수 있다"
      ],
      hint: "실행은 어디에서 시작하는지 생각한다." },

    { id: 20, section: "theory", topic: "모듈과 use", type: "choice",
      title: "only를 붙이면",
      question: "<code>use my_mod, only: a, b</code> 가 그냥 <code>use my_mod</code> 와 다른 점과, only 를 권장하는 이유로 옳은 것은?",
      options: [
        "나열한 이름만 현재 범위로 들어온다. 의존 관계가 코드에 드러나고 이름 충돌 위험이 줄어든다",
        "가져오는 속도가 빨라진다",
        "나열한 이름을 뺀 나머지가 들어온다",
        "only 를 쓰면 그 이름들을 수정할 수 있게 된다"
      ],
      hint: "어떤 이름이 어느 모듈에서 왔는지 추적하기도 쉬워진다." },

    { id: 21, section: "theory", topic: "모듈과 use", type: "choice",
      title: "use의 자리",
      question: "아래 코드가 컴파일되지 않는 이유와 고치는 방법으로 옳은 것은?<pre>program p\n   implicit none\n   use iso_fortran_env, only: real64\n   real(real64) :: x\nend program p</pre>",
      options: [
        "use 문이 implicit none 뒤에 와서 거부된다. use 를 implicit none 위로 올린다",
        "only 를 쓸 수 없는 모듈이라서 거부된다. only 를 뺀다",
        "x 를 초기화하지 않아서 거부된다",
        "program 이름과 파일 이름이 달라서 거부된다"
      ],
      hint: "use → implicit none → 나머지 선언 순서다." },

    { id: 22, section: "theory", topic: "이름 변경", type: "text",
      title: "이름을 바꾸는 기호",
      question: "<code>use</code> 문에서 가져올 이름을 다른 이름으로 바꿔 받을 때 쓰는 연산자는? 기호만 쓰시오.",
      hint: "화살표 모양의 두 글자다." },

    { id: 23, section: "theory", topic: "모듈과 use", type: "text",
      title: "상수를 조합한 상수",
      question: "모듈에 <code>pi = 3.141592653589793_real64</code> 와 <code>two_pi = 2.0_real64 * pi</code> 가 있을 때, <code>two_pi</code> 를 <code>f10.6</code> 서식으로 출력하면? 숫자만 쓰시오.",
      hint: "2π 를 소수 여섯 자리까지 적는다." },

    { id: 24, section: "theory", topic: "캡슐화", type: "choice",
      title: "기본 접근성",
      question: "모듈이 선언하는 이름의 기본 접근성은?",
      options: [
        "공개(public). 별도 지정이 없으면 모든 이름이 use 로 보인다",
        "비공개(private). 공개하려면 public 을 적어야 한다",
        "변수는 공개, 프로시저는 비공개다",
        "컴파일 옵션에 따라 달라진다"
      ],
      hint: "그래서 캡슐화하려면 기본을 직접 닫아야 한다." },

    { id: 25, section: "theory", topic: "캡슐화", type: "choice",
      title: "권장 패턴",
      question: "캡슐화를 위해 권장되는 패턴은?",
      options: [
        "모듈 첫머리에서 private 로 기본을 닫고, 밖에 보여 줄 것만 public :: ... 로 연다",
        "모든 이름을 public 으로 열고 필요할 때만 private 를 붙인다",
        "모듈 변수를 쓰지 않고 전부 인수로 넘긴다",
        "프로시저마다 인터페이스 블록을 따로 쓴다"
      ],
      hint: "새 이름을 추가하다 접근성 지정을 빠뜨려도 안전한 쪽이 어느 쪽인지 생각한다." },

    { id: 26, section: "theory", topic: "캡슐화", type: "choice",
      title: "숨긴 변수에 대입하면",
      question: "<code>private</code> 로 숨긴 모듈 변수 <code>count</code> 를 외부 프로그램에서 <code>count = 100</code> 으로 대입하려 하면?",
      options: [
        "값이 바뀌지만 모듈 프로시저에는 반영되지 않는다",
        "Symbol 'count' at (1) has no IMPLICIT type 컴파일 오류가 난다. use 로 들어오지 않아 선언되지 않은 이름이기 때문이다",
        "실행 중에 오류가 난다",
        "경고만 나고 대입된다"
      ],
      hint: "프로그램 입장에서는 그런 이름이 아예 없는 셈이 된다." },

    { id: 27, section: "theory", topic: "캡슐화", type: "choice",
      title: "공개 프로시저로만 접근하면",
      question: "내부 변수를 숨기고 공개 프로시저로만 접근하게 하면 얻는 이점으로 옳은 것은?",
      options: [
        "내부 표현을 나중에 바꿔도 공개 인터페이스만 그대로면 외부 코드를 고칠 필요가 없다",
        "프로그램 실행 속도가 빨라진다",
        "모듈 변수의 수명이 짧아져 메모리를 아낀다",
        "컴파일 시간이 줄어든다"
      ],
      hint: "외부가 내부 규칙을 어기고 값을 임의로 바꾸는 사고도 함께 막힌다." },

    { id: 28, section: "theory", topic: "캡슐화", type: "text",
      title: "선택적 인수를 쓴 계수기",
      question: "비공개 변수 <code>c = 0</code> 에 대해 <code>inc()</code>(생략 시 1 증가)와 <code>inc(s=10)</code> 을 <code>inc()</code>, <code>inc(s=10)</code>, <code>inc()</code> 순으로 부른 뒤 <code>val()</code> 의 값은? 숫자만 쓰시오.",
      hint: "0 + 1 + 10 + 1" },

    { id: 29, section: "theory", topic: "모듈 변수", type: "choice",
      title: "값이 유지되는 성질",
      question: "모듈 변수는 <code>save</code> 를 명시하지 않아도 프로그램이 끝날 때까지 값을 유지하는가? 이 성질의 이름과 함께 고르시오.",
      options: [
        "유지한다. 이를 암묵적 save 성질이라 한다",
        "유지하지 않는다. 프로시저를 나갈 때 사라진다",
        "유지하려면 반드시 save 를 붙여야 한다",
        "컴파일러마다 다르다"
      ],
      hint: "호출 사이에 상태를 들고 있을 수 있는 근거다." },

    { id: 30, section: "theory", topic: "모듈 변수", type: "choice",
      title: "contains의 경계",
      question: "모듈에서 <code>contains</code> 는 어떤 경계 역할을 하는가?",
      options: [
        "명세부(자료형·상수·모듈 변수 선언)와 프로시저부를 가르며, 위쪽 모듈 변수는 아래쪽 모든 프로시저가 호스트 결합으로 공유한다",
        "공개 이름과 비공개 이름을 가른다",
        "모듈과 프로그램을 가른다",
        "실행문과 선언문을 가른다"
      ],
      hint: "위쪽에 선언한 것을 아래쪽이 인수 없이 쓴다." },

    { id: 31, section: "theory", topic: "모듈 변수", type: "text",
      title: "누적기의 결과",
      question: "비공개 모듈 변수 <code>s = 0</code> 에 <code>add(3)</code>, <code>add(4)</code>, <code>add(5)</code> 를 차례로 부른 뒤 <code>total()</code> 의 값은? 숫자만 쓰시오.",
      hint: "모듈 변수는 호출 사이에 값을 유지한다." },

    { id: 32, section: "theory", topic: "모듈 변수", type: "text",
      title: "초기화식은 몇 번",
      question: "모듈 변수의 초기화식(<code>integer :: s = 0</code> 의 <code>= 0</code>)은 프로그램 실행 중 <b>몇 번</b> 적용되는가? 숫자만 쓰시오.",
      hint: "프로시저를 부를 때마다 다시 돌아가지는 않는다." },

    { id: 33, section: "theory", topic: "모듈 변수", type: "choice",
      title: "초기화를 빠뜨리면",
      question: "누적기 모듈을 한 데이터 집합에 쓴 뒤 초기화하지 않고 두 번째 집합을 이어 넣었다. 두 번째 집합의 평균이 잘못 나오는 까닭과 컴파일러의 역할로 옳은 것은?",
      options: [
        "모듈 변수가 첫 집합의 합계와 개수를 그대로 들고 있어 두 집합이 합쳐진 평균이 나온다. 문법은 옳으므로 컴파일러가 잡지 못한다",
        "모듈 변수가 자동으로 초기화되므로 사실 문제가 없다",
        "컴파일러가 경고를 내 준다",
        "실행 중에 오류가 나며 멈춘다"
      ],
      hint: "이 장에서 가장 조용하고 위험한 오류다." },

    { id: 34, section: "theory", topic: "서브모듈", type: "choice",
      title: "서브모듈의 목적",
      question: "서브모듈(submodule)을 도입하는 주된 목적으로 옳은 것은?",
      options: [
        "인터페이스와 구현을 분리해, 본문만 고칠 때 그 모듈을 use 하는 파일들을 다시 컴파일하지 않아도 되게 한다",
        "모듈 변수를 여러 개 둘 수 있게 한다",
        "실행 속도를 높인다",
        "모듈 안에서 program 을 정의할 수 있게 한다"
      ],
      hint: "큰 프로젝트의 재컴파일 부담과 관련이 있다." },

    { id: 35, section: "theory", topic: "서브모듈", type: "choice",
      title: "짧은 형태와 긴 형태",
      question: "서브모듈 본문에서 <code>module procedure name</code> 으로 시작하는 짧은 형태는 긴 형태와 무엇이 다른가?",
      options: [
        "인수와 결과의 선언을 생략하고 모듈 인터페이스에 선언된 것을 그대로 물려받는다. 동작은 같다",
        "짧은 형태는 인수를 받을 수 없다",
        "짧은 형태는 함수에만, 긴 형태는 서브루틴에만 쓸 수 있다",
        "짧은 형태는 실행 속도가 느리다"
      ],
      hint: "본문만 간결해질 뿐 결과는 같다." },

    { id: 36, section: "theory", topic: "서브모듈", type: "choice",
      title: "부모의 비공개 항목",
      question: "서브모듈은 부모 모듈의 <code>private</code> 항목에 접근할 수 있는가?",
      options: [
        "접근할 수 있다. private 는 모듈 밖에서의 접근만 막고, 서브모듈은 모듈의 일부로 취급되어 명세부를 호스트 결합으로 모두 본다",
        "접근할 수 없다. private 는 서브모듈에도 똑같이 적용된다",
        "public 으로 바꿔야만 접근할 수 있다",
        "상수만 접근할 수 있고 변수는 접근할 수 없다"
      ],
      hint: "범위(scope) 관점에서 서브모듈이 어디에 속하는지 본다." },

    { id: 37, section: "theory", topic: "프로그램 구성", type: "choice",
      title: "모듈을 단독 파일로",
      question: "재사용할 모듈을 <code>program</code> 과 같은 파일에 두지 않고 단독 파일로 분리해 먼저 <code>-c</code> 로 컴파일하는 이유는?",
      options: [
        "한 파일에 두면 다른 프로그램과 함께 컴파일할 때 program 이 둘이 되어 충돌한다. 분리해 두면 여러 프로그램이 링크해 재사용할 수 있다",
        "-c 를 쓰면 실행 속도가 빨라진다",
        "모듈은 반드시 별도 파일에 있어야 한다는 문법 규칙 때문이다",
        "파일이 작아야 컴파일이 되기 때문이다"
      ],
      hint: "재사용을 염두에 둔 빌드 방식이다." },

    { id: 38, section: "theory", topic: "프로그램 구성", type: "choice",
      title: "인터페이스 블록이 필요 없는 이유",
      question: "11장의 외부 프로시저에는 인터페이스 블록을 손으로 써 주어야 했다. 모듈 안에 둔 프로시저는 왜 그럴 필요가 없는가?",
      options: [
        "모듈 프로시저는 명시적 인터페이스를 자동으로 갖기 때문이다. use 만 하면 컴파일러가 인수 개수·형·결과를 이미 알고 호출을 검사한다",
        "모듈 프로시저는 인수 검사를 하지 않기 때문이다",
        "모듈 프로시저는 언제나 인수가 하나뿐이기 때문이다",
        "컴파일러가 실행 시점에 검사하기 때문이다"
      ],
      hint: "내부 프로시저가 안전했던 이유와 같다." },

    /* ===================== 실습 · 절별 보충 예제 ===================== */

    { id: 39, section: "practice", topic: "12.1-1 가장 작은 모듈", type: "line",
      title: "상수 하나만 담은 모듈",
      question: "<code>color_mod</code> 안에서 값이 <code>255</code> 인 정수 명명 상수 <code>max_level</code> 을 선언하는 줄을 쓰시오.",
      hint: "contains 가 없어도 되는 모듈이다." },

    { id: 40, section: "practice", topic: "12.1-2 only", type: "line",
      title: "셋 중 둘만",
      question: "<code>phys_mod</code> 에서 <code>real64</code>, <code>g_earth</code>, <code>g_mars</code> 만 가져오는 문장을 쓰시오. 이 순서로 적으시오.",
      hint: "가져오지 않은 이름은 프로그램에서 보이지 않는다." },

    { id: 41, section: "practice", topic: "12.1-3 함수 이름 바꾸기", type: "line",
      title: "함수도 이름을 바꿔서",
      question: "<code>mathx_mod</code> 에서 <code>real64</code> 는 그대로, <code>square</code> 함수는 <code>sq</code> 라는 이름으로 가져오는 문장을 <b>한 줄</b>로 쓰시오. 이 순서로 적으시오.",
      hint: "이름 변경은 상수뿐 아니라 프로시저에도 쓸 수 있다." },

    { id: 42, section: "practice", topic: "12.2-1 조회 함수", type: "line",
      title: "숨긴 값 읽기",
      question: "비공개 모듈 변수 <code>hidden</code> 의 값을 결과 변수 <code>v</code> 에 담는 문장을 쓰시오.",
      hint: "외부는 변수에 직접 닿지 못하고 이 함수로만 값을 얻는다." },

    { id: 43, section: "practice", topic: "12.2-2 속성 형태", type: "line",
      title: "선언에 접근성 붙이기",
      question: "값이 <code>2</code> 인 정수 모듈 변수 <code>internal</code> 을 <b>속성 형태</b>로 비공개 선언하시오.",
      hint: "자료형 뒤에 쉼표를 찍고 접근성 키워드를 붙인다." },

    { id: 44, section: "practice", topic: "12.2-3 값 검증", type: "text",
      title: "범위를 벗어난 설정",
      question: "입력을 0~100 범위로 자르는 <code>set_level</code> 에 <code>150</code> 을 넣은 뒤 <code>get_level()</code> 을 부르면? 숫자만 쓰시오.",
      hint: "공개 통로가 값을 강제로 잘라 준다." },

    { id: 45, section: "practice", topic: "12.3-1 공유 모듈 변수", type: "text",
      title: "놓친 횟수",
      question: "<code>hits = 0</code> 인 모듈에서 <code>hit()</code> 를 두 번 부른 뒤 <code>misses_view(5)</code> 를 부르면? 숫자만 쓰시오.",
      hint: "전체에서 맞힌 횟수를 뺀다." },

    { id: 46, section: "practice", topic: "12.3-2 번호 발급기", type: "line",
      title: "다음 번호",
      question: "<code>next_id</code> 함수에서 모듈 변수 <code>last_id</code> 를 1 늘리는 문장을 쓰시오.",
      hint: "이 값이 호출 사이에 살아남아 번호가 이어진다." },

    { id: 47, section: "practice", topic: "12.3-3 최고 기록", type: "text",
      title: "최고 점수",
      question: "<code>best = 0</code> 인 모듈에 <code>42</code>, <code>17</code>, <code>88</code>, <code>60</code> 을 차례로 제출한 뒤 <code>best_score()</code> 는? 숫자만 쓰시오.",
      hint: "새 점수가 기존보다 클 때만 갱신된다." },

    { id: 48, section: "practice", topic: "12.4-1 서브모듈", type: "line",
      title: "서브모듈 열기",
      question: "부모 모듈이 <code>area_mod</code> 이고 이름이 <code>area_impl</code> 인 서브모듈을 여는 줄을 쓰시오.",
      hint: "부모 이름을 괄호에 넣는다." },

    { id: 49, section: "practice", topic: "12.4-2 짧은 형태", type: "line",
      title: "선언을 물려받는 형태",
      question: "서브모듈 본문에서 <code>cube_volume</code> 의 구현을 <b>짧은 형태</b>로 여는 줄을 쓰시오. 인수와 결과를 다시 선언하지 않는 방식입니다.",
      hint: "두 단어 뒤에 프로시저 이름을 적는다." },

    { id: 50, section: "practice", topic: "12.4-3 부모의 비공개 항목", type: "text",
      title: "할인 적용",
      question: "부모 모듈의 비공개 상수 <code>rate = 0.10</code> 을 쓰는 <code>apply_discount</code> 에 <code>200.0</code> 을 넣으면? 소수 둘째 자리까지 쓰시오.",
      hint: "10% 를 깎는다." }
  ]
};
