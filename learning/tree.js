let folders = [
  'account',
  'account/orders',
  'account/orders/id',
  'account/profile',
  'account/profile/edit',
  'drugs',
  'drugs/lipitor',
  'drugs/lipitor/usage',
  'drugs/lipitor/warnings',
  'drugs/xanax',
  'drugs/xanax/usage',
  'drugs/xanax/warnings'
];

const root = new Map();

const addToRoot = (item, root) => {
  if (!root.has(item)) {
    let value = new Map();
    root.set(item, value);
  }
  root = root.get(item);
  return root;
};

for (let f of folders) {
  let current = root;
  for (let dir of f.split('/')) {
    current = addToRoot(dir, current);
  }
}

// console.log(root);

function printKeys(root, delimiter) {
  root.forEach((value, key) => {
    console.log(delimiter + key);
    if (value.constructor === Map) {
      printKeys(value, ' ' + delimiter);
    }
  });
}

printKeys(root, '- ');

console.log(root);
