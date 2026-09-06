/* ============================================================
   answer/fort_prac_10_answers.src.js — 10장 평문 정답 (강사용 원본)

   ★ 이 파일은 GitHub에 올리지 마세요. .gitignore 로 막아 두었습니다.
   ★ 고친 뒤에는 answer/build_10.html 을 열어 정답 파일을 다시 만드세요.
   ============================================================ */

window.ANSWER_SOURCE = {

  /* ---------- 복습 ---------- */
  1:  { answers: ["function to_fahrenheit(c) result(f)"],
        explanation: "function to_fahrenheit(c) result(f) 다. result 절을 쓰면 머리에는 반환형을 적지 않고, 결과 변수 f 의 형을 선언부에서 real :: f 로 밝힌다. 두 곳에 모두 형을 적으면 중복 선언 오류가 난다." },

  2:  { answers: [
          "f = c * 9.0 / 5.0 + 32.0",
          "f = c * (9.0 / 5.0) + 32.0",
          "f = 9.0 / 5.0 * c + 32.0"
        ],
        explanation: "f = c * 9.0 / 5.0 + 32.0 이다. 9 / 5 처럼 정수로 적으면 정수 나눗셈이 되어 1이 되고 답이 통째로 틀어진다. 1장의 오류 학습에서 다룬 그 함정이 함수 안에서도 똑같이 적용된다." },

  3:  { answers: ["212", "212.0"],
        explanation: "212 다. 100 × 9 ÷ 5 + 32 = 212. 물이 끓는 온도이며, 표의 마지막 줄에 212.0 으로 찍힌다." },

  4:  { answers: ["call circle(r, area, circumference)"],
        explanation: "call circle(r, area, circumference) 다. 실인수 r, area, circumference 가 가인수 radius, a, c 와 적힌 순서대로 짝지어진다. 서브루틴 안에서 a 와 c 에 대입한 값이 호출한 쪽 변수에 그대로 반영된다." },

  5:  { answers: ["a = pi * radius**2", "a = pi * radius ** 2"],
        explanation: "a = pi * radius**2 다. 함수는 값을 하나만 돌려주므로 넓이와 둘레를 함께 얻으려면 서브루틴이 알맞다. 여기서 a 는 가인수이므로 대입한 값이 호출부로 전달된다." },

  6:  { answers: ["c = 2.0 * pi * radius"],
        explanation: "c = 2.0 * pi * radius 다. 반지름 2.5 에서 둘레는 15.7080 이 된다. 넓이와 둘레를 한 번의 호출로 모두 받는 것이 서브루틴의 장점이다." },

  7:  { answers: ["1"],
        explanation: "Type mismatch in argument 'c' at (1); passed INTEGER(4) to REAL(4) 컴파일 오류가 난다. 가인수가 real 인데 정수 리터럴을 넘겼기 때문이다. 100.0 으로 적거나 real(100) 으로 변환해 넘겨야 한다. 내부 프로시저라 컴파일러가 인터페이스를 알고 있어 실행 전에 잡아 준다." },

  8:  { answers: ["counter = counter + 1"],
        explanation: "counter = counter + 1 이다. bump 는 인수가 하나도 없는데도 호스트에 선언된 counter 를 그대로 읽고 쓴다. 이것이 호스트 결합이다. 다만 큰 프로그램에서는 어디서 값이 바뀌는지 추적하기 어려워지므로 인수로 주고받는 편이 낫다." },

  9:  { answers: ["3"],
        explanation: "3이다. 0에서 시작해 세 번 호출하며 1씩 늘어난다. 인수를 하나도 넘기지 않았는데 바깥 변수가 바뀌는 점이 호스트 결합의 힘이자 위험이다." },

  10: { answers: ["real :: triple"],
        explanation: "real :: triple 이다. 외부 프로시저는 호출부와 분리되어 있어 컴파일러가 반환형을 알 수 없는 묵시적 인터페이스 상태다. 그래서 호출하는 쪽에서 형을 직접 알려 줘야 한다." },

  11: { answers: ["0"],
        explanation: "Return type mismatch of function 'triple' ... (UNKNOWN/REAL(4)) 컴파일 오류가 난다. 컴파일러가 반환형을 UNKNOWN 으로 두고 있다가 실제 정의와 어긋난다고 판단하는 것이다. 이런 위험 때문에 특별한 이유가 없다면 내부·모듈 프로시저를 기본으로 쓴다." },

  12: { answers: ["real function square(a)"],
        explanation: "real function square(a) 다. 방식 A 는 머리에 반환형을 직접 적고 함수 이름 자체에 값을 대입한다. result 절을 함께 쓰면 형을 두 번 선언한 셈이 되어 오류가 난다." },

  13: { answers: ["square = a * a", "square = a**2"],
        explanation: "square = a * a 다. 방식 A 에서는 함수 이름을 변수처럼 취급해 값을 대입한다. 다만 되부름 함수에서는 이름이 호출에 쓰이므로 이 방식을 쓸 수 없고 result 절이 필요하다." },

  14: { answers: ["recursive function fact(n) result(n_fact)"],
        explanation: "recursive function fact(n) result(n_fact) 다. 되부름임을 알리는 recursive 와 결과 변수를 지정하는 result 가 모두 필요하다. recursive 를 빠뜨리면 cannot be called recursively, as it is not RECURSIVE 오류가 난다." },

  15: { answers: ["n_fact = n * fact(n - 1)", "n_fact = n * fact(n-1)"],
        explanation: "n_fact = n * fact(n - 1) 이다. 자기 자신을 한 단계 작은 인수로 호출해 문제를 줄여 나간다. fact(5) 는 5 × fact(4) 를 쌓아 두었다가 n 이 1에 닿는 순간부터 역순으로 풀린다." },

  16: { answers: ["120"],
        explanation: "120 이다. 5 × 4 × 3 × 2 × 1 = 120. 0! 과 1! 은 종료 조건에 걸려 둘 다 1이 된다." },

  17: { answers: [
          "y = exp(-0.1 * x) * sin(x)",
          "y = exp(-0.1*x) * sin(x)",
          "y = sin(x) * exp(-0.1 * x)"
        ],
        explanation: "y = exp(-0.1 * x) * sin(x) 다. 지수 감쇠 항이 곱해져 x 가 커질수록 진폭이 잦아든다. 이 한 줄만 바꾸면 데이터 생성 서브루틴과 시각화 코드를 손대지 않고도 다른 곡선을 얻을 수 있다는 점이 프로시저 분리의 이점이다." },

  18: { answers: ["1"],
        explanation: "Missing actual argument for argument 'c' 컴파일 오류가 난다. 셋째 가인수 c 에 대응하는 실인수가 없기 때문이다. 둘레 값이 필요 없더라도 받아 줄 변수를 선언해 세 인수를 모두 넘겨야 한다. 내부 프로시저라서 실행 전에 잡힌다." },

  /* ---------- 이론 ---------- */
  19: { answers: ["0"],
        explanation: "함수는 값을 정확히 하나 돌려주며 y = f(x) 처럼 식 안에서 쓰고, 서브루틴은 call s(...) 문장으로 부르며 값을 식으로 돌려주지 않고 인수를 통해 결과를 0개에서 여러 개까지 돌려준다. 값을 받아 식에 쓰는가, 호출해서 일을 시키는가로 구분하면 헷갈리지 않는다." },

  20: { answers: ["y = f(x)"],
        explanation: "y = f(x) 다. 함수는 식의 일부나 대입문 우변에서 호출한다. 함수를 call 로 부르면 컴파일 오류가 난다." },

  21: { answers: ["call s(x)"],
        explanation: "call s(x) 다. 서브루틴은 값을 식으로 돌려주지 않으므로 독립된 문장으로 부른다. 서브루틴을 y = s(x) + 1 처럼 식 한가운데에 쓰면 컴파일 오류가 난다." },

  22: { answers: ["0"],
        explanation: "가인수는 프로시저를 정의할 때 쓰는 변수로 넘어올 값을 받을 자리이고, 실인수는 호출할 때 실제로 넘기는 값이다. 둘은 이름이 아니라 적힌 위치 순서대로 짝지어진다. 그래서 인수의 순서를 바꿔 넘기면 조용히 엉뚱한 값이 들어간다." },

  23: { answers: ["25.0", "25"],
        explanation: "25.0 이다. square(5.0) 이 25.0 이고 f0.1 서식은 소수 한 자리까지 폭을 최소로 잡아 출력한다." },

  24: { answers: ["contains"],
        explanation: "contains 다. 프로그램 본체 뒤에 이 키워드를 두고 그 아래에 함수와 서브루틴을 정의하면 내부 프로시저가 된다. 내부 프로시저는 호스트의 변수를 그대로 볼 수 있다." },

  25: { answers: ["호스트 결합", "호스트 연관", "host association", "호스트 결합(host association)"],
        explanation: "호스트 결합(host association)이다. 내부 프로시저가 바깥 프로그램에 선언된 변수를 인수로 넘기지 않고도 읽고 쓸 수 있게 해 준다. 편리하지만 남용하면 값이 어디서 바뀌는지 추적하기 어려워진다." },

  26: { answers: ["0"],
        explanation: "내부 프로시저와 모듈 프로시저다. 같은 프로그램이나 모듈 안에 있어 컴파일러가 인수의 개수·형과 반환값을 알 수 있고, 호출이 규격에 맞는지 컴파일 단계에서 점검해 주므로 안전하다. 이것을 명시적 인터페이스라 한다." },

  27: { answers: ["0"],
        explanation: "그 외부 함수의 반환형을 호출하는 쪽 선언부에서 직접 선언해야 한다. 예를 들어 real :: triple 처럼 적는다. 빠뜨리면 Return type mismatch 오류가 난다." },

  28: { answers: ["15"],
        explanation: "15다. 0에 10과 5를 차례로 더한 값이며, add 가 호스트의 total 을 호스트 결합으로 직접 갱신한다. total 은 인수로 넘어간 적이 없다는 점에 주목한다." },

  29: { answers: ["1"],
        explanation: "어떤 변수가 어디서 바뀌는지 추적하기 어려워지기 때문이다. 인수로 주고받으면 프로시저가 무엇을 입력받아 무엇을 바꾸는지 호출부에서 분명히 드러나, 오류를 찾기 쉽고 재사용도 쉽다." },

  30: { answers: ["0"],
        explanation: "함수 이름에 값을 대입하는 전통적 방식과, result(변수) 로 결과 변수를 지정해 그 변수에 대입하는 현대적 방식이다. 되부름 함수에서는 이름이 호출에 쓰이므로 반드시 result 방식을 써야 한다." },

  31: { answers: ["1"],
        explanation: "거짓이다. result 를 쓰면 함수 머리에는 형을 적지 않고, 결과 변수의 형을 선언부에서 선언한다. 양쪽에 모두 적으면 중복 선언 오류가 난다." },

  32: { answers: ["0"],
        explanation: "둘은 같은 형·종류 속성을 가지므로 한 곳에만 선언해야 하며, 양쪽에 모두 선언하면 중복 선언으로 컴파일 오류가 난다. real function cube(a) result(y) 와 real :: y 를 동시에 쓰면 걸린다." },

  33: { answers: ["21"],
        explanation: "21이다. 3 × 7 = 21. i0 서식이라 앞 공백 없이 찍힌다." },

  34: { answers: ["result"],
        explanation: "result 다. function area(r) result(a) 형태가 되며, 결과 변수 a 의 형은 선언부에서 밝힌다." },

  35: { answers: ["recursive"],
        explanation: "recursive 다. 빠뜨리면 cannot be called recursively, as it is not RECURSIVE 오류가 난다. 참고로 Fortran 2018부터는 프로시저가 기본적으로 되부름 가능해져 이 키워드가 필수는 아니지만, 의도를 드러내기 위해 붙이는 편이 좋다." },

  36: { answers: ["0"],
        explanation: "함수 이름이 자기 자신을 호출하는 식의 일부로 쓰이므로, 결과를 담을 별도의 변수가 필요하기 때문이다. 이름에 값을 대입하려 하면 그것이 호출인지 대입인지 구분할 수 없다. 그래서 result 로 지정한 결과 변수에 값을 담아 돌려준다." },

  37: { answers: ["0"],
        explanation: "종료 조건(base case)이 반드시 있어야 한다. 없으면 더 작은 문제로 줄어들지 못하고 자기 자신을 끝없이 호출해, 실행 중에 호출 스택이 넘쳐 스택 오버플로로 비정상 종료한다." },

  38: { answers: ["24"],
        explanation: "24다. 4 × 3 × 2 × 1 = 24. n 이 1에 닿으면 종료 조건이 참이 되어 1을 돌려주고, 쌓여 있던 곱셈이 역순으로 풀린다." },

  /* ---------- 실습 ---------- */
  39: { answers: ["function pi_value() result(p)"],
        explanation: "function pi_value() result(p) 다. 함수는 인수를 받지 않아도 되며, 그때도 빈 괄호를 적는다. 결과 변수 p 의 형은 선언부에서 real :: p 로 밝힌다." },

  40: { answers: ["p = 4.0 * atan(1.0)"],
        explanation: "p = 4.0 * atan(1.0) 이다. atan(1.0) 은 탄젠트가 1이 되는 각, 즉 π/4 라디안이므로 여기에 4를 곱하면 원주율이 된다. 3.14159 를 직접 적는 것보다 정밀하고 매직 넘버도 피할 수 있다." },

  41: { answers: ["call banner()", "call banner"],
        explanation: "call banner() 다. 인수가 없어도 서브루틴은 call 로 부른다. 괄호는 생략해도 되지만 호출임을 분명히 드러내려면 붙이는 편이 낫다." },

  42: { answers: [
          "h = sqrt(a*a + b*b)",
          "h = sqrt(a * a + b * b)",
          "h = sqrt(a**2 + b**2)"
        ],
        explanation: "h = sqrt(a*a + b*b) 다. 피타고라스 정리를 그대로 옮긴 것이며, 3과 4를 넘기면 5가 나온다." },

  43: { answers: ["a = pi * square(r)"],
        explanation: "a = pi * square(r) 다. 같은 호스트에 있는 두 내부 프로시저는 별도의 연결 과정 없이 서로를 부를 수 있다. r 이 2.0 이면 넓이는 12.5664 가 된다." },

  44: { answers: ["d = 0.5 * g * time * time"],
        explanation: "d = 0.5 * g * time * time 이다. g 는 인수로 받지 않았는데도 호스트의 parameter 를 그대로 쓴다. 이것이 호스트 결합이며, 상수처럼 바뀌지 않는 값에 쓰기에 알맞다." },

  45: { answers: ["samples(k) = real(k) ** 2", "samples(k) = real(k)**2"],
        explanation: "samples(k) = real(k) ** 2 다. samples 를 인수로 넘기지 않았는데도 서브루틴이 호스트 배열을 직접 채운다. 정수 k 를 real 로 바꾸지 않으면 정수 제곱이 실수 배열에 들어가게 된다." },

  46: { answers: ["function celsius_to_kelvin(c) result(kelvin)"],
        explanation: "function celsius_to_kelvin(c) result(kelvin) 이다. 결과 변수에 함수 이름과 다른 뜻이 분명한 이름을 주면 본체가 훨씬 읽기 쉬워진다. 이것이 result 절의 실질적인 이점이다." },

  47: { answers: ["flag = (x > 0.0)", "flag = x > 0.0"],
        explanation: "flag = (x > 0.0) 이다. 관계식 자체가 이미 논리값이므로 if 문으로 감쌀 필요가 없다. 결과 변수의 형은 무엇이든 될 수 있으며 여기서는 logical :: flag 로 선언한다." },

  48: { answers: ["0"],
        explanation: "0이다. 0.0 은 양수도 음수도 아니라 마지막 else 가지에 걸린다. 이런 분기형 함수에서는 모든 실행 경로에서 결과 변수에 빠짐없이 값을 대입해야 한다. 한 경로라도 빠뜨리면 쓰레기값이 돌아온다." },

  49: { answers: ["recursive subroutine countdown(n)"],
        explanation: "recursive subroutine countdown(n) 이다. 함수뿐 아니라 서브루틴도 되부름이 된다. 서브루틴은 값을 돌려주지 않으므로 result 절은 필요 없고, 종료 조건에서 return 으로 빠져나온다." },

  50: { answers: ["10"],
        explanation: "10이다. 2 + 0 + 2 + 6 = 10. mod(n, 10) 으로 마지막 자리를 떼고 n / 10 으로 나머지 자리를 넘기며, n 이 10 미만이면 그 값 자체가 답이 되는 것이 종료 조건이다." }
};
