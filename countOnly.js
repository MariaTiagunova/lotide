const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  // The function should report back how many instances of each string were found in the allItems array of strings.
  const results = {};

  for (const item of allItems) { // loop over all the items in the array and print them to the console
    // console.log(item);
    if (itemsToCount[item] === true) { //count only itemsToCount
      if (results[item]) { // if item is defined item++, if undefined define = 1
        results[item]++;
      } else {
        results[item] = 1;
      }
      // results[item] ? results[item]++ : results[item] = 1;
    }
  }
  return results;
};


//Test
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);