---

---
---
## 부록 B. matplotlib 빠른 입문 — 본문 Python 코드 읽기

## B.1 matplotlib이란 무엇인가

matplotlib은 Python에서 그래프를 그리는 표준 라이브러리이다. 선그래프, 산점도, 막대그래프, 히트맵 같은 대부분의 과학·공학 그림을 몇 줄로 그릴 수 있다. 본문에서는 그중에서도 `pyplot`이라는 하위 모듈만 사용하며, 관례상 `plt`라는 짧은 이름으로 줄여 쓴다.

본문에서 matplotlib이 차지하는 자리는 분명하다. Fortran이 계산한 숫자는 그 자체로는 길게 늘어선 수의 나열일 뿐이다. 이 숫자를 사람이 한눈에 이해할 수 있는 형태로 바꾸는 마지막 단계가 시각화이며, 그 일을 matplotlib이 담당한다. 즉 matplotlib은 "수치 결과가 그림이 되는" 흐름의 끝을 맡는 도구이다.



## B.2 Colab에서의 준비와 import 관례


Colab에는 matplotlib과 numpy가 이미 설치되어 있다. 따라서 본문의 Python 셀에서는 설치 명령 없이 곧바로 불러 쓰기만 한다. 본문 전체에서 다음 세 줄을 고정된 도입부로 사용한다.

```python
import csv
import numpy as np
import matplotlib.pyplot as plt
```

각 줄의 뜻은 다음과 같다. `import csv`는 csv 파일을 한 줄씩 읽기 위한 표준 모듈을 불러온다. `import numpy as np`는 수치 배열을 다루는 numpy를 `np`라는 이름으로 불러온다. `import matplotlib.pyplot as plt`는 그래프 그리기 기능을 `plt`라는 이름으로 불러온다. 본문 모든 그림 예제는 이 세 이름(`csv`, `np`, `plt`)을 그대로 사용하므로, 코드에서 `plt`가 보이면 곧 matplotlib을 부르고 있다고 읽으면 된다.

### 시각화의 단순한 세 단계 흐름

Python과 matplotlib을 활용해 데이터를 그림으로 바꾸는 과정은 매우 단순하며, 기본적으로 다음의 3단계 흐름을 따른다.

1. **도구 불러오기 (`import`)**
    
    그래프를 그리는 핵심 모듈을 `plt`라는 약칭으로 불러온다.
            
    ```python
    import matplotlib.pyplot as plt
    ```
    
2. **그래프 그리기 (`plot`, `bar`, `scatter`)**
    
    전달받은 데이터의 형태에 따라 적절한 함수를 사용해 메모리 상에 그림을 그린다. 선 그래프는 `plt.plot()`, 막대그래프는 `plt.bar()`, 점으로 분포를 나타내는 산점도는 `plt.scatter()`를 사용한다.
    
3. **그림 파일로 저장하기 (`savefig`)**
    
    화면에 그린 그래프를 이미지 파일로 최종 저장한다.
    
        
    ```python
    plt.savefig("그림.png")
    ```
    

이처럼 Fortran으로 뼈대를 만들고 Python으로 옷을 입히는 연계 과정을 이해하면, 복잡한 과학 계산 결과도 누구나 쉽게 이해할 수 있는 직관적인 시각 자료로 재탄생시킬 수 있다.




## B.3 데이터 읽어들이기

그림을 그리기 전에, Fortran이 저장해 둔 csv 파일을 Python 쪽 숫자로 가져와야 한다. 본문에서는 두 가지 방법을 쓴다. 하나는 표준 `csv` 모듈을 쓰는 방법이고, 다른 하나는 numpy로 한 번에 읽는 방법이다. 두 방법은 결과가 같으므로, 상황에 맞게 골라 쓰면 된다.

### B.3.1 csv 모듈로 한 줄씩 읽기 (본문 표준 방식)

본문 1장과 6장에서 처음 소개하는 기본 방식이다. 파일을 열어 한 줄씩 읽고, 각 줄을 쉼표로 나눈 뒤 숫자로 바꿔 리스트에 모은다.

```python
xs, ys = [], []
with open("data.csv") as f:
    for row in csv.reader(f):
        xs.append(float(row[0]))
        ys.append(float(row[1]))
```

