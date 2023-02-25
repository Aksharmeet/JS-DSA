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

// Sliding Window - maxSubarraySum
// Given an array of integers and a number, write a function called
//  maxSubarraySum, which finds the maximum sum of a subarray with the
//   length of the number passed to the function.

// Note that a subarray must consist of consecutive elements from the original
//  array. In the first example below, [100, 200, 300] is a subarray of the
//  original array, but [100, 300] is not.
const maxSubArraySum2 = (array, num) => {
	let maxSum = 0
	let tempSum = 0

	if (num > array.length) {
		return null
	}
	// create a loop over the array using num to create the max sum
	for (let i = 0; i <= num - 1; i++) {
		maxSum += array[i]
	}
	tempSum = maxSum
	// create another loop over the entire array,
	for (let i = num; i <= array.length - 1; i++) {
		// create temp sum by subtracting the previous item and adding the next
		tempSum = array[i] + tempSum - array[i - num]

		// compare the maxSum and tempSum and store it in the maxSum
		maxSum = Math.max(tempSum, maxSum)
	}

	// after loop completes, return the maxSum
	return maxSum
}

console.log(maxSubArraySum2([100, 200, 300, 400], 2)) // 700
console.log(maxSubArraySum2([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)) // 39
console.log(maxSubArraySum2([-3, 4, 0, -2, 6, -1], 2)) // 5
console.log(maxSubArraySum2([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)) // 5
console.log(maxSubArraySum2([2, 3], 3)) // null

// Write a function called minSubArrayLen which accepts two parameters
// - an array of positive integers and a positive integer.

// This function should return the minimal length of a contiguous subarray
// of which the sum is greater than or equal to the integer passed to the
// function. If there isn't one, return 0 instead.
const minSubArrayLen = (array, sum) => {
	// create sliding window that grow and become smaller
	// it will grow when the sum of the window items is less than the sum
	//  it will get small when the sum og the items is more than the sum
	// return when reach the end of the array
	let total = 0
	let start = 0
	let end = 0
	let minLen = Infinity
	// the loop will go on till start reaches end
	while (start < array.length) {
		if (total < sum && end < array.length) {
			total += array[end]
			end++
		} else if (total >= sum) {
			minLen = Math.min(minLen, end - start)
			total -= array[start]
			start++
		} else {
			break
		}
	}

	return minLen === Infinity ? 0 : minLen
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)) // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)) // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)) // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)) // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)) // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)) // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)) // 0

// Write a function called findLongestSubstring, which accepts a
// string and returns the length of the longest substring with
// all distinct characters
const findLongestSubstring = (string) => {
	const seen = {}

	let longest = 0
	let crrPointer = 0

	for (let i = 0; i < string.length; i++) {
		const char = string[i]

		if (seen[char]) {
			crrPointer = Math.max(crrPointer, seen[char])
		}

		longest = Math.max(longest, i - crrPointer + 1)

		seen[char] = i + 1
	}
	return longest
}

console.log(findLongestSubstring('')) // 0
console.log(findLongestSubstring('rithmschool')) // 7
console.log(findLongestSubstring('thisisawesome')) // 6
console.log(findLongestSubstring('thecatinthehat')) // 7
console.log(findLongestSubstring('bbbbbb')) // 1
console.log(findLongestSubstring('longestsubstring')) // 8
console.log(findLongestSubstring('thisishowwedoit')) // 6
