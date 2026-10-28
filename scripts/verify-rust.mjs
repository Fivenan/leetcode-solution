// Compile every standalone submission with judge types and functional tests.
// Standard Node.js only; set RUSTC to a compiler executable if not on PATH.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const root = fileURLToPath(new URL('../', import.meta.url));
const functionalCases = {
    "0001": "assert_eq!(Solution::two_sum(vec![2,7,11,15],9),vec![0,1]); assert_eq!(Solution::two_sum(vec![3,3],6),vec![0,1]);",
    "0002": "assert_eq!(values(Solution::add_two_numbers(list(&[2,4,3]),list(&[5,6,4]))),vec![7,0,8]); assert_eq!(values(Solution::add_two_numbers(list(&[9]),list(&[1]))),vec![0,1]);",
    "0003": "assert_eq!(Solution::length_of_longest_substring(\"abcabcbb\".into()),3); assert_eq!(Solution::length_of_longest_substring(\"abba\".into()),2); assert_eq!(Solution::length_of_longest_substring(\"\".into()),0);",
    "0004": "assert_eq!(Solution::find_median_sorted_arrays(vec![1,3],vec![2]),2.0); assert_eq!(Solution::find_median_sorted_arrays(vec![1,2],vec![3,4]),2.5); assert_eq!(Solution::find_median_sorted_arrays(vec![],vec![1]),1.0);",
    "0005": "assert_eq!(Solution::longest_palindrome(\"babad\".into()),\"bab\"); assert_eq!(Solution::longest_palindrome(\"cbbd\".into()),\"bb\");",
    "0006": "assert_eq!(Solution::convert(\"PAYPALISHIRING\".into(),3),\"PAHNAPLSIIGYIR\"); assert_eq!(Solution::convert(\"AB\".into(),1),\"AB\");",
    "0007": "assert_eq!(Solution::reverse(-120),-21); assert_eq!(Solution::reverse(1534236469),0); assert_eq!(Solution::reverse(i32::MIN),0);",
    "0008": "assert_eq!(Solution::my_atoi(\"   -42\".into()),-42); assert_eq!(Solution::my_atoi(\"4193 with words\".into()),4193); assert_eq!(Solution::my_atoi(\"-91283472332\".into()),i32::MIN);",
    "0009": "assert!(Solution::is_palindrome(121)); assert!(Solution::is_palindrome(0)); assert!(!Solution::is_palindrome(10)); assert!(!Solution::is_palindrome(-121));",
    "0010": "assert!(Solution::is_match(\"aab\".into(),\"c*a*b\".into())); assert!(!Solution::is_match(\"mississippi\".into(),\"mis*is*p*.\".into())); assert!(Solution::is_match(\"\".into(),\"a*\".into()));",
    "0011": "assert_eq!(Solution::max_area(vec![1,8,6,2,5,4,8,3,7]),49); assert_eq!(Solution::max_area(vec![1,1]),1);",
    "0012": "assert_eq!(Solution::int_to_roman(1994),\"MCMXCIV\"); assert_eq!(Solution::int_to_roman(4),\"IV\");",
    "0013": "assert_eq!(Solution::roman_to_int(\"MCMXCIV\".into()),1994); assert_eq!(Solution::roman_to_int(\"III\".into()),3);",
    "0014": "assert_eq!(Solution::longest_common_prefix(vec![\"flower\".into(),\"flow\".into(),\"flight\".into()]),\"fl\"); assert_eq!(Solution::longest_common_prefix(vec![\"\".into(),\"a\".into()]),\"\");",
    "0015": "assert_eq!(Solution::three_sum(vec![-1,0,1,2,-1,-4]),vec![vec![-1,-1,2],vec![-1,0,1]]); assert_eq!(Solution::three_sum(vec![0,0,0,0]),vec![vec![0,0,0]]);",
    "0016": "assert_eq!(Solution::three_sum_closest(vec![-1,2,1,-4],1),2); assert_eq!(Solution::three_sum_closest(vec![0,0,0],1),0);",
    "0017": "assert_eq!(Solution::letter_combinations(\"23\".into()).len(),9); assert_eq!(Solution::letter_combinations(\"7\".into()),vec![\"p\",\"q\",\"r\",\"s\"]); assert!(Solution::letter_combinations(\"\".into()).is_empty());",
    "0018": "assert_eq!(Solution::four_sum(vec![1,0,-1,0,-2,2],0),vec![vec![-2,-1,1,2],vec![-2,0,0,2],vec![-1,0,0,1]]); assert!(Solution::four_sum(vec![],0).is_empty());",
    "0019": "assert_eq!(values(Solution::remove_nth_from_end(list(&[1,2,3,4,5]),2)),vec![1,2,3,5]); assert!(Solution::remove_nth_from_end(list(&[1]),1).is_none());",
    "0020": "assert!(Solution::is_valid(\"()[]{}\".into())); assert!(!Solution::is_valid(\"([)]\".into())); assert!(!Solution::is_valid(\"]\".into()));",
    "0021": "assert_eq!(values(Solution::merge_two_lists(list(&[1,2,4]),list(&[1,3,4]))),vec![1,1,2,3,4,4]); assert!(Solution::merge_two_lists(None,None).is_none());",
    "0022": "assert_eq!(Solution::generate_parenthesis(3),vec![\"((()))\",\"(()())\",\"(())()\",\"()(())\",\"()()()\"]); assert_eq!(Solution::generate_parenthesis(1),vec![\"()\"]);",
    "0023": "assert_eq!(values(Solution::merge_k_lists(vec![list(&[1,4,5]),list(&[1,3,4]),list(&[2,6])])),vec![1,1,2,3,4,4,5,6]); assert!(Solution::merge_k_lists(vec![]).is_none());",
    "0024": "assert_eq!(values(Solution::swap_pairs(list(&[1,2,3,4]))),vec![2,1,4,3]); assert_eq!(values(Solution::swap_pairs(list(&[1,2,3]))),vec![2,1,3]);",
    "0025": "assert_eq!(values(Solution::reverse_k_group(list(&[1,2,3,4,5]),2)),vec![2,1,4,3,5]); assert_eq!(values(Solution::reverse_k_group(list(&[1,2,3,4,5]),3)),vec![3,2,1,4,5]);",
    "0026": "let mut a=vec![1,1,2]; let k=Solution::remove_duplicates(&mut a); assert_eq!(k,2); assert_eq!(&a[..k as usize],&[1,2]); let mut e=vec![]; assert_eq!(Solution::remove_duplicates(&mut e),0);",
    "0027": "let mut a=vec![3,2,2,3]; let k=Solution::remove_element(&mut a,3); assert_eq!(k,2); assert_eq!(&a[..2],&[2,2]);",
    "0028": "assert_eq!(Solution::str_str(\"sadbutsad\".into(),\"sad\".into()),0); assert_eq!(Solution::str_str(\"aaaaab\".into(),\"aaab\".into()),2); assert_eq!(Solution::str_str(\"abc\".into(),\"d\".into()),-1);",
    "0029": "assert_eq!(Solution::divide(10,3),3); assert_eq!(Solution::divide(7,-3),-2); assert_eq!(Solution::divide(i32::MIN,-1),i32::MAX); assert_eq!(Solution::divide(i32::MIN,i32::MIN),1);",
    "0030": "let mut a=Solution::find_substring(\"barfoothefoobarman\".into(),vec![\"foo\".into(),\"bar\".into()]); a.sort(); assert_eq!(a,vec![0,9]); assert_eq!(Solution::find_substring(\"wordgoodgoodgoodbestword\".into(),vec![\"word\".into(),\"good\".into(),\"best\".into(),\"good\".into()]),vec![8]);",
    "0031": "let mut a=vec![1,2,3]; Solution::next_permutation(&mut a); assert_eq!(a,vec![1,3,2]); let mut b=vec![3,2,1]; Solution::next_permutation(&mut b); assert_eq!(b,vec![1,2,3]);",
    "0032": "assert_eq!(Solution::longest_valid_parentheses(\")()())\".into()),4); assert_eq!(Solution::longest_valid_parentheses(\"(()\".into()),2); assert_eq!(Solution::longest_valid_parentheses(\"\".into()),0);",
    "0033": "assert_eq!(Solution::search(vec![4,5,6,7,0,1,2],0),4); assert_eq!(Solution::search(vec![4,5,6,7,0,1,2],3),-1); assert_eq!(Solution::search(vec![1],0),-1);",
    "0034": "assert_eq!(Solution::search_range(vec![5,7,7,8,8,10],8),vec![3,4]); assert_eq!(Solution::search_range(vec![],0),vec![-1,-1]);",
    "0035": "assert_eq!(Solution::search_insert(vec![1,3,5,6],2),1); assert_eq!(Solution::search_insert(vec![1,3,5,6],7),4);",
    "0036": "let mut b=vec![vec!['.';9];9]; assert!(Solution::is_valid_sudoku(b.clone())); b[0][0]='5'; b[0][8]='5'; assert!(!Solution::is_valid_sudoku(b));",
    "0037": "let rows=[\"534678912\",\"672195348\",\"198342567\",\"859761423\",\"426853791\",\"713924856\",\"961537284\",\"287419635\",\"345286179\"]; let mut b:Vec<Vec<char>>=rows.iter().map(|s|s.chars().collect()).collect(); b[0][0]='.'; Solution::solve_sudoku(&mut b); assert_eq!(b[0][0],'5'); assert_eq!(b.iter().map(|r|r.iter().collect::<String>()).collect::<Vec<_>>(),rows);",
    "0038": "assert_eq!(Solution::count_and_say(1),\"1\"); assert_eq!(Solution::count_and_say(4),\"1211\");",
    "0039": "assert_eq!(Solution::combination_sum(vec![2,3,6,7],7),vec![vec![2,2,3],vec![7]]); assert!(Solution::combination_sum(vec![2],1).is_empty());",
    "0040": "assert_eq!(Solution::combination_sum2(vec![10,1,2,7,6,1,5],8),vec![vec![1,1,6],vec![1,2,5],vec![1,7],vec![2,6]]);",
    "0041": "assert_eq!(Solution::first_missing_positive(vec![3,4,-1,1]),2); assert_eq!(Solution::first_missing_positive(vec![1,1]),2); assert_eq!(Solution::first_missing_positive(vec![i32::MIN,1]),2);",
    "0042": "assert_eq!(Solution::trap(vec![0,1,0,2,1,0,1,3,2,1,2,1]),6); assert_eq!(Solution::trap(vec![4,2,0,3,2,5]),9); assert_eq!(Solution::trap(vec![]),0);",
    "0043": "assert_eq!(Solution::multiply(\"123\".into(),\"456\".into()),\"56088\"); assert_eq!(Solution::multiply(\"99\".into(),\"99\".into()),\"9801\"); assert_eq!(Solution::multiply(\"0\".into(),\"123\".into()),\"0\");",
    "0044": "assert!(Solution::is_match(\"adceb\".into(),\"*a*b\".into())); assert!(!Solution::is_match(\"acdcb\".into(),\"a*c?b\".into())); assert!(Solution::is_match(\"\".into(),\"**\".into()));",
    "0045": "assert_eq!(Solution::jump(vec![2,3,1,1,4]),2); assert_eq!(Solution::jump(vec![0]),0); assert_eq!(Solution::jump(vec![2,3,0,1,4]),2);",
    "0046": "let a=Solution::permute(vec![1,2,3]); let set:std::collections::HashSet<_>=a.iter().cloned().collect(); assert_eq!(a.len(),6); assert_eq!(set.len(),6); assert!(set.contains(&vec![3,2,1]));",
    "0047": "assert_eq!(Solution::permute_unique(vec![1,1,2]),vec![vec![1,1,2],vec![1,2,1],vec![2,1,1]]);",
    "0048": "let mut a=vec![vec![1,2],vec![3,4]]; Solution::rotate(&mut a); assert_eq!(a,vec![vec![3,1],vec![4,2]]);",
    "0049": "let mut a=Solution::group_anagrams(vec![\"eat\".into(),\"tea\".into(),\"tan\".into(),\"ate\".into(),\"nat\".into(),\"bat\".into()]); for g in &mut a { g.sort(); } a.sort(); assert_eq!(a,vec![vec![\"ate\",\"eat\",\"tea\"],vec![\"bat\"],vec![\"nat\",\"tan\"]]);",
    "0050": "assert_eq!(Solution::my_pow(2.0,10),1024.0); assert_eq!(Solution::my_pow(2.0,-2),0.25); assert_eq!(Solution::my_pow(1.0,i32::MIN),1.0);",
    "0051": "let a=Solution::solve_n_queens(4); assert_eq!(a.len(),2); assert!(a.contains(&vec![\".Q..\".into(),\"...Q\".into(),\"Q...\".into(),\"..Q.\".into()])); assert_eq!(Solution::solve_n_queens(1),vec![vec![\"Q\"]]);",
    "0052": "assert_eq!(Solution::total_n_queens(4),2); assert_eq!(Solution::total_n_queens(1),1); assert_eq!(Solution::total_n_queens(8),92);",
    "0053": "assert_eq!(Solution::max_sub_array(vec![-2,1,-3,4,-1,2,1,-5,4]),6); assert_eq!(Solution::max_sub_array(vec![-3,-1,-2]),-1);",
    "0054": "assert_eq!(Solution::spiral_order(vec![vec![1,2,3],vec![4,5,6],vec![7,8,9]]),vec![1,2,3,6,9,8,7,4,5]); assert_eq!(Solution::spiral_order(vec![vec![1],vec![2]]),vec![1,2]);",
    "0055": "assert!(Solution::can_jump(vec![2,3,1,1,4])); assert!(!Solution::can_jump(vec![3,2,1,0,4])); assert!(Solution::can_jump(vec![0]));",
    "0056": "assert_eq!(Solution::merge(vec![vec![1,3],vec![2,6],vec![8,10],vec![15,18]]),vec![vec![1,6],vec![8,10],vec![15,18]]); assert_eq!(Solution::merge(vec![vec![1,4],vec![4,5]]),vec![vec![1,5]]);",
    "0057": "assert_eq!(Solution::insert(vec![vec![1,3],vec![6,9]],vec![2,5]),vec![vec![1,5],vec![6,9]]); assert_eq!(Solution::insert(vec![],vec![5,7]),vec![vec![5,7]]);",
    "0058": "assert_eq!(Solution::length_of_last_word(\"   fly me   to   the moon  \".into()),4); assert_eq!(Solution::length_of_last_word(\"a\".into()),1);",
    "0059": "assert_eq!(Solution::generate_matrix(3),vec![vec![1,2,3],vec![8,9,4],vec![7,6,5]]); assert_eq!(Solution::generate_matrix(1),vec![vec![1]]);",
    "0060": "assert_eq!(Solution::get_permutation(3,3),\"213\"); assert_eq!(Solution::get_permutation(4,9),\"2314\"); assert_eq!(Solution::get_permutation(1,1),\"1\");",
    "0061": "assert_eq!(values(Solution::rotate_right(list(&[1,2,3,4,5]),2)),vec![4,5,1,2,3]); assert_eq!(values(Solution::rotate_right(list(&[0,1,2]),4)),vec![2,0,1]); assert!(Solution::rotate_right(None,3).is_none());",
    "0062": "assert_eq!(Solution::unique_paths(3,7),28); assert_eq!(Solution::unique_paths(1,9),1);",
    "0063": "assert_eq!(Solution::unique_paths_with_obstacles(vec![vec![0,0,0],vec![0,1,0],vec![0,0,0]]),2); assert_eq!(Solution::unique_paths_with_obstacles(vec![vec![1]]),0);",
    "0064": "assert_eq!(Solution::min_path_sum(vec![vec![1,3,1],vec![1,5,1],vec![4,2,1]]),7); assert_eq!(Solution::min_path_sum(vec![vec![0]]),0);",
    "0065": "for s in [\"2\",\"0089\",\"-0.1\",\"+3.14\",\"4.\",\"-.9\",\"-90E3\",\"3e+7\"] { assert!(Solution::is_number(s.into()),\"{s}\"); } for s in [\"abc\",\"1a\",\"1e\",\"e3\",\"99e2.5\",\"--6\",\".\"] { assert!(!Solution::is_number(s.into()),\"{s}\"); }",
    "0066": "assert_eq!(Solution::plus_one(vec![1,2,3]),vec![1,2,4]); assert_eq!(Solution::plus_one(vec![9,9]),vec![1,0,0]); assert_eq!(Solution::plus_one(vec![0]),vec![1]);",
    "0067": "assert_eq!(Solution::add_binary(\"11\".into(),\"1\".into()),\"100\"); assert_eq!(Solution::add_binary(\"1010\".into(),\"1011\".into()),\"10101\");",
    "0068": "assert_eq!(Solution::full_justify(vec![\"This\".into(),\"is\".into(),\"an\".into(),\"example\".into(),\"of\".into(),\"text\".into(),\"justification.\".into()],16),vec![\"This    is    an\",\"example  of text\",\"justification.  \"]);",
    "0069": "assert_eq!(Solution::my_sqrt(8),2); assert_eq!(Solution::my_sqrt(0),0); assert_eq!(Solution::my_sqrt(i32::MAX),46340);",
    "0070": "assert_eq!(Solution::climb_stairs(3),3); assert_eq!(Solution::climb_stairs(1),1); assert_eq!(Solution::climb_stairs(45),1836311903);",
    "0071": "assert_eq!(Solution::simplify_path(\"/a/./b/../../c/\".into()),\"/c\"); assert_eq!(Solution::simplify_path(\"/../\".into()),\"/\"); assert_eq!(Solution::simplify_path(\"/.../a\".into()),\"/.../a\");",
    "0072": "assert_eq!(Solution::min_distance(\"horse\".into(),\"ros\".into()),3); assert_eq!(Solution::min_distance(\"\".into(),\"abc\".into()),3); assert_eq!(Solution::min_distance(\"intention\".into(),\"execution\".into()),5);",
    "0073": "let mut a=vec![vec![1,1,1],vec![1,0,1],vec![1,1,1]]; Solution::set_zeroes(&mut a); assert_eq!(a,vec![vec![1,0,1],vec![0,0,0],vec![1,0,1]]);",
    "0074": "assert!(Solution::search_matrix(vec![vec![1,3,5,7],vec![10,11,16,20],vec![23,30,34,60]],3)); assert!(!Solution::search_matrix(vec![vec![1]],2));",
    "0075": "let mut a=vec![2,0,2,1,1,0]; Solution::sort_colors(&mut a); assert_eq!(a,vec![0,0,1,1,2,2]);",
    "0076": "assert_eq!(Solution::min_window(\"ADOBECODEBANC\".into(),\"ABC\".into()),\"BANC\"); assert_eq!(Solution::min_window(\"a\".into(),\"aa\".into()),\"\"); assert_eq!(Solution::min_window(\"aa\".into(),\"aa\".into()),\"aa\");",
    "0077": "assert_eq!(Solution::combine(4,2),vec![vec![1,2],vec![1,3],vec![1,4],vec![2,3],vec![2,4],vec![3,4]]);",
    "0078": "assert_eq!(Solution::subsets(vec![1,2]),vec![vec![],vec![1],vec![2],vec![1,2]]); assert_eq!(Solution::subsets(vec![0]).len(),2);",
    "0079": "let b=vec![vec!['A','B','C','E'],vec!['S','F','C','S'],vec!['A','D','E','E']]; assert!(Solution::exist(b.clone(),\"ABCCED\".into())); assert!(!Solution::exist(b,\"ABCB\".into()));",
    "0080": "let mut a=vec![1,1,1,2,2,3]; let k=Solution::remove_duplicates(&mut a); assert_eq!(k,5); assert_eq!(&a[..5],&[1,1,2,2,3]);",
    "0081": "assert!(Solution::search(vec![2,5,6,0,0,1,2],0)); assert!(!Solution::search(vec![2,5,6,0,0,1,2],3)); assert!(Solution::search(vec![1,0,1,1,1],0));",
    "0082": "assert_eq!(values(Solution::delete_duplicates(list(&[1,2,3,3,4,4,5]))),vec![1,2,5]); assert_eq!(values(Solution::delete_duplicates(list(&[1,1,1,2,3]))),vec![2,3]);",
    "0083": "assert_eq!(values(Solution::delete_duplicates(list(&[1,1,2,3,3]))),vec![1,2,3]); assert!(Solution::delete_duplicates(None).is_none());",
    "0084": "assert_eq!(Solution::largest_rectangle_area(vec![2,1,5,6,2,3]),10); assert_eq!(Solution::largest_rectangle_area(vec![2,2]),4); assert_eq!(Solution::largest_rectangle_area(vec![]),0);",
    "0085": "let b=[\"10100\",\"10111\",\"11111\",\"10010\"].iter().map(|s|s.chars().collect()).collect(); assert_eq!(Solution::maximal_rectangle(b),6); assert_eq!(Solution::maximal_rectangle(vec![vec!['0']]),0);",
    "0086": "assert_eq!(values(Solution::partition(list(&[1,4,3,2,5,2]),3)),vec![1,2,2,4,3,5]); assert_eq!(values(Solution::partition(list(&[2,1]),2)),vec![1,2]);",
    "0087": "assert!(Solution::is_scramble(\"great\".into(),\"rgeat\".into())); assert!(!Solution::is_scramble(\"abcde\".into(),\"caebd\".into())); assert!(Solution::is_scramble(\"a\".into(),\"a\".into()));",
    "0088": "let mut a=vec![1,2,3,0,0,0]; let mut b=vec![2,5,6]; Solution::merge(&mut a,3,&mut b,3); assert_eq!(a,vec![1,2,2,3,5,6]); let mut z=vec![0]; Solution::merge(&mut z,0,&mut vec![1],1); assert_eq!(z,vec![1]);",
    "0089": "assert_eq!(Solution::gray_code(2),vec![0,1,3,2]); let a=Solution::gray_code(4); for i in 0..a.len() { assert_eq!((a[i]^a[(i+1)%a.len()]).count_ones(),1); }",
    "0090": "assert_eq!(Solution::subsets_with_dup(vec![1,2,2]),vec![vec![],vec![1],vec![1,2],vec![1,2,2],vec![2],vec![2,2]]);",
    "0091": "assert_eq!(Solution::num_decodings(\"226\".into()),3); assert_eq!(Solution::num_decodings(\"06\".into()),0); assert_eq!(Solution::num_decodings(\"2101\".into()),1); assert_eq!(Solution::num_decodings(\"10\".into()),1);",
    "0092": "assert_eq!(values(Solution::reverse_between(list(&[1,2,3,4,5]),2,4)),vec![1,4,3,2,5]); assert_eq!(values(Solution::reverse_between(list(&[1,2]),1,2)),vec![2,1]);",
    "0093": "assert_eq!(Solution::restore_ip_addresses(\"25525511135\".into()),vec![\"255.255.11.135\",\"255.255.111.35\"]); assert_eq!(Solution::restore_ip_addresses(\"0000\".into()),vec![\"0.0.0.0\"]);",
    "0094": "assert_eq!(Solution::inorder_traversal(tree(&[Some(1),None,Some(2),Some(3)])),vec![1,3,2]); assert!(Solution::inorder_traversal(None).is_empty());",
    "0095": "let a=Solution::generate_trees(3); assert_eq!(a.len(),5); let signatures:std::collections::HashSet<_>=a.into_iter().map(levels).collect(); assert_eq!(signatures.len(),5); assert!(signatures.contains(&vec![Some(2),Some(1),Some(3)])); assert_eq!(Solution::generate_trees(1).len(),1);",
    "0096": "assert_eq!(Solution::num_trees(3),5); assert_eq!(Solution::num_trees(1),1); assert_eq!(Solution::num_trees(19),1767263190);",
    "0097": "assert!(Solution::is_interleave(\"aabcc\".into(),\"dbbca\".into(),\"aadbbcbcac\".into())); assert!(!Solution::is_interleave(\"aabcc\".into(),\"dbbca\".into(),\"aadbbbaccc\".into())); assert!(Solution::is_interleave(\"\".into(),\"\".into(),\"\".into()));",
    "0098": "assert!(Solution::is_valid_bst(tree(&[Some(2),Some(1),Some(3)]))); assert!(!Solution::is_valid_bst(tree(&[Some(5),Some(1),Some(4),None,None,Some(3),Some(6)]))); assert!(Solution::is_valid_bst(tree(&[Some(i32::MIN)])));",
    "0099": "let mut t=tree(&[Some(3),Some(1),Some(4),None,None,Some(2)]); Solution::recover_tree(&mut t); assert_eq!(levels(t),vec![Some(2),Some(1),Some(4),None,None,Some(3)]); let mut a=tree(&[Some(1),Some(3),None,None,Some(2)]); Solution::recover_tree(&mut a); assert_eq!(levels(a),vec![Some(3),Some(1),None,None,Some(2)]);",
    "0100": "assert!(Solution::is_same_tree(tree(&[Some(1),Some(2),Some(3)]),tree(&[Some(1),Some(2),Some(3)]))); assert!(!Solution::is_same_tree(tree(&[Some(1),Some(2)]),tree(&[Some(1),None,Some(2)]))); assert!(Solution::is_same_tree(None,None));"
};

