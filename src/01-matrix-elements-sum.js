/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  // throw new Error('Not implemented');
  // const filter = (prevArr, curArr) =>
  // curArr.filter((el, idx) => prevArr === undefined || prevArr[idx - 1] > 0);
  function filter(prevArr, curArr) {
    return curArr.filter((el, idx) => prevArr === undefined || prevArr[idx] > 0);
  }
  const sum = (arr) => arr.reduce((prev, cur) => prev + cur, 0);
  const res = sum(matrix.map((el, idx) => sum(filter(matrix[idx - 1], el))));
  return res;
}

module.exports = getMatrixElementsSum;
