/** FEEDBACK: Great job! */
/* eslint-disable no-param-reassign */
const clearArr = (arr) => {
  arr.length = 0;
  return arr
};
// console.log(clearArr([1, 2, 3, 4]));

const getFirstItem = (array) => {
  value = array[0];
  return value;
};
// console.log(getFirstItem([1, 2, 3, 4]));
// console.log(getFirstItem(['a', 'b', 'c']));

module.exports = {
  clearArr,
  getFirstItem,
};
