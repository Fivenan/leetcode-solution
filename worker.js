'use strict';

let ready = false;
let busy = false;

function reportError(error, requestId) {
  self.postMessage({ type: 'error', requestId, message: error instanceof Error ? error.message : String(error) });
}

async function initialize() {
  try {
    importScripts('./wasm_exec.js');
    const go = new Go();
    const response = await fetch('./explorer.wasm');
    if (!response.ok) throw new Error(`Could not load Go engine (${response.status}).`);
    const { instance } = await WebAssembly.instantiate(await response.arrayBuffer(), go.importObject);
    // Go keeps running to serve requests; its returned promise settles only on exit.
    go.run(instance).then(() => {
      ready = false;
      reportError(new Error('The Go engine stopped. Run again to restart it.'));
    }).catch(reportError);
    const started = Date.now();
    while (!self.explorerReady || typeof self.explorerRun !== 'function') {
      if (Date.now() - started > 15000) throw new Error('The Go engine did not become ready.');
      await new Promise(resolve => setTimeout(resolve, 20));
    }
    ready = true;
    self.postMessage({ type: 'ready' });
  } catch (error) {
    reportError(error);
  }
}

self.onmessage = ({ data }) => {
  if (!data || data.type !== 'run') return;
  const { id, input, requestId } = data;
  if (!ready || busy) {
    reportError(new Error('The Go engine is not ready.'), requestId);
    return;
  }
  busy = true;
  try {
    const result = JSON.parse(self.explorerRun(id, input));
    self.postMessage({ type: 'result', requestId, result });
  } catch (error) {
    reportError(error, requestId);
  } finally {
    busy = false;
  }
};

initialize().catch(reportError);
