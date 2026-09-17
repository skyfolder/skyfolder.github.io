/* ============================================================
   aiquiz.js — "대기과학을 위한 인공지능" 실습 공용 엔진

   하는 일
     1) 이름과 학번을 받는다
     2) 문항을 한 개씩 보여 주고 답을 받는다
     3) 입력을 채점 규칙대로 정규화한 뒤 지문으로 바꾸어 정답 지문과 대조한다
     4) 틀리면 그 자리에서 고쳐 다시 낼 수 있다. 맞히면 그 문항을 닫고 해설을 연다
     5) 끝나면 서명이 붙은 결과 파일을 내려 준다

   정답 평문은 이 파일에도, 문제 파일에도 없다.
   answer/ChNN_answers.js 에 지문과 가려 둔 해설만 들어 있다.

   AIQ.digest 와 AIQ.encodeText 는 정답 생성 도구(build_NN.html)가 함께 쓴다.
   채점 규칙이나 SALT 를 고치면 모든 장의 정답 파일을 다시 만들어야 한다.
   ============================================================ */

(function (root) {
  'use strict';

  var SALT = 'atmos-ai-2026';

  /* ---------- 지문 ---------- */

  function pad8(n) {
    var s = (n >>> 0).toString(16);
    while (s.length < 8) { s = '0' + s; }
    return s;
  }

  function fingerprint(s) {
    var a = 0x811c9dc5 >>> 0;
    var b = 5381 >>> 0;
    for (var i = 0; i < s.length; i++) {
      var c = s.charCodeAt(i);
      a = (a ^ c) >>> 0;
      a = Math.imul(a, 0x01000193) >>> 0;
      b = ((Math.imul(b, 33) ^ c) >>> 0);
    }
    return pad8(a) + pad8(b);
  }

  /* ---------- 정규화 ---------- */

  function squeeze(s) {
    return String(s == null ? '' : s)
      .normalize('NFKC')
      .replace(/[\u200b-\u200d\ufeff]/g, '');
  }

  /* 코드: 공백을 모두 지우고 따옴표를 통일한다. 대소문자는 살린다. */
  function normCode(s) {
    var t = squeeze(s);
    t = t.replace(/[\u2018\u2019\u201c\u201d]/g, "'");
    t = t.replace(/"/g, "'");
    t = t.replace(/#.*$/gm, '');
    t = t.replace(/\s+/g, '');
    t = t.replace(/;+$/, '');
    return t;
  }

  /* 말: 공백과 문장부호를 지우고 소문자로 내린다. */
  function normText(s) {
    var t = squeeze(s).toLowerCase();
    t = t.replace(/[\s.,!?~·'"()\[\]]/g, '');
    t = t.replace(/[\u2018\u2019\u201c\u201d]/g, '');
    return t;
  }

  function normalize(type, v) {
    if (type === 'choice') { return 'opt:' + v; }
    if (type === 'code' || type === 'line') { return normCode(v); }
    return normText(v);
  }

  /* 장 번호와 문항 번호를 함께 섞는다. 같은 답이 같은 지문으로 보이지 않는다. */
  function digest(ch, id, type, value) {
    return fingerprint(SALT + '|' + ch + '|' + id + '|' + normalize(type, value));
  }

  function encodeText(s) {
    var bytes = new TextEncoder().encode(String(s));
    var bin = '';
    for (var i = 0; i < bytes.length; i++) { bin += String.fromCharCode(bytes[i]); }
    return btoa(bin);
  }

  function decodeText(s) {
    try {
      var bin = atob(s);
      var bytes = new Uint8Array(bin.length);
      for (var i = 0; i < bin.length; i++) { bytes[i] = bin.charCodeAt(i); }
      return new TextDecoder('utf-8').decode(bytes);
    } catch (e) { return ''; }
  }

  root.AIQ = {
    digest: digest,
    encodeText: encodeText,
    decodeText: decodeText,
    normalize: normalize
  };

  /* ---------- 상태 ---------- */

  var CFG, P, A, S, who = { name: '', sid: '' }, at = 0;

  function el(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c];
    });
  }
  function labelOf(key) {
    var found = (P.sections || []).filter(function (x) { return x.key === key; })[0];
    return found ? found.label : key;
  }

  /* ---------- 시작 화면 ---------- */

  function gate(msg) {
    document.getElementById('app').innerHTML =
      '<div class="top">' +
        '<span class="course">대기과학을 위한 인공지능</span>' +
        '<span class="chap">' + esc(CFG.chapter) + '장 &middot; ' + esc(CFG.chapterTitle) + '</span>' +
      '</div>' +
      '<div class="bar"><i style="width:0"></i></div>' +
      '<div class="wrap"><div class="gate"><div class="card">' +
        '<h1>' + esc(P.title) + '</h1>' +
        '<p class="sub">' + esc(P.subtitle) + '</p>' +
        '<div class="f"><label for="g-name">이름</label>' +
          '<input class="ans" id="g-name" autocomplete="off"></div>' +
        '<div class="f"><label for="g-sid">학번</label>' +
          '<input class="ans" id="g-sid" autocomplete="off"></div>' +
        (msg ? '<div class="verdict no"><p>' + esc(msg) + '</p></div>' : '') +
        '<div class="row"><button class="b" id="g-go">시작</button></div>' +
        '<div class="note">문항은 모두 ' + P.problems.length + '개이며 한 문항에 1점씩 배당합니다. ' +
        '오답은 횟수에 상관없이 수정할 수 있습니다.  ' +
        '시도 횟수는 결과 파일에 함께 기록됩니다. ' +
        '마지막 화면에서 결과 파일을 내려받아 제출합니다.</div>' +
      '</div></div></div>';

    el('g-go').onclick = begin;
    el('g-sid').onkeydown = function (e) { if (e.key === 'Enter') { begin(); } };
    el('g-name').focus();
  }

  function begin() {
    var n = el('g-name').value.trim();
    var s = el('g-sid').value.trim();
    if (!n || !s) { gate('이름과 학번을 기입해야 시작할 수 있습니다.'); return; }
    who = { name: n, sid: s };
    at = 0;
    frame();
    draw();
  }

  /* ---------- 틀 ---------- */

  function frame() {
    document.getElementById('app').innerHTML =
      '<div class="top">' +
        '<span class="course">대기과학을 위한 인공지능</span>' +
        '<span class="chap">' + esc(CFG.chapter) + '장 &middot; ' + esc(CFG.chapterTitle) + '</span>' +
        '<span class="who"><b>' + esc(who.name) + '</b> ' + esc(who.sid) + '</span>' +
      '</div>' +
      '<div class="bar"><i id="bar"></i></div>' +
      '<div class="wrap"><div class="grid">' +
        '<aside class="pad" id="pad"></aside>' +
        '<main id="main"></main>' +
      '</div></div>';
  }

  /* ---------- 이동판 ---------- */

  function pad() {
    var byKey = {}, order = [];
    P.problems.forEach(function (p, i) {
      if (!byKey[p.section]) { byKey[p.section] = []; order.push(p.section); }
      byKey[p.section].push(i);
    });

    var h = '';
    order.forEach(function (key) {
      h += '<h4>' + esc(labelOf(key)) + '</h4><div class="dots">';
      byKey[key].forEach(function (i) {
        var cls = i === at ? 'on ' : '';
        if (S[i].status === 'ok') { cls += 'ok'; }
        else if (S[i].tries > 0) { cls += 'no'; }
        h += '<button data-i="' + i + '" class="' + cls + '">' + (i + 1) + '</button>';
      });
      h += '</div>';
    });

    var ok = S.filter(function (x) { return x.status === 'ok'; }).length;
    var fixing = S.filter(function (x) { return x.tries > 0 && x.status !== 'ok'; }).length;
    h += '<div class="tally"><b>' + ok + '</b> / ' + P.problems.length + ' 정답<br>' +
         '수정 중 ' + fixing + '개</div>';

    var box = el('pad');
    box.innerHTML = h;
    Array.prototype.forEach.call(box.querySelectorAll('button[data-i]'), function (b) {
      b.onclick = function () { keep(); at = +b.dataset.i; draw(); };
    });

    el('bar').style.width = (ok / P.problems.length * 100) + '%';
  }

  /* ---------- 문항 그리기 ---------- */

  function draw() {
    if (at >= P.problems.length) { finish(); return; }

    var p = P.problems[at], s = S[at], done = s.status === 'ok';
    var h = '';

    h += '<div class="card">';
    h += '<div class="kicker"><span class="n">' + (at + 1) + '</span>' +
         '<span class="tag">' + esc(labelOf(p.section)) + '</span>' +
         '<span>' + esc(p.topic || '') + '</span>' +
         (s.tries > 0 ? '<span class="tries">시도 ' + s.tries + '회</span>' : '') +
         '</div>';
    h += '<h2>' + esc(p.title) + '</h2>';
    h += '<div class="ask">' + p.question + '</div>';

    if (p.type === 'choice') {
      h += '<div class="picks">';
      p.options.forEach(function (o, k) {
        h += '<label class="' + (s.value === String(k) ? 'sel' : '') + '">' +
             '<input type="radio" name="pick" value="' + k + '"' +
             (s.value === String(k) ? ' checked' : '') + (done ? ' disabled' : '') + '>' +
             '<span>' + o + '</span></label>';
      });
      h += '</div>';
    } else if (p.type === 'code') {
      h += '<textarea class="ans" id="in" rows="5" spellcheck="false"' +
           (done ? ' disabled' : '') + '>' + esc(s.value) + '</textarea>';
    } else {
      h += '<input class="ans" id="in" spellcheck="false" autocomplete="off"' +
           (done ? ' disabled' : '') + ' value="' + esc(s.value) + '">';
    }

    h += '<div class="row">';
    if (!done) {
      h += '<button class="b" id="mark">' +
           (s.tries > 0 ? '수정 후 다시 제출' : '제출하고 채점') + '</button>';
      if (p.hint) { h += '<button class="b ghost" id="hint">힌트</button>'; }
    }
    h += '<span class="spacer"></span>';
    if (at > 0) { h += '<button class="b quiet" id="prev">이전</button>'; }
    h += '<button class="b ' + (done ? '' : 'quiet') + '" id="next">' +
         (at === P.problems.length - 1 ? '결과 보기' : '다음') + '</button>';
    h += '</div>';

    if (done) {
      h += '<div class="verdict ok"><h5>맞혔다</h5><p>' +
           esc(decodeText((A[p.id] || {}).e || '')) + '</p></div>';
    } else if (s.status === 'no') {
      h += '<div class="verdict no"><h5>정답이 아닙니다</h5>' +
           '<p>수정해서 다시 제출합니다. 몇 번이든 시도할 수 있습니다.</p></div>';
    }
    if (!done && (s.hintOpen || s.tries >= 2) && p.hint) {
      h += '<div class="verdict hint"><h5>힌트</h5><p>' + p.hint + '</p></div>';
    }
    h += '</div>';

    el('main').innerHTML = h;

    if (p.type === 'choice') {
      Array.prototype.forEach.call(el('main').querySelectorAll('input[name=pick]'), function (r) {
        r.onchange = function () {
          S[at].value = r.value;
          Array.prototype.forEach.call(el('main').querySelectorAll('.picks label'), function (l) {
            l.classList.toggle('sel', l.querySelector('input').checked);
          });
        };
      });
    } else if (!done) {
      var box = el('in');
      box.focus();
      if (p.type !== 'code') {
        box.onkeydown = function (e) { if (e.key === 'Enter') { e.preventDefault(); mark(); } };
      }
    }

    if (el('mark')) { el('mark').onclick = mark; }
    if (el('hint')) { el('hint').onclick = function () { keep(); S[at].hintOpen = true; draw(); }; }
    if (el('prev')) { el('prev').onclick = function () { keep(); at--; draw(); }; }
    if (el('next')) { el('next').onclick = function () { keep(); at++; draw(); }; }

    pad();
    window.scrollTo(0, 0);
  }

  function keep() {
    if (at >= P.problems.length) { return; }
    var p = P.problems[at];
    if (p.type !== 'choice' && el('in')) { S[at].value = el('in').value; }
  }

  /* ---------- 채점 ---------- */

  function mark() {
    keep();
    var p = P.problems[at], s = S[at];
    if (!String(s.value).trim()) { return; }

    var mine = digest(CFG.chapter, p.id, p.type, s.value);
    var list = (A[p.id] && A[p.id].h) || [];
    s.tries++;
    s.status = list.indexOf(mine) >= 0 ? 'ok' : 'no';
    draw();
  }

  /* ---------- 마침 ---------- */

  function finish() {
    var ok = S.filter(function (x) { return x.status === 'ok'; }).length;
    var total = P.problems.length;
    var left = total - ok;

    var rows = P.problems.map(function (p, i) {
      return '<tr><td class="s">' + (i + 1) + '</td><td>' + esc(labelOf(p.section)) + '</td>' +
             '<td>' + esc(p.title) + '</td>' +
             '<td class="s">' + S[i].tries + '</td>' +
             '<td class="s">' + (S[i].status === 'ok' ? '1' : '0') + '</td></tr>';
    }).join('');

    el('main').innerHTML =
      '<div class="card done">' +
        '<div class="kicker"><span class="tag">채점 끝</span></div>' +
        '<h2>' + esc(who.name) + ' · ' + esc(who.sid) + '</h2>' +
        '<div class="big">' + ok + '<span class="of"> / ' + total + '</span></div>' +
        (left > 0
          ? '<div class="verdict hint"><h5>아직 ' + left + '문항이 남았습니다</h5>' +
            '<p>왼쪽 패널에서 문항으로 돌아가 다시 풀 수 있습니다. 다 풀고 나서 파일을 내려습니다.</p></div>'
          : '') +
        '<div class="row"><button class="b" id="save">결과 파일 내려받기</button>' +
          '<button class="b quiet" id="back">문항으로 돌아가기</button></div>' +
        '<table class="breakdown"><thead><tr><th>번호</th><th>구분</th><th>문항</th>' +
        '<th>시도</th><th>점수</th></tr></thead><tbody>' + rows + '</tbody></table>' +
      '</div>';

    el('save').onclick = function () { save(ok, total); };
    el('back').onclick = function () { at = total - 1; draw(); };
    pad();
  }

  function save(ok, total) {
    var lines = [];
    lines.push('대기과학을 위한 인공지능 — ' + CFG.chapter + '장 ' + CFG.chapterTitle);
    lines.push('이름: ' + who.name);
    lines.push('학번: ' + who.sid);
    lines.push('제출: ' + new Date().toISOString());
    lines.push('점수: ' + ok + ' / ' + total);
    lines.push('');
    lines.push('번호\t구분\t시도\t결과');
    P.problems.forEach(function (p, i) {
      lines.push((i + 1) + '\t' + labelOf(p.section) + '\t' + S[i].tries + '\t' +
                 (S[i].status === 'ok' ? 'O' : 'X'));
    });
    var body = lines.join('\n');
    lines.push('');
    lines.push('서명: ' + fingerprint(SALT + '|' + body));

    var blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'ch' + CFG.chapter + '_' + who.sid + '_' + who.name + '.txt';
    a.click();
    URL.revokeObjectURL(a.href);
  }

  root.AIQ.sign = function (body) { return fingerprint(SALT + '|' + body); };

  /* ---------- 진입 ---------- */

  function start(cfg) {
    CFG = cfg;
    if (!root.PROBLEMS || !root.ANSWERS) {
      document.getElementById('app').innerHTML =
        '<div class="wrap"><div class="gate"><div class="card">' +
        '<h1>문제 파일을 찾지 못했습니다</h1>' +
        '<p class="sub">저장소 전체를 내려받았는지, 정답 폴더가 이 HTML 파일과 같은 위치에 있는지 확인합니다.</p>' +
        '</div></div></div>';
      return;
    }
    P = root.PROBLEMS;
    A = root.ANSWERS;
    S = P.problems.map(function () {
      return { value: '', status: null, hintOpen: false, tries: 0 };
    });
    gate('');
  }

  root.AIQuiz = { start: start };

})(typeof window !== 'undefined' ? window : globalThis);
