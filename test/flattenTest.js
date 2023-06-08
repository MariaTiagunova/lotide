const assertArraysEqual = require('../assertArraysEqual');
const flatten = require('../flatten');


assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([[5, 4,], [3, 2], 1, [0]]), [5, 4, 3, 2, 1, 0]);
assertArraysEqual(flatten(['paints', 'brushes', ['canvases', 'notebooks'], 'pencils', ['erasers']]), ['paints', 'brushes', 'canvases', 'notebooks', 'pencils', 'erasers']);