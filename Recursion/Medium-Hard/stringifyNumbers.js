// stringifyNumbers
// Write a function called stringifyNumbers which takes
//  in an object and finds all of the values which are numbers
//   and converts them to strings. Recursion would be a great way to solve this!

const stringifyNumbers = (obj) => {
	for (let key in obj) {
		if (typeof obj[key] === 'number') {
			obj[key] = JSON.stringify(obj[key])
		} else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
			obj[key] = stringifyNumbers(obj[key])
		}
	}
	return obj
}

let obj = {
	num: 1,
	test: [1],
	data: {
		val: 4,
		info: {
			isRight: true,
			random: 66,
		},
	},
}

console.log(stringifyNumbers(obj))

// result
/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
