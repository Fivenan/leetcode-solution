impl Solution {
    pub fn search_matrix(matrix: Vec<Vec<i32>>, target: i32) -> bool {
        if matrix.is_empty() || matrix[0].is_empty() {
            return false;
        }
        let cols=matrix[0].len();
        let (mut left,mut right)=(0,matrix.len()*cols);
        while left<right {
            let mid=left+(right-left)/2;
            let value=matrix[mid/cols][mid%cols];
            if value<target {
                left=mid+1;
            }
            else {
                right=mid;
            }
        }
        left<matrix.len()*cols && matrix[left/cols][left%cols]==target
    }
}
