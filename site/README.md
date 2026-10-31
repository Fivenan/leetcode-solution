# Algo Atlas

A static learning workspace for the repository's Go solutions, problems 1–100. Go executes the algorithms through WebAssembly; HTML, CSS, and plain JavaScript provide navigation and playback. No server, package installation, accounts, or external frontend services are required.

## Build and preview

From the repository root, with Node.js 24 and Go 1.23 or newer installed:

```sh
node scripts/build-site.mjs
node scripts/verify-site.mjs
node scripts/verify-site-wasm.mjs
cd site
go test ./...
go vet ./...
go run ./cmd/serve
```

Visit the URL printed by the preview server. Stop it with Ctrl+C. To use another port, run `go run ./cmd/serve -port 8081`. Opening `index.html` directly through `file:` will not load the worker and WebAssembly correctly; serve the directory over HTTP.

The build instruments each original `go/NNNN.go` file using Go's parser, places it in an isolated generated package, generates a typed execution adapter, and compiles all 100 algorithms into one WebAssembly module. It copies the matching `wasm_exec.js` and its Go license from the installed compiler. The catalog includes each original source and explanation, so the displayed code stays aligned with the traced lines. Generated packages and `dist/` are ignored by Git.

## Use the explorer

Search by number, title, or technique; filter by difficulty or category. Select a problem to run its example. Playback starts paused. Use the step controls or scrub the timeline to inspect variable values **before the highlighted statement executes**. The final output appears separately from that historical snapshot. The Code and Explanation views connect each operation to the source and its reasoning.

Inputs are a JSON array of positional arguments, in the order shown above the editor:

```json
[[2,7,11,15],9]
```

- Arrays and linked lists use JSON arrays of numbers.
- Trees use breadth-first arrays, with `null` for absent children: `[1,null,2,3]`.
- Character boards use an array of row strings: `["ABCE","SFCS","ADEE"]`.
- Numeric matrices use nested arrays; Sudoku uses nine strings with `.` for empty cells.
- Problems with an in-place operation return the modified structure. Problems 26, 27, and 80 return `{ "length": k, "nums": [...] }` with the retained prefix.

Click **Run** after editing. Reset restores the example. Problem URLs use a hash, so links and browser navigation work under the repository's GitHub Pages subpath.

## Practical limits

This is an educational trace viewer. Its input validator applies small demonstration limits and the original problem's input contracts: sorted inputs where required, rectangular boards, valid alphabets, nonzero divisors, and other algorithm-specific conditions. Enumeration inputs have lower caps, including six queens, seven permutation elements, and five nodes for generated BSTs. Use the original submission files for full LeetCode constraints.

The recorder stores at most 1,200 frames and continues computing the answer after that frame cap. If it reaches 20,000 instrumented operations, it stops with an explicit error instead of reporting a partial answer as final. Deep or large snapshots are abbreviated; collection previews contain at most 64 entries, strings at most 256 bytes, and pointer cycles are marked. A browser worker timeout stops unusually slow requests. Captures are detached copies, so later mutations do not change earlier frames.

Snapshots show values and tree/list structure; they do not model pointer identity or visualize every algorithm with a bespoke diagram. Original algorithms assume the alphabets described in their explanations. The interface rejects inputs outside its supported demonstration contracts.

The verification scripts check all 100 canonical outputs and source-line traces in both native Go and the exact WebAssembly artifact, plus validation errors and a changed custom input. Go unit tests cover instrumentation scopes, loops, closures, snapshot isolation, cycles, and resource limits. These are regression checks, not exhaustive proofs.

## GitHub Pages publication

**Live site: [Algo Atlas](https://fivenan.github.io/leetcode-solution/).** The repository is public and GitHub Pages publishes from **gh-pages / (root)**.

Release updates with either publishing method:

1. **Current branch setup:** build and verify the site, then update **gh-pages / (root)** with the contents of `site/dist/`. GitHub Pages publishes changes pushed to that branch. Source edits on `main` alone do not update the live site.
2. **Rebuild with Actions:** in Settings → Pages, select **GitHub Actions**, then manually run **Algorithm explorer** from `main` with **publish** checked. The workflow builds, tests, and publishes the current sources. Pushes and pull requests only build and verify; they do not deploy.

The workflow stores a Pages-ready artifact on every successful main-branch build. Source changes belong on `main`; compiled assets belong on `gh-pages`. All static asset paths are relative, including the WebAssembly fetch, so either publishing method works at the repository subpath.
