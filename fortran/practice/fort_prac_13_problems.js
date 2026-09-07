/* ============================================================
   fort_prac_13_problems.js — 13장 문제 본문 (공개 파일)

   정답은 이 파일에 없습니다. answer/fort_prac_13_answers.js 에 있습니다.
   복습 18 · 연습 20 · 실습 12 = 50문항, 한 문항 1점.

   13장은 이론 문제은행 대신 연습문제 해답이 제공되어,
   가운데 섹션을 「연습」으로 두고 해답 코드를 근거로 출제했습니다.

   이 장의 코드는 필요한 곳에
   use, intrinsic :: iso_fortran_env, only: real64 가 앞에 있다고 가정합니다.
   ============================================================ */

window.PROBLEMS = {
  title: "FORTRAN 13장 실습",
  subtitle: "파생형과 포인터 · 50문제",

  sections: [
    { key: "review",   label: "복습", note: "수업 본문 예제" },
    { key: "exercise", label: "연습", note: "장말 연습문제" },
    { key: "practice", label: "실습", note: "절별 보충 예제" }
  ],

  problems: [

    /* ===================== 복습 · 본문 예제 ===================== */

    { id: 1, section: "review", topic: "13.1 파생형", type: "line",
      title: "구성 요소에 값 넣기",
      question: "<code>point_demo</code> 예제에서 파생형 변수 <code>p</code> 의 <code>x</code> 성분에 <code>3.0</code> 을 넣는 문장을 쓰시오. 리터럴에 <code>_real64</code> 를 붙이시오.",
      hint: "구성 요소 접근에는 퍼센트 기호를 쓴다." },

    { id: 2, section: "review", topic: "13.1 파생형", type: "line",
      title: "원점까지의 거리",
      question: "<code>p</code> 의 두 성분으로 원점까지의 거리를 구해 <code>dist</code> 에 넣는 문장을 쓰시오. 거듭제곱 연산자를 쓰시오.",
      hint: "두 성분의 제곱을 더해 제곱근을 씌운다." },

    { id: 3, section: "review", topic: "13.2 중첩 구조", type: "line",
      title: "파생형 안의 파생형",
      question: "<code>circle</code> 형이 중심 좌표를 담도록, <code>point2d</code> 형의 구성 요소 <code>center</code> 를 선언하는 줄을 쓰시오.",
      hint: "기본형 자리에 파생형 이름을 그대로 쓴다." },

    { id: 4, section: "review", topic: "13.2 기본 초기화", type: "line",
      title: "기본값을 가진 구성 요소",
      question: "<code>circle</code> 형의 배정밀도 구성 요소 <code>radius</code> 를 기본값 <code>1.0</code> 과 함께 선언하는 줄을 쓰시오. 리터럴에 <code>_real64</code> 를 붙이시오.",
      hint: "선언 뒤에 = 초깃값 을 적는다." },

    { id: 5, section: "review", topic: "13.2 형 생성자", type: "line",
      title: "키워드 생성자",
      question: "중심이 <code>(2.0, 1.0)</code> 이고 반지름이 <code>3.0</code> 인 원을 <code>c1</code> 에 넣는 문장을 <b>키워드 지정 방식</b>으로 쓰시오. 중심은 <code>point2d</code> 생성자를 순서 지정 방식으로 쓰고, 리터럴에 <code>_real64</code> 를 붙이시오.",
      hint: "circle(center = ..., radius = ...) 꼴이다." },

    { id: 6, section: "review", topic: "13.2 형 생성자", type: "line",
      title: "모두 기본값으로",
      question: "모든 구성 요소를 기본값으로 채운 원을 <code>c2</code> 에 넣는 문장을 쓰시오.",
      hint: "인수를 하나도 넘기지 않는다." },

    { id: 7, section: "review", topic: "13.2 형 생성자", type: "text",
      title: "원의 넓이",
      question: "<code>c1</code> 의 반지름이 <code>3.0</code> 일 때 <code>pi * c1%radius**2</code> 의 값은? 소수 셋째 자리까지 쓰시오.",
      hint: "π × 9" },

    { id: 8, section: "review", topic: "오류 학습", type: "choice",
      title: "생성자 인수를 빠뜨리면",
      question: "기본값을 지정하지 않은 <code>point2d</code> 를 <code>point2d(1.0_real64)</code> 처럼 인수 하나만 주고 호출하면?",
      options: [
        "나머지 성분이 0으로 채워진다",
        "No initializer for component 'y' given in the structure constructor 컴파일 오류가 난다",
        "실행 중에 쓰레기 값이 들어간다",
        "경고만 나고 컴파일된다"
      ],
      hint: "기본값이 없는 구성 요소는 하나도 빠뜨릴 수 없다." },

    { id: 9, section: "review", topic: "13.2 파생형 배열", type: "line",
      title: "배열 원소 채우기",
      question: "<code>students</code> 예제에서 이름 <code>Kim</code>, 학번 <code>101</code>, 점수 <code>88.5</code> 인 학생을 <code>class</code> 배열의 첫 자리에 넣는 문장을 쓰시오. 형 생성자를 순서 지정 방식으로 쓰고 점수에 <code>_real64</code> 를 붙이시오.",
      hint: "이름은 큰따옴표로 감싼다." },

    { id: 10, section: "review", topic: "13.2 파생형 배열", type: "line",
      title: "반복문 없이 평균",
      question: "<code>class</code> 배열에서 점수만 모아 평균을 구해 <code>avg</code> 에 넣는 문장을 <b>반복문 없이</b> 한 줄로 쓰시오.",
      hint: "배열 이름에 바로 퍼센트를 붙이면 그 성분만 모은 배열이 된다." },

    { id: 11, section: "review", topic: "13.2 파생형 배열", type: "text",
      title: "학급 평균",
      question: "점수가 <code>88.5</code>, <code>92.0</code>, <code>79.5</code> 인 세 학생의 평균은? 소수 둘째 자리까지 쓰시오.",
      hint: "세 점수를 더해 3으로 나눈다." },

    { id: 12, section: "review", topic: "13.3 포인터", type: "line",
      title: "가리킬 대상 선언",
      question: "포인터가 가리킬 수 있도록 배정밀도 변수 <code>a</code> 를 <code>10.0</code> 으로 초기화하며 선언하는 줄을 쓰시오. 리터럴에 <code>_real64</code> 를 붙이시오.",
      hint: "속성 하나를 붙여야 포인터가 접근할 수 있다." },

    { id: 13, section: "review", topic: "13.3 포인터", type: "line",
      title: "안전하게 출발하는 포인터",
      question: "배정밀도 포인터 <code>p</code> 를 선언하면서 <b>해제됨</b> 상태로 초기화하는 줄을 쓰시오.",
      hint: "선언과 동시에 아무것도 가리키지 않도록 만든다." },

    { id: 14, section: "review", topic: "13.3 포인터", type: "text",
      title: "별명을 통해 쓰기",
      question: "<code>a = 10.0</code> 인 상태에서 <code>p => a</code> 로 연관시킨 뒤 <code>p = 99.0_real64</code> 를 실행하면 <code>a</code> 의 값은? 소수 첫째 자리까지 쓰시오.",
      hint: "값은 포인터 자신이 아니라 가리키는 대상에 쓰인다." },

    { id: 15, section: "review", topic: "13.3 포인터", type: "line",
      title: "배열 구간에 창 내기",
      question: "배열 <code>grid</code> 의 4번째부터 7번째 구간을 포인터 <code>window</code> 가 가리키도록 하는 문장을 쓰시오.",
      hint: "포인터 대입 연산자를 쓴다." },

    { id: 16, section: "review", topic: "13.5 연결 리스트", type: "line",
      title: "자기 자신을 가리키는 구성 요소",
      question: "<code>node</code> 형 안에서 다음 노드를 가리키는 포인터 구성 요소 <code>next</code> 를 선언하는 줄을 쓰시오. 연결의 끝을 명시하도록 초기화까지 하시오.",
      hint: "아직 정의가 끝나지 않은 자기 형을 그대로 쓸 수 있다." },

    { id: 17, section: "review", topic: "13.5 연결 리스트", type: "line",
      title: "새 노드를 앞에 끼우기",
      question: "<code>push_front</code> 에서 새로 만든 <code>new_node</code> 의 <code>next</code> 가 기존 머리 <code>head</code> 를 가리키도록 하는 문장을 쓰시오.",
      hint: "값 대입이 아니라 연관이다." },

    { id: 18, section: "review", topic: "오류 학습", type: "choice",
      title: "해제 순서를 바꾸면",
      question: "<code>free_list</code> 에서 <code>deallocate(cur)</code> 를 먼저 하고 그다음 <code>cur =&gt; cur%next</code> 를 실행하면?",
      options: [
        "메모리가 조금 낭비될 뿐 정상 동작한다",
        "이미 해제된 메모리의 next 를 읽는 허상 포인터 참조가 되어 Segmentation fault 가 난다",
        "컴파일 단계에서 오류가 난다",
        "리스트가 역순으로 해제된다"
      ],
      hint: "해제하는 순간 그 안의 링크 정보도 함께 사라진다." },

    /* ===================== 연습 · 장말 연습문제 ===================== */

    { id: 19, section: "exercise", topic: "기초 1 · 복소수형", type: "line",
      title: "복소수형 만들기",
      question: "<code>re</code> 와 <code>im</code> 을 가진 파생형 <code>complex_t</code> 로 <code>(3, 4)</code> 를 만들어 <code>z</code> 에 넣는 문장을 <b>순서 지정 방식</b>으로 쓰시오. 리터럴에 <code>_real64</code> 를 붙이시오.",
      hint: "형 이름이 곧 생성자 이름이다." },

    { id: 20, section: "exercise", topic: "기초 1 · 복소수형", type: "line",
      title: "복소수의 크기",
      question: "<code>z</code> 의 두 성분으로 크기를 구해 <code>magnitude</code> 에 넣는 문장을 쓰시오. 거듭제곱 연산자를 쓰시오.",
      hint: "실수부와 허수부의 제곱합에 제곱근을 씌운다." },

    { id: 21, section: "exercise", topic: "기초 1 · 복소수형", type: "text",
      title: "(3, 4)의 크기",
      question: "<code>complex_t(3.0, 4.0)</code> 의 크기는? 소수 둘째 자리까지 쓰시오.",
      hint: "3-4-5 직각삼각형을 떠올린다." },

    { id: 22, section: "exercise", topic: "기초 2 · 최고 점수", type: "line",
      title: "더 높은 점수 찾기",
      question: "<code>class</code> 배열을 훑으며 <code>i</code> 번째 점수가 지금까지의 최고 <code>best</code> 보다 크면 <code>best</code> 를 갱신하는 문장을 <b>논리 if 한 줄</b>로 쓰시오.",
      hint: "두 원소의 점수를 퍼센트로 꺼내 비교한다." },

    { id: 23, section: "exercise", topic: "기초 2 · 최고 점수", type: "text",
      title: "1등은 누구",
      question: "점수가 Kim 88.5, Lee 92.0, Park 79.5, Choi 95.5, Jung 84.0 일 때 최고 점수 학생의 이름은? 이름만 쓰시오.",
      hint: "가장 큰 점수를 찾는다." },

    { id: 24, section: "exercise", topic: "기초 3 · 거리 함수", type: "line",
      title: "파생형을 인수로",
      question: "두 점을 받는 함수에서 <code>point2d</code> 형 가인수 <code>a</code> 와 <code>b</code> 를 <b>읽기 전용</b>으로 <b>한 줄</b>에 선언하시오.",
      hint: "파생형도 일반 자료형처럼 intent 를 붙인다." },

    { id: 25, section: "exercise", topic: "기초 3 · 거리 함수", type: "line",
      title: "두 점 사이 거리",
      question: "두 점 <code>a</code>, <code>b</code> 사이의 거리를 결과 변수 <code>d</code> 에 넣는 문장을 쓰시오. <code>b</code> 에서 <code>a</code> 를 빼는 순서로 쓰고 거듭제곱 연산자를 쓰시오.",
      hint: "x 차이와 y 차이의 제곱합에 제곱근을 씌운다." },

    { id: 26, section: "exercise", topic: "기초 4 · 원본 바꾸기", type: "line",
      title: "포인터 연관",
      question: "포인터 <code>p</code> 가 대상 변수 <code>temperature</code> 를 가리키도록 하는 문장을 쓰시오.",
      hint: "일반 대입 연산자가 아니다." },

    { id: 27, section: "exercise", topic: "기초 4 · 원본 바꾸기", type: "text",
      title: "포인터로 쓴 값",
      question: "<code>temperature = 20.0</code> 인 상태에서 <code>p => temperature</code> 뒤 <code>p = 36.5_real64</code> 를 실행하면 <code>temperature</code> 는? 소수 첫째 자리까지 쓰시오.",
      hint: "포인터를 통해 원본에 값이 쓰인다." },

    { id: 28, section: "exercise", topic: "기초 5 · 배열 단면", type: "line",
      title: "짝수 인덱스만 가리키기",
      question: "크기 8인 대상 배열 <code>arr</code> 에서 짝수 번째 요소만 포인터 <code>evens</code> 가 가리키도록 하는 문장을 쓰시오.",
      hint: "2부터 8까지 보폭 2인 단면이다." },

    { id: 29, section: "exercise", topic: "기초 5 · 배열 단면", type: "text",
      title: "일부만 바뀐 원본",
      question: "<code>arr</code> 가 <code>1.0</code> 부터 <code>8.0</code> 까지일 때 <code>evens => arr(2:8:2)</code> 뒤 <code>evens = 0.0_real64</code> 를 실행하면 <code>arr</code> 는? 여덟 값을 소수 첫째 자리까지 빈칸으로 띄어 쓰시오.",
      hint: "짝수 번째 자리만 0이 된다." },

    { id: 30, section: "exercise", topic: "기초 6 · 노드 세기", type: "line",
      title: "끝까지 도는 조건",
      question: "임시 포인터 <code>cur</code> 가 유효한 노드를 가리키는 동안 반복하는 <code>do while</code> 의 <b>첫 줄</b>을 쓰시오.",
      hint: "연관 여부를 검사하는 내장 함수를 쓴다." },

    { id: 31, section: "exercise", topic: "기초 6 · 노드 세기", type: "line",
      title: "다음 노드로 이동",
      question: "순회 중에 <code>cur</code> 를 다음 노드로 옮기는 문장을 쓰시오.",
      hint: "연관 연산자로 자기 자신을 갱신한다." },

    { id: 32, section: "exercise", topic: "응용 1 · 다각형 둘레", type: "line",
      title: "마지막에서 처음으로",
      question: "꼭짓점 배열 <code>poly</code> 를 순회할 때 마지막 다음이 첫 번째가 되도록 <code>nxt</code> 를 정하는 문장을 <code>merge</code> 로 한 줄에 쓰시오.",
      hint: "merge(참일 때, 거짓일 때, 조건) 순서다." },

    { id: 33, section: "exercise", topic: "응용 1 · 다각형 둘레", type: "text",
      title: "직사각형의 둘레",
      question: "꼭짓점이 <code>(0,0)</code>, <code>(4,0)</code>, <code>(4,3)</code>, <code>(0,3)</code> 인 다각형의 둘레는? 소수 둘째 자리까지 쓰시오.",
      hint: "4 × 3 직사각형이다." },

    { id: 34, section: "exercise", topic: "응용 2 · 튕기는 공", type: "line",
      title: "튕겨 오르기",
      question: "공이 땅에 닿았을 때 수직 속도를 반발 계수 <code>restitution</code> 만큼 남기고 뒤집는 문장을 쓰시오. 속도는 <code>ball%vel(2)</code> 입니다.",
      hint: "부호를 뒤집고 계수를 곱한다." },

    { id: 35, section: "exercise", topic: "응용 3 · 맨 뒤에 추가", type: "line",
      title: "빈 리스트인지 검사",
      question: "<code>push_back</code> 에서 리스트가 <b>비어 있는지</b> 판정하는 <code>if</code> 문의 <b>첫 줄</b>을 쓰시오. 머리 포인터는 <code>head</code> 이며 <code>then</code> 까지 쓰시오.",
      hint: "연관되어 있지 않다는 조건이다." },

    { id: 36, section: "exercise", topic: "응용 3 · 맨 뒤에 추가", type: "text",
      title: "뒤에 붙이면 어떤 순서로",
      question: "빈 리스트에 <code>push_back</code> 으로 10, 20, 30, 40, 50 을 차례로 넣은 뒤 순회 출력하면? 숫자를 빈칸으로 띄어 쓰시오.",
      hint: "앞에 끼우는 방식과 순서가 반대다." },

    { id: 37, section: "exercise", topic: "응용 4 · 무거운 천체", type: "text",
      title: "평균보다 무거운 것",
      question: "수성 3.30e23, 지구 5.97e24, 화성 6.42e23, 목성 1.90e27 중 <b>평균 질량보다 무거운</b> 천체의 이름은? 영문 이름만 쓰시오.",
      hint: "목성 하나가 평균을 크게 끌어올린다." },

    { id: 38, section: "exercise", topic: "응용 5 · 사각형 넓이", type: "line",
      title: "중첩형으로 넓이 구하기",
      question: "왼쪽 아래 <code>lower_left</code> 와 오른쪽 위 <code>upper_right</code> 를 가진 <code>rectangle</code> 형 <code>r</code> 의 넓이를 결과 변수 <code>a</code> 에 넣는 문장을 쓰시오. 가로에 세로를 곱하는 순서로 쓰시오.",
      hint: "퍼센트를 두 번 이어 하위 좌표에 닿는다." },

    /* ===================== 실습 · 절별 보충 예제 ===================== */

    { id: 39, section: "practice", topic: "13.1-2 시각 환산", type: "line",
      title: "시각을 초로",
      question: "<code>clock_time</code> 형 변수 <code>t</code> 의 시·분·초를 모두 초로 환산해 <code>total</code> 에 넣는 문장을 쓰시오. 구성 요소 이름은 <code>hours</code>, <code>minutes</code>, <code>seconds</code> 입니다.",
      hint: "한 시간은 3600초, 1분은 60초다." },

    { id: 40, section: "practice", topic: "13.1-2 시각 환산", type: "text",
      title: "1시간 30분 45초",
      question: "1시간 30분 45초는 몇 초인가? 숫자만 쓰시오.",
      hint: "3600 + 1800 + 45" },

    { id: 41, section: "practice", topic: "13.1-3 도서 정보", type: "line",
      title: "문자형 구성 요소",
      question: "<code>book</code> 형에서 제목을 담을 <b>24칸</b> 문자형 구성 요소 <code>title</code> 을 선언하는 줄을 쓰시오.",
      hint: "character 뒤 괄호에 길이를 적는다." },

    { id: 42, section: "practice", topic: "13.2-1 키워드 생성자", type: "line",
      title: "일부만 지정하기",
      question: "<code>sim_config</code> 형에서 <code>dt</code> 를 <code>0.05</code>, <code>verbose</code> 를 참으로 지정하고 <code>n_steps</code> 는 기본값에 맡겨 <code>cfg</code> 에 넣는 문장을 쓰시오. 리터럴에 <code>_real64</code> 를 붙이고 dt 를 먼저 적으시오.",
      hint: "일부를 생략하려면 반드시 키워드 방식이어야 한다." },

    { id: 43, section: "practice", topic: "13.2-1 키워드 생성자", type: "text",
      title: "생략된 값",
      question: "<code>n_steps</code> 의 기본값이 <code>100</code> 인데 생성자에서 지정하지 않았다면 <code>cfg%n_steps</code> 는? 숫자만 쓰시오.",
      hint: "기본 초기화가 그대로 남는다." },

    { id: 44, section: "practice", topic: "13.2-2 중첩형", type: "line",
      title: "선분의 길이",
      question: "<code>segment</code> 형 변수 <code>s</code> 의 두 끝점 <code>p1</code>, <code>p2</code> 로 선분 길이를 구해 <code>length</code> 에 넣는 문장을 쓰시오. <code>p2</code> 에서 <code>p1</code> 을 빼는 순서로 쓰시오.",
      hint: "퍼센트를 두 번 이어 좌표에 닿는다." },

    { id: 45, section: "practice", topic: "13.2-3 파생형 배열", type: "text",
      title: "장바구니 총무게",
      question: "무게가 <code>0.20</code>, <code>0.50</code>, <code>1.00</code> 인 세 물건의 총무게는? 소수 둘째 자리까지 쓰시오.",
      hint: "cart%weight 로 무게만 모아 더한다." },

    { id: 46, section: "practice", topic: "13.3-1 별명 붙이기", type: "line",
      title: "두 포인터 선언",
      question: "배정밀도 포인터 <code>hot</code> 과 <code>cold</code> 를 <b>한 줄</b>에 선언하면서 둘 다 해제됨 상태로 초기화하시오.",
      hint: "각 이름마다 초기화를 따로 붙인다." },

    { id: 47, section: "practice", topic: "13.3-2 행 가리키기", type: "line",
      title: "2차원 배열의 한 행",
      question: "대상 배열 <code>a</code> 의 <b>2번째 행 전체</b>를 포인터 <code>row</code> 가 가리키도록 하는 문장을 쓰시오.",
      hint: "행 전체는 콜론으로 적는다." },

    { id: 48, section: "practice", topic: "13.3-3 구성 요소 가리키기", type: "line",
      title: "가장 무거운 입자",
      question: "대상 배열 <code>cloud</code> 의 <code>k</code> 번째 입자의 <code>mass</code> 를 포인터 <code>heaviest</code> 가 가리키도록 하는 문장을 쓰시오.",
      hint: "배열 첨자와 퍼센트를 이어 쓴다." },

    { id: 49, section: "practice", topic: "13.4-2 값의 합", type: "text",
      title: "리스트의 합",
      question: "빈 리스트에 <code>push_front</code> 로 2, 4, 6, 8, 10 을 넣은 뒤 <code>list_sum</code> 을 부르면? 숫자만 쓰시오.",
      hint: "순서와 무관하게 모두 더한다." },

    { id: 50, section: "practice", topic: "13.4-3 값 검색", type: "text",
      title: "값이 들어 있나",
      question: "리스트에 10, 20, 30, 40, 50 이 들어 있을 때 <code>list_contains(head, 30)</code> 의 출력은? 글자 하나만 쓰시오.",
      hint: "논리값은 T 나 F 로 찍힌다." }
  ]
};
