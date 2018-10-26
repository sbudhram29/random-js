function fib(n) {
  //set defaults
  if (n < 1) return 0;
  if (n < 2) return 1;

  //return results
  return fib(n - 1) + fib(n - 2);
}

for (let n = 0; n <= 33; n++) {
  console.log(fib(n));
}
console.log(fib(0));
