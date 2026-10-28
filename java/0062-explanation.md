# 62. Unique Paths

[Official problem](https://leetcode.com/problems/unique-paths/)

## Problem

Count paths from the top-left to bottom-right of an m×n grid using only right and down moves. Both dimensions are between 1 and 100; the judge guarantees the answer is at most 2×10⁹.

## Example input/output

m = 3, n = 7 → 28

## Approach

A path has m+n-2 moves, of which exactly m-1 are down and n-1 are right. Choose the positions of the less frequent move: C(m+n-2, min(m-1,n-1)). Compute that binomial coefficient multiplicatively, dividing at each step rather than building factorials.

## Correctness

Choosing which move positions are down uniquely determines a path, and every valid path gives one such choice; choosing right positions instead gives the same count by symmetry. Let N=m+n-2 and k=min(m-1,n-1). After iteration i, paths equals C(N-k+i,i), because multiplying the previous coefficient by (N-k+i)/i is its exact binomial recurrence. Starting at C(N-k,0)=1 therefore produces C(N,k), the required count.

## Complexity

O(min(m,n)) time; O(1) auxiliary space and output. Each partial coefficient is at most the final answer, and its next numerator factor is at most 198. Thus multiplication before division stays below 2×10⁹×198, safely within long. Each division is exact.

## Edge cases

One row, one column, and a 1×1 grid all have one path and require no multiplication. Swapping the dimensions leaves the result unchanged.
