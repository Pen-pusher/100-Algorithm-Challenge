// given an array of integers. on each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.


function arrayChange(inputArray){
    let count = 0;

    for (let i =0 ; i < inputArray.length; i++){
        if (inputArray[i] >= inputArray[i + 1]){
            const difference = (inputArray[i] + 1) - inputArray[i + 1]
            inputArray[i + 1] = inputArray[i] + 1;
            count += difference;
        }
    }
    return count;
}

console.log(arrayChange([1,1,1]))