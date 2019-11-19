// given an array of integers,find the pair of adjacent elements that has the largest product and return that product.

function products(numbers) {
    
    let largestProduct =  numbers[0] * numbers[1];
    
    for(let i = 1; i < numbers.length - 1 ; i++){
        const product = numbers[i] * numbers[i + 1];
        largestProduct = largestProduct < product ? largestProduct : product;
     }
    return largestProduct;


}


console.log(products([3,6,-2,-5,7,3]));