한 줄씩 풀어 읽으면 다음과 같다. `xs, ys = [], []`는 빈 리스트 두 개를 만든다. `with open("data.csv") as f:`는 `data.csv` 파일을 열어 `f`라는 이름으로 다룬다(블록을 벗어나면 파일이 자동으로 닫힌다). `csv.reader(f)`는 파일을 한 줄씩, 그리고 각 줄을 쉼표 기준으로 잘라 준다. 잘린 한 줄이 `row`이며, `row[0]`은 첫 번째 열, `row[1]`은 두 번째 열이다. 파일에서 읽은 값은 글자 형태이므로 `float(...)`로 실수로 바꾼 뒤 리스트에 더한다.

### B.3.2 numpy로 한 번에 읽기

열이 여러 개이거나 값이 많을 때는 numpy의 `loadtxt`로 통째로 읽는 편이 간단하다.

```python
data = np.loadtxt("data.csv", delimiter=",")
x = data[:, 0]
y = data[:, 1]
```

`np.loadtxt`는 csv 파일을 숫자 표(2차원 배열)로 한 번에 읽는다. `delimiter=","`는 값이 쉼표로 나뉘어 있다는 뜻이다. 읽어 들인 `data`에서 `data[:, 0]`은 모든 행의 첫 번째 열, `data[:, 1]`은 모든 행의 두 번째 열을 뜻한다. 본문에서 비교 그래프처럼 열이 셋 이상인 파일은 대개 이 방식으로 읽는다.



## B.4 가장 기본: 선그래프 plot

가장 자주 쓰는 그림은 선그래프이며, `plt.plot`으로 그린다. 앞에서 읽은 `xs`, `ys`를 그대로 넘기면 된다.

```python
plt.plot(xs, ys)
plt.show()
```

`plt.plot(xs, ys)`는 가로축 값 `xs`와 세로축 값 `ys`를 짝지어 점을 찍고, 그 점들을 선으로 잇는다. `plt.show()`는 완성된 그림을 화면에 띄운다. Colab에서는 셀을 실행하면 그림이 셀 아래에 바로 나타난다.

선의 모양과 색은 옵션으로 바꾼다.

```python
plt.plot(xs, ys, color="tab:blue", linestyle="--", linewidth=2)
```

`color`는 선 색, `linestyle`은 선 모양(`"-"` 실선, `"--"` 점선), `linewidth`는 선 굵기이다. 값을 점으로만 찍고 싶으면 `marker="o"`를 더한다.



## B.5 그래프 꾸미기: 그림 크기·축 이름·제목·격자

그림에 정보를 더하는 함수들은 본문 거의 모든 예제에 똑같이 등장한다. 한 번 익혀 두면 모든 장에서 그대로 읽힌다.

```python
plt.figure(figsize=(8, 5))
plt.plot(xs, ys)
plt.xlabel("x")
plt.ylabel("sin(x)")
plt.title("Computed by Fortran, plotted by Python")
plt.grid(True)
```

각 함수의 역할은 다음과 같다. `plt.figure(figsize=(8, 5))`는 그림판의 크기를 정한다. 괄호 안의 두 수는 (가로, 세로) 크기이며, 본문은 가로 크기를 8로 통일한다(집필 지침 25). `plt.xlabel`과 `plt.ylabel`은 각각 가로축과 세로축의 이름을 붙인다. `plt.title`은 그림 위쪽에 제목을 단다. `plt.grid(True)`는 배경에 격자선을 그려 값을 읽기 쉽게 한다.



## B.6 여러 곡선을 한 그래프에: 범례

본문 4장(여러 수학 함수 겹쳐 그리기)과 11장(매개변수를 바꿔 호출한 결과군)처럼, 곡선 여러 개를 한 그림에 겹쳐 그리는 경우가 많다. `plt.plot`을 여러 번 부르면 같은 그림 위에 차례로 겹쳐진다. 이때 각 곡선에 `label`을 붙이고 `plt.legend()`를 부르면 어떤 선이 무엇인지 알려 주는 범례가 생긴다.

```python
data = np.loadtxt("compare.csv", delimiter=",")

plt.figure(figsize=(8, 5))
plt.plot(data[:, 0], data[:, 1], label="sin", color="tab:blue")
plt.plot(data[:, 0], data[:, 2], label="cos", color="tab:red", linestyle="--")
plt.xlabel("x")
plt.ylabel("value")
plt.legend()
plt.grid(True)
plt.show()
```

