/* ============================================================
   fort_prac_10_problems.js — 10장 문제 본문 (공개 파일)

   정답은 이 파일에 없습니다. answer/fort_prac_10_answers.js 에 있습니다.
   복습 18 · 이론 20 · 실습 12 = 50문항, 한 문항 1점.
   ============================================================ */

window.PROBLEMS = {
  title: "FORTRAN 10장 실습",
  subtitle: "함수와 서브루틴 · 50문제",

  sections: [
    { key: "review",   label: "복습", note: "수업 본문 예제" },
    { key: "theory",   label: "이론", note: "출제 예상 문제은행" },
    { key: "practice", label: "실습", note: "절별 보충 예제" }
  ],

  problems: [

    /* ===================== 복습 · 본문 예제 ===================== */

    { id: 1, section: "review", topic: "10.1 함수", type: "line",
      title: "함수의 머리",
      question: "<code>temperature</code> 예제에서 섭씨 <code>c</code> 를 받아 결과 변수 <code>f</code> 로 돌려주는 함수 <code>to_fahrenheit</code> 의 <b>머리 줄</b>을 쓰시오. 반환형은 선언부에서 밝히는 방식으로 쓰시오.",
      hint: "머리에는 형을 적지 않고 result 절로 결과 변수를 지정한다." },

    { id: 2, section: "review", topic: "10.1 함수", type: "line",
      title: "변환식",
      question: "섭씨 <code>c</code> 를 화씨로 바꿔 결과 변수 <code>f</code> 에 넣는 문장을 한 줄로 쓰시오. 숫자는 모두 실수로 적으시오.",
      hint: "화씨 = 섭씨 × 9 ÷ 5 + 32" },

    { id: 3, section: "review", topic: "10.1 함수", type: "text",
      title: "표의 마지막 줄",
      question: "<code>temperature</code> 예제에서 섭씨 100도에 대응하는 화씨 값은? 숫자만 쓰시오.",
      hint: "물이 끓는 온도다." },

    { id: 4, section: "review", topic: "10.1 서브루틴", type: "line",
      title: "서브루틴 호출",
      question: "<code>circle_demo</code> 예제에서 반지름 <code>r</code> 을 넘기고 결과를 <code>area</code> 와 <code>circumference</code> 로 받는 호출문을 쓰시오.",
      hint: "서브루틴은 문장으로 부른다." },

    { id: 5, section: "review", topic: "10.1 서브루틴", type: "line",
      title: "넓이 계산",
      question: "서브루틴 <code>circle</code> 안에서 반지름 <code>radius</code> 로 넓이를 구해 가인수 <code>a</code> 에 넣는 문장을 쓰시오. 명명 상수 <code>pi</code> 가 이미 있고 제곱은 거듭제곱 연산자로 적으시오.",
      hint: "넓이 = π r²" },

    { id: 6, section: "review", topic: "10.1 서브루틴", type: "line",
      title: "둘레 계산",
      question: "같은 서브루틴에서 둘레를 구해 가인수 <code>c</code> 에 넣는 문장을 쓰시오. 숫자는 실수로 적으시오.",
      hint: "둘레 = 2πr" },

    { id: 7, section: "review", topic: "오류 학습", type: "choice",
      title: "정수를 넘기면",
      question: "가인수가 <code>real :: c</code> 인 함수에 <code>to_fahrenheit(100)</code> 처럼 정수를 넘기면 어떻게 되는가?",
      options: [
        "컴파일러가 알아서 100.0 으로 바꿔 준다",
        "Type mismatch in argument 'c' ... passed INTEGER(4) to REAL(4) 컴파일 오류가 난다",
        "경고만 나고 실행된다",
        "실행 중에 엉뚱한 값이 나온다"
      ],
      hint: "내부 프로시저라 컴파일러가 인터페이스를 알고 있다. 100.0 이나 real(100) 으로 넘겨야 한다." },

    { id: 8, section: "review", topic: "10.2 호스트 결합", type: "line",
      title: "호스트 변수 건드리기",
      question: "<code>host_assoc</code> 예제의 서브루틴 <code>bump</code> 안에서, 인수로 받지 않은 호스트 변수 <code>counter</code> 를 1 늘리는 문장을 쓰시오.",
      hint: "호스트에 선언된 변수를 그대로 쓴다." },

    { id: 9, section: "review", topic: "10.2 호스트 결합", type: "text",
      title: "세 번 부르면",
      question: "<code>counter = 0</code> 에서 시작해 <code>call bump()</code> 를 세 번 실행하면 <code>counter</code> 는? 숫자만 쓰시오.",
      hint: "한 번 부를 때마다 1씩 늘어난다." },

    { id: 10, section: "review", topic: "10.2 외부 프로시저", type: "line",
      title: "외부 함수의 반환형 선언",
      question: "외부 함수 <code>triple</code> 이 실수를 돌려준다는 것을 호출하는 쪽 선언부에 알리는 줄을 쓰시오.",
      hint: "변수를 선언하듯 함수 이름에 형을 붙인다." },

    { id: 11, section: "review", topic: "10.2 외부 프로시저", type: "choice",
      title: "선언을 빠뜨리면",
      question: "외부 함수 <code>triple</code> 의 반환형 선언을 빠뜨리면 어떻게 되는가?",
      options: [
        "Return type mismatch of function 'triple' ... (UNKNOWN/REAL(4)) 컴파일 오류가 난다",
        "실행은 되지만 값이 0으로 나온다",
        "컴파일러가 실수형으로 가정하고 정상 동작한다",
        "링크 단계에서만 문제가 생긴다"
      ],
      hint: "외부 프로시저는 묵시적 인터페이스 상태라 컴파일러가 구조를 모른다." },

    { id: 12, section: "review", topic: "10.3 반환값", type: "line",
      title: "방식 A의 머리",
      question: "<code>two_styles</code> 예제에서 실수 <code>a</code> 를 받아 <b>함수 이름으로</b> 값을 돌려주는 함수 <code>square</code> 의 머리 줄을 쓰시오.",
      hint: "result 절 없이 머리에 반환형을 직접 적는다." },

    { id: 13, section: "review", topic: "10.3 반환값", type: "line",
      title: "방식 A의 대입",
      question: "위 함수의 본체에서 <code>a</code> 의 제곱을 돌려주는 대입문을 쓰시오.",
      hint: "함수 이름 자체를 변수처럼 쓴다." },

    { id: 14, section: "review", topic: "10.4 되부름", type: "line",
      title: "되부름 함수의 머리",
      question: "<code>factorial_demo</code> 예제에서 정수 <code>n</code> 을 받아 결과 변수 <code>n_fact</code> 로 돌려주는 되부름 함수 <code>fact</code> 의 <b>머리 줄</b>을 쓰시오. 반환형은 선언부에서 밝히는 방식으로 쓰시오.",
      hint: "되부름임을 알리는 키워드를 앞에 붙이고 result 절로 결과 변수를 지정한다." },

    { id: 15, section: "review", topic: "10.4 되부름", type: "line",
      title: "더 작은 문제로 넘기기",
      question: "<code>fact</code> 의 종료 조건이 아닌 쪽에서 실행되는 대입문을 쓰시오.",
      hint: "n 에 한 단계 작은 계승을 곱한다." },

    { id: 16, section: "review", topic: "10.4 되부름", type: "text",
      title: "5의 계승",
      question: "<code>fact(5)</code> 의 값은? 숫자만 쓰시오.",
      hint: "5 × 4 × 3 × 2 × 1" },

    { id: 17, section: "review", topic: "10.4 그래프 예제", type: "line",
      title: "감쇠 진동 함수",
      question: "<code>plot_function</code> 예제에서 f(x) = e^(−0.1x)·sin x 를 결과 변수 <code>y</code> 에 넣는 문장을 한 줄로 쓰시오.",
      hint: "지수 함수는 exp 다. 지수부의 부호에 주의한다." },

    { id: 18, section: "review", topic: "오류 학습", type: "choice",
      title: "인수를 하나 빠뜨리면",
      question: "세 인수를 받는 서브루틴을 <code>call circle(r, area)</code> 처럼 두 개만 넘겨 부르면?",
      options: [
        "빠진 인수는 0으로 채워져 실행된다",
        "Missing actual argument for argument 'c' 컴파일 오류가 난다",
        "실행 중에 Segmentation fault 가 난다",
        "경고만 나고 정상 실행된다"
      ],
      hint: "필요 없는 결과라도 받아 줄 변수를 만들어 세 개를 모두 넘겨야 한다." },

    /* ===================== 이론 · 문제은행 ===================== */

    { id: 19, section: "theory", topic: "10.1 함수와 서브루틴", type: "choice",
      title: "둘의 차이",
      question: "함수와 서브루틴의 차이로 옳은 것은?",
      options: [
        "함수는 값을 정확히 하나 돌려주며 식 안에서 쓰고, 서브루틴은 call 문으로 부르며 인수를 통해 결과를 0개에서 여러 개까지 돌려준다",
        "함수는 값을 여러 개 돌려주고 서브루틴은 하나만 돌려준다",
        "둘 다 call 로 부르며 차이는 이름뿐이다",
        "서브루틴만 인수를 받을 수 있다"
      ],
      hint: "돌려주는 값의 개수와 호출 방법 두 가지로 갈린다." },

    { id: 20, section: "theory", topic: "10.1 호출", type: "line",
      title: "함수 호출",
      question: "함수 <code>f</code> 에 인수 <code>x</code> 를 넘겨 그 결과를 변수 <code>y</code> 에 담는 문장을 쓰시오.",
      hint: "식의 우변에서 쓴다." },

    { id: 21, section: "theory", topic: "10.1 호출", type: "line",
      title: "서브루틴 호출",
      question: "서브루틴 <code>s</code> 에 인수 <code>x</code> 를 넘겨 부르는 문장을 쓰시오.",
      hint: "독립된 문장으로 부른다." },

    { id: 22, section: "theory", topic: "10.1 인수", type: "choice",
      title: "가인수와 실인수",
      question: "가인수(dummy argument)와 실인수(actual argument)에 대한 설명으로 옳은 것은?",
      options: [
        "가인수는 프로시저를 정의할 때 쓰는 받을 자리이고, 실인수는 호출할 때 실제로 넘기는 값이며, 둘은 적힌 위치 순서대로 짝지어진다",
        "가인수는 호출할 때 넘기는 값이고 실인수는 정의할 때 쓰는 변수다",
        "둘은 이름이 같아야만 짝지어진다",
        "짝짓기는 자료형이 같은 것끼리 자동으로 이뤄진다"
      ],
      hint: "이름이 아니라 순서가 기준이다." },

    { id: 23, section: "theory", topic: "10.1 출력 예측", type: "text",
      title: "제곱 함수의 출력",
      question: "아래 프로그램의 출력값은? 숫자만 쓰시오.<pre>print '(f0.1)', square(5.0)\ncontains\n   function square(x) result(y)\n      real :: x\n      real :: y\n      y = x * x\n   end function square</pre>",
      hint: "서식이 f0.1 이므로 소수 한 자리까지 나온다." },

    { id: 24, section: "theory", topic: "10.1 내부 프로시저", type: "text",
      title: "본체와 프로시저의 경계",
      question: "프로그램 본체와 그 안의 내부 프로시저를 가르는 키워드는? 키워드만 쓰시오.",
      hint: "이 아래에 함수와 서브루틴을 정의한다." },

    { id: 25, section: "theory", topic: "10.2 호스트 결합", type: "text",
      title: "바깥 변수를 그대로 쓰는 성질",
      question: "내부 프로시저가 호스트에 선언된 변수를 인수로 넘기지 않고도 쓸 수 있는 성질의 이름은? 우리말 용어로 쓰시오.",
      hint: "호스트와 무엇이 이뤄지는지 생각한다." },

    { id: 26, section: "theory", topic: "10.2 인터페이스", type: "choice",
      title: "안전한 프로시저",
      question: "컴파일러가 인터페이스를 자동으로 아는 프로시저와 그것이 안전한 이유로 옳은 것은?",
      options: [
        "내부·모듈 프로시저다. 같은 프로그램·모듈 안에 있어 인수의 개수·형과 반환값을 컴파일러가 알 수 있고, 호출이 규격에 맞는지 컴파일 단계에서 점검해 준다",
        "외부 프로시저다. 독립되어 있어 컴파일러가 따로 분석하기 쉽다",
        "셋 다 자동으로 인터페이스가 보인다",
        "내부 프로시저만 해당하며 모듈 프로시저는 아니다"
      ],
      hint: "인수 개수나 형이 어긋난 호출을 어느 단계에서 잡아 주는지 본다." },

    { id: 27, section: "theory", topic: "10.2 외부 프로시저", type: "choice",
      title: "외부 함수를 부르려면",
      question: "명시적 인터페이스가 없는 상태에서 외부 함수를 호출하려면 호출하는 쪽에서 반드시 해야 하는 일은?",
      options: [
        "그 외부 함수의 반환형을 호출부 선언부에서 직접 선언해야 한다",
        "함수 이름을 대문자로 적어야 한다",
        "call 문으로 불러야 한다",
        "아무것도 하지 않아도 된다"
      ],
      hint: "예를 들어 real :: triple 처럼 적는다." },

    { id: 28, section: "theory", topic: "10.2 출력 예측", type: "text",
      title: "호스트 변수 누적",
      question: "아래 프로그램의 출력값은? 숫자만 쓰시오.<pre>total = 0\ncall add(10)\ncall add(5)\nprint '(i0)', total\ncontains\n   subroutine add(v)\n      integer :: v\n      total = total + v\n   end subroutine add</pre>",
      hint: "add 가 호스트의 total 을 직접 갱신한다." },

    { id: 29, section: "theory", topic: "10.2 설계", type: "choice",
      title: "인수로 주고받기를 권하는 이유",
      question: "큰 프로그램에서 호스트 결합으로 변수를 직접 건드리기보다 인수로 주고받는 편을 권하는 이유는?",
      options: [
        "인수로 넘기면 실행 속도가 빨라져서",
        "어떤 변수가 어디서 바뀌는지 추적하기 쉬워지고, 프로시저가 무엇을 입력받아 무엇을 바꾸는지 호출부에서 드러나 재사용도 쉬워서",
        "호스트 결합은 표준이 아니어서",
        "인수가 없으면 컴파일 오류가 나서"
      ],
      hint: "부작용이 어디서 일어나는지 보이는가를 생각한다." },

    { id: 30, section: "theory", topic: "10.3 반환값", type: "choice",
      title: "값을 돌려주는 두 표기",
      question: "함수가 값을 돌려주는 두 가지 표기로 옳은 것은?",
      options: [
        "함수 이름에 값을 대입하는 방식과, result(변수) 로 결과 변수를 지정해 그 변수에 대입하는 방식",
        "return 문으로 값을 돌려주는 방식과, print 로 출력하는 방식",
        "call 로 부르는 방식과 식에서 쓰는 방식",
        "intent(out) 인수를 쓰는 방식과 전역 변수를 쓰는 방식"
      ],
      hint: "하나는 전통적, 하나는 현대적 표기다." },

    { id: 31, section: "theory", topic: "10.3 result", type: "choice",
      title: "참·거짓 · result와 반환형",
      question: "<code>result</code> 절을 쓰는 함수는 함수 머리(<code>function</code> 줄)에 반환형을 적는다.",
      options: ["참", "거짓"],
      hint: "결과 변수의 형은 어디에서 선언하는지 떠올린다." },

    { id: 32, section: "theory", topic: "10.3 result", type: "choice",
      title: "형을 두 곳에 적으면",
      question: "함수 이름과 결과 변수의 형 속성 관계, 그리고 두 곳에 모두 형을 선언했을 때의 결과로 옳은 것은?",
      options: [
        "둘은 같은 형·종류 속성을 가지므로 한 곳에만 선언해야 하며, 양쪽에 모두 선언하면 중복 선언으로 컴파일 오류가 난다",
        "둘은 서로 다른 형을 가질 수 있으므로 양쪽에 각각 선언해야 한다",
        "양쪽에 선언하면 나중 것이 우선한다",
        "형 선언은 어느 쪽에도 하지 않아도 된다"
      ],
      hint: "둘은 컴퓨터 내부에서 같은 속성을 공유한다." },

    { id: 33, section: "theory", topic: "10.3 출력 예측", type: "text",
      title: "세 배 함수의 출력",
      question: "아래 프로그램의 출력값은? 숫자만 쓰시오.<pre>print '(i0)', triple(7)\ncontains\n   function triple(n) result(r)\n      integer :: n\n      integer :: r\n      r = 3 * n\n   end function triple</pre>",
      hint: "3 × 7" },

    { id: 34, section: "theory", topic: "10.3 result", type: "text",
      title: "빈칸의 키워드",
      question: "다음 함수 머리의 빈칸에 들어갈 키워드는? 키워드만 쓰시오.<pre>function area(r) ______(a)</pre>",
      hint: "결과 변수를 지정하는 절이다." },

    { id: 35, section: "theory", topic: "10.4 되부름", type: "text",
      title: "되부름 키워드",
      question: "Fortran 2008에서 직접 또는 간접적으로 자기 자신을 호출하는 프로시저에 반드시 붙여야 하는 키워드는? 키워드만 쓰시오.",
      hint: "빠뜨리면 cannot be called recursively 오류가 난다." },

    { id: 36, section: "theory", topic: "10.4 되부름", type: "choice",
      title: "왜 result가 필요한가",
      question: "되부름 함수가 결과를 함수 이름이 아니라 <code>result</code> 변수로 돌려주어야 하는 이유는?",
      options: [
        "함수 이름이 자기 자신을 호출하는 식의 일부로 쓰이므로, 결과를 담을 별도의 변수가 필요하기 때문",
        "함수 이름은 반환값을 담을 수 없도록 표준이 바뀌었기 때문",
        "result 를 쓰면 실행 속도가 빨라지기 때문",
        "되부름 함수는 값을 돌려주지 않기 때문"
      ],
      hint: "이름 자체가 호출에 쓰이면 대입 대상으로 쓸 수 없다." },

    { id: 37, section: "theory", topic: "10.4 되부름", type: "choice",
      title: "종료 조건이 없으면",
      question: "모든 되부름에 반드시 있어야 하는 것과, 그것이 없을 때 실행 중에 일어나는 일로 옳은 것은?",
      options: [
        "종료 조건(base case)이 있어야 한다. 없으면 자기 자신을 끝없이 호출해 호출 스택이 넘쳐 비정상 종료한다",
        "recursive 키워드가 있어야 한다. 없으면 결과가 0이 된다",
        "result 절이 있어야 한다. 없으면 무한 루프가 된다",
        "반복문이 있어야 한다. 없으면 컴파일 오류가 난다"
      ],
      hint: "더 작은 문제로 줄어들다가 멈추는 지점이 필요하다." },

    { id: 38, section: "theory", topic: "10.4 출력 예측", type: "text",
      title: "계승의 출력",
      question: "아래 프로그램의 출력값은? 숫자만 쓰시오.<pre>print '(i0)', fact(4)\ncontains\n   recursive function fact(n) result(nf)\n      integer :: n, nf\n      if (n &lt;= 1) then\n         nf = 1\n      else\n         nf = n * fact(n - 1)\n      end if\n   end function fact</pre>",
      hint: "4 × 3 × 2 × 1" },

    /* ===================== 실습 · 절별 보충 예제 ===================== */

    { id: 39, section: "practice", topic: "10.1-1 인수 없는 함수", type: "line",
      title: "인수가 없는 함수",
      question: "인수를 받지 않고 결과 변수 <code>p</code> 로 값을 돌려주는 함수 <code>pi_value</code> 의 <b>머리 줄</b>을 쓰시오.",
      hint: "인수가 없어도 괄호는 적는다." },

    { id: 40, section: "practice", topic: "10.1-1 인수 없는 함수", type: "line",
      title: "원주율 계산",
      question: "<code>atan</code> 을 이용해 원주율을 구해 결과 변수 <code>p</code> 에 넣는 문장을 쓰시오. 숫자는 실수로 적으시오.",
      hint: "탄젠트가 1이 되는 각은 45도, 즉 π/4 라디안이다." },

    { id: 41, section: "practice", topic: "10.1-2 인수 없는 서브루틴", type: "line",
      title: "구분선 찍기",
      question: "인수가 없는 서브루틴 <code>banner</code> 를 부르는 문장을 쓰시오.",
      hint: "서브루틴은 문장으로 부른다." },

    { id: 42, section: "practice", topic: "10.1-3 인수가 둘인 함수", type: "line",
      title: "빗변 구하기",
      question: "두 변 <code>a</code>, <code>b</code> 로 직각삼각형의 빗변을 구해 결과 변수 <code>h</code> 에 넣는 문장을 쓰시오.",
      hint: "제곱의 합에 제곱근을 씌운다." },

    { id: 43, section: "practice", topic: "10.2-1 내부끼리 호출", type: "line",
      title: "내부 함수가 내부 함수를",
      question: "같은 호스트의 함수 <code>square</code> 를 불러 원의 넓이를 구해 결과 변수 <code>a</code> 에 넣는 문장을 쓰시오. 명명 상수 <code>pi</code> 와 반지름 <code>r</code> 이 있습니다.",
      hint: "제곱 대신 같은 호스트의 함수를 쓴다." },

    { id: 44, section: "practice", topic: "10.2-2 호스트 상수", type: "line",
      title: "호스트의 중력가속도",
      question: "호스트의 명명 상수 <code>g</code> 를 인수 없이 그대로 써서 낙하 거리 ½·g·t² 를 결과 변수 <code>d</code> 에 넣는 문장을 쓰시오. 가인수 이름은 <code>time</code> 이며 제곱 대신 곱셈을 두 번 쓰시오.",
      hint: "0.5 * g * time * time 꼴이다." },

    { id: 45, section: "practice", topic: "10.2-3 호스트 배열", type: "line",
      title: "호스트 배열 채우기",
      question: "서브루틴 안에서 호스트 배열 <code>samples</code> 의 <code>k</code> 번째 칸에 <code>k</code> 의 제곱을 실수로 넣는 문장을 쓰시오. 거듭제곱 연산자를 쓰시오.",
      hint: "정수 k 를 실수로 바꾼 뒤 제곱한다." },

    { id: 46, section: "practice", topic: "10.3-1 결과 변수 이름", type: "line",
      title: "뜻이 분명한 결과 변수",
      question: "섭씨 <code>c</code> 를 받아 결과 변수 이름을 <code>kelvin</code> 으로 두는 함수 <code>celsius_to_kelvin</code> 의 <b>머리 줄</b>을 쓰시오.",
      hint: "result 절에 원하는 이름을 적는다." },

    { id: 47, section: "practice", topic: "10.3-2 논리형 함수", type: "line",
      title: "양수인가",
      question: "실수 <code>x</code> 가 양수인지를 논리형 결과 변수 <code>flag</code> 에 넣는 문장을 <b>if 문 없이</b> 한 줄로 쓰시오.",
      hint: "관계식 자체가 논리값이다." },

    { id: 48, section: "practice", topic: "10.3-3 분기별 대입", type: "text",
      title: "0의 부호",
      question: "양수면 1, 음수면 −1, 그 밖이면 0을 돌려주는 함수 <code>sign_of</code> 에 <code>0.0</code> 을 넘기면 무엇이 나오는가? 숫자만 쓰시오.",
      hint: "0.0 은 양수도 음수도 아니다." },

    { id: 49, section: "practice", topic: "10.4-1 되부름 서브루틴", type: "line",
      title: "되부름 서브루틴의 머리",
      question: "정수 <code>n</code> 을 받아 자기 자신을 호출하는 서브루틴 <code>countdown</code> 의 <b>머리 줄</b>을 쓰시오.",
      hint: "서브루틴에도 되부름 키워드를 붙인다." },

    { id: 50, section: "practice", topic: "10.4-3 자릿수 합", type: "text",
      title: "자릿수의 합",
      question: "정수의 각 자리 숫자를 되부름으로 더하는 함수에 <code>2026</code> 을 넘기면 결과는? 숫자만 쓰시오.",
      hint: "2 + 0 + 2 + 6" }
  ]
};
