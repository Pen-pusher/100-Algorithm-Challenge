// given a character,check if it represents an odd digit,an even digit or not a digit at all.

function characterParity(symbol) {
  const result = parseInt(symbol);

  return isNaN(result) ? "not a digit" : result % 2 === 0 ? "even" : "odd";
}

console.log(characterParity("5"));