const judgeTypes = String.raw`
use std::cell::RefCell;
use std::rc::Rc;

#[derive(Clone, Debug, PartialEq, Eq)]
pub struct ListNode {
    pub val: i32,
    pub next: Option<Box<ListNode>>,
}
impl ListNode {
    pub fn new(val: i32) -> Self { Self { val, next: None } }
}
#[derive(Debug, PartialEq, Eq)]
pub struct TreeNode {
    pub val: i32,
    pub left: Option<Rc<RefCell<TreeNode>>>,
    pub right: Option<Rc<RefCell<TreeNode>>>,
}
impl TreeNode {
    pub fn new(val: i32) -> Self { Self { val, left: None, right: None } }
}
fn list(input: &[i32]) -> Option<Box<ListNode>> {
    input.iter().rev().fold(None, |next, &val| Some(Box::new(ListNode { val, next })))
}
fn values(mut head: Option<Box<ListNode>>) -> Vec<i32> {
    let mut out = Vec::new();
    while let Some(mut node) = head.take() { out.push(node.val); head = node.next.take(); }
    out
}
fn tree(input: &[Option<i32>]) -> Option<Rc<RefCell<TreeNode>>> {
    let Some(value) = input.first().copied().flatten() else { return None; };
    let root = Rc::new(RefCell::new(TreeNode::new(value)));
    let mut queue = std::collections::VecDeque::from([Rc::clone(&root)]);
    let mut index = 1;
    while let Some(node) = queue.pop_front() {
        if index < input.len() {
            if let Some(value) = input[index] {
                let child = Rc::new(RefCell::new(TreeNode::new(value)));
                node.borrow_mut().left = Some(Rc::clone(&child)); queue.push_back(child);
            }
            index += 1;
        }
        if index < input.len() {
            if let Some(value) = input[index] {
                let child = Rc::new(RefCell::new(TreeNode::new(value)));
                node.borrow_mut().right = Some(Rc::clone(&child)); queue.push_back(child);
            }
            index += 1;
        }
    }
    Some(root)
}
fn levels(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<Option<i32>> {
    let mut queue = std::collections::VecDeque::from([root]);
    let mut out = Vec::new();
    while let Some(node) = queue.pop_front() {
        if let Some(node) = node {
            let node = node.borrow(); out.push(Some(node.val));
            queue.push_back(node.left.clone()); queue.push_back(node.right.clone());
        } else { out.push(None); }
    }
    while out.last() == Some(&None) { out.pop(); }
    out
}
`;

