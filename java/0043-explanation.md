# 43. Multiply Strings

[Official problem](https://leetcode.com/problems/multiply-strings/)

## Problem

Multiply two nonnegative decimal integer strings without parsing either entire input as a number or using arbitrary-precision arithmetic. Inputs have no leading zeros except "0".

## Example input/output

num1 = "123", num2 = "456" → "56088"

## Approach

Use grade-school digit products in an m+n digit array. Add each product to its positional cell, normalizing that cell and carrying left.

## Correctness

Each digit pair contributes its product at exactly the correct decimal place. Propagating carries preserves numeric value; processing right to left leaves every lower position normalized. Removing leading zeros preserves the represented product.

## Complexity

O(mn) time; O(m+n) auxiliary space and O(m+n) output.

## Edge cases

Zero, products adding a leading carry, and unequal operand lengths.
