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

const someDragons = {
  [Symbol.iterator]: function() {
    let iterations = -1;
    const iterator = {
      next: () => {
        iterations++;
        if (iterations === 0) {
          return { value: 'my dragon', done: false };
        }
        if (iterations === 1) {
          return { value: 'your dragon', done: false };
        }
        return { done: true };
      }
    };
    return iterator;
  }
};

const catIterator = someCat();

for (cat of catIterator) {
  console.log(cat.name);
}
for (dragon of someDragons) {
  console.log(dragon);
}

function countDown(n) {
  if (n === 0) {
    return;
  }
  console.log(n);
  setTimeout(() => countDown(n - 1), 1000);
}

// countDown(20);

const animals = [
  {
    id: 'animal',
    parent: null
  },
  {
    id: 'dog',
    parent: 'animal'
  },
  {
    id: 'cat',
    parent: 'animal'
  },
  {
    id: 'pitbull',
    parent: 'dog'
  },
  {
    id: 'german',
    parent: 'dog'
  },
  {
    id: 'egyptian',
    parent: 'cat'
  },
  {
    id: 'chinese',
    parent: 'cat'
  }
];

const groupByParent = (categories, parent) => {
  let node = {};
  categories
    .filter(c => c.parent === parent)
    .forEach(c => (node[c.id] = groupByParent(categories, c.id)));

  return node;
};

console.log(groupByParent(animals, null));
