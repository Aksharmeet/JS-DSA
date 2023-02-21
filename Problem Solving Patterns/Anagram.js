// In this we mostly convert the array into object to increase the speed of accessibility for its elements
// This is useful when we want to access each element of an array without the use of an array.

function validAnagram(str1, str2) {
	// check the elements the length of the both str to be same
	if (str1.length != str2.length) {
		return false
	}
	// check if the elements of the both str are exactly same
	for (let key of str1) {
		const correctIndex = str2.indexOf(key)

		if (correctIndex == -1) {
			return false
		} else {
			const str2Arr = str2.split('')
			str2Arr.splice(correctIndex, 1)
			str2 = str2Arr.join('')
		}
	}

	return true
}

// optimized solution

function validAnagram(str1, str2) {
	// check the elements the length of the both str to be same
	if (str1.length != str2.length) {
		return false
	}
	// check if the elements of the both str are exactly same

	// convert the array to obj, where the key the values of the array and values are the number of occurance for a single value.
	const str1Obj = {}
	const str2Obj = {}

	for (let key of str1) {
		str1Obj[key] = (str1Obj[key] || 0) + 1
	}

	for (let key of str2) {
		str2Obj[key] = (str2Obj[key] || 0) + 1
	}

	// loop through any of the strobj and check against key of other strObj to confirm if the key exists
	for (let key in str1Obj) {
		if (key in str2Obj) {
			// if it exists, check if both uses the string exact same number of time
			if (str2Obj[key] !== str1Obj[key]) {
				return false
			}
		} else {
			return false
		}
	}

	return true
}

//   ! test cases

console.log(validAnagram('', '')) // true
console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('anagram', 'nagaram')) // true
console.log(validAnagram('rat', 'car')) // false) // false)
console.log(validAnagram('awesome', 'awesom')) // false)
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')) // false
console.log(validAnagram('qwerty', 'qeywrt')) // true)
console.log(validAnagram('texttwisttime', 'timetwisttext')) // true)
