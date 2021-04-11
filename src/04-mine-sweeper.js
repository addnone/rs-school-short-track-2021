/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const newMatrix = [];
  for (let row = 0; row < matrix.length; row++) {
    const matrixOX = [];
    for (let col = 0; col < matrix[row].length; col++) {
      let position = 0;
      if (matrix[row - 1] && matrix[row - 1][col - 1]) position++;
      if (matrix[row - 1] && matrix[row - 1][col]) position++;
      if (matrix[row - 1] && matrix[row - 1][col + 1]) position++;
      if (matrix[row][col - 1]) position++;
      if (matrix[row][col + 1]) position++;
      if (matrix[row + 1] && matrix[row + 1][col - 1]) position++;
      if (matrix[row + 1] && matrix[row + 1][col]) position++;
      if (matrix[row + 1] && matrix[row + 1][col + 1]) position++;
      matrixOX.push(position);
    }
    newMatrix.push(matrixOX);
  }
  return newMatrix;
}

module.exports = minesweeper;
