
function merge(left, right) {
    let sortedArr = [] // the sorted items will go here

    while (left.length && right.length) {
        // Insert the smallest item into sortedArr
        if (left[0] < right[0]) {
            // shift() removes and returns the first element from the array,
            // if array is empty shift() returns undefined
            sortedArr.push(left.shift())
        } else {
            sortedArr.push(right.shift())
        }
    }
    // Use spread operators to create a new array, combining the three arrays
    return [...sortedArr, ...left, ...right]
}

function mergeSort(array) {
    // Divide the array until it contains only one element
    if (array.length <= 1) {
        return array
    }

    let arrayMiddleIndex = Math.floor(array.length / 2)

    // Recursive calls
    let leftArray = mergeSort(array.slice(0, arrayMiddleIndex))
    let rightArray = mergeSort(array.slice(arrayMiddleIndex))

    return merge(leftArray, rightArray)
}