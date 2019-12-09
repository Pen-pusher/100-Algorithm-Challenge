// For n = 3 and m = 10,the output should be candies(n,m) = 9.
// Each child will eat 3 pieces. So the answer is 9

function candies(n, m) {
    const candy = Math.floor((m / 3));

    return candy * n
}

