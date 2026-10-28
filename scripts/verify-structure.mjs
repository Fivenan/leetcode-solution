import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const catalog = JSON.parse(await readFile(new URL('./problems.json', import.meta.url), 'utf8'));
assert.equal(catalog.length, 100, 'Catalog must contain 100 problems');
assert.deepEqual(catalog.map(p => p.id), Array.from({ length: 100 }, (_, i) => i + 1));
let pairs = 0;
for (const [language, extension] of [['go', 'go'], ['rust', 'rs'], ['java', 'java']]) {
  const names = await readdir(path.join(root, language));
  const expected = catalog.flatMap(({ id }) => {
    const number = String(id).padStart(4, '0');
    return [`${number}.${extension}`, `${number}-explanation.md`];
  });
  assert.deepEqual(names.filter(n => /^(\d{4}\.(go|rs|java)|\d{4}-explanation\.md)$/.test(n)).sort(),
    expected.sort(), `${language}: source/explanation coverage differs`);
  for (const { id, title, slug, methods } of catalog) {
    const number = String(id).padStart(4, '0');
    const label = `${language}/${number}`;
    const source = await readFile(path.join(root, language, `${number}.${extension}`), 'utf8');
    const explanation = await readFile(path.join(root, language, `${number}-explanation.md`), 'utf8');
    assert(source.trim().length > 40, `${label}: empty or trivial source`);
    assert(!/\bTODO\b|unimplemented!\s*\(|todo!\s*\(/i.test(source), `${label}: unfinished source`);
    const methodPatterns = {
      go: `^func\\s+${methods.go}\\s*\\(`,
      rust: `pub\\s+fn\\s+${methods.rust}\\s*\\(`,
      java: `public\\s+[\\w<>\\[\\], ?]+\\s+${methods.java}\\s*\\(`,
    };
    assert(new RegExp(methodPatterns[language], 'm').test(source), `${label}: missing judge method ${methods[language]}`);
    assert(explanation.includes(title), `${label}: missing official title`);
    assert(explanation.includes(`https://leetcode.com/problems/${slug}/`), `${label}: missing canonical link`);
    for (const section of ['Problem', 'Example', 'Approach', 'Correctness', 'Complexity', 'Edge cases']) {
      assert(new RegExp(`^#{1,6} +${section}\\b`, 'im').test(explanation), `${label}: missing ${section} section`);
    }
    if (language === 'go') assert(!/^package\s/m.test(source), `${label}: package belongs to test wrapper`);
    if (language === 'java') assert(!/^package\s/m.test(source), `${label}: package belongs to test wrapper`);
    if (language === 'rust') assert(/impl Solution\s*\{/.test(source), `${label}: missing Solution implementation`);
    pairs++;
  }
}
const readme = await readFile(path.join(root, 'README.md'), 'utf8');
for (const { id } of catalog) {
  const number = String(id).padStart(4, '0');
  for (const [language, extension] of [['go', 'go'], ['rust', 'rs'], ['java', 'java']]) {
    assert(readme.includes(`${language}/${number}.${extension}`), `README: missing ${language}/${number}.${extension}`);
    assert(readme.includes(`${language}/${number}-explanation.md`), `README: missing ${language}/${number} explanation`);
  }
}
console.log(`PASS: ${catalog.length} problem IDs, ${pairs} source/explanation pairs, canonical links, sections, and README index.`);
