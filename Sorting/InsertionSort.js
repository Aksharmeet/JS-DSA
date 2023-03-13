function sortArray(nums) {
	// with insertion sort
	// start a loop from 1st index and set the currentVal variable as the crr element of arr
	// start a nested loop, WITH  => j = i - 1; j > 0 && arr[j] > arr[i]; j--
	// arr[i] = arr[j]
	//  when we come out of the nested loop, we change the arr[i] = currentVal
	for (let i = 1; i < nums.length; i++) {
		let currentVal = nums[i]

		for (var j = i - 1; j >= 0 && nums[j] > currentVal; j--) {
			console.log('crr', currentVal)
			console.log('index', nums[i], j)

			nums[j + 1] = nums[j]
		}
		nums[j + 1] = currentVal
		console.log(nums, j)
	}
	return nums
}
