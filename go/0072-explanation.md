# 72. Edit Distance

[LeetCode problem](https://leetcode.com/problems/edit-distance/)

## Problem

Return the minimum insertions, deletions and character replacements needed to turn one lowercase English string into another. Either may be empty.

## Example

"horse" → "ros" needs 3 edits.

## Approach

Use prefix Levenshtein DP with one row over the shorter string. Save the old diagonal before replacing each cell.

## Correctness

If final characters agree, an optimal prefix conversion can keep them. Otherwise its final edit is an insertion, deletion or replacement, represented by the left, upper or diagonal predecessor plus one. Their minimum is therefore exact.

## Complexity

Time: O(mn). Auxiliary space: O(min(m,n)). Output: O(1).

## Edge cases

Empty strings initialize to pure insertion/deletion counts. Equal strings and repeated characters work; ASCII character indexing follows the contract.
