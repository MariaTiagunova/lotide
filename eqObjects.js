const eqArrays = require('./eqArrays')

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1); //key arrays
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) { // check if key arrays have the same length (objects have the same number of keys)
    return false; // key arrays do not have the same length, exit with false
  }
  for (let key of keys1) { // loop over object1 keys
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) { // check if value of both arrays is an array
      if (!eqArrays(object1[key], object2[key])) { // check if arrays are equal
        return false; // arrays are not equal, exit with false
      }
    } else if (object1[key] !== object2[key]) { // check if primitive key-values pairs are equal
      return false; // not equal, exit with false
    }
  }
  return true; // objects are equal
};

module.exports = eqObjects;