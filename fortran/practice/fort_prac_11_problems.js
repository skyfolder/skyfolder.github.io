/* ============================================================
   fort_prac_11_problems.js — 11장 문제 본문 (공개 파일)

   정답은 이 파일에 없습니다. answer/fort_prac_11_answers.js 에 있습니다.
   복습 18 · 이론 20 · 실습 12 = 50문항, 한 문항 1점.

   이 장의 코드는 필요한 곳에 use iso_fortran_env, only: real64 가
   앞에 있다고 가정합니다.
   ============================================================ */

window.PROBLEMS = {
  title: "FORTRAN 11장 실습",
  subtitle: "인수 전달과 인터페이스 · 50문제",

  sections: [
    { key: "review",   label: "복습", note: "수업 본문 예제" },
    { key: "theory",   label: "이론", note: "출제 예상 문제은행" },
    { key: "practice", label: "실습", note: "절별 보충 예제" }
  ],

  problems: [

    /* ===================== 복습 · 본문 예제 ===================== */

    { id: 1, section: "review", topic: "11.1 intent", type: "line",
      title: "읽기 전용 인수",
      question: "<code>circle</code> 서브루틴에서 배정밀도 반지름 <code>radius</code> 를 <b>읽기 전용</b> 가인수로 선언하는 줄을 쓰시오.",
      hint: "자료형, intent(방향) :: 이름 형태다." },

    { id: 2, section: "review", topic: "11.1 intent", type: "line",
      title: "결과를 내보내는 인수",
      question: "같은 서브루틴에서 넓이 <code>a</code> 와 둘레 <code>p</code> 를 <b>결과로 내보내는</b> 가인수로 <b>한 줄</b>에 선언하시오. 배정밀도입니다.",
      hint: "두 이름을 쉼표로 나열한다." },

    { id: 3, section: "review", topic: "11.1 intent", type: "line",
      title: "넓이 계산",
      question: "명명 상수 <code>pi</code> 와 가인수 <code>radius</code> 로 넓이를 구해 <code>a</code> 에 넣는 문장을 쓰시오. 제곱은 거듭제곱 연산자로 적으시오.",
      hint: "넓이 = π r²" },

    { id: 4, section: "review", topic: "11.1 intent", type: "line",
      title: "서브루틴 호출",
      question: "반지름 <code>r</code> 을 넘기고 결과를 <code>area</code> 와 <code>perimeter</code> 로 받는 호출문을 쓰시오.",
      hint: "가인수와 실인수는 적힌 순서대로 짝지어진다." },

    { id: 5, section: "review", topic: "11.1 intent", type: "line",
      title: "누산기의 인수",
      question: "<code>accumulate_demo</code> 예제에서 누산 변수 <code>acc</code> 를 배정밀도 가인수로 선언하는 줄을 쓰시오. 들어온 값을 읽고 갱신하는 방향으로 지정하시오.",
      hint: "이전 값을 이어받아야 하므로 읽기와 쓰기가 모두 필요하다." },

    { id: 6, section: "review", topic: "11.1 intent", type: "line",
      title: "제곱 누적",
      question: "가인수 <code>x</code> 의 제곱을 <code>acc</code> 에 누적하는 문장을 쓰시오. 거듭제곱 연산자를 쓰시오.",
      hint: "기존 값에 새 값을 더한다." },

    { id: 7, section: "review", topic: "11.1 intent", type: "text",
      title: "제곱의 합",
      question: "<code>accumulate_demo</code> 예제에서 1부터 5까지의 제곱을 모두 더한 <code>total</code> 은? 숫자만 쓰시오.",
      hint: "1 + 4 + 9 + 16 + 25" },

    { id: 8, section: "review", topic: "11.1 intent", type: "text",
      title: "원의 넓이",
      question: "<code>circle_props</code> 예제에서 <code>r = 2.5</code> 일 때 출력되는 넓이는? 소수 넷째 자리까지 쓰시오.",
      hint: "π × 2.5²" },

    { id: 9, section: "review", topic: "11.2 선택적 인수", type: "line",
      title: "선택적 인수 선언",
      question: "<code>gaussian</code> 함수에서 배정밀도 <code>mu</code> 와 <code>sigma</code> 를 <b>생략 가능한 읽기 전용</b> 가인수로 <b>한 줄</b>에 선언하시오.",
      hint: "intent 뒤에 속성을 하나 더 붙인다." },

    { id: 10, section: "review", topic: "11.2 선택적 인수", type: "line",
      title: "전달 여부 확인",
      question: "선택적 인수 <code>mu</code> 가 실제로 전달되었을 때만 <code>center</code> 에 그 값을 넣는 문장을 <b>한 줄</b>로 쓰시오.",
      hint: "전달 여부를 검사하는 내장 함수를 논리 if 와 함께 쓴다." },

    { id: 11, section: "review", topic: "11.2 선택적 인수", type: "line",
      title: "가우스 함수",
      question: "가우스 함수 exp(−0.5·((x − center) ÷ width)²) 를 결과 변수 <code>y</code> 에 넣는 문장을 한 줄로 쓰시오. 리터럴에 <code>_real64</code> 를 붙이시오.",
      hint: "괄호 안 전체를 제곱한다." },

    { id: 12, section: "review", topic: "11.2 키워드 인수", type: "line",
      title: "키워드로 호출하기",
      question: "함수 <code>power(base, exponent)</code> 를 밑 <code>2.0_real64</code>, 지수 <code>10.0_real64</code> 로 <b>둘 다 키워드 인수</b>로 호출하는 식을 쓰시오. 정의된 순서대로 적으시오. 호출 식만 쓰시오.",
      hint: "이름=값 형태로 적는다." },

    { id: 13, section: "review", topic: "11.2 키워드 인수", type: "text",
      title: "거듭제곱의 값",
      question: "<code>power(base=2.0_real64, exponent=10.0_real64)</code> 의 값은? 숫자만 쓰시오.",
      hint: "2를 열 번 곱한다." },

    { id: 14, section: "review", topic: "11.2 키워드 인수", type: "line",
      title: "폭만 바꿔 부르기",
      question: "<code>gauss_family</code> 예제에서 <code>x</code> 는 위치 인수로, 폭만 <code>sigmas(j)</code> 로 지정해 <code>gaussian</code> 을 호출하는 식을 쓰시오. 호출 식만 쓰시오.",
      hint: "가운데 인수 mu 를 건너뛰려면 이름을 붙여야 한다." },

    { id: 15, section: "review", topic: "11.3 배열 인수", type: "line",
      title: "가정형상 배열 인수",
      question: "<code>stats</code> 서브루틴에서 배정밀도 1차원 배열 <code>v</code> 를 <b>읽기 전용 가정형상</b> 가인수로 선언하는 줄을 쓰시오.",
      hint: "크기 자리를 콜론으로 비운다." },

    { id: 16, section: "review", topic: "11.3 배열 인수", type: "line",
      title: "표준편차",
      question: "가정형상 배열 <code>v</code> 와 이미 구한 <code>mean</code>, 원소 수 <code>n</code> 으로 모표준편차를 구해 <code>stddev</code> 에 넣는 문장을 한 줄로 쓰시오. 종류는 <code>real64</code> 를 직접 쓰시오.",
      hint: "편차 제곱의 합을 n 으로 나눈 뒤 제곱근을 씌운다. 전체 배열 연산을 그대로 쓴다." },

    { id: 17, section: "review", topic: "11.3 배열 인수", type: "text",
      title: "표본의 평균",
      question: "<code>array_stats</code> 예제에서 <code>[4.0, 8.0, 15.0, 16.0, 23.0]</code> 의 평균은? 소수 첫째 자리까지 쓰시오.",
      hint: "다섯 값을 더해 5로 나눈다." },

    { id: 18, section: "review", topic: "11.4 인터페이스", type: "text",
      title: "인터페이스 블록의 시작",
      question: "외부 프로시저의 모양을 컴파일러에 알리는 블록을 여는 키워드는? 키워드만 쓰시오.",
      hint: "같은 이름 앞에 end 를 붙여 닫는다." },

    /* ===================== 이론 · 문제은행 ===================== */

    { id: 19, section: "theory", topic: "11.1 intent", type: "choice",
      title: "세 가지 방향",
      question: "<code>intent(in)</code>, <code>intent(out)</code>, <code>intent(inout)</code> 의 역할을 바르게 설명한 것은?",
      options: [
        "in 은 읽기만 하고 바꾸지 않음, out 은 결과를 써서 내보냄, inout 은 들어온 값을 읽고 또 갱신함",
        "in 은 결과를 내보냄, out 은 읽기만 함, inout 은 아무 일도 하지 않음",
        "셋 다 읽기 전용이며 이름만 다르다",
        "in 은 정수 전용, out 은 실수 전용, inout 은 배열 전용이다"
      ],
      hint: "데이터가 어느 방향으로 흐르는지 생각한다." },

    { id: 20, section: "theory", topic: "11.1 intent", type: "choice",
      title: "intent(out)이 막 들어왔을 때",
      question: "<code>intent(out)</code> 으로 선언한 가인수가 프로시저에 막 들어왔을 때 그 값을 읽어도 되는가?",
      options: [
        "읽어도 된다. 호출부의 값이 그대로 들어와 있다",
        "읽으면 안 된다. 들어오는 순간 정의되지 않은 것으로 취급되므로 먼저 값을 쓰기 전에 읽으면 의미 없는 값을 얻는다",
        "읽으면 컴파일 오류가 난다",
        "읽으면 자동으로 0이 들어간다"
      ],
      hint: "결과를 써서 내보내는 통로라는 성격을 떠올린다." },

    { id: 21, section: "theory", topic: "11.1 intent", type: "choice",
      title: "누산기에 intent(out)을 쓰면",
      question: "이전 값에 새 기여를 더해 나가는 누산기 서브루틴에서 누산 변수를 <code>intent(out)</code> 으로 선언하면?",
      options: [
        "성능이 조금 떨어질 뿐 결과는 같다",
        "들어온 값을 버리므로 이전 합이 사라져 누적이 불가능하다. intent(inout) 을 써야 한다",
        "컴파일 오류가 난다",
        "첫 호출에서만 문제가 되고 그 뒤로는 정상이다"
      ],
      hint: "더하려는 기준값이 무엇인지 알 수 없게 된다." },

    { id: 22, section: "theory", topic: "11.1 intent", type: "choice",
      title: "intent(in)에 대입하면",
      question: "<code>intent(in)</code> 으로 선언한 가인수에 프로시저 안에서 값을 대입하면 오류는 어느 단계에서 발생하는가?",
      options: [
        "컴파일 단계. Dummy argument ... with INTENT(IN) in variable definition context 오류가 난다",
        "실행 단계. Segmentation fault 가 난다",
        "링크 단계에서만 걸린다",
        "오류 없이 값이 바뀐다"
      ],
      hint: "intent 는 컴파일러에게 주는 약속이다." },

    { id: 23, section: "theory", topic: "11.1 출력 예측", type: "text",
      title: "누적의 결과",
      question: "아래 프로그램의 출력값은? 숫자만 쓰시오.<pre>s = 0\ndo i = 1, 4\n   call add(s, i)\nend do\nprint '(i0)', s\ncontains\n   subroutine add(acc, x)\n      integer, intent(inout) :: acc\n      integer, intent(in)    :: x\n      acc = acc + x\n   end subroutine add</pre>",
      hint: "1 + 2 + 3 + 4" },

    { id: 24, section: "theory", topic: "11.2 선택적 인수", type: "choice",
      title: "present가 검사하는 것",
      question: "내장 함수 <code>present</code> 는 무엇을 검사하며, 어떤 인수에 대해서만 의미가 있는가?",
      options: [
        "선택적 인수가 호출 시 실제로 전달되었는지를 검사하며, optional 속성을 가진 가인수에 대해서만 의미가 있다",
        "인수의 값이 0이 아닌지를 검사하며, 모든 가인수에 쓸 수 있다",
        "배열이 할당되어 있는지를 검사한다",
        "인수의 자료형이 맞는지를 검사한다"
      ],
      hint: "전달 여부와 값의 유무는 다른 이야기다." },

    { id: 25, section: "theory", topic: "11.2 선택적 인수", type: "choice",
      title: "present 없이 쓰면",
      question: "선택적 인수를 <code>present</code> 로 확인하지 않고 곧바로 사용하면 어떤 일이 생기는가?",
      options: [
        "컴파일러가 기본값 0을 넣어 준다",
        "표준 위반이며 실행 중 비정상 종료나 예측 불가능한 값으로 이어진다",
        "컴파일 단계에서 반드시 걸린다",
        "경고만 나고 정상 동작한다"
      ],
      hint: "전달되지 않은 인수는 실제 메모리 주소가 없다." },

    { id: 26, section: "theory", topic: "11.2 키워드 인수", type: "choice",
      title: "섞어 쓸 때의 순서",
      question: "키워드 인수와 위치 인수를 한 호출문에 섞어 쓸 때 지켜야 할 순서 규칙은?",
      options: [
        "위치 인수가 모두 키워드 인수보다 앞에 와야 하며, 한 번 키워드를 쓰기 시작하면 그 뒤는 전부 키워드여야 한다",
        "키워드 인수를 앞에, 위치 인수를 뒤에 둔다",
        "순서에 아무 제약이 없다",
        "위치 인수와 키워드 인수는 한 호출문에 섞어 쓸 수 없다"
      ],
      hint: "값만 적는 것을 앞으로 몰아 쓴다." },

    { id: 27, section: "theory", topic: "11.2 출력 예측", type: "text",
      title: "선택적 인수의 기본값",
      question: "아래 프로그램이 출력하는 두 줄을 순서대로 빈칸으로 띄어 쓰시오.<pre>print '(f0.1)', shift(5.0_real64)\nprint '(f0.1)', shift(5.0_real64, by=3.0_real64)\ncontains\n   function shift(x, by) result(y)\n      real(real64), intent(in)           :: x\n      real(real64), intent(in), optional :: by\n      real(real64) :: y, d\n      d = 1.0_real64\n      if (present(by)) d = by\n      y = x + d\n   end function shift</pre>",
      hint: "첫 호출은 기본값 1.0 을 더한다." },

    { id: 28, section: "theory", topic: "11.2 키워드 인수", type: "choice",
      title: "키워드 뒤에 위치 인수",
      question: "가인수가 <code>function f(base, exponent)</code> 순서일 때 <code>f(base=2.0_real64, 8.0_real64)</code> 호출은?",
      options: [
        "정상 컴파일된다. 순서가 정의와 같기 때문이다",
        "컴파일되지 않는다. 키워드 인수 뒤에 위치 인수가 왔기 때문이며 Missing keyword name in actual argument list 오류가 난다",
        "컴파일은 되지만 실행 중에 오류가 난다",
        "경고만 나고 정상 동작한다"
      ],
      hint: "한 번 키워드를 쓰면 그 뒤는 모두 키워드여야 한다." },

    { id: 29, section: "theory", topic: "11.3 배열 인수", type: "choice",
      title: "명시적 형상과 가정형상",
      question: "명시적 형상 배열과 가정형상 배열의 차이로 옳은 것은?",
      options: [
        "명시적 형상은 v(n) 처럼 크기를 직접 적고 보통 크기 n 을 별도 인수로 받으며, 가정형상은 v(:) 로 비워 두고 형상을 실인수에서 물려받아 size 등으로 알아낸다",
        "명시적 형상은 v(:) 로 적고 가정형상은 v(n) 으로 적는다",
        "둘 다 크기를 컴파일 시점에 고정한다",
        "가정형상은 1차원 배열에만 쓸 수 있다"
      ],
      hint: "크기 정보가 어디에서 오는지가 갈린다." },

    { id: 30, section: "theory", topic: "11.3 배열 인수", type: "text",
      title: "두 조회 함수",
      question: "가정형상 배열을 받은 프로시저 안에서 <b>원소 수</b>와 <b>상한 인덱스</b>를 얻는 내장 함수 이름을 차례로 빈칸으로 띄어 쓰시오.",
      hint: "하한을 얻는 함수는 lbound 다." },

    { id: 31, section: "theory", topic: "11.3 배열 인수", type: "choice",
      title: "왜 명시적 인터페이스가 필요한가",
      question: "가정형상 배열을 인수로 쓰려면 명시적 인터페이스가 필요한 이유로 옳은 것은?",
      options: [
        "가정형상 배열은 시작 주소만이 아니라 형상과 보폭을 담은 배열 서술자로 전달되는데, 호출 측이 그 서술자를 만들려면 프로시저의 모양을 미리 알아야 하기 때문",
        "배열이 크면 메모리를 더 많이 쓰기 때문",
        "표준이 그렇게 정했을 뿐 기술적인 이유는 없다",
        "가정형상 배열은 컴파일 시점에 크기가 정해지기 때문"
      ],
      hint: "무엇이 전달되는지를 따져 본다." },

    { id: 32, section: "theory", topic: "11.3 출력 예측", type: "text",
      title: "배열 단면을 넘기면",
      question: "아래 프로그램의 출력에서 <code>size</code> 와 <code>first</code> 값을 차례로 빈칸으로 띄어 쓰시오.<pre>integer :: a(6) = [10, 20, 30, 40, 50, 60]\ncall show(a(2:5))\ncontains\n   subroutine show(v)\n      integer, intent(in) :: v(:)\n      print '(a, i0, a, i0)', \"size=\", size(v), \" first=\", v(1)\n   end subroutine show</pre>",
      hint: "단면의 첫 원소가 프로시저 안에서는 v(1) 이 된다." },

    { id: 33, section: "theory", topic: "11.3 출력 예측", type: "text",
      title: "2차원 가정형상",
      question: "아래 프로그램의 출력에서 <code>rows</code> 와 <code>cols</code> 값을 차례로 빈칸으로 띄어 쓰시오.<pre>real :: m(2,3)\ncall info(m)\ncontains\n   subroutine info(a)\n      real, intent(in) :: a(:,:)\n      print '(a, i0, a, i0)', \"rows=\", size(a,1), \" cols=\", size(a,2)\n   end subroutine info</pre>",
      hint: "size 의 둘째 인수가 차원 번호다." },

    { id: 34, section: "theory", topic: "11.4 인터페이스", type: "choice",
      title: "명시적과 암시적",
      question: "명시적 인터페이스와 암시적 인터페이스의 차이로 옳은 것은?",
      options: [
        "명시적에서는 컴파일러가 호출 지점에서 인수의 개수·종류·속성을 알지만, 암시적에서는 알지 못해 인수 검사를 하지 못한다",
        "명시적은 실행이 빠르고 암시적은 느리다",
        "명시적은 외부 프로시저에만, 암시적은 내부 프로시저에만 해당한다",
        "둘의 차이는 표기법뿐이고 동작은 같다"
      ],
      hint: "호출이 규격에 맞는지 누가 검사해 주는가를 본다." },

    { id: 35, section: "theory", topic: "11.4 인터페이스", type: "choice",
      title: "자동으로 확보되는 경우",
      question: "명시적 인터페이스를 <b>자동으로</b> 갖는 프로시저 두 가지는?",
      options: [
        "내부 프로시저와 모듈 프로시저",
        "외부 프로시저와 내부 프로시저",
        "외부 프로시저와 모듈 프로시저",
        "되부름 프로시저와 요소별 프로시저"
      ],
      hint: "contains 안에 정의된 것과 use 로 가져온 것이다." },

    { id: 36, section: "theory", topic: "11.4 인터페이스", type: "choice",
      title: "블록 안에 적는 것",
      question: "인터페이스 블록 안에는 무엇을 적고 무엇을 적지 않는가?",
      options: [
        "프로시저의 머리와 가인수 선언을 적고, 실행문이나 지역 변수는 적지 않는다",
        "실행문까지 그대로 옮겨 적는다",
        "가인수 이름만 적고 자료형은 적지 않는다",
        "프로시저 이름만 적으면 된다"
      ],
      hint: "호출 규약만 선언하는 자리다." },

    { id: 37, section: "theory", topic: "11.4 인터페이스", type: "choice",
      title: "블록을 빠뜨리면",
      question: "외부 프로시저에 가정형상 배열을 넘기면서 인터페이스 블록을 빠뜨리면 컴파일과 실행에서 각각 어떤 결과가 나오는가?",
      options: [
        "컴파일 단계에서 오류가 나 실행 파일이 만들어지지 않는다",
        "컴파일은 경고 없이 통과하지만, 서술자 대신 평범한 주소가 전달되어 실행 중 세그멘테이션 오류로 무너진다",
        "컴파일과 실행 모두 정상이다",
        "컴파일은 경고가 나고 실행은 정상이다"
      ],
      hint: "가장 위험한 조합은 컴파일이 조용히 통과하는 경우다." },

    { id: 38, section: "theory", topic: "11.4 출력 예측", type: "text",
      title: "인터페이스 블록으로 부른 외부 함수",
      question: "가정형상 배열의 합을 돌려주는 외부 함수 <code>summ</code> 을 인터페이스 블록과 함께 선언하고 <code>[1.5, 2.5, 3.0]</code> 을 넘겨 <code>f0.1</code> 서식으로 출력하면? 숫자만 쓰시오.",
      hint: "세 값을 더한다." },

    /* ===================== 실습 · 절별 보충 예제 ===================== */

    { id: 39, section: "practice", topic: "11.1-1 체질량지수", type: "line",
      title: "체질량지수",
      question: "질량 <code>mass_kg</code> 과 키 <code>height_m</code> 로 체질량지수를 구해 <code>bmi</code> 에 넣는 문장을 쓰시오. 키의 제곱으로 나눕니다.",
      hint: "제곱은 거듭제곱 연산자로 적는다." },

    { id: 40, section: "practice", topic: "11.1-2 몫과 나머지", type: "line",
      title: "결과 둘을 내보내기",
      question: "정수 <code>quotient</code> 와 <code>remainder</code> 를 <b>결과로 내보내는</b> 가인수로 <b>한 줄</b>에 선언하시오.",
      hint: "함수는 값을 하나만 돌려주므로 결과가 둘이면 서브루틴을 쓴다." },

    { id: 41, section: "practice", topic: "11.1-3 제자리 자르기", type: "line",
      title: "제자리에서 갱신",
      question: "<code>clamp</code> 서브루틴에서 배정밀도 <code>value</code> 를 <b>읽고 갱신하는</b> 가인수로 선언하는 줄을 쓰시오.",
      hint: "받은 값을 보고 필요하면 바꿔서 돌려준다." },

    { id: 42, section: "practice", topic: "11.2-1 기본값", type: "line",
      title: "생략되면 기본값",
      question: "선택적 인수 <code>factor</code> 가 전달되었을 때만 <code>f</code> 에 그 값을 넣는 문장을 <b>한 줄</b>로 쓰시오.",
      hint: "전달되지 않았다면 미리 넣어 둔 기본값이 그대로 남는다." },

    { id: 43, section: "practice", topic: "11.2-2 키워드 순서", type: "line",
      title: "순서를 뒤집어 부르기",
      question: "함수 <code>area(width, height)</code> 를 <b>height 를 먼저</b> 적는 키워드 인수 방식으로 호출하는 식을 쓰시오. 값은 <code>height</code> 가 <code>2.5_real64</code>, <code>width</code> 가 <code>4.0_real64</code> 입니다. 호출 식만 쓰시오.",
      hint: "둘 다 키워드로 적으면 순서를 마음대로 바꿀 수 있다." },

    { id: 44, section: "practice", topic: "11.2-3 논리형 선택 인수", type: "text",
      title: "반올림으로 전환",
      question: "선택적 논리 인수 <code>round</code> 가 참이면 반올림하는 함수에 <code>to_int(3.7_real64, round=.true.)</code> 를 넘기면 결과는? 숫자만 쓰시오.",
      hint: "생략하면 버림이라 3이 나온다." },

    { id: 45, section: "practice", topic: "11.3-1 가정형상 평균", type: "line",
      title: "길이를 묻지 않는 평균",
      question: "가정형상 배열 <code>a</code> 의 평균을 결과 변수 <code>m</code> 에 넣는 문장을 쓰시오. 크기를 별도 인수로 받지 않고, 종류는 <code>real64</code> 를 직접 쓰시오.",
      hint: "합을 원소 수로 나눈다. 정수 나눗셈이 되지 않도록 변환한다." },

    { id: 46, section: "practice", topic: "11.3-2 명시적 형상", type: "line",
      title: "크기를 함께 받는 방식",
      question: "크기 인수 <code>n</code> 을 따로 받는 <b>명시적 형상</b> 방식으로 배정밀도 읽기 전용 배열 <code>a</code> 를 선언하는 줄을 쓰시오.",
      hint: "콜론 대신 크기 변수를 괄호 안에 적는다." },

    { id: 47, section: "practice", topic: "11.3-3 대각합", type: "line",
      title: "행 수만큼 돌기",
      question: "2차원 가정형상 배열 <code>a</code> 의 <b>행 수</b>만큼 <code>k</code> 로 도는 반복문의 <b>첫 줄</b>을 쓰시오. 숫자를 직접 적지 말고 조회 함수를 쓰시오.",
      hint: "size 의 둘째 인수로 차원 번호를 준다." },

    { id: 48, section: "practice", topic: "11.4-1 내부 프로시저", type: "choice",
      title: "내부 함수에 인터페이스 블록이 필요한가",
      question: "<code>contains</code> 안에 둔 내부 함수를 호출할 때 인터페이스 블록이 필요한가?",
      options: [
        "필요 없다. 내부 프로시저는 명시적 인터페이스를 자동으로 갖는다",
        "반드시 필요하다. 내부 프로시저도 암시적 인터페이스다",
        "가정형상 배열을 쓸 때만 필요하다",
        "선택적 인수를 쓸 때만 필요하다"
      ],
      hint: "같은 프로그램 단위 안에 있으므로 컴파일러가 이미 구조를 안다." },

    { id: 49, section: "practice", topic: "11.4-2 외부 서브루틴", type: "line",
      title: "블록 안의 가인수 선언",
      question: "외부 서브루틴 <code>fill_cubes(v)</code> 의 인터페이스 블록 안에서, 배정밀도 가정형상 배열 <code>v</code> 를 <b>결과로 내보내는</b> 가인수로 선언하는 줄을 쓰시오.",
      hint: "블록 안에도 실제 정의와 똑같은 선언을 적는다." },

    { id: 50, section: "practice", topic: "11.4-3 외부 함수", type: "text",
      title: "벡터의 길이",
      question: "외부 함수 <code>vec_norm</code> 에 <code>[3.0, 0.0, 4.0]</code> 을 넘기면 결과는? 소수 둘째 자리까지 쓰시오.",
      hint: "제곱합에 제곱근을 씌운다." }
  ]
};
