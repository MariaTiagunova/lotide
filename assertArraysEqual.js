const eqArrays = require('./eqArrays');

const assertArraysEqual = (actual, expected) => {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Arrays are equal: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Arrays are not equal: ${actual} !== ${expected}`);
  }
};

module.exports = assertArraysEqual;