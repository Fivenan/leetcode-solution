# 95. Unique Binary Search Trees II

[Official LeetCode problem](https://leetcode.com/problems/unique-binary-search-trees-ii/)

## Problem

Return all structurally unique binary search trees containing values 1 through n exactly once; the judge uses 1 ≤ n ≤ 8 and inspects each tree by traversal.

## Example input/output

n=3 produces 5 trees; one has root 2 with left child 1 and right child 3.

## Approach

Memoize the forest for each value interval. Try each possible root and combine every left-interval tree with every right-interval tree, allocating one root per combination. Share memoized child subtrees through Rc handles.

## Correctness

Every BST has a unique root; its smaller and larger values must form the two corresponding interval BSTs. Induction on interval length shows all child choices are complete and unique, and distinct root/child combinations yield precisely all unique full trees.

## Complexity

Let Ck be the kth Catalan number and S=Σ(k=1..n)(n−k+1)Ck, the number of allocated nonempty subtree roots across all memoized intervals. Expected time is O(n³+S), memo/retained node space O(n²+S), recursion depth O(n), and the returned root vector has Cn handles. The logically expanded output has n·Cn nodes, but physically shared subtrees use S nodes before unused memo entries are dropped. Rc<forest> makes cached-forest retrieval O(1), without cloning its whole vector.

## Edge cases

n=1 gives one node; n=0 defensively returns no trees. Different returned roots can share child Rc nodes: mutating one shared subtree would affect another output. The judge only reads output trees; callers requiring mutation independence should deep-copy. Construction never holds a RefCell borrow across recursion.
