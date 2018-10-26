const counter = function() {
  let count = 0;

  return {
    addOne: function() {
      count += 1;
      return count;
    },
    subOne: function() {
      count -= 1;
      return count;
    }
  };
};

const birdCounter = new counter();
const dogCounter = new counter();

console.log(birdCounter.addOne());
console.log(birdCounter.addOne());
console.log(dogCounter.addOne());
console.log(birdCounter.addOne());
console.log(birdCounter.addOne());
console.log(dogCounter.addOne());
