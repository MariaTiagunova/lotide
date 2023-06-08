const without = (sourceArr, itemsToRemove) => {
  let result = [];
  for (let i = 0; i < sourceArr.length; i++) {
    if (!itemsToRemove.includes(sourceArr[i])) {
      result.push(sourceArr[i]);
    }
  }
  return result;
};

module.exports = without;