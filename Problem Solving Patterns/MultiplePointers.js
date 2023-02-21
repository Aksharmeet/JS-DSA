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
