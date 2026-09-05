/* ============================================================
   fort_prac_09_problems.js — 9장 문제 본문 (공개 파일)

   정답은 이 파일에 없습니다. answer/fort_prac_09_answers.js 에 있습니다.
   복습 18 · 이론 20 · 실습 12 = 50문항, 한 문항 1점.

   값을 여러 개 답하는 문항은 빈칸으로 띄어 씁니다.
   ============================================================ */

window.PROBLEMS = {
  title: "FORTRAN 9장 실습",
  subtitle: "동적 배열과 메모리 할당 · 50문제",

  sections: [
    { key: "review",   label: "복습", note: "수업 본문 예제" },
    { key: "theory",   label: "이론", note: "출제 예상 문제은행" },
    { key: "practice", label: "실습", note: "절별 보충 예제" }
  ],

  problems: [

    /* ===================== 복습 · 본문 예제 ===================== */

    { id: 1, section: "review", topic: "9.1 allocatable", type: "line",
      title: "1차원 동적 배열 선언",
      question: "크기를 아직 정하지 않은 <b>1차원</b> 실수 동적 배열 <code>v</code> 를 선언하시오.",
      hint: "자료형 뒤에 속성을 붙이고, 괄호 안에 차원 수만큼 콜론을 적는다." },

    { id: 2, section: "review", topic: "9.1 allocatable", type: "line",
      title: "2차원 동적 배열 선언",
      question: "크기를 아직 정하지 않은 <b>2차원</b> 실수 동적 배열 <code>m</code> 을 선언하시오.",
      hint: "콜론의 개수가 계수(rank)를 정한다." },

    { id: 3, section: "review", topic: "9.1 allocate", type: "line",
      title: "실행 중에 크기 정하기",
      question: "<code>dynamic_basics</code> 예제에서 읽어 들인 <code>n</code> 만큼 배열 <code>v</code> 에 메모리를 확보하는 문장을 쓰시오.",
      hint: "하한을 생략하면 첨자가 1부터 시작한다." },

    { id: 4, section: "review", topic: "9.1 deallocate", type: "line",
      title: "메모리 반환",
      question: "다 쓴 배열 <code>v</code> 의 메모리를 시스템에 돌려주는 문장을 쓰시오.",
      hint: "이 처리를 빠뜨리면 메모리 누수가 생긴다." },

    { id: 5, section: "review", topic: "9.1 allocate", type: "text",
      title: "동적으로 정해진 크기",
      question: "<code>echo 5 | ./dynamic_basics</code> 로 실행했을 때 <code>size(v)</code> 의 값은? 숫자만 쓰시오.",
      hint: "표준 입력으로 넘긴 숫자가 그대로 크기가 된다." },

    { id: 6, section: "review", topic: "9.1 stat", type: "line",
      title: "할당 실패에 대비하기",
      question: "배열 <code>big</code> 을 <code>request</code> 크기로 할당하되, 실패해도 프로그램이 죽지 않도록 상태를 <code>ierr</code> 에 받는 문장을 쓰시오.",
      hint: "allocate 안에 지시자를 하나 더 붙인다." },

    { id: 7, section: "review", topic: "9.1 stat", type: "choice",
      title: "stat을 생략하면",
      question: "<code>stat=</code> 을 생략한 채 <code>allocate</code> 가 실패하면 프로그램은 어떻게 되는가?",
      options: [
        "0이 아닌 값이 자동으로 어딘가에 저장되고 실행이 계속된다",
        "곧바로 비정상 종료한다",
        "요청한 크기의 절반으로 다시 시도한다",
        "컴파일 단계에서 미리 걸러진다"
      ],
      hint: "제어권을 유지하려면 상태 변수를 받아야 한다." },

    { id: 8, section: "review", topic: "9.1 allocated", type: "text",
      title: "할당 직후의 크기",
      question: "<code>check_allocated</code> 예제에서 <code>allocate(vals(3))</code> 직후 출력되는 <code>size(vals)</code> 의 값은? 숫자만 쓰시오.",
      hint: "요청한 크기가 그대로 반영된다." },

    { id: 9, section: "review", topic: "9.1 allocated", type: "line",
      title: "안전한 해제 관용구",
      question: "배열 <code>vals</code> 가 <b>할당되어 있을 때만</b> 해제하는 문장을 <b>한 줄</b>로 쓰시오.",
      hint: "논리 if 한 줄에 상태 점검 함수를 쓴다." },

    { id: 10, section: "review", topic: "9.1 allocated", type: "line",
      title: "안전한 할당 관용구",
      question: "배열 <code>v</code> 가 <b>아직 할당되지 않았을 때만</b> 크기 <code>n</code> 으로 할당하는 문장을 <b>한 줄</b>로 쓰시오.",
      hint: "조건을 뒤집는 논리 연산자를 앞에 붙인다." },

    { id: 11, section: "review", topic: "9.2 할당가능 대입", type: "line",
      title: "allocate 없이 채우기",
      question: "미할당 상태인 동적 배열 <code>u</code> 에 <code>1.0, 2.0, 3.0, 4.0</code> 을 대입해 <b>자동으로</b> 크기 4가 되도록 하는 문장을 쓰시오.",
      hint: "allocate 를 부르지 않고 그냥 대입한다." },

    { id: 12, section: "review", topic: "9.2 자동 재할당", type: "text",
      title: "재할당 뒤의 크기",
      question: "<code>alloc_assign</code> 예제에서 <code>w = [10.0, 20.0]</code> 다음에 <code>w = [7.0, 8.0, 9.0, 5.0, 6.0]</code> 을 실행하면 <code>size(w)</code> 는? 숫자만 쓰시오.",
      hint: "좌변이 동적 배열이면 우변 형상에 맞춰 다시 잡힌다." },

    { id: 13, section: "review", topic: "9.2 배열 확장", type: "line",
      title: "빈 배열로 시작하기",
      question: "<code>grow_array</code> 예제에서 정수 배열 <code>collected</code> 를 <b>크기 0</b> 으로 할당하는 문장을 쓰시오.",
      hint: "몇 개를 모을지 모를 때 쓰는 출발점이다." },

    { id: 14, section: "review", topic: "9.2 배열 확장", type: "line",
      title: "한 칸씩 키우기",
      question: "기존 <code>collected</code> 의 뒤에 값 <code>sq</code> 하나를 이어 붙여 다시 <code>collected</code> 에 넣는 문장을 쓰시오.",
      hint: "생성자 안에 배열과 값을 나열하고 자동 재할당에 맡긴다." },

    { id: 15, section: "review", topic: "9.2 배열 확장", type: "text",
      title: "모인 개수",
      question: "1부터 20까지의 정수 중 <b>제곱이 짝수</b>인 것을 모으면 몇 개인가? 숫자만 쓰시오.",
      hint: "짝수를 제곱해야 짝수가 된다." },

    { id: 16, section: "review", topic: "9.3 수렴 비교", type: "line",
      title: "네 배열을 한 번에",
      question: "<code>convergence</code> 예제에서 <code>xs</code>, <code>ys</code>, <code>xd</code>, <code>yd</code> 네 배열을 모두 크기 <code>n+1</code> 로 <b>한 문장</b>에 할당하시오.",
      hint: "allocate 안에 쉼표로 나열한다." },

    { id: 17, section: "review", topic: "오류 학습", type: "text",
      title: "몇 번째 회차에서 멈추나",
      question: "반복문 안에서 매 회차 <code>allocate</code> 만 하고 <code>deallocate</code> 를 빠뜨리면 <b>몇 번째</b> 회차에서 런타임 오류가 나는가? 숫자만 쓰시오.",
      hint: "첫 회차는 미할당 상태에서 시작하므로 무사히 지나간다." },

    { id: 18, section: "review", topic: "9.3 수렴 비교", type: "text",
      title: "사다리꼴 법칙의 수렴 속도",
      question: "사다리꼴 법칙의 오차는 O(1/n²)이다. 배정밀도로 계산할 때 <code>n</code> 을 2배로 키우면 오차는 대략 <b>몇 분의 1</b> 로 줄어드는가? 숫자만 쓰시오.",
      hint: "2의 제곱만큼 줄어든다." },

    /* ===================== 이론 · 문제은행 ===================== */

    { id: 19, section: "theory", topic: "9.1 allocatable", type: "choice",
      title: "정적 배열과의 차이",
      question: "<code>allocatable</code> 배열과 정적 배열의 차이로 옳은 것은?",
      options: [
        "정적 배열은 컴파일 시점에 크기가 고정되지만, allocatable 은 계수만 고정되고 각 차원의 길이를 실행 시점에 정한다",
        "allocatable 은 계수도 실행 중에 바꿀 수 있다",
        "정적 배열은 실행 중에 크기를 바꿀 수 있고 allocatable 은 못 바꾼다",
        "둘의 차이는 선언 위치뿐이다"
      ],
      hint: "콜론의 개수는 나중에 바꿀 수 없다." },

    { id: 20, section: "theory", topic: "9.1 allocatable", type: "choice",
      title: "미할당 상태",
      question: "선언만 하고 아직 <code>allocate</code> 하지 않은 배열의 상태와, 그 상태에서 원소에 접근하면 생기는 일로 옳은 것은?",
      options: [
        "크기 0인 배열이며 접근하면 0이 나온다",
        "미할당 상태이며 메모리가 없으므로 접근하거나 deallocate 하면 오류가 난다",
        "자동으로 크기 1이 잡혀 있어 안전하다",
        "컴파일러가 접근 시점에 알아서 할당해 준다"
      ],
      hint: "접근 전에 allocate 하거나 할당가능 대입으로 메모리를 확보해야 한다." },

    { id: 21, section: "theory", topic: "9.1 allocated", type: "text",
      title: "allocated의 반환형",
      question: "내장 함수 <code>allocated(a)</code> 의 반환 자료형은? 키워드만 쓰시오.",
      hint: "참 또는 거짓을 돌려준다." },

    { id: 22, section: "theory", topic: "9.1 allocated", type: "text",
      title: "할당 상태의 변화",
      question: "아래 프로그램이 출력하는 세 줄을 순서대로 빈칸으로 띄어 쓰시오.<pre>real, allocatable :: a(:)\nprint *, allocated(a)\nallocate(a(2))\nprint *, allocated(a)\ndeallocate(a)\nprint *, allocated(a)</pre>",
      hint: "논리값은 T 나 F 로 찍힌다." },

    { id: 23, section: "theory", topic: "9.1 stat", type: "choice",
      title: "stat= 을 주는 이유",
      question: "<code>allocate</code> 문에 <code>stat=</code> 인수를 주는 이유로 옳은 것은?",
      options: [
        "할당 속도를 높이기 위해",
        "할당이 실패했을 때 0이 아닌 값을 받아, 프로그램을 멈추지 않고 분기 처리하기 위해",
        "배열의 크기를 자동으로 정하기 위해",
        "메모리를 미리 예약해 두기 위해"
      ],
      hint: "gfortran 은 실패 시 5020 같은 코드를 담아 준다." },

    { id: 24, section: "theory", topic: "9.1 수명", type: "choice",
      title: "자동 해제와 포인터",
      question: "지역 <code>allocatable</code> 변수의 해제 시점과, 같은 점에서 포인터가 다른 부분으로 옳은 것은?",
      options: [
        "선언된 프로그램 단위가 끝날 때 자동 해제된다. 포인터로 잡은 메모리는 자동 해제되지 않아 직접 deallocate 해야 한다",
        "반복문 블록이 끝날 때마다 자동 해제된다. 포인터도 마찬가지다",
        "둘 다 자동 해제되지 않는다",
        "allocatable 은 자동 해제되지 않고 포인터만 자동 해제된다"
      ],
      hint: "반복문 안에서 이중 할당 오류가 나는 이유와 이어진다." },

    { id: 25, section: "theory", topic: "9.2 가정형상", type: "choice",
      title: "가정형상 배열",
      question: "가정형상(assumed-shape) 배열은 형상을 어디에서 가져오며, 더미 인수의 차원을 어떻게 선언하는가?",
      options: [
        "호출 측의 실인수에서 가져오며, 더미를 x(:) 처럼 콜론으로 선언한다",
        "프로시저 안에서 allocate 로 직접 정하며, 더미를 x(n) 으로 선언한다",
        "컴파일 시점에 고정되며, 더미를 x(100) 처럼 상수로 선언한다",
        "형상을 알 수 없으므로 매번 인수로 크기를 함께 넘겨야 한다"
      ],
      hint: "호출할 때마다 실인수의 형상에 자동으로 맞춰진다." },

    { id: 26, section: "theory", topic: "9.2 자동 배열", type: "choice",
      title: "자동 배열",
      question: "자동(automatic) 배열에 대한 설명으로 옳은 것은?",
      options: [
        "프로시저 안에서 크기가 인수 등으로 정해지는 임시 지역 배열이며, allocate·deallocate 를 직접 쓰지 않는다",
        "allocatable 속성이 붙은 배열의 다른 이름이다",
        "프로그램이 시작할 때 만들어져 끝까지 남는 전역 배열이다",
        "크기를 컴파일 시점에 상수로만 줄 수 있다"
      ],
      hint: "real :: work(size(x)) 같은 형태다. 진입 시 생기고 종료 시 사라진다." },

    { id: 27, section: "theory", topic: "9.2 가정형상", type: "choice",
      title: "호출 측이 갖춰야 할 조건",
      question: "가정형상 배열을 더미 인수로 받는 프로시저를 호출하려면 호출하는 쪽에 무엇이 필요한가?",
      options: [
        "실인수를 반드시 allocatable 로 선언해야 한다",
        "그 프로시저의 명시적 인터페이스를 알고 있어야 한다. contains 프로시저나 모듈 프로시저는 자동으로 만족한다",
        "배열의 크기를 정수 인수로 함께 넘겨야 한다",
        "아무 조건도 필요 없다"
      ],
      hint: "컴파일러가 더미의 형상 규약을 미리 알아야 한다." },

    { id: 28, section: "theory", topic: "9.3 할당가능 대입", type: "text",
      title: "대입만으로 할당",
      question: "아래 프로그램의 출력값은? 숫자만 쓰시오.<pre>real, allocatable :: u(:)\nu = [2.0, 4.0, 6.0]\nprint *, size(u)</pre>",
      hint: "미할당이던 좌변이 우변 형상에 맞춰 잡힌다." },

    { id: 29, section: "theory", topic: "9.3 자동 재할당", type: "choice",
      title: "자동 재할당의 세 경우",
      question: "할당가능 대입에서 좌변의 상태에 따른 동작으로 옳은 것은?",
      options: [
        "미할당이면 우변 형상으로 할당, 형상이 다르면 해제 후 재할당, 형상이 같으면 값만 복사",
        "미할당이면 오류, 형상이 다르면 값이 잘림, 형상이 같으면 값만 복사",
        "세 경우 모두 매번 해제하고 새로 할당한다",
        "세 경우 모두 값만 복사한다"
      ],
      hint: "형상이 같으면 굳이 다시 잡을 이유가 없다." },

    { id: 30, section: "theory", topic: "9.3 자동 재할당", type: "text",
      title: "두 번 대입하면",
      question: "아래 프로그램의 출력값은? 숫자만 쓰시오.<pre>real, allocatable :: w(:)\nw = [1.0, 2.0]\nw = [1.0, 2.0, 3.0, 4.0]\nprint *, size(w)</pre>",
      hint: "마지막 대입의 형상이 그대로 반영된다." },

    { id: 31, section: "theory", topic: "9.3 자동 재할당", type: "choice",
      title: "정적 좌변이면",
      question: "대입의 좌변이 정적(고정 크기) 배열일 때 형상이 다른 배열을 대입하면?",
      options: [
        "자동 재할당이 일어나 크기가 바뀐다",
        "자동 재할당이 적용되지 않으며, 형상이 다르면 컴파일 단계에서 Different shape for array assignment 오류가 난다",
        "값이 앞에서부터 잘려 들어간다",
        "실행 중에 오류가 난다"
      ],
      hint: "자동 재할당은 allocatable 좌변에서만 작동한다." },

    { id: 32, section: "theory", topic: "9.3 배열 확장", type: "text",
      title: "빈 배열에서 키우기",
      question: "아래 프로그램이 출력하는 <code>size(v)</code> 와 원소를 순서대로 빈칸으로 띄어 쓰시오.<pre>integer, allocatable :: v(:)\nallocate(v(0))\ndo k = 1, 3\n   v = [v, k*k]\nend do\nprint *, size(v), v</pre>",
      hint: "크기와 값 네 개를 이어서 적는다." },

    { id: 33, section: "theory", topic: "9.3 move_alloc", type: "choice",
      title: "move_alloc 직후",
      question: "<code>call move_alloc(p, q)</code> 를 실행한 직후 <code>p</code> 와 <code>q</code> 의 할당 상태는?",
      options: [
        "p 는 미할당이 되고, q 는 p 의 메모리와 내용을 그대로 넘겨받아 할당 상태가 된다",
        "둘 다 할당 상태가 되며 내용이 복사된다",
        "p 는 그대로 할당 상태이고 q 만 새로 할당된다",
        "둘 다 미할당이 된다"
      ],
      hint: "복사가 아니라 소유권 이전이다." },

    { id: 34, section: "theory", topic: "9.3 배열 확장", type: "choice",
      title: "한 칸씩 키우기의 비용",
      question: "<code>v = [v, x]</code> 로 배열을 한 칸씩 키우는 방식의 성능 문제와 권장 대안으로 옳은 것은?",
      options: [
        "매번 전체를 복사하므로 n개를 넣으면 비용이 n²에 비례한다. 대량이면 용량을 두 배씩 키우고 move_alloc 으로 옮긴다",
        "메모리를 해제하지 않아 누수가 생긴다. deallocate 를 매번 부르면 된다",
        "성능 문제가 없으므로 언제나 이 방식을 쓰면 된다",
        "정수 배열에만 쓸 수 있다. 실수는 allocate 를 써야 한다"
      ],
      hint: "임시 배열을 만들어 통째로 옮겨 담는 과정이 매번 반복된다." },

    { id: 35, section: "theory", topic: "9.3 배열 이어 붙이기", type: "text",
      title: "두 배열 잇기",
      question: "아래 프로그램의 출력값은? 숫자만 쓰시오.<pre>real, allocatable :: a(:), b(:), c(:)\na = [1.0, 2.0, 3.0]\nb = [4.0, 5.0]\nc = [a, b]\nprint *, size(c)</pre>",
      hint: "두 크기를 더한다." },

    { id: 36, section: "theory", topic: "9.4 정밀도", type: "choice",
      title: "단정밀도의 한계",
      question: "사다리꼴 적분의 오차는 이론적으로 O(1/n²)인데, 단정밀도로 계산하면 <code>n</code> 을 키워도 어느 수준 아래로 오차가 줄지 않는다. 그 이유는?",
      options: [
        "사다리꼴 법칙이 단정밀도에서는 O(1/n) 으로 바뀌기 때문",
        "유효숫자가 약 7자리뿐이어서 합산 과정의 반올림 오차가 적분 오차보다 커지는 지점이 오기 때문",
        "배열 크기가 커지면 allocate 가 실패하기 때문",
        "n 이 커지면 정수 오버플로가 일어나기 때문"
      ],
      hint: "그 뒤로는 오차가 줄지 않고 들쭉날쭉해진다." },

    { id: 37, section: "theory", topic: "오류 찾기", type: "choice",
      title: "계수가 어긋난 할당",
      question: "<code>real, allocatable :: m(:,:)</code> 를 <code>allocate(m(n))</code> 처럼 1차원으로 할당하면?",
      options: [
        "정상 동작하며 열이 하나인 행렬이 된다",
        "선언은 계수 2인데 할당은 1차원이라 계수가 어긋나며, 컴파일 단계에서 Rank mismatch 오류로 잡힌다",
        "실행 단계에서 Segmentation fault 가 난다",
        "경고만 나고 컴파일된다"
      ],
      hint: "올바른 형태는 allocate(m(n, n)) 이다." },

    { id: 38, section: "theory", topic: "오류 찾기", type: "choice",
      title: "deallocate 누락",
      question: "반복문에서 매 회차 <code>allocate</code> 만 하고 <code>deallocate</code> 를 빠뜨리면 무슨 일이 일어나며, 어떻게 고치는가?",
      options: [
        "메모리만 조금 낭비될 뿐 계속 실행된다. 고칠 필요는 없다",
        "두 번째 회차의 allocate 가 이미 할당된 변수를 또 할당하는 셈이 되어 런타임 오류가 난다. 회차 끝에서 deallocate 하거나 할당가능 대입으로 바꾼다",
        "컴파일 단계에서 미리 걸러진다",
        "첫 회차부터 오류가 난다"
      ],
      hint: "자동 해제는 반복문이 아니라 프로그램 단위가 끝날 때 일어난다." },

    /* ===================== 실습 · 절별 보충 예제 ===================== */

    { id: 39, section: "practice", topic: "9.1.1 경계 지정", type: "line",
      title: "하한과 상한을 직접",
      question: "동적 배열 <code>v</code> 를 첨자가 −2부터 2까지가 되도록 할당하는 문장을 쓰시오.",
      hint: "괄호 안에 하한:상한 을 적는다." },

    { id: 40, section: "practice", topic: "9.1.1 경계 지정", type: "text",
      title: "음수 하한일 때의 길이",
      question: "<code>allocate(v(-2:2))</code> 로 잡은 배열의 <code>size(v)</code> 는? 숫자만 쓰시오.",
      hint: "상한 − 하한 + 1" },

    { id: 41, section: "practice", topic: "9.1.3 여러 배열", type: "line",
      title: "한 문장에 여러 배열",
      question: "<code>x</code> 를 크기 2, <code>y</code> 를 크기 3, <code>z</code> 를 크기 4로 <b>한 문장</b>에 할당하시오.",
      hint: "쉼표로 나열하면 된다." },

    { id: 42, section: "practice", topic: "9.2.1 가정형상", type: "line",
      title: "가정형상 더미 선언",
      question: "서브루틴이 실수 1차원 배열 <code>x</code> 를 <b>읽기 전용</b> 가정형상 더미 인수로 받도록 선언하는 줄을 쓰시오.",
      hint: "intent 를 붙이고 차원은 콜론으로 적는다." },

    { id: 43, section: "practice", topic: "9.2.1 가정형상", type: "text",
      title: "가정형상 배열의 하한",
      question: "가정형상 더미 <code>x(:)</code> 로 받은 배열의 <code>lbound(x, 1)</code> 은 호출 측 형상과 무관하게 항상 얼마인가? 숫자만 쓰시오.",
      hint: "호출한 쪽의 하한을 그대로 물려받지는 않는다." },

    { id: 44, section: "practice", topic: "9.2.2 자동 배열", type: "line",
      title: "임시 작업 공간",
      question: "가정형상 더미 <code>x</code> 와 같은 크기의 정수 <b>자동 배열</b> <code>work</code> 를 프로시저 안에 선언하는 줄을 쓰시오.",
      hint: "크기 자리에 조회 함수를 그대로 쓴다. allocate 는 부르지 않는다." },

    { id: 45, section: "practice", topic: "9.2.3 2차원 가정형상", type: "line",
      title: "2차원 가정형상 더미",
      question: "서브루틴이 실수 <b>2차원</b> 배열 <code>a</code> 를 읽기 전용 가정형상 더미 인수로 받도록 선언하는 줄을 쓰시오.",
      hint: "콜론을 쉼표로 나눠 두 개 적는다." },

    { id: 46, section: "practice", topic: "9.3.1 묵시적 do", type: "line",
      title: "묵시적 do로 자동 할당",
      question: "미할당 정수 동적 배열 <code>u</code> 에 1부터 6까지의 제곱을 묵시적 do 로 채워 자동 할당되게 하는 문장을 쓰시오.",
      hint: "allocate 를 따로 부르지 않는다." },

    { id: 47, section: "practice", topic: "9.3.2 축소 재할당", type: "text",
      title: "더 작게 재할당",
      question: "크기 5였던 동적 배열 <code>v</code> 에 <code>v = [7.0, 8.0, 9.0]</code> 을 대입하면 <code>size(v)</code> 는? 숫자만 쓰시오.",
      hint: "자동 재할당은 늘릴 때만 일어나는 것이 아니다." },

    { id: 48, section: "practice", topic: "9.3.3 move_alloc", type: "line",
      title: "소유권 넘기기",
      question: "<code>src</code> 의 메모리를 복사 없이 <code>dst</code> 로 옮기는 문장을 쓰시오.",
      hint: "서브루틴이므로 call 로 부른다." },

    { id: 49, section: "practice", topic: "9.3.3 move_alloc", type: "text",
      title: "옮긴 뒤의 상태",
      question: "<code>call move_alloc(src, dst)</code> 실행 후 <code>allocated(src)</code> 와 <code>allocated(dst)</code> 를 차례로 출력하면? 두 글자를 빈칸으로 띄어 쓰시오.",
      hint: "소유권이 한쪽으로 넘어간다." },

    { id: 50, section: "practice", topic: "9.4.1 격자 만들기", type: "line",
      title: "구간을 등분한 격자",
      question: "구간 [−1, 1] 을 <code>n</code> 등분한 격자점을 <code>x(i+1)</code> 에 넣는 문장을 한 줄로 쓰시오. <code>i</code> 는 0부터 <code>n</code> 까지 도는 정수이며, 나눗셈이 정수가 되지 않도록 변환하시오.",
      hint: "왼쪽 끝에서 시작해 전체 길이 2를 n등분한 간격을 i만큼 더한다." }
  ]
};
