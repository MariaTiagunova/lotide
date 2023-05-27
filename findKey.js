const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = (object, callback) => { // Implement the function findKey which takes in an object and a callback.
  for (let key of Object.keys(object)) { // scan the object
    console.log(object);
    if (callback(object[key])) { // return the key which callback returns a truthy value
      return key;
    }
  }
  return undefined; // no key is found, it returns undefined
};

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");

assertEqual(findKey({
  "Test Object": { stars: 5 },
  "Test Object2": { stars: 7 }
}, x => x.stars === 5), "Test Object");