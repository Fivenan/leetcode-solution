func merge(nums1 []int, m int, nums2 []int, n int) {
	i, j, write := m-1, n-1, m+n-1
	for j >= 0 {
		if i >= 0 && nums1[i] > nums2[j] {
			nums1[write] = nums1[i]
			i--
		} else {
			nums1[write] = nums2[j]
			j--
		}
		write--
	}
}
