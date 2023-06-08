const assertObjectsEqual = require('../assertObjectsEqual');


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