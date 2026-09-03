/* ============================================================
   answer/fort_prac_07_answers.src.js — 7장 평문 정답 (강사용 원본)

   ★ 이 파일은 GitHub에 올리지 마세요. .gitignore 로 막아 두었습니다.
   ★ 고친 뒤에는 answer/build_07.html 을 열어 정답 파일을 다시 만드세요.
   ============================================================ */

window.ANSWER_SOURCE = {

  /* ---------- 복습 ---------- */
  1:  { answers: [
          "integer :: offset(-2:2)",
          "integer, dimension(-2:2) :: offset"
        ],
        explanation: "integer :: offset(-2:2) 다. 속성 방식으로 integer, dimension(-2:2) :: offset 이라 써도 같다. 하한을 생략하면 1이 되지만, 중심을 0으로 두는 격자나 시간 지연 모델에서는 음수 하한이 코드를 훨씬 직관적으로 만든다." },

  2:  { answers: ["12"],
        explanation: "12다. size 는 전체 요소 개수를 돌려주므로 3 × 4 = 12 다. 특정 차원만 알고 싶으면 size(grid, 1) 처럼 차원 번호를 함께 넘긴다." },

  3:  { answers: ["lbound(offset, 1)"],
        explanation: "lbound(offset, 1) 이다. 첫 번째 차원의 하한을 돌려주므로 −2 가 나온다. 짝이 되는 ubound(offset, 1) 은 상한 2를 돌려준다." },

  4:  { answers: ["1"],
        explanation: "컴파일은 통과하지만 실행 중에 엉뚱한 메모리 값을 읽거나 쓴다. Fortran은 기본적으로 경계 검사를 하지 않기 때문이다. integer :: scores(5) 의 유효 첨자는 1부터 5까지이고 첫 요소는 언제나 scores(1) 이다. 개발 중에는 -fcheck=bounds 를 켜서 이런 접근을 실행 시점에 잡아낸다." },

  5:  { answers: ["squares = [(i * i, i = 1, 6)]", "squares = [(i**2, i = 1, 6)]"],
        explanation: "squares = [(i * i, i = 1, 6)] 이다. 묵시적 do 는 제어 변수 i 를 1부터 6까지 올리며 식을 평가해 값을 차례로 담는다. do 반복문 네 줄이 한 줄로 줄어든다." },

  6:  { answers: [
          "ramp = [(real(i, real64) * 0.5_real64, i = 1, 10)]",
          "ramp = [(0.5_real64 * real(i, real64), i = 1, 10)]"
        ],
        explanation: "ramp = [(real(i, real64) * 0.5_real64, i = 1, 10)] 이다. 정수 i 를 real64 로 변환하지 않으면 정수와 실수가 섞이고, 리터럴에 _real64 를 빠뜨리면 그 자리에서 정밀도를 잃는다. 결과는 0.5 부터 5.0 까지 0.5 씩 커지는 열 개의 값이다." },

  7:  { answers: ["1 4 9 16 25 36"],
        explanation: "1 4 9 16 25 36 이다. i 가 1부터 6까지 변하며 i * i 를 평가한 값이 순서대로 담긴다." },

  8:  { answers: ["2 3 4 3 4 5"],
        explanation: "2 3 4 3 4 5 다. j = 1 일 때 i 가 1→2→3 으로 돌며 2, 3, 4 가 만들어지고, j = 2 일 때 3, 4, 5 가 이어진다. 중첩 묵시적 do 의 결과는 다차원이 아니라 1차원으로 평탄화된다." },

  9:  { answers: ["1"],
        explanation: "안쪽 i 가 먼저 전체 범위를 돌며, 이는 Fortran의 열 우선 저장 순서와 같다. 바깥쪽 j 를 고정한 채 안쪽 i 가 한 바퀴를 다 돌고 나서야 j 가 하나 늘어난다. 결과는 언제나 1차원 배열이다." },

  10: { answers: ["a = [(i, i = 1, 10)]"],
        explanation: "a = [(i, i = 1, 10)] 이다. 좌변 배열의 크기와 생성자가 만든 값의 개수가 정확히 같아야 대입된다. 개수가 어긋나면 Different shape for array assignment 오류가 난다." },

  11: { answers: ["5"],
        explanation: "5개다. 3, 4, 5, 6, 7 번째를 모두 가리킨다. Fortran의 슬라이스는 상한을 포함하므로 요소 수는 end − start + 1 이다. 상한을 포함하지 않는 Python 과 헷갈리기 쉬운 지점이다." },

  12: { answers: ["a(10:1:-1)"],
        explanation: "a(10:1:-1) 이다. 보폭이 음수이면 시작이 끝보다 크거나 같아야 한다. 이 규칙을 어기면 빈 배열이 되거나 오류가 난다." },

  13: { answers: ["a(2:4) = [20, 30, 40]"],
        explanation: "a(2:4) = [20, 30, 40] 이다. 슬라이스는 읽기뿐 아니라 대입의 좌변으로도 쓸 수 있다. 좌변이 가리키는 요소 수(3개)와 우변의 값 개수가 정확히 같아야 한다." },

  14: { answers: ["m(i, j) = i * 10 + j"],
        explanation: "m(i, j) = i * 10 + j 다. 이렇게 채우면 m(2, 3) 이 23 이 되어 값만 봐도 행과 열을 알 수 있다. 예제가 안쪽 반복을 i 로 둔 것은 열 우선 저장 순서에 맞춰 메모리를 순서대로 훑기 위해서다." },

  15: { answers: ["m(:, 2)"],
        explanation: "m(:, 2) 다. 첫 첨자 자리의 콜론은 그 차원 전체를 뜻하므로 2번째 열 전체가 1차원 슬라이스로 잡힌다. 행 전체는 m(1, :) 처럼 둘째 자리에 콜론을 둔다." },

  16: { answers: ["11 12 13 14"],
        explanation: "11 12 13 14 다. i 가 1로 고정되고 j 가 1부터 4까지 변하므로 1 × 10 + j 가 차례로 나온다. 참고로 m(:, 2) 는 12 22 32 다." },

  17: { answers: [
          'write(u, \'(*(f0.6, :, ","))\') field(i, :)',
          'write(u, \'(*(F0.6, :, ","))\') field(i, :)',
          'write(u, \'(*(f0.6,:,","))\') field(i, :)',
          'write(u, \'(*(F0.6,:,","))\') field(i, :)'
        ],
        explanation: "write(u, '(*(f0.6, :, \",\"))') field(i, :) 다. 행 슬라이스를 출력 목록에 그대로 넘기면 그 행의 값이 모두 한 줄에 찍힌다. 서식 안의 콜론 편집 기술자는 남은 값이 없으면 서식 적용을 그 자리에서 끝내므로 줄 끝에 쉼표가 남지 않는다." },

  18: { answers: ["1"],
        explanation: "좌변 슬라이스는 요소가 3개, 우변 생성자는 2개라는 뜻이다. a(2:4) 는 2, 3, 4번째를 가리키므로 end − start + 1 = 3 개다. 우변을 [20, 30, 40] 으로 맞추면 해결된다." },

  /* ---------- 이론 ---------- */
  19: { answers: ["0"],
        explanation: "계수는 배열의 차원 수, 형상은 각 차원의 길이를 모은 것, 경계는 각 차원에서 첨자가 가질 수 있는 하한과 상한이다. grid(3, 4) 라면 계수 2, 형상 [3, 4], 경계 1:3 과 1:4 다." },

  20: { answers: ["a(1)"],
        explanation: "a(1) 이다. 유효 첨자는 1부터 5까지이며 Fortran의 기본 하한은 1이다. C나 Python 습관으로 a(0) 을 쓰면 경계를 벗어난 접근이 된다." },

  21: { answers: ["1"],
        explanation: "거짓이다. 기본 하한은 1이다. 다만 offset(-2:2) 처럼 하한을 직접 지정할 수는 있다." },

  22: { answers: ["15"],
        explanation: "15다. 첫 차원 범위는 4 − 0 + 1 = 5, 둘째 차원 범위는 1 − (−1) + 1 = 3 이므로 곱하면 15다. 계수는 2, 형상은 [5, 3] 이다." },

  23: { answers: ["1"],
        explanation: "상한 − 하한 + 1 이다. bounds 가 1:5 면 5 − 1 + 1 = 5, −2:2 면 2 − (−2) + 1 = 5 로 둘 다 5개가 된다. 배열 전체 크기는 모든 차원 범위를 곱한 값이다." },

  24: { answers: ["0"],
        explanation: "size(a) 는 전체 요소 수, size(a, 2) 는 두 번째 차원의 범위, shape(a) 는 형상을 담은 1차원 배열, lbound(a, 1) 은 첫 번째 차원의 하한을 돌려준다. 네 함수 중 shape 만 결과가 배열이라 dims(2) 같은 변수에 받아 써야 한다." },

  25: { answers: ["(/ 1, 2, 3 /)", "(/1, 2, 3/)"],
        explanation: "(/ 1, 2, 3 /) 이다. Fortran 2003 이후 대괄호 표기가 들어왔고 현대 코드는 대괄호를 쓴다. 옛 표기는 레거시 코드를 읽을 때 알아볼 정도만 익혀 두면 된다." },

  26: { answers: ["2 4 6 8"],
        explanation: "2 4 6 8 이다. k 가 1부터 4까지 변하며 2 * k 를 평가한다." },

  27: { answers: ["1 2 2 4 3 6"],
        explanation: "1 2 2 4 3 6 이다. j = 1 일 때 i 가 1, 2 로 돌며 1, 2 가 만들어지고, j = 2 일 때 2, 4, j = 3 일 때 3, 6 이 이어진다. 안쪽 i 가 바깥쪽 j 보다 빨리 변하며, 이는 열 우선 순서와 같다." },

  28: { answers: ["1"],
        explanation: "거짓이다. 생성자의 모든 값은 같은 자료형과 종류여야 하므로 정수와 실수를 섞으면 Element in INTEGER(4) array constructor at (1) is REAL(4) 오류가 난다. 정수 배열은 [1, 2, 3], 실수 배열은 [1.0, 2.0, 3.0] 처럼 통일하거나 real() 로 변환해 맞춘다." },

  29: { answers: ["1 3 5 7 9"],
        explanation: "1 3 5 7 9 다. start:end:stride 는 start 부터 end 까지 stride 간격으로 고른다. 1, 3, 5, 7, 9 번째 요소이며 값도 같은 배열이라 값 역시 1 3 5 7 9 다." },

  30: { answers: ["9 6 3"],
        explanation: "9 6 3 이다. 9에서 시작해 3씩 줄이며 3까지 간다. 보폭이 음수이므로 시작이 끝보다 커야 한다는 규칙을 지킨 표기다." },

  31: { answers: ["1"],
        explanation: "다섯 개다. Fortran의 슬라이스는 상한을 포함하므로 3, 4, 5, 6, 7 이 모두 잡히고 개수는 end − start + 1 이다. Python은 상한을 포함하지 않아 한 개 적다. 두 언어를 오갈 때 가장 자주 틀리는 지점이다." },

  32: { answers: ["1"],
        explanation: "배열 a 의 2, 3, 4번째 요소만 각각 20, 30, 40 으로 바꾼다. 슬라이스는 대입의 좌변으로 쓸 수 있으며, 이때 좌변 슬라이스의 크기와 우변의 크기가 반드시 같아야 한다." },

  33: { answers: ["0"],
        explanation: "m(:, 2) 는 2열 전체, m(3, :) 는 3행 전체를 가리킨다. 콜론이 놓인 자리의 차원이 통째로 잡히고, 결과는 1차원 슬라이스가 된다." },

  34: { answers: ["1"],
        explanation: "열 우선(column-major)으로 저장하므로 안쪽 반복 변수로 첫 번째 첨자를 두어야 메모리를 순서대로 훑어 캐시 효율이 좋다. m(1,1) → m(2,1) → m(3,1) → m(1,2) 순으로 저장되기 때문이다. 대규모 배열에서는 이 순서 하나로 속도가 수십 배 갈리기도 한다." },

  35: { answers: ["1"],
        explanation: "컴파일 오류다. a(2:4) 는 3개인데 우변은 2개라 Different shape for array assignment ... (3 and 2) 가 난다. 슬라이스 요소 수를 end − start + 1 로 세어 우변을 맞춰야 한다. 컴파일 단계에서 잡히는 친절한 오류다." },

  36: { answers: ["1"],
        explanation: "컴파일 오류다. 좌변 m 은 계수 2, 우변 생성자는 계수 1이라 Incompatible ranks 2 and 1 in assignment 가 난다. 값의 개수가 12개로 맞아도 계수가 다르면 대입할 수 없다. 1차원 값을 2차원으로 바꾸려면 8장의 reshape 를 쓴다." },

  37: { answers: ["-fcheck=bounds", "-fcheck=all", "fcheck=bounds"],
        explanation: "-fcheck=bounds 를 켠다. 더 넓게 잡으려면 -fcheck=all 을 쓴다. 켜 두면 Index '11' of dimension 1 of array 'a' above upper bound of 10 처럼 어느 배열의 어느 차원이 넘쳤는지 알려 준다. 개발 중에는 늘 켜 두고, 검증이 끝나면 성능을 위해 끄고 다시 컴파일한다." },

  38: { answers: ["1"],
        explanation: "data[i, j] 는 Fortran의 field(i+1, j+1) 에 대응한다. Python 첨자가 0부터 시작하기 때문이다. Fortran 첫 첨자 i 가 x, 둘째 j 가 y 인데 imshow 는 첫 첨자를 세로축으로 읽으므로, x를 가로·y를 세로로 두려면 data.T 로 전치한 뒤 그린다." },

  /* ---------- 실습 ---------- */
  39: { answers: ["dims = shape(grid)"],
        explanation: "dims = shape(grid) 다. shape 는 형상을 1차원 배열로 돌려주므로 크기 2인 정수 배열에 받아 dims(1), dims(2) 로 쓸 수 있다. 값 하나만 필요하면 size(grid, 1) 처럼 차원을 지정하는 쪽이 간단하다." },

  40: { answers: ["4"],
        explanation: "4다. 두 번째 차원, 즉 열의 개수를 돌려준다. size(grid, 1) 은 행의 개수인 3이다." },

  41: { answers: [
          "integer :: births(1900:1903)",
          "integer, dimension(1900:1903) :: births"
        ],
        explanation: "integer :: births(1900:1903) 이다. 하한을 1900 으로 두면 births(1901) 처럼 첨자가 곧 연도가 되어 코드가 훨씬 읽기 쉬워진다. 크기는 1903 − 1900 + 1 = 4 다." },

  42: { answers: ["do year = lbound(births, 1), ubound(births, 1)"],
        explanation: "do year = lbound(births, 1), ubound(births, 1) 이다. 숫자를 직접 적지 않고 조회 함수로 범위를 잡아 두면, 나중에 배열 경계를 바꿔도 반복문을 손댈 필요가 없다." },

  43: { answers: [
          "xs = [(a + (b - a) * real(i - 1, real64) / real(n - 1, real64), i = 1, n)]",
          "xs = [(a + (b - a) * real(i-1, real64) / real(n-1, real64), i = 1, n)]"
        ],
        explanation: "xs = [(a + (b - a) * real(i - 1, real64) / real(n - 1, real64), i = 1, n)] 이다. i − 1 을 n − 1 로 나누면 0부터 1까지가 나오므로 양 끝이 정확히 a 와 b 가 된다. 정수끼리 나누면 0이 되어 버리므로 두 값을 반드시 실수로 변환해야 한다. NumPy 의 linspace 와 같은 일을 한다." },

  44: { answers: ["0.000 0.250 0.500 0.750 1.000", "0 0.25 0.5 0.75 1"],
        explanation: "0.000 0.250 0.500 0.750 1.000 이다. 네 구간으로 나뉘므로 간격이 0.25 이고 양 끝이 정확히 0 과 1 이 된다. 격자나 그래프의 x축 좌표를 만들 때 자주 쓰는 형태다." },

  45: { answers: ["pattern = [(mod(i, 2), i = 1, 8)]"],
        explanation: "pattern = [(mod(i, 2), i = 1, 8)] 이다. i 가 홀수면 나머지가 1, 짝수면 0이라 1 0 1 0 1 0 1 0 이 만들어진다." },

  46: { answers: ["[head, pattern(1:3)]"],
        explanation: "[head, pattern(1:3)] 이다. 생성자 안에 배열과 슬라이스를 나열하면 길게 이어 붙인 새 배열이 된다. 같은 계수의 1차원 조각들만 이어 붙일 수 있다." },

  47: { answers: ["a(2:n:2)"],
        explanation: "a(2:n:2) 다. 2부터 시작해 보폭 2로 가면 짝수 번째 위치만 잡힌다. 시작 위치만 1로 바꾼 a(1:n:2) 는 홀수 번째를 잡는다." },

  48: { answers: ["2 4 6 8 10"],
        explanation: "2 4 6 8 10 이다. a 가 1부터 10까지이므로 짝수 번째 위치의 값도 짝수가 된다. 홀수 번째인 a(1:n:2) 는 1 3 5 7 9 다." },

  49: { answers: ["a(1:n-1) = a(2:n)", "a(1:n - 1) = a(2:n)"],
        explanation: "a(1:n-1) = a(2:n) 이다. Fortran의 배열 대입은 우변 전체를 먼저 평가한 뒤 좌변에 넣는 것으로 정의되어 있어, 좌우 슬라이스가 겹쳐도 값이 어긋나지 않는다. C에서 같은 일을 반복문으로 하면 앞에서부터 덮어써 값이 뭉개진다." },

  50: { answers: ["36"],
        explanation: "36이다. a 는 1 4 9 16 25 36 이었고 한 칸 밀면 4 9 16 25 36 36 이 된다. 좌변이 a(1:5) 라서 마지막 자리 a(6) 은 아무도 덮어쓰지 않아 원래 값 36 이 그대로 남는다." }
};
