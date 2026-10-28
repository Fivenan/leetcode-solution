# 71. Simplify Path

[Official LeetCode problem](https://leetcode.com/problems/simplify-path/)

## Problem

Canonicalize an absolute Unix path: collapse repeated separators, ignore ., resolve .. without climbing above root, and remove a trailing slash except at root. Other names, including ..., are ordinary.

## Example input/output

"/a/./b/../../c/" → "/c".

## Approach

Split on slash and maintain a stack of borrowed ordinary components; .. pops if possible, while empty and . components do nothing.

## Correctness

The stack represents the canonical directory sequence after every consumed component. Ordinary names descend, .. ascends one existing level, and no-op components preserve the path. Joining that sequence with one leading slash gives the canonical path.

## Complexity

O(n) time and O(n) auxiliary component-reference space plus O(n) output. Components borrow the input until the output is constructed.

## Edge cases

Root, excess .., repeated slashes, and names containing several dots are handled.
