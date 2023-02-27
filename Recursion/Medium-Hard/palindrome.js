// isPalindrome
// Write a recursive function called isPalindrome which
//  returns true if the string passed to it is a palindrome
//   (reads the same forward and backward). Otherwise it returns false.

const isPalindrome = (str) => {
	// store the value of str in a variable

	// create a recursion fun to reverse the word and the reversed word
	const reverseWord = (str) => {
		if (str.length === 0) return ''

		return reverseWord(str.slice(1)) + str[0]
	}

	// check the return of recursion against the str
	return reverseWord(str) === str
}

console.log(isPalindrome('awesome')) // false
console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('tacocat')) // true
console.log(isPalindrome('amanaplanacanalpanama')) // true
console.log(isPalindrome('amanaplanacanalpandemonium')) // false
