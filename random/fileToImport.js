const sayHello = (name = 'World') => {
  console.log(`Hello ${name}`);
};

module.exports.hello = sayHello;
