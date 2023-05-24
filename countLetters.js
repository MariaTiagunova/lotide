const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};
// The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.
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

// Test
// console.log(countLetters('lighthouse in the house'));
// console.log(countLetters('Lighthouse Labs'));
assertEqual(countLetters('lighthouse in the house')["e"], 3);
assertEqual(countLetters('Lighthouse Labs')["l"], undefined);
assertEqual(countLetters('Lighthouse Labs')["L"], 2);
