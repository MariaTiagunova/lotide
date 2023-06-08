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

module.exports = countOnly;