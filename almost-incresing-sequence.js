// given a sequence of array,determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

function almostIncreasingSequence(sequence){
 let count = 0
 for (let i = 0 ; i < sequence.length; i++){
     if(sequence[i] <= sequence[i -1]){
         count ++;
        //  console.log(count)
         if(sequence[i] <= sequence[i -2] && sequence[i+1] <= sequence[i -1]){
             return false;
         }
     }
 }
 return count <= 1;
}
console.log(almostIncreasingSequence([1,3,1,3]));