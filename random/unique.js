const isUnique = str => {
  let seen = [];
  for (let letter of str) {
    if (seen.includes(letter)) {
      return false;
    }
    seen.push(letter);
  }
  return true;
};

console.log(isUnique('sean'));
console.log(isUnique('apple'));
console.log(isUnique('cherry'));
console.log(isUnique('pinetar'));
