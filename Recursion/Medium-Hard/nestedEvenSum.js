// nestedEvenSum
// Write a recursive function called nestedEvenSum.
// Return the sum of all even numbers in an object which may contain nested objects.

function nestedEvenSum(obj) {
	let count = 0

	for (let key in obj) {
		if (typeof obj[key] === 'string') {
		} else if (typeof obj[key] === 'number') {
			if (obj[key] % 2 === 0) {
				count += obj[key]
			}
		} else {
			count += nestedEvenSum(obj[key])
		}
	}

	return count
}

var obj1 = {
	outer: 2,
	obj: {
		inner: 2,
		otherObj: {
			superInner: 2,
			notANumber: true,
			alsoNotANumber: 'yup',
		},
	},
}
console.log(nestedEvenSum(obj1)) //6

// loop over the keys of the object using a recursive function
// check if the inner key => value is an even number
// if it is add it to the count , if not move on to the next key/value.
