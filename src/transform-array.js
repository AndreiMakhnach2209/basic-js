const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error(`'arr' parameter must be an instance of the Array!`);
  const controlSequences = new Array (
        discardNext = '--discard-next', //excludes the next element of the array from the transformed array.
        discardPrev = '--discard-prev', //excludes the previous element of the array from the transformed array.
        doubleNext = '--double-next', //duplicates the next element of the array in the transformed array.
        doublePrev = '--double-prev',//duplicates the previous element of the array in the transformed array.
  )
  const res = [];
  let isDeleted = false;

  arr.forEach((item, index) => {
    switch (item) {
      case discardNext:
        if (index + 1 <= arr.length && !controlSequences.includes(arr[index +1])){
          res.push(null);
          isDeleted = true
        }
        break;
      case discardPrev:
        if (index - 1 >= 0) {
          res.pop();
          res.push(null);
        }
        break;
      case doubleNext:
        if (index + 1 <= arr.length && !controlSequences.includes(arr[index +1]));
          res.push(arr[index + 1]);
        break;
      case doublePrev:
        if (index - 1 >= 0 && (res.at(-1) != null)) {
          res.push(arr[index - 1])
        }
        break;
      default:
        if (isDeleted) {
          res.push(null);
          isDeleted = false;
        }else{
          res.push(item);
        }
        break;
    }
  })
  return res.filter(item => item != null);

}

module.exports = {
  transform
};
