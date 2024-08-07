package main

import "fmt"

func intersection(nums1 []int, nums2 []int) []int {
	if len(nums1) == 0 || len(nums2) == 0 {
		return []int{}
	}

	var (
		m1, m2 = make(map[int]interface{}), make(map[int]interface{})
	)

	for _, each := range nums1 {
		m1[each] = nil
	}

	for _, each := range nums2 {
		m2[each] = nil
	}

	ret := make([]int, 0)
	for key, _ := range m1 {
		if _, ok := m2[key]; ok {
			ret = append(ret, key)
		}
	}

	return ret
}

func main() {
	fmt.Println(intersection([]int{1, 2, 2, 1}, []int{2, 2}))
}
