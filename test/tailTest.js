// test/tailTest.js

const tail = require('../tail');
const assertEqual = require('../assertEqual');


// TEST CODE
const result = tail(["Hello", "Lighthouse", "Labs"]); // Lighthouse, Labs, 2
const res = tail(["Hello"]);

assertEqual(res.length, 0);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result.length, 3); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[0], "LighthouseZ"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs");