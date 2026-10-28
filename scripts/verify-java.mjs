#!/usr/bin/env node
/**
 * Compile the 100 independent LeetCode snippets with local judge node types,
 * then execute functional and edge/property assertions for every problem.
 * Requires JDK 21+ and Node.js; no packages, network, or repository artifacts.
 * Run: node scripts/verify-java.mjs
 */
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const cases = [
  [
    "0001",
    "eq(new S0001().twoSum(new int[]{2,7,11,15},9),new int[]{0,1}); eq(new S0001().twoSum(new int[]{3,3},6),new int[]{0,1});"
  ],
  [
    "0002",
    "eq(vals(new S0002().addTwoNumbers(list(2,4,3),list(5,6,4))),new int[]{7,0,8}); eq(vals(new S0002().addTwoNumbers(list(9,9),list(1))),new int[]{0,0,1});"
  ],
  [
    "0003",
    "check(new S0003().lengthOfLongestSubstring(\"abcabcbb\")==3); check(new S0003().lengthOfLongestSubstring(\"abba\")==2); check(new S0003().lengthOfLongestSubstring(\"\")==0);"
  ],
  [
    "0004",
    "check(new S0004().findMedianSortedArrays(new int[]{1,3},new int[]{2})==2);check(new S0004().findMedianSortedArrays(new int[]{},new int[]{1,2})==1.5);check(new S0004().findMedianSortedArrays(new int[]{Integer.MAX_VALUE},new int[]{Integer.MAX_VALUE})==Integer.MAX_VALUE);"
  ],
  [
    "0005",
    "String p5=new S0005().longestPalindrome(\"babad\");check(p5.equals(\"bab\")||p5.equals(\"aba\"));check(new S0005().longestPalindrome(\"cbbd\").equals(\"bb\"));check(new S0005().longestPalindrome(\"aaaa\").equals(\"aaaa\"));"
  ],
  [
    "0006",
    "check(new S0006().convert(\"PAYPALISHIRING\",3).equals(\"PAHNAPLSIIGYIR\"));check(new S0006().convert(\"AB\",1).equals(\"AB\"));"
  ],
  [
    "0007",
    "check(new S0007().reverse(-123)==-321);check(new S0007().reverse(1534236469)==0);check(new S0007().reverse(Integer.MIN_VALUE)==0);"
  ],
  [
    "0008",
    "check(new S0008().myAtoi(\"   -42\")==-42);check(new S0008().myAtoi(\"2147483648\")==Integer.MAX_VALUE);check(new S0008().myAtoi(\"-2147483648\")==Integer.MIN_VALUE);check(new S0008().myAtoi(\"+-12\")==0);"
  ],
  [
    "0009",
    "check(new S0009().isPalindrome(121));check(!new S0009().isPalindrome(10));check(new S0009().isPalindrome(0));check(new S0009().isPalindrome(1221));"
  ],
  [
    "0010",
    "check(new S0010().isMatch(\"aab\",\"c*a*b\"));check(!new S0010().isMatch(\"mississippi\",\"mis*is*p*.\"));check(new S0010().isMatch(\"\",\"a*\"));"
  ],
  [
    "0011",
    "check(new S0011().maxArea(new int[]{1,8,6,2,5,4,8,3,7})==49);check(new S0011().maxArea(new int[]{0,0})==0);"
  ],
  [
    "0012",
    "check(new S0012().intToRoman(1994).equals(\"MCMXCIV\"));check(new S0012().intToRoman(4).equals(\"IV\"));"
  ],
  [
    "0013",
    "check(new S0013().romanToInt(\"MCMXCIV\")==1994);for(int i=1;i<=3999;i++)check(new S0013().romanToInt(new S0012().intToRoman(i))==i);"
  ],
  [
    "0014",
    "check(new S0014().longestCommonPrefix(new String[]{\"flower\",\"flow\",\"flight\"}).equals(\"fl\"));check(new S0014().longestCommonPrefix(new String[]{\"\",\"a\"}).isEmpty());"
  ],
  [
    "0015",
    "check(new S0015().threeSum(new int[]{-1,0,1,2,-1,-4}).toString().equals(\"[[-1, -1, 2], [-1, 0, 1]]\"));check(new S0015().threeSum(new int[]{0,0,0,0}).size()==1);"
  ],
  [
    "0016",
    "check(new S0016().threeSumClosest(new int[]{-1,2,1,-4},1)==2);check(new S0016().threeSumClosest(new int[]{0,0,0},1)==0);"
  ],
  [
    "0017",
    "check(new S0017().letterCombinations(\"23\").size()==9);check(new S0017().letterCombinations(\"\").isEmpty());check(new S0017().letterCombinations(\"79\").size()==16);"
  ],
  [
    "0018",
    "check(new S0018().fourSum(new int[]{1,0,-1,0,-2,2},0).size()==3);check(new S0018().fourSum(new int[]{1000000000,1000000000,1000000000,1000000000},-294967296).isEmpty());"
  ],
  [
    "0019",
    "eq(vals(new S0019().removeNthFromEnd(list(1,2,3,4,5),2)),new int[]{1,2,3,5});check(new S0019().removeNthFromEnd(list(1),1)==null);"
  ],
  [
    "0020",
    "check(new S0020().isValid(\"()[]{}\"));check(!new S0020().isValid(\"([)]\"));check(!new S0020().isValid(\"(\"));"
  ],
  [
    "0021",
    "eq(vals(new S0021().mergeTwoLists(list(1,2,4),list(1,3,4))),new int[]{1,1,2,3,4,4});check(new S0021().mergeTwoLists(null,null)==null);"
  ],
  [
    "0022",
    "check(new S0022().generateParenthesis(3).size()==5);check(new S0022().generateParenthesis(1).equals(List.of(\"()\")));"
  ],
  [
    "0023",
    "eq(vals(new S0023().mergeKLists(new ListNode[]{list(1,4,5),list(1,3,4),list(2,6)})),new int[]{1,1,2,3,4,4,5,6});check(new S0023().mergeKLists(new ListNode[0])==null);"
  ],
  [
    "0024",
    "eq(vals(new S0024().swapPairs(list(1,2,3,4))),new int[]{2,1,4,3});eq(vals(new S0024().swapPairs(list(1,2,3))),new int[]{2,1,3});"
  ],
  [
    "0025",
    "eq(vals(new S0025().reverseKGroup(list(1,2,3,4,5),2)),new int[]{2,1,4,3,5});eq(vals(new S0025().reverseKGroup(list(1,2,3,4,5),3)),new int[]{3,2,1,4,5});"
  ],
  [
    "0026",
    "int[] a26={1,1,2};check(new S0026().removeDuplicates(a26)==2);eq(Arrays.copyOf(a26,2),new int[]{1,2});"
  ],
  [
    "0027",
    "int[] a27={3,2,2,3};check(new S0027().removeElement(a27,3)==2);eq(Arrays.copyOf(a27,2),new int[]{2,2});check(new S0027().removeElement(new int[0],0)==0);"
  ],
  [
    "0028",
    "check(new S0028().strStr(\"sadbutsad\",\"sad\")==0);check(new S0028().strStr(\"aaaaab\",\"aaab\")==2);check(new S0028().strStr(\"abc\",\"d\")==-1);"
  ],
  [
    "0029",
    "check(new S0029().divide(10,3)==3);check(new S0029().divide(7,-3)==-2);check(new S0029().divide(Integer.MIN_VALUE,-1)==Integer.MAX_VALUE);check(new S0029().divide(Integer.MIN_VALUE,1)==Integer.MIN_VALUE);"
  ],
  [
    "0030",
    "check(new HashSet<>(new S0030().findSubstring(\"barfoothefoobarman\",new String[]{\"foo\",\"bar\"})).equals(Set.of(0,9)));check(new S0030().findSubstring(\"wordgoodgoodgoodbestword\",new String[]{\"word\",\"good\",\"best\",\"good\"}).equals(List.of(8)));"
  ],
  [
    "0031",
    "int[] a31={1,2,3};new S0031().nextPermutation(a31);eq(a31,new int[]{1,3,2});int[] b31={3,2,1};new S0031().nextPermutation(b31);eq(b31,new int[]{1,2,3});"
  ],
  [
    "0032",
    "check(new S0032().longestValidParentheses(\")()())\")==4);check(new S0032().longestValidParentheses(\"()(())\")==6);check(new S0032().longestValidParentheses(\"\")==0);"
  ],
  [
    "0033",
    "check(new S0033().search(new int[]{4,5,6,7,0,1,2},0)==4);check(new S0033().search(new int[]{1},0)==-1);"
  ],
  [
    "0034",
    "eq(new S0034().searchRange(new int[]{5,7,7,8,8,10},8),new int[]{3,4});eq(new S0034().searchRange(new int[0],0),new int[]{-1,-1});"
  ],
  [
    "0035",
    "check(new S0035().searchInsert(new int[]{1,3,5,6},2)==1);check(new S0035().searchInsert(new int[]{1,3,5,6},7)==4);"
  ],
  [
    "0036",
    "char[][] b36=board(\"53..7....\",\"6..195...\",\".98....6.\",\"8...6...3\",\"4..8.3..1\",\"7...2...6\",\".6....28.\",\"...419..5\",\"....8..79\");check(new S0036().isValidSudoku(b36));b36[0][1]='5';check(!new S0036().isValidSudoku(b36));"
  ],
  [
    "0037",
    "char[][] b37=board(\"53..7....\",\"6..195...\",\".98....6.\",\"8...6...3\",\"4..8.3..1\",\"7...2...6\",\".6....28.\",\"...419..5\",\"....8..79\");new S0037().solveSudoku(b37);check(new String(b37[0]).equals(\"534678912\"));check(new S0036().isValidSudoku(b37));for(char[] row:b37)for(char c:row)check(c!='.');new S0037().solveSudoku(b37);check(new String(b37[8]).equals(\"345286179\"));"
  ],
  [
    "0038",
    "check(new S0038().countAndSay(4).equals(\"1211\"));check(new S0038().countAndSay(1).equals(\"1\"));"
  ],
  [
    "0039",
    "check(new S0039().combinationSum(new int[]{2,3,6,7},7).toString().equals(\"[[2, 2, 3], [7]]\"));check(new S0039().combinationSum(new int[]{2},1).isEmpty());"
  ],
  [
    "0040",
    "check(new S0040().combinationSum2(new int[]{10,1,2,7,6,1,5},8).size()==4);check(new S0040().combinationSum2(new int[]{1,1},2).equals(List.of(List.of(1,1))));"
  ],
  [
    "0041",
    "check(new S0041().firstMissingPositive(new int[]{3,4,-1,1})==2);check(new S0041().firstMissingPositive(new int[]{1,1})==2);check(new S0041().firstMissingPositive(new int[]{1,2,3})==4);"
  ],
  [
    "0042",
    "check(new S0042().trap(new int[]{0,1,0,2,1,0,1,3,2,1,2,1})==6);check(new S0042().trap(new int[]{4,2,0,3,2,5})==9);"
  ],
  [
    "0043",
    "check(new S0043().multiply(\"123\",\"456\").equals(\"56088\"));check(new S0043().multiply(\"0\",\"999\").equals(\"0\"));check(new S0043().multiply(\"99\",\"99\").equals(\"9801\"));"
  ],
  [
    "0044",
    "check(new S0044().isMatch(\"adceb\",\"*a*b\"));check(!new S0044().isMatch(\"acdcb\",\"a*c?b\"));check(new S0044().isMatch(\"\",\"***\"));"
  ],
  [
    "0045",
    "check(new S0045().jump(new int[]{2,3,1,1,4})==2);check(new S0045().jump(new int[]{0})==0);"
  ],
  [
    "0046",
    "int[] a46={1,2,3};check(new S0046().permute(a46).size()==6);eq(a46,new int[]{1,2,3});"
  ],
  [
    "0047",
    "check(new S0047().permuteUnique(new int[]{1,1,2}).size()==3);check(new S0047().permuteUnique(new int[]{2,2,2}).size()==1);"
  ],
  [
    "0048",
    "int[][] a48={{1,2,3},{4,5,6},{7,8,9}};new S0048().rotate(a48);matrix(a48,new int[][]{{7,4,1},{8,5,2},{9,6,3}});for(int i=0;i<3;i++)new S0048().rotate(a48);matrix(a48,new int[][]{{1,2,3},{4,5,6},{7,8,9}});"
  ],
  [
    "0049",
    "List<List<String>> g49=new S0049().groupAnagrams(new String[]{\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"});check(g49.size()==3);check(g49.stream().anyMatch(g->new HashSet<>(g).equals(Set.of(\"eat\",\"tea\",\"ate\"))));check(new S0049().groupAnagrams(new String[]{\"\",\"\"}).get(0).size()==2);"
  ],
  [
    "0050",
    "check(new S0050().myPow(2,-2)==0.25);check(new S0050().myPow(1,Integer.MIN_VALUE)==1);check(new S0050().myPow(-2,3)==-8);"
  ],
  [
    "0051",
    "check(new S0051().solveNQueens(4).size()==2);check(new S0051().solveNQueens(2).isEmpty());check(new S0051().solveNQueens(1).equals(List.of(List.of(\"Q\"))));"
  ],
  [
    "0052",
    "check(new S0052().totalNQueens(4)==2);check(new S0052().totalNQueens(8)==92);check(new S0052().totalNQueens(1)==1);"
  ],
  [
    "0053",
    "check(new S0053().maxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4})==6);check(new S0053().maxSubArray(new int[]{-3,-1,-2})==-1);"
  ],
  [
    "0054",
    "check(new S0054().spiralOrder(new int[][]{{1,2,3},{4,5,6},{7,8,9}}).equals(List.of(1,2,3,6,9,8,7,4,5)));check(new S0054().spiralOrder(new int[][]{{1},{2}}).equals(List.of(1,2)));"
  ],
  [
    "0055",
    "check(new S0055().canJump(new int[]{2,3,1,1,4}));check(!new S0055().canJump(new int[]{3,2,1,0,4}));check(new S0055().canJump(new int[]{0}));"
  ],
  [
    "0056",
    "matrix(new S0056().merge(new int[][]{{1,3},{2,6},{8,10},{15,18}}),new int[][]{{1,6},{8,10},{15,18}});matrix(new S0056().merge(new int[][]{{1,4},{4,5}}),new int[][]{{1,5}});"
  ],
  [
    "0057",
    "matrix(new S0057().insert(new int[][]{{1,3},{6,9}},new int[]{2,5}),new int[][]{{1,5},{6,9}});matrix(new S0057().insert(new int[0][],new int[]{1,2}),new int[][]{{1,2}});"
  ],
  [
    "0058",
    "check(new S0058().lengthOfLastWord(\"Hello World\")==5);check(new S0058().lengthOfLastWord(\"   fly me   to   the moon  \")==4);"
  ],
  [
    "0059",
    "matrix(new S0059().generateMatrix(3),new int[][]{{1,2,3},{8,9,4},{7,6,5}});matrix(new S0059().generateMatrix(1),new int[][]{{1}});"
  ],
  [
    "0060",
    "check(new S0060().getPermutation(3,3).equals(\"213\"));check(new S0060().getPermutation(3,6).equals(\"321\"));check(new S0060().getPermutation(1,1).equals(\"1\"));"
  ],
  [
    "0061",
    "eq(vals(new S0061().rotateRight(list(1,2,3,4,5),2)),new int[]{4,5,1,2,3});eq(vals(new S0061().rotateRight(list(0,1,2),4)),new int[]{2,0,1});check(new S0061().rotateRight(null,10)==null);"
  ],
  [
    "0062",
    "check(new S0062().uniquePaths(3,7)==28);check(new S0062().uniquePaths(1,10)==1);check(new S0062().uniquePaths(1,1)==1);for(int m=1;m<=15;m++)for(int n=1;n<=15;n++){int[] dp=new int[n];Arrays.fill(dp,1);for(int r=1;r<m;r++)for(int c=1;c<n;c++)dp[c]+=dp[c-1];check(new S0062().uniquePaths(m,n)==dp[n-1]);}check(new S0062().uniquePaths(100,2)==100);check(new S0062().uniquePaths(2,100)==100);"
  ],
  [
    "0063",
    "check(new S0063().uniquePathsWithObstacles(new int[][]{{0,0,0},{0,1,0},{0,0,0}})==2);check(new S0063().uniquePathsWithObstacles(new int[][]{{1}})==0);"
  ],
  [
    "0064",
    "check(new S0064().minPathSum(new int[][]{{1,3,1},{1,5,1},{4,2,1}})==7);check(new S0064().minPathSum(new int[][]{{0}})==0);"
  ],
  [
    "0065",
    "check(new S0065().isNumber(\"-90E3\"));check(new S0065().isNumber(\".1\"));check(new S0065().isNumber(\"3.\"));check(!new S0065().isNumber(\"99e2.5\"));check(!new S0065().isNumber(\"1e+\"));"
  ],
  [
    "0066",
    "eq(new S0066().plusOne(new int[]{1,2,3}),new int[]{1,2,4});eq(new S0066().plusOne(new int[]{9,9}),new int[]{1,0,0});"
  ],
  [
    "0067",
    "check(new S0067().addBinary(\"1010\",\"1011\").equals(\"10101\"));check(new S0067().addBinary(\"0\",\"0\").equals(\"0\"));"
  ],
  [
    "0068",
    "check(new S0068().fullJustify(new String[]{\"This\",\"is\",\"an\",\"example\",\"of\",\"text\",\"justification.\"},16).equals(List.of(\"This    is    an\",\"example  of text\",\"justification.  \")));check(new S0068().fullJustify(new String[]{\"a\"},3).equals(List.of(\"a  \")));"
  ],
  [
    "0069",
    "check(new S0069().mySqrt(8)==2);check(new S0069().mySqrt(0)==0);check(new S0069().mySqrt(Integer.MAX_VALUE)==46340);"
  ],
  [
    "0070",
    "check(new S0070().climbStairs(3)==3);check(new S0070().climbStairs(1)==1);check(new S0070().climbStairs(45)==1836311903);long prev=1,current=1;for(int n=1;n<=45;n++){check(new S0070().climbStairs(n)==current);long next=prev+current;prev=current;current=next;}"
  ],
  [
    "0071",
    "check(new S0071().simplifyPath(\"/a/./b/../../c/\").equals(\"/c\"));check(new S0071().simplifyPath(\"/../../...//\").equals(\"/...\"));"
  ],
  [
    "0072",
    "check(new S0072().minDistance(\"horse\",\"ros\")==3);check(new S0072().minDistance(\"\",\"abc\")==3);check(new S0072().minDistance(\"same\",\"same\")==0);"
  ],
  [
    "0073",
    "int[][] a73={{1,1,1},{1,0,1},{1,1,1}};new S0073().setZeroes(a73);matrix(a73,new int[][]{{1,0,1},{0,0,0},{1,0,1}});int[][] b73={{0,1}};new S0073().setZeroes(b73);matrix(b73,new int[][]{{0,0}});"
  ],
  [
    "0074",
    "check(new S0074().searchMatrix(new int[][]{{1,3,5,7},{10,11,16,20},{23,30,34,60}},3));check(!new S0074().searchMatrix(new int[][]{{1},{3}},2));"
  ],
  [
    "0075",
    "int[] a75={2,0,2,1,1,0};new S0075().sortColors(a75);eq(a75,new int[]{0,0,1,1,2,2});"
  ],
  [
    "0076",
    "check(new S0076().minWindow(\"ADOBECODEBANC\",\"ABC\").equals(\"BANC\"));check(new S0076().minWindow(\"a\",\"aa\").isEmpty());check(new S0076().minWindow(\"AAABBC\",\"AABC\").equals(\"AABBC\"));"
  ],
  [
    "0077",
    "check(new S0077().combine(4,2).size()==6);check(new S0077().combine(3,3).equals(List.of(List.of(1,2,3))));"
  ],
  [
    "0078",
    "check(new S0078().subsets(new int[]{1,2,3}).size()==8);check(new S0078().subsets(new int[]{0}).contains(List.of()));"
  ],
  [
    "0079",
    "char[][] b79=board(\"ABCE\",\"SFCS\",\"ADEE\");check(new S0079().exist(b79,\"ABCCED\"));check(!new S0079().exist(b79,\"ABCB\"));check(new String(b79[0]).equals(\"ABCE\"));"
  ],
  [
    "0080",
    "int[] a80={1,1,1,2,2,3};check(new S0080().removeDuplicates(a80)==5);eq(Arrays.copyOf(a80,5),new int[]{1,1,2,2,3});check(new S0080().removeDuplicates(new int[]{1})==1);"
  ],
  [
    "0081",
    "check(new S0081().search(new int[]{2,5,6,0,0,1,2},0));check(!new S0081().search(new int[]{1,1,1,1},2));check(new S0081().search(new int[]{1,0,1,1,1},0));"
  ],
  [
    "0082",
    "eq(vals(new S0082().deleteDuplicates(list(1,2,3,3,4,4,5))),new int[]{1,2,5});check(new S0082().deleteDuplicates(list(1,1,1))==null);"
  ],
  [
    "0083",
    "eq(vals(new S0083().deleteDuplicates(list(1,1,2,3,3))),new int[]{1,2,3});check(new S0083().deleteDuplicates(null)==null);"
  ],
  [
    "0084",
    "check(new S0084().largestRectangleArea(new int[]{2,1,5,6,2,3})==10);check(new S0084().largestRectangleArea(new int[]{2,2,2})==6);check(new S0084().largestRectangleArea(new int[]{0})==0);"
  ],
  [
    "0085",
    "check(new S0085().maximalRectangle(board(\"10100\",\"10111\",\"11111\",\"10010\"))==6);check(new S0085().maximalRectangle(board(\"00\",\"00\"))==0);check(new S0085().maximalRectangle(board(\"11\",\"11\"))==4);"
  ],
  [
    "0086",
    "eq(vals(new S0086().partition(list(1,4,3,2,5,2),3)),new int[]{1,2,2,4,3,5});eq(vals(new S0086().partition(list(3,4),3)),new int[]{3,4});"
  ],
  [
    "0087",
    "check(new S0087().isScramble(\"great\",\"rgeat\"));check(!new S0087().isScramble(\"abcde\",\"caebd\"));check(new S0087().isScramble(\"a\",\"a\"));"
  ],
  [
    "0088",
    "int[] a88={1,2,3,0,0,0};new S0088().merge(a88,3,new int[]{2,5,6},3);eq(a88,new int[]{1,2,2,3,5,6});int[] b88={0};new S0088().merge(b88,0,new int[]{1},1);eq(b88,new int[]{1});"
  ],
  [
    "0089",
    "check(new S0089().grayCode(2).equals(List.of(0,1,3,2)));List<Integer> g89=new S0089().grayCode(8);check(new HashSet<>(g89).size()==256);for(int i=0;i<256;i++)check(Integer.bitCount(g89.get(i)^g89.get((i+1)%256))==1);"
  ],
  [
    "0090",
    "check(new S0090().subsetsWithDup(new int[]{1,2,2}).size()==6);check(new S0090().subsetsWithDup(new int[]{2,2,2}).size()==4);"
  ],
  [
    "0091",
    "check(new S0091().numDecodings(\"226\")==3);check(new S0091().numDecodings(\"06\")==0);check(new S0091().numDecodings(\"100\")==0);check(new S0091().numDecodings(\"2101\")==1);check(new S0091().numDecodings(\"1\".repeat(98)+\"00\")==0);"
  ],
  [
    "0092",
    "eq(vals(new S0092().reverseBetween(list(1,2,3,4,5),2,4)),new int[]{1,4,3,2,5});eq(vals(new S0092().reverseBetween(list(1,2),1,2)),new int[]{2,1});"
  ],
  [
    "0093",
    "check(new S0093().restoreIpAddresses(\"25525511135\").equals(List.of(\"255.255.11.135\",\"255.255.111.35\")));check(new S0093().restoreIpAddresses(\"0000\").equals(List.of(\"0.0.0.0\")));check(new S0093().restoreIpAddresses(\"1111111111111\").isEmpty());"
  ],
  [
    "0094",
    "check(new S0094().inorderTraversal(new TreeNode(1,null,new TreeNode(2,new TreeNode(3),null))).equals(List.of(1,3,2)));check(new S0094().inorderTraversal(null).isEmpty());"
  ],
  [
    "0095",
    "List<TreeNode> t95=new S0095().generateTrees(3);check(t95.size()==5);Set<TreeNode> identities=Collections.newSetFromMap(new IdentityHashMap<>());for(TreeNode t:t95){check(new S0094().inorderTraversal(t).equals(List.of(1,2,3)));uniqueNodes(t,identities);}check(new S0095().generateTrees(1).size()==1);check(new S0095().generateTrees(8).size()==1430);"
  ],
  [
    "0096",
    "check(new S0096().numTrees(3)==5);check(new S0096().numTrees(19)==1767263190);for(int n=1;n<=5;n++)check(new S0096().numTrees(n)==new S0095().generateTrees(n).size());long[] dp=new long[20];dp[0]=1;for(int n=1;n<=19;n++){for(int left=0;left<n;left++)dp[n]+=dp[left]*dp[n-1-left];check(new S0096().numTrees(n)==dp[n]);}"
  ],
  [
    "0097",
    "check(new S0097().isInterleave(\"aabcc\",\"dbbca\",\"aadbbcbcac\"));check(!new S0097().isInterleave(\"aabcc\",\"dbbca\",\"aadbbbaccc\"));check(new S0097().isInterleave(\"\",\"\",\"\"));"
  ],
  [
    "0098",
    "check(new S0098().isValidBST(new TreeNode(2,new TreeNode(1),new TreeNode(3))));check(!new S0098().isValidBST(new TreeNode(5,new TreeNode(1),new TreeNode(4,new TreeNode(3),new TreeNode(6)))));check(new S0098().isValidBST(new TreeNode(Integer.MIN_VALUE)));"
  ],
  [
    "0099",
    "TreeNode t99=new TreeNode(3,new TreeNode(1),new TreeNode(4,new TreeNode(2),null));new S0099().recoverTree(t99);check(new S0098().isValidBST(t99));check(new S0094().inorderTraversal(t99).equals(List.of(1,2,3,4)));TreeNode u99=new TreeNode(2,new TreeNode(3),new TreeNode(1));new S0099().recoverTree(u99);check(new S0098().isValidBST(u99));"
  ],
  [
    "0100",
    "check(new S0100().isSameTree(new TreeNode(1,new TreeNode(2),new TreeNode(3)),new TreeNode(1,new TreeNode(2),new TreeNode(3))));check(!new S0100().isSameTree(new TreeNode(1,new TreeNode(2),null),new TreeNode(1,null,new TreeNode(2))));check(new S0100().isSameTree(null,null));"
  ]
];
const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'leetcode-java-'));
function run(command, args) {
  const result = spawnSync(command, args, { cwd: dir, encoding: 'utf8', timeout: 120_000, maxBuffer: 8 * 1024 * 1024 });
  if (result.error) throw result.error;
  if (result.status !== 0) throw new Error(command + ' failed: code ' + result.status + '\n' + result.stdout + result.stderr);
  return result.stdout.trim();
}
try {
  const declarations = cases.map(([id]) => {
    const source = fs.readFileSync(path.join(root, 'java', id + '.java'), 'utf8');
    if (!/class\s+Solution\b/.test(source)) throw new Error(id + ': missing Solution class');
    return source.replace(/^import[^;]+;\s*/gm, '').replace(/\bSolution\b/g, 'S' + id);
  }).join('\n');
  const calls = cases.map(([id]) => 'test' + id + '();').join('\n');
  const methods = cases.map(([id, body]) => 'static void test' + id + '() {\ntry {\n' + body + '\npassed++;\n} catch(Throwable e) {throw new AssertionError("Problem ' + id + ' failed", e);}}').join('\n');
  const harness = `import java.util.*;
class ListNode {
    int val; ListNode next;
    ListNode(int val) { this.val=val; }
    ListNode(int val,ListNode next) { this.val=val; this.next=next; }
}
class TreeNode {
    int val; TreeNode left,right;
    TreeNode(int val) { this.val=val; }
    TreeNode(int val,TreeNode left,TreeNode right) { this.val=val; this.left=left; this.right=right; }
}
public class Judge {
    static int passed=0,assertions=0;
    static void check(boolean ok) { assertions++; if(!ok)throw new AssertionError("Assertion " + assertions); }
    static void eq(int[] actual,int[] expected) { check(Arrays.equals(actual,expected)); }
    static void matrix(int[][] actual,int[][] expected) { check(Arrays.deepEquals(actual,expected)); }
    static char[][] board(String... rows) { char[][] b=new char[rows.length][]; for(int i=0;i<rows.length;i++)b[i]=rows[i].toCharArray();return b; }
    static ListNode list(int... a) { ListNode d=new ListNode(0),t=d;for(int v:a){t.next=new ListNode(v);t=t.next;}return d.next; }
    static int[] vals(ListNode p) { List<Integer> a=new ArrayList<>();Set<ListNode> seen=Collections.newSetFromMap(new IdentityHashMap<>());while(p!=null){check(seen.add(p));a.add(p.val);p=p.next;}return a.stream().mapToInt(Integer::intValue).toArray(); }
    static void uniqueNodes(TreeNode t,Set<TreeNode> seen) { if(t==null)return;check(seen.add(t));uniqueNodes(t.left,seen);uniqueNodes(t.right,seen); }
    public static void main(String[] args) {
        ${calls}
        if(passed!=100)throw new AssertionError("Missing problem group");
        System.out.println("Java: 100/100 snippets compiled; "+passed+"/100 functional test groups passed; "+assertions+" assertions passed.");
    }
    ${methods}
}
${declarations}
`;
  fs.writeFileSync(path.join(dir, 'Judge.java'), harness);
  run('javac', ['-encoding', 'UTF-8', '-d', dir, 'Judge.java']);
  console.log(run('java', ['-cp', dir, 'Judge']));
} finally {
  const resolved = path.resolve(dir);
  if (path.dirname(resolved) !== path.resolve(os.tmpdir()) || !path.basename(resolved).startsWith('leetcode-java-')) {
    throw new Error('Refusing cleanup outside the dedicated OS temporary directory');
  }
  fs.rmSync(resolved, { recursive: true, force: true });
}
