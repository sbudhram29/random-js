const palindrome = str => {
  return (
    str.toLowerCase() ===
    str
      .split('')
      .reverse()
      .join('')
  );
};

console.log(palindrome('ana'));
console.log(palindrome('monkey'));
console.log(palindrome('radar'));
console.log(palindrome('kiki'));
