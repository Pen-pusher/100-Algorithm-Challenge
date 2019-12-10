function isCaseInsensitivePalidrome(inputString) {
  const originalLowerCase = inputString.toLowerCase();
  const reverseWord = originalLowerCase
    .split("")
    .reverse()
    .join("");

  return originalLowerCase === reverseWord;
}

console.log(isCaseInsensitivePalidrome("AaBaa"));
