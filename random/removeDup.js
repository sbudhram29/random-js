const removeDup = str => {
  let newString = [];
  for (index in str) {
    if (!str.substring(index).lastIndexOf(str[index])) {
      newString.push(str[index]);
    }
  }
  return newString.join('');
};

console.log(removeDup('apple'));
console.log(removeDup('aaa'));
console.log(removeDup('mississippi'));
console.log(removeDup('new york'));
console.log(removeDup('title'));

console.log('Hello World'.replace(/\s/g, '%20'));
console.log('Hello World'.match(/[^a-l']/g).join(''));
