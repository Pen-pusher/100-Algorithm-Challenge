
// yor are given two digit number n. Return the sum of its digits.

function addTwoDigit(add) {
    const string = add.toString();
    let string1 = parseInt(string[0]);
    let string2 = parseInt(string[1]);
    // console.log(typeof (string1));

    return string1 + string2;
}

console.log(addTwoDigit(29));
