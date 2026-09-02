/* ============================================================
   fort_prac_05_problems.js — 5장 문제 본문 (공개 파일)

   정답은 이 파일에 없습니다. answer/fort_prac_05_answers.js 에 있습니다.
   복습 18 · 이론 20 · 실습 12 = 50문항, 한 문항 1점.

   이 장의 코드는 필요한 곳에 아래 선언이 앞에 있다고 가정합니다.
     use, intrinsic :: iso_fortran_env, only: real64, int64
   ============================================================ */

window.PROBLEMS = {
  title: "FORTRAN 5장 실습",
  subtitle: "제어 흐름 · 50문제",

  sections: [
    { key: "review",   label: "복습", note: "수업 본문 예제" },
    { key: "theory",   label: "이론", note: "출제 예상 문제은행" },
    { key: "practice", label: "실습", note: "절별 보충 예제" }
  ],

  problems: [

    /* ===================== 복습 · 본문 예제 ===================== */

    { id: 1, section: "review", topic: "5.1 if 구문", type: "line",
      title: "블록 if의 첫 줄",
      question: "<code>sign_check</code> 예제에서 배정밀도 <code>x</code> 가 양수인지 검사하는 블록 <code>if</code> 의 <b>첫 줄</b>을 쓰시오. 리터럴에 <code>_real64</code> 를 붙이시오.",
      hint: "조건을 괄호로 묶고 then 으로 끝낸다." },

    { id: 2, section: "review", topic: "5.1 if 구문", type: "choice",
      title: "0을 == 로 검사하지 않는 이유",
      question: "<code>sign_check</code> 예제는 <code>else if (x == 0.0_real64)</code> 대신 <code>else</code> 로 0을 받아 낸다. 그 이유로 가장 알맞은 것은?",
      options: [
        "else if 는 세 번까지만 쓸 수 있어서",
        "부동소수점을 == 로 비교하면 절단 오차 때문에 오작동할 수 있어서",
        "0.0_real64 라는 리터럴이 표준이 아니라서",
        "else 가 else if 보다 실행 속도가 빨라서"
      ],
      hint: "부등호로 양수·음수를 먼저 걸러 내고 남은 지점을 받는 설계다." },

    { id: 3, section: "review", topic: "5.1 if 구문", type: "text",
      title: "부호 분류의 출력",
      question: "<code>x = -3.5_real64</code> 일 때 <code>sign_check</code> 프로그램의 출력은? 단어 하나만 쓰시오.",
      hint: "positive / negative / zero 중 하나다." },

    { id: 4, section: "review", topic: "5.2 select case", type: "line",
      title: "상한이 없는 범위",
      question: "<code>grade</code> 예제에서 90점 <b>이상</b>을 모두 받아 내는 <code>case</code> 줄을 쓰시오.",
      hint: "콜론의 오른쪽을 비워 두면 상한이 없다." },

    { id: 5, section: "review", topic: "5.2 select case", type: "line",
      title: "닫힌 범위",
      question: "<code>grade</code> 예제에서 80점 이상 89점 이하를 받아 내는 <code>case</code> 줄을 쓰시오.",
      hint: "시작값과 끝값을 콜론으로 잇는다." },

    { id: 6, section: "review", topic: "5.2 select case", type: "text",
      title: "점수를 등급으로",
      question: "<code>grade</code> 예제에서 <code>score = 84</code> 일 때 <code>letter</code> 에 담기는 글자는? 글자 하나만 쓰시오.",
      hint: "80~89 구간이 어느 등급인지 본다." },

    { id: 7, section: "review", topic: "5.2 select case", type: "line",
      title: "여러 후보를 한 case로",
      question: "<code>weekday</code> 예제에서 <code>\"thu\"</code> 와 <code>\"fri\"</code> 를 한 가지로 묶어 처리하는 <code>case</code> 줄을 쓰시오.",
      hint: "쉼표로 후보를 나열한다." },

    { id: 8, section: "review", topic: "5.2 select case", type: "text",
      title: "요일 코드 분기",
      question: "<code>weekday</code> 예제에서 <code>code = \"wed\"</code> 일 때 출력은? 단어 하나만 쓰시오.",
      hint: "case (\"wed\") 가지가 무엇을 출력하는지 본다." },

    { id: 9, section: "review", topic: "5.3 do 반복", type: "line",
      title: "증감폭이 있는 do",
      question: "<code>loop_demo</code> 예제처럼 <code>i</code> 가 1부터 5까지 <b>2씩</b> 증가하는 반복문의 첫 줄을 쓰시오.",
      hint: "do 변수 = 시작, 끝, 증감폭" },

    { id: 10, section: "review", topic: "5.5 do concurrent", type: "line",
      title: "독립 반복의 머리",
      question: "<code>concurrent_intro</code> 예제처럼 <code>i</code> 가 1부터 5까지 도는 <b>독립 반복문</b>의 첫 줄을 쓰시오.",
      hint: "범위는 콜론으로 적는다. 일반 do 와 표기가 다르다." },

    { id: 11, section: "review", topic: "5.3 do 반복", type: "line",
      title: "넘침을 막는 누적 변수",
      question: "<code>factorial</code> 예제에서 계승을 누적할 <b>64비트 정수</b> 변수 <code>result</code> 를 선언하시오. 종류는 <code>int64</code> 를 쓰시오.",
      hint: "정수형에도 괄호로 종류를 지정한다." },

    { id: 12, section: "review", topic: "5.3 do 반복", type: "line",
      title: "계승 누적",
      question: "<code>factorial</code> 예제에서 반복 변수 <code>k</code> 를 곱해 <code>result</code> 에 누적하는 문장을 한 줄로 쓰시오.",
      hint: "합을 구할 때의 total = total + i 와 같은 꼴이다." },

    { id: 13, section: "review", topic: "5.3 do while", type: "line",
      title: "do while의 첫 줄",
      question: "<code>halving</code> 예제에서 <code>value</code> 가 <code>threshold</code> 보다 <b>클 동안</b> 반복하는 <code>do while</code> 의 첫 줄을 쓰시오.",
      hint: "동치 비교가 아니라 부등호로 경계를 긋는다." },

    { id: 14, section: "review", topic: "5.3 do while", type: "text",
      title: "몇 번 반으로 자르면",
      question: "<code>value</code> 가 1.0 에서 시작해 매번 절반이 될 때, <code>threshold = 1.0e-3</code> 아래로 내려가기까지 몇 번 반복하는가? 숫자만 쓰시오.",
      hint: "2의 거듭제곱으로 생각한다. 1/1024 이 0.001 보다 작다." },

    { id: 15, section: "review", topic: "5.4 cycle과 exit", type: "line",
      title: "배수 건너뛰기",
      question: "<code>skip_multiples</code> 예제에서 <code>i</code> 가 <code>skip_factor</code> 의 배수이면 남은 본문을 건너뛰는 문장을 <b>한 줄</b>로 쓰시오. 논리 if 한 줄로 쓰시오.",
      hint: "나머지가 0인지 보고 흐름을 다음 바퀴로 넘긴다." },

    { id: 16, section: "review", topic: "5.4 명명 구문", type: "line",
      title: "바깥 반복까지 탈출",
      question: "<code>first_pair</code> 예제에서 바깥 반복의 이름이 <code>search</code> 일 때, 안쪽 반복과 바깥 반복을 <b>한 번에</b> 벗어나는 문장을 쓰시오.",
      hint: "이름을 함께 적어 어느 반복을 벗어날지 가리킨다." },

    { id: 17, section: "review", topic: "5.4 명명 구문", type: "text",
      title: "첫 쌍의 곱",
      question: "<code>first_pair</code> 예제(<code>i</code>, <code>j</code> 는 1~9, 임계값 40)에서 출력되는 <code>product</code> 값은? 숫자만 쓰시오.",
      hint: "i를 1부터 올리며 j를 1~9까지 훑는다. i=5 에서 처음 40을 넘는다." },

    { id: 18, section: "review", topic: "오류 학습", type: "line",
      title: "실수 값을 정수에서 만들기",
      question: "<code>good_loop</code> 예제에서 정수 인덱스 <code>i</code> 와 <code>steps</code> 로부터 배정밀도 <code>x</code> 를 계산하는 문장을 한 줄로 쓰시오. 종류는 <code>real64</code> 를 쓰시오.",
      hint: "두 정수를 각각 변환한 뒤 나눈다." },

    /* ===================== 이론 · 문제은행 ===================== */

    { id: 19, section: "theory", topic: "if 구문", type: "choice",
      title: "else if 사슬",
      question: "블록 <code>if</code> 의 <code>else if</code> 사슬에서 여러 조건이 <b>동시에</b> 참일 때 실행되는 가지는?",
      options: [
        "참인 가지가 모두 차례로 실행된다",
        "위에서부터 검사해 처음으로 참이 되는 가지 하나만 실행된다",
        "마지막으로 참이 되는 가지 하나만 실행된다",
        "모호하다는 컴파일 오류가 난다"
      ],
      hint: "한 가지를 실행하면 나머지는 검사하지 않는다." },

    { id: 20, section: "theory", topic: "select case", type: "choice",
      title: "case 값의 제약",
      question: "<code>select case</code> 의 각 <code>case</code> 에 적을 수 있는 값에 대한 설명으로 옳은 것은?",
      options: [
        "상수 식이어야 하며 변수는 쓸 수 없다",
        "변수도 자유롭게 쓸 수 있다",
        "실수형 변수만 쓸 수 있다",
        "리터럴은 안 되고 명명 상수만 쓸 수 있다"
      ],
      hint: "변수로 갈래를 나눠야 한다면 if ... else if 를 써야 한다." },

    { id: 21, section: "theory", topic: "select case", type: "text",
      title: "어디에도 맞지 않으면",
      question: "<code>select case</code> 에서 어떤 <code>case</code> 에도 해당하지 않는 값이 들어왔을 때 실행되는 구문의 이름은? 키워드를 그대로 쓰시오.",
      hint: "if 문의 else 와 같은 역할이다." },

    { id: 22, section: "theory", topic: "do 반복", type: "text",
      title: "반복 변수의 자료형",
      question: "계수 <code>do</code>(<code>do i = start, end, step</code>)의 반복 변수가 가져야 하는 자료형은? 키워드만 쓰시오.",
      hint: "실수는 현행 표준에서 삭제되었다." },

    { id: 23, section: "theory", topic: "do 반복", type: "choice",
      title: "반복 횟수가 정해지는 시점",
      question: "계수 <code>do</code> 의 반복 횟수에 대한 설명으로 옳은 것은?",
      options: [
        "매 반복마다 다시 계산되므로 본문에서 끝값 변수를 바꾸면 횟수도 바뀐다",
        "루프에 들어가는 순간 한 번 계산되어 고정되며, 본문에서 끝값 변수를 바꿔도 달라지지 않는다",
        "컴파일 시점에만 정해지므로 변수를 끝값으로 쓸 수 없다",
        "반복 변수의 값이 끝값을 넘는지 매번 다시 검사한다"
      ],
      hint: "무한 루프를 예방하는 설계다." },

    { id: 24, section: "theory", topic: "do while", type: "choice",
      title: "do while이 알맞은 상황",
      question: "<code>do while</code> 이 계수 <code>do</code> 보다 적절한 상황은?",
      options: [
        "반복 횟수를 미리 알 수 없고 어떤 조건이 만족될 때까지 돌아야 할 때",
        "배열의 모든 원소를 한 번씩 훑을 때",
        "반복 횟수가 상수로 정해져 있을 때",
        "반복 간에 의존성이 전혀 없을 때"
      ],
      hint: "수치 반복이 허용 오차 이하로 수렴할 때까지 도는 경우를 떠올린다." },

    { id: 25, section: "theory", topic: "cycle과 exit", type: "choice",
      title: "cycle과 exit의 차이",
      question: "<code>cycle</code> 과 <code>exit</code> 의 동작을 바르게 설명한 것은?",
      options: [
        "cycle 은 반복을 즉시 벗어나고, exit 는 다음 반복으로 넘어간다",
        "cycle 은 현재 반복의 남은 본문을 건너뛰고 다음 반복으로 넘어가며, exit 는 반복 자체를 즉시 벗어난다",
        "둘 다 반복을 벗어나지만 exit 는 프로그램도 함께 끝낸다",
        "cycle 은 바깥 반복에, exit 는 안쪽 반복에만 작용한다"
      ],
      hint: "하나는 건너뛰기, 하나는 빠져나오기다." },

    { id: 26, section: "theory", topic: "명명 구문", type: "choice",
      title: "명명 구문이 필요한 때",
      question: "중첩된 반복에서 명명 구문(named construct)이 필요한 상황은?",
      options: [
        "반복 변수의 이름이 겹칠 때",
        "안쪽 반복뿐 아니라 바깥 반복까지 한 번에 벗어나거나 건너뛰어야 할 때",
        "반복 횟수가 아주 많을 때",
        "do concurrent 안에서 exit 를 써야 할 때"
      ],
      hint: "이름 없는 exit 는 가장 가까운 안쪽 반복에만 작용한다." },

    { id: 27, section: "theory", topic: "do concurrent", type: "choice",
      title: "do concurrent의 핵심",
      question: "<code>do concurrent</code> 가 일반 <code>do</code> 와 다른 핵심 차이로 옳은 것은?",
      options: [
        "실행 순서가 보장되지 않고, 각 반복이 서로 독립적이어야 한다",
        "실행 순서는 보장되지만 반복 횟수가 매번 달라진다",
        "반복 변수로 실수를 쓸 수 있다",
        "반복 간 의존성이 있어도 컴파일러가 알아서 정렬해 준다"
      ],
      hint: "컴파일러에게 마음껏 최적화하라고 알려 주는 구조다." },

    { id: 28, section: "theory", topic: "do concurrent", type: "choice",
      title: "누적을 do concurrent로 바꾸면",
      question: "<code>total = total + i</code> 같은 누적 코드를 <code>do concurrent</code> 로 바꾸면 안 되는 이유는?",
      options: [
        "do concurrent 안에서는 정수 연산을 할 수 없어서",
        "한 반복의 결과를 다음 반복이 이어받는 의존성이 있어 순서 없이 실행하면 결과가 달라져서",
        "total 이 반복 변수와 이름이 달라서",
        "do concurrent 는 덧셈보다 곱셈이 느려서"
      ],
      hint: "독립성이 깨지는 지점이 어디인지 본다." },

    { id: 29, section: "theory", topic: "stop과 error stop", type: "choice",
      title: "종료 상태의 차이",
      question: "<code>stop</code> 과 <code>error stop</code> 을 종료 상태 관점에서 바르게 설명한 것은?",
      options: [
        "둘 다 종료 상태 0을 돌려준다",
        "stop 은 코드를 생략하거나 0이면 정상 종료(0)를, error stop 은 0이 아닌 오류 상태를 돌려준다",
        "stop 은 오류 상태를, error stop 은 정상 종료를 돌려준다",
        "종료 상태는 운영체제가 임의로 정한다"
      ],
      hint: "셸이 성공과 실패를 어떻게 구분하는지 생각한다." },

    { id: 30, section: "theory", topic: "실수 비교", type: "choice",
      title: "실수 동치 비교로 반복을 끝내면",
      question: "부동소수점 변수의 반복 종료 조건으로 동치 비교(<code>==</code>)를 쓰면 위험한 까닭은?",
      options: [
        "== 는 반복문 안에서 쓸 수 없어서",
        "기대한 값과 정확히 같아지는 순간이 오지 않아 무한 반복에 빠질 수 있어서",
        "비교 연산이 느려 성능이 떨어져서",
        "컴파일 오류가 나서"
      ],
      hint: "부등호나 허용 오차로 판정해야 한다." },

    { id: 31, section: "theory", topic: "오류 학습", type: "choice",
      title: "실수 반복 변수가 금지된 이유",
      question: "계수 <code>do</code> 의 반복 변수로 실수를 쓰는 것이 금지된 이유를 <b>수치적</b> 관점에서 바르게 설명한 것은?",
      options: [
        "실수 변수가 정수보다 메모리를 많이 써서",
        "0.1 같은 값이 이진수로 정확히 표현되지 않아 누적 오차가 쌓여 반복 횟수가 의도와 달라져서",
        "실수는 음수 증감폭을 쓸 수 없어서",
        "컴파일러가 실수 연산을 병렬화하지 못해서"
      ],
      hint: "정수로 세고 실수 값은 인덱스로부터 다시 계산하면 이 문제가 없다." },

    { id: 32, section: "theory", topic: "이식성", type: "choice",
      title: "real64를 쓰는 이유",
      question: "<code>real*8</code> 대신 <code>iso_fortran_env</code> 의 <code>real64</code> 를 써야 하는 까닭으로 옳은 것은?",
      options: [
        "real64 가 real*8 보다 정밀도가 높아서",
        "real64 는 표준 모듈이 제공하는 이름이라 표준을 지키는 어느 컴파일러에서나 같은 뜻이지만, real*8 은 컴파일러 의존 표기라서",
        "real*8 은 컴파일 속도가 느려서",
        "real*8 은 배열에 쓸 수 없어서"
      ],
      hint: "정밀도는 종류(kind)로 지정한다는 원칙과 이어진다." },

    { id: 33, section: "theory", topic: "출력 추적", type: "text",
      title: "본문에서 끝값을 바꾸면",
      question: "아래 프로그램이 출력하는 숫자를 순서대로 빈칸으로 띄어 쓰시오.<pre>integer :: i, n\nn = 3\ndo i = 1, n\n   n = n + 1\n   print '(i0)', i\nend do</pre>",
      hint: "반복 횟수가 언제 고정되는지 떠올린다." },

    { id: 34, section: "theory", topic: "출력 추적", type: "text",
      title: "cycle과 exit이 섞이면",
      question: "아래 프로그램이 출력하는 숫자를 순서대로 빈칸으로 띄어 쓰시오.<pre>do i = 1, 5\n   if (i == 3) cycle\n   if (i == 5) exit\n   print '(i0)', i\nend do</pre>",
      hint: "print 에 닿기 전에 무슨 일이 일어나는지 본다." },

    { id: 35, section: "theory", topic: "출력 추적", type: "text",
      title: "범위 case의 선택",
      question: "아래 프로그램의 출력은? 단어 하나만 쓰시오.<pre>integer, parameter :: x = 7\nselect case (x)\ncase (1:5)\n   print '(a)', \"low\"\ncase (6:10)\n   print '(a)', \"mid\"\ncase default\n   print '(a)', \"other\"\nend select</pre>",
      hint: "7이 어느 범위에 드는지 본다." },

    { id: 36, section: "theory", topic: "출력 추적", type: "text",
      title: "exit outer가 끊는 지점",
      question: "아래 프로그램이 <b>마지막으로</b> 출력하는 줄은? 두 숫자를 빈칸으로 띄어 쓰시오.<pre>outer: do i = 1, 3\n   do j = 1, 3\n      if (i + j == 4) exit outer\n      print '(i0, a, i0)', i, \" \", j\n   end do\nend do outer</pre>",
      hint: "i + j 가 4가 되는 첫 순간을 찾는다." },

    { id: 37, section: "theory", topic: "오류 찾기", type: "choice",
      title: "겹치는 case 범위",
      question: "아래 코드가 컴파일되지 않는 이유는?<pre>select case (score)\ncase (80:89)\n   print '(a)', \"b\"\ncase (85:95)\n   print '(a)', \"a\"\nend select</pre>",
      options: [
        "case default 가 없어서",
        "두 case 의 범위가 85~89 구간에서 겹쳐서",
        "score 가 변수라서",
        "case 를 두 개만 써서"
      ],
      hint: "한 값이 두 가지에 동시에 해당하면 안 된다." },

    { id: 38, section: "theory", topic: "오류 찾기", type: "line",
      title: "실수 반복을 표준으로",
      question: "<code>do x = 0.0, 1.0, 0.1</code> 은 표준에서 삭제된 기능이라 오류가 난다. <code>integer, parameter :: steps = 10</code> 과 정수 <code>i</code> 를 써서 같은 의도를 구현할 때 <b>반복문의 첫 줄</b>을 쓰시오.",
      hint: "0부터 steps 까지 정수로 센다. 그러면 총 11번 돈다." },

    /* ===================== 실습 · 절별 보충 예제 ===================== */

    { id: 39, section: "practice", topic: "5.1-1 논리 if", type: "line",
      title: "한 줄로 절댓값",
      question: "정수 <code>y</code> 가 음수이면 부호를 뒤집는 문장을 <b>논리 if 한 줄</b>로 쓰시오. <code>then</code> 과 <code>end if</code> 없이 쓰시오.",
      hint: "if (조건) 문장 형태다." },

    { id: 40, section: "practice", topic: "5.1-2 블록 if", type: "text",
      title: "더 큰 값 고르기",
      question: "<code>a = 17</code>, <code>b = 23</code> 일 때 <code>if (a > b) then ... else ...</code> 로 고른 <code>larger</code> 의 값은? 숫자만 쓰시오.",
      hint: "두 값을 비교한다." },

    { id: 41, section: "practice", topic: "5.2-1 정수 case", type: "text",
      title: "신호 코드",
      question: "<code>code = 2</code> 이고 <code>case (1)</code> 이 red, <code>case (2)</code> 가 yellow, <code>case (3)</code> 이 green 일 때 출력은? 단어 하나만 쓰시오.",
      hint: "코드 값에 해당하는 가지를 찾는다." },

    { id: 42, section: "practice", topic: "5.2-2 범위 case", type: "line",
      title: "가운데 구간",
      question: "길이가 100 이상 199 이하일 때를 받아 내는 <code>case</code> 줄을 쓰시오.",
      hint: "양쪽이 닫힌 범위다." },

    { id: 43, section: "practice", topic: "5.2-2 범위 case", type: "line",
      title: "하한이 없는 구간",
      question: "길이가 99 <b>이하</b>인 모든 값을 받아 내는 <code>case</code> 줄을 쓰시오.",
      hint: "콜론의 왼쪽을 비워 둔다." },

    { id: 44, section: "practice", topic: "5.3-1 계수 do", type: "text",
      title: "제곱의 합",
      question: "1부터 5까지 각 수의 제곱을 모두 더하면 얼마인가? 숫자만 쓰시오.",
      hint: "1 + 4 + 9 + 16 + 25" },

    { id: 45, section: "practice", topic: "5.3-2 do while", type: "line",
      title: "자릿수 세기의 조건",
      question: "<code>value</code> 를 10으로 계속 나누며 자릿수를 셀 때, <code>value</code> 가 0보다 <b>클 동안</b> 반복하는 <code>do while</code> 의 첫 줄을 쓰시오.",
      hint: "조건을 괄호로 묶는다." },

    { id: 46, section: "practice", topic: "5.3-2 do while", type: "text",
      title: "9042는 몇 자리",
      question: "<code>number = 9042</code> 를 10으로 계속 나누어 0이 될 때까지 셀 때 반복 횟수는? 숫자만 쓰시오.",
      hint: "정수 나눗셈으로 9042 → 904 → 90 → 9 → 0" },

    { id: 47, section: "practice", topic: "5.4-1 exit", type: "text",
      title: "제곱이 100을 넘는 첫 수",
      question: "<code>i</code> 를 1부터 올리며 <code>i * i > 100</code> 을 처음 만족하는 <code>i</code> 는? 숫자만 쓰시오.",
      hint: "10의 제곱은 100이라 조건을 만족하지 않는다." },

    { id: 48, section: "practice", topic: "5.4-2 명명 구문", type: "line",
      title: "바깥 반복의 다음 회차로",
      question: "바깥 반복의 이름이 <code>rows</code> 일 때, 안쪽 반복 도중 <b>바깥 반복의 다음 회차</b>로 곧장 넘어가는 문장을 쓰시오.",
      hint: "건너뛰기 키워드에 이름을 붙인다." },

    { id: 49, section: "practice", topic: "5.5-2 마스크", type: "line",
      title: "짝수만 도는 독립 반복",
      question: "<code>i</code> 가 1부터 10까지 도는 <code>do concurrent</code> 에 <b>짝수만</b> 실행하도록 마스크를 붙인 첫 줄을 쓰시오.",
      hint: "범위 뒤에 쉼표를 찍고 조건식을 적는다. 나머지 함수를 쓴다." },

    { id: 50, section: "practice", topic: "5.6-2 error stop", type: "line",
      title: "종료 코드를 지정한 오류 종료",
      question: "종료 상태 <code>2</code> 를 운영체제에 돌려주며 프로그램을 <b>오류 종료</b>하는 문장을 쓰시오.",
      hint: "정상 종료 키워드 앞에 한 단어가 더 붙는다." }
  ]
};
