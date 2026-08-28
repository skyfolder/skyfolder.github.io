/* ============================================================
   normalize.js — 답 비교 규칙과 해시
   index.html(채점)과 tools/make-answers.html(정답 파일 생성)이
   같은 규칙을 쓰도록 한 곳에 모아 둡니다. 이 파일을 고치면
   반드시 정답 파일을 다시 만들어야 합니다(해시가 달라집니다).
   ============================================================ */
(function (root) {

  /* --- Fortran 코드 정규화 -------------------------------------
     대소문자, 들여쓰기, 구두점 주변 공백, 주석, end 문 표기,
     .eq. 계열, 따옴표 종류를 모두 같은 것으로 취급합니다.
     문자열 리터럴 안쪽은 대소문자까지 그대로 둡니다.        */
  function normalizeFortran(src) {
    const strings = [];
    const lines = [];

    for (const raw of String(src).split('\n')) {
      let out = '', i = 0;
      while (i < raw.length) {
        const c = raw[i];
        if (c === "'" || c === '"') {
          let j = i + 1, content = '';
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
          break;                                   // 주석은 버림
        } else {
          out += c; i++;
        }
      }
      out = out.trim();
      if (out) lines.push(out);
    }

    let t = lines.join('\n').toLowerCase();

    t = t.replace(/&[ \t]*\n[ \t]*&?/g, ' ');       // 줄잇기 합치기
    t = t.replace(/\.eq\./g, '==').replace(/\.ne\./g, '/=')
         .replace(/\.le\./g, '<=').replace(/\.ge\./g, '>=')
         .replace(/\.lt\./g, '<').replace(/\.gt\./g, '>');
    t = t.replace(/\bend[ \t]+(program|subroutine|function|module|type|interface|select|where|block|associate|do|if)\b/g, 'end$1');
    t = t.replace(/\belse[ \t]+if\b/g, 'elseif');
    t = t.replace(/[ \t]*([,=()*+\-\/:<>%;])[ \t]*/g, '$1');
    t = t.replace(/[ \t]+/g, ' ');

    t = t.replace(/\u0001(\d+)\u0002/g, (_, k) => "'" + strings[+k] + "'");
    return t.trim();
  }

  /* --- 값·기호·단어 정규화 (코드가 아닌 답) --- */
  function normalizeText(s) {
    return String(s).trim().toLowerCase().replace(/\s+/g, ' ').replace(/[.]$/, '');
  }

  function normalizeFor(type, s) {
    return type === 'line' ? normalizeFortran(s) : normalizeText(s);
  }

  /* --- SHA-256 (외부 의존 없음, file:// 에서도 동작) --- */
  const K = [
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
    const out = [];
    for (let i = 0; i < str.length; i++) {
      let c = str.charCodeAt(i);
      if (c < 0x80) out.push(c);
      else if (c < 0x800) { out.push(0xc0 | c >> 6, 0x80 | c & 63); }
      else if (c >= 0xd800 && c <= 0xdbff) {
        const c2 = str.charCodeAt(++i);
        c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
        out.push(0xf0 | c >> 18, 0x80 | c >> 12 & 63, 0x80 | c >> 6 & 63, 0x80 | c & 63);
      } else { out.push(0xe0 | c >> 12, 0x80 | c >> 6 & 63, 0x80 | c & 63); }
    }
    return out;
  }

  function sha256(str) {
    const msg = utf8Bytes(str);
    const len = msg.length * 8;
    msg.push(0x80);
    while (msg.length % 64 !== 56) msg.push(0);
    for (let i = 7; i >= 0; i--) msg.push((len / Math.pow(2, i * 8)) & 0xff);

    let h = [0x6a09e667,0xbb67ae85,0x3c6ef372,0xa54ff53a,0x510e527f,0x9b05688c,0x1f83d9ab,0x5be0cd19];
    const w = new Array(64);
    const rr = (x, n) => (x >>> n) | (x << (32 - n));

    for (let i = 0; i < msg.length; i += 64) {
      for (let t = 0; t < 16; t++) {
        w[t] = (msg[i+t*4] << 24) | (msg[i+t*4+1] << 16) | (msg[i+t*4+2] << 8) | msg[i+t*4+3];
      }
      for (let t = 16; t < 64; t++) {
        const s0 = rr(w[t-15],7) ^ rr(w[t-15],18) ^ (w[t-15] >>> 3);
        const s1 = rr(w[t-2],17) ^ rr(w[t-2],19) ^ (w[t-2] >>> 10);
        w[t] = (w[t-16] + s0 + w[t-7] + s1) | 0;
      }
      let [a,b,c,d,e,f,g,hh] = h;
      for (let t = 0; t < 64; t++) {
        const S1 = rr(e,6) ^ rr(e,11) ^ rr(e,25);
        const ch = (e & f) ^ (~e & g);
        const t1 = (hh + S1 + ch + K[t] + w[t]) | 0;
        const S0 = rr(a,2) ^ rr(a,13) ^ rr(a,22);
        const mj = (a & b) ^ (a & c) ^ (b & c);
        const t2 = (S0 + mj) | 0;
        hh = g; g = f; f = e; e = (d + t1) | 0;
        d = c; c = b; b = a; a = (t1 + t2) | 0;
      }
      h = [ (h[0]+a)|0,(h[1]+b)|0,(h[2]+c)|0,(h[3]+d)|0,
            (h[4]+e)|0,(h[5]+f)|0,(h[6]+g)|0,(h[7]+hh)|0 ];
    }
    return h.map(x => (x >>> 0).toString(16).padStart(8, '0')).join('');
  }

  /* 문제 번호를 섞어 넣어, 같은 답이라도 문제마다 해시가 달라지게 함
     (해시 목록만 보고 중복 답을 추측하지 못하게 하는 소금) */
  function answerHash(id, type, value) {
    return sha256('ch02|' + id + '|' + normalizeFor(type, value)).slice(0, 32);
  }

  root.FQ = { normalizeFortran, normalizeText, normalizeFor, sha256, answerHash };

})(typeof window !== 'undefined' ? window : globalThis);
