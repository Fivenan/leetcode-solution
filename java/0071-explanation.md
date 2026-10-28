# 71. Simplify Path

[Official problem](https://leetcode.com/problems/simplify-path/)

## Problem

Canonicalize an absolute Unix-style path: collapse repeated separators, ignore dot, resolve double-dot without moving above root, and treat all other names (including triple dots) literally.

## Example input/output

path = "/a/./b/../../c/" → "/c"

## Approach

Split on slashes, push normal directory names, ignore empty/dot tokens, and pop for double-dot when possible. Join the retained names from root.

## Correctness

After each component, the stack describes exactly the canonical directory sequence reached by that path prefix. The component rules preserve this invariant, and joining adds only the required separators.

## Complexity

O(n) time; O(n) auxiliary token/stack space and O(n) output.

## Edge cases

Root, excess double-dots, repeated slashes, and literal names such as "...".
