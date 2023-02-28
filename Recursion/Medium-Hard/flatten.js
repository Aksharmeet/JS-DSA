// flatten
// Write a recursive function called flatten which accepts an array
//  of arrays and returns a new array with all values flattened.

function flatten(arr) {
	let newArr = []
	// as we are dealing with nested array we will need atleast n^2 to solve this
	// that would mean to create a loop inside a loop
	// the first loop will be the size of the array
	// => it will check if the item is of type array
	// if it is type array that the function will be called again with the nested array
	//  we than move into the nested array and again go through the array
	// if it is not array than we simply push it to the newArr
	// the second one will be recursive

	for (let i = 0; i <= arr.length - 1; i++) {
		if (Array.isArray(arr[i])) {
			newArr = newArr.concat(flatten(arr[i]))
		} else {
			newArr.push(arr[i])
		}
	}
	return newArr
}

console.log(flatten([1, 2, 3, [4, 5]])) // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])) // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3
