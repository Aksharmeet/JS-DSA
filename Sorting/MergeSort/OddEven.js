var ans = new Array(A.length)
var odd = 1,
	even = 0

for (var i = 0; i < A.length; i++) {
	if (A[i] % 2 === 0) {
		ans[even] = A[i]
		even += 2
	} else {
		ans[odd] = A[i]
		odd += 2
	}
}

return ans