const extraTests = String.raw`
#[test]
fn median_exhaustive_small_sorted_arrays() {
    fn extend(current: &mut Vec<i32>, minimum: i32, out: &mut Vec<Vec<i32>>) {
        out.push(current.clone());
        if current.len() == 4 { return; }
        for value in minimum..=2 { current.push(value); extend(current, value, out); current.pop(); }
    }
    let mut arrays = Vec::new(); extend(&mut Vec::new(), -2, &mut arrays);
    for a in &arrays { for b in &arrays {
        if a.is_empty() && b.is_empty() { continue; }
        let mut merged = a.clone(); merged.extend_from_slice(b); merged.sort();
        let mid = merged.len()/2;
        let expected = if merged.len()%2 == 1 { merged[mid] as f64 }
            else { (merged[mid-1] as f64 + merged[mid] as f64)/2.0 };
        assert_eq!(p0004::Solution::find_median_sorted_arrays(a.clone(), b.clone()), expected);
    } }
}
#[test]
fn manacher_exhaustive_binary_strings() {
    for length in 0..=10 {
        for mask in 0usize..1usize<<length {
            let input: String = (0..length).map(|i| if mask & (1<<i) == 0 { 'a' } else { 'b' }).collect();
            let answer = p0005::Solution::longest_palindrome(input.clone());
            assert!(input.contains(&answer));
            assert!(answer.bytes().eq(answer.bytes().rev()));
            let mut longest = 0;
            for left in 0..input.len() { for right in left+1..=input.len() {
                let candidate = &input[left..right];
                if candidate.bytes().eq(candidate.bytes().rev()) { longest = longest.max(candidate.len()); }
            } }
            assert_eq!(answer.len(), longest, "input={input}");
        }
    }
}
#[test]
fn group_reversal_all_short_lengths() {
    for length in 1..=12 { for k in 1..=length {
        let input: Vec<i32> = (0..length as i32).collect(); let mut expected = input.clone();
        for chunk in expected.chunks_mut(k) { if chunk.len() == k { chunk.reverse(); } }
        assert_eq!(values(p0025::Solution::reverse_k_group(list(&input), k as i32)), expected);
    } }
}
#[test]
fn sudoku_full_search_preserves_clues() {
    let puzzle = ["53..7....","6..195...",".98....6.","8...6...3","4..8.3..1","7...2...6",".6....28.","...419..5","....8..79"];
    let expected = ["534678912","672195348","198342567","859761423","426853791","713924856","961537284","287419635","345286179"];
    let mut board: Vec<Vec<char>> = puzzle.iter().map(|s| s.chars().collect()).collect();
    p0037::Solution::solve_sudoku(&mut board);
    let solved: Vec<String> = board.iter().map(|row| row.iter().collect()).collect();
    assert_eq!(solved, expected);
}
#[test]
fn bounded_final_counts_with_huge_dead_end_prefixes() {
    let mut grid = vec![vec![0;100];100]; grid[99][99] = 1;
    assert_eq!(p0063::Solution::unique_paths_with_obstacles(grid), 0);
    let text = format!("{}00", "1".repeat(98));
    assert_eq!(p0091::Solution::num_decodings(text), 0);
}
#[test]
fn generated_trees_have_unique_shapes_and_all_keys() {
    for (n, count) in [(1,1),(2,2),(3,5),(4,14),(5,42)] {
        let forest = p0095::Solution::generate_trees(n);
        assert_eq!(forest.len(), count);
        let mut shapes = std::collections::HashSet::new();
        for root in forest {
            assert_eq!(p0094::Solution::inorder_traversal(root.clone()), (1..=n).collect::<Vec<_>>());
            assert!(shapes.insert(levels(root)));
        }
    }
}
#[test]
fn morris_recovery_restores_every_child_link() {
    type Node = Rc<RefCell<TreeNode>>;

    fn nodes(root: &Option<Node>) -> Vec<Node> {
        let mut out = Vec::new();
        let mut stack = Vec::new();
        if let Some(root) = root { stack.push(Rc::clone(root)); }
        while let Some(node) = stack.pop() {
            let borrowed = node.borrow();
            if let Some(left) = &borrowed.left { stack.push(Rc::clone(left)); }
            if let Some(right) = &borrowed.right { stack.push(Rc::clone(right)); }
            drop(borrowed);
            out.push(node);
        }
        out
    }

    fn shape(root: &Option<Node>) -> Vec<(usize, Option<usize>, Option<usize>)> {
        let mut out = Vec::new();
        let mut seen = std::collections::HashSet::new();
        let mut stack = Vec::new();
        if let Some(root) = root { stack.push(Rc::clone(root)); }
        while let Some(node) = stack.pop() {
            let address = Rc::as_ptr(&node) as usize;
            assert!(seen.insert(address), "a temporary thread or cycle remains");
            let borrowed = node.borrow();
            let left = borrowed.left.as_ref().map(|n| Rc::as_ptr(n) as usize);
            let right = borrowed.right.as_ref().map(|n| Rc::as_ptr(n) as usize);
            out.push((address, left, right));
            if let Some(left) = &borrowed.left { stack.push(Rc::clone(left)); }
            if let Some(right) = &borrowed.right { stack.push(Rc::clone(right)); }
        }
        out.sort_unstable();
        out
    }

    for input in [
        vec![Some(4), Some(2), Some(6), Some(1), Some(3), Some(5), Some(7)],
        vec![Some(4), Some(3), None, Some(2), None, Some(1)],
        vec![Some(1), None, Some(2), None, Some(3), None, Some(4)],
        vec![Some(0), Some(i32::MIN), Some(i32::MAX)],
    ] {
        let mut root = tree(&input);
        let expected = p0094::Solution::inorder_traversal(root.clone());
        let expected_shape = shape(&root);
        let all_nodes = nodes(&root);
        for i in 0..all_nodes.len() { for j in i+1..all_nodes.len() {
            let a = all_nodes[i].borrow().val;
            let b = all_nodes[j].borrow().val;
            all_nodes[i].borrow_mut().val = b;
            all_nodes[j].borrow_mut().val = a;
            p0099::Solution::recover_tree(&mut root);
            assert_eq!(shape(&root), expected_shape);
            assert_eq!(p0094::Solution::inorder_traversal(root.clone()), expected);
        } }
    }
}
`;

