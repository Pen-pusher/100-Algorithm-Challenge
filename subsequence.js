// check whether the given string is a aubsequence of the plaintext alphabet.


function alphabetSubSequence(s) {
  const chars = [] = s.split('');
  const charValues = [] = [];

  chars.forEach(char => {
    charValues.push(char.charCodeAt(0))
  });

  console.log(new Set(charValues))

  return true;
}

console.log(alphabetSubSequence('efg'))








