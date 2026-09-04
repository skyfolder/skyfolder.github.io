---

## 부록 C. 주요 내장 프로시저 레퍼런스

### C.1 수학 함수

|함수|의미|
|---|---|
|`abs(x)`|절댓값(복소수면 크기)|
|`sqrt(x)`|제곱근|
|`exp(x)` / `log(x)` / `log10(x)`|지수, 자연로그, 상용로그|
|`sin/cos/tan(x)`|삼각함수(라디안)|
|`asin/acos/atan(x)`|역삼각함수|
|`atan2(y, x)`|사분면을 고려한 역탄젠트|
|`sinh/cosh/tanh(x)`|쌍곡선 함수|
|`hypot(x, y)`|빗변 길이(오버플로에 안전)|
|`max(a, b, ...)` / `min(a, b, ...)`|최댓값/최솟값|
|`mod(a, p)` / `modulo(a, p)`|나머지(부호 규칙이 다름)|
|`sign(a, b)`|`b`의 부호를 `a`의 크기에 부여|
|`erf(x)` / `erfc(x)`|오차함수와 여오차함수|
|`gamma(x)` / `log_gamma(x)`|감마함수와 그 로그|

### C.2 형 변환·반올림

| 함수                        | 의미              |
| ------------------------- | --------------- |
| `int(x [, kind])`         | 정수로 절단(0 방향)    |
| `real(x [, kind])`        | 실수로 변환          |
| `cmplx(x [, y] [, kind])` | 복소수 생성          |
| `aimag(z)` / `conjg(z)`   | 허수부 / 켤레복소수     |
| `nint(x [, kind])`        | 가장 가까운 정수로 반올림  |
| `floor(x)` / `ceiling(x)` | 내림 / 올림(정수 반환)  |
| `aint(x)` / `anint(x)`    | 절단 / 반올림(실수 반환) |
| `char(i)` / `ichar(c)`    | 정수↔문자 코드 변환     |
| `achar(i)` / `iachar(c)`  | ASCII 기준 변환     |

### C.3 종류(kind)·수치 모델 조회

|함수|의미|
|---|---|
|`kind(x)`|변수의 종류 매개변수 값|
|`selected_real_kind(p [, r])`|정밀도 `p`자리·지수범위 `r`를 만족하는 실수 종류|
|`selected_int_kind(r)`|자릿수 `r`를 담는 정수 종류|
|`precision(x)` / `range(x)`|표현 가능한 십진 정밀도 / 지수 범위|
|`huge(x)` / `tiny(x)`|최대 / 최소 양의 정규값|
|`epsilon(x)`|1.0과 그다음 표현값의 간격(기계 입실론)|
|`digits(x)` / `radix(x)`|유효 자릿수 / 기수|

### C.4 배열 함수

|함수|의미|
|---|---|
|`size(array [, dim])`|전체 원소 수 또는 특정 차원 크기|
|`shape(array)`|형상(각 차원 크기 벡터)|
|`lbound/ubound(array [, dim])`|하한 / 상한 첨자|
|`sum/product(array [, dim] [, mask])`|합 / 곱|
|`maxval/minval(array [, dim] [, mask])`|최댓값 / 최솟값|
|`maxloc/minloc(array [, mask])`|최댓값 / 최솟값 위치|
|`count(mask [, dim])`|참인 원소 개수|
|`any/all(mask [, dim])`|하나라도 참 / 모두 참|
|`dot_product(a, b)`|벡터 내적|
|`matmul(a, b)`|행렬 곱|
|`transpose(matrix)`|전치|
|`reshape(source, shape [, pad] [, order])`|형상 재구성|
|`pack(array, mask [, vector])` / `unpack(...)`|마스크로 압축 / 복원|
|`merge(tsource, fsource, mask)`|마스크에 따른 선택|
|`cshift/eoshift(array, shift [, ...])`|순환 이동 / 끝채움 이동|
|`findloc(array, value [, ...])`|특정 값의 위치|
|`norm2(array [, dim])`|L2 노름|

### C.5 문자열 함수

|함수|의미|
|---|---|
|`len(string)` / `len_trim(string)`|선언 길이 / 뒤 공백 제외 길이|
|`trim(string)`|뒤 공백 제거|
|`adjustl/adjustr(string)`|좌측 / 우측 정렬|
|`index(string, substring [, back])`|부분 문자열 위치|
|`scan(string, set [, back])`|집합 문자 중 첫 위치|
|`verify(string, set [, back])`|집합에 없는 첫 문자 위치|
|`repeat(string, n)`|문자열 `n`회 반복|
|`new_line(c)`|줄바꿈 문자|

### C.6 비트 연산(정수 대상)

|함수|의미|
|---|---|
|`iand/ior/ieor(i, j)`|비트 and / or / xor|
|`not(i)`|비트 반전|
|`ishft(i, shift)` / `ishftc(i, shift)`|논리 이동 / 순환 이동|
|`ibset/ibclr(i, pos)`|특정 비트 set / clear|
|`btest(i, pos)`|특정 비트 검사|
|`bit_size(i)`|비트 수|
|`popcnt(i)` / `leadz(i)` / `trailz(i)`|1의 개수 / 앞 0 개수 / 뒤 0 개수|

### C.7 시스템·시간·난수(서브루틴 위주)

|프로시저|의미|
|---|---|
|`call cpu_time(t)`|CPU 시간(초)|
|`call system_clock(count, count_rate, count_max)`|벽시계 카운트|
|`call date_and_time([date], [time], [zone], [values])`|현재 날짜·시각|
|`call random_number(x)`|`[0, 1)` 균등 난수(배열 가능)|
|`call random_seed([size], [put], [get])`|난수 씨앗 설정/조회|
|`command_argument_count()`|명령행 인수 개수(함수)|
|`call get_command_argument(n, value)`|`n`번째 명령행 인수|
|`call move_alloc(from, to)`|할당 소유권 이전(복사 없음)|
|`is_iostat_end(stat)`|파일 끝 상태 판정(함수)|


