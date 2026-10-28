// Wrap each intentionally standalone answer in its own package, then test all packages.
// Requires Node.js and Go 1.23+. No downloads, repository module, or external packages.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const tests={
  "0001": "eq(t,twoSum([]int{2,7,11,15},9),[]int{0,1}); eq(t,twoSum([]int{3,3},6),[]int{0,1})",
  "0002": "eq(t,V(addTwoNumbers(L(2,4,3),L(5,6,4))),[]int{7,0,8}); eq(t,V(addTwoNumbers(L(9,9),L(1))),[]int{0,0,1})",
  "0003": "eq(t,lengthOfLongestSubstring(\"abcabcbb\"),3); eq(t,lengthOfLongestSubstring(\"abba\"),2); eq(t,lengthOfLongestSubstring(\"\"),0)",
  "0004": "eq(t,findMedianSortedArrays([]int{1,3},[]int{2}),2.0); eq(t,findMedianSortedArrays(nil,[]int{2,3}),2.5); eq(t,findMedianSortedArrays([]int{1,2},[]int{3,4}),2.5)",
  "0005": "eq(t,longestPalindrome(\"cbbd\"),\"bb\"); eq(t,longestPalindrome(\"aaaa\"),\"aaaa\"); eq(t,longestPalindrome(\"\"),\"\")",
  "0006": "eq(t,convert(\"PAYPALISHIRING\",3),\"PAHNAPLSIIGYIR\"); eq(t,convert(\"AB\",1),\"AB\")",
  "0007": "eq(t,reverse(123),321); eq(t,reverse(-120),-21); eq(t,reverse(1534236469),0); eq(t,reverse(-2147483412),-2143847412)",
  "0008": "eq(t,myAtoi(\"   -42\"),-42);eq(t,myAtoi(\"4193 with words\"),4193);eq(t,myAtoi(\"-91283472332\"),-2147483648);eq(t,myAtoi(\"+-12\"),0)",
  "0009": "eq(t,isPalindrome(121),true);eq(t,isPalindrome(10),false);eq(t,isPalindrome(0),true);eq(t,isPalindrome(1221),true)",
  "0010": "eq(t,isMatch(\"aab\",\"c*a*b\"),true);eq(t,isMatch(\"mississippi\",\"mis*is*p*.\"),false);eq(t,isMatch(\"\",\"a*b*\"),true)",
  "0011": "eq(t,maxArea([]int{1,8,6,2,5,4,8,3,7}),49);eq(t,maxArea([]int{1,1}),1)",
  "0012": "eq(t,intToRoman(1994),\"MCMXCIV\");eq(t,intToRoman(4),\"IV\");eq(t,intToRoman(3999),\"MMMCMXCIX\")",
  "0013": "eq(t,romanToInt(\"MCMXCIV\"),1994);eq(t,romanToInt(\"III\"),3);eq(t,romanToInt(\"XL\"),40)",
  "0014": "eq(t,longestCommonPrefix([]string{\"flower\",\"flow\",\"flight\"}),\"fl\");eq(t,longestCommonPrefix([]string{\"\",\"abc\"}),\"\")",
  "0015": "eq(t,threeSum([]int{-1,0,1,2,-1,-4}),[][]int{{-1,-1,2},{-1,0,1}});eq(t,threeSum([]int{0,0,0,0}),[][]int{{0,0,0}})",
  "0016": "eq(t,threeSumClosest([]int{-1,2,1,-4},1),2);eq(t,threeSumClosest([]int{0,0,0},1),0)",
  "0017": "eq(t,letterCombinations(\"23\"),[]string{\"ad\",\"ae\",\"af\",\"bd\",\"be\",\"bf\",\"cd\",\"ce\",\"cf\"});eq(t,len(letterCombinations(\"\")),0);eq(t,len(letterCombinations(\"79\")),16)",
  "0018": "eq(t,fourSum([]int{1,0,-1,0,-2,2},0),[][]int{{-2,-1,1,2},{-2,0,0,2},{-1,0,0,1}});eq(t,len(fourSum([]int{1000000000,1000000000,1000000000,1000000000},-294967296)),0)",
  "0019": "eq(t,V(removeNthFromEnd(L(1,2,3,4,5),2)),[]int{1,2,3,5});eq(t,V(removeNthFromEnd(L(1),1)),[]int{})",
  "0020": "eq(t,isValid(\"([])\"),true);eq(t,isValid(\"([)]\"),false);eq(t,isValid(\"]\"),false);eq(t,isValid(\"\"),true)",
  "0021": "eq(t,V(mergeTwoLists(L(1,2,4),L(1,3,4))),[]int{1,1,2,3,4,4});eq(t,V(mergeTwoLists(nil,nil)),[]int{})",
  "0022": "eq(t,generateParenthesis(3),[]string{\"((()))\",\"(()())\",\"(())()\",\"()(())\",\"()()()\"});eq(t,generateParenthesis(1),[]string{\"()\"})",
  "0023": "eq(t,V(mergeKLists([]*ListNode{L(1,4,5),L(1,3,4),L(2,6)})),[]int{1,1,2,3,4,4,5,6});eq(t,V(mergeKLists(nil)),[]int{})",
  "0024": "eq(t,V(swapPairs(L(1,2,3,4))),[]int{2,1,4,3});eq(t,V(swapPairs(L(1,2,3))),[]int{2,1,3})",
  "0025": "eq(t,V(reverseKGroup(L(1,2,3,4,5),2)),[]int{2,1,4,3,5});eq(t,V(reverseKGroup(L(1,2,3,4,5),3)),[]int{3,2,1,4,5});eq(t,V(reverseKGroup(L(1),1)),[]int{1})",
  "0026": "a:=[]int{1,1,2};k:=removeDuplicates(a);eq(t,k,2);eq(t,a[:k],[]int{1,2});eq(t,removeDuplicates(nil),0)",
  "0027": "a:=[]int{3,2,2,3};k:=removeElement(a,3);eq(t,a[:k],[]int{2,2});eq(t,removeElement([]int{1,1},1),0)",
  "0028": "eq(t,strStr(\"sadbutsad\",\"sad\"),0);eq(t,strStr(\"aaaab\",\"aab\"),2);eq(t,strStr(\"leetcode\",\"leeto\"),-1);eq(t,strStr(\"\",\"\"),0)",
  "0029": "eq(t,divide(10,3),3);eq(t,divide(7,-3),-2);eq(t,divide(-2147483648,-1),2147483647);eq(t,divide(-2147483648,1),-2147483648)",
  "0030": "eq(t,findSubstring(\"barfoothefoobarman\",[]string{\"foo\",\"bar\"}),[]int{0,9});eq(t,findSubstring(\"wordgoodgoodgoodbestword\",[]string{\"word\",\"good\",\"best\",\"good\"}),[]int{8});eq(t,findSubstring(\"aaaaaa\",[]string{\"aa\",\"aa\"}),[]int{0,2,1})",
  "0031": "a:=[]int{1,2,3};nextPermutation(a);eq(t,a,[]int{1,3,2});b:=[]int{3,2,1};nextPermutation(b);eq(t,b,[]int{1,2,3});c:=[]int{1,5,1};nextPermutation(c);eq(t,c,[]int{5,1,1})",
  "0032": "eq(t,longestValidParentheses(\")()())\"),4);eq(t,longestValidParentheses(\"(()\"),2);eq(t,longestValidParentheses(\"\"),0)",
  "0033": "eq(t,search([]int{4,5,6,7,0,1,2},0),4);eq(t,search([]int{4,5,6,7,0,1,2},3),-1);eq(t,search([]int{1},0),-1)",
  "0034": "eq(t,searchRange([]int{5,7,7,8,8,10},8),[]int{3,4});eq(t,searchRange(nil,0),[]int{-1,-1});eq(t,searchRange([]int{2,2},2),[]int{0,1})",
  "0035": "eq(t,searchInsert([]int{1,3,5,6},2),1);eq(t,searchInsert([]int{1,3,5,6},7),4);eq(t,searchInsert([]int{1,3,5,6},5),2)",
  "0036": "b:=B([]string{\"53..7....\",\"6..195...\",\".98....6.\",\"8...6...3\",\"4..8.3..1\",\"7...2...6\",\".6....28.\",\"...419..5\",\"....8..79\"});eq(t,isValidSudoku(b),true);b[0][1]='5';eq(t,isValidSudoku(b),false)",
  "0037": "b:=B([]string{\"53..7....\",\"6..195...\",\".98....6.\",\"8...6...3\",\"4..8.3..1\",\"7...2...6\",\".6....28.\",\"...419..5\",\"....8..79\"});solveSudoku(b);eq(t,b,B([]string{\"534678912\",\"672195348\",\"198342567\",\"859761423\",\"426853791\",\"713924856\",\"961537284\",\"287419635\",\"345286179\"}))",
  "0038": "eq(t,countAndSay(1),\"1\");eq(t,countAndSay(4),\"1211\");eq(t,countAndSay(5),\"111221\")",
  "0039": "eq(t,combinationSum([]int{2,3,6,7},7),[][]int{{2,2,3},{7}});eq(t,len(combinationSum([]int{2},1)),0)",
  "0040": "eq(t,combinationSum2([]int{10,1,2,7,6,1,5},8),[][]int{{1,1,6},{1,2,5},{1,7},{2,6}});eq(t,combinationSum2([]int{2,5,2,1,2},5),[][]int{{1,2,2},{5}})",
  "0041": "eq(t,firstMissingPositive([]int{3,4,-1,1}),2);eq(t,firstMissingPositive([]int{1,1}),2);eq(t,firstMissingPositive([]int{1,2,3}),4);eq(t,firstMissingPositive([]int{7,8,9,11,12}),1)",
  "0042": "eq(t,trap([]int{0,1,0,2,1,0,1,3,2,1,2,1}),6);eq(t,trap([]int{4,2,0,3,2,5}),9);eq(t,trap(nil),0)",
  "0043": "eq(t,multiply(\"123\",\"456\"),\"56088\");eq(t,multiply(\"0\",\"999\"),\"0\");eq(t,multiply(\"99\",\"99\"),\"9801\")",
  "0044": "eq(t,isMatch(\"adceb\",\"*a*b\"),true);eq(t,isMatch(\"acdcb\",\"a*c?b\"),false);eq(t,isMatch(\"\",\"***\"),true);eq(t,isMatch(\"a\",\"\"),false)",
  "0045": "eq(t,jump([]int{2,3,1,1,4}),2);eq(t,jump([]int{2,3,0,1,4}),2);eq(t,jump([]int{0}),0)",
  "0046": "eq(t,permute([]int{1,2}),[][]int{{1,2},{2,1}});a:=[]int{1,2,3};eq(t,len(permute(a)),6);eq(t,a,[]int{1,2,3})",
  "0047": "eq(t,permuteUnique([]int{1,1,2}),[][]int{{1,1,2},{1,2,1},{2,1,1}});eq(t,permuteUnique([]int{2,2}),[][]int{{2,2}})",
  "0048": "a:=[][]int{{1,2},{3,4}};rotate(a);eq(t,a,[][]int{{3,1},{4,2}});b:=[][]int{{1}};rotate(b);eq(t,b,[][]int{{1}})",
  "0049": "eq(t,groupAnagrams([]string{\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"}),[][]string{{\"eat\",\"tea\",\"ate\"},{\"tan\",\"nat\"},{\"bat\"}});eq(t,groupAnagrams([]string{\"\",\"\"}),[][]string{{\"\",\"\"}})",
  "0050": "eq(t,myPow(2,10),1024.0);eq(t,myPow(2,-2),0.25);eq(t,myPow(1,-2147483648),1.0);eq(t,myPow(-2,3),-8.0)",
  "0051": "eq(t,solveNQueens(4),[][]string{{\".Q..\",\"...Q\",\"Q...\",\"..Q.\"},{\"..Q.\",\"Q...\",\"...Q\",\".Q..\"}});eq(t,len(solveNQueens(2)),0);eq(t,solveNQueens(1),[][]string{{\"Q\"}})",
  "0052": "eq(t,totalNQueens(4),2);eq(t,totalNQueens(1),1);eq(t,totalNQueens(8),92);eq(t,totalNQueens(3),0)",
  "0053": "eq(t,maxSubArray([]int{-2,1,-3,4,-1,2,1,-5,4}),6);eq(t,maxSubArray([]int{-3,-1,-2}),-1);eq(t,maxSubArray([]int{0}),0)",
  "0054": "eq(t,spiralOrder([][]int{{1,2,3},{4,5,6},{7,8,9}}),[]int{1,2,3,6,9,8,7,4,5});eq(t,spiralOrder([][]int{{1},{2},{3}}),[]int{1,2,3});eq(t,spiralOrder([][]int{{1,2,3}}),[]int{1,2,3})",
  "0055": "eq(t,canJump([]int{2,3,1,1,4}),true);eq(t,canJump([]int{3,2,1,0,4}),false);eq(t,canJump([]int{0}),true)",
  "0056": "eq(t,merge([][]int{{1,3},{2,6},{8,10},{15,18}}),[][]int{{1,6},{8,10},{15,18}});eq(t,merge([][]int{{1,4},{4,5}}),[][]int{{1,5}})",
  "0057": "eq(t,insert([][]int{{1,3},{6,9}},[]int{2,5}),[][]int{{1,5},{6,9}});eq(t,insert(nil,[]int{5,7}),[][]int{{5,7}});eq(t,insert([][]int{{1,2},{3,5},{6,7},{8,10},{12,16}},[]int{4,8}),[][]int{{1,2},{3,10},{12,16}})",
  "0058": "eq(t,lengthOfLastWord(\"Hello World\"),5);eq(t,lengthOfLastWord(\"   fly me   to   the moon  \"),4);eq(t,lengthOfLastWord(\"a\"),1)",
  "0059": "eq(t,generateMatrix(3),[][]int{{1,2,3},{8,9,4},{7,6,5}});eq(t,generateMatrix(1),[][]int{{1}})",
  "0060": "eq(t,getPermutation(3,3),\"213\");eq(t,getPermutation(4,9),\"2314\");eq(t,getPermutation(3,6),\"321\");eq(t,getPermutation(1,1),\"1\")",
  "0061": "eq(t,V(rotateRight(L(1,2,3,4,5),2)),[]int{4,5,1,2,3});eq(t,V(rotateRight(L(0,1,2),4)),[]int{2,0,1});eq(t,V(rotateRight(nil,10)),[]int{})",
  "0062": "eq(t,uniquePaths(3,7),28);eq(t,uniquePaths(3,2),3);eq(t,uniquePaths(1,100),1);eq(t,uniquePaths(17,17),601080390);for m:=1;m<=10;m++{for n:=1;n<=10;n++{dp:=make([]int,n);dp[0]=1;for r:=0;r<m;r++{for c:=1;c<n;c++{dp[c]+=dp[c-1]}};eq(t,uniquePaths(m,n),dp[n-1])}}",
  "0063": "eq(t,uniquePathsWithObstacles([][]int{{0,0,0},{0,1,0},{0,0,0}}),2);eq(t,uniquePathsWithObstacles([][]int{{1}}),0);eq(t,uniquePathsWithObstacles([][]int{{0,1,0}}),0)",
  "0064": "eq(t,minPathSum([][]int{{1,3,1},{1,5,1},{4,2,1}}),7);eq(t,minPathSum([][]int{{1,2,3}}),6);eq(t,minPathSum([][]int{{0}}),0)",
  "0065": "for _,s:=range []string{\"2\",\"0089\",\"-0.1\",\"+.8\",\"46.e3\",\"-90E3\"}{eq(t,isNumber(s),true)};for _,s:=range []string{\"abc\",\"1a\",\"1e\",\"e3\",\"99e2.5\",\"--6\",\".\",\" 1\"}{eq(t,isNumber(s),false)}",
  "0066": "eq(t,plusOne([]int{1,2,3}),[]int{1,2,4});eq(t,plusOne([]int{9,9}),[]int{1,0,0});eq(t,plusOne([]int{0}),[]int{1})",
  "0067": "eq(t,addBinary(\"11\",\"1\"),\"100\");eq(t,addBinary(\"1010\",\"1011\"),\"10101\");eq(t,addBinary(\"0\",\"0\"),\"0\")",
  "0068": "eq(t,fullJustify([]string{\"This\",\"is\",\"an\",\"example\",\"of\",\"text\",\"justification.\"},16),[]string{\"This    is    an\",\"example  of text\",\"justification.  \"});eq(t,fullJustify([]string{\"a\",\"b\",\"c\"},3),[]string{\"a b\",\"c  \"})",
  "0069": "eq(t,mySqrt(8),2);eq(t,mySqrt(4),2);eq(t,mySqrt(0),0);eq(t,mySqrt(2147483647),46340)",
  "0070": "eq(t,climbStairs(3),3);eq(t,climbStairs(1),1);eq(t,climbStairs(45),1836311903);a,b:=1,1;for n:=1;n<=45;n++{eq(t,climbStairs(n),b);a,b=b,a+b}",
  "0071": "eq(t,simplifyPath(\"/home//foo/../bar/\"),\"/home/bar\");eq(t,simplifyPath(\"/../\"),\"/\");eq(t,simplifyPath(\"/.../a/../b\"),\"/.../b\")",
  "0072": "eq(t,minDistance(\"horse\",\"ros\"),3);eq(t,minDistance(\"intention\",\"execution\"),5);eq(t,minDistance(\"\",\"abc\"),3);eq(t,minDistance(\"same\",\"same\"),0)",
  "0073": "a:=[][]int{{1,1,1},{1,0,1},{1,1,1}};setZeroes(a);eq(t,a,[][]int{{1,0,1},{0,0,0},{1,0,1}});b:=[][]int{{0,1,2,0},{3,4,5,2},{1,3,1,5}};setZeroes(b);eq(t,b,[][]int{{0,0,0,0},{0,4,5,0},{0,3,1,0}})",
  "0074": "a:=[][]int{{1,3,5,7},{10,11,16,20},{23,30,34,60}};eq(t,searchMatrix(a,3),true);eq(t,searchMatrix(a,13),false);eq(t,searchMatrix([][]int{{1}},0),false)",
  "0075": "a:=[]int{2,0,2,1,1,0};sortColors(a);eq(t,a,[]int{0,0,1,1,2,2});b:=[]int{2,2,0};sortColors(b);eq(t,b,[]int{0,2,2})",
  "0076": "eq(t,minWindow(\"ADOBECODEBANC\",\"ABC\"),\"BANC\");eq(t,minWindow(\"a\",\"aa\"),\"\");eq(t,minWindow(\"aa\",\"aa\"),\"aa\");eq(t,minWindow(\"bbaa\",\"aba\"),\"baa\")",
  "0077": "eq(t,combine(4,2),[][]int{{1,2},{1,3},{1,4},{2,3},{2,4},{3,4}});eq(t,combine(3,3),[][]int{{1,2,3}})",
  "0078": "eq(t,subsets([]int{1,2}),[][]int{{},{1},{2},{1,2}});eq(t,len(subsets([]int{1,2,3})),8);eq(t,subsets(nil),[][]int{{}})",
  "0079": "b:=B([]string{\"ABCE\",\"SFCS\",\"ADEE\"});before:=B([]string{\"ABCE\",\"SFCS\",\"ADEE\"});eq(t,exist(b,\"ABCCED\"),true);eq(t,b,before);eq(t,exist(b,\"ABCB\"),false);eq(t,b,before);eq(t,exist(b,\"SEE\"),true)",
  "0080": "a:=[]int{0,0,1,1,1,1,2,3,3};k:=removeDuplicates(a);eq(t,a[:k],[]int{0,0,1,1,2,3,3});b:=[]int{1,1,1};eq(t,removeDuplicates(b),2)",
  "0081": "eq(t,search([]int{2,5,6,0,0,1,2},0),true);eq(t,search([]int{2,5,6,0,0,1,2},3),false);eq(t,search([]int{1,0,1,1,1},0),true);eq(t,search([]int{1,1,1},2),false)",
  "0082": "eq(t,V(deleteDuplicates(L(1,2,3,3,4,4,5))),[]int{1,2,5});eq(t,V(deleteDuplicates(L(1,1,1,2,3))),[]int{2,3});eq(t,V(deleteDuplicates(L(1,1))),[]int{})",
  "0083": "eq(t,V(deleteDuplicates(L(1,1,2,3,3))),[]int{1,2,3});eq(t,V(deleteDuplicates(nil)),[]int{});eq(t,V(deleteDuplicates(L(1,1,1))),[]int{1})",
  "0084": "eq(t,largestRectangleArea([]int{2,1,5,6,2,3}),10);eq(t,largestRectangleArea([]int{2,2,2}),6);eq(t,largestRectangleArea([]int{2,1,2}),3);eq(t,largestRectangleArea(nil),0)",
  "0085": "eq(t,maximalRectangle(B([]string{\"10100\",\"10111\",\"11111\",\"10010\"})),6);eq(t,maximalRectangle(B([]string{\"00\"})),0);eq(t,maximalRectangle(B([]string{\"11\",\"11\"})),4);eq(t,maximalRectangle(nil),0)",
  "0086": "eq(t,V(partition(L(1,4,3,2,5,2),3)),[]int{1,2,2,4,3,5});eq(t,V(partition(L(2,1),2)),[]int{1,2});eq(t,V(partition(nil,1)),[]int{})",
  "0087": "eq(t,isScramble(\"great\",\"rgeat\"),true);eq(t,isScramble(\"abcde\",\"caebd\"),false);eq(t,isScramble(\"a\",\"a\"),true);eq(t,isScramble(\"abc\",\"bca\"),true)",
  "0088": "a:=[]int{1,2,3,0,0,0};merge(a,3,[]int{2,5,6},3);eq(t,a,[]int{1,2,2,3,5,6});b:=[]int{0};merge(b,0,[]int{1},1);eq(t,b,[]int{1})",
  "0089": "eq(t,grayCode(2),[]int{0,1,3,2});g:=grayCode(5);seen:=map[int]bool{};for i,x:=range g{if seen[x]{t.Fatal(\"duplicate Gray value\")};seen[x]=true;d:=x^g[(i+1)%len(g)];if d==0||d&(d-1)!=0{t.Fatal(\"not one bit apart\")}}",
  "0090": "eq(t,subsetsWithDup([]int{1,2,2}),[][]int{{},{1},{1,2},{1,2,2},{2},{2,2}});eq(t,subsetsWithDup([]int{0}),[][]int{{},{0}})",
  "0091": "eq(t,numDecodings(\"226\"),3);eq(t,numDecodings(\"06\"),0);eq(t,numDecodings(\"10\"),1);eq(t,numDecodings(\"2101\"),1);eq(t,numDecodings(\"30\"),0)",
  "0092": "eq(t,V(reverseBetween(L(1,2,3,4,5),2,4)),[]int{1,4,3,2,5});eq(t,V(reverseBetween(L(1,2,3),1,3)),[]int{3,2,1});eq(t,V(reverseBetween(L(5),1,1)),[]int{5})",
  "0093": "eq(t,restoreIpAddresses(\"25525511135\"),[]string{\"255.255.11.135\",\"255.255.111.35\"});eq(t,restoreIpAddresses(\"0000\"),[]string{\"0.0.0.0\"});eq(t,len(restoreIpAddresses(\"1111111111111\")),0)",
  "0094": "eq(t,inorderTraversal(&TreeNode{Val:1,Right:&TreeNode{Val:2,Left:&TreeNode{Val:3}}}),[]int{1,3,2});eq(t,inorderTraversal(nil),[]int{})",
  "0095": "trees:=generateTrees(3);eq(t,len(trees),5);seen:=map[string]bool{};nodes:=map[*TreeNode]bool{};var check func(*TreeNode,int,int);check=func(x *TreeNode,lo,hi int){if x==nil{return};if x.Val<=lo||x.Val>=hi||nodes[x]{t.Fatal(\"invalid BST or shared node\")};nodes[x]=true;check(x.Left,lo,x.Val);check(x.Right,x.Val,hi)};for _,tree:=range trees{key:=serialize(tree);if seen[key]{t.Fatal(\"duplicate tree\")};seen[key]=true;check(tree,0,4)};eq(t,len(generateTrees(1)),1)",
  "0096": "eq(t,numTrees(3),5);eq(t,numTrees(1),1);eq(t,numTrees(19),1767263190);dp:=make([]int,20);dp[0]=1;for n:=1;n<=19;n++{for left:=0;left<n;left++{dp[n]+=dp[left]*dp[n-left-1]};eq(t,numTrees(n),dp[n])}",
  "0097": "eq(t,isInterleave(\"aabcc\",\"dbbca\",\"aadbbcbcac\"),true);eq(t,isInterleave(\"aabcc\",\"dbbca\",\"aadbbbaccc\"),false);eq(t,isInterleave(\"\",\"\",\"\"),true);eq(t,isInterleave(\"a\",\"\",\"a\"),true)",
  "0098": "eq(t,isValidBST(&TreeNode{Val:2,Left:&TreeNode{Val:1},Right:&TreeNode{Val:3}}),true);eq(t,isValidBST(&TreeNode{Val:5,Left:&TreeNode{Val:1},Right:&TreeNode{Val:4,Left:&TreeNode{Val:3},Right:&TreeNode{Val:6}}}),false);eq(t,isValidBST(&TreeNode{Val:1,Right:&TreeNode{Val:1}}),false)",
  "0099": "r:=&TreeNode{Val:3,Left:&TreeNode{Val:1},Right:&TreeNode{Val:4,Left:&TreeNode{Val:2}}};recoverTree(r);eq(t,serialize(r),\"2(1(#,#),4(3(#,#),#))\");q:=&TreeNode{Val:2,Left:&TreeNode{Val:3},Right:&TreeNode{Val:1}};recoverTree(q);eq(t,serialize(q),\"2(1(#,#),3(#,#))\")",
  "0100": "eq(t,isSameTree(&TreeNode{Val:1,Left:&TreeNode{Val:2}},&TreeNode{Val:1,Left:&TreeNode{Val:2}}),true);eq(t,isSameTree(&TreeNode{Val:1,Left:&TreeNode{Val:2}},&TreeNode{Val:1,Right:&TreeNode{Val:2}}),false);eq(t,isSameTree(nil,nil),true)"
};
const shared="package solution\nimport (\"reflect\";\"strconv\";\"testing\")\ntype ListNode struct { Val int; Next *ListNode }\ntype TreeNode struct { Val int; Left, Right *TreeNode }\nfunc eq(t testing.TB, got, want any) { t.Helper(); if !reflect.DeepEqual(got,want) {t.Fatalf(\"got %#v; want %#v\",got,want)} }\nfunc L(values ...int) *ListNode {dummy:= &ListNode{};tail:=dummy;for _,x:=range values{tail.Next=&ListNode{Val:x};tail=tail.Next};return dummy.Next}\nfunc V(node *ListNode) []int {out:=[]int{};for node!=nil{if len(out)>10000{panic(\"cycle or unexpectedly long list\")};out=append(out,node.Val);node=node.Next};return out}\nfunc B(rows []string) [][]byte {out:=make([][]byte,len(rows));for i,row:=range rows{out[i]=[]byte(row)};return out}\nfunc serialize(root *TreeNode) string {seen:=map[*TreeNode]bool{};var walk func(*TreeNode)string;walk=func(node *TreeNode)string{if node==nil{return \"#\"};if seen[node]{panic(\"cycle or shared node within tree\")};seen[node]=true;return strconv.Itoa(node.Val)+\"(\"+walk(node.Left)+\",\"+walk(node.Right)+\")\"};return walk(root)}\n";
const scratch=fs.mkdtempSync(path.join(os.tmpdir(),'leetcode-go-'));
let failed=false;
try {
 fs.writeFileSync(path.join(scratch,'go.mod'),'module leetcodeanswers\n\ngo 1.23\n');
 for(let n=1;n<=100;n++){
  const id=String(n).padStart(4,'0');
  if(!tests[id])throw new Error('Missing functional test for '+id);
  const dir=path.join(scratch,'p'+id);fs.mkdirSync(dir);
  const source=fs.readFileSync(path.join(root,'go',id+'.go'),'utf8');
  if(/^\s*package\s/m.test(source))throw new Error(id+' must remain a judge snippet without a package clause');
  fs.writeFileSync(path.join(dir,'answer.go'),'package solution\n\n'+source);
  fs.writeFileSync(path.join(dir,'answer_test.go'),shared+'\nfunc TestAnswer(t *testing.T) {\n'+tests[id]+'\n}\n');
 }
 const env={...process.env,GOWORK:'off',GOTOOLCHAIN:'local',CGO_ENABLED:'0'};
 const run=spawnSync('go',['test','./...','-count=1','-timeout=30s','-json'],{cwd:scratch,env,encoding:'utf8',maxBuffer:32*1024*1024,timeout:240000});
 const passed=new Set(),broken=new Set(),output=[];
 for(const line of (run.stdout||'').split(/\r?\n/)){
  if(!line)continue;let event;try{event=JSON.parse(line)}catch{output.push(line);continue}
  if(event.Action==='pass'&&event.Test==='TestAnswer')passed.add(event.Package);
  if(event.Action==='fail')broken.add(event.Package);
  if(event.Output)output.push(event.Output.trimEnd());
 }
 failed=Boolean(run.error)||run.status!==0||passed.size!==100;
 console.log('Go isolated packages: '+passed.size+'/100 functional suites passed; '+broken.size+' failing packages.');
 if(failed){console.error(output.slice(-250).join('\n'));if(run.stderr)console.error(run.stderr);if(run.error)console.error(run.error.message);process.exitCode=1}
 else {
  const vet=spawnSync('go',['vet','./...'],{cwd:scratch,env,encoding:'utf8',timeout:120000});
  if(vet.status!==0||vet.error){failed=true;process.exitCode=1;console.error(vet.stderr||vet.error?.message||'go vet failed')}
  else console.log('Go vet: all 100 packages passed.');
 }
} catch(error){failed=true;process.exitCode=1;console.error(error.stack)} finally {
 const resolved=path.resolve(scratch),base=path.resolve(os.tmpdir())+path.sep;
 if(resolved.startsWith(base)&&path.basename(resolved).startsWith('leetcode-go-'))fs.rmSync(resolved,{recursive:true,force:true});
 else throw new Error('Refusing to clean an unexpected temporary path');
}
