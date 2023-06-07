// test/assertArraysEqualTest.js

const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3], [1, 2, 3]); // pass
assertArraysEqual([1, 2, 3], [3, 2, 1]); // fail
assertArraysEqual(['cat', 'dog', 'parrot'], ['cat', 'dog', 'parrot']); // pass
assertArraysEqual([1, 3, 3], [1, 2, 3]); // fail
assertArraysEqual([1, 2, 'meow'], [1, 2, 3]); // fail
assertArraysEqual([1], [1, 2, 3]); // fail

