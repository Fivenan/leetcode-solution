# LeetCode solutions: 1–100

Solutions in **Go, Rust, and Java** for LeetCode problems **1 through 100**. Each language directory has one plain submission file and one adjacent explanation per problem:

```text
go/0001.go                 go/0001-explanation.md
rust/0001.rs               rust/0001-explanation.md
java/0001.java             java/0001-explanation.md
```

Each explanation includes an original problem restatement, a worked input/output example, the approach, a correctness argument, time and space costs, and edge cases. Follow its official LeetCode link for the full current statement and constraints.

## Using a solution

Open the numbered file for your language and paste its contents into the corresponding LeetCode editor. These are independent submissions, so repeated names such as `Solution` and helper functions across files are intentional. Judge-provided types such as `ListNode`, `TreeNode`, and Rust's `Solution` are supplied by LeetCode. Go snippets omit the package declaration; any imports shown belong at the top of the editor's Go file. Keep the provided standard-library imports when submitting.

The directories are a collection of independent answers rather than a single Go package, Rust crate, or Java application. Use the verification scripts below to compile them with isolated judge scaffolding.

## Algorithms and complexity

The implementations use efficient standard techniques suited to each problem: binary search, sliding windows, two pointers, monotonic stacks, dynamic programming, backtracking, and in-place list/array operations. Each explanation states its actual bounds and relevant assumptions. Sorting, hashing, recursion, and returned results are accounted for where they matter. Enumeration problems necessarily depend on the number and size of their answers. Different approaches can trade time, auxiliary space, or implementation complexity; there is no blanket claim that every implementation is optimal under every cost model.

Solutions rely on the input contracts of their respective LeetCode problems. In-place changes are intentional when the problem calls for them. String indexing follows each problem's alphabet constraints; these are not general Unicode text libraries.

## Verification

Requires Node.js 20 or newer and the compiler for the language being checked. The scripts use only Node's standard library and temporary build directories; there are no package dependencies.

```sh
node scripts/verify-structure.mjs
node scripts/verify-go.mjs
node scripts/verify-rust.mjs
node scripts/verify-java.mjs
node scripts/verify-properties.mjs go
node scripts/verify-properties.mjs rust
node scripts/verify-properties.mjs java
```

The structure check enforces all 300 numbered source/explanation pairs, canonical problem links, explanation sections, and this index. The language checks supply judge types, compile each answer in isolation, and run functional checks covering every problem. They include additional cases for boundary behavior and difficult algorithms; they are regression tests, not exhaustive proofs or LeetCode judge acceptance records.

The independent property checker adds 654 deterministic checks per language for problems 4, 5, 10, 28, 41, 44, 76, 84, 85, and 87. It compares small generated inputs with simple brute-force references, including repeated characters, missing matches, duplicate values, pattern boundaries, and rectangular matrices. Palindrome and minimum-window results are checked by their required properties so equally valid outputs are accepted.

GitHub Actions runs the structure check, all three language checks, and the independent property checks on pushes and pull requests using Ubuntu. Its language compilers come from the runner image. A missing local compiler is a failed prerequisite, not a passing check. See [the workflow](.github/workflows/verify.yml) and [the test scripts](scripts/).

## Interactive algorithm explorer

The **Algo Atlas** website runs these Go solutions in your browser using WebAssembly. Choose any of the 100 problems, edit its JSON arguments, and step through the actual algorithm with highlighted source lines and detached variable snapshots. Playback, a timeline, searchable problem navigation, and the accompanying explanations help connect the code to its changing state. Everything runs locally in a browser worker; the site needs no backend or third-party JavaScript packages.

Build with Node.js 24 and Go 1.23 or newer:

```sh
node scripts/build-site.mjs
node scripts/verify-site.mjs
node scripts/verify-site-wasm.mjs
cd site
go test ./...
go vet ./...
go run ./cmd/serve
```

Open the printed loopback URL. The static output is in `site/dist/`; generated isolated Go packages are in `site/generated/`. Both are ignored and reproducible from the original snippets. See [the explorer guide](site/README.md) for input formats, tracing limits, and publication instructions.

