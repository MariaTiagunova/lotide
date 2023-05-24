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


const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for(let i = 0; i < sentence.length; i++) {
    
  }
  return results;
};

//Test
assertArraysEqual(letterPositions("hello").e, [1]);
