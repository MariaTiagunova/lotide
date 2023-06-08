// The function should take in a sentence (as a string) and then 
// return a count of each of the letters in that sentence.
const countLetters = (sentence) => {
  let result = {};
  for (let letter of sentence) {
    if (letter !== " ") { //excludes spaces
      if (result[letter]) {
        result[letter]++;
      } else {
        result[letter] = 1;
      }
    }
  }
  return result;
};

module.exports = countLetters;
