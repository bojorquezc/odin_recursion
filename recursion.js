//Using iteration, write a function fibs which takes a number and returns an array containing that many numbers from the Fibonacci sequence. 
//Using an example input of 8, this function should return the array [0, 1, 1, 2, 3, 5, 8, 13].

function fibs(number) {
    fibArray = [];
    let indexOne = 0
    let indexTwo = 1;

    for (let index = 1; index <= number; index += 1) {
        if (index == 1) {
            fibArray.push(0);
        } else if (index == 2) {
            fibArray.push(1);
        } else {
            let currentNumber = fibArray[indexOne] + fibArray[indexTwo];
            fibArray.push(currentNumber);
            indexOne += 1;
            indexTwo += 1;
        }
    }
    console.log(fibArray);
}