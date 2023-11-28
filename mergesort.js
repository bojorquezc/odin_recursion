//Build a function mergeSort that takes in an array and returns a sorted array, using a recursive merge sort methodology.
let sortArray = [2, 6, 1, 9, 4, 3, 5, 7, 8];

function mergeSort(array) {
    //Split the given array into 2 halfs
    if (array.length == 1) {
        return array;
    } else {
        let middle = array.length / 2;
        let leftArray = array.slice(0, middle);
        let rightArray = array.slice(middle, middle * 2);

        let sortedLeftArray = mergeSort(leftArray);
        let sortedRightArray = mergeSort(rightArray);

        return merge(sortedLeftArray, sortedRightArray);
    }
}

function merge(leftArray, rightArray) {
    let newArray = [];
    while (leftArray.length && rightArray.length) {
        if (leftArray[0] < rightArray[0]) {
            newArray.push(leftArray.shift());
        } else {
            newArray.push(rightArray.shift());
        }
    }
    return newArray.concat(leftArray.slice().concat(rightArray.slice()));
}