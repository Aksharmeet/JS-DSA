// merge sort algo
// when using merge sort it's better to divide the algo to two parts
// first we create the merge

// create a function called merge, that takes two arguements
// create two pointers i.e..'j','i'..
// create an results array
// start a while loop, that will keep going till i < firstArray.length && j < secondArray.length
// check if firstArray[i] > secondArray[j]
// if true push the firstArray[i] to results && increment i
// if false push the secondArray[j] to results && increment j

// after the while loop finishes create two more loop checking which array has
// any elements left and pushing those to the end of the results array.
const merge = (arr1, arr2) => {
	const results = []
	let i = 0
	let j = 0

	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] > arr2[j]) {
			results.push(arr2[j])
			j++
		} else {
			results.push(arr1[i])
			i++
		}
	}
	while (i < arr1.length) {
		results.push(arr1[i])
		i++
	}
	while (j < arr2.length) {
		results.push(arr2[j])
		j++
	}
	return results
}

const sortArray = (nums) => {
	if (nums.length <= 1) return nums
	let mid = Math.floor(nums.length / 2)
	let left = sortArray(nums.slice(0, mid))
	let right = sortArray(nums.slice(mid))

	return merge(left, right)
}

console.log(sortArray([1000, 21, 121342, 121676, 1, 0], [0, 12, 4005]))
