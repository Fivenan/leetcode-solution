// Run the exact browser WebAssembly artifact under Node, without a browser shim.
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { checkCatalog, checkResult, invalidInputs } from './site-checks.mjs';

const dist = fileURLToPath(new URL('../site/dist/', import.meta.url));
await import(pathToFileURL(`${dist}/wasm_exec.js`).href);
const catalog = JSON.parse(await fs.readFile(`${dist}/catalog.json`, 'utf8'));
checkCatalog(catalog);
const go = new globalThis.Go();
const { instance } = await WebAssembly.instantiate(await fs.readFile(`${dist}/explorer.wasm`), go.importObject);
go.run(instance).catch(error => { console.error(error); process.exit(1); });
assert.equal(globalThis.explorerReady, true, 'Go bridge should be ready');
for (const problem of catalog) {
  checkResult(problem, JSON.parse(globalThis.explorerRun(problem.id, JSON.stringify(problem.example))));
}
for (const [id, args, label] of invalidInputs) {
  const result = JSON.parse(globalThis.explorerRun(id, JSON.stringify(args)));
  assert(result.error, `#${id}: should reject ${label}`);
}
assert(JSON.parse(globalThis.explorerRun(1, '{')).error, 'Malformed JSON must be rejected');
console.log('Explorer WebAssembly: 100/100 example outputs and traces, invalid inputs, and malformed JSON passed.');
process.exit(0);
