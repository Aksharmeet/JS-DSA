// Sliding window is useful when working with subset of the data in an array

// create function that returns the maximum sum  from the subArray of a given array.
const maxSubArraySum = (array, num) => {
	let maxSum = 0
	let tempSum = 0
	for (let i = 0; i < num; i++) {
		maxSum += array[i]
	}
	tempSum = maxSum

	for (let i = num; i < array.length; i++) {
		tempSum = tempSum - array[i - num] + array[i]
		maxSum = Math.max(tempSum, maxSum)
	}
	return maxSum
}

console.log(maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)) // 19
