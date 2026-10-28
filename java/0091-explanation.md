# 91. Decode Ways

[Official problem](https://leetcode.com/problems/decode-ways/)

## Problem

Count decodings of a nonempty digit string under 1→A through 26→Z. Zero cannot decode alone; leading zeros in a code are forbidden. The final answer fits int.

## Example input/output

s = "226" → 3

## Approach

Keep counts for the previous two prefix lengths. Add the previous count for a nonzero current digit and the two-back count for a final pair in 10..26.

## Correctness

Any decoding ends with either a one-digit code or a two-digit code. These distinct cases are legal exactly under the checked conditions and reduce to already counted prefixes. Saturation is safe under the final-answer bound: if a prefix has more than the cap decodings, any common valid suffix would extend each to a different full decoding, violating the bound. Such an oversized state therefore cannot contribute to the final answer.

## Complexity

O(n) time; O(1) auxiliary space and output. Counts saturate at Integer.MAX_VALUE using long for each addition, so even a large prefix followed by an invalid suffix cannot overflow.

## Edge cases

Leading zero, isolated zero, valid 10/20, invalid 30, and multiple valid pairings.
