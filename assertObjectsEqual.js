const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

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

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // import the util library to see more detailed object output to the console
  if (eqObjects(actual, expected)) {
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 2, a: 1 };
const obj3 = { a: 1, b: 2, c: 3 };
const obj4 = { a: 1, b: 2, c: [3, 4] };
const obj5 = { a: 1, b: 2, c: [3, 4] };
const obj6 = { a: 1, b: 2, c: [3, 5] };

assertObjectsEqual(obj1, obj2); // Should pass: Objects are equal
assertObjectsEqual(obj1, obj3); // Should fail: Objects are not equal
assertObjectsEqual(obj4, obj5); // Should pass: Objects are equal
assertObjectsEqual(obj4, obj6); // Should fail: Objects are not equal