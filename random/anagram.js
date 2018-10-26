const anagram = (word_01, word_02) => {
  return (
    word_01
      .split('')
      .sort()
      .join('') ===
    word_02
      .split('')
      .sort()
      .join('')
  );
};

console.log(anagram('Sean', 'Anes'));
console.log(anagram('sean', 'anes'));