여기서 `compare.csv`는 첫 번째 열이 가로축 값이고, 두 번째와 세 번째 열이 각각 다른 곡선의 값이라고 가정한 것이다. `plt.plot`을 두 번 불러 두 곡선을 그리고, 각각에 `label`로 이름을 달았다. 마지막에 `plt.legend()`가 그 이름들을 모아 작은 상자로 보여 준다. `plt.legend()`를 빠뜨리면 곡선은 그려지지만 범례 상자는 나타나지 않는다.



## B.7 산점도: scatter

본문 2장(결과 점 찍기), 6장(산점도), 13장(입자 위치)처럼 값들을 선으로 잇지 않고 점으로만 찍을 때는 `plt.scatter`를 쓴다.

```python
plt.figure(figsize=(8, 5))
plt.scatter(xs, ys, s=12, color="tab:green")
plt.xlabel("x")
plt.ylabel("y")
plt.show()
```

`plt.scatter(xs, ys)`는 `xs`와 `ys`를 짝지어 점만 찍는다. `s`는 점의 크기, `color`는 점의 색이다. 선그래프와 달리 점을 잇는 선이 없으므로, 흩어진 데이터의 분포를 볼 때 알맞다.



## B.8 막대그래프: bar

본문 1장의 첫 그림 예제는 수열을 막대그래프로 표시한다. 막대그래프는 `plt.bar`로 그린다.

```python
data = np.loadtxt("bars.csv", delimiter=",")

plt.figure(figsize=(8, 5))
plt.bar(data[:, 0], data[:, 1])
plt.xlabel("n")
plt.ylabel("value")
plt.show()
```

`plt.bar(x, height)`는 가로축 위치 `x`마다 높이 `height`인 막대를 세운다. 위 예에서는 첫 번째 열이 막대의 위치, 두 번째 열이 막대의 높이가 된다. 항목별 값을 비교해 보일 때 알맞다.



## B.9 2차원 데이터: 히트맵 imshow

본문 7장(2차원 배열)과 8장(행렬 곱 결과)처럼 표 모양의 2차원 데이터는 색의 진하기로 값을 나타내는 히트맵이 알맞다. `plt.imshow`로 그린다.

```python
grid = np.loadtxt("grid.csv", delimiter=",")

plt.figure(figsize=(8, 5))
im = plt.imshow(grid, cmap="viridis", origin="lower", aspect="auto")
plt.colorbar(im, label="value")
plt.xlabel("column")
plt.ylabel("row")
plt.show()
```

`plt.imshow(grid)`는 2차원 배열 `grid`의 각 칸을 값에 따라 다른 색으로 칠한다. `cmap`은 사용할 색 배열(컬러맵)의 이름이며 `"viridis"`가 무난하다. `origin="lower"`는 배열의 첫 행을 그림 아래쪽에 놓아, 수학에서 다루는 좌표 방향과 맞춘다. `aspect="auto"`는 칸을 정사각형으로 강제하지 않고 그림판에 맞춰 늘인다. `plt.colorbar`는 색과 값의 대응을 보여 주는 색 막대를 옆에 붙인다. `imshow`가 돌려준 `im`을 `colorbar`에 넘기면 그 그림에 맞는 색 막대가 만들어진다.



## B.10 여러 그림을 한 화면에: subplots

본문 15장의 종합 프로젝트는 그림 여러 개를 나란히 배치한다. 이때는 `plt.subplots`로 그림판을 여러 칸으로 나눈다.

```python
fig, axes = plt.subplots(1, 2, figsize=(8, 4))

axes[0].plot(xs, ys)
axes[0].set_title("line")
axes[0].set_xlabel("x")
axes[0].grid(True)

axes[1].scatter(xs, ys, s=8)
axes[1].set_title("scatter")
axes[1].set_xlabel("x")
axes[1].grid(True)

fig.tight_layout()
plt.show()
```

`plt.subplots(1, 2, figsize=(8, 4))`는 1행 2열, 즉 그림 두 칸을 가로로 나란히 만든다. 돌려받은 `fig`는 그림판 전체이고, `axes`는 각 칸을 담은 목록이다. `axes[0]`은 왼쪽 칸, `axes[1]`은 오른쪽 칸이다. 한 칸 안에 그릴 때는 `plt.plot` 대신 `axes[0].plot`처럼 칸에 직접 명령한다. 이때 축 이름과 제목은 함수 이름이 조금 달라져서 `set_xlabel`, `set_title`을 쓴다. `fig.tight_layout()`은 칸들이 서로 겹치지 않도록 간격을 자동으로 정리한다.