The [`gh-pages` branch](https://github.com/Fivenan/leetcode-solution/tree/gh-pages) holds a prepared static build. GitHub Pages publication is separate. The [Algorithm explorer workflow](.github/workflows/explorer.yml) checks the website and stores a Pages artifact on pushes; its deployment job runs only when manually requested with **publish** enabled.

## Problem index

Titles and links are based on the [official LeetCode problem catalog](https://leetcode.com/problemset/) ([metadata endpoint](https://leetcode.com/api/problems/all/)). Problem statements belong to LeetCode; the adjacent explanations use concise original restatements. Source files implement standard algorithms without third-party runtime dependencies.

| # | Problem | Go | Rust | Java |
|---|---|---|---|---|
| 0001 | [Two Sum](https://leetcode.com/problems/two-sum/) | [code](go/0001.go) · [explanation](go/0001-explanation.md) | [code](rust/0001.rs) · [explanation](rust/0001-explanation.md) | [code](java/0001.java) · [explanation](java/0001-explanation.md) |
| 0002 | [Add Two Numbers](https://leetcode.com/problems/add-two-numbers/) | [code](go/0002.go) · [explanation](go/0002-explanation.md) | [code](rust/0002.rs) · [explanation](rust/0002-explanation.md) | [code](java/0002.java) · [explanation](java/0002-explanation.md) |
| 0003 | [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) | [code](go/0003.go) · [explanation](go/0003-explanation.md) | [code](rust/0003.rs) · [explanation](rust/0003-explanation.md) | [code](java/0003.java) · [explanation](java/0003-explanation.md) |
| 0004 | [Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/) | [code](go/0004.go) · [explanation](go/0004-explanation.md) | [code](rust/0004.rs) · [explanation](rust/0004-explanation.md) | [code](java/0004.java) · [explanation](java/0004-explanation.md) |
| 0005 | [Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/) | [code](go/0005.go) · [explanation](go/0005-explanation.md) | [code](rust/0005.rs) · [explanation](rust/0005-explanation.md) | [code](java/0005.java) · [explanation](java/0005-explanation.md) |
| 0006 | [Zigzag Conversion](https://leetcode.com/problems/zigzag-conversion/) | [code](go/0006.go) · [explanation](go/0006-explanation.md) | [code](rust/0006.rs) · [explanation](rust/0006-explanation.md) | [code](java/0006.java) · [explanation](java/0006-explanation.md) |
| 0007 | [Reverse Integer](https://leetcode.com/problems/reverse-integer/) | [code](go/0007.go) · [explanation](go/0007-explanation.md) | [code](rust/0007.rs) · [explanation](rust/0007-explanation.md) | [code](java/0007.java) · [explanation](java/0007-explanation.md) |
| 0008 | [String to Integer (atoi)](https://leetcode.com/problems/string-to-integer-atoi/) | [code](go/0008.go) · [explanation](go/0008-explanation.md) | [code](rust/0008.rs) · [explanation](rust/0008-explanation.md) | [code](java/0008.java) · [explanation](java/0008-explanation.md) |
| 0009 | [Palindrome Number](https://leetcode.com/problems/palindrome-number/) | [code](go/0009.go) · [explanation](go/0009-explanation.md) | [code](rust/0009.rs) · [explanation](rust/0009-explanation.md) | [code](java/0009.java) · [explanation](java/0009-explanation.md) |
| 0010 | [Regular Expression Matching](https://leetcode.com/problems/regular-expression-matching/) | [code](go/0010.go) · [explanation](go/0010-explanation.md) | [code](rust/0010.rs) · [explanation](rust/0010-explanation.md) | [code](java/0010.java) · [explanation](java/0010-explanation.md) |
| 0011 | [Container With Most Water](https://leetcode.com/problems/container-with-most-water/) | [code](go/0011.go) · [explanation](go/0011-explanation.md) | [code](rust/0011.rs) · [explanation](rust/0011-explanation.md) | [code](java/0011.java) · [explanation](java/0011-explanation.md) |
| 0012 | [Integer to Roman](https://leetcode.com/problems/integer-to-roman/) | [code](go/0012.go) · [explanation](go/0012-explanation.md) | [code](rust/0012.rs) · [explanation](rust/0012-explanation.md) | [code](java/0012.java) · [explanation](java/0012-explanation.md) |
| 0013 | [Roman to Integer](https://leetcode.com/problems/roman-to-integer/) | [code](go/0013.go) · [explanation](go/0013-explanation.md) | [code](rust/0013.rs) · [explanation](rust/0013-explanation.md) | [code](java/0013.java) · [explanation](java/0013-explanation.md) |
| 0014 | [Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/) | [code](go/0014.go) · [explanation](go/0014-explanation.md) | [code](rust/0014.rs) · [explanation](rust/0014-explanation.md) | [code](java/0014.java) · [explanation](java/0014-explanation.md) |
| 0015 | [3Sum](https://leetcode.com/problems/3sum/) | [code](go/0015.go) · [explanation](go/0015-explanation.md) | [code](rust/0015.rs) · [explanation](rust/0015-explanation.md) | [code](java/0015.java) · [explanation](java/0015-explanation.md) |
| 0016 | [3Sum Closest](https://leetcode.com/problems/3sum-closest/) | [code](go/0016.go) · [explanation](go/0016-explanation.md) | [code](rust/0016.rs) · [explanation](rust/0016-explanation.md) | [code](java/0016.java) · [explanation](java/0016-explanation.md) |
| 0017 | [Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/) | [code](go/0017.go) · [explanation](go/0017-explanation.md) | [code](rust/0017.rs) · [explanation](rust/0017-explanation.md) | [code](java/0017.java) · [explanation](java/0017-explanation.md) |
| 0018 | [4Sum](https://leetcode.com/problems/4sum/) | [code](go/0018.go) · [explanation](go/0018-explanation.md) | [code](rust/0018.rs) · [explanation](rust/0018-explanation.md) | [code](java/0018.java) · [explanation](java/0018-explanation.md) |
| 0019 | [Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/) | [code](go/0019.go) · [explanation](go/0019-explanation.md) | [code](rust/0019.rs) · [explanation](rust/0019-explanation.md) | [code](java/0019.java) · [explanation](java/0019-explanation.md) |
| 0020 | [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/) | [code](go/0020.go) · [explanation](go/0020-explanation.md) | [code](rust/0020.rs) · [explanation](rust/0020-explanation.md) | [code](java/0020.java) · [explanation](java/0020-explanation.md) |
| 0021 | [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/) | [code](go/0021.go) · [explanation](go/0021-explanation.md) | [code](rust/0021.rs) · [explanation](rust/0021-explanation.md) | [code](java/0021.java) · [explanation](java/0021-explanation.md) |
| 0022 | [Generate Parentheses](https://leetcode.com/problems/generate-parentheses/) | [code](go/0022.go) · [explanation](go/0022-explanation.md) | [code](rust/0022.rs) · [explanation](rust/0022-explanation.md) | [code](java/0022.java) · [explanation](java/0022-explanation.md) |
| 0023 | [Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/) | [code](go/0023.go) · [explanation](go/0023-explanation.md) | [code](rust/0023.rs) · [explanation](rust/0023-explanation.md) | [code](java/0023.java) · [explanation](java/0023-explanation.md) |
| 0024 | [Swap Nodes in Pairs](https://leetcode.com/problems/swap-nodes-in-pairs/) | [code](go/0024.go) · [explanation](go/0024-explanation.md) | [code](rust/0024.rs) · [explanation](rust/0024-explanation.md) | [code](java/0024.java) · [explanation](java/0024-explanation.md) |
| 0025 | [Reverse Nodes in k-Group](https://leetcode.com/problems/reverse-nodes-in-k-group/) | [code](go/0025.go) · [explanation](go/0025-explanation.md) | [code](rust/0025.rs) · [explanation](rust/0025-explanation.md) | [code](java/0025.java) · [explanation](java/0025-explanation.md) |
| 0026 | [Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/) | [code](go/0026.go) · [explanation](go/0026-explanation.md) | [code](rust/0026.rs) · [explanation](rust/0026-explanation.md) | [code](java/0026.java) · [explanation](java/0026-explanation.md) |
| 0027 | [Remove Element](https://leetcode.com/problems/remove-element/) | [code](go/0027.go) · [explanation](go/0027-explanation.md) | [code](rust/0027.rs) · [explanation](rust/0027-explanation.md) | [code](java/0027.java) · [explanation](java/0027-explanation.md) |
| 0028 | [Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/) | [code](go/0028.go) · [explanation](go/0028-explanation.md) | [code](rust/0028.rs) · [explanation](rust/0028-explanation.md) | [code](java/0028.java) · [explanation](java/0028-explanation.md) |
| 0029 | [Divide Two Integers](https://leetcode.com/problems/divide-two-integers/) | [code](go/0029.go) · [explanation](go/0029-explanation.md) | [code](rust/0029.rs) · [explanation](rust/0029-explanation.md) | [code](java/0029.java) · [explanation](java/0029-explanation.md) |
| 0030 | [Substring with Concatenation of All Words](https://leetcode.com/problems/substring-with-concatenation-of-all-words/) | [code](go/0030.go) · [explanation](go/0030-explanation.md) | [code](rust/0030.rs) · [explanation](rust/0030-explanation.md) | [code](java/0030.java) · [explanation](java/0030-explanation.md) |
| 0031 | [Next Permutation](https://leetcode.com/problems/next-permutation/) | [code](go/0031.go) · [explanation](go/0031-explanation.md) | [code](rust/0031.rs) · [explanation](rust/0031-explanation.md) | [code](java/0031.java) · [explanation](java/0031-explanation.md) |
| 0032 | [Longest Valid Parentheses](https://leetcode.com/problems/longest-valid-parentheses/) | [code](go/0032.go) · [explanation](go/0032-explanation.md) | [code](rust/0032.rs) · [explanation](rust/0032-explanation.md) | [code](java/0032.java) · [explanation](java/0032-explanation.md) |
| 0033 | [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/) | [code](go/0033.go) · [explanation](go/0033-explanation.md) | [code](rust/0033.rs) · [explanation](rust/0033-explanation.md) | [code](java/0033.java) · [explanation](java/0033-explanation.md) |
| 0034 | [Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/) | [code](go/0034.go) · [explanation](go/0034-explanation.md) | [code](rust/0034.rs) · [explanation](rust/0034-explanation.md) | [code](java/0034.java) · [explanation](java/0034-explanation.md) |
| 0035 | [Search Insert Position](https://leetcode.com/problems/search-insert-position/) | [code](go/0035.go) · [explanation](go/0035-explanation.md) | [code](rust/0035.rs) · [explanation](rust/0035-explanation.md) | [code](java/0035.java) · [explanation](java/0035-explanation.md) |
| 0036 | [Valid Sudoku](https://leetcode.com/problems/valid-sudoku/) | [code](go/0036.go) · [explanation](go/0036-explanation.md) | [code](rust/0036.rs) · [explanation](rust/0036-explanation.md) | [code](java/0036.java) · [explanation](java/0036-explanation.md) |
| 0037 | [Sudoku Solver](https://leetcode.com/problems/sudoku-solver/) | [code](go/0037.go) · [explanation](go/0037-explanation.md) | [code](rust/0037.rs) · [explanation](rust/0037-explanation.md) | [code](java/0037.java) · [explanation](java/0037-explanation.md) |
| 0038 | [Count and Say](https://leetcode.com/problems/count-and-say/) | [code](go/0038.go) · [explanation](go/0038-explanation.md) | [code](rust/0038.rs) · [explanation](rust/0038-explanation.md) | [code](java/0038.java) · [explanation](java/0038-explanation.md) |
| 0039 | [Combination Sum](https://leetcode.com/problems/combination-sum/) | [code](go/0039.go) · [explanation](go/0039-explanation.md) | [code](rust/0039.rs) · [explanation](rust/0039-explanation.md) | [code](java/0039.java) · [explanation](java/0039-explanation.md) |
| 0040 | [Combination Sum II](https://leetcode.com/problems/combination-sum-ii/) | [code](go/0040.go) · [explanation](go/0040-explanation.md) | [code](rust/0040.rs) · [explanation](rust/0040-explanation.md) | [code](java/0040.java) · [explanation](java/0040-explanation.md) |
| 0041 | [First Missing Positive](https://leetcode.com/problems/first-missing-positive/) | [code](go/0041.go) · [explanation](go/0041-explanation.md) | [code](rust/0041.rs) · [explanation](rust/0041-explanation.md) | [code](java/0041.java) · [explanation](java/0041-explanation.md) |
| 0042 | [Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/) | [code](go/0042.go) · [explanation](go/0042-explanation.md) | [code](rust/0042.rs) · [explanation](rust/0042-explanation.md) | [code](java/0042.java) · [explanation](java/0042-explanation.md) |
| 0043 | [Multiply Strings](https://leetcode.com/problems/multiply-strings/) | [code](go/0043.go) · [explanation](go/0043-explanation.md) | [code](rust/0043.rs) · [explanation](rust/0043-explanation.md) | [code](java/0043.java) · [explanation](java/0043-explanation.md) |
| 0044 | [Wildcard Matching](https://leetcode.com/problems/wildcard-matching/) | [code](go/0044.go) · [explanation](go/0044-explanation.md) | [code](rust/0044.rs) · [explanation](rust/0044-explanation.md) | [code](java/0044.java) · [explanation](java/0044-explanation.md) |
| 0045 | [Jump Game II](https://leetcode.com/problems/jump-game-ii/) | [code](go/0045.go) · [explanation](go/0045-explanation.md) | [code](rust/0045.rs) · [explanation](rust/0045-explanation.md) | [code](java/0045.java) · [explanation](java/0045-explanation.md) |
| 0046 | [Permutations](https://leetcode.com/problems/permutations/) | [code](go/0046.go) · [explanation](go/0046-explanation.md) | [code](rust/0046.rs) · [explanation](rust/0046-explanation.md) | [code](java/0046.java) · [explanation](java/0046-explanation.md) |
| 0047 | [Permutations II](https://leetcode.com/problems/permutations-ii/) | [code](go/0047.go) · [explanation](go/0047-explanation.md) | [code](rust/0047.rs) · [explanation](rust/0047-explanation.md) | [code](java/0047.java) · [explanation](java/0047-explanation.md) |
| 0048 | [Rotate Image](https://leetcode.com/problems/rotate-image/) | [code](go/0048.go) · [explanation](go/0048-explanation.md) | [code](rust/0048.rs) · [explanation](rust/0048-explanation.md) | [code](java/0048.java) · [explanation](java/0048-explanation.md) |
| 0049 | [Group Anagrams](https://leetcode.com/problems/group-anagrams/) | [code](go/0049.go) · [explanation](go/0049-explanation.md) | [code](rust/0049.rs) · [explanation](rust/0049-explanation.md) | [code](java/0049.java) · [explanation](java/0049-explanation.md) |
| 0050 | [Pow(x, n)](https://leetcode.com/problems/powx-n/) | [code](go/0050.go) · [explanation](go/0050-explanation.md) | [code](rust/0050.rs) · [explanation](rust/0050-explanation.md) | [code](java/0050.java) · [explanation](java/0050-explanation.md) |
| 0051 | [N-Queens](https://leetcode.com/problems/n-queens/) | [code](go/0051.go) · [explanation](go/0051-explanation.md) | [code](rust/0051.rs) · [explanation](rust/0051-explanation.md) | [code](java/0051.java) · [explanation](java/0051-explanation.md) |
| 0052 | [N-Queens II](https://leetcode.com/problems/n-queens-ii/) | [code](go/0052.go) · [explanation](go/0052-explanation.md) | [code](rust/0052.rs) · [explanation](rust/0052-explanation.md) | [code](java/0052.java) · [explanation](java/0052-explanation.md) |
| 0053 | [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/) | [code](go/0053.go) · [explanation](go/0053-explanation.md) | [code](rust/0053.rs) · [explanation](rust/0053-explanation.md) | [code](java/0053.java) · [explanation](java/0053-explanation.md) |
| 0054 | [Spiral Matrix](https://leetcode.com/problems/spiral-matrix/) | [code](go/0054.go) · [explanation](go/0054-explanation.md) | [code](rust/0054.rs) · [explanation](rust/0054-explanation.md) | [code](java/0054.java) · [explanation](java/0054-explanation.md) |
| 0055 | [Jump Game](https://leetcode.com/problems/jump-game/) | [code](go/0055.go) · [explanation](go/0055-explanation.md) | [code](rust/0055.rs) · [explanation](rust/0055-explanation.md) | [code](java/0055.java) · [explanation](java/0055-explanation.md) |
| 0056 | [Merge Intervals](https://leetcode.com/problems/merge-intervals/) | [code](go/0056.go) · [explanation](go/0056-explanation.md) | [code](rust/0056.rs) · [explanation](rust/0056-explanation.md) | [code](java/0056.java) · [explanation](java/0056-explanation.md) |
| 0057 | [Insert Interval](https://leetcode.com/problems/insert-interval/) | [code](go/0057.go) · [explanation](go/0057-explanation.md) | [code](rust/0057.rs) · [explanation](rust/0057-explanation.md) | [code](java/0057.java) · [explanation](java/0057-explanation.md) |
| 0058 | [Length of Last Word](https://leetcode.com/problems/length-of-last-word/) | [code](go/0058.go) · [explanation](go/0058-explanation.md) | [code](rust/0058.rs) · [explanation](rust/0058-explanation.md) | [code](java/0058.java) · [explanation](java/0058-explanation.md) |
| 0059 | [Spiral Matrix II](https://leetcode.com/problems/spiral-matrix-ii/) | [code](go/0059.go) · [explanation](go/0059-explanation.md) | [code](rust/0059.rs) · [explanation](rust/0059-explanation.md) | [code](java/0059.java) · [explanation](java/0059-explanation.md) |
| 0060 | [Permutation Sequence](https://leetcode.com/problems/permutation-sequence/) | [code](go/0060.go) · [explanation](go/0060-explanation.md) | [code](rust/0060.rs) · [explanation](rust/0060-explanation.md) | [code](java/0060.java) · [explanation](java/0060-explanation.md) |
| 0061 | [Rotate List](https://leetcode.com/problems/rotate-list/) | [code](go/0061.go) · [explanation](go/0061-explanation.md) | [code](rust/0061.rs) · [explanation](rust/0061-explanation.md) | [code](java/0061.java) · [explanation](java/0061-explanation.md) |
| 0062 | [Unique Paths](https://leetcode.com/problems/unique-paths/) | [code](go/0062.go) · [explanation](go/0062-explanation.md) | [code](rust/0062.rs) · [explanation](rust/0062-explanation.md) | [code](java/0062.java) · [explanation](java/0062-explanation.md) |
| 0063 | [Unique Paths II](https://leetcode.com/problems/unique-paths-ii/) | [code](go/0063.go) · [explanation](go/0063-explanation.md) | [code](rust/0063.rs) · [explanation](rust/0063-explanation.md) | [code](java/0063.java) · [explanation](java/0063-explanation.md) |
| 0064 | [Minimum Path Sum](https://leetcode.com/problems/minimum-path-sum/) | [code](go/0064.go) · [explanation](go/0064-explanation.md) | [code](rust/0064.rs) · [explanation](rust/0064-explanation.md) | [code](java/0064.java) · [explanation](java/0064-explanation.md) |
| 0065 | [Valid Number](https://leetcode.com/problems/valid-number/) | [code](go/0065.go) · [explanation](go/0065-explanation.md) | [code](rust/0065.rs) · [explanation](rust/0065-explanation.md) | [code](java/0065.java) · [explanation](java/0065-explanation.md) |
| 0066 | [Plus One](https://leetcode.com/problems/plus-one/) | [code](go/0066.go) · [explanation](go/0066-explanation.md) | [code](rust/0066.rs) · [explanation](rust/0066-explanation.md) | [code](java/0066.java) · [explanation](java/0066-explanation.md) |
| 0067 | [Add Binary](https://leetcode.com/problems/add-binary/) | [code](go/0067.go) · [explanation](go/0067-explanation.md) | [code](rust/0067.rs) · [explanation](rust/0067-explanation.md) | [code](java/0067.java) · [explanation](java/0067-explanation.md) |
| 0068 | [Text Justification](https://leetcode.com/problems/text-justification/) | [code](go/0068.go) · [explanation](go/0068-explanation.md) | [code](rust/0068.rs) · [explanation](rust/0068-explanation.md) | [code](java/0068.java) · [explanation](java/0068-explanation.md) |
| 0069 | [Sqrt(x)](https://leetcode.com/problems/sqrtx/) | [code](go/0069.go) · [explanation](go/0069-explanation.md) | [code](rust/0069.rs) · [explanation](rust/0069-explanation.md) | [code](java/0069.java) · [explanation](java/0069-explanation.md) |
| 0070 | [Climbing Stairs](https://leetcode.com/problems/climbing-stairs/) | [code](go/0070.go) · [explanation](go/0070-explanation.md) | [code](rust/0070.rs) · [explanation](rust/0070-explanation.md) | [code](java/0070.java) · [explanation](java/0070-explanation.md) |
| 0071 | [Simplify Path](https://leetcode.com/problems/simplify-path/) | [code](go/0071.go) · [explanation](go/0071-explanation.md) | [code](rust/0071.rs) · [explanation](rust/0071-explanation.md) | [code](java/0071.java) · [explanation](java/0071-explanation.md) |
| 0072 | [Edit Distance](https://leetcode.com/problems/edit-distance/) | [code](go/0072.go) · [explanation](go/0072-explanation.md) | [code](rust/0072.rs) · [explanation](rust/0072-explanation.md) | [code](java/0072.java) · [explanation](java/0072-explanation.md) |
| 0073 | [Set Matrix Zeroes](https://leetcode.com/problems/set-matrix-zeroes/) | [code](go/0073.go) · [explanation](go/0073-explanation.md) | [code](rust/0073.rs) · [explanation](rust/0073-explanation.md) | [code](java/0073.java) · [explanation](java/0073-explanation.md) |
| 0074 | [Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/) | [code](go/0074.go) · [explanation](go/0074-explanation.md) | [code](rust/0074.rs) · [explanation](rust/0074-explanation.md) | [code](java/0074.java) · [explanation](java/0074-explanation.md) |
| 0075 | [Sort Colors](https://leetcode.com/problems/sort-colors/) | [code](go/0075.go) · [explanation](go/0075-explanation.md) | [code](rust/0075.rs) · [explanation](rust/0075-explanation.md) | [code](java/0075.java) · [explanation](java/0075-explanation.md) |
| 0076 | [Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/) | [code](go/0076.go) · [explanation](go/0076-explanation.md) | [code](rust/0076.rs) · [explanation](rust/0076-explanation.md) | [code](java/0076.java) · [explanation](java/0076-explanation.md) |
| 0077 | [Combinations](https://leetcode.com/problems/combinations/) | [code](go/0077.go) · [explanation](go/0077-explanation.md) | [code](rust/0077.rs) · [explanation](rust/0077-explanation.md) | [code](java/0077.java) · [explanation](java/0077-explanation.md) |
| 0078 | [Subsets](https://leetcode.com/problems/subsets/) | [code](go/0078.go) · [explanation](go/0078-explanation.md) | [code](rust/0078.rs) · [explanation](rust/0078-explanation.md) | [code](java/0078.java) · [explanation](java/0078-explanation.md) |
| 0079 | [Word Search](https://leetcode.com/problems/word-search/) | [code](go/0079.go) · [explanation](go/0079-explanation.md) | [code](rust/0079.rs) · [explanation](rust/0079-explanation.md) | [code](java/0079.java) · [explanation](java/0079-explanation.md) |
| 0080 | [Remove Duplicates from Sorted Array II](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/) | [code](go/0080.go) · [explanation](go/0080-explanation.md) | [code](rust/0080.rs) · [explanation](rust/0080-explanation.md) | [code](java/0080.java) · [explanation](java/0080-explanation.md) |
| 0081 | [Search in Rotated Sorted Array II](https://leetcode.com/problems/search-in-rotated-sorted-array-ii/) | [code](go/0081.go) · [explanation](go/0081-explanation.md) | [code](rust/0081.rs) · [explanation](rust/0081-explanation.md) | [code](java/0081.java) · [explanation](java/0081-explanation.md) |
| 0082 | [Remove Duplicates from Sorted List II](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/) | [code](go/0082.go) · [explanation](go/0082-explanation.md) | [code](rust/0082.rs) · [explanation](rust/0082-explanation.md) | [code](java/0082.java) · [explanation](java/0082-explanation.md) |
| 0083 | [Remove Duplicates from Sorted List](https://leetcode.com/problems/remove-duplicates-from-sorted-list/) | [code](go/0083.go) · [explanation](go/0083-explanation.md) | [code](rust/0083.rs) · [explanation](rust/0083-explanation.md) | [code](java/0083.java) · [explanation](java/0083-explanation.md) |
| 0084 | [Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/) | [code](go/0084.go) · [explanation](go/0084-explanation.md) | [code](rust/0084.rs) · [explanation](rust/0084-explanation.md) | [code](java/0084.java) · [explanation](java/0084-explanation.md) |
| 0085 | [Maximal Rectangle](https://leetcode.com/problems/maximal-rectangle/) | [code](go/0085.go) · [explanation](go/0085-explanation.md) | [code](rust/0085.rs) · [explanation](rust/0085-explanation.md) | [code](java/0085.java) · [explanation](java/0085-explanation.md) |
| 0086 | [Partition List](https://leetcode.com/problems/partition-list/) | [code](go/0086.go) · [explanation](go/0086-explanation.md) | [code](rust/0086.rs) · [explanation](rust/0086-explanation.md) | [code](java/0086.java) · [explanation](java/0086-explanation.md) |
| 0087 | [Scramble String](https://leetcode.com/problems/scramble-string/) | [code](go/0087.go) · [explanation](go/0087-explanation.md) | [code](rust/0087.rs) · [explanation](rust/0087-explanation.md) | [code](java/0087.java) · [explanation](java/0087-explanation.md) |
| 0088 | [Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/) | [code](go/0088.go) · [explanation](go/0088-explanation.md) | [code](rust/0088.rs) · [explanation](rust/0088-explanation.md) | [code](java/0088.java) · [explanation](java/0088-explanation.md) |
| 0089 | [Gray Code](https://leetcode.com/problems/gray-code/) | [code](go/0089.go) · [explanation](go/0089-explanation.md) | [code](rust/0089.rs) · [explanation](rust/0089-explanation.md) | [code](java/0089.java) · [explanation](java/0089-explanation.md) |
| 0090 | [Subsets II](https://leetcode.com/problems/subsets-ii/) | [code](go/0090.go) · [explanation](go/0090-explanation.md) | [code](rust/0090.rs) · [explanation](rust/0090-explanation.md) | [code](java/0090.java) · [explanation](java/0090-explanation.md) |
| 0091 | [Decode Ways](https://leetcode.com/problems/decode-ways/) | [code](go/0091.go) · [explanation](go/0091-explanation.md) | [code](rust/0091.rs) · [explanation](rust/0091-explanation.md) | [code](java/0091.java) · [explanation](java/0091-explanation.md) |
| 0092 | [Reverse Linked List II](https://leetcode.com/problems/reverse-linked-list-ii/) | [code](go/0092.go) · [explanation](go/0092-explanation.md) | [code](rust/0092.rs) · [explanation](rust/0092-explanation.md) | [code](java/0092.java) · [explanation](java/0092-explanation.md) |
| 0093 | [Restore IP Addresses](https://leetcode.com/problems/restore-ip-addresses/) | [code](go/0093.go) · [explanation](go/0093-explanation.md) | [code](rust/0093.rs) · [explanation](rust/0093-explanation.md) | [code](java/0093.java) · [explanation](java/0093-explanation.md) |
| 0094 | [Binary Tree Inorder Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal/) | [code](go/0094.go) · [explanation](go/0094-explanation.md) | [code](rust/0094.rs) · [explanation](rust/0094-explanation.md) | [code](java/0094.java) · [explanation](java/0094-explanation.md) |
| 0095 | [Unique Binary Search Trees II](https://leetcode.com/problems/unique-binary-search-trees-ii/) | [code](go/0095.go) · [explanation](go/0095-explanation.md) | [code](rust/0095.rs) · [explanation](rust/0095-explanation.md) | [code](java/0095.java) · [explanation](java/0095-explanation.md) |
| 0096 | [Unique Binary Search Trees](https://leetcode.com/problems/unique-binary-search-trees/) | [code](go/0096.go) · [explanation](go/0096-explanation.md) | [code](rust/0096.rs) · [explanation](rust/0096-explanation.md) | [code](java/0096.java) · [explanation](java/0096-explanation.md) |
| 0097 | [Interleaving String](https://leetcode.com/problems/interleaving-string/) | [code](go/0097.go) · [explanation](go/0097-explanation.md) | [code](rust/0097.rs) · [explanation](rust/0097-explanation.md) | [code](java/0097.java) · [explanation](java/0097-explanation.md) |
| 0098 | [Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/) | [code](go/0098.go) · [explanation](go/0098-explanation.md) | [code](rust/0098.rs) · [explanation](rust/0098-explanation.md) | [code](java/0098.java) · [explanation](java/0098-explanation.md) |
| 0099 | [Recover Binary Search Tree](https://leetcode.com/problems/recover-binary-search-tree/) | [code](go/0099.go) · [explanation](go/0099-explanation.md) | [code](rust/0099.rs) · [explanation](rust/0099-explanation.md) | [code](java/0099.java) · [explanation](java/0099-explanation.md) |
| 0100 | [Same Tree](https://leetcode.com/problems/same-tree/) | [code](go/0100.go) · [explanation](go/0100-explanation.md) | [code](rust/0100.rs) · [explanation](rust/0100-explanation.md) | [code](java/0100.java) · [explanation](java/0100-explanation.md) |
