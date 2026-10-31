'use strict';

const $ = id => document.getElementById(id);
const state = { catalog: [], problem: null, steps: [], position: 0, playing: false, timer: null, worker: null, ready: false, busy: false, requestId: 0, timeout: null, startupTimeout: null, pending: false };
const playbackIds = ['first', 'previous', 'play', 'next', 'last', 'scrubber'];
const display = value => {
  try { return JSON.stringify(value) ?? String(value); } catch (error) { return String(value); }
};
function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}
function showError(message, target = 'global-error') {
  $(target).textContent = message;
  $(target).hidden = !message;
}
function setStatus(message, failed = false) {
  $('runtime-status').replaceChildren(element('span', 'live-dot'), document.createTextNode(message));
  $('runtime-status').classList.toggle('failed', failed);
}
function pause() {
  clearTimeout(state.timer);
  state.playing = false;
  $('play').textContent = '▶';
  $('play').setAttribute('aria-label', 'Play execution');
  $('play-state').textContent = state.busy ? 'RUNNING' : 'PAUSED';
}
function updateControls() {
  const empty = !state.steps.length || state.busy;
  for (const id of playbackIds) $(id).disabled = empty;
  $('first').disabled ||= state.position === 0;
  $('previous').disabled ||= state.position === 0;
  $('next').disabled ||= state.position >= state.steps.length - 1;
  $('last').disabled ||= state.position >= state.steps.length - 1;
  $('run').disabled = !state.problem || state.busy;
  $('run').firstChild.textContent = state.busy ? 'Running… ' : 'Run algorithm ';
}
function destroyWorker() {
  clearTimeout(state.timeout);
  clearTimeout(state.startupTimeout);
  state.worker?.terminate();
  state.worker = null;
  state.ready = false;
  state.busy = false;
  state.requestId++;
}
function startWorker() {
  destroyWorker();
  setStatus('Starting Go engine');
  let worker;
  try { worker = new Worker('./worker.js'); } catch (error) {
    engineFailure(error.message);
    return;
  }
  state.worker = worker;
  state.startupTimeout = setTimeout(() => engineFailure('Go engine loading timed out. Check your connection and run again.'), 20000);
  worker.onmessage = ({ data }) => {
    if (worker !== state.worker) return;
    if (data.type === 'ready') {
      clearTimeout(state.startupTimeout);
      state.ready = true;
      setStatus('Go engine ready');
      showError('');
      if (state.pending && state.problem) run();
      return;
    }
    if (data.requestId !== undefined && data.requestId !== state.requestId) return;
    clearTimeout(state.timeout);
    state.busy = false;
    if (data.type === 'error') {
      engineFailure(data.message || 'The Go engine could not run this input.');
      return;
    }
    if (data.type === 'result') {
      const result = data.result || {};
      state.steps = Array.isArray(result.steps) ? result.steps : [];
      state.position = 0;
      pause();
      if (result.error) $('play-state').textContent = 'STOPPED';
      $('output').textContent = result.error ? '—' : display(result.output);
      $('trace-note').textContent = result.truncated ? 'Trace limit reached' : `${state.steps.length} snapshots`;
      showError(result.error || '', 'input-error');
      setStatus('Go engine ready');
      renderStep();
      updateControls();
    }
  };
  worker.onerror = event => {
    event.preventDefault();
    if (worker === state.worker) engineFailure(event.message || 'Unable to start the Go worker.');
  };
  updateControls();
}
function engineFailure(message) {
  destroyWorker();
  state.pending = false;
  pause();
  setStatus('Go engine unavailable', true);
  showError(`${message} Use Run algorithm to try loading it again. Serve this site over HTTP; WebAssembly cannot load from a file URL.`);
  updateControls();
}
function run() {
  if (!state.problem) return;
  pause();
  state.pending = false;
  state.steps = [];
  state.position = 0;
  $('output').textContent = '—';
  $('trace-note').textContent = '';
  renderStep();
  let args;
  try {
    args = JSON.parse($('input').value);
    if (!Array.isArray(args)) throw new Error('Use a JSON array of positional arguments, for example [[2,7,11,15],9].');
    if (Array.isArray(state.problem.params) && args.length !== state.problem.params.length) throw new Error(`Expected ${state.problem.params.length} positional arguments; received ${args.length}.`);
  } catch (error) {
    $('play-state').textContent = 'INPUT ERROR';
    showError(error.message, 'input-error');
    return;
  }
  showError('', 'input-error');
  state.pending = true;
  if (!state.ready) {
    if (!state.worker) startWorker();
    return;
  }
  state.pending = false;
  state.busy = true;
  showError('');
  const requestId = ++state.requestId;
  $('play-state').textContent = 'RUNNING';
  setStatus('Running original Go solution');
  state.worker.postMessage({ type: 'run', id: state.problem.id, input: JSON.stringify(args), requestId });
  state.timeout = setTimeout(() => engineFailure('This execution exceeded 8 seconds and was stopped. Try a smaller input.'), 8000);
  updateControls();
}
function sourceText(problem) { return typeof problem.source === 'string' ? problem.source : problem.source?.go || ''; }
function renderSource() {
  const lines = sourceText(state.problem).split('\n');
  const fragment = document.createDocumentFragment();
  lines.forEach((line, index) => {
    const row = element('span', 'code-line');
    row.dataset.line = String(index + 1);
    row.append(element('span', 'line-number', index + 1), document.createTextNode(line || ' '));
    fragment.append(row);
  });
  $('source').replaceChildren(fragment);
}
function renderList() {
  const query = $('search').value.trim().toLowerCase();
  const difficulty = $('difficulty').value.toLowerCase();
  const category = $('category').value;
  const matches = state.catalog.filter(problem => (!query || `${problem.id} ${problem.title} ${problem.category}`.toLowerCase().includes(query)) && (!difficulty || problem.difficulty.toLowerCase() === difficulty) && (!category || problem.category === category));
  const fragment = document.createDocumentFragment();
  for (const problem of matches) {
    const link = element('a', `problem-link${state.problem?.id === problem.id ? ' active' : ''}`);
    link.href = `#problem=${problem.id}`;
    if (state.problem?.id === problem.id) link.setAttribute('aria-current', 'page');
    link.append(element('span', 'problem-id', String(problem.id).padStart(3, '0')), element('span', 'problem-name', problem.title), element('span', `difficulty-dot ${problem.difficulty.toLowerCase()}`));
    const dot = link.lastChild;
    dot.title = problem.difficulty;
    link.addEventListener('click', () => {
      $('navigation').classList.remove('open');
      $('menu-toggle').setAttribute('aria-expanded', 'false');
      if (state.problem?.id === problem.id) $('main').focus({ preventScroll: true });
    });
    fragment.append(link);
  }
  if (!matches.length) fragment.append(element('p', 'empty-list', 'No algorithms match. Try another name or clear the filters.'));
  $('problem-list').replaceChildren(fragment);
  $('result-count').textContent = `${matches.length} algorithms`;
}
function selectProblem() {
  const match = location.hash.match(/^#(?:problem=)?(\d+)$/);
  const requestedId = match ? Number(match[1]) : 1;
  const problem = state.catalog.find(item => item.id === requestedId);
  if (!problem) {
    showError(`Problem ${requestedId} is not in this collection. Choose a problem from the library.`);
    return;
  }
  if (state.problem?.id === problem.id) return;
  const wasBusy = state.busy;
  if (wasBusy) destroyWorker();
  pause();
  state.problem = problem;
  state.steps = [];
  state.position = 0;
  document.title = `${problem.title} · Algo Atlas`;
  $('problem-number').textContent = `PROBLEM ${String(problem.id).padStart(3, '0')}`;
  $('problem-title').textContent = problem.title;
  $('problem-difficulty').textContent = problem.difficulty;
  $('problem-difficulty').className = `tag ${problem.difficulty.toLowerCase()}`;
  $('problem-category').textContent = problem.category;
  $('breadcrumb-category').textContent = problem.category.toUpperCase();
  const explanation = String(problem.explanation || '');
  $('problem-intro').textContent = String(problem.approach || explanation.split('\n').find(line => line.trim() && !line.startsWith('#')) || 'Run the solution, inspect the state, and discover how the algorithm works.').slice(0, 260);
  $('params').textContent = (problem.params || []).map((param, index) => `${index + 1}. ${param.name}: ${param.type}`).join('  ·  ');
  $('input').value = JSON.stringify(problem.example);
  $('output').textContent = '—';
  $('trace-note').textContent = '';
  $('source-name').textContent = `${String(problem.id).padStart(3, '0')}_${problem.slug || 'solution'}.go`;
  renderSource();
  renderProse('explanation-panel', 'The idea', problem.explanation || problem.approach || '');
  renderProse('complexity-panel', 'Time & space', problem.complexity || 'Inspect the original solution and its explanation to reason about time and auxiliary space.');
  showError('');
  showError('', 'input-error');
  renderList();
  renderStep();
  state.pending = true;
  if (wasBusy) startWorker();
  else run();
}
function renderProse(id, heading, text) {
  const fragment = document.createDocumentFragment();
  const lines = String(text).replace(/\r/g, '').split('\n');
  if (!/^#{1,6}\s/.test(lines.find(line => line.trim()) || '')) fragment.append(element('h3', '', heading));
  let paragraph = [];
  let list = null;
  let fence = null;
  const flushParagraph = () => {
    if (!paragraph.length) return;
    const node = element('p');
    appendInline(node, paragraph.join(' '));
    fragment.append(node);
    paragraph = [];
  };
  for (const line of lines) {
    if (/^\s*```/.test(line)) {
      flushParagraph();
      list = null;
      if (fence) {
        const pre = element('pre');
        pre.append(element('code', '', fence.join('\n')));
        fragment.append(pre);
        fence = null;
      } else fence = [];
      continue;
    }
    if (fence) { fence.push(line); continue; }
    const title = line.match(/^(#{1,6})\s+(.+)$/);
    const item = line.match(/^\s*(?:([-*+])|\d+[.)])\s+(.+)$/);
    if (title) {
      flushParagraph();
      list = null;
      const node = element(title[1].length === 1 ? 'h3' : 'h4');
      appendInline(node, title[2]);
      fragment.append(node);
    } else if (item) {
      flushParagraph();
      const tag = item[1] ? 'ul' : 'ol';
      if (!list || list.tagName.toLowerCase() !== tag) { list = element(tag); fragment.append(list); }
      const node = element('li');
      appendInline(node, item[2]);
      list.append(node);
    } else if (!line.trim()) {
      flushParagraph();
      list = null;
    } else {
      list = null;
      paragraph.push(line.trim());
    }
  }
  flushParagraph();
  if (fence) {
    const pre = element('pre');
    pre.append(element('code', '', fence.join('\n')));
    fragment.append(pre);
  }
  $(id).replaceChildren(fragment);
}
function appendInline(container, text) {
  // Build a small Markdown subset with DOM nodes; raw HTML always remains text.
  const pattern = /`([^`]+)`|\[([^\]]+)\]\(([^\s)]+)\)|\*\*([^*]+)\*\*/g;
  let position = 0;
  for (const match of text.matchAll(pattern)) {
    container.append(document.createTextNode(text.slice(position, match.index)));
    if (match[1]) container.append(element('code', '', match[1]));
    else if (match[4]) container.append(element('strong', '', match[4]));
    else {
      let url;
      try { url = new URL(match[3]); } catch (error) { url = null; }
      const officialHosts = new Set(['leetcode.com', 'www.leetcode.com', 'go.dev', 'pkg.go.dev', 'golang.org', 'www.golang.org']);
      if (url && ['https:', 'http:'].includes(url.protocol) && officialHosts.has(url.hostname) && !url.username && !url.password) {
        const link = element('a', '', match[2]);
        link.href = url.href;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        container.append(link);
      } else container.append(document.createTextNode(`${match[2]} (${match[3]})`));
    }
    position = match.index + match[0].length;
  }
  container.append(document.createTextNode(text.slice(position)));
}
function scalar(value) { return value === null || typeof value !== 'object'; }
function addArray(container, values, indices, matrix = false) {
  const row = element('div', 'array-row');
  const visible = values.slice(0, 40);
  for (let index = 0; index < visible.length; index++) {
    const cell = element('div', 'array-cell');
    const box = element('div', `array-value${indices.has(index) && !matrix ? ' highlight' : ''}`, scalar(visible[index]) ? String(visible[index]) : display(visible[index]));
    box.title = display(visible[index]);
    cell.append(box, element('span', 'array-index', index));
    row.append(cell);
  }
  if (values.length > visible.length) row.append(element('span', 'subtle', `+${values.length - visible.length} more`));
  container.append(row);
}
function addLinkedList(container, value) {
  const chain = element('div', 'node-chain');
  let node = value;
  let count = 0;
  while (node && typeof node === 'object' && count++ < 18) {
    chain.append(element('span', 'node', String(node.Val)), element('span', 'node-arrow', '→'));
    node = node.Next;
  }
  chain.append(element('span', 'mono subtle', node ? '…' : 'nil'));
  container.append(chain);
}
function addTree(container, value) {
  let level = [value];
  for (let depth = 0; depth < 4 && level.some(Boolean); depth++) {
    const row = element('div', 'tree-level');
    const next = [];
    for (const node of level) {
      row.append(element('span', node ? 'node' : 'mono subtle', node ? String(node.Val) : '·'));
      if (node && typeof node === 'object') next.push(node.Left, node.Right);
    }
    container.append(row);
    level = next;
  }
  if (level.some(Boolean)) container.append(element('span', 'mono subtle', 'Deeper nodes are available in Watch state.'));
}
function renderVariables(vars) {
  const entries = Object.entries(vars || {});
  const canvas = document.createDocumentFragment();
  const cards = element('div', 'scalar-group');
  const watch = document.createDocumentFragment();
  // Only names traditionally used for array pointers color matching indices.
  const indices = new Set(entries.filter(([name, value]) => /^(i|j|left|right|lo|hi|start|end|mid|index|l|r)$/.test(name) && Number.isInteger(value)).map(([, value]) => value));
  let visualCount = 0;
  for (const [name, value] of entries) {
    const watchRow = element('div', 'watch-row');
    watchRow.append(element('span', 'watch-name', name), element('span', 'watch-value', display(value)));
    watch.append(watchRow);
    if (scalar(value)) {
      const card = element('div', 'scalar-card');
      card.append(element('div', 'scalar-name', name), element('div', 'scalar-value', typeof value === 'string' ? `“${value}”` : String(value)));
      cards.append(card);
      continue;
    }
    if (visualCount++ >= 5) continue;
    const group = element('div', 'array-group');
    const label = element('div', 'variable-label', name);
    group.append(label);
    if (Array.isArray(value)) {
      if (value.length && value.every(Array.isArray)) {
        label.append(element('span', 'type-label', 'MATRIX'));
        const matrix = element('div', 'matrix');
        for (const row of value.slice(0, 10)) addArray(matrix, row, indices, true);
        if (value.length > 10) matrix.append(element('span', 'mono subtle', '+ more rows in Watch state'));
        group.append(matrix);
      } else {
        label.append(element('span', 'type-label', `ARRAY · ${value.length} ITEMS`));
        addArray(group, value, indices);
      }
    } else if ('Val' in value && 'Next' in value) {
      label.append(element('span', 'type-label', 'LINKED LIST'));
      addLinkedList(group, value);
    } else if ('Val' in value && ('Left' in value || 'Right' in value)) {
      label.append(element('span', 'type-label', 'BINARY TREE · LEVELS'));
      addTree(group, value);
    } else {
      label.append(element('span', 'type-label', 'OBJECT / MAP'));
      const object = element('div', 'object-card');
      object.append(element('pre', '', JSON.stringify(value, null, 2)));
      group.append(object);
    }
    canvas.append(group);
  }
  if (cards.childNodes.length) canvas.append(cards);
  if (!entries.length) {
    const empty = element('div', 'canvas-empty');
    empty.append(element('span', 'empty-symbol', '{ }'), element('p', '', state.steps.length ? 'No local variables at this statement.' : 'Ready to follow the data.'), element('small', '', state.steps.length ? 'Step forward to see the state change.' : 'Run the input to start a real Go execution.'));
    canvas.append(empty);
    watch.append(element('p', 'subtle', 'No variables in this snapshot.'));
  }
  $('visualization').replaceChildren(canvas);
  $('watch').replaceChildren(watch);
  $('watch-count').textContent = `${entries.length} VARIABLES`;
}
function renderStep() {
  const step = state.steps[state.position];
  const line = Number(step?.line) || 0;
  const count = state.steps.length;
  $('step-label').textContent = count ? `STEP ${String(state.position + 1).padStart(3, '0')} / ${String(count).padStart(3, '0')}` : 'READY TO EXPLORE';
  $('step-caption').textContent = step ? `Before line ${line} · ${step.function || 'solution'}` : 'A closer look at the algorithm';
  $('timeline-count').textContent = `${count ? state.position + 1 : 0} / ${count}`;
  $('scrubber').max = String(Math.max(0, count - 1));
  $('scrubber').value = String(state.position);
  const statement = sourceText(state.problem || {}).split('\n')[line - 1]?.trim();
  $('current-statement').textContent = step ? `Before line ${line}  ${statement || ''}` : 'Run the algorithm to inspect its statements';
  for (const node of $('source').querySelectorAll('.current')) node.classList.remove('current');
  const current = line ? $('source').querySelector(`[data-line="${line}"]`) : null;
  if (current) {
    current.classList.add('current');
    const source = $('source');
    const top = current.offsetTop - source.offsetTop;
    if (top < source.scrollTop || top > source.scrollTop + source.clientHeight - 45) source.scrollTop = Math.max(0, top - source.clientHeight / 3);
  }
  renderVariables(step?.vars);
  updateControls();
}
function move(position) {
  state.position = Math.max(0, Math.min(state.steps.length - 1, position));
  renderStep();
}
function tick() {
  if (!state.playing) return;
  if (state.position >= state.steps.length - 1) { pause(); return; }
  move(state.position + 1);
  state.timer = setTimeout(tick, Number($('speed').value));
}
function play() {
  if (state.playing) { pause(); return; }
  if (!state.steps.length) return;
  if (state.position >= state.steps.length - 1) move(0);
  state.playing = true;
  $('play').textContent = 'Ⅱ';
  $('play').setAttribute('aria-label', 'Pause execution');
  $('play-state').textContent = 'PLAYING';
  state.timer = setTimeout(tick, Number($('speed').value));
}
for (const id of ['search', 'difficulty', 'category']) $(id).addEventListener(id === 'search' ? 'input' : 'change', renderList);
$('run').addEventListener('click', run);
$('reset-input').addEventListener('click', () => {
  if (state.problem) $('input').value = JSON.stringify(state.problem.example);
  showError('', 'input-error');
});
$('first').addEventListener('click', () => { pause(); move(0); });
$('previous').addEventListener('click', () => { pause(); move(state.position - 1); });
$('next').addEventListener('click', () => { pause(); move(state.position + 1); });
$('last').addEventListener('click', () => { pause(); move(state.steps.length - 1); });
$('play').addEventListener('click', play);
$('scrubber').addEventListener('input', () => { pause(); move(Number($('scrubber').value)); });
$('menu-toggle').addEventListener('click', () => {
  const open = $('navigation').classList.toggle('open');
  $('menu-toggle').setAttribute('aria-expanded', String(open));
  if (open) $('search').focus();
});
document.addEventListener('click', event => {
  if (!$('navigation').contains(event.target) && !$('menu-toggle').contains(event.target)) {
    $('navigation').classList.remove('open');
    $('menu-toggle').setAttribute('aria-expanded', 'false');
  }
});
const tabs = [...document.querySelectorAll('[role="tab"]')];
function activateTab(tab) {
  for (const candidate of tabs) {
    const active = tab === candidate;
    candidate.setAttribute('aria-selected', String(active));
    candidate.tabIndex = active ? 0 : -1;
    $(candidate.getAttribute('aria-controls')).hidden = !active;
  }
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => activateTab(tab));
  tab.addEventListener('keydown', event => {
    const destinations = { ArrowRight: (index + 1) % tabs.length, ArrowLeft: (index + tabs.length - 1) % tabs.length, Home: 0, End: tabs.length - 1 };
    if (event.key in destinations) {
      event.preventDefault();
      const nextTab = tabs[destinations[event.key]];
      activateTab(nextTab);
      nextTab.focus();
    }
  });
});
document.addEventListener('keydown', event => {
  const editing = /INPUT|TEXTAREA|SELECT/.test(document.activeElement?.tagName || '');
  if (event.key === '/' && !editing) {
    event.preventDefault();
    if (matchMedia('(max-width:680px)').matches) { $('navigation').classList.add('open'); $('menu-toggle').setAttribute('aria-expanded', 'true'); }
    $('search').focus();
  }
  if (event.key === 'Escape') { $('navigation').classList.remove('open'); $('menu-toggle').setAttribute('aria-expanded', 'false'); pause(); }
  if ((event.ctrlKey || event.metaKey) && event.key === 'Enter' && !state.busy) { event.preventDefault(); run(); }
});
window.addEventListener('hashchange', () => { if (state.catalog.length) selectProblem(); });
window.addEventListener('pagehide', () => { pause(); destroyWorker(); });
window.addEventListener('pageshow', event => { if (event.persisted && state.problem) { state.pending = true; startWorker(); } });
async function initialize() {
  updateControls();
  try {
    const response = await fetch('./catalog.json');
    if (!response.ok) throw new Error(`Could not load the problem collection (${response.status}).`);
    const catalog = await response.json();
    if (!Array.isArray(catalog) || !catalog.length) throw new Error('The problem collection is empty or invalid.');
    state.catalog = catalog.sort((a, b) => a.id - b.id);
    const categories = [...new Set(catalog.map(problem => problem.category))].sort();
    for (const category of categories) {
      const option = element('option', '', category);
      option.value = category;
      $('category').append(option);
    }
    selectProblem();
    if (!state.worker) startWorker();
    renderList();
  } catch (error) {
    showError(`${error.message} Check that this site is served over HTTP and catalog.json is available.`);
    setStatus('Collection unavailable', true);
    $('result-count').textContent = 'Collection unavailable';
  }
}
initialize().catch(error => showError(error.message));
