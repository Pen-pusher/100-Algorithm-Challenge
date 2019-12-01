// give an array of integers,find the maximal absolute differnce between any two of its adjacent elements.

// example
// for inputArray=[2,4,1,0],the output should be arrayMaximalAdjacentDifference(inputArray)=3


function arrayMaxAdjacentDiffernce(inputArray){
	let maxDiff = Math.abs(inputArray[0] - inputArray[1])

	for (let i = 0; i < inputArray.length; i++){
		let absoluteDiff = Math.abs(inputArray[i - 1] - inputArray[i]);
		maxDiff = absoluteDiff > maxDiff ? absoluteDiff : maxDiff;

	}
	return maxDiff;
}

console.log(arrayMaxAdjacentDiffernce([2,4,1,0]));