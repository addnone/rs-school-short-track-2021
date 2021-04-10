/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const filtered = arr
    .filter((el) => el !== -1)
    .sort((a, b) => a - b)
    .reverse();
  if (filtered.length === 0) {
    return arr;
  }

  const newArr = [];

  arr.forEach((el) => {
    if (el === -1) {
      newArr.push(-1);
    } else {
      newArr.push(filtered.pop());
    }
  });

  return newArr;
}

module.exports = sortByHeight;
