/* ============================================================
   fort_prac_03_problems.js — 3장 문제 본문 (공개 파일)

   정답은 이 파일에 없습니다. answer/fort_prac_03_answers.js 에 있습니다.
   복습 18 · 이론 20 · 실습 12 = 50문항, 한 문항 1점.

   이 장의 코드는 모두 아래 선언이 앞에 있다고 가정합니다.
     use iso_fortran_env, only: real64
     integer, parameter :: dp = real64
   ============================================================ */

window.PROBLEMS = {
  title: "FORTRAN 3장 실습",
  subtitle: "자료형과 변수 · 50문제",

  sections: [
    { key: "review",   label: "복습", note: "수업 본문 예제" },
    { key: "theory",   label: "이론", note: "출제 예상 문제은행" },
    { key: "practice", label: "실습", note: "절별 보충 예제" }
  ],

  problems: [

    /* ===================== 복습 · 본문 예제 ===================== */

    { id: 1, section: "review", topic: "3.1 내장 자료형", type: "line",
      title: "문자형 변수 선언",
      question: "<code>types_intro</code> 예제에서 도시 이름을 담을 <b>20칸</b>짜리 문자형 변수 <code>city</code> 를 선언하시오.",
      hint: "character 뒤 괄호 안에 len= 으로 칸 수를 적는다." },

    { id: 2, section: "review", topic: "3.1 내장 자료형", type: "line",
      title: "복소수 대입",
      question: "복소수 변수 <code>impedance</code> 에 3.0 − 4.0i 를 대입하는 문장을 한 줄로 쓰시오.",
      hint: "복소수 리터럴은 괄호 안에 (실수부, 허수부) 로 적는다." },

    { id: 3, section: "review", topic: "3.1 내장 자료형", type: "line",
      title: "논리형 대입",
      question: "논리형 변수 <code>is_valid</code> 에 참을 대입하는 문장을 한 줄로 쓰시오.",
      hint: "논리 리터럴은 양옆에 마침표를 찍는다." },

    { id: 4, section: "review", topic: "3.1 내장 자료형", type: "line",
      title: "뒤쪽 공백 떼기",
      question: "<code>character(len=20) :: city</code> 에 담긴 <code>city</code> 를 출력할 때 뒤쪽 빈 공백을 떼어 내는 내장 함수 호출을 쓰시오. 함수 호출 부분만 쓰시오.",
      hint: "네 글자짜리 내장 함수다. 인자는 하나." },

    { id: 5, section: "review", topic: "3.1 내장 자료형", type: "text",
      title: "논리값의 출력 모양",
      question: "<code>is_valid = .true.</code> 인 변수를 <code>print *,</code> 로 출력하면 화면에 어떤 글자가 나오는가? 글자 하나만 쓰시오.",
      hint: ".true. 가 그대로 찍히지는 않는다." },

    { id: 6, section: "review", topic: "3.1 내장 자료형", type: "choice",
      title: "남는 칸은 어떻게 되나",
      question: "<code>character(len=20) :: city</code> 에 <code>city = \"Busan\"</code> 을 대입했다. 남는 15칸은 어떻게 되는가?",
      options: [
        "빈 공백으로 채워진다",
        "0 으로 채워진다",
        "쓰레기 값이 남는다",
        "변수의 길이가 5로 줄어든다"
      ],
      hint: "반대로 길이를 넘치면 뒤가 잘린다." },

    { id: 7, section: "review", topic: "3.2 kind와 정밀도", type: "line",
      title: "모듈 불러오기",
      question: "<code>iso_fortran_env</code> 모듈에서 <code>real64</code> 하나만 가져오는 문장을 한 줄로 쓰시오.",
      hint: "use 모듈이름, only: 이름 형태다." },

    { id: 8, section: "review", topic: "3.2 kind와 정밀도", type: "line",
      title: "정밀도를 요청해서 dp 정하기",
      question: "유효숫자 15자리, 십진 지수 범위 307 이상을 보장하는 종류를 요청해 <code>dp</code> 라는 명명 상수로 정의하시오. <code>kind_demo</code> 예제와 같은 방식입니다.",
      hint: "integer, parameter :: 이름 = 함수(...) 형태다. 실수 종류를 고르는 함수를 쓴다." },

    { id: 9, section: "review", topic: "3.2 kind와 정밀도", type: "text",
      title: "dp의 종류 값",
      question: "<code>kind_demo</code> 예제를 gfortran에서 실행하면 <code>dp</code> 의 값으로 무엇이 찍히는가? 숫자만 쓰시오.",
      hint: "배정밀도는 8바이트다." },

    { id: 10, section: "review", topic: "3.2 kind와 정밀도", type: "text",
      title: "배정밀도의 유효숫자",
      question: "배정밀도 변수 <code>x_double</code> 에 대해 <code>precision(x_double)</code> 은 무엇을 돌려주는가? 숫자만 쓰시오.",
      hint: "단정밀도는 6이다." },

    { id: 11, section: "review", topic: "3.2 kind와 정밀도", type: "text",
      title: "배정밀도의 지수 범위",
      question: "배정밀도 변수 <code>x_double</code> 에 대해 <code>range(x_double)</code> 은 무엇을 돌려주는가? 숫자만 쓰시오.",
      hint: "단정밀도는 37이다." },

    { id: 12, section: "review", topic: "3.2 kind와 정밀도", type: "text",
      title: "32비트 정수의 한계",
      question: "<code>huge(0_int32)</code> 가 돌려주는 값은? 숫자만 쓰시오.",
      hint: "약 21억이다." },

    { id: 13, section: "review", topic: "3.3 상수와 리터럴", type: "line",
      title: "원주율 명명 상수",
      question: "<code>constants</code> 예제처럼 배정밀도 원주율 <code>pi</code> 를 명명 상수로 선언하시오. 값은 <code>3.141592653589793</code> 이고 종류는 <code>dp</code> 입니다.",
      hint: "자료형(종류), parameter :: 이름 = 초기식. 리터럴에도 종류 접미사를 붙인다." },

    { id: 14, section: "review", topic: "3.3 상수와 리터럴", type: "line",
      title: "원의 넓이",
      question: "명명 상수 <code>pi</code> 와 변수 <code>radius</code> 로 원의 넓이를 구해 <code>area</code> 에 넣는 문장을 한 줄로 쓰시오. 반지름의 제곱은 거듭제곱 연산자로 적으시오.",
      hint: "넓이 = π r². 거듭제곱은 별표 두 개다." },

    { id: 15, section: "review", topic: "3.3 상수와 리터럴", type: "line",
      title: "길이를 자동으로 맞추는 문자 상수",
      question: "문자 명명 상수 <code>app_name</code> 에 <code>Wave Solver</code> 를 담되, 길이를 직접 세지 않고 초기식에 맞춰지도록 선언하시오.",
      hint: "character(len=?) 의 물음표 자리에 별표를 쓴다." },

    { id: 16, section: "review", topic: "3.4 선언과 초기화", type: "line",
      title: "정확한 0.1 넣기",
      question: "<code>declaration</code> 예제에서 배정밀도 변수 <code>right</code> 에 정밀도를 잃지 않고 0.1 을 넣는 문장을 한 줄로 쓰시오.",
      hint: "리터럴에 종류 접미사를 붙인다." },

    { id: 17, section: "review", topic: "3.4 선언과 초기화", type: "choice",
      title: "wrong은 왜 어긋나는가",
      question: "배정밀도 변수에 <code>wrong = 0.1</code> 을 대입하면 <code>0.10000000149011612</code> 가 들어간다. 왜 그런가?",
      options: [
        "배정밀도 변수는 원래 0.1 을 담을 수 없어서",
        "접미사 없는 0.1 이 먼저 단정밀도로 만들어진 뒤 배정밀도 공간에 들어가서",
        "대입할 때 컴파일러가 반올림을 하지 않아서",
        "print 문이 자릿수를 잘못 표시해서"
      ],
      hint: "컴파일러는 등호 오른쪽을 먼저 해석한다." },

    { id: 18, section: "review", topic: "오류 학습", type: "text",
      title: "정수 오버플로",
      question: "기본 정수형 변수에 <code>large_num = 2147483647 + 1</code> 을 넣고 출력하면 무엇이 나오는가? 숫자만 쓰시오.",
      hint: "최댓값을 넘으면 가장 큰 음수 쪽으로 뒤집힌다." },

    /* ===================== 이론 · 문제은행 ===================== */

    { id: 19, section: "theory", topic: "자료형", type: "choice",
      title: "내장 자료형이 아닌 것",
      question: "Fortran의 다섯 가지 내장 자료형에 속하지 <b>않는</b> 것은?",
      options: ["integer", "real", "string", "logical"],
      hint: "글자와 문자열을 다루는 자료형의 이름을 떠올린다." },

    { id: 20, section: "theory", topic: "자료형", type: "text",
      title: "괄호 쌍의 정체",
      question: "리터럴 <code>(2.0, -5.0)</code> 은 어떤 내장 자료형의 값인가? 자료형 키워드만 쓰시오.",
      hint: "괄호 안 첫 값이 실수부, 둘째 값이 허수부다." },

    { id: 21, section: "theory", topic: "자료형", type: "choice",
      title: "참·거짓 · 3과 3.0",
      question: "정수 리터럴 <code>3</code> 과 실수 리터럴 <code>3.0</code> 은 같은 자료형이다.",
      options: ["참", "거짓"],
      hint: "메모리 저장 방식과 연산 규칙을 비교해 본다." },

    { id: 22, section: "theory", topic: "자료형", type: "text",
      title: "길이를 넘긴 문자열",
      question: "<code>character(len=3) :: c</code> 에 <code>c = \"Busan\"</code> 을 대입하면 <code>c</code> 에는 무엇이 저장되는가? 저장되는 글자만 쓰시오.",
      hint: "칸이 모자라면 뒤에서부터 잘린다. 경고도 없다." },

    { id: 23, section: "theory", topic: "kind와 정밀도", type: "choice",
      title: "이식성 있는 배정밀도 선언",
      question: "배정밀도 실수를 표준에 맞고 이식성 있게 선언한 것은? (<code>use iso_fortran_env</code> 가 있다고 가정)",
      options: ["real*8 :: x", "double :: x", "real(real64) :: x", "real(8) :: x"],
      hint: "종류 값 숫자를 코드에 직접 박지 않는 쪽이 이식성이 높다." },

    { id: 24, section: "theory", topic: "kind와 정밀도", type: "text",
      title: "요청이 거절되면",
      question: "<code>selected_real_kind(15)</code> 를 만족하는 종류가 시스템에 없으면 이 함수는 무엇을 돌려주는가? 값만 쓰시오.",
      hint: "양수가 아닌 값이 나온다. 정밀도만 부족한 경우다." },

    { id: 25, section: "theory", topic: "kind와 정밀도", type: "choice",
      title: "참·거짓 · 종류 값 숫자",
      question: "<code>real64</code> 의 종류 값이 <code>8</code> 이라는 사실은 모든 컴파일러에서 항상 같다.",
      options: ["참", "거짓"],
      hint: "그래서 숫자 대신 명명 상수를 쓰라고 한다." },

    { id: 26, section: "theory", topic: "kind와 정밀도", type: "choice",
      title: "조회 함수 짝짓기",
      question: "내장 함수와 그것이 알려주는 것을 바르게 짝지은 것은?",
      options: [
        "precision–최댓값, range–유효숫자 자릿수, huge–지수 폭",
        "precision–유효숫자 자릿수, range–지수 폭, huge–최댓값",
        "precision–지수 폭, range–최댓값, huge–유효숫자 자릿수",
        "precision–유효숫자 자릿수, range–최댓값, huge–지수 폭"
      ],
      hint: "range 는 10의 지수를 얼마나 넓게 쓸 수 있는지를 말한다." },

    { id: 27, section: "theory", topic: "kind와 정밀도", type: "text",
      title: "두 리터럴의 종류",
      question: "gfortran에서 <code>print *, kind(1.0), kind(1.0d0)</code> 의 출력은? 두 숫자를 빈칸으로 띄어 쓰시오.",
      hint: "접미사가 없는 1.0 은 단정밀도, 1.0d0 은 배정밀도다." },

    { id: 28, section: "theory", topic: "kind와 정밀도", type: "choice",
      title: "배정밀도를 기본으로 쓰는 이유",
      question: "과학·공학 계산에서 단정밀도보다 배정밀도를 기본으로 쓰는 이유로 가장 알맞은 것은?",
      options: [
        "메모리를 덜 쓰기 때문",
        "유효숫자가 약 7자리뿐이면 반복·누적 연산에서 반올림 오차가 빠르게 쌓이기 때문",
        "단정밀도는 표준이 아니기 때문",
        "배정밀도가 연산 속도가 더 빠르기 때문"
      ],
      hint: "0.1 을 만 번 더하면 어떻게 되는지 떠올린다." },

    { id: 29, section: "theory", topic: "kind와 정밀도", type: "choice",
      title: "단정밀도의 유효숫자",
      question: "단정밀도의 실질 유효숫자 자릿수와 가장 가까운 값은?",
      options: ["약 3자리", "약 7자리", "약 15자리", "약 30자리"],
      hint: "precision 함수는 6을 돌려준다." },

    { id: 30, section: "theory", topic: "상수와 리터럴", type: "choice",
      title: "접미사 없는 실수 리터럴",
      question: "접미사가 없는 실수 리터럴 <code>3.14</code> 의 종류는?",
      options: ["배정밀도", "단정밀도", "정수", "문맥에 따라 컴파일러가 자동 선택"],
      hint: "이 장에서 가장 자주 사고를 내는 지점이다." },

    { id: 31, section: "theory", topic: "상수와 리터럴", type: "choice",
      title: "_dp 접미사의 역할",
      question: "<code>3.14_dp</code> 에서 접미사 <code>_dp</code> 의 역할은?",
      options: [
        "변수 이름을 구분하는 표시다",
        "그 리터럴이 처음부터 dp 종류의 값이 되게 한다",
        "값을 상수로 고정한다",
        "출력 자릿수를 지정한다"
      ],
      hint: "빠뜨리면 단정밀도로 해석되어 정밀도를 잃는다." },

    { id: 32, section: "theory", topic: "상수와 리터럴", type: "choice",
      title: "참·거짓 · parameter",
      question: "<code>parameter</code> 속성을 가진 이름에는 프로그램 실행 중 새 값을 대입할 수 있다.",
      options: ["참", "거짓"],
      hint: "값이 고정되는 시점이 언제인지 생각한다." },

    { id: 33, section: "theory", topic: "상수와 리터럴", type: "choice",
      title: "len=* 의 이점",
      question: "<code>character(len=*), parameter :: app = \"Colab\"</code> 처럼 길이에 <code>*</code> 를 쓰면 무엇이 좋은가?",
      options: [
        "문자열을 실행 중에 바꿀 수 있다",
        "길이를 직접 세지 않아도 초기식 길이에 자동으로 맞춰진다",
        "메모리를 절반만 쓴다",
        "대소문자를 구분하지 않게 된다"
      ],
      hint: "문자열을 고쳐도 길이를 따로 손볼 필요가 없다." },

    { id: 34, section: "theory", topic: "상수와 리터럴", type: "choice",
      title: "매직 넘버",
      question: "매직 넘버(magic number)에 대한 설명으로 가장 알맞은 것은?",
      options: [
        "컴파일러가 자동으로 만들어 주는 최적화용 상수다",
        "의미 설명 없이 코드 곳곳에 박힌 상수값이며, parameter 로 이름을 붙여 없앤다",
        "정수 자료형이 담을 수 있는 최댓값이다",
        "난수 생성에 쓰는 씨앗 값이다"
      ],
      hint: "3.141592 를 여러 곳에 직접 적었을 때 생기는 문제를 떠올린다." },

    { id: 35, section: "theory", topic: "선언과 초기화", type: "line",
      title: "정밀도를 잃지 않게 고치기",
      question: "아래 대입문은 <code>wrong</code> 에 정확한 0.1 을 넣지 못한다. 표준에 맞게 고친 <b>한 줄</b>을 쓰시오.<pre>real(dp) :: wrong\nwrong = 0.1</pre>",
      hint: "리터럴 쪽을 고친다." },

    { id: 36, section: "theory", topic: "선언과 초기화", type: "choice",
      title: "참·거짓 · 미초기화 변수",
      question: "선언만 하고 초기화하지 않은 변수의 값은 항상 <code>0</code> 이다.",
      options: ["참", "거짓"],
      hint: "이식성 함정 단원에서 다룬 내용이다." },

    { id: 37, section: "theory", topic: "선언과 초기화", type: "line",
      title: "real*8 을 표준으로",
      question: "<code>real*8 :: x</code> 는 <code>-std=f2008</code> 에서 비표준 선언 오류가 난다. <code>use iso_fortran_env, only: real64</code> 가 있다고 할 때 표준에 맞게 고친 <b>한 줄</b>을 쓰시오.",
      hint: "종류를 괄호 안에 명명 상수로 적는다." },

    { id: 38, section: "theory", topic: "연산", type: "text",
      title: "실수 나눗셈",
      question: "<code>print *, 7.0 / 2.0</code> 의 결과값은? 숫자만 쓰시오. (자릿수는 생각하지 말고 수학적 값으로)",
      hint: "같은 식을 7 / 2 로 적으면 3이 된다." },

    /* ===================== 실습 · 절별 보충 예제 ===================== */

    { id: 39, section: "practice", topic: "3.1-① 논리 연산", type: "line",
      title: "논리형 두 개 선언",
      question: "논리형 변수 <code>p</code> 와 <code>q</code> 를 <b>한 줄</b>로 선언하시오.",
      hint: "논리형 키워드는 logical 이다." },

    { id: 40, section: "practice", topic: "3.1-① 논리 연산", type: "text",
      title: "논리합의 결과",
      question: "<code>p = (3 > 2)</code>, <code>q = (5 == 4)</code> 일 때 <code>p .or. q</code> 를 출력하면 무엇이 나오는가? 글자 하나만 쓰시오.",
      hint: "둘 중 하나만 참이어도 참이다." },

    { id: 41, section: "practice", topic: "3.1-③ 부분 문자열", type: "text",
      title: "부분 문자열 꺼내기",
      question: "<code>character(len=11) :: word = \"Fortran2008\"</code> 일 때 <code>word(8:11)</code> 은 무엇인가? 글자만 쓰시오.",
      hint: "8번째 글자부터 11번째 글자까지다." },

    { id: 42, section: "practice", topic: "3.2-② 큰 정수", type: "line",
      title: "18자리 정수 종류 요청",
      question: "십진 18자리 정수를 담을 수 있는 종류를 요청해 <code>big</code> 이라는 명명 상수로 정의하시오.",
      hint: "실수용 함수와 이름이 비슷한 정수용 함수가 있다. 인자는 자릿수 하나." },

    { id: 43, section: "practice", topic: "3.2-② 큰 정수", type: "line",
      title: "큰 정수 리터럴",
      question: "<code>integer(big) :: population</code> 변수에 80억(<code>8000000000</code>)을 <code>big</code> 종류의 리터럴로 대입하는 문장을 한 줄로 쓰시오.",
      hint: "숫자 뒤에 밑줄과 종류 이름을 붙인다." },

    { id: 44, section: "practice", topic: "3.2-③ 정밀도와 범위", type: "text",
      title: "단정밀도의 지수 폭",
      question: "<code>range(1.0_real32)</code> 의 값은? 숫자만 쓰시오.",
      hint: "배정밀도는 307이다." },

    { id: 45, section: "practice", topic: "3.3-① 문자 상수", type: "text",
      title: "자동으로 정해진 길이",
      question: "<code>character(len=*), parameter :: title = \"Modern Fortran\"</code> 일 때 <code>len(title)</code> 의 값은? 숫자만 쓰시오.",
      hint: "가운데 빈칸도 한 글자로 센다." },

    { id: 46, section: "practice", topic: "3.3-② 상수로 식 세우기", type: "line",
      title: "상수끼리 곱해 상수 만들기",
      question: "이미 선언된 명명 상수 <code>days_per_week</code> 와 <code>weeks</code> 를 곱해 정수 명명 상수 <code>total_days</code> 를 선언하시오.",
      hint: "초기식 자리에 다른 명명 상수를 써도 된다." },

    { id: 47, section: "practice", topic: "3.3-③ 논리형 상수", type: "text",
      title: "상수를 섞은 논리식",
      question: "<code>verbose = .true.</code>, <code>debug = .false.</code> 인 논리형 명명 상수가 있다. <code>verbose .and. .not. debug</code> 를 출력하면 무엇이 나오는가? 글자 하나만 쓰시오.",
      hint: ".not. 을 먼저 적용한다." },

    { id: 48, section: "practice", topic: "3.4-① 선언과 동시에 초기화", type: "line",
      title: "실수 변수 초기화",
      question: "배정밀도 실수 변수 <code>ratio</code> 를 선언과 동시에 <code>0.5</code> 로 초기화하시오. 종류는 <code>dp</code> 이고 리터럴에도 종류를 붙이시오.",
      hint: "자료형(종류) :: 이름 = 초기식 형태다." },

    { id: 49, section: "practice", topic: "3.4-② 복소수 초기화", type: "line",
      title: "복소수 변수 초기화",
      question: "배정밀도 복소수 변수 <code>z</code> 를 선언과 동시에 1.0 − 1.0i 로 초기화하시오. 종류는 <code>dp</code> 이고 두 리터럴에도 종류를 붙이시오.",
      hint: "complex(종류) :: 이름 = (실수부, 허수부)" },

    { id: 50, section: "practice", topic: "3.4-③ 상수로 초깃값 만들기", type: "line",
      title: "상수를 초깃값에 쓰기",
      question: "이미 선언된 배정밀도 명명 상수 <code>pi</code> 를 4로 나눈 값을 초깃값으로 갖는 배정밀도 변수 <code>angle</code> 을 선언하시오. 나누는 4에도 종류 접미사를 붙이시오.",
      hint: "4.0_dp 로 나눈다." }
  ]
};
