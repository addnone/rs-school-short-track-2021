/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new Error('Not implemented');
  const arr = Array.from(String(n));

  let max = 0;

  for (let idx = 0; idx < arr.length; idx++) {
    const newNum = Number(arr.slice(0, idx)
      .concat(arr.slice(idx + 1, arr.length))
      .reduce((prev, cur) => prev + cur, ''));

    max = newNum > max ? newNum : max;
  }

  return max;
}

module.exports = deleteDigit;
