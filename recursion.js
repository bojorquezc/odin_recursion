//Using iteration, write a function fibs which takes a number and returns an array containing that many numbers from the Fibonacci sequence. 
//Using an example input of 8, this function should return the array [0, 1, 1, 2, 3, 5, 8, 13].

function fibs(number) {
    let fibArray = [];
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

//Now write another function fibsRec which solves the same problem recursively. This can be done in just a couple of lines 
//(or 1 if you’re crazy, but don’t consider either of these lengths a requirement… just get it done).


// Needs work to push each number to the array
 let fibRecArray = [];
function fibsRec(number) {
    if (number < 2)
        return number;
    else
        return (fibsRec(number-1)+fibsRec(number-2));
}