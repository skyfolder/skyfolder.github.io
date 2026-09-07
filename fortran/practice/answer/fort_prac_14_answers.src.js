/* ============================================================
   answer/fort_prac_14_answers.src.js — 14장 평문 정답 (강사용 원본)

   ★ 이 파일은 GitHub에 올리지 마세요. .gitignore 로 막아 두었습니다.
   ★ 고친 뒤에는 answer/build_14.html 을 열어 정답 파일을 다시 만드세요.
   ============================================================ */

window.ANSWER_SOURCE = {

  /* ---------- 복습 ---------- */
  1:  { answers: [
          'full = trim(first) // " " // trim(last)',
          "full = trim(first) // ' ' // trim(last)"
        ],
        explanation: 'full = trim(first) // " " // trim(last) 다. 연결 연산자 // 는 두 문자열 사이에 어떤 공백도 자동으로 넣지 않으므로 빈칸을 직접 끼워 넣어야 한다. trim 을 빼면 "Grace     Hopper" 처럼 가운데가 벌어진다.' },

  2:  { answers: ["10"],
        explanation: "10이다. len 은 선언할 때 배정받은 고정 길이를 돌려준다. \"Grace\" 는 다섯 글자지만 남는 다섯 칸이 공백으로 채워져 전체 10칸을 점유한다." },

  3:  { answers: ["5"],
        explanation: "5다. len_trim 은 끝쪽 공백을 뺀 유효 글자 수를 돌려준다. len 과 len_trim 의 차이를 아는 것이 문자열 처리의 출발점이다." },

  4:  { answers: ["16"],
        explanation: "16이다. 앞 공백 2칸, fortran 2018 이 12자, 뒤 공백 2칸을 모두 더한 값이다. 참고로 len_trim 은 끝 공백만 빼므로 14가 된다." },

  5:  { answers: ["11"],
        explanation: "11이다. data/input.csv 에서 점은 11번째 글자다. index 는 부분 문자열이 처음 나타나는 위치를 돌려주며, 없으면 0을 준다." },

  6:  { answers: ["5"],
        explanation: "5다. scan 은 지정한 문자 집합 중 어느 하나라도 처음 나오는 위치를 찾는다. 여기서는 5번째의 슬래시가 점보다 먼저 나온다." },

  7:  { answers: ["6"],
        explanation: "6이다. verify 는 집합에 속하지 않는 첫 글자의 위치를 돌려준다. 1부터 5까지는 모두 숫자이므로 건너뛰고, 6번째의 x 에서 멈춘다." },

  8:  { answers: [
          'dot = index(path, ".", back=.true.)',
          "dot = index(path, '.', back=.true.)"
        ],
        explanation: 'dot = index(path, ".", back=.true.) 다. back 을 참으로 주면 끝에서부터 거꾸로 찾으므로, 경로에 점이 여러 개 있어도 확장자 앞의 마지막 점만 정확히 짚어낸다.' },

  9:  { answers: ["path(dot+1:)", "path(dot + 1:)"],
        explanation: "path(dot+1:) 이다. 상한을 비워 두면 그 자리부터 문자열 끝까지 전부를 가리킨다. 경로 길이가 달라져도 확장자만 정확히 잘라낼 수 있다." },

  10: { answers: ["character(len=:), allocatable :: s"],
        explanation: "character(len=:), allocatable :: s 다. len=: 는 길이를 실행 시점에 정하겠다는 뜻이고, 대입할 때마다 우변 길이에 맞춰 자동 재할당된다. 9장 동적 배열의 자동 할당과 같은 규칙이다." },

  11: { answers: ["6"],
        explanation: "6이다. 빈 문자열에서 시작해 두 글자씩 세 번 붙으므로 hahaha 가 되어 길이가 6이다. 반복마다 2, 4, 6 바이트로 실시간 재할당된다." },

  12: { answers: [
          'open(newunit=u, file="output.txt", status="replace", action="write", iostat=ios, iomsg=msg)',
          "open(newunit=u, file='output.txt', status='replace', action='write', iostat=ios, iomsg=msg)"
        ],
        explanation: 'open(newunit=u, file="output.txt", status="replace", action="write", iostat=ios, iomsg=msg) 다. iostat 은 성공 시 0, 실패 시 0이 아닌 코드를 주고, iomsg 는 Permission denied 같은 사람이 읽을 수 있는 원인을 준다. 이 둘을 붙여야 프로그램이 죽지 않고 제어권을 유지한다.' },

  13: { answers: [
          'inquire(file="output.txt", exist=found, size=fsize)',
          "inquire(file='output.txt', exist=found, size=fsize)"
        ],
        explanation: 'inquire(file="output.txt", exist=found, size=fsize) 다. 파일을 열지 않고도 존재 여부와 크기를 미리 조회한다. 다만 파일이 없으면 size 에 쓰레기 값이 들어올 수 있으므로 반드시 exist 를 먼저 확인하는 가드 패턴을 써야 한다.' },

  14: { answers: ["23"],
        explanation: "23바이트다. 글자만 세면 10 + 11 = 21 이지만, 각 줄 끝에 눈에 보이지 않는 줄바꿈 문자가 1바이트씩 붙어 11 + 12 = 23 이 된다." },

  15: { answers: [
          'open(newunit=u, file="values.bin", access="stream", form="unformatted", status="replace", action="write")',
          "open(newunit=u, file='values.bin', access='stream', form='unformatted', status='replace', action='write')"
        ],
        explanation: 'open(newunit=u, file="values.bin", access="stream", form="unformatted", status="replace", action="write") 다. 이 조합은 대용량 수치 배열을 하드웨어 속도로 저장할 때 쓴다. 서식 변환이 없어 빠르고 정밀도 손실도 없지만, 엔디언 차이 때문에 다른 기종에서 읽지 못할 수 있다.' },

  16: { answers: ["if (is_iostat_end(ios)) exit"],
        explanation: "if (is_iostat_end(ios)) exit 다. iostat 의 구체적 코드 값은 컴파일러마다 다르므로 숫자를 직접 비교하지 말고 표준 질의 함수를 써야 이식성이 유지된다. 줄 수를 모르는 파일을 읽는 표준 관용구다." },

  17: { answers: [
          "namelist /sim_config/ n_steps, dt, gravity"
        ],
        explanation: "namelist /sim_config/ n_steps, dt, gravity 다. 이 문장은 변수 선언부와 실행부 사이에 와야 한다. 이렇게 묶어 두면 재컴파일 없이 외부 설정 파일만 고쳐 매개변수를 바꿀 수 있다." },

  18: { answers: ["1"],
        explanation: "Fortran runtime error: Bad integer for item 1 in list input 이 나며 실행이 중단된다. 문법에는 결함이 없어 컴파일은 통과하지만, 헤더의 day 를 정수 d 로 변환하려다 실패하는 것이다. read(u, '(a)') header 로 첫 줄을 미리 소모해야 한다." },

  /* ---------- 이론 ---------- */
  19: { answers: ["0"],
        explanation: "오른쪽이 공백으로 채워진다(blank padding). 반대로 선언 길이보다 긴 값을 대입하면 넘치는 뒷부분이 경고 없이 잘려 나간다." },

  20: { answers: ["8 5"],
        explanation: "len 은 8, len_trim 은 5다. len 은 공백을 포함한 전체 길이를, len_trim 은 끝 공백을 뺀 유효 길이를 돌려준다." },

  21: { answers: ["0"],
        explanation: "두 문자열을 이어 붙이는 연결(concatenation) 연산자다. 사이에 공백이 자동으로 들어가지 않으므로 단어를 띄우려면 \" \" 를 직접 끼워 넣어야 한다." },

  22: { answers: ["3 5"],
        explanation: "앞에서 찾으면 3, back=.true. 를 주면 마지막 일치 위치인 5다. banana 에서 na 는 3번째와 5번째에 나타난다." },

  23: { answers: ["2"],
        explanation: "2다. 집합의 문자(숫자) 중 처음 등장하는 위치가 두 번째 글자 1 이기 때문이다. scan 은 집합에 속한 첫 글자를, verify 는 속하지 않는 첫 글자를 찾는다." },

  24: { answers: ["0"],
        explanation: "trim 은 끝쪽 공백을 제거하고, adjustl 은 앞쪽 공백을 끝으로 옮겨 왼쪽 정렬한다. 앞뒤 공백을 모두 없애려면 trim(adjustl(s)) 처럼 겹쳐 쓴다." },

  25: { answers: ["0"],
        explanation: "대입하는 값에 맞춰 길이가 자동으로 재할당되므로, 길이를 미리 모르는 문자열을 잘림이나 공백 없이 정확히 담을 수 있다. 파일에서 읽어 들이는 텍스트처럼 크기를 예측할 수 없는 데이터에 알맞다." },

  26: { answers: ["5"],
        explanation: "5다. \"ab\" 와 \"cde\" 를 이어 길이 5로 자동 재할당된다. 고정 길이였다면 선언 길이에 따라 잘리거나 공백이 붙었을 것이다." },

  27: { answers: ["0"],
        explanation: "문자 변수를 단위로 삼아 write(buffer, '(i0)') value 처럼 내부 쓰기로 숫자를 글자로 변환한 뒤 필요하면 trim 으로 다듬어 쓴다. 장치 자리에 파일이 아니라 문자 변수를 적는 것이 내부 쓰기다." },

  28: { answers: ["0"],
        explanation: "newunit 은 현재 쓰이지 않는 장치 번호를 골라 변수에 돌려주므로, 다른 코드가 쓰는 번호와 충돌할 위험이 없다. 대형 파이프라인에서 라이브러리끼리 번호가 겹치는 사고를 원천 차단한다." },

  29: { answers: ["old read"],
        explanation: "status=\"old\", action=\"read\" 다. status 를 생략하면 일부 환경에서 새 임시 파일을 만들거나 오류를 내며 멈출 수 있으므로, 읽을 때는 \"old\", 덮어쓸 때는 \"replace\" 를 명시하는 습관을 들인다." },

  30: { answers: ["7"],
        explanation: "7바이트다. ab 2바이트와 줄바꿈 1바이트, cde 3바이트와 줄바꿈 1바이트를 합쳐 7이다. 텍스트 파일 크기를 셀 때 줄바꿈을 빠뜨리기 쉽다." },

  31: { answers: ["0"],
        explanation: "exist 는 파일의 존재 여부를, size 는 파일 크기를 바이트 단위로 알려 준다. size 는 파일이 존재할 때만 의미가 있으므로 exist 로 먼저 확인한 뒤 참인 경로 안에서만 size 를 다뤄야 한다." },

  32: { answers: ["0"],
        explanation: "sequential 은 처음부터 한 레코드씩 차례로 접근하고, stream 은 파일을 바이트의 연속으로 보아 임의 위치에 접근한다. sequential 이 기본값이며 csv 처리의 표준 규격이다." },

  33: { answers: ["0"],
        explanation: "formatted 는 사람이 읽는 텍스트로, unformatted 는 메모리의 이진 표현 그대로 저장한다. unformatted 는 빠르고 정밀도 손실이 없지만 엔디언과 컴파일러 차이로 이식성이 낮아 다른 환경에서 읽지 못할 수 있다." },

  34: { answers: ["40"],
        explanation: "40바이트다. real64 는 한 개가 8바이트이므로 다섯 개면 40바이트다. 같은 값을 텍스트로 저장하면 문자와 개행이 붙어 훨씬 커진다." },

  35: { answers: ["0"],
        explanation: "rewind 는 파일의 맨 앞으로, backspace 는 바로 직전 레코드로 위치를 옮긴다. 파일을 한 번 훑어 행 수를 센 뒤 다시 앞으로 돌아와 읽는 두 번 읽기 패턴에 rewind 를 쓴다." },

  36: { answers: ["0"],
        explanation: "0이면 입출력이 성공한 것이고, 0이 아니면 오류나 파일 끝 등 정상 완료가 아닌 상황이 발생한 것이다. 성공이 0이라는 점은 어느 컴파일러에서나 같지만, 0이 아닌 값의 의미는 구현마다 다르다." },

  37: { answers: ["0"],
        explanation: "iostat 의 구체적 오류 코드 값은 컴파일러마다 다르므로, 이식성을 위해 표준 질의 함수 is_iostat_end 로 파일 끝 여부를 판별한다. -1 같은 숫자를 코드에 박으면 다른 컴파일러에서 깨진다." },

  38: { answers: ["0"],
        explanation: "namelist 읽기는 파일에 없는 항목을 그대로 두기 때문에, 초기화하지 않으면 그 변수가 미초기화 상태로 남아 잘못된 값으로 동작할 수 있다. 설정 파일이 아예 없을 때도 기본값으로 안전하게 돌아가게 하는 방어적 설계다." },

  /* ---------- 실습 ---------- */
  39: { answers: [
          'if (c >= iachar("a") .and. c <= iachar("z")) then',
          "if (c >= iachar('a') .and. c <= iachar('z')) then",
          'if (c >= iachar("a") .and. c <= iachar("z") ) then'
        ],
        explanation: 'if (c >= iachar("a") .and. c <= iachar("z")) then 이다. iachar 는 글자의 ASCII 값을 돌려주므로 경계값을 숫자로 박지 않아도 된다. 소문자 구간이면 achar(c - 32) 로 대문자를 만들 수 있다.' },

  40: { answers: ["4"],
        explanation: "4다. mississippi 에서 s 는 3, 4, 6, 7번째에 나온다. 부분 문자열 s(i:i) 로 한 글자씩 꺼내 비교하며 센다." },

  41: { answers: ["r(i:i) = s(n-i+1:n-i+1)", "r(i:i) = s(n - i + 1:n - i + 1)"],
        explanation: "r(i:i) = s(n-i+1:n-i+1) 이다. 부분 문자열은 좌변으로도 쓸 수 있어 한 글자씩 자리를 지정해 채울 수 있다. i 가 1일 때 원본의 마지막 글자가 들어간다." },

  42: { answers: ["line = line // trim(words(i))"],
        explanation: "line = line // trim(words(i)) 다. words 는 고정 길이 배열이라 짧은 단어 뒤에 공백이 붙어 있으므로 trim 으로 떼어 내야 한다. 좌변이 가변 길이라 붙일 때마다 자동으로 늘어난다." },

  43: { answers: [
          "write(buffer, '(i0)') value",
          "write(buffer, '(I0)') value",
          'write(buffer, "(i0)") value'
        ],
        explanation: "write(buffer, '(i0)') value 다. 장치 자리에 파일이 아니라 문자 변수를 적는 것을 내부 쓰기라 한다. i0 은 앞 공백 없이 필요한 자릿수만 쓰므로 이어 붙이기에 알맞고, 남는 칸은 공백이라 trim 으로 다듬는다." },

  44: { answers: ["1"],
        explanation: "1이다. 5 → 16 → 1 로 길이가 바뀐다. 마지막 대입이 \"x\" 한 글자이므로 길이가 1로 줄어든다. 가변 길이 문자열은 늘어날 때뿐 아니라 줄어들 때도 재할당된다." },

  45: { answers: ["append", '"append"', "'append'"],
        explanation: "append 다. status=\"old\" 로 열면서 position=\"append\" 를 주면 파일 끝으로 위치를 옮겨 기존 내용을 지우지 않고 이어 쓴다. 로그 파일을 다룰 때 자주 쓰는 조합이다." },

  46: { answers: ["inquire(unit=u, opened=is_open)"],
        explanation: "inquire(unit=u, opened=is_open) 이다. inquire 는 file= 로 파일 이름을 주거나 unit= 로 장치 번호를 주어 조회할 수 있다. close 뒤에 다시 조회하면 F 가 나온다." },

  47: { answers: ["scratch", '"scratch"', "'scratch'"],
        explanation: "scratch 다. 이름 없는 임시 파일을 만들고 close 할 때 자동으로 지워진다. 중간 결과를 잠깐 저장했다가 rewind 로 되감아 다시 읽는 용도로 알맞다." },

  48: { answers: ["6"],
        explanation: "6이다. 스트림 접근은 파일을 바이트의 연속으로 보며 위치를 1부터 센다. 다섯 글자를 썼으므로 다음에 쓸 자리는 6번째 바이트다." },

  49: { answers: ["30"],
        explanation: "30이다. 세 번 읽어 30에 도달한 뒤 backspace 로 직전 레코드인 30 앞으로 물러났으므로, 다시 읽으면 같은 30이 나온다. 한 레코드 뒤로 간다는 뜻을 정확히 보여주는 예다." },

  50: { answers: ["5"],
        explanation: "5다. hello 가 다섯 글자이므로 여섯 번째 시도에서 레코드 끝을 만나 is_iostat_eor 가 참이 되어 멈춘다. advance=\"no\" 는 줄바꿈 없이 원하는 크기만큼 나누어 읽는 비전진 입출력이다." }
};
