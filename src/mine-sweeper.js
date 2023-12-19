const { NotImplementedError } = require('../extensions/index.js');

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
  const res = [];
  matrix.forEach((row, rowIndex) => {
    res[rowIndex] = [];
    row.forEach((item, coloumnIndex) => {
      let itemRes = 0;
      for(let i = -1; i <= 1; i ++) {
        for(let j = -1; j <= 1; j++) {
          if(rowIndex + i >= 0 && coloumnIndex + j >= 0 && rowIndex + i < matrix.length && coloumnIndex + j < matrix[0].length)
            if ((i || j) && matrix[rowIndex + i][coloumnIndex + j]) itemRes++;
        }
      }
      res[rowIndex][coloumnIndex] = itemRes;
    })
  });
  return res;
}

module.exports = {
  minesweeper
};
