
// function sum(fromN, toN) {
//   // Sum all the values from fromN up to toN
//   if (toN === fromN) {
//     return fromN;
//   }

//   return toN + sum(fromN, (toN - 1))
// }

function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  if (fromN === toN) {
    return toN;
  }

  return fromN + sum((fromN + 1), toN)
}

console.log(sum(3, 7));

module.exports = sum;
