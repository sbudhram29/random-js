const arr = [1, 2, 3, [4, 5, [6, 7]]];

const squared = arr => arr.map(item => (Array.isArray(item) ? squared(item) : item ** 2));

console.log(squared(arr));

const filter = arr => arr.filter(item => (Array.isArray(item) ? filter(item) : item > 2));

console.log(filter(arr));

const flatten = arr =>
  arr.reduce((p, c) => (Array.isArray(c) ? p.concat(flatten(c)) : p.concat(c)), []);

console.log(flatten(arr));

const wordToReverse = 'destruction';

const reverse = word =>
  word
    .split('')
    .reverse()
    .join('');

console.log(reverse(wordToReverse));
