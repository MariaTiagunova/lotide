const map = function(array, callback) { // takes an array and a callback function as arguments
  const results = [];
  for (let item of array) { // iterates over each item in the array and applies the callback function to transform each item
    results.push(callback(item)); // The transformed items are then collected in a new array
  }
  return results;
};

module.exports = map;

