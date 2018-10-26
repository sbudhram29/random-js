let folders = ['/home/user/name', '/home/user/age', '/home/school/name', '/home/school/location'];

const root = {};

const addToRoot = item => {
  root[item] = item;
};

for (let f of folders) {
  f = f.substring(1);
  for (let dir of f.split('/')) {
    addToRoot(dir);
  }
}

console.log(root);
/*
root = {
    home: [
        {school: [{name, location}]},
        {user: [{name, age}]}
    ]
}

*/