## B.11 그림 저장과 표시: savefig와 show

그린 그림은 화면에 띄울 수도 있고, 파일로 저장할 수도 있다. 본문은 둘을 함께 쓴다.

```python
plt.savefig("plot.png", dpi=120)
plt.show()
```

`plt.savefig("plot.png", dpi=120)`는 그림을 `plot.png` 파일로 저장한다. `dpi`는 해상도이며, 값이 클수록 또렷하지만 파일이 커진다. `plt.show()`는 그림을 화면에 띄운다. 한 가지 순서 규칙이 있다. 저장은 반드시 `show`보다 먼저 해야 한다. `show`가 먼저 실행되면 그림이 비워질 수 있어, 그 뒤의 `savefig`는 빈 그림을 저장하기 쉽다.



## B.12 본문 표준 시각화 셀 한 줄씩 읽기

이제 본문 집필 가이드(3.2)에 실린 표준 시각화 셀 전체를 한 줄씩 읽어 본다. 앞 절들에서 다룬 문법이 모두 모여 있으므로, 이 한 덩어리를 이해하면 본문 대부분의 Python 셀을 같은 방식으로 읽을 수 있다.

```python
import csv
import matplotlib.pyplot as plt

xs, ys = [], []
with open("data.csv") as f:
    for row in csv.reader(f):
        xs.append(float(row[0]))
        ys.append(float(row[1]))

plt.plot(xs, ys)
plt.xlabel("x")
plt.ylabel("sin(x)")
plt.title("Computed by Fortran, plotted by Python")
plt.grid(True)
plt.savefig("plot.png", dpi=120)
plt.show()
```

앞의 두 줄은 csv 모듈과 matplotlib을 불러온다(B.2). 그다음 빈 리스트 두 개를 만들고, `data.csv`를 열어 한 줄씩 읽으며 첫 번째 열을 `xs`에, 두 번째 열을 `ys`에 모은다(B.3.1). 값이 모이면 `plt.plot`으로 선그래프를 그리고(B.4), 축 이름과 제목과 격자를 더해 그림을 꾸민 뒤(B.5), `savefig`로 파일에 저장하고 `show`로 화면에 띄운다(B.11). 결국 이 셀은 "Fortran이 쓴 `data.csv`를 읽어 선그래프로 그린 뒤 저장하고 보여 주는" 한 가지 일을 한다.

본문의 다른 그림 예제도 구조는 같다. 데이터를 읽는 부분(B.3)과 그림을 꾸미는 부분(B.5)은 거의 그대로이고, 가운데의 그리는 함수만 `plot`에서 `scatter`, `bar`, `imshow` 등으로 바뀐다. 따라서 새 예제를 만날 때는 "어떤 함수로 그렸는가" 한 곳만 확인하면 나머지는 이미 아는 형태이다.

## B.13 빠른 참조표: 본문 그림 종류와 함수

본문 각 장의 그림 예제가 어떤 함수에 대응하는지 한눈에 정리한다. 그림을 새로 만들거나 고칠 때 이 표에서 함수를 골라 B.4~B.10의 해당 절을 펼치면 된다.

| 그리려는 것         | 사용하는 함수                        | 다루는 절 | 본문에서 쓰는 장           |
| -------------- | ------------------------------ | ----- | ------------------- |
| 값을 선으로 잇기      | `plt.plot`                     | B.4   | 3, 4, 5, 9, 10, 11장 |
| 여러 곡선 겹치기 + 범례 | `plt.plot` 여러 번 + `plt.legend` | B.6   | 4, 11장              |
| 점만 찍기          | `plt.scatter`                  | B.7   | 2, 6, 13장           |
| 항목별 막대         | `plt.bar`                      | B.8   | 1장                  |
| 2차원 표를 색으로     | `plt.imshow` + `plt.colorbar`  | B.9   | 7, 8장               |
| 그림 여러 칸 배치     | `plt.subplots`                 | B.10  | 15장                 |

공통으로 쓰는 함수는 다음과 같다. 그림 크기는 `plt.figure(figsize=(8, ...))`, 축 이름은 `plt.xlabel`·`plt.ylabel`, 제목은 `plt.title`, 격자는 `plt.grid(True)`, 저장은 `plt.savefig`, 표시는 `plt.show`이다.


