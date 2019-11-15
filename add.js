// write a fumction that return value of two numbers
// write a function that sum of all numbers regardless of as many params

//Solution to first one 
function add(a,b) {
    return a+b;
}
console.log(add(3,2));

//  solution to second one
// using for loop
function sum() {
    var total = 0;
    for (var i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}
// using forEach
function add(...num) {
    let total = 0;
    num.forEach(number => {
        total += number;
    });
    return total;
}


console.log(add(1,2,3,4,2,3,4));