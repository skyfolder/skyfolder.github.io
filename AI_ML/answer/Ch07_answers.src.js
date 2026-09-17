/* ============================================================
   Ch07_answers.src.js — 7장 평문 정답과 해설 (강사용)

   이 파일은 배포하지 않는다. .gitignore 로 막아 둔다.
   build_07.html 또는 build_answers.js 로 이 파일을 읽어
   Ch07_answers.js(해시본)를 만들어 배포한다.

   choice 는 보기 번호를 0부터 센다.
   나머지는 받아들일 답을 배열로 적는다. 하나라도 맞으면 정답 처리된다.
   ============================================================ */

var ANSWERS_SRC = {

  /* ---------- 이론 ---------- */

  1: { answers: [1],
       explanation: "성능척도이다. 머신러닝은 작업 T를 수행하는 동작을 성능척도 P로 평가하고, 경험 E를 쌓아 그 평가 점수를 더 나은 상태로 개선하는 과정으로 정의된다." },

  2: { answers: [2],
       explanation: "지도 학습이다. 교사 구실을 하는 레이블이 데이터와 함께 주어지며, 목표는 입력을 출력에 대응시키는 일반적인 규칙을 찾는 것이다. 고양이와 개를 구분하려면 어느 쪽인지 표시된 데이터를 충분히 주어야 한다." },

  3: { answers: ["군집화", "클러스터링", "clustering", "군집", "군집화clustering", "군집화 (clustering)"],
       explanation: "군집화이다. 외부에서 정답을 주지 않아도 학습 알고리즘이 스스로 입력의 구조를 발견하여 데이터를 둘 이상의 그룹으로 나눈다. 비슷한 뉴스끼리 묶어 보여 주는 일이 여기에 해당한다." },

  4: { answers: [2],
       explanation: "강화 학습이다. 에이전트가 환경 속에서 액션을 수행하고 그에 대한 보상을 받으면서 행동을 결정하는 정책을 바꾸어 나간다. 교사의 유무로 나뉘는 지도 학습과 비지도 학습과는 별도의 영역으로 다룬다." },

  5: { answers: ["종속변수", "종속변수이다", "종속", "종속 변수"],
       explanation: "종속변수이다. 면적은 스스로 정해지는 독립변수이고, 거래가격은 면적에 딸려 값이 정해지는 종속변수이다. 다만 주택 가격은 일조량이나 접근성 같은 다른 요인의 영향도 함께 받는다." },

  6: { answers: [1],
       explanation: "w는 직선의 기울기이자 계수이고, b는 절편이다. b는 x와 관계없이 y에 영향을 주는 값이다. 선형 회귀 알고리즘이 하는 일은 데이터를 가장 잘 설명하는 이 두 값을 찾는 것이다." },

  7: { answers: ["결정계수", "결정계수이다", "r제곱", "rsquare", "r2", "r^2", "r스퀘어", "r-square", "결정계수 (r2)", "결정계수r2", "r제곱값"],
       explanation: "결정계수, 곧 R 제곱이다. 전체 분포가 있을 때 모델이 설명해 내는 정도를 나타내며, 설명되지 않은 분산을 전체 분산으로 나눈 값을 1에서 뺀 것이다." },

  8: { answers: [1],
       explanation: "모델의 설명이 완벽하다는 뜻이다. 값이 0이면 모델이 변수를 설명하는 데 전혀 도움이 되지 않음을 뜻한다." },

  9: { answers: [3],
       explanation: "이산성은 기본 가정이 아니다. 네 가지 가정은 선형성, 독립성, 등분산성, 정규성이다. 정규성은 회귀직선과 관측값의 차이인 잔차가 정규성을 만족해야 한다는 요구이다." },

  10: { answers: [1],
        explanation: "절대값을 쓰기 때문에 미분이 불가능한 지점이 생긴다는 점이다. 경사 하강법은 미분에 기대어 최적해를 찾으므로 이것이 걸림돌이 된다. 축적을 보정하지 않아 값의 크기가 달라지면 같은 비율의 오차도 다른 크기로 나타난다는 문제도 있다." },

  11: { answers: ["mse", "평균제곱오차", "meansquareerror", "meansquarederror", "평균 제곱 오차 (mse)", "mse(평균제곱오차)"],
        explanation: "평균 제곱 오차, 곧 MSE이다. 예측값과 정답 레이블의 차이를 제곱하여 모두 더한 뒤 전체 데이터의 개수 m으로 나눈다. 머신러닝에서 가장 널리 쓰이는 오차이다." },

  12: { answers: [1],
        explanation: "양의 오차와 음의 오차가 서로 지워지는 것을 막고, 최적의 파라미터에서 최소값을 갖는 볼록한 곡면을 얻기 위해서이다. 실제값이 1, 2, 3이고 예측값이 1, 4, 1이면 차이의 합은 0이 되어 오차가 없는 것처럼 보인다. 볼록한 곡면이라야 기울기를 따라 내려가 최소값에 이를 수 있다." },

  13: { answers: ["경사하강법", "경사하강", "gradientdescent", "gradientdescentmethod", "경사 하강법 (gradient descent)", "경사하강법gradientdescent"],
        explanation: "경사 하강법이다. 오차 곡선의 미분으로 변화율을 구하고, 기울기의 반대 방향으로 조금씩 움직이기를 되풀이하여 최소값에 다가간다. 최소값은 변화율이 0이 되는 지점이다." },

  14: { answers: [1],
        explanation: "학습률이 너무 작으면 내려오는 간격이 지나치게 좁아 정해진 횟수 안에 수렴하지 못하고, 너무 크면 이동 간격이 커서 발산하여 nan이 나올 수 있다. 교재에서 학습률 0.00001은 w가 0.45에 머물렀고 1.0은 nan이 되었다." },

  15: { answers: ["에폭", "epoch", "1에폭", "1epoch", "에폭 (epoch)", "에폭epoch", "1 에폭"],
        explanation: "에폭이다. 전체 데이터를 한 번 모두 사용하여 오차를 구하고 w와 b를 갱신하는 것을 1 에폭이라 한다. 학습 횟수는 이 에폭의 수로 정한다." },

  /* ---------- 코딩 ---------- */

  16: { answers: ["import numpy as np"],
        explanation: "import numpy as np 이다. as 를 붙이면 이후 np 라는 짧은 이름으로 넘파이를 쓸 수 있다." },

  17: { answers: ["from sklearn import linear_model"],
        explanation: "from sklearn import linear_model 이다. 사이킷런 안의 선형 모델 묶음을 가져오며, 이 안에 LinearRegression 생성자가 들어 있다." },

  18: { answers: ["regr = linear_model.LinearRegression()"],
        explanation: "regr = linear_model.LinearRegression() 이다. 생성자를 호출해 만든 모델을 regr 가 가리키게 한다. 이 시점에는 아직 학습이 되지 않은 빈 모델이다." },

  19: { answers: [
          "X = [[163], [179], [166], [169], [171]]",
          "X = [[163], [179], [166], [169], [171], ]"
        ],
        explanation: "X = [[163], [179], [166], [169], [171]] 이다. 입력의 차원이 1차원이더라도 163이 아니라 [163]과 같이 원소가 하나인 리스트로 감싸야 한다. 학습 데이터는 반드시 2차원이어야 하기 때문이다." },

  20: { answers: ["y = [54, 63, 57, 56, 58]"],
        explanation: "y = [54, 63, 57, 56, 58] 이다. 목표값은 입력과 달리 1차원 배열로 준다. X는 2차원, y는 1차원이라는 짝을 기억해 두면 좋다." },

  21: { answers: ["regr.fit(X, y)"],
        explanation: "regr.fit(X, y) 이다. fit 이 학습을 맡는 메소드이며, 이 호출이 끝나야 coef_ 와 intercept_ 에 값이 채워진다." },

  22: { answers: ["coef = regr.coef_"],
        explanation: "coef = regr.coef_ 이다. 학습으로 정해진 속성에는 이름 끝에 밑줄이 붙는다. 입력이 여러 개면 계수도 여러 개이므로 배열로 돌아온다." },

  23: { answers: ["intercept = regr.intercept_"],
        explanation: "intercept = regr.intercept_ 이다. 절편은 입력의 개수와 관계없이 하나뿐이므로 스칼라로 돌아온다." },

  24: { answers: ["score = regr.score(X, y)"],
        explanation: "score = regr.score(X, y) 이다. 이 메소드는 참값과 예측값의 차이로 계산한 결정계수 R 제곱을 돌려준다. 교재의 키와 몸무게 예제에서는 0.922가 나왔다." },

  25: { answers: [
          "result = regr.predict([[167]])",
          "result = regr.predict([[167], ])"
        ],
        explanation: "result = regr.predict([[167]]) 이다. 예측에 넣는 입력도 학습 때와 같은 2차원 모양이어야 하므로 167을 두 겹의 대괄호로 감싼다. 돌아오는 값도 배열이다." },

  26: { answers: [
          "plt.scatter(X, y, color='blue', marker='D')",
          "plt.scatter(X, y, marker='D', color='blue')"
        ],
        explanation: "plt.scatter(X, y, color='blue', marker='D') 이다. scatter 는 점을 찍고 plot 은 점을 잇는다. marker 의 D는 마름모를 뜻한다." },

  27: { answers: ["X = X[:, np.newaxis]"],
        explanation: "X = X[:, np.newaxis] 이다. 콜론은 기존 축을 그대로 두라는 뜻이고 np.newaxis 는 그 자리에 길이 1인 축을 새로 끼워 넣으라는 뜻이다. 모양이 (5,)에서 (5, 1)로 바뀌어 fit 에 넘길 수 있게 된다." },

  28: { answers: [
          "e_mse = diff.sum() / len(y)",
          "e_mse = np.sum(diff) / len(y)"
        ],
        explanation: "e_mse = diff.sum() / len(y) 이다. 넘파이 배열은 sum 메소드로 전체 합을 구한다. 같은 값을 sklearn.metrics 의 mean_squared_error 로도 얻을 수 있다." },

  29: { answers: ["from sklearn.metrics import mean_squared_error"],
        explanation: "from sklearn.metrics import mean_squared_error 이다. 평가 척도는 sklearn.metrics 안에 모여 있으며 r2_score 도 같은 곳에 있다." },

  30: { answers: [
          "w = w - learning_rate * (error * X).sum()",
          "w = w - learning_rate * (X * error).sum()",
          "w -= learning_rate * (error * X).sum()",
          "w = w - learning_rate * np.sum(error * X)"
        ],
        explanation: "w = w - learning_rate * (error * X).sum() 이다. 오차의 제곱을 w로 미분하면 2Ex 꼴이 되므로, 오차와 입력을 곱해 모두 더한 값이 기울기가 된다. 그 방향의 반대로 학습률만큼 움직여야 오차가 줄어든다." }
};

if (typeof module !== 'undefined') { module.exports = ANSWERS_SRC; }
if (typeof window !== 'undefined') { window.ANSWERS_SRC = ANSWERS_SRC; }
