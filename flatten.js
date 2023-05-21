const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ Arrays are equal: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌ Arrays are not equal: ${arr1} !== ${arr2}`);
  }
};

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


assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([[5, 4,], [3, 2], 1, [0]]), [5, 4, 3, 2, 1, 0]);
assertArraysEqual(flatten(['paints', 'brushes', ['canvases', 'notebooks'], 'pencils', ['erasers']]), ['paints', 'brushes', 'canvases', 'notebooks', 'pencils', 'erasers']);