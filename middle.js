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
assertArraysEqual((middle([1, 2, 3])),[2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]);
assertArraysEqual(middle([1, 2, 3, 4]),[2, 3]);
assertArraysEqual(middle(['a','b','c','d','e','f','g','h']),['d','e']);
