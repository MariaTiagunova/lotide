const assertArraysEqual = require('../assertArraysEqual');
const map = require('../map');

const words = ["ground", "control", "to", "major", "tom"];

// Test case 1
assertArraysEqual(map(words, word => word.length), [6, 7, 2, 5, 3]);

// Test case 2
assertArraysEqual(map(words, word => word.toUpperCase()), ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);

// Test case 3
const numbers = [5, 10, 15, 20];
assertArraysEqual(map(numbers, number => number * 2), [10, 20, 30, 40]);