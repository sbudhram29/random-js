let memo = {};

function fib(n, memo) {
  if (n <= 0) {
    return 0;
  }

  if (n <= 2) return 1;

  return memo[n] ? memo[n] : (memo[n] = fib(n - 1, memo) + fib(n - 2, memo));
}

for (let i = 0; i <= 100; i++) {
  console.log(i + ': ' + fib(i, memo));
}
