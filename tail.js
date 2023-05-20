const tail = function(array) {
  return array.slice(1);
};

const assertEqual = function(actual, expected) {
  let isEqual = true;

  if (!Array.isArray(actual)) {
    isEqual = actual === expected; // isEqual = 5 === 3;

  } else {
    for (let i = 0; i < actual.length - 1; i++) {
      isEqual = actual[i] === expected[i];
      if (!isEqual) {
        break;
      }
    }
  }


  if (isEqual) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const result = tail(["Hello", "Lighthouse", "Labs"]); // Lighthouse, Labs, 2
const res = tail(["Hello"]);
assertEqual(res.length, 0);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result.length, 3); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[0], "LighthouseZ"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs");