/* ============================================================
   answer/fort_prac_13_answers.src.js — 13장 평문 정답 (강사용 원본)

   ★ 이 파일은 GitHub에 올리지 마세요. .gitignore 로 막아 두었습니다.
   ★ 고친 뒤에는 answer/build_13.html 을 열어 정답 파일을 다시 만드세요.
   ============================================================ */

window.ANSWER_SOURCE = {

  /* ---------- 복습 ---------- */
  1:  { answers: ["p%x = 3.0_real64"],
        explanation: "p%x = 3.0_real64 다. 파생형의 구성 요소에는 퍼센트 기호로 접근한다. type 선언은 설계도일 뿐이고, 실제 메모리는 type(point2d) :: p 문장에서 확보된다." },

  2:  { answers: [
          "dist = sqrt(p%x**2 + p%y**2)",
          "dist = sqrt(p%x ** 2 + p%y ** 2)"
        ],
        explanation: "dist = sqrt(p%x**2 + p%y**2) 다. 구성 요소를 꺼내 쓰면 보통의 실수 변수와 똑같이 계산에 넣을 수 있다. (3, 4) 이면 5가 나온다." },

  3:  { answers: ["type(point2d) :: center"],
        explanation: "type(point2d) :: center 다. 파생형의 구성 요소로 또 다른 파생형을 둘 수 있으며 이를 중첩 파생 구조라 한다. 이렇게 하면 c%center%x 처럼 퍼센트를 사슬로 이어 하위 좌표에 닿는다." },

  4:  { answers: ["real(real64) :: radius = 1.0_real64"],
        explanation: "real(real64) :: radius = 1.0_real64 다. 구성 요소 옆에 = 초깃값 을 적으면 기본 초기화가 이뤄져, 생성자에서 그 요소를 생략할 수 있다." },

  5:  { answers: [
          "c1 = circle(center = point2d(2.0_real64, 1.0_real64), radius = 3.0_real64)",
          "c1 = circle(center=point2d(2.0_real64, 1.0_real64), radius=3.0_real64)"
        ],
        explanation: "c1 = circle(center = point2d(2.0_real64, 1.0_real64), radius = 3.0_real64) 이다. 바깥은 키워드 지정 방식으로, 안쪽 point2d 는 순서 지정 방식으로 썼다. 생성자 안에서 중첩형이 함께 초기화된다." },

  6:  { answers: ["c2 = circle()"],
        explanation: "c2 = circle() 이다. 모든 구성 요소에 기본값이 있으므로 인수를 하나도 넘기지 않아도 된다. 결과는 중심 (0.0, 0.0), 반지름 1.0 이다." },

  7:  { answers: ["28.274"],
        explanation: "28.274 다. π × 3² = 28.2743... 이고 f0.3 서식이 소수 셋째 자리까지 반올림한다." },

  8:  { answers: ["1"],
        explanation: "No initializer for component 'y' given in the structure constructor 컴파일 오류가 난다. 기본값이 지정되지 않은 구성 요소는 생성자에서 하나도 빠뜨릴 수 없다. 순서대로 모두 채우거나 키워드 지정 방식으로 명확히 할당해야 한다." },

  9:  { answers: ['class(1) = student("Kim", 101, 88.5_real64)', "class(1) = student('Kim', 101, 88.5_real64)"],
        explanation: 'class(1) = student("Kim", 101, 88.5_real64) 다. 형 생성자로 만든 값을 배열의 한 자리에 그대로 대입한다. 이름·학번·점수처럼 서로 다른 형이 한 레코드로 묶인다.' },

  10: { answers: ["avg = sum(class%score) / size(class)"],
        explanation: "avg = sum(class%score) / size(class) 다. 배열 이름에 바로 퍼센트를 붙인 class%score 는 점수만 모은 크기 3의 실수 배열처럼 동작하므로, 반복문 없이 sum 과 size 만으로 평균이 나온다." },

  11: { answers: ["86.67"],
        explanation: "86.67 이다. (88.5 + 92.0 + 79.5) ÷ 3 = 260 ÷ 3 = 86.666... 이고 f5.2 서식이 소수 둘째 자리까지 반올림한다." },

  12: { answers: ["real(real64), target :: a = 10.0_real64"],
        explanation: "real(real64), target :: a = 10.0_real64 다. target 속성이 없는 평범한 변수를 포인터가 가리키려 하면 Pointer assignment target is neither TARGET nor POINTER 오류가 난다." },

  13: { answers: ["real(real64), pointer :: p => null()"],
        explanation: "real(real64), pointer :: p => null() 이다. 초기화를 빠뜨리면 포인터가 정의되지 않음 상태가 되어, associated(p) 로 상태를 검사하는 것조차 안전하지 않다. 선언과 동시에 해제됨 상태로 출발시키는 것이 원칙이다." },

  14: { answers: ["99.0", "99"],
        explanation: "99.0 이다. p = 99.0 은 포인터 자신이 아니라 p 가 가리키는 대상 a 에 값을 쓴다. 이 별명 효과가 포인터의 본질이자 가장 흔한 혼동의 원인이다. 연관은 =>, 값 대입은 = 로 구분해야 한다." },

  15: { answers: ["window => grid(4:7)"],
        explanation: "window => grid(4:7) 이다. 포인터는 단일 변수뿐 아니라 배열 구간에도 연관될 수 있다. 이 시점부터 window 는 크기 4인 배열처럼 보이지만 실제로는 원본 메모리를 가리키는 별칭이라, window 를 고치면 grid(4:7) 이 함께 바뀐다." },

  16: { answers: ["type(node), pointer :: next => null()"],
        explanation: "type(node), pointer :: next => null() 이다. 아직 정의가 끝나지 않은 node 형 안에서 자기 자신을 가리키는 포인터를 선언할 수 있으며, 이 재귀적 선언이 연결 리스트의 뼈대가 된다. => null() 로 초기화해 연결의 끝을 명시한다." },

  17: { answers: ["new_node%next => head"],
        explanation: "new_node%next => head 다. 새 노드가 기존 머리를 가리키게 한 뒤 head => new_node 로 머리를 옮긴다. 값 대입 = 를 쓰면 포인터 연관이 아니라 노드 내용 복사가 되어 의도가 완전히 달라진다." },

  18: { answers: ["1"],
        explanation: "이미 해제된 메모리의 next 를 읽는 허상 포인터 참조가 되어 Segmentation fault 가 난다. deallocate 하는 순간 그 노드 안의 value 와 next 정보가 함께 사라지기 때문이다. tmp => cur%next 로 다음 주소를 먼저 대피시킨 뒤 해제해야 한다." },

  /* ---------- 연습 ---------- */
  19: { answers: ["z = complex_t(3.0_real64, 4.0_real64)"],
        explanation: "z = complex_t(3.0_real64, 4.0_real64) 다. 형 생성자의 이름은 파생형 이름과 완전히 같고, 순서 지정 방식은 정의된 구성 요소 순서대로 값을 나열한다." },

  20: { answers: [
          "magnitude = sqrt(z%re**2 + z%im**2)",
          "magnitude = sqrt(z%re ** 2 + z%im ** 2)"
        ],
        explanation: "magnitude = sqrt(z%re**2 + z%im**2) 다. 내장 complex 형을 쓰지 않고 파생형으로 직접 복소수를 표현해 본 문제다. 구성 요소를 꺼내 쓰는 방식은 일반 변수와 같다." },

  21: { answers: ["5.00", "5.0", "5"],
        explanation: "5.00 이다. 3² + 4² = 25 이고 제곱근은 5다." },

  22: { answers: ["if (class(i)%score > class(best)%score) best = i"],
        explanation: "if (class(i)%score > class(best)%score) best = i 다. 배열 원소의 구성 요소는 class(i)%score 처럼 첨자 뒤에 퍼센트를 붙여 꺼낸다. 최댓값 자체가 아니라 위치를 기억해 두면 이름까지 함께 꺼낼 수 있다." },

  23: { answers: ["choi"],
        explanation: "Choi 다. 95.5 로 가장 높다. 위치 best 를 기억해 두었으므로 trim(class(best)%name) 으로 이름을, class(best)%score 로 점수를 함께 출력할 수 있다." },

  24: { answers: ["type(point2d), intent(in) :: a, b", "type(point2d), intent(in) :: b, a"],
        explanation: "type(point2d), intent(in) :: a, b 다. 파생형도 일반 자료형처럼 가인수로 선언하며 intent 를 붙인다. 좌표 두 쌍을 네 개의 실수로 넘기는 대신 파생형 두 개로 넘기니 함수의 시그니처가 훨씬 깔끔해진다." },

  25: { answers: [
          "d = sqrt((b%x - a%x)**2 + (b%y - a%y)**2)",
          "d = sqrt((b%x - a%x) ** 2 + (b%y - a%y) ** 2)"
        ],
        explanation: "d = sqrt((b%x - a%x)**2 + (b%y - a%y)**2) 다. 차를 먼저 구하도록 괄호로 묶은 뒤 제곱해야 한다. 괄호를 빼면 b%x - a%x**2 가 되어 전혀 다른 값이 나온다." },

  26: { answers: ["p => temperature"],
        explanation: "p => temperature 다. 포인터 대입 연산자 => 로 연관시킨다. 여기에 = 를 쓰면 대상이 없는 상태에서 값을 쓰려는 셈이라 위험하다." },

  27: { answers: ["36.5"],
        explanation: "36.5 다. p = 36.5 는 포인터 자신이 아니라 그것이 가리키는 temperature 에 값을 쓴다. 원본이 바뀐다는 점이 포인터의 핵심이다." },

  28: { answers: ["evens => arr(2:8:2)"],
        explanation: "evens => arr(2:8:2) 다. 시작 2, 끝 8, 보폭 2인 단면이므로 2, 4, 6, 8번째 요소만 잡힌다. 이 창을 통해 값을 쓰면 원본 배열의 해당 자리만 바뀐다." },

  29: { answers: [
          "1.0 0.0 3.0 0.0 5.0 0.0 7.0 0.0",
          "1 0 3 0 5 0 7 0"
        ],
        explanation: "1.0 0.0 3.0 0.0 5.0 0.0 7.0 0.0 이다. 포인터가 가리킨 짝수 번째 자리에만 0이 들어가고 홀수 번째는 그대로 남는다. 임시 배열을 만들어 복사하는 과정 없이 원본을 직접 고친 것이다." },

  30: { answers: ["do while (associated(cur))"],
        explanation: "do while (associated(cur)) 다. associated 는 포인터가 유효한 대상을 가리키면 참을 돌려준다. 마지막 노드의 next 가 null 이므로 그 지점에서 조건이 거짓이 되어 순회가 끝난다." },

  31: { answers: ["cur => cur%next"],
        explanation: "cur => cur%next 다. 현재 노드의 next 링크를 따라 다음 노드로 옮겨 간다. cur => head 로 시작해 이 문장을 반복하는 것이 모든 연결 구조 순회의 표준 패턴이다." },

  32: { answers: [
          "nxt = merge(1, i + 1, i == size(poly))",
          "nxt = merge(1, i+1, i == size(poly))"
        ],
        explanation: "nxt = merge(1, i + 1, i == size(poly)) 다. merge(참일 때, 거짓일 때, 조건) 순서이므로 마지막 꼭짓점에서는 1을, 그 밖에는 i + 1 을 준다. 이렇게 닫힌 경로를 만들면 마지막 변까지 빠짐없이 더한다." },

  33: { answers: ["14.00", "14", "14.0"],
        explanation: "14.00 이다. 가로 4, 세로 3인 직사각형이므로 둘레는 2 × (4 + 3) = 14 다." },

  34: { answers: ["ball%vel(2) = -restitution * ball%vel(2)"],
        explanation: "ball%vel(2) = -restitution * ball%vel(2) 다. 부호를 뒤집어 위로 튕기게 하고 계수 0.8 을 곱해 에너지 손실을 반영한다. 튕길 때마다 최고 높이가 점점 낮아지는 곡선이 나온다." },

  35: { answers: ["if (.not. associated(head)) then"],
        explanation: "if (.not. associated(head)) then 이다. 리스트가 비어 있으면 새 노드가 곧 머리가 되고, 그렇지 않으면 마지막 노드까지 걸어가 그 next 에 잇는다. 이 두 경우를 나누는 것이 push_back 의 핵심이다." },

  36: { answers: ["10 20 30 40 50"],
        explanation: "10 20 30 40 50 이다. 맨 뒤에 붙이므로 입력 순서 그대로 나온다. 앞에 끼우는 push_front 였다면 50 40 30 20 10 으로 역순이 된다." },

  37: { answers: ["jupiter", "목성"],
        explanation: "Jupiter 다. 평균 질량이 약 4.767e26 인데 목성만 1.90e27 로 그보다 크다. 목성 하나가 평균을 크게 끌어올려 지구조차 평균 아래로 내려간다. planets%mass 가 질량만 모은 배열이라 sum 으로 평균을 바로 구한다." },

  38: { answers: [
          "a = (r%upper_right%x - r%lower_left%x) * (r%upper_right%y - r%lower_left%y)"
        ],
        explanation: "a = (r%upper_right%x - r%lower_left%x) * (r%upper_right%y - r%lower_left%y) 다. 퍼센트를 두 번 이어 중첩된 좌표에 닿는다. 각 차를 괄호로 묶지 않으면 곱셈이 먼저 계산되어 값이 틀어진다." },

  /* ---------- 실습 ---------- */
  39: { answers: ["total = t%hours * 3600 + t%minutes * 60 + t%seconds"],
        explanation: "total = t%hours * 3600 + t%minutes * 60 + t%seconds 다. 시·분·초가 한 변수에 모여 있어 계산식이 또렷하게 읽힌다. 세 값을 따로 관리했다면 이름을 맞추는 수고가 늘었을 것이다." },

  40: { answers: ["5445"],
        explanation: "5445 다. 1 × 3600 + 30 × 60 + 45 = 3600 + 1800 + 45 = 5445." },

  41: { answers: ["character(len=24) :: title", "character(24) :: title"],
        explanation: "character(len=24) :: title 이다. 파생형은 문자·정수·실수처럼 서로 다른 형을 하나의 레코드로 묶는 데 쓰인다. 길이를 넘치는 문자열을 넣으면 조용히 잘리므로 주의한다." },

  42: { answers: [
          "cfg = sim_config(dt = 0.05_real64, verbose = .true.)",
          "cfg = sim_config(dt=0.05_real64, verbose=.true.)"
        ],
        explanation: "cfg = sim_config(dt = 0.05_real64, verbose = .true.) 다. 일부 구성 요소를 생략하려면 반드시 키워드 지정 방식이어야 한다. 순서 지정 방식으로 일부만 적으면 컴파일러가 어느 자리인지 알 수 없다." },

  43: { answers: ["100"],
        explanation: "100 이다. 생성자에서 지정하지 않았으므로 정의할 때 준 기본값이 그대로 남는다. 이것이 기본 초기화의 쓸모다." },

  44: { answers: [
          "length = sqrt((s%p2%x - s%p1%x)**2 + (s%p2%y - s%p1%y)**2)",
          "length = sqrt((s%p2%x - s%p1%x) ** 2 + (s%p2%y - s%p1%y) ** 2)"
        ],
        explanation: "length = sqrt((s%p2%x - s%p1%x)**2 + (s%p2%y - s%p1%y)**2) 다. s%p2%x 처럼 퍼센트를 두 번 이어 중첩된 점의 좌표에 접근한다. (0,0) 과 (3,4) 사이라면 5가 나온다." },

  45: { answers: ["1.70", "1.7"],
        explanation: "1.70 이다. 0.20 + 0.50 + 1.00 = 1.70. cart%weight 가 무게만 모은 배열이라 sum 을 바로 적용할 수 있다." },

  46: { answers: [
          "real(real64), pointer :: hot => null(), cold => null()",
          "real(real64), pointer :: cold => null(), hot => null()"
        ],
        explanation: "real(real64), pointer :: hot => null(), cold => null() 이다. 한 줄에 여러 포인터를 선언할 때도 각 이름마다 초기화를 따로 붙여야 한다. 같은 값에 의미 있는 별명을 붙여 코드를 읽기 쉽게 만드는 용법이다." },

  47: { answers: ["row => a(2, :)", "row => a(2,:)"],
        explanation: "row => a(2, :) 다. 2차원 배열의 한 행을 1차원 포인터로 잡으면 그 행만 골라 한꺼번에 갱신할 수 있다. row = row * 10.0 처럼 쓰면 원본 a(2, :) 가 바뀐다." },

  48: { answers: ["heaviest => cloud(k)%mass"],
        explanation: "heaviest => cloud(k)%mass 다. 배열 첨자와 퍼센트를 이어 쓰면 구조체 배열 속 특정 구성 요소를 포인터로 가리킬 수 있다. 찾아낸 대상을 별명으로 다루는 전형적인 쓰임이다." },

  49: { answers: ["30"],
        explanation: "30 이다. 2 + 4 + 6 + 8 + 10 = 30. push_front 로 넣었으므로 리스트에는 역순으로 쌓이지만 합은 순서와 무관하다." },

  50: { answers: ["t"],
        explanation: "T 다. 30 이 리스트 안에 있으므로 참이다. 없는 값인 99 를 찾으면 F 가 나온다. 세 함수 모두 cur => head 에서 시작해 cur => cur%next 로 훑는 같은 골격을 공유한다." }
};
