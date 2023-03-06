// Binary Search Exercise
// Write a function called binarySearch which accepts a sorted array
// and a value and returns the index at which the value exists. Otherwise, return -1.

// Binary Search Psuedo Code
// Create a pointer at the start of the array
// Create a pointer at the end of the array
// Create a middle point called pivot by dividing the length of the array by 2
// if the pivot is less than the required num, move the start pointer to the pivot
// if the pivot is more than the required num, move the end point to the pivot
// if the num is not found return -1

function binarySearch(arr, num) {
	let leftPointer = 0
	let rightPointer = arr.length - 1
	let mid = Math.floor((rightPointer + leftPointer) / 2)

	while (arr[mid] !== num && leftPointer <= rightPointer) {
		if (arr[mid] < num) leftPointer = mid + 1
		else if (arr[mid] > num) rightPointer = mid - 1

		mid = Math.floor((rightPointer + leftPointer) / 2)
	}
	if (arr[mid] == num) return mid

	return -1
}
console.log(binarySearch([1, 2, 3, 4, 5], 2)) // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)) // 2
console.log(binarySearch([1, 2, 3, 4, 5], 5)) // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)) // -1
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10)) // 2
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95)) // 16
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100)) // -1
