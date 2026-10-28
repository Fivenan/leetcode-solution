# 24. Swap Nodes in Pairs

[LeetCode problem](https://leetcode.com/problems/swap-nodes-in-pairs/)

## Problem

Swap each adjacent pair of list nodes, leaving a final unpaired node unchanged. Change links rather than node values.

## Example

[1,2,3,4] → [2,1,4,3]

## Approach

Use a dummy predecessor. For each pair a,b, reconnect predecessor→b→a→suffix, then advance the predecessor to a.

## Correctness

The rewiring reverses exactly the current pair while preserving its suffix. The processed prefix is correct and remains connected to the next unprocessed pair.

## Complexity

Time: O(n). Auxiliary space: O(1). Existing output nodes are reused.

## Edge cases

Empty lists, one node, and an odd number of nodes require no special rewiring.
