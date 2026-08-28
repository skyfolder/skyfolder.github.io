const fs = require('fs');
require('./normalize.js');
const FQ = globalThis.FQ;
const bank = require('./_bank.js');

// 모범답안 난독화 (해시는 되돌릴 수 없으므로 '정답 보기'용으로만 따로 저장)
function veil(s, id) {
  const key = Buffer.from('ch02#' + id, 'utf8');
  const b = Buffer.from(s, 'utf8');
  const out = Buffer.alloc(b.length);
  for (let i = 0; i < b.length; i++) out[i] = b[i] ^ key[i % key.length] ^ ((i * 7 + 11) & 0xff);
  return out.toString('base64');
}

const problems = [];
const answers = {};

bank.forEach((p, idx) => {
  const id = idx + 1;
  problems.push({ id, g: p.g, s: p.s, t: p.t, type: p.type, q: p.q, h: p.h, e: p.e });
  answers[id] = {
    h: p.a.map(a => FQ.answerHash(id, p.type, a)),
    m: veil(p.a[0], id)
  };
});

// 중복 해시 점검
bank.forEach((p, idx) => {
  const id = idx + 1;
  const set = new Set(answers[id].h);
  if (set.size !== answers[id].h.length) console.warn('중복 정답: #' + id);
});

const head = s => `/* 자동 생성 파일 — tools/make-answers.html 로 다시 만드세요. 손으로 고치지 마세요. */\n${s}`;

fs.writeFileSync('problems.js', head(
  'window.PROBLEMS = ' + JSON.stringify({
    title: 'Fortran 2장 실습',
    subtitle: '프로그램 구조와 기본 문법 · 한 줄씩 직접 입력하고 채점받기',
    groups: ['복습', '이론', '실습'],
    problems
  }, null, 1) + ';\n'
));

fs.writeFileSync('answer/answers.js', head(
  '/* 채점용 정답은 SHA-256 해시라 원문을 되돌릴 수 없습니다. */\n' +
  'window.ANSWERS = ' + JSON.stringify(answers) + ';\n'
));

console.log('문제 수:', problems.length);
console.log('그룹별:', ['복습','이론','실습'].map(g => g + ' ' + problems.filter(p=>p.g===g).length).join(' / '));
