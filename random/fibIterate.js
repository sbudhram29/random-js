const fib = pos => {
  if (pos < 2) return pos;
  let last = 1;
  let slast = 0;
  let currentPos = 0;

  while (currentPos < pos) {
    temp = last;
    last = last + slast;
    slast = temp;
    currentPos++;
  }

  return last;
};

for (let i = 1; i < 100; i++) {
  console.log(fib(i));
}
