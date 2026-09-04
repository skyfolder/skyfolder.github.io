/* ============================================================
   fort_prac_08_problems.js — 8장 문제 본문 (공개 파일)

   정답은 이 파일에 없습니다. answer/fort_prac_08_answers.js 에 있습니다.
   복습 18 · 이론 20 · 실습 12 = 50문항, 한 문항 1점.

   배열 값을 여러 개 답하는 문항은 값을 빈칸으로 띄어 씁니다.
   ============================================================ */

window.PROBLEMS = {
  title: "FORTRAN 8장 실습",
  subtitle: "배열 연산 · 50문제",

  sections: [
    { key: "review",   label: "복습", note: "수업 본문 예제" },
    { key: "theory",   label: "이론", note: "출제 예상 문제은행" },
    { key: "practice", label: "실습", note: "절별 보충 예제" }
  ],

  problems: [

    /* ===================== 복습 · 본문 예제 ===================== */

    { id: 1, section: "review", topic: "8.1 전체 배열 연산", type: "line",
      title: "스칼라 확장",
      question: "<code>whole_array</code> 예제에서 배열 <code>a</code> 의 모든 요소에 2를 곱하고 1을 더한 결과를 <code>c</code> 에 넣는 문장을 <b>반복문 없이</b> 한 줄로 쓰시오. 숫자는 실수로 적으시오.",
      hint: "배열과 스칼라를 그냥 섞어 쓰면 스칼라가 모든 요소에 적용된다." },

    { id: 2, section: "review", topic: "8.1 전체 배열 연산", type: "text",
      title: "스칼라 확장의 결과",
      question: "<code>a = [1.0, 2.0, 3.0, 4.0, 5.0]</code> 일 때 <code>2.0 * a + 1.0</code> 의 값을 순서대로 빈칸으로 띄어 쓰시오.",
      hint: "각 요소마다 따로 계산한다." },

    { id: 3, section: "review", topic: "8.1 전체 배열 연산", type: "line",
      title: "요소별 내장 함수",
      question: "배열 <code>b</code> 의 각 요소에 제곱근을 적용한 결과를 <code>c</code> 에 넣는 문장을 한 줄로 쓰시오.",
      hint: "스칼라에 쓰던 함수를 배열에 그대로 넘기면 된다." },

    { id: 4, section: "review", topic: "8.1 전체 배열 연산", type: "text",
      title: "제곱근의 결과",
      question: "<code>b = [1.0, 4.0, 9.0, 16.0, 25.0]</code> 일 때 <code>sqrt(b)</code> 의 값을 순서대로 빈칸으로 띄어 쓰시오.",
      hint: "요소별 함수는 같은 형상의 배열을 돌려준다." },

    { id: 5, section: "review", topic: "8.1 전체 배열 연산", type: "text",
      title: "요소별 곱",
      question: "<code>a = [1.0, 2.0, 3.0, 4.0, 5.0]</code>, <code>b = [1.0, 4.0, 9.0, 16.0, 25.0]</code> 일 때 <code>a * b</code> 의 값을 순서대로 빈칸으로 띄어 쓰시오.",
      hint: "같은 위치끼리 곱한다. 행렬 곱이 아니다." },

    { id: 6, section: "review", topic: "오류 학습", type: "choice",
      title: "matmul 안쪽 차원",
      question: "<code>real :: a(2, 3), b(2, 2)</code> 일 때 <code>matmul(a, b)</code> 가 컴파일 오류를 내는 이유는?",
      options: [
        "두 행렬의 전체 크기가 달라서",
        "앞 행렬의 열 수(3)와 뒤 행렬의 행 수(2)가 달라 안쪽 차원이 맞지 않아서",
        "matmul 은 정사각 행렬에만 쓸 수 있어서",
        "결과를 담을 c 의 형상이 (2, 2) 라서"
      ],
      hint: "(l×m)·(m×n) 형태여야 곱이 정의된다." },

    { id: 7, section: "review", topic: "8.2 where 구문", type: "line",
      title: "음수 클리핑",
      question: "배열 <code>y</code> 에서 <b>음수인 요소만</b> 0으로 바꾸는 문장을 <code>where</code> <b>단일 문 한 줄</b>로 쓰시오. 숫자는 실수로 적으시오.",
      hint: "where (마스크) 대입 형태다. end where 는 쓰지 않는다." },

    { id: 8, section: "review", topic: "8.2 where 구문", type: "text",
      title: "클리핑 결과",
      question: "<code>x = [-4.0, -3.0, -2.0, -1.0, 0.0, 1.0, 2.0, 3.0]</code> 에 음수 클리핑을 적용한 결과를 순서대로 빈칸으로 띄어 쓰시오.",
      hint: "마스크가 거짓인 자리는 원래 값이 그대로 남는다." },

    { id: 9, section: "review", topic: "8.2 where 구문", type: "line",
      title: "조건을 붙인 elsewhere",
      question: "<code>where_else</code> 예제에서 앞선 조건에 걸리지 않은 요소 중 <code>x</code> 가 <b>음수</b>인 것만 고르는 <code>elsewhere</code> 줄을 쓰시오.",
      hint: "elsewhere 뒤 괄호에 새 조건을 적는다." },

    { id: 10, section: "review", topic: "8.2 where 구문", type: "text",
      title: "부호 분류의 결과",
      question: "<code>x = [-2.0, -1.0, 0.0, 1.0, 2.0, 3.0]</code> 에 대해 양수는 1.0, 음수는 −1.0, 나머지는 0.0 으로 분류한 <code>sgn</code> 의 값을 순서대로 빈칸으로 띄어 쓰시오.",
      hint: "0.0 은 양수도 음수도 아니다." },

    { id: 11, section: "review", topic: "8.3 축약 함수", type: "text",
      title: "총합",
      question: "<code>a = [3.0, 1.0, 4.0, 1.0, 5.0, 9.0]</code> 일 때 <code>sum(a)</code> 의 값은? 숫자만 쓰시오.",
      hint: "여섯 값을 모두 더한다." },

    { id: 12, section: "review", topic: "8.3 축약 함수", type: "text",
      title: "총곱",
      question: "같은 배열에 대해 <code>product(a)</code> 의 값은? 숫자만 쓰시오.",
      hint: "3 × 1 × 4 × 1 × 5 × 9" },

    { id: 13, section: "review", topic: "8.3 축약 함수", type: "line",
      title: "최댓값의 위치",
      question: "1차원 배열 <code>a</code> 에서 최댓값의 위치를 <b>정수 하나</b>로 받는 함수 호출을 쓰시오. 함수 호출 부분만 쓰시오.",
      hint: "인수를 생략하면 크기 1인 배열이 나온다. 차원을 지정하는 인수를 붙인다." },

    { id: 14, section: "review", topic: "8.3 축약 함수", type: "text",
      title: "하나라도 참인가",
      question: "<code>a = [3.0, 1.0, 4.0, 1.0, 5.0, 9.0]</code> 일 때 <code>any(a > 8.0)</code> 의 출력은? 글자 하나만 쓰시오.",
      hint: "8보다 큰 값이 하나라도 있는지 본다." },

    { id: 15, section: "review", topic: "8.3 형상 함수", type: "line",
      title: "1차원을 2차원으로",
      question: "값 <code>1, 2, 3, 4, 5, 6</code> 을 <code>2 × 3</code> 형상의 배열 <code>m</code> 에 담는 문장을 한 줄로 쓰시오.",
      hint: "형상은 대괄호로 적은 배열로 넘긴다." },

    { id: 16, section: "review", topic: "8.3 형상 함수", type: "text",
      title: "열별 합",
      question: "<code>m = reshape([1, 2, 3, 4, 5, 6], [2, 3])</code> 일 때 <code>sum(m, dim=1)</code> 의 값을 순서대로 빈칸으로 띄어 쓰시오.",
      hint: "reshape 는 열부터 채운다. dim=1 은 행 방향을 줄인다." },

    { id: 17, section: "review", topic: "8.3 선형대수", type: "line",
      title: "행렬 곱",
      question: "행렬 <code>a</code> 와 <code>b</code> 의 <b>행렬 곱</b>을 <code>c</code> 에 넣는 문장을 한 줄로 쓰시오.",
      hint: "별표를 쓰면 요소별 곱이 되어 버린다." },

    { id: 18, section: "review", topic: "8.3 선형대수", type: "text",
      title: "내적",
      question: "<code>u = [1.0, 2.0, 3.0]</code>, <code>v = [4.0, 5.0, 6.0]</code> 일 때 <code>dot_product(u, v)</code> 의 값은? 숫자만 쓰시오.",
      hint: "1×4 + 2×5 + 3×6" },

    /* ===================== 이론 · 문제은행 ===================== */

    { id: 19, section: "theory", topic: "8.1 전체 배열 연산", type: "choice",
      title: "정합하다는 것",
      question: "전체 배열 연산에서 두 배열이 정합(conformable)하다는 것은 무엇을 뜻하는가?",
      options: [
        "두 배열의 자료형이 같다는 뜻",
        "연산에 참여하는 배열들의 형상이 모두 같다는 뜻",
        "두 배열이 메모리에 이어 붙어 있다는 뜻",
        "두 배열의 이름이 다르다는 뜻"
      ],
      hint: "요소를 1대 1로 대응시킬 수 있어야 한다. 스칼라는 예외다." },

    { id: 20, section: "theory", topic: "8.1 전체 배열 연산", type: "choice",
      title: "스칼라 확장",
      question: "<code>a</code> 가 배열일 때 <code>c = 2.0 * a + 1.0</code> 은 어떻게 계산되는가?",
      options: [
        "a 의 첫 요소에만 적용된다",
        "모든 i 에 대해 c(i) = 2.0 * a(i) + 1.0 을 계산한다",
        "a 의 합에 2를 곱하고 1을 더한다",
        "형상이 맞지 않아 컴파일 오류가 난다"
      ],
      hint: "스칼라가 배열의 모든 요소에 퍼진다." },

    { id: 21, section: "theory", topic: "8.1 전체 배열 연산", type: "text",
      title: "정수 배열 나눗셈",
      question: "<code>integer :: a(4)</code> 이고 <code>a = [1, 2, 3, 4]</code> 일 때 <code>a / 2</code> 의 값을 순서대로 빈칸으로 띄어 쓰시오.",
      hint: "요소마다 정수 나눗셈이 일어난다." },

    { id: 22, section: "theory", topic: "8.1 전체 배열 연산", type: "choice",
      title: "요소별 함수의 결과",
      question: "<code>sin</code>, <code>sqrt</code> 같은 요소별(elemental) 함수를 배열에 적용하면 결과는?",
      options: [
        "스칼라 하나가 나온다",
        "입력 배열과 같은 형상의 배열이 나온다",
        "계수가 하나 낮은 배열이 나온다",
        "컴파일 오류가 난다"
      ],
      hint: "각 요소에 함수를 따로 적용한 결과를 모은 것이다." },

    { id: 23, section: "theory", topic: "오류 찾기", type: "choice",
      title: "형상 불일치",
      question: "아래 코드가 컴파일되지 않는 이유는?<pre>real :: a(5), b(4), c(5)\nc = a + b</pre>",
      options: [
        "c 를 먼저 초기화하지 않아서",
        "a 는 길이 5, b 는 길이 4라 형상이 정합하지 않아서",
        "실수 배열끼리는 더할 수 없어서",
        "배열 연산에는 반복문이 필요해서"
      ],
      hint: "gfortran 은 Shapes for operands ... are not conformable 이라고 알려 준다." },

    { id: 24, section: "theory", topic: "8.2 where 구문", type: "choice",
      title: "마스크의 역할",
      question: "<code>where</code> 구문에서 마스크(mask)의 역할은?",
      options: [
        "대입을 적용할 요소를 고르는 논리 배열이며, 참인 위치에만 대입이 일어난다",
        "배열의 크기를 바꾸는 정수 배열이다",
        "반복 횟수를 정하는 정수다",
        "출력 서식을 지정하는 문자열이다"
      ],
      hint: "거짓인 위치의 값은 그대로 남는다." },

    { id: 25, section: "theory", topic: "8.2 where 구문", type: "choice",
      title: "where와 if의 차이",
      question: "<code>where</code> 와 <code>if</code> 의 차이로 옳은 것은?",
      options: [
        "둘은 완전히 같고 이름만 다르다",
        "if 는 스칼라 조건 하나로 분기 전체를 실행할지 정하고, where 는 배열의 각 요소마다 대입 여부를 따로 정한다",
        "where 는 스칼라에만, if 는 배열에만 쓴다",
        "where 안에서는 print 와 do 를 자유롭게 쓸 수 있다"
      ],
      hint: "조건이 한 번 평가되는지, 요소마다 평가되는지가 갈린다." },

    { id: 26, section: "theory", topic: "8.2 where 구문", type: "text",
      title: "where의 출력 예측",
      question: "아래 코드의 출력값을 순서대로 빈칸으로 띄어 쓰시오.<pre>real :: x(4)\nx = [2.0, -1.0, 3.0, -4.0]\nwhere (x &lt; 0.0) x = -1.0</pre>",
      hint: "음수인 자리만 바뀐다." },

    { id: 27, section: "theory", topic: "8.2 where 구문", type: "choice",
      title: "elsewhere (조건)",
      question: "<code>elsewhere (조건)</code> 절은 어떤 요소들에 적용되는가?",
      options: [
        "배열의 모든 요소에 적용된다",
        "앞선 마스크가 거짓이면서 elsewhere 의 조건이 참인 요소들에만 적용된다",
        "앞선 마스크가 참인 요소들에 다시 적용된다",
        "조건과 무관하게 마지막 요소에만 적용된다"
      ],
      hint: "if ... else if 구조와 같은 방식으로 걸러진다." },

    { id: 28, section: "theory", topic: "오류 찾기", type: "choice",
      title: "where에 스칼라 조건",
      question: "아래 코드가 오류를 내는 이유는?<pre>integer :: n\nreal :: y(5)\nn = 3\nwhere (n &gt; 0)\n   y = 0.0\nend where</pre>",
      options: [
        "n 을 실수로 선언하지 않아서",
        "n > 0 이 스칼라 논리값인데 where 의 마스크는 논리 배열이어야 해서",
        "where 블록 안에 대입문이 하나뿐이라서",
        "y 의 크기가 5라서"
      ],
      hint: "gfortran 은 requires a LOGICAL array 라고 알려 준다. 스칼라 조건에는 if 를 쓴다." },

    { id: 29, section: "theory", topic: "8.3 축약 함수", type: "choice",
      title: "축약 함수의 반환",
      question: "<code>sum(a)</code>, <code>maxval(a)</code>, <code>count(a > 0)</code> 은 각각 무엇을 돌려주는가?",
      options: [
        "셋 다 스칼라를 돌려준다",
        "셋 다 배열을 돌려준다",
        "sum 만 스칼라이고 나머지는 배열이다",
        "count 만 스칼라이고 나머지는 배열이다"
      ],
      hint: "다만 dim 인수를 주면 계수가 하나 낮은 배열이 나올 수 있다." },

    { id: 30, section: "theory", topic: "8.3 축약 함수", type: "text",
      title: "조건을 만족하는 개수",
      question: "<code>a = [3.0, 1.0, 4.0, 1.0, 5.0, 9.0]</code> 일 때 <code>count(a > 3.0)</code> 의 값은? 숫자만 쓰시오.",
      hint: "3.0 은 3보다 크지 않다." },

    { id: 31, section: "theory", topic: "8.3 축약 함수", type: "choice",
      title: "any와 all",
      question: "<code>any(mask)</code> 와 <code>all(mask)</code> 의 차이는?",
      options: [
        "any 는 하나라도 참이면 참, all 은 모두 참일 때만 참",
        "any 는 모두 참일 때만 참, all 은 하나라도 참이면 참",
        "any 는 개수를 세고 all 은 합을 구한다",
        "둘 다 참인 요소의 개수를 돌려준다"
      ],
      hint: "이름 그대로다." },

    { id: 32, section: "theory", topic: "8.3 축약 함수", type: "text",
      title: "최댓값의 위치",
      question: "<code>a = [3.0, 1.0, 4.0, 1.0, 5.0, 9.0]</code> 일 때 <code>maxloc(a, dim=1)</code> 의 값은? 숫자만 쓰시오.",
      hint: "가장 큰 값이 몇 번째에 있는지 센다." },

    { id: 33, section: "theory", topic: "8.3 형상 함수", type: "choice",
      title: "reshape의 채움 순서",
      question: "<code>reshape</code> 는 원소를 어떤 순서로 채우는가?",
      options: [
        "행 우선(row-major). 첫 행부터 채운다",
        "열 우선(column-major). 첫 번째 첨자가 가장 빨리 변해 첫 열부터 채운다",
        "채움 순서는 컴파일러마다 다르다",
        "무작위 순서로 채운다"
      ],
      hint: "행 우선처럼 채우려면 order 인수를 쓰거나 transpose 한다." },

    { id: 34, section: "theory", topic: "8.3 형상 함수", type: "text",
      title: "첫 행의 값",
      question: "<code>m = reshape([(i, i = 1, 6)], [2, 3])</code> 일 때 <code>m(1, :)</code> 의 값을 순서대로 빈칸으로 띄어 쓰시오.",
      hint: "1과 2가 첫 열, 3과 4가 둘째 열, 5와 6이 셋째 열이 된다." },

    { id: 35, section: "theory", topic: "8.3 형상 함수", type: "choice",
      title: "dim 인수의 뜻",
      question: "<code>sum(m, dim=1)</code> 과 <code>sum(m, dim=2)</code> 는 각각 무엇을 계산하는가?",
      options: [
        "dim=1 은 열별 합, dim=2 는 행별 합",
        "dim=1 은 행별 합, dim=2 는 열별 합",
        "둘 다 전체 합을 돌려준다",
        "dim=1 은 최댓값, dim=2 는 최솟값을 돌려준다"
      ],
      hint: "지정한 차원이 사라진다고 기억하면 헷갈리지 않는다." },

    { id: 36, section: "theory", topic: "8.3 형상 함수", type: "text",
      title: "행별 합",
      question: "<code>m = reshape([(i, i = 1, 6)], [2, 3])</code> 일 때 <code>sum(m, dim=2)</code> 의 값을 순서대로 빈칸으로 띄어 쓰시오.",
      hint: "첫 행은 1, 3, 5 이고 둘째 행은 2, 4, 6 이다." },

    { id: 37, section: "theory", topic: "8.3 선형대수", type: "choice",
      title: "a * b 와 matmul(a, b)",
      question: "같은 형상의 정사각 행렬 <code>a</code>, <code>b</code> 에 대해 <code>a * b</code> 와 <code>matmul(a, b)</code> 는 어떻게 다른가?",
      options: [
        "둘 다 행렬 곱이며 결과가 같다",
        "a * b 는 같은 위치끼리 곱하는 요소별 곱이고, matmul(a, b) 는 선형대수의 행렬 곱이다",
        "a * b 는 행렬 곱이고 matmul 은 요소별 곱이다",
        "a * b 는 정사각 행렬에서 컴파일 오류가 난다"
      ],
      hint: "형상이 같아도 두 결과는 일반적으로 전혀 다르다." },

    { id: 38, section: "theory", topic: "8.3 선형대수", type: "choice",
      title: "행렬 곱의 형상",
      question: "<code>(2×3)</code> 행렬과 <code>(3×4)</code> 행렬을 <code>matmul</code> 로 곱한 결과의 형상과, 순서를 바꿔 <code>(3×4)</code> 를 앞에 두었을 때의 성립 여부로 옳은 것은?",
      options: [
        "결과는 (2×4). 순서를 바꾸면 안쪽 차원이 4와 2로 달라 곱이 성립하지 않는다",
        "결과는 (3×3). 순서를 바꿔도 똑같이 성립한다",
        "결과는 (2×4). 순서를 바꾸면 (3×3) 이 나온다",
        "결과는 (4×2). 순서와 무관하게 성립한다"
      ],
      hint: "결과 형상은 바깥 차원, 즉 앞 행렬의 행과 뒤 행렬의 열이다." },

    /* ===================== 실습 · 절별 보충 예제 ===================== */

    { id: 39, section: "practice", topic: "8.1-1 벡터 정규화", type: "line",
      title: "벡터의 길이",
      question: "실수 벡터 <code>v</code> 의 길이를 구해 <code>norm</code> 에 넣는 문장을 한 줄로 쓰시오. 제곱합에 제곱근을 씌우시오.",
      hint: "요소별 거듭제곱과 축약 함수를 겹쳐 쓴다." },

    { id: 40, section: "practice", topic: "8.1-1 벡터 정규화", type: "line",
      title: "단위 벡터",
      question: "벡터 <code>v</code> 를 스칼라 <code>norm</code> 으로 나눠 단위 벡터 <code>unit</code> 을 만드는 문장을 한 줄로 쓰시오.",
      hint: "배열을 스칼라로 나누면 모든 요소가 나뉜다." },

    { id: 41, section: "practice", topic: "8.1-2 요소별 최대·최소", type: "text",
      title: "요소별 최댓값",
      question: "<code>a = [1.0, 5.0, 2.0, 8.0, 3.0]</code>, <code>b = [4.0, 2.0, 7.0, 1.0, 6.0]</code> 일 때 <code>max(a, b)</code> 의 값을 순서대로 빈칸으로 띄어 쓰시오.",
      hint: "max 도 요소별 함수라서 같은 위치끼리 비교한다." },

    { id: 42, section: "practice", topic: "8.2-1 범위로 자르기", type: "line",
      title: "위쪽 경계 자르기",
      question: "배열 <code>x</code> 에서 10보다 큰 요소만 10으로 바꾸는 문장을 <code>where</code> <b>단일 문 한 줄</b>로 쓰시오. 숫자는 실수로 적으시오.",
      hint: "아래쪽을 자르는 줄과 같은 꼴이다." },

    { id: 43, section: "practice", topic: "8.2-2 merge", type: "line",
      title: "요소별 선택",
      question: "논리 배열 <code>take_a</code> 가 참인 위치에서는 <code>a</code> 를, 거짓인 위치에서는 <code>b</code> 를 골라 <code>pick</code> 에 넣는 문장을 한 줄로 쓰시오.",
      hint: "where 가 대입이라면 이것은 식 안에서 쓰는 요소별 선택 함수다." },

    { id: 44, section: "practice", topic: "8.2-2 merge", type: "text",
      title: "선택의 결과",
      question: "<code>a = [10, 20, 30, 40, 50]</code>, <code>b = [-1, -2, -3, -4, -5]</code>, <code>take_a = [.true., .false., .true., .false., .true.]</code> 일 때 <code>merge(a, b, take_a)</code> 의 값을 순서대로 빈칸으로 띄어 쓰시오.",
      hint: "참인 자리는 a 에서, 거짓인 자리는 b 에서 가져온다." },

    { id: 45, section: "practice", topic: "8.3.1-1 평균", type: "line",
      title: "평균 구하기",
      question: "실수 배열 <code>a</code> 의 평균을 구하는 식을 쓰시오. 정수 나눗셈이 되지 않도록 크기를 실수로 바꾸시오. <b>식만</b> 쓰시오.",
      hint: "합을 요소 개수로 나눈다. 개수를 돌려주는 함수를 real 로 감싼다." },

    { id: 46, section: "practice", topic: "8.3.1-2 합격률", type: "line",
      title: "합격률",
      question: "<code>score</code> 배열에서 70 이상인 비율을 <code>rate</code> 에 넣는 문장을 한 줄로 쓰시오. 세는 값과 전체 크기를 모두 실수로 바꾸시오.",
      hint: "조건을 만족하는 개수를 세는 축약 함수를 쓴다." },

    { id: 47, section: "practice", topic: "8.3.2-1 order 인수", type: "line",
      title: "행 우선처럼 채우기",
      question: "값 1부터 6까지를 <code>2 × 3</code> 배열 <code>row</code> 에 담되, <b>두 번째 첨자가 먼저 채워지도록</b> 하는 문장을 한 줄로 쓰시오. 값은 묵시적 do 로 만드시오.",
      hint: "reshape 에 세 번째 인수를 붙인다." },

    { id: 48, section: "practice", topic: "8.3.2-2 차원별 최대·최소", type: "text",
      title: "열별 최댓값",
      question: "<code>m = reshape([(i, i = 1, 12)], [3, 4])</code> 일 때 <code>maxval(m, dim=1)</code> 의 값을 순서대로 빈칸으로 띄어 쓰시오.",
      hint: "행 방향을 줄이므로 열마다 하나씩 나온다." },

    { id: 49, section: "practice", topic: "8.3.3-1 행렬·벡터 곱", type: "text",
      title: "행렬에 벡터 곱하기",
      question: "<code>a = reshape([1.0, 4.0, 2.0, 5.0, 3.0, 6.0], [2, 3])</code>, <code>x = [1.0, 1.0, 1.0]</code> 일 때 <code>matmul(a, x)</code> 의 값을 순서대로 빈칸으로 띄어 쓰시오.",
      hint: "reshape 가 열 우선으로 채운다는 점을 먼저 정리한 뒤 각 행의 합을 구한다." },

    { id: 50, section: "practice", topic: "8.3.3-2 대칭 판정", type: "line",
      title: "대칭 행렬인가",
      question: "정사각 행렬 <code>s</code> 가 대칭인지 판정하는 <b>논리 표현식</b>을 한 줄로 쓰시오. 식만 쓰시오.",
      hint: "전치한 것과 모든 요소가 같은지 본다. 두 내장 함수를 겹쳐 쓴다." }
  ]
};
