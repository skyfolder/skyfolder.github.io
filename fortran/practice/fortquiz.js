/* ============================================================
   fortquiz.js — 1~14장 공용 엔진

   챕터마다 복사하지 않습니다. 모든 fort_prac_NN.html 이 이 파일 하나를 씁니다.
   챕터별로 바뀌는 것은 문제 파일과 정답 파일뿐입니다.

   담고 있는 것
     FQ        채점 규칙(정규화) + SHA-256 + 해설 인코딩
     FortQuiz  시작 화면 · 문제 화면 · 제출 화면 · 점수 파일 기록

   ★ FQ.SALT 나 정규화 규칙을 고치면 모든 챕터의 정답 파일을
     answer/build_NN.html 로 다시 만들어야 합니다.
   ============================================================ */
(function (root) {
  'use strict';

  /* 정답 지문에 섞는 소금값. 바꾸면 모든 챕터의 정답 파일을 다시 만들어야 합니다. */
  var SALT = 'fortran-prac-2026';

  /* 제출 파일 서명에 쓰는 키.
     학기마다 아무 문자열로 바꾸면 지난 학기 위조 스크립트가 통하지 않습니다.
     ★ 이 값을 바꿔도 정답 파일은 다시 만들 필요가 없습니다. SALT 와는 별개입니다.
     ★ 다만 학기 중에 바꾸면 그 전에 제출된 파일은 검증에 실패합니다. */
  var SIGN_KEY = 'sig-2026-1-fortran-lab';

  /* ==========================================================
     1부 · 채점 규칙
     ========================================================== */

  /* Fortran 코드 정규화.
     대소문자 · 들여쓰기 · 주석 · 구두점 주변 공백 · end 문 표기 ·
     .eq. 계열 · 따옴표 종류 · 줄잇기(&) 차이를 흡수합니다.
     문자열 리터럴 안쪽은 대소문자까지 그대로 둡니다. */
  function normalizeFortran(src) {
    var strings = [], lines = [], raws = String(src).split('\n');

    for (var r = 0; r < raws.length; r++) {
      var raw = raws[r], out = '', i = 0;
      while (i < raw.length) {
        var c = raw[i];
        if (c === "'" || c === '"') {
          var j = i + 1, content = '';
          while (j < raw.length) {
            if (raw[j] === c) {
              if (raw[j + 1] === c) { content += c; j += 2; continue; }
              break;
            }
            content += raw[j]; j++;
          }
          strings.push(content);
          out += '\u0001' + (strings.length - 1) + '\u0002';
          i = j + 1;
        } else if (c === '!') {
          break;                                   // 주석 버리기
        } else {
          out += c; i++;
        }
      }
      out = out.trim();
      if (out) lines.push(out);
    }

    var t = lines.join('\n').toLowerCase();

    t = t.replace(/&[ \t]*\n[ \t]*&?/g, ' ');
    t = t.replace(/\.eq\./g, '==').replace(/\.ne\./g, '/=')
         .replace(/\.le\./g, '<=').replace(/\.ge\./g, '>=')
         .replace(/\.lt\./g, '<').replace(/\.gt\./g, '>');
    t = t.replace(/\bend[ \t]+(program|subroutine|function|module|type|interface|select|where|block|associate|do|if)\b/g, 'end$1');
    t = t.replace(/\belse[ \t]+if\b/g, 'elseif');
    t = t.replace(/\b(endprogram|endsubroutine|endfunction|endmodule)[ \t]+[a-z_][a-z0-9_]*/g, '$1');
    t = t.replace(/[ \t]*([,;=()*+\-\/:<>%])[ \t]*/g, '$1');
    t = t.replace(/[ \t]+/g, ' ');
    t = t.replace(/\u0001(\d+)\u0002/g, function (_, k) { return "'" + strings[+k] + "'"; });
    return t.trim();
  }

  function normalizeText(s) {
    return String(s).trim().toLowerCase()
      .replace(/\s+/g, ' ').replace(/[.]$/, '').replace(/^`|`$/g, '');
  }

  function normalizeFor(type, s) {
    if (type === 'choice') return String(s);
    if (type === 'text') return normalizeText(s);
    return normalizeFortran(s);
  }

  /* ---------- SHA-256 (순수 JS: file:// 에서도 동작) ---------- */
  var K = [
    0x428a2f98,0x71374491,0xb5c0fbcf,0xe9b5dba5,0x3956c25b,0x59f111f1,0x923f82a4,0xab1c5ed5,
    0xd807aa98,0x12835b01,0x243185be,0x550c7dc3,0x72be5d74,0x80deb1fe,0x9bdc06a7,0xc19bf174,
    0xe49b69c1,0xefbe4786,0x0fc19dc6,0x240ca1cc,0x2de92c6f,0x4a7484aa,0x5cb0a9dc,0x76f988da,
    0x983e5152,0xa831c66d,0xb00327c8,0xbf597fc7,0xc6e00bf3,0xd5a79147,0x06ca6351,0x14292967,
    0x27b70a85,0x2e1b2138,0x4d2c6dfc,0x53380d13,0x650a7354,0x766a0abb,0x81c2c92e,0x92722c85,
    0xa2bfe8a1,0xa81a664b,0xc24b8b70,0xc76c51a3,0xd192e819,0xd6990624,0xf40e3585,0x106aa070,
    0x19a4c116,0x1e376c08,0x2748774c,0x34b0bcb5,0x391c0cb3,0x4ed8aa4a,0x5b9cca4f,0x682e6ff3,
    0x748f82ee,0x78a5636f,0x84c87814,0x8cc70208,0x90befffa,0xa4506ceb,0xbef9a3f7,0xc67178f2
  ];

  function utf8Bytes(str) {
    var out = [], p = 0;
    for (var i = 0; i < str.length; i++) {
      var c = str.charCodeAt(i);
      if (c < 128) out[p++] = c;
      else if (c < 2048) { out[p++] = (c >> 6) | 192; out[p++] = (c & 63) | 128; }
      else if ((c & 0xFC00) === 0xD800 && i + 1 < str.length && (str.charCodeAt(i + 1) & 0xFC00) === 0xDC00) {
        c = 0x10000 + ((c & 0x03FF) << 10) + (str.charCodeAt(++i) & 0x03FF);
        out[p++] = (c >> 18) | 240; out[p++] = ((c >> 12) & 63) | 128;
        out[p++] = ((c >> 6) & 63) | 128; out[p++] = (c & 63) | 128;
      } else { out[p++] = (c >> 12) | 224; out[p++] = ((c >> 6) & 63) | 128; out[p++] = (c & 63) | 128; }
    }
    return out;
  }

  function rotr(x, n) { return (x >>> n) | (x << (32 - n)); }

  function sha256(message) {
    var bytes = utf8Bytes(message);
    var len = bytes.length * 8;
    bytes.push(0x80);
    while (bytes.length % 64 !== 56) bytes.push(0);
    var hi = Math.floor(len / 0x100000000), lo = len >>> 0;
    bytes.push((hi >>> 24) & 255, (hi >>> 16) & 255, (hi >>> 8) & 255, hi & 255);
    bytes.push((lo >>> 24) & 255, (lo >>> 16) & 255, (lo >>> 8) & 255, lo & 255);

    var H = [0x6a09e667,0xbb67ae85,0x3c6ef372,0xa54ff53a,0x510e527f,0x9b05688c,0x1f83d9ab,0x5be0cd19];
    var w = new Array(64), t;

    for (var off = 0; off < bytes.length; off += 64) {
      for (t = 0; t < 16; t++) {
        w[t] = (bytes[off+t*4] << 24) | (bytes[off+t*4+1] << 16) | (bytes[off+t*4+2] << 8) | bytes[off+t*4+3];
      }
      for (t = 16; t < 64; t++) {
        var s0 = rotr(w[t-15],7) ^ rotr(w[t-15],18) ^ (w[t-15] >>> 3);
        var s1 = rotr(w[t-2],17) ^ rotr(w[t-2],19) ^ (w[t-2] >>> 10);
        w[t] = (w[t-16] + s0 + w[t-7] + s1) | 0;
      }
      var a=H[0],b=H[1],c=H[2],d=H[3],e=H[4],f=H[5],g=H[6],h=H[7];
      for (t = 0; t < 64; t++) {
        var S1 = rotr(e,6) ^ rotr(e,11) ^ rotr(e,25);
        var ch = (e & f) ^ (~e & g);
        var t1 = (h + S1 + ch + K[t] + w[t]) | 0;
        var S0 = rotr(a,2) ^ rotr(a,13) ^ rotr(a,22);
        var maj = (a & b) ^ (a & c) ^ (b & c);
        var t2 = (S0 + maj) | 0;
        h=g; g=f; f=e; e=(d+t1)|0; d=c; c=b; b=a; a=(t1+t2)|0;
      }
      H[0]=(H[0]+a)|0; H[1]=(H[1]+b)|0; H[2]=(H[2]+c)|0; H[3]=(H[3]+d)|0;
      H[4]=(H[4]+e)|0; H[5]=(H[5]+f)|0; H[6]=(H[6]+g)|0; H[7]=(H[7]+h)|0;
    }
    return H.map(function (x) { return (x >>> 0).toString(16).padStart(8, '0'); }).join('');
  }

  function digest(chapter, id, type, value) {
    return sha256(SALT + '|' + chapter + '|' + id + '|' + type + '|' + normalizeFor(type, value));
  }

  function encodeText(s) {
    var bytes = utf8Bytes(s), bin = '';
    for (var i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
    return (typeof btoa === 'function') ? btoa(bin) : Buffer.from(s, 'utf8').toString('base64');
  }

  function decodeText(b64) {
    var bin = atob(b64), arr = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
    return new TextDecoder('utf-8').decode(arr);
  }

  /* 제출 파일 서명.
     이름·학번·챕터·시각·문항별 정오답을 한 덩어리로 묶어 지문을 구합니다.
     텍스트를 한 글자라도 고치면 지문이 어긋나므로 편집을 잡아냅니다. */
  function sign(payload) {
    return sha256(SIGN_KEY + '|' + payload).slice(0, 16);
  }

  function signCode(sig) {
    return sig.toUpperCase().replace(/(.{4})/g, '$1-').replace(/-$/, '');
  }

  root.FQ = {
    SALT: SALT,
    SIGN_KEY: SIGN_KEY,
    sign: sign,
    signCode: signCode,
    normalizeFortran: normalizeFortran,
    normalizeText: normalizeText,
    normalizeFor: normalizeFor,
    sha256: sha256,
    digest: digest,
    encodeText: encodeText,
    decodeText: decodeText
  };

  /* Node(빌드 스크립트)에서는 여기까지만 씁니다. */
  if (typeof document === 'undefined') return;

  /* ==========================================================
     2부 · 화면
     ========================================================== */

  var CFG, DATA, P, A, app;
  var student = { name: '', sid: '' };
  var state = [], cur = 0, started = false, savedOnce = false;

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function sectionsOf() {
    return (DATA.sections && DATA.sections.length)
      ? DATA.sections
      : [{ key: '_all', label: '문제', note: '' }];
  }

  function idxOfSection(key) {
    return P.map(function (p, i) { return (p.section || '_all') === key ? i : -1; })
            .filter(function (i) { return i >= 0; });
  }

  function isCorrect(p, value) {
    var rec = A[p.id];
    if (!rec) return false;
    if (p.type !== 'choice' && !String(value).trim()) return false;
    return rec.h.indexOf(FQ.digest(CFG.chapter, p.id, p.type, value)) !== -1;
  }

  function score() {
    return state.filter(function (s) { return s.status === 'ok'; }).length;
  }

  /* ---------- 시작 화면 ---------- */
  function renderGate(err) {
    app.innerHTML =
      '<header class="masthead"><h1>' + esc(DATA.title) + '</h1>' +
      '<span class="tag">' + esc(DATA.subtitle || '') + '</span></header>' +
      '<div class="gate"><div class="jobcard">' +
        '<div class="jobcard-top"><span>Job Card</span><span>CH ' + esc(CFG.chapter) + '</span></div>' +
        '<div class="jobcard-body">' +
          '<h2>실습을 시작하기 전에</h2>' +
          '<p class="lead">이름과 학번을 적어 주세요. 채점이 끝나면 이 정보로 점수 파일이 만들어집니다.</p>' +
          '<div class="field"><label for="g-name">이름</label>' +
            '<input id="g-name" type="text" autocomplete="name" maxlength="20" value="' + esc(student.name) + '"></div>' +
          '<div class="field"><label for="g-sid">학번</label>' +
            '<input id="g-sid" type="text" inputmode="numeric" maxlength="20" value="' + esc(student.sid) + '"></div>' +
          '<div class="gate-err">' + (err ? esc(err) : '') + '</div>' +
          '<button class="btn btn-primary" id="g-go">실습 시작하기</button>' +
          '<p class="gate-note">문항은 ' + P.length + '개이고 한 문항에 1점입니다. ' +
          '새로 고치면 답안이 사라지니 한 번에 끝내세요.</p>' +
        '</div>' +
      '</div></div>';

    var nameEl = document.getElementById('g-name');
    var sidEl = document.getElementById('g-sid');
    nameEl.focus();

    function go() {
      /* | 는 서명 데이터의 구분자라 이름·학번에서 걷어낸다 */
      var clean = function (v) { return v.replace(/[|\r\n]/g, ' ').replace(/\s+/g, ' ').trim(); };
      var n = clean(nameEl.value), s = clean(sidEl.value);
      if (!n) { renderGate('이름을 적어 주세요.'); return; }
      if (!s) { renderGate('학번을 적어 주세요.'); document.getElementById('g-sid').focus(); return; }
      student.name = n; student.sid = s;
      started = true;
      window.addEventListener('beforeunload', guard);
      renderQuiz();
    }

    document.getElementById('g-go').addEventListener('click', go);
    [nameEl, sidEl].forEach(function (el) {
      el.addEventListener('keydown', function (e) { if (e.key === 'Enter') go(); });
    });
  }

  function guard(e) {
    if (!started) return;
    e.preventDefault();
    e.returnValue = '';
  }

  /* ---------- 문제 화면 ---------- */
  function renderQuiz() {
    app.innerHTML =
      '<header class="masthead">' +
        '<h1>' + esc(DATA.title) + '</h1>' +
        '<span class="who">' + esc(student.name) + ' · ' + esc(student.sid) + '</span>' +
        '<span class="tally" id="tally"></span>' +
      '</header>' +
      '<main class="shell">' +
        '<nav class="deck" aria-label="문제 목록"><div class="deck-inner" id="deck"></div></nav>' +
        '<section class="sheet" id="sheet" aria-live="polite"></section>' +
      '</main>';
    render();
  }

  function renderTally() {
    var el = document.getElementById('tally');
    if (!el) return;
    el.innerHTML = sectionsOf().map(function (s) {
      var idx = idxOfSection(s.key);
      var ok = idx.filter(function (i) { return state[i].status === 'ok'; }).length;
      return '<span>' + esc(s.label) + ' <b>' + ok + '</b>/' + idx.length + '</span>';
    }).join('') +
    '<span>총 <b>' + score() + '</b>/' + P.length + '</span>' +
    '<button class="btn-sub" data-act="submit">결과 제출</button>';
  }

  function renderDeck() {
    var deckEl = document.getElementById('deck');
    if (!deckEl) return;
    var html = '';
    sectionsOf().forEach(function (s) {
      var idx = idxOfSection(s.key);
      if (!idx.length) return;
      var ok = idx.filter(function (i) { return state[i].status === 'ok'; }).length;
      html += '<div class="deck-head"><span>' + esc(s.label) + '</span><small>' + ok + '/' + idx.length + '</small></div>';
      html += idx.map(function (i) {
        return '<button class="card-item" data-go="' + i + '" aria-current="' + (i === cur) + '">' +
               '<span class="num">' + String(P[i].id).padStart(2, '0') + '</span>' +
               '<span class="name">' + esc(P[i].title) + '</span>' +
               '<span class="dot ' + (state[i].status || '') + '"></span></button>';
      }).join('');
    });
    deckEl.innerHTML = html;
    renderTally();
  }

  function renderSheet() {
    var sheetEl = document.getElementById('sheet');
    if (!sheetEl) return;
    var p = P[cur], s = state[cur];
    var isChoice = p.type === 'choice';
    var oneLine = p.type === 'line' || p.type === 'text';
    var sec = sectionsOf().filter(function (x) { return x.key === (p.section || '_all'); })[0] || { label: '' };

    var input;
    if (isChoice) {
      input = '<div class="choices" role="radiogroup" aria-label="보기">' + p.options.map(function (o, i) {
        return '<label class="choice"><input type="radio" name="choice" value="' + i + '"' +
               (s.choice === i ? ' checked' : '') + '>' +
               '<span class="key">' + String.fromCharCode(65 + i) + '</span><span>' + esc(o) + '</span></label>';
      }).join('') + '</div>';
    } else {
      input = '<div class="editor-wrap' + (oneLine ? ' oneline' : '') + '">' +
              '<div class="sprocket" aria-hidden="true"></div>' +
              '<textarea id="input" spellcheck="false" rows="' + (oneLine ? 1 : 5) + '" placeholder="' +
              (p.type === 'text' ? '답을 입력하세요' : '코드를 입력하세요') + '">' + esc(s.value) + '</textarea>' +
              '<div class="sprocket right" aria-hidden="true"></div></div>';
    }

    var verdict = '';
    if (s.status) {
      var label = s.status === 'ok' ? '정답' : (s.status === 'no' ? '오답' : '해설 확인');
      var body = '';
      if (s.status === 'ok') {
        body = '<p>제출한 답이 정답과 일치합니다. 1점.</p>';
      } else if (s.status === 'no') {
        body = '<p>아직 정답과 다릅니다. 시도 ' + s.tries + '회.</p>';
        if (!isChoice) {
          body += '<span class="box-label">채점기가 읽은 내 답</span><div class="answer-box">' +
                  (esc(FQ.normalizeFor(p.type, s.value)) || '(비어 있음)') + '</div>';
        }
      } else {
        body = '<p>해설을 열었습니다. 읽고 나서 직접 다시 입력해 보세요.</p>';
      }
      if ((s.status === 'ok' || s.revealed) && A[p.id] && A[p.id].e) {
        body += '<span class="box-label">해설</span><p class="note">' + esc(FQ.decodeText(A[p.id].e)) + '</p>';
      }
      verdict = '<div class="verdict"><div class="stamp ' + s.status + '">' + label + '</div>' +
                '<div class="verdict-body">' + body + '</div></div>';
    }

    sheetEl.innerHTML =
      '<div class="eyebrow">' + esc(sec.label) + ' · ' + esc(p.topic || '') + ' · ' + String(p.id).padStart(2, '0') + '</div>' +
      '<h2>' + esc(p.title) + '</h2>' +
      '<div class="prompt">' + p.question + '</div>' +
      input +
      '<div class="actions">' +
        '<button class="btn btn-primary" data-act="grade">채점하기</button>' +
        (p.hint ? '<button class="btn" data-act="hint">' + (s.hintOpen ? '힌트 접기' : '힌트 보기') + '</button>' : '') +
        '<button class="btn btn-quiet" data-act="reveal">해설 보기</button>' +
        (!isChoice ? '<button class="btn btn-quiet" data-act="reset">지우기</button>' : '') +
        '<span class="shortcut">Ctrl + Enter</span>' +
      '</div>' +
      (s.hintOpen && p.hint ? '<div class="hint">' + p.hint + '</div>' : '') +
      verdict +
      '<div class="pager">' +
        '<button class="btn" data-act="prev"' + (cur === 0 ? ' disabled' : '') + '>← 이전</button>' +
        '<button class="btn" data-act="next"' + (cur === P.length - 1 ? ' disabled' : '') + '>다음 →</button>' +
      '</div>';

    var ta = document.getElementById('input');
    if (ta) {
      ta.addEventListener('input', function (e) { state[cur].value = e.target.value; });
      ta.addEventListener('keydown', function (e) {
        if (e.key === 'Tab') {
          e.preventDefault();
          var st = ta.selectionStart, en = ta.selectionEnd;
          ta.value = ta.value.slice(0, st) + '  ' + ta.value.slice(en);
          ta.selectionStart = ta.selectionEnd = st + 2;
          state[cur].value = ta.value;
        }
      });
      ta.focus();
    }
    Array.prototype.forEach.call(sheetEl.querySelectorAll('input[name="choice"]'), function (r) {
      r.addEventListener('change', function (e) { state[cur].choice = Number(e.target.value); });
    });
  }

  function render() { renderDeck(); renderSheet(); }

  function doGrade() {
    var p = P[cur], s = state[cur];
    var val = p.type === 'choice' ? s.choice : s.value;
    if (p.type === 'choice' && s.choice === null) return;
    if (p.type !== 'choice' && !String(val).trim()) return;
    if (isCorrect(p, val)) {
      s.status = 'ok';
    } else {
      s.status = 'no';
      s.tries++;
      if (s.tries >= 2 && p.hint) s.hintOpen = true;
    }
    render();
  }

  /* ==========================================================
     3부 · 점수 기록
     ========================================================== */

  function pad2(n) { return String(n).padStart(2, '0'); }

  function stamp() {
    var d = new Date();
    return d.getFullYear() + '-' + pad2(d.getMonth() + 1) + '-' + pad2(d.getDate()) + ' ' +
           pad2(d.getHours()) + ':' + pad2(d.getMinutes()) + ':' + pad2(d.getSeconds());
  }

  /* 한글은 두 칸으로 세어 표를 맞춘다 */
  function width(s) {
    var w = 0;
    for (var i = 0; i < s.length; i++) w += (s.charCodeAt(i) > 0x2000) ? 2 : 1;
    return w;
  }
  function padRight(s, n) {
    s = String(s);
    var gap = n - width(s);
    return s + (gap > 0 ? ' '.repeat(gap) : '');
  }

  /* 제출 한 건을 확정한다. 시각과 서명을 여기서 한 번만 정해
     화면에 보이는 내용과 저장되는 파일이 반드시 같도록 한다. */
  var lastSub = null;

  function makeSubmission() {
    var time = stamp();
    var total = score();
    var r = '', x = '';
    state.forEach(function (s) {
      r += (s.status === 'ok') ? '1' : (s.status === null ? '.' : '0');
      x += s.revealed ? '1' : '0';
    });

    var payload = ['v1', CFG.chapter, student.name, student.sid, time, total, P.length, r, x].join('|');
    var sub = { time: time, total: total, r: r, x: x, payload: payload };
    sub.sig = FQ.sign(payload);
    sub.code = FQ.signCode(sub.sig);
    sub.file = safeName(student.name) + '_' + CFG.chapter + '_' + total + '.txt';
    sub.text = buildReport(sub);
    return sub;
  }

  function buildReport(sub) {
    var line = '='.repeat(56), thin = '-'.repeat(56);
    var total = sub.total;
    var L = [];

    L.push(line);
    L.push(' FORTRAN 실습 채점 결과');
    L.push(line);
    L.push(' 이름   : ' + student.name);
    L.push(' 학번   : ' + student.sid);
    L.push(' 챕터   : ' + CFG.chapter + '장 · ' + (CFG.chapterTitle || DATA.subtitle || ''));
    L.push(' 제출   : ' + sub.time);
    L.push(' 총점   : ' + total + ' / ' + P.length +
           '   (100점 환산 ' + (P.length ? (total * 100 / P.length).toFixed(1) : '0.0') + '점)');
    L.push(thin);
    L.push(' 문항별 점수 · 한 문항 1점');
    L.push(' * 표시는 해설을 열어 본 문항');
    L.push(thin);

    sectionsOf().forEach(function (s) {
      var idx = idxOfSection(s.key);
      if (!idx.length) return;
      var ok = idx.filter(function (i) { return state[i].status === 'ok'; }).length;
      L.push(' [' + s.label + ']  ' + ok + '/' + idx.length);
      idx.forEach(function (i) {
        var p = P[i], st = state[i];
        var pt = st.status === 'ok' ? 1 : 0;
        var mark = st.revealed ? '*' : ' ';
        var memo = st.status === null ? '미응시'
                 : (st.status === 'ok' ? (st.tries ? '시도 ' + (st.tries + 1) + '회' : '')
                                       : '시도 ' + st.tries + '회');
        L.push('  ' + String(p.id).padStart(2, '0') + ' ' + mark + ' ' +
               padRight(p.title, 30) + ' ' + pt + '  ' + memo);
      });
      L.push('');
    });

    L.push(thin);
    L.push(' ' + sectionsOf().map(function (s) {
      var idx = idxOfSection(s.key);
      var ok = idx.filter(function (i) { return state[i].status === 'ok'; }).length;
      return s.label + ' ' + ok + '/' + idx.length;
    }).join('   '));
    L.push(' 총점 ' + total + '/' + P.length);
    L.push(line);
    L.push(' 검증 코드 : ' + sub.code);
    L.push(' 아래 세 줄은 고치지 마세요. 위조 여부를 확인하는 데 쓰입니다.');
    L.push('--- BEGIN SIGNATURE ---');
    L.push(sub.payload + '|' + sub.sig);
    L.push('--- END SIGNATURE ---');
    L.push(line);

    return L.join('\r\n') + '\r\n';
  }

  function safeName(s) {
    return String(s).replace(/[\\/:*?"<>|]/g, '').replace(/\s+/g, '').slice(0, 30) || 'noname';
  }

  function saveMsg(text, cls) {
    var el = document.getElementById('save-msg');
    if (el) el.innerHTML = '<span class="save-msg ' + (cls || '') + '">' + esc(text) + '</span>';
  }

  function downloadReport() {
    if (!lastSub) lastSub = makeSubmission();
    var blob = new Blob(['\uFEFF' + lastSub.text], { type: 'text/plain;charset=utf-8' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = lastSub.file;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(a.href);
    savedOnce = true;
    saveMsg(lastSub.file + ' 을(를) 내려받았습니다. 파일을 열어 고치면 검증 코드가 어긋납니다.', 'ok');
  }

  function saveToFolder() {
    if (!window.showDirectoryPicker) {
      saveMsg('이 브라우저는 폴더 저장을 지원하지 않습니다. 파일로 내려받기를 쓰세요.', 'bad');
      return;
    }
    if (!lastSub) lastSub = makeSubmission();
    var sub = lastSub;
    saveMsg('폴더를 선택하세요...', '');
    window.showDirectoryPicker({ mode: 'readwrite' })
      .then(function (dir) {
        return dir.getFileHandle(sub.file, { create: true })
          .then(function (fh) { return fh.createWritable(); })
          .then(function (w) { return w.write('\uFEFF' + sub.text).then(function () { return w.close(); }); })
          .then(function () {
            savedOnce = true;
            saveMsg(dir.name + ' 폴더에 ' + sub.file + ' 을(를) 저장했습니다.', 'ok');
          });
      })
      .catch(function (e) {
        if (e && e.name === 'AbortError') { saveMsg('저장을 취소했습니다.', ''); return; }
        saveMsg('저장하지 못했습니다: ' + (e && e.message ? e.message : e), 'bad');
      });
  }

  function copyReport() {
    if (!lastSub) lastSub = makeSubmission();
    if (!navigator.clipboard) { saveMsg('이 브라우저는 클립보드 복사를 지원하지 않습니다.', 'bad'); return; }
    navigator.clipboard.writeText(lastSub.text)
      .then(function () { saveMsg('결과 전체를 복사했습니다. 제출 창에 그대로 붙여 넣으세요.', 'ok'); })
      .catch(function () { saveMsg('복사하지 못했습니다. 아래 내용을 직접 선택해 복사하세요.', 'bad'); });
  }

  /* ---------- 제출 화면 ---------- */
  function renderReport() {
    lastSub = makeSubmission();
    var total = lastSub.total;
    var unattempted = state.filter(function (s) { return s.status === null; }).length;

    app.innerHTML =
      '<header class="masthead">' +
        '<h1>' + esc(DATA.title) + '</h1>' +
        '<span class="who">' + esc(student.name) + ' · ' + esc(student.sid) + '</span>' +
        '<span class="tally"><button class="btn-sub" data-act="back">문제로 돌아가기</button></span>' +
      '</header>' +
      '<div class="report">' +
        '<div class="eyebrow">' + esc(CFG.chapter) + '장 · 제출</div>' +
        '<h2>' + esc(student.name) + ' 님의 채점 결과</h2>' +
        '<div class="bigscore">' + total + '<small>/ ' + P.length + '점</small></div>' +
        (unattempted ? '<div class="sec-line">아직 채점하지 않은 문항이 ' + unattempted +
                       '개 있습니다. 돌아가서 마저 풀면 점수가 올라갑니다.</div>' : '') +
        '<div class="sec-line">' + sectionsOf().map(function (s) {
          var idx = idxOfSection(s.key);
          var ok = idx.filter(function (i) { return state[i].status === 'ok'; }).length;
          return esc(s.label) + ' ' + ok + '/' + idx.length;
        }).join('&nbsp;&nbsp;·&nbsp;&nbsp;') + '</div>' +
        '<div class="sigcode"><span>검증 코드</span><b>' + esc(lastSub.code) + '</b></div>' +
        '<p class="sig-note">이 코드는 이름·학번·문항별 채점 결과를 묶어 만든 것입니다. ' +
        '파일 안의 글자를 하나라도 고치면 코드가 어긋나서 바로 드러납니다.</p>' +
        '<div class="actions">' +
          '<button class="btn btn-primary" data-act="save-folder">score 폴더에 저장</button>' +
          '<button class="btn" data-act="save-file">파일로 내려받기</button>' +
          '<button class="btn btn-quiet" data-act="copy">전체 복사</button>' +
        '</div>' +
        '<div id="save-msg"></div>' +
        '<span class="box-label">저장될 파일 · ' + esc(lastSub.file) + '</span>' +
        '<pre class="preview">' + esc(lastSub.text) + '</pre>' +
      '</div>';
  }

  /* ---------- 이벤트 ---------- */
  function wire() {
    document.addEventListener('click', function (e) {
      var go = e.target.closest('[data-go]');
      if (go) { cur = Number(go.dataset.go); render(); window.scrollTo({ top: 0 }); return; }

      var b = e.target.closest('[data-act]');
      if (!b) return;
      var s = state[cur], p = P[cur];

      switch (b.dataset.act) {
        case 'grade': doGrade(); break;
        case 'hint': s.hintOpen = !s.hintOpen; render(); break;
        case 'reveal':
          s.revealed = true;
          if (s.status !== 'ok') s.status = 'seen';
          render();
          break;
        case 'reset': s.value = ''; s.status = null; s.revealed = false; render(); break;
        case 'prev': if (cur > 0) { cur--; render(); window.scrollTo({ top: 0 }); } break;
        case 'next': if (cur < P.length - 1) { cur++; render(); window.scrollTo({ top: 0 }); } break;
        case 'submit': renderReport(); window.scrollTo({ top: 0 }); break;
        case 'back': renderQuiz(); window.scrollTo({ top: 0 }); break;
        case 'save-folder': saveToFolder(); break;
        case 'save-file': downloadReport(); break;
        case 'copy': copyReport(); break;
      }
    });

    document.addEventListener('keydown', function (e) {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter' && document.getElementById('sheet')) {
        e.preventDefault(); doGrade();
      }
    });
  }

  /* ---------- 시작 ---------- */
  function start(cfg) {
    CFG = cfg || {};
    app = document.getElementById('app');

    var missing = [];
    if (!window.PROBLEMS) missing.push('문제 파일(fort_prac_' + CFG.chapter + '_problems.js)');
    if (!window.ANSWERS) missing.push('정답 파일(answer/fort_prac_' + CFG.chapter + '_answers.js)');
    if (missing.length) {
      app.innerHTML = '<header class="masthead"><h1>불러오기 실패</h1></header>' +
        '<div class="gate"><div class="jobcard"><div class="jobcard-top"><span>Error</span></div>' +
        '<div class="jobcard-body"><h2>파일을 찾을 수 없습니다</h2><p class="lead">' +
        esc(missing.join(', ')) + ' 을(를) 불러오지 못했습니다. 저장소를 통째로 내려받았는지, ' +
        'answer 폴더가 HTML 파일과 같은 위치에 있는지 확인하세요.</p></div></div></div>';
      return;
    }

    DATA = window.PROBLEMS;
    P = DATA.problems;
    A = window.ANSWERS;
    state = P.map(function () {
      return { value: '', choice: null, status: null, hintOpen: false, revealed: false, tries: 0 };
    });

    wire();
    renderGate('');
  }

  root.FortQuiz = { start: start };

})(typeof window !== 'undefined' ? window : globalThis);
