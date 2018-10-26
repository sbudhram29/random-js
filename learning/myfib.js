const memo = { 0: 0, 1: 1, 2: 1 };
const fib = (n, memo) => {
  if (n < 0) {
    return 0;
  }
  return !isNaN(memo[n]) ? memo[n] : (memo[n] = fib(n - 1, memo) + fib(n - 2, memo));
};

for (let i = -1; i <= 40; i++) {
  console.log(`Number ${i} ${fib(i, memo)}`);
}
