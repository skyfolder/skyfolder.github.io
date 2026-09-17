/* ============================================================
   aiquiz.js — "대기과학을 위한 인공지능" 실습 공용 엔진

   하는 일
     1) 이름과 학번을 받는다
     2) 문항을 한 개씩 보여 주고 답을 받는다
     3) 입력을 정규화한 뒤 해시로 만들어 정답 해시와 대조한다
     4) 끝나면 서명이 붙은 결과 파일을 내려 준다

   정답 평문은 이 파일에도, 문제 파일에도 없다.
   answer/ChNN_answers.js 에 해시와 가려 둔 해설만 들어 있다.
   ============================================================ */

(function (root) {
  'use strict';

  var SALT = 'atmos-ai-2026';

  /* ---------- 해시 ---------- */
  /* 정답 생성 도구(build_NN.html)와 반드시 같은 식이어야 한다. */

  function hash(s) {
    var a = 0x811c9dc5 >>> 0;
    var b = 5381 >>> 0;
    var t = SALT + '|' + s;
    for (var i = 0; i < t.length; i++) {
      var c = t.charCodeAt(i);
      a = (a ^ c) >>> 0;
      a = Math.imul(a, 0x01000193) >>> 0;
      b = ((Math.imul(b, 33) ^ c) >>> 0);
    }
    return pad8(a) + pad8(b);
  }
  function pad8(n) {
    var s = (n >>> 0).toString(16);
    while (s.length < 8) { s = '0' + s; }
    return s;
  }

  function unhide(s) {
    try {
      var bin = atob(s);
      var bytes = new Uint8Array(bin.length);
      for (var i = 0; i < bin.length; i++) { bytes[i] = bin.charCodeAt(i); }
      return new TextDecoder('utf-8').decode(bytes);
    } catch (e) { return ''; }
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
    t = t.replace(/#.*$/gm, '');          /* 주석 제거 */
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

  /* ---------- 상태 ---------- */

  var CFG, P, A, S, who = { name: '', sid: '' }, at = 0, started = false;

  function el(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c];
    });
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
        '<div class="note">문항은 모두 ' + P.problems.length + '개이며 한 문항에 1점이다. ' +
        '답을 제출하면 바로 채점되고 해설이 열린다. ' +
        '마지막 화면에서 점수 파일을 내려받아 제출한다.</div>' +
      '</div></div></div>';

    el('g-go').onclick = begin;
    el('g-sid').onkeydown = function (e) { if (e.key === 'Enter') { begin(); } };
    el('g-name').focus();
  }

  function begin() {
    var n = el('g-name').value.trim();
    var s = el('g-sid').value.trim();
    if (!n || !s) { gate('이름과 학번을 모두 적어야 시작할 수 있다.'); return; }
    who = { name: n, sid: s };
    started = true;
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
    var byTag = {}, order = [];
    P.problems.forEach(function (p, i) {
      if (!byTag[p.tag]) { byTag[p.tag] = []; order.push(p.tag); }
      byTag[p.tag].push(i);
    });

    var h = '';
    order.forEach(function (tag) {
      h += '<h4>' + esc(tag) + '</h4><div class="dots">';
      byTag[tag].forEach(function (i) {
        var st = S[i].status;
        h += '<button data-i="' + i + '" class="' +
             (i === at ? 'on ' : '') + (st === 'ok' ? 'ok' : st === 'no' ? 'no' : '') +
             '">' + (i + 1) + '</button>';
      });
      h += '</div>';
    });

    var ok = S.filter(function (x) { return x.status === 'ok'; }).length;
    var done = S.filter(function (x) { return x.status; }).length;
    h += '<div class="tally"><b>' + ok + '</b> / ' + P.problems.length + ' 정답<br>' +
         '푼 문항 ' + done + '개</div>';

    var box = el('pad');
    box.innerHTML = h;
    Array.prototype.forEach.call(box.querySelectorAll('button[data-i]'), function (b) {
      b.onclick = function () { keep(); at = +b.dataset.i; draw(); };
    });

    el('bar').style.width = (done / P.problems.length * 100) + '%';
  }

  /* ---------- 문항 그리기 ---------- */

  function draw() {
    if (at >= P.problems.length) { finish(); return; }

    var p = P.problems[at], s = S[at], locked = !!s.status;
    var h = '';

    h += '<div class="card">';
    h += '<div class="kicker"><span class="n">' + (at + 1) + '</span>' +
         '<span class="tag">' + esc(p.tag) + '</span>' +
         '<span>' + esc(p.topic || '') + '</span></div>';
    h += '<h2>' + esc(p.title) + '</h2>';
    h += '<div class="ask">' + p.question + '</div>';

    if (p.type === 'choice') {
      h += '<div class="picks">';
      p.options.forEach(function (o, k) {
        h += '<label class="' + (s.value === String(k) ? 'sel' : '') + '">' +
             '<input type="radio" name="pick" value="' + k + '"' +
             (s.value === String(k) ? ' checked' : '') + (locked ? ' disabled' : '') + '>' +
             '<span>' + o + '</span></label>';
      });
      h += '</div>';
    } else if (p.type === 'code') {
      h += '<textarea class="ans" id="in" rows="5" spellcheck="false"' +
           (locked ? ' disabled' : '') + '>' + esc(s.value) + '</textarea>';
    } else {
      h += '<input class="ans" id="in" spellcheck="false" autocomplete="off"' +
           (locked ? ' disabled' : '') + ' value="' + esc(s.value) + '">';
    }

    h += '<div class="row">';
    if (!locked) { h += '<button class="b" id="mark">제출하고 채점</button>'; }
    if (p.hint && !locked) { h += '<button class="b ghost" id="hint">힌트</button>'; }
    h += '<span class="spacer"></span>';
    if (at > 0) { h += '<button class="b quiet" id="prev">이전</button>'; }
    h += '<button class="b ' + (locked ? '' : 'quiet') + '" id="next">' +
         (at === P.problems.length - 1 ? '결과 보기' : '다음') + '</button>';
    h += '</div>';

    if (s.hintOpen && p.hint) {
      h += '<div class="verdict hint"><h5>힌트</h5><p>' + p.hint + '</p></div>';
    }
    if (locked) {
      var a = A[p.id] || {};
      h += '<div class="verdict ' + s.status + '">' +
           '<h5>' + (s.status === 'ok' ? '정답이다' : '틀렸다') + '</h5>' +
           '<p>' + esc(unhide(a.e || '')) + '</p></div>';
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
    } else if (!locked) {
      var box = el('in');
      box.focus();
      if (p.type !== 'code') {
        box.onkeydown = function (e) { if (e.key === 'Enter') { e.preventDefault(); mark(); } };
      }
    }

    if (el('mark')) { el('mark').onclick = mark; }
    if (el('hint')) { el('hint').onclick = function () { S[at].hintOpen = true; draw(); }; }
    if (el('prev')) { el('prev').onclick = function () { keep(); at--; draw(); }; }
    if (el('next')) { el('next').onclick = function () { keep(); at++; draw(); }; }

    pad();
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
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

    var mine = hash(p.id + '|' + normalize(p.type, s.value));
    var list = (A[p.id] && A[p.id].h) || [];
    s.status = list.indexOf(mine) >= 0 ? 'ok' : 'no';
    s.hintOpen = false;
    draw();
  }

  /* ---------- 마침 ---------- */

  function finish() {
    var ok = S.filter(function (x) { return x.status === 'ok'; }).length;
    var total = P.problems.length;

    var rows = P.problems.map(function (p, i) {
      return '<tr><td class="s">' + (i + 1) + '</td><td>' + esc(p.tag) + '</td>' +
             '<td>' + esc(p.title) + '</td>' +
             '<td class="s">' + (S[i].status === 'ok' ? '1' : '0') + '</td></tr>';
    }).join('');

    el('main').innerHTML =
      '<div class="card done">' +
        '<div class="kicker"><span class="tag">채점 끝</span></div>' +
        '<h2>' + esc(who.name) + ' · ' + esc(who.sid) + '</h2>' +
        '<div class="big">' + ok + '<span class="of"> / ' + total + '</span></div>' +
        '<div class="row"><button class="b" id="save">결과 파일 내려받기</button>' +
          '<button class="b quiet" id="back">문항으로 돌아가기</button></div>' +
        '<table class="breakdown"><thead><tr><th>번호</th><th>구분</th><th>문항</th><th>점수</th></tr></thead>' +
        '<tbody>' + rows + '</tbody></table>' +
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
    lines.push('번호\t구분\t결과');
    P.problems.forEach(function (p, i) {
      lines.push((i + 1) + '\t' + p.tag + '\t' + (S[i].status === 'ok' ? 'O' : 'X'));
    });
    var body = lines.join('\n');
    lines.push('');
    lines.push('서명: ' + hash(body));

    var blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'ch' + CFG.chapter + '_' + who.sid + '_' + who.name + '.txt';
    a.click();
    URL.revokeObjectURL(a.href);
  }

  /* ---------- 진입 ---------- */

  function start(cfg) {
    CFG = cfg;
    if (!root.PROBLEMS || !root.ANSWERS) {
      document.getElementById('app').innerHTML =
        '<div class="wrap"><div class="gate"><div class="card">' +
        '<h1>문제 파일을 찾지 못했다</h1>' +
        '<p class="sub">저장소를 통째로 내려받았는지, answer 폴더가 이 HTML 파일과 같은 위치에 있는지 확인한다.</p>' +
        '</div></div></div>';
      return;
    }
    P = root.PROBLEMS;
    A = root.ANSWERS;
    S = P.problems.map(function () {
      return { value: '', status: null, hintOpen: false };
    });
    gate('');
  }

  root.AIQuiz = { start: start, _hash: hash, _norm: normalize };

})(typeof window !== 'undefined' ? window : globalThis);
