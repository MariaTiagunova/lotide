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

assertArraysEqual([1, 2, 3], [1, 2, 3]); // pass
assertArraysEqual([1, 2, 3], [3, 2, 1]); // fail
assertArraysEqual(['cat', 'dog', 'parrot'], ['cat', 'dog', 'parrot']); //pass
assertArraysEqual([1, 3, 3], [1, 2, 3]); // fail
assertArraysEqual([1, 2, 'meow'], [1, 2, 3]); // fail
assertArraysEqual([1], [1, 2, 3]); //fail