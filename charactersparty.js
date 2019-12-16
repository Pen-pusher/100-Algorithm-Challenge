function characterParty(symbol) {
  const result = parseInt(symbol);

  return isNAn(result) ? "not a digit" : result % 2 === 0 ? "even" : "odd";
}

console.log(characterParty("5"));
