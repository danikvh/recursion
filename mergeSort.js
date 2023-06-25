function mergeSort(arr) {
    if (arr.length == 0) return "Introduce un array no vacío"
    if (arr.length == 1) return arr

    // Recursive case. First, divide the list into equal-sized sublists
    // consisting of the first half and second half of the list.
    // This assumes lists start at index 0.
    const mid = Math.floor(arr.length / 2);
	let left = arr.slice(0, mid);
	let right = arr.slice(mid, arr.length);

    // Recursively sort both sublists.
    left = mergeSort(left)
    right = mergeSort(right)

    // Then merge the now-sorted sublists.
    return merge(left, right)
}

function merge(left, right) {
    res = []
    while (left.length != 0 && right.length != 0) {
        if (left[0] <= right[0]) {
            res.push(left.shift())
        } else {
            res.push(right.shift())
        }
    }

    // Either left or right may have elements left; consume them.
    // (Only one of the following loops will actually be entered.)
    while (left.length != 0) {
        res.push(left.shift())
    }
    while (right.length != 0) {
        res.push(right.shift())
    }
    return res
}

console.log(mergeSort([4,8,2,34,5,22,32,12,21,9,54,13,38]))