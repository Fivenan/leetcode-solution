// Independent small-input oracles for algorithms where examples miss many bugs.
// No external packages. Generated programs and binaries stay in an OS temp folder.
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, writeFile, rm } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const root = fileURLToPath(new URL('../', import.meta.url));
const language = process.argv[2];
assert(['go', 'rust', 'java'].includes(language), 'Usage: node scripts/verify-properties.mjs go|rust|java');
let seed = 0xc0ffee;
const random = n => { seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0; return (seed >>> 8) % n; };
const word = (n, alphabet = 'abc') => Array.from({ length: n }, () => alphabet[random(alphabet.length)]).join('');
const palindrome = s => s === [...s].reverse().join('');
function longestPalindromeLength(s) {
  let best = 0;
  for (let i = 0; i < s.length; i++) for (let j = i + 1; j <= s.length; j++) {
    if (j - i > best && palindrome(s.slice(i, j))) best = j - i;
  }
  return best;
}
function regex(s, p) {
  const memo = new Map();
  function visit(i, j) {
    const key = `${i},${j}`;
    if (memo.has(key)) return memo.get(key);
    if (j === p.length) return i === s.length;
    const first = i < s.length && (p[j] === '.' || p[j] === s[i]);
    const answer = p[j + 1] === '*' ? visit(i, j + 2) || (first && visit(i + 1, j)) : first && visit(i + 1, j + 1);
    memo.set(key, answer);
    return answer;
  }
  return visit(0, 0);
}
function wildcard(s, p) {
  const dp = Array.from({ length: s.length + 1 }, () => Array(p.length + 1).fill(false));
  dp[0][0] = true;
  for (let j = 1; j <= p.length; j++) dp[0][j] = p[j - 1] === '*' && dp[0][j - 1];
  for (let i = 1; i <= s.length; i++) for (let j = 1; j <= p.length; j++) {
    dp[i][j] = p[j - 1] === '*' ? dp[i][j - 1] || dp[i - 1][j] :
      (p[j - 1] === '?' || p[j - 1] === s[i - 1]) && dp[i - 1][j - 1];
  }
  return dp[s.length][p.length];
}
function minimumWindow(s, t) {
  const covers = text => [...new Set(t)].every(c => [...text].filter(x => x === c).length >= [...t].filter(x => x === c).length);
  let best = Infinity;
  for (let i = 0; i < s.length; i++) for (let j = i + 1; j <= s.length; j++) {
    if (j - i < best && covers(s.slice(i, j))) best = j - i;
  }
  return best === Infinity ? 0 : best;
}
function histogram(a) {
  let best = 0;
  for (let i = 0; i < a.length; i++) {
    let height = Infinity;
    for (let j = i; j < a.length; j++) { height = Math.min(height, a[j]); best = Math.max(best, height * (j - i + 1)); }
  }
  return best;
}
function rectangle(a) {
  let best = 0;
  for (let top = 0; top < a.length; top++) for (let bottom = top; bottom < a.length; bottom++) {
    for (let left = 0; left < a[0].length; left++) for (let right = left; right < a[0].length; right++) {
      let all = true;
      for (let r = top; r <= bottom; r++) for (let c = left; c <= right; c++) if (a[r][c] === 0) all = false;
      if (all) best = Math.max(best, (bottom - top + 1) * (right - left + 1));
    }
  }
  return best;
}
function scramble(a, b) {
  const memo = new Map();
  function visit(x, y) {
    if (x === y) return true;
    if ([...x].sort().join('') !== [...y].sort().join('')) return false;
    const key = `${x}/${y}`;
    if (memo.has(key)) return memo.get(key);
    for (let k = 1; k < x.length; k++) {
      if ((visit(x.slice(0, k), y.slice(0, k)) && visit(x.slice(k), y.slice(k))) ||
          (visit(x.slice(0, k), y.slice(-k)) && visit(x.slice(k), y.slice(0, -k)))) {
        memo.set(key, true); return true;
      }
    }
    memo.set(key, false); return false;
  }
  return visit(a, b);
}

