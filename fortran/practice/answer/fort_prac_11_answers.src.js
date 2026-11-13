/* ============================================================
   answer/fort_prac_11_answers.src.js — 11장 평문 정답 (강사용 원본)

   ★ 이 파일은 GitHub에 올리지 마세요. .gitignore 로 막아 두었습니다.
   ★ 고친 뒤에는 answer/build_11.html 을 열어 정답 파일을 다시 만드세요.
   ============================================================ */

window.ANSWER_SOURCE = {

  /* ---------- 복습 ---------- */
  1:  { answers: ["real(real64), intent(in) :: radius"],
        explanation: "real(real64), intent(in) :: radius 다. 읽기 전용이므로 서브루틴 안에서 값을 바꾸려 하면 Dummy argument 'radius' with INTENT(IN) in variable definition context 오류가 컴파일 단계에서 난다. 호출부의 원본 변수를 보호하는 안전장치다." },

  2:  { answers: ["real(real64), intent(out) :: a, p", "real(real64), intent(out) :: p, a"],
        explanation: "real(real64), intent(out) :: a, p 다. 함수는 값을 하나만 돌려주므로 넓이와 둘레를 함께 내보내려면 서브루틴에 intent(out) 가인수를 두 개 둔다. 들어올 때의 값은 정의되지 않은 것으로 취급되므로 읽기 전에 반드시 먼저 대입해야 한다." },

  3:  { answers: ["a = pi * radius**2", "a = pi * radius ** 2"],
        explanation: "a = pi * radius**2 다. pi 는 호스트의 명명 상수이며, 결과를 intent(out) 가인수 a 에 대입하면 호출부의 area 로 그대로 전달된다." },

  4:  { answers: ["call circle(r, area, perimeter)"],
        explanation: "call circle(r, area, perimeter) 다. 실인수 r, area, perimeter 가 가인수 radius, a, p 와 적힌 순서대로 짝지어진다. 이름이 아니라 위치가 기준이다." },

  5:  { answers: ["real(real64), intent(inout) :: acc"],
        explanation: "real(real64), intent(inout) :: acc 다. 누산기는 들어온 값을 읽어 거기에 더한 뒤 다시 내보내야 하므로 읽기와 쓰기가 모두 필요하다. intent(out) 을 쓰면 이전 합이 사라져 누적이 성립하지 않는다." },

  6:  { answers: ["acc = acc + x**2", "acc = acc + x ** 2"],
        explanation: "acc = acc + x**2 다. 등호 오른쪽에서 acc 를 읽고 왼쪽에 다시 쓰는 전형적인 누적 꼴이며, 이것이 intent(inout) 이 필요한 이유를 그대로 보여준다." },

  7:  { answers: ["55", "55.0"],
        explanation: "55다. 1 + 4 + 9 + 16 + 25 = 55. 출력은 f8.1 서식이라 55.0 으로 찍힌다." },

  8:  { answers: ["19.6350", "19.635"],
        explanation: "19.6350 이다. π × 2.5² = 19.6350. 같은 반지름에서 둘레는 15.7080 이 된다. intent(in) 인 radius 는 서브루틴이 건드릴 수 없으므로 호출 후에도 2.5 그대로다." },

  9:  { answers: [
          "real(real64), intent(in), optional :: mu, sigma",
          "real(real64), optional, intent(in) :: mu, sigma",
          "real(real64), intent(in), optional :: sigma, mu"
        ],
        explanation: "real(real64), intent(in), optional :: mu, sigma 다. optional 속성이 붙으면 호출할 때 생략할 수 있다. 다만 이 기능은 명시적 인터페이스가 확보된 상태에서만 동작하므로 내부·모듈 프로시저로 두어야 한다." },

  10: { answers: ["if (present(mu)) center = mu"],
        explanation: "if (present(mu)) center = mu 다. present 는 그 인수가 호출 시 실제로 전달되었는지를 논리값으로 돌려준다. 확인 없이 곧바로 쓰면 존재하지 않는 메모리를 참조해 세그멘테이션 오류로 이어진다." },

  11: { answers: [
          "y = exp(-0.5_real64 * ((x - center) / width)**2)",
          "y = exp(-0.5_real64 * ((x - center) / width) ** 2)"
        ],
        explanation: "y = exp(-0.5_real64 * ((x - center) / width)**2) 다. 괄호 안 전체를 제곱해야 하므로 바깥 괄호가 필요하다. 리터럴에 _real64 를 빠뜨리면 그 자리에서 정밀도를 잃는다." },

  12: { answers: ["power(base=2.0_real64, exponent=10.0_real64)"],
        explanation: "power(base=2.0_real64, exponent=10.0_real64) 다. 이름=값 형태로 적으면 정의된 순서와 무관하게 배치할 수 있어, exponent 를 먼저 적어도 같은 결과가 나온다. 인수가 많은 프로시저에서 호출문의 뜻이 훨씬 분명해진다." },

  13: { answers: ["1024", "1024.0", "1024.0000"],
        explanation: "1024 다. 2의 10제곱이며 출력은 f12.4 서식이라 1024.0000 으로 찍힌다." },

  14: { answers: ["gaussian(x, sigma=sigmas(j))"],
        explanation: "gaussian(x, sigma=sigmas(j)) 다. x 는 위치 인수로 앞에 두고, 가운데 인수 mu 를 건너뛰어 sigma 만 지정하려면 반드시 키워드를 붙여야 한다. 위치 인수는 언제나 키워드 인수보다 앞에 와야 한다." },

  15: { answers: ["real(real64), intent(in) :: v(:)"],
        explanation: "real(real64), intent(in) :: v(:) 다. 크기 자리를 콜론으로 비우면 실인수의 형상을 그대로 물려받는다. 덕분에 길이가 5든 500이든 같은 서브루틴을 그대로 재사용할 수 있다." },

  16: { answers: [
          "stddev = sqrt(sum((v - mean)**2) / real(n, real64))",
          "stddev = sqrt(sum((v - mean) ** 2) / real(n, real64))"
        ],
        explanation: "stddev = sqrt(sum((v - mean)**2) / real(n, real64)) 다. v - mean 은 전체 배열 연산으로 편차 배열을 만들고, 제곱한 뒤 sum 으로 줄인다. 8장의 배열 연산이 가정형상 배열 문맥에서도 그대로 통한다는 점이 핵심이다." },

  17: { answers: ["13.2", "13.2000"],
        explanation: "13.2 다. (4 + 8 + 15 + 16 + 23) ÷ 5 = 66 ÷ 5 = 13.2. 표준편차는 6.6151 이 나온다." },

  18: { answers: ["interface"],
        explanation: "interface 다. interface 로 열고 end interface 로 닫으며, 그 안에 외부 프로시저의 머리와 가인수 선언을 적는다. 이렇게 해야 암시적 인터페이스가 명시적으로 바뀐다." },

  /* ---------- 이론 ---------- */
  19: { answers: ["0"],
        explanation: "intent(in) 은 프로시저가 인수를 읽기만 하고 바꾸지 않음을, intent(out) 은 결과를 써서 내보냄을, intent(inout) 은 들어온 값을 읽고 또 갱신함을 뜻한다. 모든 가인수에 intent 를 명시하면 컴파일러가 의도와 다른 코드를 미리 잡아 준다." },

  20: { answers: ["1"],
        explanation: "읽으면 안 된다. intent(out) 가인수는 프로시저에 들어오는 순간 정의되지 않은 것으로 취급되므로, 먼저 값을 쓰기 전에 읽으면 의미 없는 값을 얻는다. 호출부에 있던 값이 그대로 보인다고 가정해서는 안 된다." },

  21: { answers: ["1"],
        explanation: "intent(out) 은 들어온 값을 버리므로 누산 변수의 이전 합이 사라져 누적이 불가능하다. acc = acc + x 에서 오른쪽 acc 에 무엇이 들어 있는지 알 수 없게 되기 때문이다. 누산기에는 intent(inout) 을 써야 한다." },

  22: { answers: ["0"],
        explanation: "컴파일 단계에서 발생한다. gfortran 은 Dummy argument ... with INTENT(IN) in variable definition context 오류로 거부한다. 실행해 보기 전에 잡히므로 intent 를 붙이는 것만으로 큰 부류의 버그가 예방된다." },

  23: { answers: ["10"],
        explanation: "10이다. add 가 s 에 1, 2, 3, 4 를 차례로 더해 1+2+3+4 = 10 이 된다. acc 가 intent(inout) 이라서 이전 값이 유지된다." },

  24: { answers: ["0"],
        explanation: "present 는 선택적 인수가 호출 시 실제로 전달되었는지를 검사하며, optional 속성을 가진 가인수에 대해서만 의미가 있다. 값이 0인지 아닌지를 보는 것이 아니라 인수 자체의 존재 여부를 본다." },

  25: { answers: ["1"],
        explanation: "전달되지 않은 인수를 사용하는 것은 표준 위반이며, 실행 중 비정상 종료나 예측 불가능한 값으로 이어진다. 컴파일 단계에서 걸리지 않는 경우가 많아 더 위험하다. 반드시 if (present(arg)) 로 확인한 뒤에 참조해야 한다." },

  26: { answers: ["0"],
        explanation: "위치 인수가 모두 키워드 인수보다 앞에 와야 하며, 한 번 키워드 형태를 쓰기 시작하면 그 뒤의 인수는 전부 키워드 형태여야 한다. 값만 적는 것을 앞에 몰아 쓴다고 기억하면 헷갈리지 않는다." },

  27: { answers: ["6.0 8.0"],
        explanation: "6.0 과 8.0 이 두 줄로 나온다. 첫 호출은 by 를 생략해 기본값 1.0 을 더하고(5.0 + 1.0), 둘째 호출은 by=3.0 을 더한다(5.0 + 3.0). 기본값을 먼저 넣어 두고 present 로 덮어쓰는 것이 표준적인 패턴이다." },

  28: { answers: ["1"],
        explanation: "컴파일되지 않는다. 키워드 인수 base=2.0_real64 다음에 위치 인수 8.0_real64 가 왔기 때문이며, gfortran 은 Missing keyword name in actual argument list 오류를 낸다. 뒤의 인수에도 exponent= 를 붙이거나, 둘 다 위치 인수로 적어야 한다." },

  29: { answers: ["0"],
        explanation: "명시적 형상 배열은 v(n) 처럼 선언에 크기를 직접 적고 보통 크기 n 을 별도 인수로 함께 받는다. 가정형상 배열은 v(:) 처럼 콜론으로 비워 두고 실제 형상을 실인수에서 물려받아 size 등으로 알아낸다. 가정형상 쪽이 간결하지만 명시적 인터페이스가 필요하다." },

  30: { answers: ["size ubound", "size, ubound"],
        explanation: "원소 수는 size 로, 상한 인덱스는 ubound 로 얻는다. 하한은 lbound 다. lbound 와 ubound 를 함께 쓰면 호출 측이 첨자를 1부터 시작했든 다른 수부터 시작했든 안전하게 전체를 순회할 수 있다." },

  31: { answers: ["0"],
        explanation: "가정형상 배열은 시작 주소만이 아니라 형상과 보폭을 담은 배열 서술자로 전달된다. 호출하는 쪽이 이 서술자를 만들려면 프로시저의 모양을 미리 알아야 하므로 명시적 인터페이스가 필요하다. 없으면 평범한 주소만 넘어가 실행 중에 무너진다." },

  32: { answers: ["4 20", "size=4 first=20"],
        explanation: "size=4 first=20 이다. a(2:5) 는 원소 4개짜리 단면이고 그 첫 원소는 a(2) 인 20이다. 프로시저 안에서 가정형상 배열의 하한은 언제나 1이므로 그 값이 v(1) 이 된다." },

  33: { answers: ["2 3", "rows=2 cols=3"],
        explanation: "rows=2 cols=3 이다. size(a,1) 은 첫 번째 차원의 크기 2, size(a,2) 는 두 번째 차원의 크기 3을 준다. 2차원에서도 가정형상 선언은 a(:,:) 로 콜론을 나열하면 된다." },

  34: { answers: ["0"],
        explanation: "명시적 인터페이스에서는 컴파일러가 호출 지점에서 프로시저의 인수 개수·종류·속성을 안다. 암시적 인터페이스에서는 그것을 알지 못해 인수 검사를 하지 못한다. 그래서 인수를 빠뜨리거나 형이 어긋나도 조용히 통과해 버린다." },

  35: { answers: ["0"],
        explanation: "내부 프로시저(contains 안에 정의된 것)와 모듈 프로시저(use 로 가져온 것)가 명시적 인터페이스를 자동으로 갖는다. 그래서 특별한 이유가 없다면 모든 프로시저를 이 두 형태로 설계하는 것을 원칙으로 삼는다." },

  36: { answers: ["0"],
        explanation: "프로시저의 머리(header)와 가인수 선언을 적고, 실행문이나 지역 변수는 적지 않는다. 이 블록은 실제 동작이 아니라 호출 규약, 즉 어떤 모양으로 부르면 되는지를 선언하는 자리다." },

  37: { answers: ["1"],
        explanation: "컴파일은 경고 없이 통과하지만, 형상 정보가 담긴 서술자 대신 평범한 주소가 전달되어 실행 중 메모리 참조 오류(세그멘테이션 오류)로 무너진다. 컴파일이 조용히 통과하기 때문에 가장 찾기 어려운 부류의 오류다." },

  38: { answers: ["7.0", "7"],
        explanation: "7.0 이다. 1.5 + 2.5 + 3.0 = 7.0. 인터페이스 블록이 있으므로 외부 함수가 가정형상 배열을 올바르게 받아 배열 서술자가 정상적으로 전달된다." },

  /* ---------- 실습 ---------- */
  39: { answers: ["bmi = mass_kg / height_m**2", "bmi = mass_kg / height_m ** 2"],
        explanation: "bmi = mass_kg / height_m**2 다. 70kg, 1.75m 이면 22.86 이 나온다. 입력 둘은 intent(in), 결과인 bmi 는 intent(out) 으로 두는 것이 이 절의 기본 형태다." },

  40: { answers: ["integer, intent(out) :: quotient, remainder", "integer, intent(out) :: remainder, quotient"],
        explanation: "integer, intent(out) :: quotient, remainder 다. 함수는 값을 하나만 돌려주므로 몫과 나머지를 함께 얻으려면 서브루틴에 intent(out) 을 두 개 둔다. 17 을 5로 나누면 몫 3, 나머지 2 가 나온다." },

  41: { answers: ["real(real64), intent(inout) :: value"],
        explanation: "real(real64), intent(inout) :: value 다. 받은 값을 읽어 구간을 벗어났는지 판단하고, 벗어났으면 같은 변수에 새 값을 써서 돌려주므로 읽기와 쓰기가 모두 필요하다. 12.5 를 [0, 10] 으로 자르면 10.00 이 된다." },

  42: { answers: ["if (present(factor)) f = factor"],
        explanation: "if (present(factor)) f = factor 다. 앞에서 f 에 기본값 1.0 을 넣어 두었으므로, 인수가 전달되지 않으면 그 기본값이 그대로 남는다. 기본값 먼저, present 로 덮어쓰기가 이 패턴의 정석이다." },

  43: { answers: ["area(height=2.5_real64, width=4.0_real64)"],
        explanation: "area(height=2.5_real64, width=4.0_real64) 다. 둘 다 키워드 인수이므로 정의된 순서와 달라도 문제가 없고, width 를 먼저 적은 호출과 똑같이 10.00 이 나온다." },

  44: { answers: ["4"],
        explanation: "4다. round 가 .true. 이므로 nint 로 반올림해 3.7 이 4가 된다. 인수를 생략하면 do_round 가 .false. 로 남아 int 로 버림 처리되어 3이 나온다. 논리형 선택 인수 하나로 동작을 갈라 놓는 흔한 설계다." },

  45: { answers: ["m = sum(a) / real(size(a), real64)"],
        explanation: "m = sum(a) / real(size(a), real64) 다. 가정형상 배열이라 크기를 별도 인수로 받을 필요 없이 size 로 알아낸다. size 는 정수를 돌려주므로 real 로 변환하지 않으면 정수 나눗셈이 섞인다." },

  46: { answers: ["real(real64), intent(in) :: a(n)"],
        explanation: "real(real64), intent(in) :: a(n) 이다. 명시적 형상 방식은 크기 n 을 별도 인수로 함께 받아야 해서 군더더기가 남는다. 이 선언보다 앞에 integer, intent(in) :: n 이 와야 한다는 점도 함께 기억한다." },

  47: { answers: ["do k = 1, size(a, 1)", "do k = 1, size(a,1)"],
        explanation: "do k = 1, size(a, 1) 이다. size 의 둘째 인수가 차원 번호이므로 1이면 행 수를 준다. 정사각 행렬의 대각 원소는 a(k, k) 이며, 예제의 3×3 행렬에서는 11 + 22 + 33 = 66 이 나온다." },

  48: { answers: ["0"],
        explanation: "필요 없다. 내부 프로시저는 명시적 인터페이스를 자동으로 갖는다. 같은 프로그램 단위 안에 있어 컴파일러가 인수의 개수와 형을 이미 알고 있기 때문이다. 인터페이스 블록은 외부 프로시저를 부를 때만 필요하다." },

  49: { answers: ["real(real64), intent(out) :: v(:)"],
        explanation: "real(real64), intent(out) :: v(:) 다. 인터페이스 블록 안에는 실제 정의와 똑같은 머리와 가인수 선언을 적는다. 이 선언이 있어야 컴파일러가 배열 서술자를 만들어 넘겨준다." },

  50: { answers: ["5.00", "5.0", "5"],
        explanation: "5.00 이다. 3² + 0² + 4² = 25 이고 제곱근은 5다. 값을 돌려주는 외부 함수도 가정형상 배열을 받으려면 인터페이스 블록으로 모양을 알려야 한다." }
};
