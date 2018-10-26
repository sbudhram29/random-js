const createBase = num => {
  //returns a function with num predefined
  //on base creation
  return n => n + num;
};

const baseSix = createBase(6);

console.log(baseSix(10));
