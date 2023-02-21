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

// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.
const findLongestSubstring = (str) => {
	// create a loop on str char and add char's one by one to another str till you don't reach onto a
	// repetition
	let uniqueSubStr = ''
	for (let i = 0; i < str.length; i++) {}

	while (firstPointer <= str.length - 1) {
		//
	}

	// create a loop and
}

console.log(findLongestSubstring('')) // 0
console.log(findLongestSubstring('rithmschool')) // 7
console.log(findLongestSubstring('thisisawesome')) // 6
console.log(findLongestSubstring('thecatinthehat')) // 7
console.log(findLongestSubstring('bbbbbb')) // 1
console.log(findLongestSubstring('longestsubstring')) // 8
console.log(findLongestSubstring('thisishowwedoit')) // 6
