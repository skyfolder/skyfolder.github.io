/* ============================================================
   normalize.js — 채점 규칙 + 해시
   index.html 과 answer/build.html 이 함께 씁니다.
   이 파일을 고치면 반드시 answer/build.html 로 해시를 다시 만드세요.
   ============================================================ */
(function (root) {
  'use strict';

  // 정답 해시에 섞는 소금값. 바꾸면 해시를 전부 다시 만들어야 합니다.
  var SALT = 'fortran-ch02-2026';

  /* ---------- Fortran 코드 정규화 ----------
     대소문자 · 들여쓰기 · 주석 · 구두점 주변 공백 · end 문 표기 ·
     .eq. 류 · 따옴표 종류 · 줄잇기(&) 차이를 무시합니다.
     단, 문자열 리터럴 안쪽은 대소문자까지 그대로 둡니다.        */
  function normalizeFortran(src) {
    var strings = [], lines = [];

    for (var raw of String(src).split('\n')) {
      var out = '', i = 0;
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

    t = t.replace(/&[ \t]*\n[ \t]*&?/g, ' ');       // 줄잇기 합치기
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

  /* ---------- 일반 텍스트(숫자·기호·명령어) 정규화 ---------- */
  function normalizeText(s) {
    return String(s).trim().toLowerCase()
      .replace(/\s+/g, ' ')
      .replace(/[.]$/, '')
      .replace(/^`|`$/g, '');
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

  function sha256(message) {
    var bytes = utf8Bytes(message);
    var len = bytes.length * 8;
    bytes.push(0x80);
    while (bytes.length % 64 !== 56) bytes.push(0);
    var hi = Math.floor(len / 0x100000000), lo = len >>> 0;
    bytes.push((hi >>> 24) & 255, (hi >>> 16) & 255, (hi >>> 8) & 255, hi & 255);
    bytes.push((lo >>> 24) & 255, (lo >>> 16) & 255, (lo >>> 8) & 255, lo & 255);

    var H = [0x6a09e667,0xbb67ae85,0x3c6ef372,0xa54ff53a,0x510e527f,0x9b05688c,0x1f83d9ab,0x5be0cd19];
    var w = new Array(64);

    for (var off = 0; off < bytes.length; off += 64) {
      for (var t = 0; t < 16; t++) {
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

  function rotr(x, n) { return (x >>> n) | (x << (32 - n)); }

  /* ---------- 문제 하나의 답을 지문으로 ---------- */
  function digest(id, type, value) {
    return sha256(SALT + '|' + id + '|' + type + '|' + normalizeFor(type, value));
  }

  /* ---------- 해설 감추기용 (암호화 아님, 가림막) ---------- */
  function encodeText(s) {
    var bytes = utf8Bytes(s), bin = '';
    for (var i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
    return (typeof btoa === 'function')
      ? btoa(bin)
      : Buffer.from(s, 'utf8').toString('base64');
  }

  function decodeText(b64) {
    var bin = atob(b64), arr = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
    return new TextDecoder('utf-8').decode(arr);
  }

  root.FQ = {
    SALT: SALT,
    normalizeFortran: normalizeFortran,
    normalizeText: normalizeText,
    normalizeFor: normalizeFor,
    sha256: sha256,
    digest: digest,
    encodeText: encodeText,
    decodeText: decodeText
  };
})(typeof window !== 'undefined' ? window : globalThis);
