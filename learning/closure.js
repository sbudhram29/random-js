let counter = (function() {
  let count = 0;
  return () => {
    count += 1;
    return count;
  };
})();

console.log(counter());
console.log(counter());
console.log(counter());

function makeCounter() {
  let count = 0;
  function addOne() {
    count++;
    return count;
  }
  return { addOne: addOne };
}

const BirdCounter = new makeCounter();
const DogCounter = new makeCounter();

console.log(BirdCounter.addOne());
console.log(BirdCounter.addOne());
console.log(BirdCounter.addOne());
console.log(DogCounter.addOne());
console.log(DogCounter.addOne());
