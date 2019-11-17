//we are trying to get the median value 

//solution
//finding out the even and odd

function absoluteValuesSumMinization(a) {
//  let even = a.length % 2 === 0 ;
//   if (even ==  true){
//     return  a[a.length / 2 -1]
//   }
//   else {
//     return a[Math.floor(a.length / 2)]
//   }
    // doing it in one line
    return a.length % 2 === 0 ? a[a.length / 2 - 1] : a[Math.floor(a.length / 2)]
}


console.log(absoluteValuesSumMinization([2,4,7]));