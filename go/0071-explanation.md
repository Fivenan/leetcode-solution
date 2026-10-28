# 71. Simplify Path

[LeetCode problem](https://leetcode.com/problems/simplify-path/)

## Problem

Canonicalize an absolute Unix-style path: collapse repeated slashes, ignore dot, resolve dot-dot without moving above root, and omit a trailing slash except at root. Other dot-containing names are ordinary names.

## Example

"/home//foo/../bar/" → "/home/bar"

## Approach

Split on slashes and keep a stack of directory components. Dot does nothing; dot-dot pops if possible; ordinary names push.

## Correctness

The stack represents the canonical path after each component. Each rule matches that component’s filesystem path semantics, and joining the final stack yields exactly one leading separator and no redundant separators.

## Complexity

Time: O(n). Auxiliary space: O(n) for split/stack references and O(n) output.

## Edge cases

Root, attempts to ascend above root, repeated separators and names like "..." are handled. Symlinks and actual filesystem access are outside this lexical problem.
