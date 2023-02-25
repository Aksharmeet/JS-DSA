// reverse
// Write a recursive function called reverse which accepts a string and returns
//  a new string in reverse.

function reverse(str) {
	if (str.length <= 1) return str

	return reverse(str.substring(1)) + str[0]
}

console.log(reverse('awesome')) // 'emosewa'
console.log(reverse('rithmschool')) // 'loohcsmhtir'
