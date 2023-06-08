const letterPositions = function(sentence) {
  const result = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) { // iterating over the sentence
    if (result[sentence[i]]) { // checking if the letter (sentence[i]) already exists as a key in the result object
      result[sentence[i]].push(i); // adding the current index (i) to the existing array of indices for that letter
    } else {
      result[sentence[i]] = [i]; // creating a new key-value pair, with the letter as the key and an array containing the current index (i) as the value
    }
  }
  // console.log(result); // printing the result object for testing/verification
  return result;
};

module.exports = letterPositions;