/* ============================================================
   fort_prac_14_problems.js — 14장 문제 본문 (공개 파일)

   정답은 이 파일에 없습니다. answer/fort_prac_14_answers.js 에 있습니다.
   복습 18 · 이론 20 · 실습 12 = 50문항, 한 문항 1점.

   서식 문자열은 따옴표 안쪽을 그대로 비교하므로,
   편집 기술자의 대소문자 변형을 정답으로 함께 인정합니다.
   ============================================================ */

window.PROBLEMS = {
  title: "FORTRAN 14장 실습",
  subtitle: "문자열과 파일 입출력 · 50문제",

  sections: [
    { key: "review",   label: "복습", note: "수업 본문 예제" },
    { key: "theory",   label: "이론", note: "출제 예상 문제은행" },
    { key: "practice", label: "실습", note: "절별 보충 예제" }
  ],

  problems: [

    /* ===================== 복습 · 본문 예제 ===================== */

    { id: 1, section: "review", topic: "14.1 문자열 연산", type: "line",
      title: "이름 두 개 잇기",
      question: "<code>char_basics</code> 예제에서 <code>first</code> 와 <code>last</code> 의 <b>끝 공백을 떼고</b> 사이에 빈칸 하나를 넣어 이어 붙인 결과를 <code>full</code> 에 넣는 문장을 쓰시오.",
      hint: "연결 연산자는 빗금 두 개다. 공백은 직접 넣어야 한다." },

    { id: 2, section: "review", topic: "14.1 문자열 연산", type: "text",
      title: "선언 길이",
      question: "<code>character(len=10) :: first = \"Grace\"</code> 일 때 <code>len(first)</code> 의 값은? 숫자만 쓰시오.",
      hint: "선언할 때 잡아 둔 칸 수를 돌려준다." },

    { id: 3, section: "review", topic: "14.1 문자열 연산", type: "text",
      title: "실제 길이",
      question: "같은 변수에 대해 <code>len_trim(first)</code> 의 값은? 숫자만 쓰시오.",
      hint: "끝쪽 공백을 뺀 유효 글자 수다." },

    { id: 4, section: "review", topic: "14.1 내장 함수", type: "text",
      title: "앞뒤 공백까지 세면",
      question: "<code>character(len=*), parameter :: text = \"  fortran 2018  \"</code> 일 때 <code>len(text)</code> 의 값은? 숫자만 쓰시오.",
      hint: "앞 2칸과 뒤 2칸을 모두 포함한다." },

    { id: 5, section: "review", topic: "14.1 내장 함수", type: "text",
      title: "점의 위치",
      question: "<code>path = \"data/input.csv\"</code> 일 때 <code>index(path, \".\")</code> 의 값은? 숫자만 쓰시오.",
      hint: "앞에서부터 세어 점이 몇 번째 글자인지 본다." },

    { id: 6, section: "review", topic: "14.1 내장 함수", type: "text",
      title: "둘 중 먼저 나오는 것",
      question: "같은 <code>path</code> 에 대해 <code>scan(path, \"/.\")</code> 의 값은? 숫자만 쓰시오.",
      hint: "슬래시나 점 중 하나라도 처음 나오는 위치를 찾는다." },

    { id: 7, section: "review", topic: "14.1 내장 함수", type: "text",
      title: "집합에 없는 첫 글자",
      question: "<code>verify(\"12345x\", \"0123456789\")</code> 의 값은? 숫자만 쓰시오.",
      hint: "숫자가 아닌 첫 글자의 위치를 찾는다." },

    { id: 8, section: "review", topic: "14.1 내장 함수", type: "line",
      title: "마지막 점 찾기",
      question: "파일 경로 <code>path</code> 에서 <b>가장 오른쪽</b> 점의 위치를 <code>dot</code> 에 넣는 문장을 쓰시오.",
      hint: "세 번째 선택 인자를 참으로 주면 뒤에서부터 찾는다." },

    { id: 9, section: "review", topic: "14.1 내장 함수", type: "line",
      title: "확장자만 잘라내기",
      question: "위에서 구한 <code>dot</code> 을 이용해 확장자만 가리키는 <b>부분 문자열 표기</b>를 쓰시오. 표기만 쓰시오.",
      hint: "점 다음 글자부터 끝까지다. 상한을 비워 두면 끝까지 간다." },

    { id: 10, section: "review", topic: "14.2 가변 길이 문자열", type: "line",
      title: "길이를 나중에 정하는 문자열",
      question: "길이를 실행 시점에 정하는 가변 길이 문자열 <code>s</code> 를 선언하는 줄을 쓰시오.",
      hint: "len 자리에 콜론을 두고 속성을 하나 붙인다." },

    { id: 11, section: "review", topic: "14.2 가변 길이 문자열", type: "text",
      title: "이어 붙인 뒤의 길이",
      question: "<code>greeting = \"\"</code> 에서 시작해 <code>greeting = greeting // \"ha\"</code> 를 세 번 반복하면 <code>len(greeting)</code> 은? 숫자만 쓰시오.",
      hint: "두 글자씩 세 번 붙는다." },

    { id: 12, section: "review", topic: "14.3 open", type: "line",
      title: "오류까지 받아 내는 open",
      question: "<code>output.txt</code> 를 덮어쓰기 방식의 쓰기 전용으로 열되, 장치는 자동 할당받고 상태를 <code>ios</code> 에, 오류 메시지를 <code>msg</code> 에 받는 <code>open</code> 문을 쓰시오. 지시자는 newunit, file, status, action, iostat, iomsg 순서로 적으시오.",
      hint: "지시자 여섯 개를 쉼표로 이어 적는다." },

    { id: 13, section: "review", topic: "14.3 inquire", type: "line",
      title: "열기 전에 살펴보기",
      question: "<code>output.txt</code> 의 존재 여부를 <code>found</code> 에, 크기를 <code>fsize</code> 에 받는 <code>inquire</code> 문을 쓰시오. 지시자는 file, exist, size 순서로 적으시오.",
      hint: "파일을 실제로 열지 않고도 상태를 조회한다." },

    { id: 14, section: "review", topic: "14.3 inquire", type: "text",
      title: "줄바꿈까지 센 크기",
      question: "<code>first line</code>(10자)과 <code>second line</code>(11자)이 각각 한 줄씩 들어 있는 파일의 크기는 몇 바이트인가? 숫자만 쓰시오.",
      hint: "각 줄 끝에 눈에 보이지 않는 줄바꿈 문자가 1바이트씩 붙는다." },

    { id: 15, section: "review", topic: "14.4 접근과 형식", type: "line",
      title: "이진 스트림으로 열기",
      question: "<code>values.bin</code> 을 <b>스트림 접근</b>·<b>비서식 형식</b>으로, 덮어쓰기·쓰기 전용으로 여는 <code>open</code> 문을 쓰시오. 지시자는 newunit, file, access, form, status, action 순서로 적으시오.",
      hint: "access 와 form 에 각각 알맞은 영어 단어를 준다." },

    { id: 16, section: "review", topic: "14.5 오류 처리", type: "line",
      title: "파일 끝에서 빠져나오기",
      question: "읽기 상태 코드 <code>ios</code> 가 <b>파일 끝</b>을 뜻할 때 반복문을 빠져나오는 문장을 <b>한 줄</b>로 쓰시오.",
      hint: "표준 질의 함수를 논리 if 와 함께 쓴다." },

    { id: 17, section: "review", topic: "14.6 namelist", type: "line",
      title: "설정 그룹 묶기",
      question: "<code>n_steps</code>, <code>dt</code>, <code>gravity</code> 를 <code>sim_config</code> 라는 이름의 설정 그룹으로 묶어 선언하는 줄을 쓰시오.",
      hint: "그룹 이름을 빗금 두 개 사이에 넣는다." },

    { id: 18, section: "review", topic: "오류 학습", type: "choice",
      title: "헤더를 건너뛰지 않으면",
      question: "첫 줄이 <code>day,temperature</code> 인 csv를 헤더 처리 없이 <code>read(u, *) d, t</code> 로 읽으면?",
      options: [
        "컴파일 단계에서 오류가 난다",
        "Fortran runtime error: Bad integer for item 1 in list input 이 나며 실행이 중단된다",
        "헤더를 자동으로 건너뛰고 첫 데이터를 읽는다",
        "d 에 0이 들어가고 계속 실행된다"
      ],
      hint: "문법에는 문제가 없다. 문자열을 정수로 바꾸려다 실패한다." },

    /* ===================== 이론 · 문제은행 ===================== */

    { id: 19, section: "theory", topic: "14.1 문자형", type: "choice",
      title: "남는 자리는",
      question: "고정 길이 문자형 변수에 선언 길이보다 짧은 값을 대입하면 남는 자리는 무엇으로 채워지는가?",
      options: [
        "오른쪽이 공백으로 채워진다",
        "0 으로 채워진다",
        "쓰레기 값이 남는다",
        "변수의 길이가 대입한 값에 맞춰 줄어든다"
      ],
      hint: "반대로 길이를 넘치면 뒤가 잘린다." },

    { id: 20, section: "theory", topic: "14.1 내장 함수", type: "text",
      title: "len과 len_trim",
      question: "<code>len(\"hello   \")</code> 와 <code>len_trim(\"hello   \")</code> 의 값을 차례로 빈칸으로 띄어 쓰시오. (끝에 공백 세 칸)",
      hint: "하나는 선언 길이, 하나는 끝 공백을 뺀 길이다." },

    { id: 21, section: "theory", topic: "14.1 문자열 연산", type: "choice",
      title: "// 의 기능",
      question: "연산자 <code>//</code> 의 기능은?",
      options: [
        "두 문자열을 이어 붙이는 연결 연산자다",
        "문자열을 나누는 분할 연산자다",
        "주석을 시작한다",
        "정수 나눗셈을 한다"
      ],
      hint: "이어 붙일 때 공백은 자동으로 들어가지 않는다." },

    { id: 22, section: "theory", topic: "14.1 내장 함수", type: "text",
      title: "앞에서 찾기와 뒤에서 찾기",
      question: "<code>index(\"banana\", \"na\")</code> 와 <code>index(\"banana\", \"na\", back=.true.)</code> 의 값을 차례로 빈칸으로 띄어 쓰시오.",
      hint: "banana 에서 na 가 나타나는 자리를 앞뒤로 찾는다." },

    { id: 23, section: "theory", topic: "14.1 내장 함수", type: "text",
      title: "집합의 첫 등장",
      question: "<code>scan(\"a1b2\", \"0123456789\")</code> 의 값은? 숫자만 쓰시오.",
      hint: "숫자 중 하나라도 처음 나오는 위치다." },

    { id: 24, section: "theory", topic: "14.1 내장 함수", type: "choice",
      title: "trim과 adjustl",
      question: "<code>trim</code> 과 <code>adjustl</code> 은 각각 어떤 공백을 처리하는가?",
      options: [
        "trim 은 끝쪽 공백을 제거하고, adjustl 은 앞쪽 공백을 끝으로 옮겨 왼쪽 정렬한다",
        "trim 은 앞쪽 공백을 제거하고, adjustl 은 끝쪽 공백을 제거한다",
        "둘 다 앞뒤 공백을 모두 제거한다",
        "trim 은 길이를 돌려주고 adjustl 은 정렬만 한다"
      ],
      hint: "앞뒤 공백을 모두 없애려면 두 함수를 겹쳐 쓴다." },

    { id: 25, section: "theory", topic: "14.2 가변 길이", type: "choice",
      title: "할당가능 문자열의 이점",
      question: "<code>character(len=:), allocatable</code> 로 선언한 문자열이 고정 길이에 비해 갖는 핵심 이점은?",
      options: [
        "대입하는 값에 맞춰 길이가 자동 재할당되어, 길이를 미리 모르는 문자열을 잘림이나 공백 없이 담을 수 있다",
        "문자열 연산 속도가 빨라진다",
        "대소문자를 자동으로 맞춰 준다",
        "선언할 때 길이를 반드시 적어야 해서 실수가 줄어든다"
      ],
      hint: "파일에서 읽어 들이는 텍스트처럼 길이를 예측할 수 없을 때 쓴다." },

    { id: 26, section: "theory", topic: "14.2 가변 길이", type: "text",
      title: "이어 붙인 길이",
      question: "<code>s = \"ab\"</code> 다음에 <code>s = s // \"cde\"</code> 를 실행하면 <code>len(s)</code> 는? 숫자만 쓰시오.",
      hint: "두 글자와 세 글자를 잇는다." },

    { id: 27, section: "theory", topic: "14.2 가변 길이", type: "choice",
      title: "숫자를 글자로",
      question: "정수 값을 문자열로 바꾸는 표준 방법은?",
      options: [
        "문자 변수를 단위로 삼아 write(buffer, '(i0)') value 처럼 내부 쓰기로 변환한 뒤 필요하면 trim 으로 다듬는다",
        "char() 함수에 정수를 넣으면 된다",
        "정수 변수를 문자 변수에 그대로 대입하면 된다",
        "표준에는 방법이 없어 직접 자릿수를 계산해야 한다"
      ],
      hint: "장치 자리에 파일이 아니라 문자 변수를 적는다." },

    { id: 28, section: "theory", topic: "14.3 open", type: "choice",
      title: "newunit을 쓰는 이유",
      question: "장치 번호를 <code>10</code>, <code>20</code> 처럼 직접 적는 대신 <code>newunit</code> 을 쓰는 이유는?",
      options: [
        "현재 쓰이지 않는 장치 번호를 골라 변수에 돌려주므로 다른 코드가 쓰는 번호와 충돌할 위험이 없다",
        "파일 입출력 속도가 빨라진다",
        "표준에서 숫자 장치 번호를 금지했다",
        "파일 이름을 자동으로 정해 준다"
      ],
      hint: "대형 파이프라인에서 라이브러리끼리 번호가 겹치는 사고를 막는다." },

    { id: 29, section: "theory", topic: "14.3 open", type: "text",
      title: "읽기 전용으로 열기",
      question: "기존 파일을 읽기 전용으로 열 때 <code>status</code> 와 <code>action</code> 에 주는 값을 차례로 빈칸으로 띄어 쓰시오. 따옴표 없이 값만 쓰시오.",
      hint: "이미 있는 파일만 열고, 쓰기는 막는다." },

    { id: 30, section: "theory", topic: "14.3 inquire", type: "text",
      title: "두 줄짜리 파일의 크기",
      question: "<code>ab</code>(2자)와 <code>cde</code>(3자)가 각각 한 줄씩 든 텍스트 파일의 바이트 크기는? 줄바꿈을 포함해 숫자만 쓰시오.",
      hint: "각 줄 끝에 1바이트씩 더한다." },

    { id: 31, section: "theory", topic: "14.3 inquire", type: "choice",
      title: "exist와 size",
      question: "<code>inquire</code> 의 <code>exist</code> 와 <code>size</code> 는 각각 무엇을 알려 주는가?",
      options: [
        "exist 는 파일의 존재 여부를, size 는 파일 크기(바이트)를 알려 준다. size 는 파일이 존재할 때만 의미가 있다",
        "exist 는 장치의 연결 여부를, size 는 레코드 수를 알려 준다",
        "둘 다 파일 크기를 다른 단위로 알려 준다",
        "exist 는 읽기 권한을, size 는 쓰기 권한을 알려 준다"
      ],
      hint: "존재 여부를 먼저 확인하는 것이 가드 패턴이다." },

    { id: 32, section: "theory", topic: "14.4 접근 방식", type: "choice",
      title: "sequential과 stream",
      question: "sequential 접근과 stream 접근의 차이로 옳은 것은?",
      options: [
        "sequential 은 처음부터 한 레코드씩 차례로 접근하고, stream 은 파일을 바이트의 연속으로 보아 임의 위치에 접근한다",
        "sequential 은 이진 전용, stream 은 텍스트 전용이다",
        "stream 은 순서대로만 읽을 수 있다",
        "둘의 차이는 속도뿐이고 접근 방식은 같다"
      ],
      hint: "csv 처리에는 어느 쪽이 표준인지 떠올린다." },

    { id: 33, section: "theory", topic: "14.4 저장 형식", type: "choice",
      title: "formatted와 unformatted",
      question: "formatted와 unformatted의 차이와, unformatted의 대표적 단점으로 옳은 것은?",
      options: [
        "formatted 는 사람이 읽는 텍스트로, unformatted 는 메모리의 이진 표현 그대로 저장한다. unformatted 는 엔디언·컴파일러 차이로 이식성이 낮다",
        "formatted 가 더 빠르고 unformatted 는 느리다",
        "unformatted 는 정밀도가 떨어진다",
        "formatted 는 배열을 저장할 수 없다"
      ],
      hint: "장기 보존이나 공유용 데이터에는 어느 쪽이 나은지 생각한다." },

    { id: 34, section: "theory", topic: "14.4 저장 형식", type: "text",
      title: "이진 파일의 크기",
      question: "<code>real64</code> 값 다섯 개를 비서식 스트림 파일에 쓰면 파일 크기는 몇 바이트인가? 숫자만 쓰시오.",
      hint: "real64 는 한 개가 8바이트다." },

    { id: 35, section: "theory", topic: "14.4 위치 제어", type: "choice",
      title: "rewind와 backspace",
      question: "<code>rewind</code> 와 <code>backspace</code> 는 파일 위치를 각각 어디로 옮기는가?",
      options: [
        "rewind 는 파일의 맨 앞으로, backspace 는 바로 직전 레코드로 옮긴다",
        "rewind 는 파일의 맨 끝으로, backspace 는 맨 앞으로 옮긴다",
        "둘 다 한 레코드씩 뒤로 옮긴다",
        "rewind 는 한 레코드 앞으로, backspace 는 맨 앞으로 옮긴다"
      ],
      hint: "두 번 읽기 패턴에서 어느 쪽을 쓰는지 떠올린다." },

    { id: 36, section: "theory", topic: "14.5 오류 처리", type: "choice",
      title: "iostat의 값",
      question: "<code>read</code> 의 <code>iostat</code> 이 0일 때와 0이 아닐 때는 각각 무엇을 뜻하는가?",
      options: [
        "0이면 입출력 성공, 0이 아니면 오류나 파일 끝 등 정상 완료가 아닌 상황이다",
        "0이면 파일 끝, 0이 아니면 성공이다",
        "0이면 읽은 항목이 없다는 뜻이다",
        "값의 의미는 컴파일러마다 완전히 다르다"
      ],
      hint: "성공은 어느 컴파일러에서나 0이다." },

    { id: 37, section: "theory", topic: "14.5 오류 처리", type: "choice",
      title: "is_iostat_end를 쓰는 이유",
      question: "파일 끝을 판별할 때 <code>iostat</code> 의 구체적 값을 직접 비교하지 않고 <code>is_iostat_end</code> 를 쓰는 이유는?",
      options: [
        "구체적 오류 코드 값은 컴파일러마다 다르므로, 이식성을 위해 표준 질의 함수로 판별한다",
        "함수 호출이 비교보다 빠르기 때문이다",
        "iostat 값은 읽을 수 없기 때문이다",
        "표준이 iostat 비교를 금지했기 때문이다"
      ],
      hint: "-1 같은 숫자를 코드에 박으면 다른 컴파일러에서 깨진다." },

    { id: 38, section: "theory", topic: "14.6 namelist", type: "choice",
      title: "기본값을 먼저 넣는 이유",
      question: "<code>namelist</code> 로 읽을 변수를 미리 기본값으로 초기화해야 하는 이유는?",
      options: [
        "namelist 읽기는 파일에 없는 항목을 그대로 두므로, 초기화하지 않으면 그 변수가 미초기화 상태로 남아 잘못된 값으로 동작할 수 있다",
        "초기화하지 않으면 컴파일 오류가 나기 때문이다",
        "namelist 는 초기화된 변수만 읽을 수 있기 때문이다",
        "초기화하면 읽기 속도가 빨라지기 때문이다"
      ],
      hint: "설정 파일이 아예 없을 때도 프로그램이 돌아야 한다." },

    /* ===================== 실습 · 절별 보충 예제 ===================== */

    { id: 39, section: "practice", topic: "14.1-1 대문자 변환", type: "line",
      title: "소문자인지 판별",
      question: "ASCII 코드 <code>c</code> 가 소문자 알파벳 범위에 드는지 검사하는 블록 <code>if</code> 의 <b>첫 줄</b>을 쓰시오. 경계값은 <code>iachar</code> 로 구하고 <code>then</code> 까지 쓰시오.",
      hint: "a 이상이고 z 이하인지 본다. 두 조건을 논리곱으로 잇는다." },

    { id: 40, section: "practice", topic: "14.1-2 글자 세기", type: "text",
      title: "s는 몇 번",
      question: "<code>mississippi</code> 에서 <code>s</code> 는 몇 번 나오는가? 숫자만 쓰시오.",
      hint: "한 글자씩 비교하며 센다." },

    { id: 41, section: "practice", topic: "14.1-3 뒤집기", type: "line",
      title: "뒤에서부터 복사",
      question: "길이 <code>n</code> 인 문자열 <code>s</code> 를 뒤집어 <code>r</code> 에 담을 때, <code>i</code> 번째 자리에 넣을 글자를 대입하는 문장을 쓰시오. 부분 문자열 표기를 쓰시오.",
      hint: "원본의 n − i + 1 번째 글자를 가져온다." },

    { id: 42, section: "practice", topic: "14.2-4 단어 잇기", type: "line",
      title: "단어를 이어 붙이기",
      question: "가변 길이 문자열 <code>line</code> 뒤에 <code>words(i)</code> 의 <b>끝 공백을 뗀</b> 값을 이어 붙이는 문장을 쓰시오.",
      hint: "고정 길이 배열 원소라 끝 공백이 붙어 있다." },

    { id: 43, section: "practice", topic: "14.2-5 내부 쓰기", type: "line",
      title: "숫자를 글자로",
      question: "정수 <code>value</code> 를 앞 공백 없이 문자 변수 <code>buffer</code> 에 써 넣는 <b>내부 쓰기</b> 문장을 쓰시오.",
      hint: "장치 자리에 문자 변수를 적고 서식은 폭을 0으로 준다." },

    { id: 44, section: "practice", topic: "14.2-6 길이 변화", type: "text",
      title: "마지막 길이",
      question: "<code>s = \"short\"</code>, <code>s = s // \" and longer\"</code>, <code>s = \"x\"</code> 를 차례로 실행한 뒤 <code>len(s)</code> 는? 숫자만 쓰시오.",
      hint: "마지막 대입이 길이를 다시 정한다." },

    { id: 45, section: "practice", topic: "14.3-7 덧붙이기", type: "text",
      title: "뒤에 이어 쓰기",
      question: "기존 내용을 지우지 않고 파일 끝에 이어 쓰려면 <code>position</code> 지시자에 어떤 값을 주는가? 따옴표 없이 값만 쓰시오.",
      hint: "'덧붙이다'를 뜻하는 영어 단어다." },

    { id: 46, section: "practice", topic: "14.3-8 연결 상태", type: "line",
      title: "장치가 열려 있나",
      question: "장치 번호 <code>u</code> 가 현재 열려 있는지 <code>is_open</code> 에 받는 <code>inquire</code> 문을 쓰시오.",
      hint: "파일 이름이 아니라 장치 번호로 조회한다." },

    { id: 47, section: "practice", topic: "14.3-9 임시 파일", type: "text",
      title: "닫으면 사라지는 파일",
      question: "이름 없는 임시 파일을 만들고 <code>close</code> 에서 자동으로 지워지게 하려면 <code>status</code> 에 어떤 값을 주는가? 따옴표 없이 값만 쓰시오.",
      hint: "다섯 가지 status 값 중 하나다." },

    { id: 48, section: "practice", topic: "14.4-11 바이트 위치", type: "text",
      title: "다섯 글자를 쓰고 나면",
      question: "스트림 접근으로 <code>ABCDE</code> 다섯 글자를 쓴 뒤 <code>inquire(unit=u, pos=pos)</code> 로 얻는 위치는? 숫자만 쓰시오.",
      hint: "다음에 쓸 자리를 알려 준다. 1부터 센다." },

    { id: 49, section: "practice", topic: "14.4-12 backspace", type: "text",
      title: "한 줄 물러나 다시 읽으면",
      question: "10, 20, 30 이 든 파일을 세 번 읽어 마지막에 30 을 얻은 뒤 <code>backspace</code> 하고 한 번 더 읽으면? 숫자만 쓰시오.",
      hint: "직전 레코드로 물러난다." },

    { id: 50, section: "practice", topic: "14.5-15 비전진 읽기", type: "text",
      title: "첫 레코드의 글자 수",
      question: "<code>hello</code> 한 줄이 든 파일을 <code>advance=\"no\"</code> 로 한 글자씩 읽다가 <code>is_iostat_eor</code> 로 멈추면 센 글자 수는? 숫자만 쓰시오.",
      hint: "레코드 끝을 만나기 전까지 센다." }
  ]
};
