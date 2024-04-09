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
// console.log(insertIntoMiddle([1, 2, 3, 4, 5], 6))


const deleteFromMiddle = (arr) => {
  arr.splice(Math.floor(arr.length / 2), 1)
  return arr
};
// console.log(deleteFromMiddle(['a', 'b', 'c', 'd']));
// console.log(deleteFromMiddle([1, 2, 3, 4, 5]));
// console.log(deleteFromMiddle([1, 2, 3]));
// console.log(deleteFromMiddle([]));

const isRightIndex = (arr, value, index) => {
  if (value === arr[index]) {
    return true
  } else {
    return false
  };
};
// console.log(isRightIndex([`a`, `b`, `c`, `d`, `e`], 'a', 0));

const roundAllNumsDown = (arr) => {
  let newArr = []
  for (const index of arr) {
    newArr.push(Math.floor(index));
  };
  return newArr
};
// console.log(roundAllNumsDown([1.1, 2.2, 3.3]));

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
