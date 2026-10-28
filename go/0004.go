func findMedianSortedArrays(nums1 []int, nums2 []int) float64 {
	if len(nums1) > len(nums2) {
		return findMedianSortedArrays(nums2, nums1)
	}
	m, n := len(nums1), len(nums2)
	lo, hi := 0, m
	for lo <= hi {
		i := (lo + hi) / 2
		j := (m+n+1)/2 - i
		if i < m && j > 0 && nums2[j-1] > nums1[i] {
			lo = i + 1
			continue
		}
		if i > 0 && j < n && nums1[i-1] > nums2[j] {
			hi = i - 1
			continue
		}
		left := 0
		if i == 0 {
			left = nums2[j-1]
		} else if j == 0 || nums1[i-1] > nums2[j-1] {
			left = nums1[i-1]
		} else {
			left = nums2[j-1]
		}
		if (m+n)%2 == 1 {
			return float64(left)
		}
		right := 0
		if i == m {
			right = nums2[j]
		} else if j == n || nums1[i] < nums2[j] {
			right = nums1[i]
		} else {
			right = nums2[j]
		}
		return (float64(left) + float64(right)) / 2
	}
	return 0
}
