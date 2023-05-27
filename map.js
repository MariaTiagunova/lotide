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

const assertArraysEqual = (actual, expected) => {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const map = function(array, callback) { // takes an array and a callback function as arguments
  const results = []; 
  for (let item of array) { // iterates over each item in the array and applies the callback function to transform each item
   results.push(callback(item)); // The transformed items are then collected in a new array
  }
  return results;
}

const words = ["ground", "control", "to", "major", "tom"];

// Test case 1
assertArraysEqual(map(words, word => word.length), [6, 7, 2, 5, 3]);

// Test case 2
assertArraysEqual(map(words, word => word.toUpperCase()), ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);

// Test case 3
const numbers = [5, 10, 15, 20];
assertArraysEqual(map(numbers, number => number * 2), [10, 20, 30, 40]);

