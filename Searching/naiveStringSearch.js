// Problem
// A smaller string and a longer string are given
//  need to find how many time the smaller string re-appears in longer string

// * pseudo code
// loop over the longer string
// loop over the shorter string
// if you complete the inner loop and find a match add to the count
//  if not increment the outer loop

const naiveStringSearch = (longStr, shortStr) => {
	let count = 0

	for (let i = 0; i < longStr.length; i++) {
		for (let j = 0; j < shortStr.length; j++) {
			if (longStr[i + j] !== shortStr[j]) {
				break
			}

			if (j === shortStr.length - 1) {
				count++
			}
		}
	}
	return count
}

console.log(naiveStringSearch('aspaspaspspaasasasaawqpaspapsapspasasgdsrdawe', 'asp'))
