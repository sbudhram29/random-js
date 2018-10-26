const charCount = str => {
  //   str = str.toLowerCase();
  str = str.replace(/[^a-zA-z]/, '');
  const count = {};

  for (let char of str) {
    count[char] = count[char] ? char[char] + 1 : 1;
  }
  return count;
};

console.log(charCount('Sean'));
console.log(charCount('Apple'));
console.log(charCount('Apple Candy'));