const cases = new Map([4, 5, 10, 28, 41, 44, 76, 84, 85, 87].map(id => [id, []]));
for (let i = 0; i < 64; i++) {
  let a = Array.from({ length: random(8) }, () => random(25) - 12).sort((x, y) => x - y);
  let b = Array.from({ length: random(8) }, () => random(25) - 12).sort((x, y) => x - y);
  if (!a.length && !b.length) a = [0];
  const sorted = [...a, ...b].sort((x, y) => x - y), mid = Math.floor(sorted.length / 2);
  cases.get(4).push({ args: [a, b], expected: sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2 });
  let s = word(1 + random(12));
  cases.get(5).push({ args: [s], expected: longestPalindromeLength(s) });
  s = word(random(9), 'ab');
  let p = Array.from({ length: 1 + random(6) }, () => word(1, 'ab.') + (random(3) === 0 ? '*' : '')).join('');
  cases.get(10).push({ args: [s, p], expected: regex(s, p) });
  s = word(1 + random(12));
  const needle = word(1 + random(5));
  cases.get(28).push({ args: [s, needle], expected: s.indexOf(needle) });
  a = Array.from({ length: 1 + random(12) }, () => random(18) - 4);
  const values = new Set(a); let missing = 1; while (values.has(missing)) missing++;
  cases.get(41).push({ args: [a], expected: missing });
  s = word(random(10), 'ab'); p = word(random(8), 'ab?*');
  cases.get(44).push({ args: [s, p], expected: wildcard(s, p) });
  s = word(1 + random(12)); const t = word(1 + random(5));
  cases.get(76).push({ args: [s, t], expected: minimumWindow(s, t) });
  a = Array.from({ length: 1 + random(10) }, () => random(8));
  cases.get(84).push({ args: [a], expected: histogram(a) });
  const rows = 1 + random(4), cols = 1 + random(4);
  a = Array.from({ length: rows }, () => Array.from({ length: cols }, () => random(3) ? 1 : 0));
  cases.get(85).push({ args: [a], expected: rectangle(a) });
  s = word(1 + random(6));
  let other = word(s.length);
  if (i % 2 === 0) { const letters = [...s]; for (let k = letters.length - 1; k > 0; k--) { const j = random(k + 1); [letters[k], letters[j]] = [letters[j], letters[k]]; } other = letters.join(''); }
  cases.get(87).push({ args: [s, other], expected: scramble(s, other) });
}
// Deliberate boundaries supplement the seeded sample.
cases.get(4).push({ args: [[-1000000], [999999]], expected: -0.5 });
cases.get(5).push({ args: ['abacdfgdcaba'], expected: 3 }, { args: ['aaaaa'], expected: 5 });
cases.get(10).push({ args: ['', 'a*b*'], expected: true }, { args: ['aaa', 'a*a'], expected: true });
cases.get(28).push({ args: ['ababababac', 'ababac'], expected: 4 });
cases.get(41).push({ args: [[1, 1]], expected: 2 }, { args: [[1, 2, 3]], expected: 4 });
cases.get(44).push({ args: ['', '***'], expected: true }, { args: ['abefcdgiescdfimde', 'ab*cd?i*de'], expected: true });
cases.get(76).push({ args: ['aaab', 'aab'], expected: 3 });
cases.get(84).push({ args: [[2, 2, 2]], expected: 6 });
cases.get(85).push({ args: [[[1, 1], [1, 1]]], expected: 4 });
cases.get(87).push({ args: ['abcde', 'caebd'], expected: false });

