function capitalizeWords(strArr) {
	let newStrArr = []

	const recursiveHelperFn = (strArr) => {
		if (strArr.length < 1) return strArr[0]
		newStrArr.push(strArr[0].toUpperCase())

		recursiveHelperFn(strArr.slice(1))
	}
	recursiveHelperFn(strArr)

	return newStrArr
}

let words = ['i', 'am', 'learning', 'recursion']
console.log(capitalizeWords(words)) // ['I', 'AM', 'LEARNING', 'RECURSION']
