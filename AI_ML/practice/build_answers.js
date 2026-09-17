/* ============================================================
   build_answers.js — build_NN.html 과 똑같은 일을 명령줄에서 한다

     node answer/build_answers.js 07

   ChNN_problems.js 에서 문항의 형을 읽고,
   answer/ChNN_answers.src.js 의 평문 답을 AIQ.digest 로 바꾸어
   answer/ChNN_answers.js 를 만든다.
   ============================================================ */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const CH = process.argv[2];
if (!CH) { console.error('장 번호를 인수로 준다. 예: node answer/build_answers.js 07'); process.exit(1); }

const root = path.join(__dirname, '..');
const sandbox = {
  window: {}, Math, console,
  TextEncoder, TextDecoder,
  btoa: (s) => Buffer.from(s, 'binary').toString('base64'),
  atob: (s) => Buffer.from(s, 'base64').toString('binary')
};
sandbox.globalThis = sandbox;
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(path.join(root, 'aiquiz.js'), 'utf8'), sandbox);
vm.runInContext(fs.readFileSync(path.join(root, `Ch${CH}_problems.js`), 'utf8'), sandbox);
vm.runInContext(fs.readFileSync(path.join(__dirname, `Ch${CH}_answers.src.js`), 'utf8'), sandbox);

const AIQ = sandbox.window.AIQ;
const problems = sandbox.window.PROBLEMS.problems;
const src = sandbox.window.ANSWER_SOURCE;

const types = {};
problems.forEach((p) => { types[p.id] = p.type; });

const missing = problems.filter((p) => !src[p.id]).map((p) => p.id);
if (missing.length) { console.error('정답이 빠진 문제: ' + missing.join(', ')); process.exit(1); }

const ids = Object.keys(src).map(Number).sort((a, b) => a - b);
const rows = ids.map((id) => {
  const a = src[id];
  const h = a.answers.map((v) => `"${AIQ.digest(CH, id, types[id], v)}"`);
  return `  ${id}: { h: [${h.join(', ')}], e: "${AIQ.encodeText(a.explanation || '')}" }`;
});

const out =
`/* ============================================================
   answer/Ch${CH}_answers.js — 배포용 정답 (자동 생성물)

   평문 정답은 들어 있지 않습니다. h 는 정답을 채점 규칙대로 정규화한 뒤
   구한 지문이고, e 는 해설을 base64 로 가려 둔 것입니다.

   ★ 직접 고치지 마세요. answer/Ch${CH}_answers.src.js 를 고친 뒤
     answer/build_${CH}.html 을 열어 다시 만드세요.
   ============================================================ */

window.ANSWERS = {
${rows.join(',\n')}
};
`;

fs.writeFileSync(path.join(__dirname, `Ch${CH}_answers.js`), out, 'utf8');
console.log(`문제 ${problems.length}개, 정답 ${ids.length}개를 처리했습니다.`);
