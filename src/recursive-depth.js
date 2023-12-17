const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
  //   const flatArr = arr.flat(Infinity);
  //   console.debug(arr);
  //   let count = 1;
  //   if (JSON.stringify(flatArr) === JSON.stringify(arr)) return 1;
  //   while (JSON.stringify(flatArr) != JSON.stringify(arr.flat(count))) {
  //     count++;
  //   }
  //   return count + 1;
  // }
   return arr.reduce((acc, item) => {
    let count = 1;
      if (Array.isArray(item)){
        count = 1 + this.calculateDepth(item);
      }
      if(acc > count) return acc;
      else return count;
    }, 1)
  }
}

module.exports = {
  DepthCalculator
};
