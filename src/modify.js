/** FEEDBACK: Great job using map! */
const uppercaseAll = (...words) => {
  return words.map(word => word.toUpperCase())
};
console.log(uppercaseAll('hello', 'my', 'name', 'is', 'bob'))

const destructureCoordinates = (coordinates) => {
  const [x, y] = coordinates
  return `X is: ${x}, Y is: ${y}`; // no touching this line!
};

module.exports = {
  uppercaseAll,
  destructureCoordinates,
};
