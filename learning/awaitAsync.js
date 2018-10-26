const getName = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve('Sean');
    }, 1000);
  });

let slow = async () => {
  console.log('calling');
  let name = await getName();
  console.log(name);
};

console.log(slow());