if (Object.keys(functionalCases).length !== 100) throw new Error('Expected one functional test for every problem');
const temp = fs.mkdtempSync(path.join(os.tmpdir(), 'leetcode-rust-'));
if (path.dirname(path.resolve(temp)) !== path.resolve(os.tmpdir()) || !path.basename(temp).startsWith('leetcode-rust-')) {
    throw new Error(`Refusing cleanup outside the dedicated OS temporary directory: ${temp}`);
}
let preserveTemp = false;
try {
    let harness = judgeTypes;
    for (let number = 1; number <= 100; number++) {
        const id = String(number).padStart(4, '0');
        const source = fs.readFileSync(path.join(root, 'rust', `${id}.rs`), 'utf8');
        const test = functionalCases[id];
        if (!test) throw new Error(`Missing functional test ${id}`);
        const imports = ['ListNode', 'TreeNode', 'list', 'values', 'tree', 'levels']
            .filter(name => new RegExp(`\\b${name}\\b`).test(source + '\n' + test));
        harness += `\nmod p${id} {\n${imports.length ? `use super::{${imports.join(',')}};\n` : ''}`;
        harness += `pub struct Solution;\n${source}\n#[test]\nfn functional_${id}() { ${test} }\n}\n`;
    }
    harness += extraTests;
    const sourcePath = path.join(temp, 'all.rs');
    const binaryPath = path.join(temp, process.platform === 'win32' ? 'all-tests.exe' : 'all-tests');
    fs.writeFileSync(sourcePath, harness);
    if (process.argv.includes('--emit-only')) {
        preserveTemp = true;
        console.log(`Generated 107 Rust tests: ${sourcePath}`);
    } else {
        const compiler = process.env.RUSTC || 'rustc';
        const probe = spawnSync(compiler, ['--version'], { encoding: 'utf8' });
        if (probe.error || probe.status !== 0) {
            console.error('Rust compiler unavailable. Select a compiler on PATH, or set RUSTC to its executable path.');
            console.error('No Rust compilation or functional tests ran. All 100 snippets have test cases ready.');
            process.exitCode = 2;
        } else {
            console.log(probe.stdout.trim());
            const compiled = spawnSync(compiler, ['--edition=2021', '--test', sourcePath, '-o', binaryPath],
                { stdio: 'inherit', timeout: 180_000 });
            if (compiled.error) throw compiled.error;
            if (compiled.status !== 0) process.exitCode = compiled.status || 1;
            else {
                const tested = spawnSync(binaryPath, [], { stdio: 'inherit', timeout: 180_000 });
                if (tested.error) throw tested.error;
                process.exitCode = tested.status === 0 ? 0 : (tested.status || 1);
            }
        }
    }
} finally {
    if (!preserveTemp) fs.rmSync(temp, { recursive: true, force: true });
}
