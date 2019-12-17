function checkPalindrome(inputString){
    cost originalWord = inputString.toLowerCase();
    const reverseWord = originalWord.split('').reverse().join('');

    return originalWord === reverseWrord();
}

console.log(checkPalindrome('aabaa'))