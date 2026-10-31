// Verify the published artifact, generated native algorithms, and error boundaries.
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { checkCatalog, checkResult, invalidInputs } from './site-checks.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const site = path.join(root, 'site');
const scratch = await fs.mkdtemp(path.join(os.tmpdir(), 'leetcode-explorer-'));
const runner = path.join(scratch, process.platform === 'win32' ? 'runner.exe' : 'runner');
const execute = (id, args) => {
  const result = spawnSync(runner, [String(id), JSON.stringify(args)], { encoding: 'utf8', timeout: 12000, maxBuffer: 32 * 1024 * 1024 });
  assert.equal(result.status, 0, `#${id}: runner failed: ${result.error?.message ?? result.stderr}`);
  return JSON.parse(result.stdout);
};
try {
  const catalog = JSON.parse(await fs.readFile(path.join(site, 'dist/catalog.json'), 'utf8'));
  checkCatalog(catalog);
  const compile = spawnSync('go', ['build', '-o', runner, './cmd/runner'], { cwd: site, stdio: 'inherit', env: { ...process.env, GOWORK: 'off' } });
  assert.equal(compile.status, 0, 'Native explorer runner must compile');
  let truncated = 0;
  for (const problem of catalog) {
    const result = execute(problem.id, problem.example);
    checkResult(problem, result);
    if (result.truncated) truncated++;
  }
  for (const [id, args, label] of invalidInputs) {
    const result = execute(id, args);
    assert(result.error, `#${id}: should reject ${label}`);
    assert(!result.error.startsWith('Algorithm panic:'), `#${id}: ${label} should fail validation before execution`);
  }
  // A custom input must change both the execution and the output.
  const custom = execute(1, [[3, 2, 4], 6]);
  assert.deepEqual(custom.output, [1, 2]);
  assert(custom.steps.some(s => s.vars.target === 6));
  for (const name of ['index.html', 'app.js', 'worker.js', 'style.css', 'wasm_exec.js', 'explorer.wasm', 'GO-LICENSE.txt', '.nojekyll']) {
    await fs.access(path.join(site, 'dist', name));
  }
  for (const name of ['app.js', 'worker.js']) {
    const syntax = spawnSync(process.execPath, ['--check', path.join(site, 'web', name)], { stdio: 'inherit' });
    assert.equal(syntax.status, 0, `${name} JavaScript syntax`);
  }
  console.log(`Explorer: 100/100 native example outputs and traces, ${invalidInputs.length} invalid inputs, custom input, and static assets passed. ${truncated} examples have capped traces.`);
} finally {
  // Remove only our one compiled executable and the empty, freshly-created temp directory.
  await fs.rm(runner, { force: true });
  await fs.rmdir(scratch);
}
