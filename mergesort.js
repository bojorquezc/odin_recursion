//Build a function mergeSort that takes in an array and returns a sorted array, using a recursive merge sort methodology.
let sortArray = [2, 6, 1, 9, 4, 3, 5, 7];

function mergeSort(array) {
    //Split the given array into 2 halfs
    if (array.length == 1) {
        return "Array length is 1"
    } else {
        let halfLength = array.length / 2;
        let leftArray = array.slice(0, halfLength);
        let rightArray = array.slice(halfLength, halfLength * 2)
        console.log(leftArray);
        console.log(rightArray);
        return mergeSort(leftArray) && mergeSort(rightArray);
    }

}