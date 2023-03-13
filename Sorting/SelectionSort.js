function sortArray(nums) {
	// will be using selection sort
	// create the lowest variable
	// make the lowest as first element of the first loop
	// create the second loop, which starts from first loop index and goes till the end of the arr
	// check the lowest with the rest of the elements
	// if the lowest is bigger than any of the element change lowest for the index it was found to be bigger from
	// after the next loop is done with,  check if the lowest is same by checking it against the outer loop index
	// if it's changed than swap the values

	const swap = ({ arr, i, lowest }) => {
		;[arr[i], arr[lowest]] = [arr[lowest], arr[i]]
	}

	for (let i = 0; i < nums.length; i++) {
		let lowest = i

		for (let j = i; j < nums.length; j++) {
			if (nums[lowest] > nums[j]) {
				lowest = j
			}
		}

		if (lowest != i) {
			swap({ arr: nums, i, lowest })
		}
	}

	return nums
}
