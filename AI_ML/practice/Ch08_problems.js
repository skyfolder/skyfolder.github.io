/* ============================================================
   Ch08_problems.js — 8장 문제 본문 (공개 파일)

   정답은 이 파일에 없습니다. answer/Ch08_answers.js 에 있습니다.
   이론 15 · 코딩 20 = 35문항, 한 문항 1점.

   코딩 문항은 모두 예제 프로그램의 빈칸 한 줄을 채우는 형식입니다.
   채점할 때 공백은 무시하고 큰따옴표와 작은따옴표는 같은 것으로 보며,
   대소문자는 구분합니다.
   ============================================================ */

window.PROBLEMS = {
  title: "8장 실습",
  subtitle: "다중 회귀와 규제 · 35문제",

  sections: [
    { key: "theory", label: "이론", note: "개념과 용어" },
    { key: "code",   label: "코딩", note: "예제 프로그램의 빈칸 채우기" }
  ],

  problems: [

    /* ===================== 이론 15 ===================== */

    { id: 1, section: "theory", topic: "8.1 변수가 여러 개인 회귀분석", type: "choice",
      title: "특성이 여러 개일 때",
      question: "입력 특징이 p개일 때 선형 회귀 모델은 <code>ŷ = w₀ + w₁x₁ + … + w_p x_p</code> 가 된다. 이처럼 특성이 여러 개인 회귀분석을 무엇이라 부르는지 고르시오.",
      options: ["단변량 회귀분석", "다변량 회귀분석", "군집 분석", "비지도 회귀분석"],
      hint: "영어로는 multivariate 이다." },

    { id: 2, section: "theory", topic: "8.1 초평면", type: "text",
      title: "차원이 늘어나면",
      question: "특성이 하나이면 선형 회귀 모델은 직선이고, 둘이면 평면이다. 3차원을 넘어가는 공간에서 이 모델이 그리는 도형을 무엇이라 하는지 한글 용어로 쓰시오.",
      hint: "영어로는 hyperplane 이라고 한다." },

    { id: 3, section: "theory", topic: "8.1 파라미터 벡터", type: "choice",
      title: "θ₀ 의 정체",
      question: "가중치 w를 θ로, 절편 b를 θ₀ 로 바꾸어 쓰면 예측값은 <code>ŷ = θᵀx</code> 로 간단해진다. 이때 입력 벡터의 맨 앞에 상수 1을 끼워 넣는 까닭으로 알맞은 것을 고르시오.",
      options: [
        "데이터의 개수를 하나 늘리기 위해서이다",
        "절편 θ₀ 도 내적 한 번으로 함께 계산되도록 하기 위해서이다",
        "결측값을 채우기 위해서이다",
        "상관계수를 1로 맞추기 위해서이다"
      ],
      hint: "θᵀx 를 풀어 쓰면 θ₀x₀ + θ₁x₁ + … 이고 x₀ 가 1이다." },

    { id: 4, section: "theory", topic: "8.2 특성 선택", type: "choice",
      title: "특성을 고르는 세 가지 방법",
      question: "22개의 특성 가운데 어떤 변수를 조합해야 좋은 예측이 되는지 고르는 대표적인 방법이 셋 있다. 이 가운데 <b>후방 소거법</b>에 해당하는 설명을 고르시오.",
      options: [
        "상관도가 높은 속성을 기반으로 최적의 모형을 찾는다",
        "기여도가 높은 유의한 속성 변수부터 하나씩 추가한다",
        "속성들 가운데 기여도가 가장 낮은 속성부터 하나씩 제거한다",
        "모든 속성을 무작위로 섞어 절반만 남긴다"
      ],
      hint: "전진 선택법이 하나씩 더하는 쪽이다. 후방 소거법은 그 반대 방향이다." },

    { id: 5, section: "theory", topic: "8.4 상관도", type: "text",
      title: "기대수명과 가장 가까운 특성",
      question: "기대수명과 다른 속성들의 상관계수를 절대값이 큰 순으로 정렬했더니 0.75, 0.72, 0.70, 0.57, 0.56 … 순이었다. 이때 맨 위에 온 특성의 이름을 영문 그대로 쓰시오.",
      hint: "교육 연수를 뜻하는 속성이다." },

    { id: 6, section: "theory", topic: "8.4 상관도", type: "choice",
      title: "왜 절대값을 취하는가",
      question: "상관계수를 정렬하기 전에 <code>np.abs()</code> 로 절대값을 취한다. Adult mortality 의 상관계수는 -0.696 이었다. 절대값을 취하는 까닭으로 알맞은 것을 고르시오.",
      options: [
        "음수는 계산에 쓸 수 없기 때문이다",
        "상관의 방향과 관계없이 관계의 세기가 큰 특성을 함께 찾기 위해서이다",
        "상관계수를 1보다 작게 만들기 위해서이다",
        "결측값을 0으로 바꾸기 위해서이다"
      ],
      hint: "-0.696 은 기대수명과 반대 방향으로 강하게 움직인다는 뜻이다." },

    { id: 7, section: "theory", topic: "8.5 훈련과 테스트", type: "choice",
      title: "데이터를 나누는 까닭",
      question: "모델을 만든 뒤 <code>train_test_split()</code> 으로 데이터를 나누고 <code>test_size = 0.2</code> 를 주었다. 이렇게 하는 까닭으로 알맞은 것을 고르시오.",
      options: [
        "학습 속도를 20% 빠르게 하기 위해서이다",
        "학습에 쓰지 않은 데이터로 모델을 평가하여 새로운 데이터에 대한 성능을 가늠하기 위해서이다",
        "결측값을 20%만 남기기 위해서이다",
        "특성의 개수를 20%로 줄이기 위해서이다"
      ],
      hint: "모델이 학습한 데이터를 다시 넣으면 당연히 좋은 성능이 나온다." },

    { id: 8, section: "theory", topic: "8.6 재현성", type: "text",
      title: "매번 같게 나누려면",
      question: "<code>train_test_split()</code> 은 데이터를 무작위로 섞으므로 실행할 때마다 점수가 조금씩 달라진다. 매번 동일한 방법으로 나누고 싶을 때 난수 초기값을 고정하는 인수의 이름을 쓰시오.",
      hint: "교재에서는 이 값을 84로 주었다." },

    { id: 9, section: "theory", topic: "8.6 과대 적합", type: "text",
      title: "학습 데이터에만 잘 맞는 모델",
      question: "모델이 학습 데이터에만 최적화되어 좋은 성능을 보이고 새로운 데이터에 대해서는 좋은 성능을 내지 못하는 경우가 있다. 일반화 능력이 부족한 이 현상을 무엇이라 하는지 한글 용어로 쓰시오.",
      hint: "영어로는 overfitting 이라고 한다." },

    { id: 10, section: "theory", topic: "8.6 특성의 수", type: "choice",
      title: "특성을 늘리면 늘 좋아지는가",
      question: "특성 5개를 쓴 모델의 점수는 0.819 였고, 19개를 모두 쓴 모델의 점수는 0.834 였다. 교재가 이 결과에서 끌어낸 교훈으로 알맞은 것을 고르시오.",
      options: [
        "특성은 많을수록 좋으므로 가능한 한 모두 넣어야 한다",
        "특성의 수가 늘어난 만큼의 성능 향상은 없으므로, 특성에 대한 분석을 먼저 한 뒤에 모델을 만드는 것이 바람직하다",
        "점수가 0.9 를 넘지 않으면 회귀를 쓸 수 없다",
        "결측값을 지우면 성능이 반드시 나빠진다"
      ],
      hint: "이 대목에 \"Garbage-in Garbage-out\" 이라는 말이 함께 적혀 있다." },

    { id: 11, section: "theory", topic: "8.9 과대 적합", type: "choice",
      title: "훈련 1.0, 테스트 -834164",
      question: "20개의 데이터에 20차 다항 특성을 적용했더니 훈련 데이터의 점수는 1.0 이었고 테스트 데이터의 점수는 -834164 였다. 이 결과에 대한 설명으로 알맞은 것을 고르시오.",
      options: [
        "많은 항의 계수 덕분에 학습 데이터에 지나치게 맞추어져, 테스트 데이터를 전혀 설명하지 못하는 과대 적합이다",
        "차수가 모자라 데이터를 설명하지 못하는 과소 적합이다",
        "결측값이 남아 있어 생긴 계산 오류이다",
        "훈련 데이터의 점수가 1.0 이므로 가장 좋은 모델이다"
      ],
      hint: "회귀 곡선이 파란색 학습용 데이터만 지나고 빨간색 테스트 데이터는 비껴간다." },

    { id: 12, section: "theory", topic: "8.10 과소 적합", type: "choice",
      title: "과소 적합을 고치려면",
      question: "상수항만으로 이루어진 직선 <code>y = a</code> 로 모델링하면 새 데이터를 전혀 예측하지 못한다. 이러한 과소 적합을 개선하는 방법으로 알맞은 것을 고르시오.",
      options: [
        "학습 모델의 복잡도를 줄이거나 규제를 더 세게 준다",
        "학습 모델의 복잡도를 높이거나 데이터 특성을 변경 또는 증가시킨다",
        "데이터를 더 적게 제공한다",
        "테스트 데이터를 학습에 함께 넣는다"
      ],
      hint: "과대 적합을 고치는 방법과 방향이 반대이다." },

    { id: 13, section: "theory", topic: "8.10 규제", type: "text",
      title: "모델의 자유도를 제한하기",
      question: "모든 데이터를 다 만족시키려는 노력을 버리고, 학습을 오히려 방해하는 방식으로 일반화 능력을 높이는 방법이 있다. 모델의 자유도를 제한하는 이 방법을 무엇이라 하는지 한글 용어로 쓰시오.",
      hint: "영어로는 regularization 이며, 릿지 회귀와 라쏘 회귀가 그 대표적인 방법이다." },

    { id: 14, section: "theory", topic: "8.12 릿지와 라쏘", type: "choice",
      title: "두 규제의 차이",
      question: "릿지 회귀는 비용함수에 <code>λ · ½ Σ θᵢ²</code> 를 더하고, 라쏘 회귀는 <code>λ · Σ |θᵢ|</code> 를 더한다. 두 방법의 차이로 알맞은 것을 고르시오.",
      options: [
        "릿지는 가중치의 절대값을, 라쏘는 가중치의 제곱을 벌칙항으로 쓴다",
        "릿지는 가중치의 제곱을, 라쏘는 가중치의 절대값을 벌칙항으로 쓴다",
        "릿지는 벌칙항이 없고 라쏘만 벌칙항을 쓴다",
        "두 방법의 비용함수는 완전히 같다"
      ],
      hint: "두 식에서 θ를 다루는 방식만 견주어 본다. 두 방법을 결합한 것이 엘라스틱 넷이다." },

    { id: 15, section: "theory", topic: "8.12 alpha 값", type: "choice",
      title: "벌칙항이 지나치게 크면",
      question: "릿지 회귀의 <code>alpha</code> 는 규제의 세기를 정하는 λ 값이다. 0.001 에서 1000 까지 바꾸어 가며 점수를 살펴본 결과에 대한 설명으로 알맞은 것을 고르시오.",
      options: [
        "alpha 가 클수록 훈련과 테스트 점수가 함께 올라간다",
        "alpha 가 0.001 에서 10 사이일 때 규제가 잘 작동하고, 매우 커지면 데이터의 평균을 지나는 함수가 되어 과소 적합을 일으킨다",
        "alpha 가 0 이면 모든 θ 가 0 이 된다",
        "alpha 는 결과에 영향을 주지 않는다"
      ],
      hint: "λ 가 0 이면 벌칙항이 사라져 평균 제곱 오차만 남고, λ 가 커지면 모든 θ 가 0 에 가까워진다." },

    /* ===================== 코딩 20 ===================== */

    { id: 16, section: "code", topic: "8.3 데이터 읽기", type: "line",
      title: "판다스 불러오기",
      question: `<p class="lead">세계보건기구의 나라별 기대수명 데이터를 내려받아 데이터프레임으로 읽는 8.3절 예제이다.</p>
<pre><b class="blank">①</b>

path = 'https://github.com/dongupak/DataML/raw/main/csv/'
file = path+'life_expectancy.csv'

life = pd.read_csv(file)
print(life.head(3))</pre>
<p class="after">빈칸 ①에 들어갈 한 줄을 쓰시오. 판다스를 <code>pd</code> 라는 이름으로 불러오는 문장이다.</p>`,
      hint: "import 문에 as 를 붙여 짧은 이름을 준다." },

    { id: 17, section: "code", topic: "8.3 데이터 읽기", type: "line",
      title: "csv 파일 읽기",
      question: `<p class="lead">같은 예제이다. <code>file</code> 에는 csv 파일의 주소가 들어 있다.</p>
<pre>path = 'https://github.com/dongupak/DataML/raw/main/csv/'
file = path+'life_expectancy.csv'

<b class="blank">②</b>
print(life.head(3))</pre>
<p class="after">빈칸 ②에 들어갈 한 줄을 쓰시오. 읽은 데이터프레임을 <code>life</code> 에 넣는다. 실행하면 <code>[3 rows x 22 columns]</code> 가 함께 찍힌다.</p>`,
      hint: "판다스에서 csv 를 읽는 함수 이름은 read_csv 이다." },

    { id: 18, section: "code", topic: "8.3 데이터 둘러보기", type: "line",
      title: "데이터의 개요",
      question: `<p class="lead">데이터의 전체적인 특징을 훑어본다. 결측값이 없는 Year 속성은 2938개이고, 마지막 항목 Schooling 은 2775개뿐이어서 163개의 결측 데이터가 있음을 알 수 있다.</p>
<pre>print('기대수명 데이터의 개요:')
<b class="blank">③</b></pre>
<p class="after">빈칸 ③에 들어갈 한 줄을 쓰시오. count, mean, std, min, 25%, 50%, 75%, max 를 한꺼번에 보여 주는 메소드를 <code>print</code> 안에서 호출한다.</p>`,
      hint: "요약 통계를 내주는 메소드 이름은 describe 이다." },

    { id: 19, section: "code", topic: "8.3 데이터 둘러보기", type: "line",
      title: "컬럼 이름 보기",
      question: `<p class="lead">각 컬럼의 이름을 출력해 본다. 실행하면 Country, Year, Status, Life expectancy … Schooling 까지의 목록이 찍힌다.</p>
<pre>print('life 데이터의 컬럼들')
<b class="blank">④</b></pre>
<p class="after">빈칸 ④에 들어갈 한 줄을 쓰시오.</p>`,
      hint: "데이터프레임의 열 이름은 columns 속성에 들어 있다. 괄호를 붙이지 않는다." },

    { id: 20, section: "code", topic: "8.3 히트맵", type: "line",
      title: "상관행렬 구하기",
      question: `<p class="lead">특성들 사이의 상관관계를 히트맵으로 그린다. 수치 데이터에 대해서만 상관계수를 구하고 소수점 둘째 자리로 반올림한다.</p>
<pre>import seaborn as sns
import matplotlib.pyplot as plt

sns.set(rc={'figure.figsize':(22,20)})
<b class="blank">⑤</b>
sns.heatmap(data=correlation_matrix, annot=True)</pre>
<p class="after">빈칸 ⑤에 들어갈 한 줄을 쓰시오. 결과는 <code>correlation_matrix</code> 에 넣는다.</p>`,
      hint: "corr 메소드에 numeric_only=True 를 주고 round(2) 를 이어 붙인다." },

    { id: 21, section: "code", topic: "8.3 히트맵", type: "line",
      title: "히트맵 그리기",
      question: `<p class="lead">같은 예제이다. 구해 둔 상관행렬을 히트맵으로 그리되 칸마다 숫자도 함께 적는다.</p>
<pre>correlation_matrix = life.corr(numeric_only=True).round(2)
<b class="blank">⑥</b></pre>
<p class="after">빈칸 ⑥에 들어갈 한 줄을 쓰시오. 데이터는 <code>data</code>, 숫자 표시는 <code>annot</code> 인수로 넘긴다.</p>`,
      hint: "시본에서 히트맵을 그리는 함수 이름은 heatmap 이다." },

    { id: 22, section: "code", topic: "8.4 상관도", type: "line",
      title: "상관계수의 절대값",
      question: `<p class="lead">기대수명과 다른 속성들의 상관계수를 구한 뒤, 방향과 관계없이 관계가 센 순으로 보려 한다.</p>
<pre>c = life.corr(numeric_only=True).round(2)['Life expectancy']
<b class="blank">⑦</b>        <span class="cm"># 상관계수의 절대값을 취한다</span>
print(c.sort_values(ascending=False)[1:8])</pre>
<p class="after">빈칸 ⑦에 들어갈 한 줄을 쓰시오. 넘파이는 <code>np</code> 로 불러왔다고 본다.</p>`,
      hint: "넘파이에서 절대값을 구하는 함수 이름은 abs 이다." },

    { id: 23, section: "code", topic: "8.4 상관도", type: "line",
      title: "상위 7개 출력",
      question: `<p class="lead">같은 예제이다. 상관도가 큰 순으로 정렬하여 상위 7개를 출력한다. 맨 앞의 Life expectancy 자기 자신은 빼고 두 번째부터 여덟 번째 앞까지를 잘라 낸다.</p>
<pre>c = life.corr(numeric_only=True).round(2)['Life expectancy']
c = np.abs(c)
<b class="blank">⑧</b>   <span class="cm"># 상위 7개 값을 출력하자</span></pre>
<p class="after">빈칸 ⑧에 들어갈 한 줄을 쓰시오. 실행하면 Schooling 0.75 부터 Diphtheria 0.48 까지 일곱 줄이 찍힌다.</p>`,
      hint: "정렬은 sort_values 에 ascending=False 를 주고, 잘라 내기는 대괄호 안에 1:8 을 적는다." },

    { id: 24, section: "code", topic: "8.5 결측값 확인", type: "line",
      title: "결측 데이터 세기",
      question: `<p class="lead">선형 회귀 모델을 만들기 전에 전처리가 필요하다. 고른 다섯 개 특성에 결측 데이터가 몇 개씩 있는지 센다.</p>
<pre>main_features = ['Schooling',\\
                 'Income composition of resources',\\
                 'Adult mortality', 'BMI', 'HIV/AIDS']
<b class="blank">⑨</b></pre>
<p class="after">빈칸 ⑨에 들어갈 한 줄을 쓰시오. 실행하면 Schooling 163, Income composition of resources 167, Adult mortality 10, BMI 34, HIV/AIDS 0 이 찍힌다.</p>`,
      hint: "결측 여부를 알려 주는 메소드는 isna 이고, 그 결과를 sum 으로 더한다." },

    { id: 25, section: "code", topic: "8.5 결측값 제거", type: "line",
      title: "결측값 지우기",
      question: `<p class="lead">결측값이 있는 행을 지운 뒤 입력 데이터와 정답 레이블을 만든다. 원본 데이터프레임을 그 자리에서 바꾸도록 인수를 준다.</p>
<pre><b class="blank">⑩</b>   <span class="cm"># 결측값 제거</span>

X = life[main_features]
y = life['Life expectancy']
print(X.shape, y.shape)</pre>
<p class="after">빈칸 ⑩에 들어갈 한 줄을 쓰시오. 실행하면 <code>(1649, 5) (1649,)</code> 가 찍힌다.</p>`,
      hint: "결측 행을 버리는 메소드는 dropna 이며, 원본을 바꾸려면 inplace=True 를 준다." },

    { id: 26, section: "code", topic: "8.5 정답 레이블", type: "line",
      title: "정답 레이블 만들기",
      question: `<p class="lead">같은 예제이다. 선형 회귀 모델의 정답 값으로 기대수명 컬럼을 쓴다.</p>
<pre>life.dropna(inplace=True)

X = life[main_features]
<b class="blank">⑪</b>
print(X.shape, y.shape)</pre>
<p class="after">빈칸 ⑪에 들어갈 한 줄을 쓰시오. 컬럼 이름은 <code>Life expectancy</code> 이다.</p>`,
      hint: "데이터프레임에서 컬럼 하나를 꺼낼 때는 대괄호 안에 이름을 문자열로 적는다." },

    { id: 27, section: "code", topic: "8.5 훈련과 테스트", type: "line",
      title: "분할 함수 가져오기",
      question: `<p class="lead">구현한 모델이 좋은 모델인지 판단하기 위해 별도의 테스트 데이터 집합을 만든다.</p>
<pre>from sklearn.linear_model import LinearRegression
<b class="blank">⑫</b>

X_train, X_test, y_train, y_test = train_test_split(X, y, random_state=84, test_size = 0.2)</pre>
<p class="after">빈칸 ⑫에 들어갈 한 줄을 쓰시오.</p>`,
      hint: "데이터를 나누는 도구는 sklearn.model_selection 안에 있다." },

    { id: 28, section: "code", topic: "8.5 훈련과 테스트", type: "line",
      title: "데이터 나누기",
      question: `<p class="lead">같은 예제이다. 20%를 테스트용으로 쓰고, 매번 같은 방법으로 나누도록 난수 초기값을 84로 고정한다. 두 인수 모두 이름 붙인 인수로 넘기며 <code>random_state</code> 를 먼저 적는다.</p>
<pre>from sklearn.model_selection import train_test_split

<b class="blank">⑬</b>
regr = LinearRegression()
regr.fit(X_train, y_train)</pre>
<p class="after">빈칸 ⑬에 들어갈 한 줄을 쓰시오. 돌려받는 네 값의 이름은 차례로 <code>X_train</code>, <code>X_test</code>, <code>y_train</code>, <code>y_test</code> 이다.</p>`,
      hint: "함수에 X 와 y 를 먼저 넘기고 그 뒤에 두 인수를 적는다." },

    { id: 29, section: "code", topic: "8.5 학습과 평가", type: "line",
      title: "훈련 데이터로 학습",
      question: `<p class="lead">같은 예제이다. 나눈 데이터 가운데 훈련용만 써서 모델을 학습시킨다.</p>
<pre>regr = LinearRegression()
<b class="blank">⑭</b>
print('선형 회귀 모델의 점수=', regr.score(X_test, y_test).round(3))</pre>
<p class="after">빈칸 ⑭에 들어갈 한 줄을 쓰시오. 실행하면 <code>선형 회귀 모델의 점수= 0.819</code> 가 찍힌다.</p>`,
      hint: "학습을 맡는 메소드는 fit 이며, 테스트용이 아니라 훈련용 데이터를 넘긴다." },

    { id: 30, section: "code", topic: "8.6 시각화", type: "line",
      title: "테스트 데이터 예측",
      question: `<p class="lead">테스트 데이터의 실제값과 예측값을 산점도로 그리고, 완전히 일치하는 경우를 뜻하는 대각선을 함께 그린다.</p>
<pre>plt.figure(figsize=(6,6))
<b class="blank">⑮</b>
plt.scatter(y_test, y_test_predict)
plt.plot(y_test, y_test, color='r', linewidth=3)</pre>
<p class="after">빈칸 ⑮에 들어갈 한 줄을 쓰시오. 예측 결과는 <code>y_test_predict</code> 에 넣는다.</p>`,
      hint: "예측을 맡는 메소드는 predict 이며, 테스트용 입력을 넘긴다." },

    { id: 31, section: "code", topic: "8.7 다항 회귀", type: "line",
      title: "2차 곡선 데이터 만들기",
      question: `<p class="lead">데이터의 분포가 직선이 아닌 경우를 살펴보려고, 2차 방정식 <code>y = 0.5x² + 2x + 1</code> 을 따르되 잡음이 섞인 데이터를 만든다.</p>
<pre>m = 100
np.random.seed(84)
X = 8 * np.random.rand(m, 1) - 4
<span class="cm"># x^2항의 계수가 0.5, x항의 계수가 2, 상수항의 계수가 1</span>
<b class="blank">①</b>

plt.figure(figsize=(6,4))
plt.plot(X, y, "b^")</pre>
<p class="after">빈칸 ①에 들어갈 한 줄을 쓰시오. 잡음은 <code>np.random.randn(m, 1)</code> 로 더한다.</p>`,
      hint: "거듭제곱 연산자는 별표 두 개이다. 세 항을 그대로 적고 마지막에 잡음을 더한다." },

    { id: 32, section: "code", topic: "8.8 다항 특성", type: "line",
      title: "다항 특성 클래스 가져오기",
      question: `<p class="lead">입력 데이터를 다항식 형태로 확장하는 클래스를 쓴다. 입력이 [x] 이면 [1, x, x²] 의 항을 만들어 준다.</p>
<pre>import numpy as np
<b class="blank">②</b>

t = np.arange(6).reshape(3, -1)
poly = PolynomialFeatures(degree=2)
new_t = poly.fit_transform(t)</pre>
<p class="after">빈칸 ②에 들어갈 한 줄을 쓰시오. 이 클래스는 전처리 묶음 안에 있다.</p>`,
      hint: "sklearn.preprocessing 에서 PolynomialFeatures 를 가져온다." },

    { id: 33, section: "code", topic: "8.8 다항 특성", type: "line",
      title: "편향 없이 2차로 확장",
      question: `<p class="lead">앞서 만든 데이터 X에 2차 다항 특성을 더해 학습시킨다. 출력되는 특성 가운데 1은 편향이므로 넣지 않는다.</p>
<pre>from sklearn.preprocessing import PolynomialFeatures
from sklearn.linear_model import LinearRegression

<b class="blank">③</b>
X_poly = poly_features.fit_transform(X)

regr = LinearRegression()
regr.fit(X_poly, y)</pre>
<p class="after">빈칸 ③에 들어갈 한 줄을 쓰시오. 차수는 <code>degree</code>, 편향 여부는 <code>include_bias</code> 인수로 주며 그 순서로 적는다.</p>`,
      hint: "편향을 생략하려면 include_bias 에 False 를 준다." },

    { id: 34, section: "code", topic: "8.12 표준 스케일러", type: "line",
      title: "테스트 데이터도 같은 스케일러로",
      question: `<p class="lead">릿지 회귀 모델은 입력값의 크기에 매우 민감하므로, 규제를 쓰기 전에 표준 스케일러로 크기를 맞춘다. 훈련 데이터로 학습시킨 스케일러를 테스트 데이터에도 그대로 쓴다.</p>
<pre>from sklearn.preprocessing import StandardScaler

ss = StandardScaler()
ss.fit(X_train_pl)
train_scaled = ss.transform(X_train_pl)
<b class="blank">④</b></pre>
<p class="after">빈칸 ④에 들어갈 한 줄을 쓰시오. 결과는 <code>test_scaled</code> 에 넣는다.</p>`,
      hint: "테스트 데이터에는 fit 을 다시 하지 않고 transform 만 한다." },

    { id: 35, section: "code", topic: "8.12 릿지 회귀", type: "line",
      title: "릿지 회귀 모델 만들기",
      question: `<p class="lead">규제를 건 회귀 모델을 만든다. 벌칙항의 세기인 람다값은 10으로 준다.</p>
<pre>from sklearn.linear_model import Ridge

<b class="blank">⑤</b>
ridge.fit(train_scaled, y_train)
print('훈련 데이터의 점수 =', ridge.score(train_scaled, y_train))
print('테스트 데이터의 점수 =', ridge.score(test_scaled, y_test))</pre>
<p class="after">빈칸 ⑤에 들어갈 한 줄을 쓰시오. 만든 모델은 <code>ridge</code> 가 가리키게 한다. 실행하면 훈련 0.954, 테스트 0.811 정도가 찍힌다.</p>`,
      hint: "규제의 세기를 정하는 인수 이름은 alpha 이다." }

  ]
};
