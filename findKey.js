const findKey = (object, callback) => { // Implement the function findKey which takes in an object and a callback.
  for (let key of Object.keys(object)) { // scan the object
    console.log(object);
    if (callback(object[key])) { // return the key which callback returns a truthy value
      return key;
    }
  }
  return undefined; // no key is found, it returns undefined
};

module.exports = findKey;