// Reproducible, dependency-free Go/WebAssembly build. Run from any directory.
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const root = fileURLToPath(new URL('../', import.meta.url));
const site = path.join(root, 'site');
const dist = path.join(site, 'dist');
function run(args, env = {}) {
  const result = spawnSync('go', args, { cwd: site, stdio: 'inherit', env: { ...process.env, GOWORK: 'off', ...env } });
  if (result.error) throw result.error;
  if (result.status !== 0) throw new Error(`go ${args.join(' ')} failed (${result.status})`);
}
const section = (markdown, name) => markdown.match(new RegExp(`^## ${name}\\r?\\n([\\s\\S]*?)(?=^## |$(?![\\s\\S]))`, 'm'))?.[1].trim() ?? '';

try {
  await fs.mkdir(dist, { recursive: true });
  run(['run', './cmd/instrument', '-dir', '../go', '-out', 'generated']);
  run(['run', './cmd/adapters']);
  run(['build', '-trimpath', '-ldflags=-s -w', '-o', path.join(dist, 'explorer.wasm'), './cmd/wasm'], { GOOS: 'js', GOARCH: 'wasm' });
  const gorootResult = spawnSync('go', ['env', 'GOROOT'], { encoding: 'utf8' });
  if (gorootResult.status !== 0) throw new Error('Could not locate the installed Go runtime');
  const goroot = gorootResult.stdout.trim();
  let runtime;
  for (const candidate of ['lib/wasm/wasm_exec.js', 'misc/wasm/wasm_exec.js']) {
    const filename = path.join(goroot, candidate);
    try { await fs.access(filename); runtime = filename; break; } catch (error) { if (error.code !== 'ENOENT') throw error; }
  }
  if (!runtime) throw new Error('This Go installation has no wasm_exec.js');
  await fs.copyFile(runtime, path.join(dist, 'wasm_exec.js'));
  await fs.copyFile(path.join(goroot, 'LICENSE'), path.join(dist, 'GO-LICENSE.txt'));
  await fs.cp(path.join(site, 'web'), dist, { recursive: true });
  const catalog = JSON.parse(await fs.readFile(path.join(site, 'catalog.json'), 'utf8'));
  if (catalog.length !== 100) throw new Error('Expected exactly 100 explorer problems');
  for (const problem of catalog) {
    const number = String(problem.id).padStart(4, '0');
    problem.source = await fs.readFile(path.join(root, 'go', `${number}.go`), 'utf8');
    problem.explanation = await fs.readFile(path.join(root, 'go', `${number}-explanation.md`), 'utf8');
    problem.approach = section(problem.explanation, 'Approach');
    problem.complexity = section(problem.explanation, 'Complexity');
    problem.problem = section(problem.explanation, 'Problem');
  }
  await fs.writeFile(path.join(dist, 'catalog.json'), JSON.stringify(catalog));
  await fs.writeFile(path.join(dist, '.nojekyll'), '');
  const stat = await fs.stat(path.join(dist, 'explorer.wasm'));
  console.log(`Built ${catalog.length} Go walkthroughs in site/dist (${(stat.size / 1024 / 1024).toFixed(2)} MiB WebAssembly).`);
} catch (error) {
  console.error(`Site build: ${error.message}`);
  process.exitCode = 1;
}
