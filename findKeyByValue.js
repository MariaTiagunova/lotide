const findKeyByValue = (object, value) => { // implement the function findKeyByValue which takes in an object and a value
  for (let key of Object.keys(object)) { // scan the object
    if (object[key] === value) { // return the first key which contains the given value
      return key;
    }
  }
  return undefined; // no key with that given value is found, it returns undefined
};

module.exports = findKeyByValue;