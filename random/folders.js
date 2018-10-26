const routes = [
  'home',
  'home/user',
  'home/user/id',
  'home/videos',
  'home/videos/genre',
  'school/videos/genre',
  'school/videos/genre/horror',
  'school/work/math',
  'school/work/history'
];

const Routes = {};
let current;

for (let route of routes) {
  let arr = route.split('/');
  //set current to Routes ref
  current = Routes;
  for (let r of arr) {
    if (!current[r]) {
      //create new {} for key
      current[r] = {};
    }
    //pushes pointer to deeper nest
    current = current[r] || {};
  }
}
console.log(Routes);
