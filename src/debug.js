/* eslint-disable no-param-reassign */
const clearArr = (arr) => {
  arr.length = 0;
  return arr
};
console.log(clearArr([1, 2, 3, 4]));

const getFirstItem = (array) => {
  return array.shift();
};

module.exports = {
  clearArr,
  getFirstItem,
};
