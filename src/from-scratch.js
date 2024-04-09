const addToFrontOrBack = (arr, value, isFront) => {
  if (isFront === false) {
    arr.push(value);
  } else {
    arr.unshift(value);
  }
  return arr;
};
console.log(addToFrontOrBack([1, 2, 3, 4], 5, true))
console.log(addToFrontOrBack([1, 2, 3, 4], 5, false))

const reverseString = () => {
};

const newArrayFullOf = () => {
};

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
  newArrayFullOf,
  insertIntoMiddle,
  deleteFromMiddle,
  isRightIndex,
  roundAllNumsDown,
  getAllYCoordinates,
};
