// given an array of integers, for each position i, search among the previous positions for the last (from the left) position that contains a smaller
// store this value at position i in the answer.if no such value can be found, store-1 instead.

function arrayPreviousLess(items) {
  const lessThanList = [];

  for (let i = items.length - 1; i >= 0; i--) {
    for (let j = i; j >= 0; j--) {
      if (items[i] > items[j]) {
        lessThanList.unshift(items[j]);
        break;
      } else if (j === 0) {
        lessThanList.unshift(-1);
      }
    }
  }
  return lessThanList;
}
console.log(arrayPreviousLess([3, 5, 2, 4, 5]));
