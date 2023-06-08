const assertEqual = require('../assertEqual');
const findKeyByValue = require('../findKeyByValue');

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const tvShows = {
  drama: 'Breaking Bad',
  comedy: 'Friends',
  sciFi: 'Stranger Things',
  thriller: 'Black Mirror'
};

assertEqual(findKeyByValue(tvShows, 'Friends'), 'comedy');
assertEqual(findKeyByValue(tvShows, 'Breaking Bad'), 'drama');
assertEqual(findKeyByValue(tvShows, 'Game of Thrones'), undefined);