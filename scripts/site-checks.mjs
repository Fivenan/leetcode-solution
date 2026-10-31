import assert from 'node:assert/strict';

const unordered = new Set([15, 17, 18, 22, 30, 39, 40, 46, 47, 49, 51, 77, 78, 90, 93, 95]);
function normalized(value, nested = false) {
  if (!Array.isArray(value)) return value;
  const items = value.map(v => nested ? normalized(v, true) : v);
  return items.sort((a, b) => JSON.stringify(a).localeCompare(JSON.stringify(b)));
}
export function checkResult(problem, result) {
  assert(!result.error, `#${problem.id}: ${result.error}`);
  assert(result.steps.length > 0, `#${problem.id}: no trace`);
  assert(result.steps.length <= 1200, `#${problem.id}: trace is not bounded`);
  const lineCount = problem.source.split('\n').length;
  for (const frame of result.steps) {
    assert(frame.line > 0 && frame.line <= lineCount, `#${problem.id}: source line ${frame.line} is invalid`);
    assert.equal(typeof frame.function, 'string');
    assert(frame.vars && typeof frame.vars === 'object');
  }
  const actual = unordered.has(problem.id) ? normalized(result.output, problem.id === 49) : result.output;
  const expected = unordered.has(problem.id) ? normalized(problem.expected, problem.id === 49) : problem.expected;
  assert.deepEqual(actual, expected, `#${problem.id}: incorrect example output`);
}

export function checkCatalog(catalog) {
  assert.deepEqual(catalog.map(p => p.id), Array.from({ length: 100 }, (_, i) => i + 1));
  for (const p of catalog) {
    assert(p.title && p.slug && p.category, `#${p.id}: incomplete metadata`);
    assert(['Easy', 'Medium', 'Hard'].includes(p.difficulty));
    assert(Array.isArray(p.params) && Array.isArray(p.example));
    assert.equal(p.params.length, p.example.length, `#${p.id}: argument count`);
    assert(p.source.length > 30 && p.approach && p.complexity && p.explanation, `#${p.id}: missing source or explanation`);
    assert(Object.hasOwn(p, 'expected'), `#${p.id}: no expected output`);
  }
}

export const invalidInputs = [
  [0, [], 'unknown problem'],
  [101, [], 'unknown problem'],
  [1, [], 'missing arguments'],
  [1, ['invalid', 9], 'wrong type'],
  [6, ['ABC', 0], 'zero zigzag rows'],
  [19, [[1, 2], 3], 'out of range list removal'],
  [25, [[1, 2], 0], 'zero group size'],
  [29, [10, 0], 'zero divisor'],
  [36, [['...']], 'invalid sudoku dimensions'],
  [39, [[0, 1], 4], 'zero combination candidate'],
  [48, [[[1, 2], [3]]], 'ragged matrix'],
  [51, [12], 'unbounded enumeration'],
  [69, [-1], 'negative square root'],
  [79, [['AB', 'C'], 'ABC'], 'ragged word board'],
];
