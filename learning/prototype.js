const TeslaModelS = function() {
  this.numberWheels = 4;
  this.manufactureer = 'Telsa';
  this.make = 'Model S';
};

let myTesla = new TeslaModelS();

TeslaModelS.prototype.go = function() {
  console.log('going');
};

TeslaModelS.prototype.stop = function() {
  console.log('stopped');
};

console.log(myTesla);
myTesla.go();
myTesla.stop();
