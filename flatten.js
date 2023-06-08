const flatten = (arr) => {
  let flattenedArr = [];
  for (let element of arr) {
    if (Array.isArray(element)) {
      flattenedArr = flattenedArr.concat(flatten(element));
    } else {
      flattenedArr.push(element);
    }
  }
  
  return flattenedArr;
};

module.exports = flatten;