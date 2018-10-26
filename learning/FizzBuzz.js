for (let i = 1; i <= 100; i++) {
  let fizz = i % 3 === 0 ? 'Fizz' : '';
  let buzz = i % 5 === 0 ? 'Buzz' : '';

  console.log(i + ': ' + fizz + buzz);
}
