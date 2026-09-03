/* ============================================================
   fort_prac_07_problems.js — 7장 문제 본문 (공개 파일)

   정답은 이 파일에 없습니다. answer/fort_prac_07_answers.js 에 있습니다.
   복습 18 · 이론 20 · 실습 12 = 50문항, 한 문항 1점.

   배열 값을 여러 개 답하는 문항은 숫자를 빈칸으로 띄어 씁니다.
   이 장의 코드는 필요한 곳에 use iso_fortran_env, only: real64 가
   앞에 있다고 가정합니다.
   ============================================================ */

window.PROBLEMS = {
  title: "FORTRAN 7장 실습",
  subtitle: "배열 기초 · 50문제",

  sections: [
    { key: "review",   label: "복습", note: "수업 본문 예제" },
    { key: "theory",   label: "이론", note: "출제 예상 문제은행" },
    { key: "practice", label: "실습", note: "절별 보충 예제" }
  ],

  problems: [

    /* ===================== 복습 · 본문 예제 ===================== */

    { id: 1, section: "review", topic: "7.1 배열 선언", type: "line",
      title: "하한을 직접 정한 배열",
      question: "<code>array_shapes</code> 예제처럼 첨자가 −2부터 2까지인 정수 배열 <code>offset</code> 을 선언하시오.",
      hint: "괄호 안에 하한:상한 형태로 적는다." },

    { id: 2, section: "review", topic: "7.1 배열 선언", type: "text",
      title: "2차원 배열의 크기",
      question: "<code>integer :: grid(3, 4)</code> 일 때 <code>size(grid)</code> 의 값은? 숫자만 쓰시오.",
      hint: "전체 요소 개수는 각 차원 범위의 곱이다." },

    { id: 3, section: "review", topic: "7.1 배열 선언", type: "line",
      title: "하한 물어보기",
      question: "배열 <code>offset</code> 의 <b>첫 번째 차원</b> 하한을 돌려주는 내장 함수 호출을 쓰시오. 함수 호출 부분만 쓰시오.",
      hint: "lower bound 를 줄인 이름이며 인자를 두 개 받는다." },

    { id: 4, section: "review", topic: "7.1 배열 선언", type: "choice",
      title: "scores(0)에 값을 넣으면",
      question: "<code>integer :: scores(5)</code> 를 선언하고 C나 Python 습관으로 <code>scores(0)</code> 에 첫 값을 넣으면 어떻게 되는가?",
      options: [
        "컴파일 단계에서 바로 오류가 난다",
        "컴파일은 통과하지만 실행 중에 엉뚱한 메모리 값을 읽거나 쓴다",
        "자동으로 scores(1) 로 바뀌어 처리된다",
        "배열 크기가 6으로 늘어난다"
      ],
      hint: "유효 첨자는 1부터 5까지다. 기본적으로 경계 검사를 하지 않는다." },

    { id: 5, section: "review", topic: "7.2 배열 생성자", type: "line",
      title: "제곱수 채우기",
      question: "<code>constructors</code> 예제에서 <code>squares</code> 배열에 1부터 6까지의 제곱을 묵시적 do 로 한 번에 채우는 문장을 쓰시오.",
      hint: "[(식, 변수 = 시작, 끝)] 형태다." },

    { id: 6, section: "review", topic: "7.2 배열 생성자", type: "line",
      title: "0.5씩 늘어나는 실수 배열",
      question: "<code>ramp</code> 배열에 0.5씩 커지는 배정밀도 실수 10개를 묵시적 do 로 채우는 문장을 쓰시오. 정수 <code>i</code> 를 <code>real64</code> 로 바꿔 <code>0.5_real64</code> 를 곱하시오.",
      hint: "real(값, 종류) 로 변환하고 리터럴에도 종류 접미사를 붙인다." },

    { id: 7, section: "review", topic: "7.2 배열 생성자", type: "text",
      title: "제곱수의 값",
      question: "<code>squares = [(i * i, i = 1, 6)]</code> 가 만드는 값을 순서대로 빈칸으로 띄어 쓰시오.",
      hint: "1의 제곱부터 6의 제곱까지다." },

    { id: 8, section: "review", topic: "7.2 배열 생성자", type: "text",
      title: "중첩 묵시적 do",
      question: "<code>v = [((i + j, i = 1, 3), j = 1, 2)]</code> 가 만드는 값을 순서대로 빈칸으로 띄어 쓰시오.",
      hint: "바깥 j 를 고정한 채 안쪽 i 가 먼저 한 바퀴를 돈다." },

    { id: 9, section: "review", topic: "7.2 배열 생성자", type: "choice",
      title: "어느 쪽이 빨리 변하나",
      question: "중첩 묵시적 do <code>[((i + j, i = 1, 3), j = 1, 2)]</code> 에서 값이 만들어지는 순서에 대한 설명으로 옳은 것은?",
      options: [
        "바깥쪽 j 가 먼저 전체 범위를 돈다",
        "안쪽 i 가 먼저 전체 범위를 돌며, 이는 열 우선 저장 순서와 같다",
        "두 변수가 동시에 1씩 함께 증가한다",
        "결과는 2차원 배열이 된다"
      ],
      hint: "j = 1 일 때 만들어지는 세 값을 먼저 적어 본다." },

    { id: 10, section: "review", topic: "7.3 배열 슬라이스", type: "line",
      title: "1부터 10까지 채우기",
      question: "<code>sections</code> 예제에서 크기 10인 배열 <code>a</code> 를 1부터 10까지로 채우는 문장을 한 줄로 쓰시오.",
      hint: "묵시적 do 를 쓰면 반복문 없이 한 줄로 끝난다." },

    { id: 11, section: "review", topic: "7.3 배열 슬라이스", type: "text",
      title: "슬라이스의 요소 수",
      question: "<code>a(3:7)</code> 은 몇 개의 요소를 가리키는가? 숫자만 쓰시오.",
      hint: "Fortran의 슬라이스는 끝 인덱스를 포함한다." },

    { id: 12, section: "review", topic: "7.3 배열 슬라이스", type: "line",
      title: "거꾸로 훑기",
      question: "크기 10인 배열 <code>a</code> 를 10번째부터 1번째까지 <b>거꾸로</b> 가리키는 슬라이스 표기를 쓰시오. 슬라이스 부분만 쓰시오.",
      hint: "보폭을 음수로 준다." },

    { id: 13, section: "review", topic: "7.3 배열 슬라이스", type: "line",
      title: "슬라이스에 대입하기",
      question: "배열 <code>a</code> 의 2, 3, 4번째 요소만 각각 20, 30, 40 으로 바꾸는 문장을 한 줄로 쓰시오.",
      hint: "슬라이스를 대입의 좌변에 둔다. 좌우 크기가 같아야 한다." },

    { id: 14, section: "review", topic: "7.3 2차원 인덱싱", type: "line",
      title: "2차원 배열 채우기",
      question: "<code>two_d</code> 예제에서 <code>m(i, j)</code> 에 <code>i × 10 + j</code> 를 넣는 문장을 한 줄로 쓰시오.",
      hint: "행 번호에 10을 곱하고 열 번호를 더한다." },

    { id: 15, section: "review", topic: "7.3 2차원 인덱싱", type: "line",
      title: "열 슬라이스",
      question: "2차원 배열 <code>m</code> 의 <b>2번째 열 전체</b>를 가리키는 표기를 쓰시오.",
      hint: "전체 범위는 콜론 하나로 적는다." },

    { id: 16, section: "review", topic: "7.3 2차원 인덱싱", type: "text",
      title: "1행의 값",
      question: "<code>m(i, j) = i * 10 + j</code> 로 채운 <code>m(3, 4)</code> 에서 <code>m(1, :)</code> 의 값을 순서대로 빈칸으로 띄어 쓰시오.",
      hint: "i 가 1로 고정되고 j 가 1부터 4까지 변한다." },

    { id: 17, section: "review", topic: "7.3 2차원 인덱싱", type: "line",
      title: "행 하나를 csv 한 줄로",
      question: "<code>field_data</code> 예제에서 <code>field</code> 의 <code>i</code>번째 <b>행 전체</b>를 장치 <code>u</code> 에 쉼표로 이어 한 줄로 쓰는 문장을 쓰시오. 서식은 <code>'(*(f0.6, :, \",\"))'</code> 를 그대로 쓰시오.",
      hint: "출력 목록에 행 슬라이스를 그대로 넘긴다." },

    { id: 18, section: "review", topic: "오류 학습", type: "choice",
      title: "(3 and 2)의 뜻",
      question: "<code>a(2:4) = [20, 30]</code> 을 컴파일하면 <code>Different shape for array assignment ... (3 and 2)</code> 오류가 난다. 괄호 안 숫자의 뜻은?",
      options: [
        "배열 a 의 차원이 3, 생성자의 차원이 2라는 뜻",
        "좌변 슬라이스는 요소가 3개, 우변 생성자는 2개라는 뜻",
        "오류가 난 줄 번호가 3, 열 번호가 2라는 뜻",
        "슬라이스의 시작이 3, 끝이 2라는 뜻"
      ],
      hint: "슬라이스 요소 수는 end − start + 1 로 센다." },

    /* ===================== 이론 · 문제은행 ===================== */

    { id: 19, section: "theory", topic: "7.1 배열 선언", type: "choice",
      title: "계수·형상·경계",
      question: "배열의 계수(rank), 형상(shape), 경계(bounds)를 바르게 설명한 것은?",
      options: [
        "계수는 차원 수, 형상은 각 차원의 길이를 모은 것, 경계는 각 차원 첨자의 하한과 상한",
        "계수는 전체 요소 수, 형상은 자료형, 경계는 메모리 주소",
        "계수는 첫 차원의 길이, 형상은 차원 수, 경계는 배열 이름",
        "셋 다 같은 것을 다르게 부르는 이름"
      ],
      hint: "grid(3, 4) 로 각각을 짚어 본다." },

    { id: 20, section: "theory", topic: "7.1 배열 선언", type: "line",
      title: "첫 번째 요소",
      question: "<code>integer :: a(5)</code> 에서 <b>첫 번째</b> 요소를 가리키는 표현을 쓰시오.",
      hint: "Fortran의 기본 하한을 떠올린다." },

    { id: 21, section: "theory", topic: "7.1 배열 선언", type: "choice",
      title: "참·거짓 · 기본 하한",
      question: "Fortran 배열의 기본 하한은 0이다.",
      options: ["참", "거짓"],
      hint: "C나 Python과 다른 지점이다." },

    { id: 22, section: "theory", topic: "7.1 배열 선언", type: "text",
      title: "전체 크기 구하기",
      question: "<code>real :: b(0:4, -1:1)</code> 의 전체 크기(size)는? 숫자만 쓰시오.",
      hint: "각 차원의 범위를 구해 곱한다." },

    { id: 23, section: "theory", topic: "7.1 배열 선언", type: "choice",
      title: "범위 계산식",
      question: "한 차원의 범위(extent)를 하한과 상한으로 계산하는 식은?",
      options: [
        "상한 − 하한",
        "상한 − 하한 + 1",
        "상한 + 하한",
        "상한 ÷ 하한"
      ],
      hint: "bounds 1:5 의 범위가 5가 되도록 맞춰 본다." },

    { id: 24, section: "theory", topic: "7.1 배열 선언", type: "choice",
      title: "조회 함수",
      question: "조회 함수의 반환값을 바르게 설명한 것은?",
      options: [
        "size(a)는 전체 요소 수, size(a, 2)는 두 번째 차원의 범위, shape(a)는 형상을 담은 1차원 배열, lbound(a, 1)은 첫 차원의 하한",
        "size(a)는 첫 차원의 크기, shape(a)는 차원 수, lbound(a, 1)은 첫 요소의 값",
        "size(a)는 바이트 크기, shape(a)는 자료형 이름을 돌려준다",
        "네 함수 모두 정수 하나를 돌려준다"
      ],
      hint: "shape 만 결과가 배열이라는 점이 다르다." },

    { id: 25, section: "theory", topic: "7.2 배열 생성자", type: "text",
      title: "옛 표기",
      question: "배열 생성자 <code>[1, 2, 3]</code> 을 레거시 FORTRAN 표기로 쓰면? 그대로 쓰시오.",
      hint: "괄호와 빗금을 함께 쓴다." },

    { id: 26, section: "theory", topic: "7.2 배열 생성자", type: "text",
      title: "짝수 만들기",
      question: "<code>[(2 * k, k = 1, 4)]</code> 가 만드는 배열의 값을 순서대로 빈칸으로 띄어 쓰시오.",
      hint: "k 에 1부터 4까지 넣어 본다." },

    { id: 27, section: "theory", topic: "7.2 배열 생성자", type: "text",
      title: "중첩 생성자",
      question: "<code>[((i * j, i = 1, 2), j = 1, 3)]</code> 가 만드는 1차원 배열의 값을 순서대로 빈칸으로 띄어 쓰시오.",
      hint: "안쪽 i 가 바깥쪽 j 보다 빨리 변한다. j 를 고정하고 i 를 먼저 돌린다." },

    { id: 28, section: "theory", topic: "7.2 배열 생성자", type: "choice",
      title: "참·거짓 · 자료형 혼합",
      question: "배열 생성자 <code>[1, 2, 3.0]</code> 은 정수 세 개를 담은 배열을 만든다.",
      options: ["참", "거짓"],
      hint: "생성자 안의 값들이 지켜야 할 규칙을 떠올린다." },

    { id: 29, section: "theory", topic: "7.3 배열 슬라이스", type: "text",
      title: "보폭 2로 고르기",
      question: "<code>a = [(i, i = 1, 10)]</code> 일 때 <code>a(1:10:2)</code> 의 값을 순서대로 빈칸으로 띄어 쓰시오.",
      hint: "1부터 시작해 두 칸씩 건너뛴다." },

    { id: 30, section: "theory", topic: "7.3 배열 슬라이스", type: "text",
      title: "음수 보폭",
      question: "같은 배열에서 <code>a(9:3:-3)</code> 의 값을 순서대로 빈칸으로 띄어 쓰시오.",
      hint: "9부터 시작해 3씩 줄이며 3 아래로는 가지 않는다." },

    { id: 31, section: "theory", topic: "7.3 배열 슬라이스", type: "choice",
      title: "Python과 다른 점",
      question: "Python의 <code>a[3:7]</code> 은 네 개를 돌려준다. Fortran의 <code>a(3:7)</code> 은?",
      options: [
        "네 개. 두 언어의 규칙이 같다",
        "다섯 개. Fortran의 슬라이스는 상한을 포함하므로 end − start + 1 개다",
        "세 개. 하한도 포함하지 않는다",
        "배열 크기에 따라 달라진다"
      ],
      hint: "3, 4, 5, 6, 7 을 직접 세어 본다." },

    { id: 32, section: "theory", topic: "7.3 배열 슬라이스", type: "choice",
      title: "슬라이스를 좌변으로",
      question: "<code>a(2:4) = [20, 30, 40]</code> 에 대한 설명으로 옳은 것은?",
      options: [
        "슬라이스는 좌변에 쓸 수 없어 컴파일 오류가 난다",
        "배열 a 의 2, 3, 4번째 요소만 각각 20, 30, 40 으로 바꾼다",
        "배열 a 전체가 [20, 30, 40] 으로 바뀐다",
        "a 의 크기가 3으로 줄어든다"
      ],
      hint: "좌변 슬라이스의 크기와 우변의 크기가 같아야 한다." },

    { id: 33, section: "theory", topic: "7.3 2차원 인덱싱", type: "choice",
      title: "행 슬라이스와 열 슬라이스",
      question: "2차원 배열 <code>m</code> 에서 <code>m(:, 2)</code> 와 <code>m(3, :)</code> 는 각각 무엇을 가리키는가?",
      options: [
        "m(:, 2)는 2열 전체, m(3, :)는 3행 전체",
        "m(:, 2)는 2행 전체, m(3, :)는 3열 전체",
        "둘 다 요소 하나를 가리킨다",
        "m(:, 2)는 배열 전체, m(3, :)는 3번째 요소"
      ],
      hint: "첫 첨자가 행, 둘째 첨자가 열이다." },

    { id: 34, section: "theory", topic: "7.3 2차원 인덱싱", type: "choice",
      title: "열 우선과 반복 순서",
      question: "Fortran의 2차원 배열 저장 순서와, 그에 맞춘 중첩 반복 작성법으로 옳은 것은?",
      options: [
        "행 우선이므로 안쪽 반복 변수로 두 번째 첨자를 둔다",
        "열 우선이므로 안쪽 반복 변수로 첫 번째 첨자를 두어야 메모리를 순서대로 훑는다",
        "열 우선이지만 반복 순서는 성능에 영향을 주지 않는다",
        "저장 순서는 컴파일러가 그때그때 정한다"
      ],
      hint: "m(1,1) → m(2,1) → m(3,1) → m(1,2) 순으로 저장된다." },

    { id: 35, section: "theory", topic: "오류 학습", type: "choice",
      title: "형상 불일치",
      question: "아래 코드의 컴파일 결과는?<pre>integer :: a(10)\na(2:4) = [20, 30]</pre>",
      options: [
        "정상 컴파일되며 a(4)는 그대로 남는다",
        "컴파일 오류. 좌변은 3개, 우변은 2개라 형상이 어긋난다",
        "컴파일 오류. 슬라이스는 좌변에 쓸 수 없다",
        "경고만 나고 컴파일된다"
      ],
      hint: "슬라이스 요소 수를 먼저 센다." },

    { id: 36, section: "theory", topic: "오류 학습", type: "choice",
      title: "계수 불일치",
      question: "아래 코드의 컴파일 결과는?<pre>integer :: m(3, 4)\nm = [(i, i = 1, 12)]</pre>",
      options: [
        "정상 컴파일되며 열 우선으로 채워진다",
        "컴파일 오류. 좌변은 계수 2, 우변 생성자는 계수 1이라 계수가 다르다",
        "컴파일 오류. 값이 12개라 크기가 모자란다",
        "실행 중에 오류가 난다"
      ],
      hint: "1차원 값을 2차원으로 바꾸려면 8장의 reshape 가 필요하다." },

    { id: 37, section: "theory", topic: "오류 학습", type: "text",
      title: "경계 검사 옵션",
      question: "경계를 벗어난 첨자 접근을 실행 중에 잡아내려면 어떤 gfortran 옵션을 켜야 하는가? 옵션을 그대로 쓰시오.",
      hint: "-fcheck= 뒤에 검사 대상을 적는다. 더 넓게 켜는 값도 있다." },

    { id: 38, section: "theory", topic: "Python 연동", type: "choice",
      title: "NumPy로 읽을 때",
      question: "Fortran이 <code>field(i, :)</code> 를 한 줄씩 csv로 썼다. NumPy로 읽은 <code>data[i, j]</code> 와의 대응, 그리고 x를 가로·y를 세로로 두는 방법으로 옳은 것은?",
      options: [
        "data[i, j] 는 field(i, j) 에 대응하며 그대로 그리면 된다",
        "data[i, j] 는 field(i+1, j+1) 에 대응하며, x를 가로로 두려면 data.T 로 전치해 그린다",
        "data[i, j] 는 field(j+1, i+1) 에 대응하며 전치가 필요 없다",
        "csv로는 2차원 대응을 맞출 수 없다"
      ],
      hint: "Python 첨자는 0부터 시작한다는 점부터 따진다." },

    /* ===================== 실습 · 절별 보충 예제 ===================== */

    { id: 39, section: "practice", topic: "7.1-1 형상 조회", type: "line",
      title: "형상을 배열로 받기",
      question: "<code>grid</code> 의 형상을 정수 배열 <code>dims</code> 에 받는 문장을 한 줄로 쓰시오.",
      hint: "형상을 1차원 배열로 돌려주는 함수를 쓴다." },

    { id: 40, section: "practice", topic: "7.1-1 형상 조회", type: "text",
      title: "두 번째 차원의 크기",
      question: "<code>integer :: grid(3, 4)</code> 일 때 <code>size(grid, 2)</code> 의 값은? 숫자만 쓰시오.",
      hint: "두 번째 차원은 열이다." },

    { id: 41, section: "practice", topic: "7.1-2 의미 있는 하한", type: "line",
      title: "연도를 첨자로",
      question: "1900년부터 1903년까지를 첨자로 쓰는 정수 배열 <code>births</code> 를 선언하시오.",
      hint: "하한을 1900 으로 직접 지정한다." },

    { id: 42, section: "practice", topic: "7.1-2 의미 있는 하한", type: "line",
      title: "경계로 반복 범위 잡기",
      question: "배열 <code>births</code> 의 하한부터 상한까지 <code>year</code> 로 도는 반복문의 <b>첫 줄</b>을 쓰시오. 숫자를 직접 적지 말고 조회 함수를 쓰시오.",
      hint: "차원 번호까지 함께 넘기는 두 함수를 시작값과 끝값에 각각 쓴다." },

    { id: 43, section: "practice", topic: "7.2-1 등간격 점", type: "line",
      title: "등간격 점 만들기",
      question: "<code>a</code> 부터 <code>b</code> 까지 <code>n</code> 개의 등간격 배정밀도 점을 <code>xs</code> 에 만드는 문장을 한 줄로 쓰시오. 식은 <code>a + (b - a) * (i-1)/(n-1)</code> 이며 두 정수를 각각 <code>real64</code> 로 변환하시오.",
      hint: "묵시적 do 안에서 real(i - 1, real64) 와 real(n - 1, real64) 를 나눈다." },

    { id: 44, section: "practice", topic: "7.2-1 등간격 점", type: "text",
      title: "등간격 점의 값",
      question: "<code>a = 0.0</code>, <code>b = 1.0</code>, <code>n = 5</code> 일 때 만들어지는 다섯 점의 값을 순서대로 빈칸으로 띄어 쓰시오. 소수 세 자리로 쓰시오.",
      hint: "양 끝이 정확히 0.000 과 1.000 이 된다." },

    { id: 45, section: "practice", topic: "7.2-2 반복 패턴", type: "line",
      title: "1과 0이 번갈아",
      question: "크기 8인 배열 <code>pattern</code> 에 1, 0 이 번갈아 들어가도록 묵시적 do 로 채우는 문장을 쓰시오. 나머지 함수를 쓰시오.",
      hint: "i 를 2로 나눈 나머지가 1과 0을 번갈아 만든다." },

    { id: 46, section: "practice", topic: "7.2-2 이어 붙이기", type: "line",
      title: "배열 이어 붙이기",
      question: "배열 <code>head</code> 전체와 <code>pattern</code> 의 앞 세 요소를 이어 붙인 새 배열을 만드는 <b>생성자 표기</b>를 쓰시오. 생성자 부분만 쓰시오.",
      hint: "대괄호 안에 배열과 슬라이스를 쉼표로 나열한다." },

    { id: 47, section: "practice", topic: "7.3-1 보폭", type: "line",
      title: "짝수 위치만 고르기",
      question: "크기 <code>n</code> 인 배열 <code>a</code> 에서 <b>짝수 번째</b> 위치의 요소만 고르는 슬라이스 표기를 쓰시오. 슬라이스 부분만 쓰시오.",
      hint: "2부터 시작해 보폭 2로 간다." },

    { id: 48, section: "practice", topic: "7.3-1 보폭", type: "text",
      title: "짝수 위치의 값",
      question: "<code>n = 10</code>, <code>a = [(i, i = 1, n)]</code> 일 때 짝수 번째 요소의 값을 순서대로 빈칸으로 띄어 쓰시오.",
      hint: "2번째, 4번째, ... 요소의 값이다." },

    { id: 49, section: "practice", topic: "7.3-2 단면 대입", type: "line",
      title: "왼쪽으로 한 칸 밀기",
      question: "크기 <code>n</code> 인 배열 <code>a</code> 를 슬라이스 대입만으로 왼쪽으로 한 칸 미는 문장을 쓰시오.",
      hint: "좌변은 앞에서 n−1개, 우변은 뒤에서 n−1개다." },

    { id: 50, section: "practice", topic: "7.3-2 단면 대입", type: "text",
      title: "밀고 난 뒤 마지막 값",
      question: "<code>a = [(i * i, i = 1, 6)]</code> 로 채운 뒤 왼쪽으로 한 칸 밀면 <code>a(6)</code> 의 값은? 숫자만 쓰시오.",
      hint: "마지막 자리는 아무도 덮어쓰지 않는다." }
  ]
};
