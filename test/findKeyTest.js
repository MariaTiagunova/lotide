const assertEqual = require('../assertEqual');
const findKey = require('../findKey');

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