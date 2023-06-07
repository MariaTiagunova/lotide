// test/eqArraysTest.js

const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// TEST CODE
assertEqual(eqArrays([14, 13, 5], ['14', '13', '5']), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), false);
assertEqual(eqArrays(['a', 'b', 'c'], ['a', 'b', 'c']), true);
assertEqual(eqArrays(['a', 'b', 'c'], ['a', 'b']), false);