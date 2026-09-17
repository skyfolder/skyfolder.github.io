/* ============================================================
   answer/Ch07_answers.src.js — 7장 평문 정답 (강사용 원본)

   ★ 이 파일은 GitHub에 올리지 마세요. .gitignore 로 막아 두었습니다.
   ★ 고친 뒤에는 answer/build_07.html 을 열어 정답 파일을 다시 만드세요.
     (또는 node answer/build_answers.js 07)

   choice 는 보기 번호를 0부터 셉니다.
   ============================================================ */

window.ANSWER_SOURCE = {

  /* ---------- 이론 ---------- */

  1:  { answers: [1],
        explanation: "성능척도이다. 머신러닝은 작업 T를 수행하는 동작을 성능척도 P로 평가하고, 경험 E를 쌓아 그 평가 점수를 더 나은 상태로 개선하는 과정으로 정의된다. 회귀 문제에서는 예측한 값과 목표값의 차이가 작을수록 높은 점수를 주는 것이 P에 해당한다." },

  2:  { answers: [2],
        explanation: "지도 학습이다. 교사 구실을 하는 레이블이 데이터와 함께 주어지며, 목표는 입력을 출력에 대응시키는 일반적인 규칙을 찾는 것이다. 학습 단계에서 만들어진 예측 모델은 레이블이 없는 새 데이터에 대해서도 답을 내놓는다." },

  3:  { answers: ["군집화", "클러스터링", "clustering", "군집", "군집화clustering", "군집화 (clustering)"],
        explanation: "군집화이다. 외부에서 정답을 주지 않아도 학습 알고리즘이 스스로 입력의 구조를 발견하여 데이터를 둘 이상의 그룹으로 나눈다. 어떤 특성으로 나눌지도 컴퓨터가 스스로 학습한다." },

  4:  { answers: [2],
        explanation: "강화 학습이다. 에이전트가 환경 속에서 액션을 수행하고 보상을 받으면서 행동을 결정하는 정책을 바꾸어 나간다. 교사의 유무로 나뉘는 지도 학습과 비지도 학습과는 별도의 영역으로 다룬다." },

  5:  { answers: ["종속변수", "종속 변수", "종속변수이다", "종속"],
        explanation: "종속변수이다. 독립변수는 연구자가 임의로 조절할 수 있고 다른 변수에 영향을 받지 않는 변수이고, 종속변수는 독립변수에 영향을 받아 변화하는 변수이다. 여기서는 면적이 독립변수, 거래가격이 종속변수이다." },

  6:  { answers: [1],
        explanation: "w는 직선의 기울기이자 계수이고, b는 절편이다. b는 x와 관계없이 y에 영향을 주는 값이다. x는 데이터의 특성이라 바꿀 수 없으므로, 선형 회귀가 제어할 수 있는 값은 이 기울기와 절편뿐이다." },

  7:  { answers: ["결정계수", "결정 계수", "결정계수이다", "r제곱", "rsquare", "r2", "r^2", "r스퀘어", "r-square", "결정계수 (r2)", "결정계수r2"],
        explanation: "결정계수, 곧 R 제곱이다. 전체 분포 가운데 모델이 설명해 내는 정도를 나타내며, 설명되지 않은 분산을 Y의 전체 분산으로 나눈 값을 1에서 뺀 것이다. MSE나 RMSE는 절대적인 숫자라 모델의 좋고 나쁨을 가늠하기 어려워 이 척도가 필요하다." },

  8:  { answers: [1],
        explanation: "모델의 설명이 완벽하다는 뜻이다. 값이 0이면 모델이 변수를 설명하는 데 전혀 도움이 되지 않음을 뜻한다. 예제의 0.8426 은 그 사이에 있는 값이다." },

  9:  { answers: [3],
        explanation: "이산성은 기본 가정이 아니다. 네 가지 가정은 선형성, 독립성, 등분산성, 정규성이다. 정규성은 회귀직선과 관측값의 차이인 잔차가 정규성을 만족해야 한다는 요구이다." },

  10: { answers: [1],
        explanation: "절대값을 쓰기 때문에 미분이 불가능한 지점이 생긴다는 점이다. 경사 하강법은 미분에 기대어 최적해를 찾으므로 이것이 걸림돌이 된다. 축적을 보정하지 않아 값이 10배로 커지면 같은 비율의 오차도 10배로 나타난다는 문제도 함께 지적된다." },

  11: { answers: ["mse", "평균제곱오차", "평균 제곱 오차", "meansquareerror", "meansquarederror", "mse(평균제곱오차)"],
        explanation: "평균 제곱 오차, 곧 MSE이다. 예측치와 정답 레이블의 차이를 제곱하여 모두 더한 뒤 전체 데이터의 개수 m으로 나눈다. 여기에 제곱근을 취하면 RMSE가 된다." },

  12: { answers: [1],
        explanation: "양의 오차와 음의 오차가 서로 지워지는 것을 막고, 최적의 파라미터에서 최소값을 갖는 볼록한 곡면을 얻기 위해서이다. 양의 오차만 많으면 합이 무한히 커지고 음의 오차만 많으면 무한히 작아질 수 있는데, 제곱하면 그런 일이 없어지고 기울기를 따라 내려가 최소 오차에 접근할 수 있다." },

  13: { answers: ["경사하강법", "경사 하강법", "경사하강", "gradientdescent", "gradient descent", "gradientdescentmethod", "경사 하강법 (gradient descent)"],
        explanation: "경사 하강법이다. 미분으로 오차 곡선의 변화율을 구하고, 기울기의 반대 방향으로 조금씩 움직이기를 되풀이하여 최소값에 다가간다. 반복적으로 조금씩 최소값에 접근하는 이 과정이 곧 학습의 과정이며, 최소값은 변화율이 0이 되는 지점이다." },

  14: { answers: [1],
        explanation: "학습률이 너무 작으면 내려오는 간격이 지나치게 좁아 정해진 횟수 안에 수렴하지 못하고, 너무 크면 이동 간격이 커서 발산하여 nan 이 나올 수 있다. 학습률 0.00001 은 앞쪽, 1.0 은 뒤쪽 현상에 해당한다." },

  15: { answers: ["에폭", "epoch", "1에폭", "1epoch", "에폭 (epoch)", "에폭epoch", "1 에폭"],
        explanation: "에폭이다. 전체 데이터를 한 번 모두 사용하여 오차를 구하고 w와 b를 갱신하는 것을 1 에폭이라 한다. 예제에서 epoch 를 1000 으로 둔 것은 이 과정을 천 번 되풀이한다는 뜻이다." },

  /* ---------- 코딩 ---------- */

  16: { answers: ["import numpy as np"],
        explanation: "import numpy as np 이다. as 를 붙이면 이후 np 라는 짧은 이름으로 넘파이를 쓸 수 있다." },

  17: { answers: ["from sklearn import linear_model"],
        explanation: "from sklearn import linear_model 이다. 사이킷런 안의 선형 모델 묶음을 가져오며, 이 안에 LinearRegression 생성자가 들어 있다." },

  18: { answers: ["regr = linear_model.LinearRegression()"],
        explanation: "regr = linear_model.LinearRegression() 이다. 생성자를 호출해 만든 모델을 regr 가 가리키게 한다. 이 시점에는 아직 학습되지 않은 빈 모델이다." },

  19: { answers: [
          "X = [[163], [179], [166], [169], [171]]",
          "X = [[163], [179], [166], [169], [171], ]"
        ],
        explanation: "X = [[163], [179], [166], [169], [171]] 이다. 입력의 차원이 1차원이더라도 163 이 아니라 [163] 과 같이 원소가 하나인 리스트로 감싸야 한다. 리스트 안에 또 다른 리스트들이 들어 있는 2차원 리스트, 곧 5×1 행렬이 된다." },

  20: { answers: ["y = [54, 63, 57, 56, 58]"],
        explanation: "y = [54, 63, 57, 56, 58] 이다. 목표값은 입력과 달리 1차원 배열형 자료를 쓴다. 학습 데이터 X는 2차원, 목표값 y는 1차원이라는 짝을 기억해 두면 좋다." },

  21: { answers: ["regr.fit(X, y)"],
        explanation: "regr.fit(X, y) 이다. fit 이 학습을 맡는 메소드이며, 이 호출이 끝나야 coef_ 와 intercept_ 에 값이 채워진다." },

  22: { answers: ["coef = regr.coef_"],
        explanation: "coef = regr.coef_ 이다. 학습으로 정해진 속성에는 이름 끝에 밑줄이 붙는다. 입력의 특성이 여러 개면 계수도 여러 개이므로 배열로 돌아오며, 그래서 출력이 [0.54] 처럼 대괄호와 함께 찍힌다." },

  23: { answers: ["intercept = regr.intercept_"],
        explanation: "intercept = regr.intercept_ 이다. 절편은 특성의 개수와 관계없이 하나뿐이므로 스칼라로 돌아온다." },

  24: { answers: [
          "plt.scatter(X, y, color='blue', marker='D')",
          "plt.scatter(X, y, marker='D', color='blue')"
        ],
        explanation: "plt.scatter(X, y, color='blue', marker='D') 이다. scatter 는 점을 찍고 plot 은 점을 잇는다. marker 의 D는 마름모를 뜻한다." },

  25: { answers: ["y_pred = regr.predict(X)"],
        explanation: "y_pred = regr.predict(X) 이다. 학습에 쓴 입력을 그대로 넣어 모델이 내놓는 값을 얻는다. 이 값들을 이으면 학습으로 찾아낸 회귀 직선이 된다." },

  26: { answers: [
          "plt.plot(X, y_pred, 'r:')",
          "plt.plot(X, y_pred, ':r')"
        ],
        explanation: "plt.plot(X, y_pred, 'r:') 이다. 세 번째 인수의 r 은 빨간색, 콜론은 점선을 뜻한다. 이렇게 점과 선을 겹쳐 그리면 데이터와 모델을 한눈에 견줄 수 있다." },

  27: { answers: [
          "result = regr.predict(unseen)",
          "result = regr.predict([[167]])"
        ],
        explanation: "result = regr.predict(unseen) 이다. 예측에 넣는 입력도 학습 때와 같은 2차원 모양이어야 하므로 167 을 두 겹의 대괄호로 감싸 unseen 을 만들어 두었다. 돌아오는 값도 배열이라 [56.3] 처럼 찍힌다." },

  28: { answers: ["from sklearn.metrics import r2_score"],
        explanation: "from sklearn.metrics import r2_score 이다. 평가 척도는 sklearn.metrics 안에 모여 있으며 mean_squared_error 도 같은 곳에 있다. 이 값은 regr.score(X, y) 와 같은 결정계수이다." },

  29: { answers: [
          "regr.predict([[167, 0], [167, 1]])",
          "regr.predict([[167, 0], [167, 1], ])"
        ],
        explanation: "regr.predict([[167, 0], [167, 1]]) 이다. 성별을 두 번째 특성으로 넣어 입력을 2차원으로 늘렸으므로, 한 사람의 입력도 값 두 개짜리 리스트가 된다. 두 사람을 한 리스트에 나란히 담으면 예측값도 두 개가 한꺼번에 돌아온다." },

  30: { answers: ["X = X[:, np.newaxis]"],
        explanation: "X = X[:, np.newaxis] 이다. 콜론은 기존 축을 그대로 두라는 뜻이고 np.newaxis 는 그 자리에 길이 1인 축을 새로 끼워 넣으라는 뜻이다. 모양이 (5,) 에서 (5, 1) 로 바뀌어 fit 에 넘길 수 있게 된다." },

  31: { answers: [
          "diff = (y_hat - y) ** 2",
          "diff = (y - y_hat) ** 2"
        ],
        explanation: "diff = (y_hat - y) ** 2 이다. 넘파이 배열끼리 빼면 요소별로 빠지고, 거듭제곱 연산자 두 개로 요소마다 제곱된다. 제곱하므로 y_hat 과 y 의 순서를 바꾸어도 값은 같다." },

  32: { answers: [
          "e_mse = diff.sum() / len(y)",
          "e_mse = np.sum(diff) / len(y)"
        ],
        explanation: "e_mse = diff.sum() / len(y) 이다. 넘파이 배열은 sum 메소드로 전체 합을 구한다. 이것이 평균 제곱 오차의 정의를 그대로 옮긴 것이다." },

  33: { answers: ["from sklearn.metrics import mean_squared_error"],
        explanation: "from sklearn.metrics import mean_squared_error 이다. 직접 계산한 값과 이 함수가 돌려주는 값은 0.19399999999999995 로 같다." },

  34: { answers: [
          "w = w - learning_rate * (error * X).sum()",
          "w = w - learning_rate * (X * error).sum()",
          "w -= learning_rate * (error * X).sum()",
          "w = w - learning_rate * np.sum(error * X)"
        ],
        explanation: "w = w - learning_rate * (error * X).sum() 이다. 오차의 제곱을 w로 미분하면 2Ex 꼴이 되므로, 오차와 입력을 곱해 모두 더한 값이 기울기가 된다. 그 방향의 반대로 학습률만큼 움직여야 오차가 줄어든다." },

  35: { answers: [
          "b = b - learning_rate * error.sum()",
          "b -= learning_rate * error.sum()",
          "b = b - learning_rate * np.sum(error)"
        ],
        explanation: "b = b - learning_rate * error.sum() 이다. 오차의 제곱을 b로 미분하면 2E 꼴이 되어 입력이 곱해지지 않는다. w 쪽 식과 견주어 보면 차이가 X를 곱하느냐 마느냐뿐임을 알 수 있다." }
};
