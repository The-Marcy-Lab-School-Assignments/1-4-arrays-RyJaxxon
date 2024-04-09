const addToFrontOrBack = (arr, value, isFront) => {
  if (isFront === false) {
    arr.push(value);
  } else {
    arr.unshift(value);
  }
  return arr;
};
// console.log(addToFrontOrBack([1, 2, 3, 4], 5, true))
// console.log(addToFrontOrBack([1, 2, 3, 4], 5, false))

const reverseString = (str) => {
  arr = [];
  for (const char of str) {
    arr.push(char)
  }
  return arr.reverse().join("");
};
console.log(reverseString("Hello!"))

// const newArrayFullOf = (value, numOfValue) => {
//   let arr = []
//   for (let i = 1; i <= numOfValue; i++) {
//     arr.push(value)
//   }
//   return arr
// };
// console.log(newArrayFullOf(1, 5));

const insertIntoMiddle = () => {
};

const deleteFromMiddle = () => {
};

const isRightIndex = () => {
};

const roundAllNumsDown = () => {
};

const getAllYCoordinates = () => {
};

module.exports = {
  addToFrontOrBack,
  reverseString,
  // newArrayFullOf,
  insertIntoMiddle,
  deleteFromMiddle,
  isRightIndex,
  roundAllNumsDown,
  getAllYCoordinates,
};
