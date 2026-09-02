/* ============================================================
   answer/fort_prac_05_answers.src.js — 5장 평문 정답 (강사용 원본)

   ★ 이 파일은 GitHub에 올리지 마세요. .gitignore 로 막아 두었습니다.
   ★ 고친 뒤에는 answer/build_05.html 을 열어 정답 파일을 다시 만드세요.
   ============================================================ */

window.ANSWER_SOURCE = {

  /* ---------- 복습 ---------- */
  1:  { answers: ["if (x > 0.0_real64) then"],
        explanation: "if (x > 0.0_real64) then 이다. 블록 if 는 조건을 괄호로 묶고 then 으로 열어 end if 로 닫는다. 한 문장만 실행하면 되는 경우에는 then 없이 논리 if 한 줄로 써도 된다." },

  2:  { answers: ["1"],
        explanation: "부동소수점을 == 로 비교하면 절단 오차 때문에 오작동할 수 있기 때문이다. 그래서 >(양수)와 <(음수)라는 부등호로 두 영역을 먼저 걸러 내고, 어디에도 속하지 않는 남은 지점을 else 로 받는 설계가 안전하다." },

  3:  { answers: ["negative"],
        explanation: "negative 다. x 가 -3.5 이므로 첫 조건 x > 0 은 거짓, 두 번째 조건 x < 0 이 참이 되어 그 가지만 실행된다. 처음으로 참이 된 가지 하나만 실행되고 나머지는 검사하지 않는다." },

  4:  { answers: ["case (90:)"],
        explanation: "case (90:) 다. 콜론의 오른쪽을 비워 두면 상한이 없는 열린 범위가 된다. 반대로 case (:59) 는 59 이하를 모두 받는다." },

  5:  { answers: ["case (80:89)"],
        explanation: "case (80:89) 다. 80 이상 89 이하의 닫힌 범위다. 다른 case 와 구간이 겹치면 컴파일 오류가 나므로 경계를 겹치지 않게 잡아야 한다." },

  6:  { answers: ["b"],
        explanation: "b 다. 84는 case (80:89) 에 들어간다. 앞선 case (90:) 이 거짓이므로 그다음 가지가 선택된다." },

  7:  { answers: ['case ("thu", "fri")', 'case ("fri", "thu")'],
        explanation: 'case ("thu", "fri") 다. 쉼표로 후보를 나열하면 그중 하나만 일치해도 같은 가지가 실행된다. 문자형도 정수처럼 콜론으로 범위를 줄 수 있다.' },

  8:  { answers: ["wednesday"],
        explanation: "wednesday 다. code 가 \"wed\" 이므로 case (\"wed\") 가지가 실행된다. 나머지 문자열은 case default 가 weekend 로 묶어 처리한다." },

  9:  { answers: ["do i = 1, 5, 2"],
        explanation: "do i = 1, 5, 2 다. 세 번째 값이 증감폭이고 생략하면 1이다. 반복 횟수는 (끝값 − 시작값 + 증감폭) ÷ 증감폭 = (5 − 1 + 2) ÷ 2 = 3 으로 진입 직전에 고정된다. i 는 1, 3, 5 로 움직인다." },

  10: { answers: ["do concurrent (i = 1:5)"],
        explanation: "do concurrent (i = 1:5) 다. 일반 do 와 달리 범위를 콜론으로 적는다. 실행 순서가 보장되지 않으므로 반복 간 의존성이 없는 계산에만 쓴다. 내부에 exit, cycle, print 같은 문장도 제한된다." },

  11: { answers: ["integer(int64) :: result"],
        explanation: "integer(int64) :: result 다. 계승은 값이 빠르게 커져서 기본 32비트 정수(약 21억)로는 금세 넘친다. 레거시 표기 integer*8 대신 iso_fortran_env 의 int64 를 쓰는 것이 표준이고 이식성도 높다." },

  12: { answers: ["result = result * k"],
        explanation: "result = result * k 다. 합을 구할 때의 total = total + i 와 같은 누적 꼴이다. 앞 반복의 결과를 다음 반복이 이어받으므로 이런 코드는 do concurrent 로 바꾸면 안 된다." },

  13: { answers: ["do while (value > threshold)"],
        explanation: "do while (value > threshold) 다. 종료 판정을 == 가 아니라 부등호로 그은 것이 핵심이다. 실수에 동치 비교를 쓰면 그 순간을 영영 만나지 못해 무한 반복에 빠질 수 있다." },

  14: { answers: ["10"],
        explanation: "10번이다. 10번 반으로 자르면 (1/2)^10 = 1/1024 ≈ 0.00097656 이 되어 임계값 0.001 보다 작아지므로 조건이 거짓이 되어 빠져나온다. 9번째까지는 아직 0.00195 로 임계값보다 크다." },

  15: { answers: ["if (mod(i, skip_factor) == 0) cycle"],
        explanation: "if (mod(i, skip_factor) == 0) cycle 이다. 논리 if 는 조건이 참일 때 오른쪽 문장 하나만 실행한다. cycle 이 걸리면 아래 print 로 내려가지 않고 곧장 다음 바퀴로 넘어간다." },

  16: { answers: ["exit search"],
        explanation: "exit search 다. 이름 없이 exit 만 쓰면 가장 가까운 안쪽 반복만 벗어나고 바깥 반복은 계속 돈다. 바깥 do 에 search: 라는 이름을 붙여 두었으므로 exit search 가 두 반복을 한 번에 벗어난다." },

  17: { answers: ["45"],
        explanation: "45다. i 를 1부터 올리며 j 를 1~9까지 훑는데, i 가 4일 때는 최대 4 × 9 = 36 으로 40을 넘지 못한다. i = 5, j = 9 에서 45가 되어 처음 임계값을 넘고 그 자리에서 exit search 가 걸린다." },

  18: { answers: ["x = real(i, real64) / real(steps, real64)"],
        explanation: "x = real(i, real64) / real(steps, real64) 다. 반복 횟수는 오차가 없는 정수로 세고, 실수 값은 매 바퀴 인덱스로부터 새로 계산한다. 이렇게 하면 0.1 을 누적할 때 생기는 오차가 아예 끼어들지 못한다." },

  /* ---------- 이론 ---------- */
  19: { answers: ["1"],
        explanation: "위에서부터 검사해 처음으로 참이 되는 가지 하나만 실행된다. 그 뒤의 가지는 조건이 참이더라도 검사조차 하지 않고 건너뛴다. 그래서 좁은 조건을 위쪽에 두는 것이 보통이다." },

  20: { answers: ["0"],
        explanation: "각 case 의 값은 상수 식이어야 하며 변수는 쓸 수 없다. 정수·문자·논리형 스칼라만 가능하고 실수는 안 된다. 유동적인 변수끼리 비교해 갈래를 나눠야 한다면 select case 를 포기하고 if ... else if 를 써야 한다." },

  21: { answers: ["case default"],
        explanation: "case default 다. if 문의 else 와 같은 역할이다. case default 가 없는데 어떤 case 에도 맞지 않으면 아무 가지도 실행되지 않고 조용히 넘어간다." },

  22: { answers: ["integer"],
        explanation: "정수형(integer)이어야 한다. 실수 반복 변수는 부동소수점 오차로 반복 횟수가 어긋날 수 있어 현행 표준에서 삭제된 기능이며, -std= 옵션을 켜면 Deleted feature 오류가 난다." },

  23: { answers: ["1"],
        explanation: "루프에 들어가는 순간 (끝값 − 시작값 + 증감폭) ÷ 증감폭 으로 한 번 계산되어 고정된다. 본문에서 끝값 변수를 바꿔도 이미 정해진 횟수는 달라지지 않는다. 실행 도중 조건이 뒤틀려 무한 루프에 빠지는 것을 막는 설계다." },

  24: { answers: ["0"],
        explanation: "반복 횟수를 미리 알 수 없고 어떤 조건이 만족될 때까지 돌려야 하는 상황에 알맞다. 뉴턴 반복처럼 오차가 허용 한계 아래로 떨어질 때까지 도는 수렴 판정이 대표적이다. 대신 본문에서 조건식의 값을 바꿔 주지 않으면 무한 루프가 된다." },

  25: { answers: ["1"],
        explanation: "cycle 은 현재 반복의 남은 본문을 건너뛰고 다음 반복으로 넘어가고, exit 는 반복 자체를 즉시 벗어난다. 둘 다 이름을 붙이면 바깥 반복을 가리킬 수 있다." },

  26: { answers: ["1"],
        explanation: "안쪽 반복에서 어떤 조건을 만났을 때 안쪽뿐 아니라 바깥 반복까지 한 번에 벗어나야 하는 상황이다. 이름 없는 exit 는 가장 가까운 안쪽 반복에만 작용하므로, 바깥 구문에 이름을 붙이고 exit name 으로 직접 가리킨다." },

  27: { answers: ["0"],
        explanation: "첫째, 실행 순서를 보장하지 않는다. 어떤 순서로든, 또는 동시에 실행될 수 있다. 둘째, 각 반복이 서로 독립적이어야 하며 한 반복의 결과가 다른 반복에 영향을 주면 안 된다. 이 약속 덕분에 컴파일러가 벡터화나 병렬화를 마음껏 적용할 수 있다." },

  28: { answers: ["1"],
        explanation: "total = total + i 는 한 반복의 결과를 다음 반복이 이어받는 누적이라 반복 간 의존성이 있다. do concurrent 는 반복이 서로 독립이고 순서에 무관하다고 가정하므로, 이런 누적을 순서 없이 실행하면 결과가 달라지거나 정의되지 않는다. 일반 do 를 써야 한다." },

  29: { answers: ["1"],
        explanation: "stop 은 코드를 생략하거나 0이면 정상 종료로 간주되어 종료 상태 0을 돌려준다. error stop 은 0이 아닌 상태를 돌려주어 셸이나 상위 프로그램이 오류로 끝났음을 인식하게 한다. 자동화 스크립트가 다음 단계로 넘어갈지 판단하는 근거가 된다." },

  30: { answers: ["1"],
        explanation: "부동소수점은 이진수로 정확히 표현되지 않는 값이 많아 기대한 값과 정확히 같아지는 순간이 오지 않을 수 있다. 그러면 종료 조건을 영영 만나지 못해 무한 반복에 빠진다. 부등호나 허용 오차 abs(a - b) < tol 로 판정해야 한다." },

  31: { answers: ["1"],
        explanation: "0.1 같은 값은 이진 부동소수점으로 정확히 표현되지 않아, 반복 변수에 계속 더하면 오차가 쌓인다. 그 결과 마지막 바퀴에서 끝값을 넘었다고 판단되어 반복이 한 번 덜 돌 수 있다. 정수로 세고 실수 값은 인덱스로부터 다시 계산하면 이 문제가 없다." },

  32: { answers: ["1"],
        explanation: "real64 는 표준 모듈 iso_fortran_env 가 제공하는 이름이라 표준을 지키는 어느 컴파일러에서나 같은 뜻(64비트 실수)을 가진다. 반면 real*8 은 표준이 아닌 컴파일러 의존 표기라 이식성이 보장되지 않는다. 정밀도는 바이트 수가 아니라 종류(kind)로 지정한다." },

  33: { answers: ["1 2 3"],
        explanation: "1 2 3 이 출력된다. 반복 횟수가 진입 시점에 3으로 고정되므로, 본문에서 n 을 계속 늘려도 세 번만 돈다. 계수 do 의 trip count 가 고정된다는 성질을 보여주는 문제다." },

  34: { answers: ["1 2 4"],
        explanation: "1 2 4 가 출력된다. i 가 3일 때는 cycle 이 걸려 print 를 건너뛰고, i 가 5일 때는 print 에 닿기 전에 exit 로 반복을 빠져나간다. 그래서 3과 5가 빠진다." },

  35: { answers: ["mid"],
        explanation: "mid 다. 7은 case (6:10) 범위에 들어간다. 앞선 case (1:5) 가 거짓이므로 그다음 가지가 선택되고, case default 까지는 내려가지 않는다." },

  36: { answers: ["1 2"],
        explanation: "1 2 가 마지막 줄이다. i=1, j=1 과 i=1, j=2 를 출력한 뒤 i=1, j=3 에서 i + j 가 4가 되어 exit outer 로 두 반복을 한 번에 벗어난다. 이름이 없었다면 안쪽 j 반복만 빠져나가 i=2 로 계속 이어졌을 것이다." },

  37: { answers: ["1"],
        explanation: "두 case 의 범위 80:89 와 85:95 가 85~89 구간에서 겹치기 때문이다. select case 는 한 값이 두 case 에 동시에 해당하는 것을 허용하지 않으므로 컴파일러가 모호하다고 판단해 빌드를 막는다. 경계를 겹치지 않게 조정해야 한다." },

  38: { answers: ["do i = 0, steps"],
        explanation: "do i = 0, steps 다. 이렇게 하면 총 11번(0부터 10까지) 정확히 돌고, 실수 값은 본문에서 x = real(i, real64) / real(steps, real64) 로 매번 새로 계산한다. 반복 변수를 실수로 두면 Deleted feature: Loop variable must be integer 오류가 난다." },

  /* ---------- 실습 ---------- */
  39: { answers: ["if (y < 0) y = -y"],
        explanation: "if (y < 0) y = -y 다. 조건이 참일 때 실행할 문장이 하나뿐이면 then 과 end if 없이 논리 if 한 줄로 충분하다. 문장이 여러 줄이 되면 블록 if 로 바꿔야 한다." },

  40: { answers: ["23"],
        explanation: "23이다. a = 17, b = 23 이므로 a > b 가 거짓이 되어 else 가지가 실행되고 larger 에 b 가 들어간다. 두 갈래 중 하나를 골라야 하므로 블록 if ... else 가 알맞다." },

  41: { answers: ["yellow"],
        explanation: "yellow 다. code 가 2이므로 case (2) 가지가 실행된다. 단일 정수 값을 각 case 에 그대로 적어 분기하는 가장 기본적인 형태다." },

  42: { answers: ["case (100:199)"],
        explanation: "case (100:199) 다. 양쪽이 닫힌 범위다. case (:99) 와 case (200:) 을 함께 두면 전 구간을 빠짐없이, 겹치지 않게 덮을 수 있다." },

  43: { answers: ["case (:99)"],
        explanation: "case (:99) 다. 콜론의 왼쪽을 비워 두면 하한이 없는 열린 범위가 된다. 반대쪽인 case (200:) 과 짝지어 기억하면 좋다." },

  44: { answers: ["55"],
        explanation: "55다. 1 + 4 + 9 + 16 + 25 = 55. 반복 횟수를 미리 아는 경우라 계수 do 가 알맞다. total 을 0으로 초기화한 뒤 total = total + i * i 를 누적한다." },

  45: { answers: ["do while (value > 0)"],
        explanation: "do while (value > 0) 이다. 정수 나눗셈으로 10씩 나누다 보면 언젠가 0이 되지만 몇 번 만에 그렇게 될지는 미리 알 수 없다. 이렇게 횟수를 모르는 반복에 do while 이 알맞다." },

  46: { answers: ["4"],
        explanation: "4다. 9042 → 904 → 90 → 9 → 0 으로 네 번 나누면 0이 되므로 자릿수는 4다. 정수 나눗셈이 소수부를 버리는 성질을 그대로 이용한 계산이다." },

  47: { answers: ["11"],
        explanation: "11이다. 10의 제곱은 100이라 100보다 크다는 조건을 만족하지 않고, 11의 제곱인 121에서 처음 넘는다. 조건을 만족하는 순간 exit 로 반복을 끝내면 남은 계산을 하지 않아도 된다." },

  48: { answers: ["cycle rows"],
        explanation: "cycle rows 다. 이름 없는 cycle 은 안쪽 반복의 다음 바퀴로만 넘어가지만, cycle rows 는 이름이 rows 인 바깥 반복의 다음 회차로 곧장 건너뛴다. 그래서 각 i 에서 j = 1 만 처리되고 나머지는 모두 건너뛴다." },

  49: { answers: [
          "do concurrent (i = 1:10, mod(i, 2) == 0)",
          "do concurrent (i = 1:10, modulo(i, 2) == 0)"
        ],
        explanation: "do concurrent (i = 1:10, mod(i, 2) == 0) 이다. 범위 뒤에 쉼표를 찍고 마스크 식을 두면 조건이 참인 인덱스에 대해서만 본문이 실행된다. 홀수 인덱스는 아예 건너뛴다." },

  50: { answers: ["error stop 2"],
        explanation: "error stop 2 다. 0이 아닌 종료 상태를 돌려주어 셸이나 상위 프로그램이 이 종료를 오류로 인식하게 한다. 반면 stop 은 코드를 생략하거나 0이면 정상 종료로 처리되어 상태 0을 돌려준다." }
};
