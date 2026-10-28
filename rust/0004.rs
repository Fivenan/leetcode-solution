impl Solution {
    pub fn find_median_sorted_arrays(mut nums1: Vec<i32>, mut nums2: Vec<i32>) -> f64 {
        if nums1.len() > nums2.len() {
            std::mem::swap(&mut nums1, &mut nums2);
        }
        let (m, n) = (nums1.len(), nums2.len());
        let (mut lo, mut hi) = (0, m);
        while lo <= hi {
            let i = lo + (hi - lo) / 2;
            let j = (m + n + 1) / 2 - i;
            let a = if i == 0 {
                i64::MIN
            }
            else {
                nums1[i-1] as i64
            };
            let b = if i == m {
                i64::MAX
            }
            else {
                nums1[i] as i64
            };
            let c = if j == 0 {
                i64::MIN
            }
            else {
                nums2[j-1] as i64
            };
            let d = if j == n {
                i64::MAX
            }
            else {
                nums2[j] as i64
            };
            if a <= d && c <= b {
                return if (m+n)%2 == 1 {
                    a.max(c) as f64
                }
                else {
                    (a.max(c) as f64 + b.min(d) as f64)/2.0
                };
            }
            if a > d {
                hi = i - 1;
            }
            else {
                lo = i + 1;
            }
        }
        unreachable!("sorted, nonempty combined input has a partition")
    }
}
