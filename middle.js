const middle = function(array) {
  const length = array.length;
  const middleIndex = Math.floor(length / 2); // to round down the divided length
  if (length <= 2) {
    return [];
  }
  if (length % 2 === 0) {
    return array.slice(middleIndex - 1, middleIndex + 1); // slice(start excluded, end included
  } else {
    return [array[middleIndex]];
  }
};

module.exports = middle;