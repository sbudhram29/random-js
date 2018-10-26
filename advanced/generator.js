const data = [
  {
    name: 'Max'
  },
  {
    name: 'Milo'
  },
  {
    name: 'Felix'
  },
  {
    name: 'Tom'
  }
];

function* someCat() {
  let i = 0;
  while (i < data.length) {
    yield data[i];
    i++;
  }
}

const catIterator = someCat();

for (cat of catIterator) {
  console.log(cat.name);
}

data.forEach(cat => console.log(cat.name));

function* generator(str) {
  let i = 0;
  while (i < str.length) {
    yield str[i];
    i++;
  }
}

const strIterator = generator('hello world');

for (let letter of strIterator) {
  console.log(letter);
}
