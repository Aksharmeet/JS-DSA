// Multiple pointers is useful when working with two points in an array

// countUniqueValues =>  takes an sorted array => returns an array of unique values in an array.
const countUniqueValues = (array) => {
	let firstPointer = 0
	let secondPointer = 1
	let uniqueArr = [array[0]]

	if (array.length === 0) {
		return 0
	}

	while (secondPointer <= array.length - 1) {
		if (uniqueArr[firstPointer] === array[secondPointer]) {
			secondPointer++
		} else {
			uniqueArr.push(array[secondPointer])
			secondPointer++
			firstPointer++
		}
	}
	return uniqueArr
}
// testCases
// console.log(countUniqueValues([1, 1, 1, 1, 1, 2])) // 2
// console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])) // 7
// console.log(countUniqueValues([])) // 0
// console.log(countUniqueValues([-2, -1, -1, 0, 1])) // 4

// sumZero => takes an sorted array => returns the indexes whose values when added returns 0.
const sumZero = (array) => {
	let firstIndex = 0
	let lastIndex = array.length - 1

	while (firstIndex < lastIndex) {
		const sum = array[firstIndex] + array[lastIndex]

		if (sum === 0) {
			return [firstIndex, lastIndex]
		} else if (Math.sign(sum) === 1) {
			lastIndex--
		} else if (Math.sign(sum) === -1) {
			firstIndex++
		}
	}
	return 0
}
// testCases
// console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 4, 5]))

// Multiple Pointers - averagePair
// Write a function called averagePair. Given a sorted array of integers
// and a target average, determine if there is a pair of values in the
// array where the average of the pair equals the target average. There may be more
// than one pair that matches the average target.

const averagePair = (arr, targetAvg) => {
	// as we are dealing with sorted arrays we can work on getting avg pair
	// which includes adding two or int => in our case two ints to get
	// the avg that is equal to targetAvg

	// as we are dealing with aggregate of selected items in an array
	// using multiple pointers or divide and conquer methods will be best

	// using multiple pointers
	// create two pointers that will pointing to the first and last index of the array
	let firstPointer = 0
	let lastPointer = arr.length - 1

	while (firstPointer < lastPointer) {
		// calculate the avg of the two elements,
		const avg = (arr[firstPointer] + arr[lastPointer]) / 2

		if (avg === targetAvg) {
			//if the avg is equal to target avg return true
			return true
		} else if (avg > targetAvg) {
			//  => if the avg is greater than target avg, last index pointer will come one down
			lastPointer--
		} else if (avg < targetAvg) {
			// => if the avg is lesser than the target avg,  first index pointer will go up
			firstPointer++
		}
	}
	return false
}

// console.log(averagePair([1, 2, 3], 2.5)) // true
// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)) // true
// console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)) // false
// console.log(averagePair([], 4)) // false

// Multiple Pointers - isSubsequence
// Write a function called isSubsequence which takes in two strings
// and checks whether the characters in the first string form a subsequence
// of the characters in the second string. In other words, the function should
// check whether the characters in the first string appear somewhere in the
// second string, without their order changing.

const isSubsequence = (str1, str2) => {
	// * create two pointers
	let str1Pointer = 0
	let str2Pointer = 0
	let tempStr = []

	// loop throught str2
	for (let i = 0; i < str2.length; i++) {
		if (str1[str1Pointer] === str2[str2Pointer]) {
			// if the char of str2 & str1 matches str1 & str2 pointer will move to second
			tempStr.push(str1[str1Pointer])

			str1Pointer++
			str2Pointer++
		} else {
			str2Pointer++
		}
	}

	if (tempStr.length === str1.length) {
		return true
	}
	return false
}
console.log(isSubsequence('hello', 'hello world')) // true
console.log(isSubsequence('sing', 'sting')) // true
console.log(isSubsequence('abc', 'abracadabra')) // true
console.log(isSubsequence('abc', 'acb')) // false (order matters)
