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
// console.log(reverseString("Hello!"))

const newArrayFullOf = (value, numOfValue) => {
  const arr = Array(numOfValue);
  arr.fill(value, 0, numOfValue);
  return arr;
};
// console.log(newArrayFullOf(6, 6));

const insertIntoMiddle = (arr, value) => {
  insertLocation = Math.floor(arr.length / 2)
  arr.splice(insertLocation, 0, value)
  return arr
};
console.log(insertIntoMiddle([1, 2, 3, 4, 5], 6))


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
