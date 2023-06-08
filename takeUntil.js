const takeUntil = function(array, callback) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) { // Check if the callback returns a truthy value for the current element
      return result; // If true, return the result array
    }
    result.push(array[i]); // If false, push the element to the result array
  }
  return result;
};

module.exports = takeUntil;