# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @maria-tia/lotide`

**Require it:**

`const _ = require('@maria-tia/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: takes in an array and returns the first element in the array;
* `tail(array)`: takes in an array returns everything except the first element of the array;
* `middle(array)`: takes in an array and returns middle most element of the array;
* `assertEqual(value1, value2)`: takes in 2 values and returns true if they are equal and false otherwise; 
* `eqArrays(arr1, arr2)`: takes in 2 arrays and returns true if the arrays are equal and false otherwise;
* `assertArraysEqual(arr1, arr2)`: prints an appropriate message after comparing the two arrays;
* `without(sourceArr, itemsToRemove)`: takes in a source array and an itemsToRemove arrays and returns only the items from the source array that are not in the itemsToRemove array.,
* `flatten(arr)`: takes in an array that contains elements including nested array of elements and returns a flattened version of the array;
* `countOnly(allItems, itemsToCount)`: takes in a collection of items and returns a specific subset of those items;
* `countLetters(sentence)`: takes in a sentence and returns a count of each of the letters in the sentence;
* `letterPositions(sentence)`: takes in a string and returns all indices of letter positions in the string;
* `findKeyByValue(object, value)`: takes in an object and a value and returns the first key that corresponds to that value;
* `eqObjects(obj1, obj2)`: takes in 2 objects and return true if they are equal and false otherwise;
* `assertObjectsEqual(obj1, obj2)`: takes in 2 objects and returns true if they are equal and false otherwise;
* `map(array, callback)`: takes in an array and a callback and returns a new array based on the results of the callback on each item in the array;
* `takeUntil(array, callback)`: takes in an array and callback and returns a slice of the array based on the criteria specified in the callback;
* `findKey(object, callback)`: takes in an object and callback and returns the first key that meets the criteria specified in callback;