const names = {
  go: { 4: 'findMedianSortedArrays', 5: 'longestPalindrome', 10: 'isMatch', 28: 'strStr', 41: 'firstMissingPositive', 44: 'isMatch', 76: 'minWindow', 84: 'largestRectangleArea', 85: 'maximalRectangle', 87: 'isScramble' },
  java: { 4: 'findMedianSortedArrays', 5: 'longestPalindrome', 10: 'isMatch', 28: 'strStr', 41: 'firstMissingPositive', 44: 'isMatch', 76: 'minWindow', 84: 'largestRectangleArea', 85: 'maximalRectangle', 87: 'isScramble' },
  rust: { 4: 'find_median_sorted_arrays', 5: 'longest_palindrome', 10: 'is_match', 28: 'str_str', 41: 'first_missing_positive', 44: 'is_match', 76: 'min_window', 84: 'largest_rectangle_area', 85: 'maximal_rectangle', 87: 'is_scramble' },
};
const quote = JSON.stringify;
const literal = (x, lang, chars = false) => {
  if (typeof x === 'string') return quote(x) + (lang === 'rust' ? '.to_string()' : '');
  if (!Array.isArray(x)) return String(x);
  if (chars) {
    const row = r => r.map(n => `'${n}'`).join(',');
    if (lang === 'go') return '[][]byte{' + x.map(r => '{' + row(r) + '}').join(',') + '}';
    if (lang === 'rust') return 'vec![' + x.map(r => 'vec![' + row(r) + ']').join(',') + ']';
    return 'new char[][]{' + x.map(r => '{' + row(r) + '}').join(',') + '}';
  }
  if (lang === 'go') return '[]int{' + x.join(',') + '}';
  if (lang === 'rust') return 'vec![' + x.join(',') + ']';
  return 'new int[]{' + x.join(',') + '}';
};
function invocation(id, args, lang) {
  const converted = args.map(x => literal(x, lang, id === 85));
  const prefix = lang === 'rust' ? 'Solution::' : lang === 'java' ? 'new Solution().' : '';
  return prefix + names[lang][id] + '(' + converted.join(',') + ')';
}
function condition(id, example, lang) {
  if (id === 5) {
    const s = quote(example.args[0]);
    if (lang === 'go') return `len(got) == ${example.expected} && strings.Contains(${s}, got) && propertyPalindrome(got)`;
    if (lang === 'rust') return `got.len() == ${example.expected} && ${s}.contains(got.as_str()) && got.bytes().eq(got.bytes().rev())`;
    return `got.length() == ${example.expected} && ${s}.contains(got) && new StringBuilder(got).reverse().toString().equals(got)`;
  }
  if (id === 76) {
    const [s, t] = example.args.map(quote);
    if (lang === 'go') return `len(got) == ${example.expected} && strings.Contains(${s}, got) && (${example.expected} == 0 || propertyCovers(got, ${t}))`;
    if (lang === 'rust') return `got.len() == ${example.expected} && ${s}.contains(got.as_str()) && (${example.expected} == 0 || property_covers(&got, ${t}))`;
    return `got.length() == ${example.expected} && ${s}.contains(got) && (${example.expected} == 0 || propertyCovers(got, ${t}))`;
  }
  const expected = id === 4 && lang === 'rust' ? `(${example.expected} as f64)` : String(example.expected);
  return `got == ${expected}`;
}
const temp = await mkdtemp(path.join(os.tmpdir(), `leetcode-properties-${language}-`));
function run(command, args) {
  const result = spawnSync(command, args, { cwd: temp, encoding: 'utf8', timeout: 240_000, maxBuffer: 8 * 1024 * 1024 });
  if (result.stdout) process.stdout.write(result.stdout);
  if (result.stderr) process.stderr.write(result.stderr);
  if (result.error) throw result.error;
  assert.equal(result.status, 0, `${command} failed with status ${result.status}`);
}
try {
  if (language === 'go') {
    await writeFile(path.join(temp, 'go.mod'), 'module properties\n\ngo 1.23\n');
    for (const [id, examples] of cases) {
      const n = String(id).padStart(4, '0'), dir = path.join(temp, `p${n}`);
      await mkdir(dir);
      const source = await readFile(path.join(root, 'go', `${n}.go`), 'utf8');
      await writeFile(path.join(dir, 'solution.go'), 'package solution\n' + source);
      const tests = examples.map((c, i) => `{ got := ${invocation(id, c.args, 'go')}; if !(${condition(id, c, 'go')}) { t.Fatalf("problem ${n} case ${i}: got %v", got) } }`).join('\n');
      const stringHelpers = (id === 5 || id === 76) ? '\nimport "strings"\nfunc propertyPalindrome(s string) bool { for i,j:=0,len(s)-1;i<j;i,j=i+1,j-1 { if s[i]!=s[j] { return false } }; return true }\nfunc propertyCovers(s,t string) bool { var count [256]int; for i:=0;i<len(s);i++ { count[s[i]]++ }; for i:=0;i<len(t);i++ { count[t[i]]--; if count[t[i]]<0 { return false } }; return true }\n' : '';
      await writeFile(path.join(dir, 'property_test.go'), 'package solution\nimport "testing"\n' + stringHelpers + '\nfunc TestProperties(t *testing.T) {\n' + tests + '\n}\n');
    }
    run(process.env.GO || 'go', ['test', './...']);
  } else if (language === 'java') {
    const files = [], calls = [];
    for (const [id, examples] of cases) {
      const n = String(id).padStart(4, '0'), dir = path.join(temp, `p${n}`);
      await mkdir(dir);
      const source = await readFile(path.join(root, 'java', `${n}.java`), 'utf8');
      const tests = examples.map((c, i) => `{ var got = ${invocation(id, c.args, 'java')}; if (!(${condition(id, c, 'java')})) throw new AssertionError("problem ${n} case ${i}: " + got); }`).join('\n');
      await writeFile(path.join(dir, 'Solution.java'), `package p${n};\n` + source);
      await writeFile(path.join(dir, 'PropertyTest.java'), `package p${n};\npublic class PropertyTest { public static void run() {\n${tests}\n} static boolean propertyCovers(String s,String t) { int[] count=new int[256]; for(char c:s.toCharArray()) count[c]++; for(char c:t.toCharArray()) if(--count[c]<0) return false; return true; } }\n`);
      files.push(`p${n}/Solution.java`, `p${n}/PropertyTest.java`);
      calls.push(`p${n}.PropertyTest.run();`);
    }
    await writeFile(path.join(temp, 'Main.java'), `class Main { public static void main(String[] args) { ${calls.join('\n')} } }`);
    run(process.env.JAVAC || 'javac', ['-encoding', 'UTF-8', ...files, 'Main.java']);
    run(process.env.JAVA || 'java', ['-cp', temp, 'Main']);
  } else {
    const modules = [];
    for (const [id, examples] of cases) {
      const n = String(id).padStart(4, '0');
      const source = await readFile(path.join(root, 'rust', `${n}.rs`), 'utf8');
      const tests = examples.map((c, i) => `{ let got = ${invocation(id, c.args, 'rust')}; assert!(${condition(id, c, 'rust')}, "problem ${n} case ${i}: {:?}", got); }`).join('\n');
      modules.push(`mod p${n} { struct Solution;\n${source}\nfn property_covers(s: &str,t: &str) -> bool { let mut count=[0i32;256]; for c in s.bytes() {count[c as usize]+=1;} for c in t.bytes() {count[c as usize]-=1;if count[c as usize]<0 {return false;}} true }\n#[test] fn property_test() {\n${tests}\n} }`);
    }
    await writeFile(path.join(temp, 'properties.rs'), '#![allow(dead_code)]\n' + modules.join('\n'));
    const binary = path.join(temp, process.platform === 'win32' ? 'properties.exe' : 'properties');
    run(process.env.RUSTC || 'rustc', ['--edition=2021', '--test', 'properties.rs', '-o', binary]);
    run(binary, []);
  }
  const count = [...cases.values()].reduce((sum, list) => sum + list.length, 0);
  console.log(`PASS: ${language}, ${count} independent oracle checks across ${cases.size} difficult problems (seed 0xc0ffee).`);
} finally {
  const resolved = path.resolve(temp);
  assert.equal(path.dirname(resolved), path.resolve(os.tmpdir()), 'Refusing cleanup outside the OS temp directory');
  assert(path.basename(resolved).startsWith(`leetcode-properties-${language}-`), 'Unexpected temporary directory');
  await rm(resolved, { recursive: true, force: true });
}
