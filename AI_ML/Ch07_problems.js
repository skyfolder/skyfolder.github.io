/* ============================================================
   Ch07_problems.js — 7장 문제 본문 (공개 파일)

   정답은 이 파일에 없습니다. answer/Ch07_answers.js 에 있습니다.
   이론 15 · 코딩 20 = 35문항, 한 문항 1점.

   코딩 문항은 모두 예제 프로그램의 빈칸 한 줄을 채우는 형식입니다.
   채점할 때 공백은 무시하고 큰따옴표와 작은따옴표는 같은 것으로 보며,
   대소문자는 구분합니다.
   ============================================================ */

window.PROBLEMS = {
  title: "7장 실습",
  subtitle: "머신러닝 기초: 사이킷런과 선형 회귀 · 35문제",

  sections: [
    { key: "theory", label: "이론", note: "개념과 용어" },
    { key: "code",   label: "코딩", note: "예제 프로그램의 빈칸 채우기" }
  ],

  problems: [

    /* ===================== 이론 15 ===================== */

    { id: 1, section: "theory", topic: "7.2 머신러닝의 정의", type: "choice",
      title: "머신러닝의 세 요소",
      question: "톰 미첼의 정의에 따르면 머신러닝은 작업 T를 수행하는 동작을 어떤 잣대로 평가하고, 경험 E를 쌓아 그 평가 점수를 더 나은 상태로 개선하는 과정이다. 이때 <code>P</code>가 가리키는 것을 고르시오.",
      options: [
        "해결해야 할 문제 자체",
        "수행한 동작을 평가하는 성능척도",
        "학습에 사용하는 데이터와 경험",
        "모델이 가진 파라미터의 개수"
      ],
      hint: "T는 작업, E는 경험이다. 남은 하나가 무엇을 재는 잣대인지 생각한다." },

    { id: 2, section: "theory", topic: "7.2 지도 학습", type: "choice",
      title: "교사가 있는 학습",
      question: "고양이와 개를 구분하려고 할 때, 어느 쪽인지 표시된 데이터를 충분히 준 뒤에 학습시킨다. 이처럼 데이터와 함께 정답 구실을 하는 레이블을 제공받아 입력을 출력에 대응시키는 일반적인 규칙을 찾는 학습 방식을 고르시오.",
      options: ["비지도 학습", "강화 학습", "지도 학습", "전이 학습"],
      hint: "기계에게 답을 알려 주는 교사가 있는 쪽이다." },

    { id: 3, section: "theory", topic: "7.2 비지도 학습", type: "text",
      title: "비슷한 것끼리 묶기",
      question: "비지도 학습에서는 외부에서 정답을 주지 않아도 학습 알고리즘이 스스로 입력의 구조를 찾아낸다. 그 대표적인 작업으로, 주어진 데이터를 특성에 따라 둘 이상의 그룹으로 나누는 것을 무엇이라 하는지 한글 용어로 쓰시오.",
      hint: "여러 뉴스를 비슷한 것들끼리 묶어 제공하는 일이 여기에 해당한다." },

    { id: 4, section: "theory", topic: "7.2 강화 학습", type: "choice",
      title: "보상으로 배우는 학습",
      question: "게임 캐릭터가 게임 환경에서 특정한 액션을 수행하고 이에 대한 보상을 받으면서 행동을 결정하는 정책을 바꾸어 나간다. 에이전트, 환경, 액션, 보상과 상태를 학습 데이터로 삼는 이 학습 방식을 고르시오.",
      options: ["지도 학습", "비지도 학습", "강화 학습", "군집화"],
      hint: "교사의 유무로 나뉘는 두 학습과는 별도의 영역으로 다룬다." },

    { id: 5, section: "theory", topic: "7.3 독립변수와 종속변수", type: "text",
      title: "무엇이 무엇에 딸리는가",
      question: "특정 지역의 주택 면적과 최근 2년의 거래가격의 관계를 조사한다고 하자. 이때 <b>거래가격</b>은 어떤 변수에 해당하는지 한글 용어로 쓰시오.",
      hint: "면적은 연구자가 임의로 고를 수 있는 독립변수이다. 면적에 딸려 값이 정해지는 쪽을 부르는 말이다." },

    { id: 6, section: "theory", topic: "7.4 선형 회귀", type: "choice",
      title: "w와 b의 이름",
      question: "2차원 평면 위의 직선의 방정식 <code>y = wx + b</code> 로 선형 회귀 모델을 세운다. <code>w</code>와 <code>b</code>를 각각 무엇이라 부르는지 고르시오.",
      options: [
        "w는 절편, b는 계수",
        "w는 계수이자 기울기, b는 절편",
        "w는 잔차, b는 편향 제곱",
        "w와 b 모두 하이퍼파라미터"
      ],
      hint: "x와 관계없이 y에 영향을 주는 값이 어느 쪽인지 본다." },

    { id: 7, section: "theory", topic: "7.8 결정계수", type: "text",
      title: "score가 돌려주는 값",
      question: "사이킷런의 <code>LinearRegression</code> 모델은 <code>score()</code> 메소드로 모델의 성능을 알려 준다. 이 메소드가 돌려주는 척도의 이름을 한글 용어로 쓰시오.",
      hint: "R 제곱이라고도 쓰며, 전체 분포 가운데 모델이 설명하는 정도를 나타낸다." },

    { id: 8, section: "theory", topic: "7.8 결정계수", type: "choice",
      title: "R 제곱이 1일 때",
      question: "남학생과 여학생의 데이터로 학습한 모델의 <code>score(X, y)</code> 가 0.8426 으로 나왔다. 이 척도가 1이 되는 경우가 뜻하는 바를 고르시오.",
      options: [
        "모델이 변수를 설명하는 데 전혀 도움이 되지 않는다",
        "모델의 설명이 완벽하다",
        "학습률이 지나치게 크다",
        "잔차가 정규분포를 따르지 않는다"
      ],
      hint: "0이 전혀 도움이 되지 않는 쪽이다." },

    { id: 9, section: "theory", topic: "7.5 회귀분석의 기본 가정", type: "choice",
      title: "네 가지 가정",
      question: "선형 회귀분석을 하려면 몇 가지 기본 가정이 만족되어야 한다. 교재가 든 네 가지 가정에 <b>들어가지 않는</b> 것을 고르시오.",
      options: ["선형성", "독립성", "등분산성", "이산성"],
      hint: "나머지 하나는 잔차에 관한 가정인 정규성이다." },

    { id: 10, section: "theory", topic: "7.8 오차 함수", type: "choice",
      title: "평균 절대 오차의 약점",
      question: "평균 절대 오차(MAE)는 오차값을 그대로 보여 주어 직관적이고 계산도 편하지만 약점이 있다. 교재가 지적한 약점으로 알맞은 것을 고르시오.",
      options: [
        "양의 오차와 음의 오차가 상쇄되어 항상 0이 된다",
        "절대값을 쓰기 때문에 미분이 불가능한 지점이 생긴다",
        "계산이 복잡해 컴퓨터로 구현할 수 없다",
        "오차값을 그대로 보여 주지 못한다"
      ],
      hint: "경사 하강법은 미분에 기대는 방법이다." },

    { id: 11, section: "theory", topic: "7.8 오차 함수", type: "text",
      title: "제곱해서 평균 내는 오차",
      question: "예측치와 정답 레이블 사이의 차이를 제곱하여 모두 더한 뒤 전체 데이터의 개수 m으로 나눈 오차가 있다. 머신러닝에서 가장 널리 쓰이는 이 오차의 이름을 영문 약자 세 글자로 쓰시오.",
      hint: "mean square error 를 줄여 쓴다." },

    { id: 12, section: "theory", topic: "7.9 오차 함수", type: "choice",
      title: "왜 제곱하는가",
      question: "실제값이 1, 2, 3 이고 예측값이 1, 4, 1 이면 차이의 합은 0 이 되어 오차가 없는 것처럼 보인다. 오차의 합을 그대로 쓰지 않고 제곱하여 더하는 까닭으로 가장 알맞은 것을 고르시오.",
      options: [
        "계산 속도가 빨라지기 때문이다",
        "양의 오차와 음의 오차가 지워지는 것을 막고, 최적의 파라미터에서 최소값을 갖는 볼록한 곡면을 얻기 위해서이다",
        "오차의 단위를 원래 값과 같게 맞추기 위해서이다",
        "결정계수를 1보다 크게 만들기 위해서이다"
      ],
      hint: "볼록한 곡면이라야 기울기를 따라 내려가 최소값에 이를 수 있다." },

    { id: 13, section: "theory", topic: "7.10 경사 하강법", type: "text",
      title: "기울기를 따라 내려가기",
      question: "접선의 기울기를 구한 뒤 그 부호의 반대 방향으로 조금씩 움직이기를 되풀이하면 목적함수의 값이 점점 작아진다. 이렇게 오차 곡면의 기울기를 따라 내려가며 최소값을 찾는 방법을 무엇이라 하는지 한글 용어로 쓰시오.",
      hint: "영어로는 gradient descent 라고 한다." },

    { id: 14, section: "theory", topic: "7.12 학습률", type: "choice",
      title: "학습률을 잘못 잡으면",
      question: "같은 데이터에 학습률만 0.00001 로 두면 <code>w = 0.45</code> 에 머물렀고, 1.0 으로 두면 <code>w = nan</code> 이 나왔다. 학습률을 잘못 정했을 때 나타나는 현상으로 알맞은 것을 고르시오.",
      options: [
        "너무 작으면 발산하고, 너무 크면 수렴이 느려진다",
        "너무 작으면 수렴이 지나치게 느려지고, 너무 크면 발산하여 nan 이 나올 수 있다",
        "학습률은 결과에 영향을 주지 않는다",
        "학습률이 클수록 언제나 정확한 해를 얻는다"
      ],
      hint: "두 실행 결과가 각각 어느 쪽 현상인지 짚어 본다." },

    { id: 15, section: "theory", topic: "7.11 학습의 원리", type: "text",
      title: "전체 데이터를 한 번",
      question: "학습을 위해 전체 데이터를 모두 넣어 오차를 구하고 w와 b를 갱신한다. 이때 전체 데이터를 한 번 사용하는 것을 무엇이라 하는지 한글 용어로 쓰시오.",
      hint: "영어로는 epoch 이라고 한다." },

    /* ===================== 코딩 20 ===================== */

    { id: 16, section: "code", topic: "7.6 선형 회귀 구현", type: "line",
      title: "넘파이 불러오기",
      question: `<p class="lead">다음은 학생 다섯 명의 키로 몸무게를 추정하는 7.6절 예제이다.</p>
<pre><b class="blank">①</b>
from sklearn import linear_model   <span class="cm"># scikit-learn 모듈을 가져온다</span>

regr = linear_model.LinearRegression()

X = [[163], [179], [166], [169], [171]]
y = [54, 63, 57, 56, 58]
regr.fit(X, y)

coef = regr.coef_              <span class="cm"># 직선의 기울기</span>
intercept = regr.intercept_    <span class="cm"># 직선의 절편</span>
score = regr.score(X, y)</pre>
<p class="after">빈칸 ①에 들어갈 한 줄을 쓰시오. 넘파이를 <code>np</code> 라는 이름으로 불러오는 문장이다.</p>`,
      hint: "import 문에 as 를 붙여 짧은 이름을 준다." },

    { id: 17, section: "code", topic: "7.6 선형 회귀 구현", type: "line",
      title: "선형 모델 불러오기",
      question: `<p class="lead">같은 예제이다.</p>
<pre>import numpy as np
<b class="blank">②</b>

regr = linear_model.LinearRegression()

X = [[163], [179], [166], [169], [171]]
y = [54, 63, 57, 56, 58]
regr.fit(X, y)</pre>
<p class="after">빈칸 ②에 들어갈 한 줄을 쓰시오. 사이킷런에서 선형 모델 묶음 <code>linear_model</code> 을 가져오는 문장이다.</p>`,
      hint: "from 으로 패키지를 지정하고 import 로 이름을 가져온다." },

    { id: 18, section: "code", topic: "7.6 선형 회귀 구현", type: "line",
      title: "모델 만들기",
      question: `<p class="lead">같은 예제이다. 선형 회귀 모델을 만들어 <code>regr</code> 가 가리키게 한다.</p>
<pre>import numpy as np
from sklearn import linear_model

<b class="blank">③</b>

X = [[163], [179], [166], [169], [171]]
y = [54, 63, 57, 56, 58]
regr.fit(X, y)</pre>
<p class="after">빈칸 ③에 들어갈 한 줄을 쓰시오.</p>`,
      hint: "생성자 이름은 LinearRegression 이며 괄호를 붙여 호출한다." },

    { id: 19, section: "code", topic: "7.6 입력 데이터의 모양", type: "line",
      title: "학습 데이터 X",
      question: `<p class="lead">학생 다섯 명의 키는 차례로 163, 179, 166, 169, 171 이다. 학습 데이터는 반드시 2차원이어야 하므로, 값 하나하나를 원소가 하나인 리스트로 감싼다.</p>
<pre>regr = linear_model.LinearRegression()

<b class="blank">④</b>
y = [54, 63, 57, 56, 58]
regr.fit(X, y)</pre>
<p class="after">빈칸 ④에 들어갈 한 줄을 쓰시오.</p>`,
      hint: "163 이 아니라 [163] 과 같은 모양이 다섯 개 들어간다." },

    { id: 20, section: "code", topic: "7.6 입력 데이터의 모양", type: "line",
      title: "목표값 y",
      question: `<p class="lead">앞 문항의 다섯 명에 대응하는 몸무게는 차례로 54, 63, 57, 56, 58 이다. 목표값은 입력과 달리 1차원 배열형 자료를 쓴다.</p>
<pre>X = [[163], [179], [166], [169], [171]]
<b class="blank">⑤</b>
regr.fit(X, y)</pre>
<p class="after">빈칸 ⑤에 들어갈 한 줄을 쓰시오.</p>`,
      hint: "바깥 대괄호가 하나뿐이다." },

    { id: 21, section: "code", topic: "7.6 학습", type: "line",
      title: "학습시키기",
      question: `<p class="lead">데이터를 모두 갖추었으니 이제 학습을 시작한다.</p>
<pre>X = [[163], [179], [166], [169], [171]]
y = [54, 63, 57, 56, 58]
<b class="blank">⑥</b>

coef = regr.coef_
intercept = regr.intercept_</pre>
<p class="after">빈칸 ⑥에 들어갈 한 줄을 쓰시오. <code>regr</code> 모델에 입력 <code>X</code> 와 출력 <code>y</code> 를 지정하는 문장이다.</p>`,
      hint: "사이킷런에서 학습을 맡는 메소드 이름은 세 글자이다." },

    { id: 22, section: "code", topic: "7.6 계수와 절편", type: "line",
      title: "직선의 기울기",
      question: `<p class="lead">학습이 끝나면 직선의 기울기와 절편을 꺼내 볼 수 있다.</p>
<pre>regr.fit(X, y)

<b class="blank">⑦</b>              <span class="cm"># 직선의 기울기</span>
intercept = regr.intercept_    <span class="cm"># 직선의 절편</span>
print(f"y = {coef.round(2)}* X + {intercept:.2f}")</pre>
<p class="after">빈칸 ⑦에 들어갈 한 줄을 쓰시오. 기울기를 <code>coef</code> 변수에 넣는다. 실행하면 <code>y = [0.54]* X + -33.17</code> 이 찍힌다.</p>`,
      hint: "학습으로 정해진 속성에는 이름 끝에 밑줄이 붙는다." },

    { id: 23, section: "code", topic: "7.6 계수와 절편", type: "line",
      title: "직선의 절편",
      question: `<p class="lead">같은 예제이다.</p>
<pre>regr.fit(X, y)

coef = regr.coef_              <span class="cm"># 직선의 기울기</span>
<b class="blank">⑧</b>    <span class="cm"># 직선의 절편</span>
print(f"y = {coef.round(2)}* X + {intercept:.2f}")</pre>
<p class="after">빈칸 ⑧에 들어갈 한 줄을 쓰시오. 절편을 <code>intercept</code> 변수에 넣는다.</p>`,
      hint: "절편을 뜻하는 영어 단어 뒤에 밑줄이 붙는다." },

    { id: 24, section: "code", topic: "7.7 시각화", type: "line",
      title: "산점도 그리기",
      question: `<p class="lead">7.7절에서는 학습 데이터와 회귀 직선을 함께 그린다.</p>
<pre>import matplotlib.pyplot as plt

<span class="cm"># 학습 데이터와 y 값을 산포도로 그린다</span>
<b class="blank">⑨</b>
<span class="cm"># 학습 데이터를 입력으로 하여 예측값을 계산한다</span>
y_pred = regr.predict(X)
plt.plot(X, y_pred, 'r:')</pre>
<p class="after">빈칸 ⑨에 들어갈 한 줄을 쓰시오. 색은 <code>blue</code>, 표식은 마름모를 뜻하는 <code>D</code> 로 하고 두 값 모두 이름 붙인 인수로 넘긴다.</p>`,
      hint: "점을 찍는 함수는 scatter 이며, 색은 color, 표식은 marker 로 준다." },

    { id: 25, section: "code", topic: "7.7 시각화", type: "line",
      title: "예측값 계산",
      question: `<p class="lead">같은 예제이다. 학습에 쓴 <code>X</code> 를 그대로 모델에 넣어 예측값을 구한 뒤 점선으로 잇는다.</p>
<pre>plt.scatter(X, y, color='blue', marker='D')
<b class="blank">⑩</b>
plt.plot(X, y_pred, 'r:')</pre>
<p class="after">빈칸 ⑩에 들어갈 한 줄을 쓰시오. 결과는 <code>y_pred</code> 변수에 넣는다.</p>`,
      hint: "예측을 맡는 메소드 이름은 predict 이다." },

    { id: 26, section: "code", topic: "7.7 시각화", type: "line",
      title: "회귀 직선 그리기",
      question: `<p class="lead">같은 예제이다. 예측값을 이어 주는 빨간 점선을 그린다.</p>
<pre>plt.scatter(X, y, color='blue', marker='D')
y_pred = regr.predict(X)
<b class="blank">⑪</b>   <span class="cm"># 예측값을 이어 주는 점선</span></pre>
<p class="after">빈칸 ⑪에 들어갈 한 줄을 쓰시오. 선의 모양은 서식 문자열 <code>r:</code> 로 지정한다.</p>`,
      hint: "점을 잇는 함수는 plot 이며, 세 번째 인수로 서식 문자열을 준다." },

    { id: 27, section: "code", topic: "7.7 예측", type: "line",
      title: "처음 보는 값 예측하기",
      question: `<p class="lead">키가 167 인 동윤이의 몸무게를 추정해 본다. 예측에 넣는 입력도 학습 때와 같은 2차원 모양이어야 한다.</p>
<pre>unseen = [[167]]
<b class="blank">⑫</b>
print(f'동윤이의 키가 {unseen}cm 이므로 몸무게는 {result.round(1)}kg 으로 추정됨')</pre>
<p class="after">빈칸 ⑫에 들어갈 한 줄을 쓰시오. 실행하면 <code>[56.3]kg 으로 추정됨</code> 이 찍힌다.</p>`,
      hint: "결과를 result 에 넣는다. 인수는 이미 만들어 둔 unseen 이다." },

    { id: 28, section: "code", topic: "7.7 예측", type: "line",
      title: "결정계수 함수 가져오기",
      question: `<p class="lead">같은 예제에서 참값 <code>y</code> 와 예측값 <code>y_pred</code> 로 결정계수를 직접 구해 본다.</p>
<pre>result = regr.predict(unseen)

<b class="blank">⑬</b>
print(f"데이터와 선형 회귀 직선의 r square 점수: {r2_score(y, y_pred):.3}")</pre>
<p class="after">빈칸 ⑬에 들어갈 한 줄을 쓰시오. 실행하면 <code>r square 점수: 0.922</code> 가 찍힌다.</p>`,
      hint: "평가 척도는 sklearn.metrics 안에 모여 있다." },

    { id: 29, section: "code", topic: "7.7 차원 늘리기", type: "line",
      title: "남학생과 여학생을 한 번에",
      question: `<p class="lead">남학생은 0, 여학생은 1 로 구분해 입력을 2차원으로 늘렸다. 키가 167cm 인 남학생은 <code>[167, 0]</code>, 여학생은 <code>[167, 1]</code> 이 된다.</p>
<pre>y = [65, 61, 68, 63, 68, 61, 76, 67, 55, 51, 59, 53, 61, 56, 44, 57]
regr.fit(X, y)
print('계수 :', regr.coef_)
print('절편 :', regr.intercept_)
print('점수 :', regr.score(X, y))
print('동윤이와 은지의 추정 몸무게 :', <b class="blank">⑭</b>)</pre>
<p class="after">빈칸 ⑭에 들어갈 <b>호출식</b>을 쓰시오. 키 167 인 남학생과 여학생의 몸무게를 한 번에 추정한다. 실행하면 <code>[63.69388959 56.46358918]</code> 이 찍힌다.</p>`,
      hint: "두 사람의 입력을 한 리스트에 나란히 담아 predict 에 넘긴다." },

    { id: 30, section: "code", topic: "7.12 배열의 차원", type: "line",
      title: "1차원을 2차원으로",
      question: `<p class="lead">7.12절에서는 넘파이 1차원 배열을 그대로 만들었으므로, 학습에 넣기 전에 모양을 (5,) 에서 (5, 1) 로 바꾸어야 한다.</p>
<pre>X = np.array([1, 4.5, 9, 10, 13])
y = np.array([0, 0.2, 2.5, 5.4, 7.3])
regr = linear_model.LinearRegression()
<b class="blank">⑮</b>   <span class="cm"># 1차원 (5,)에서 2차원 (5,1) 형태로 바꾼다</span>
regr.fit(X, y)</pre>
<p class="after">빈칸 ⑮에 들어갈 한 줄을 쓰시오. <code>np.newaxis</code> 를 쓴다.</p>`,
      hint: "대괄호 안에 콜론과 newaxis 를 쉼표로 나란히 적는다." },

    { id: 31, section: "code", topic: "7.9 오차 함수 구현", type: "line",
      title: "차이의 제곱",
      question: `<p class="lead">7.9절에서는 넘파이로 평균 제곱 오차를 직접 구한다. 관측값은 <code>y</code>, 예측값은 <code>y_hat</code> 이다.</p>
<pre>y = np.array([1.2, 2.4, 2.5, 4.6, 5.4])
y_hat = np.array([1, 2, 3, 4, 5])
<b class="blank">①</b>        <span class="cm"># y_hat과 y의 차이값의 제곱</span>
e_mse = diff.sum() / len(y)
print('평균 제곱 오차 =', e_mse)</pre>
<p class="after">빈칸 ①에 들어갈 한 줄을 쓰시오. 결과는 <code>diff</code> 변수에 넣는다.</p>`,
      hint: "넘파이 배열끼리 빼면 요소별로 빠진다. 거듭제곱 연산자는 별표 두 개다." },

    { id: 32, section: "code", topic: "7.9 오차 함수 구현", type: "line",
      title: "평균 제곱 오차",
      question: `<p class="lead">같은 예제이다. 차이의 제곱을 모두 더한 뒤 데이터의 개수로 나눈다.</p>
<pre>diff = (y_hat - y) ** 2
<b class="blank">②</b>
print('평균 제곱 오차 =', e_mse)</pre>
<p class="after">빈칸 ②에 들어갈 한 줄을 쓰시오. 데이터 개수는 <code>y</code> 의 길이로 구한다. 실행하면 <code>0.19399999999999995</code> 가 찍힌다.</p>`,
      hint: "넘파이 배열의 합은 sum 메소드로, 길이는 len 함수로 구한다." },

    { id: 33, section: "code", topic: "7.9 오차 함수 구현", type: "line",
      title: "사이킷런의 오차 함수",
      question: `<p class="lead">같은 값을 사이킷런이 제공하는 함수로도 구할 수 있다.</p>
<pre><b class="blank">③</b>

<span class="cm"># sklearn에서 제공하는 함수를 쓴다. 위의 결과와 같다</span>
print('평균 제곱 오차 =', mean_squared_error(y_hat, y))</pre>
<p class="after">빈칸 ③에 들어갈 한 줄을 쓰시오.</p>`,
      hint: "평가 척도는 sklearn.metrics 안에 모여 있다." },

    { id: 34, section: "code", topic: "7.11 경사 하강법", type: "line",
      title: "가중치 갱신",
      question: `<p class="lead">7.11절에서는 사이킷런 없이 경사 하강법으로 직접 w와 b를 찾는다.</p>
<pre>X = np.array([1, 4.5, 9, 10, 13])
y = np.array([0, 0.2, 2.5, 5.4, 7.3])

w, b = 0, 0
learning_rate, epoch = 0.005, 1000
n = len(X)

for i in range(epoch):
    y_pred = w*X + b               <span class="cm"># 현재 w, b를 이용한 작업 T</span>
    error = y_pred - y             <span class="cm"># 성능척도 P</span>
    <b class="blank">④</b>   <span class="cm"># 경험 E로 개선</span>
    b = b - learning_rate * error.sum()

print('w =', w.round(2), ', b =', b.round(2))</pre>
<p class="after">빈칸 ④에 들어갈 한 줄을 쓰시오. 실행하면 <code>w = 0.63 , b = -1.65</code> 가 찍힌다.</p>`,
      hint: "오차의 제곱을 w로 미분하면 2Ex 꼴이다. 오차와 입력을 곱해 모두 더한 값이 기울기가 되고, 그 반대 방향으로 학습률만큼 움직인다." },

    { id: 35, section: "code", topic: "7.11 경사 하강법", type: "line",
      title: "절편 갱신",
      question: `<p class="lead">같은 예제이다.</p>
<pre>for i in range(epoch):
    y_pred = w*X + b
    error = y_pred - y
    w = w - learning_rate * (error * X).sum()
    <b class="blank">⑤</b>

print('w =', w.round(2), ', b =', b.round(2))</pre>
<p class="after">빈칸 ⑤에 들어갈 한 줄을 쓰시오.</p>`,
      hint: "오차의 제곱을 b로 미분하면 2E 꼴이다. w와 달리 입력을 곱하지 않는다." }

  ]
};
