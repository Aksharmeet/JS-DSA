// capitalizeFirst
// Write a recursive function called capitalizeFirst. Given an array of strings,
//  capitalize the first letter of each string in the array.

function capitalizeFirst(strArr) {
	let newArr = []
	const recursiveOverArr = (strArr) => {
		if (strArr.length - 1 === 0) return (strArr[0] = strArr[0].split('')[0].toUpperCase() + strArr[0].slice(1))
		strArr[0] = strArr[0].split('')[0].toUpperCase() + strArr[0].slice(1)
		newArr.push(strArr[0])

		return recursiveOverArr(strArr.slice(1))
	}
	newArr.push(recursiveOverArr(strArr))
	return newArr
}

console.log(capitalizeFirst(['car', 'taco', 'banana'])) // ['Car','Taco','Banana']
