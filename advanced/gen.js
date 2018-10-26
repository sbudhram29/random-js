function Generator(input) {
  let index = 0;

  return {
    next: function() {
      if (index < input.length) {
        index++;
        return input[index - 1];
      } else {
        return '';
      }
    }
  };
}

const generator = new Generator('Sean');

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
