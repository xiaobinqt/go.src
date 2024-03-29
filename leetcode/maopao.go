package main

import "fmt"

func maopao(nums []int) []int {
	if len(nums) == 0 {
		return nums
	}

	// 从小到大排
	length := len(nums)
	for i := 0; i < length-1; i++ {
		for j := 0; j < length-1-i; j++ {
			if nums[j] > nums[j+1] {
				tmp := nums[j]
				nums[j] = nums[j+1]
				nums[j+1] = tmp
			}
		}
	}

	return nums
}

func main() {
	fmt.Println(maopao([]int{10, 1, 25, 30}))
}
