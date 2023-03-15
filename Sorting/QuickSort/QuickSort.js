// quick sort has two parts first is a helper function
// Helper Function => Pivot
// Main Function => QuickSort

const Pivot = (arr, start = 0, end = arr.length) => {
	let pivot = arr[start]
	let swapIdx = start

	const Swap = (arr, index1, index2) => ([arr[index1], arr[index2]] = [arr[index2], arr[index1]])

	for (let i = start + 1; i < arr.length; i++) {
		if (pivot > arr[i]) {
			swapIdx++
			Swap(arr, swapIdx, i)
		}
	}
	Swap(arr, swapIdx, start)
	return swapIdx
}

const QuickSort = (arr, left = 0, right = arr.length - 1) => {
	// edge case
	if (left < right) {
		let pivotIndex = Pivot(arr, left, right)
		// left
		QuickSort(arr, left, pivotIndex - 1)
		// right
		QuickSort(arr, pivotIndex + 1, right)
	}
	return arr
}

console.log(QuickSort([10, 3, 7, 2, 100, 1, 9, 3, 7, 5]))
