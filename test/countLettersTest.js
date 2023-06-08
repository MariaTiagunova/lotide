const assertEqual = require('../assertEqual');
const countLetters = require('../countLetters');

assertEqual(countLetters('lighthouse in the house')["e"], 3);
assertEqual(countLetters('Lighthouse Labs')["l"], undefined);
assertEqual(countLetters('Lighthouse Labs')["L"], 2);