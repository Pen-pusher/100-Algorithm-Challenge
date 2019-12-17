function checkPalindrome(inputString) {
  const originalWord = inputString.toLowerCase();
  const reverseWord = originalWord
    .split("")
    .reverse()
    .join("");

  return originalWord === reverseWord;
}

console.log(checkPalindrome("aabaa"));
