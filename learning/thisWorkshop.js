let NewYork = {
  city: 'the best',
  work: 'plenty',
  teams: 4
};

let logTeamNumb = function() {
  return this.teams;
};
NewYork.log = logTeamNumb;

console.log(NewYork);
console.log(NewYork.log());
