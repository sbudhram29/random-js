(function() {
  var a = (b = 3);
})();

console.log('a defined? ' + (typeof a !== 'undefined'));
console.log('b defined? ' + (typeof b !== 'undefined'));

let arr = [1, 2, 3];

console.log(typeof arr);

var myObject = {
  foo: 'bar',
  func: function() {
    var self = this;
    console.log('outer func:  this.foo = ' + this.foo);
    console.log('outer func:  self.foo = ' + self.foo);
    (function() {
      console.log('inner func:  this.foo = ' + this.foo);
      console.log('inner func:  self.foo = ' + self.foo);
    })();
  }
};
myObject.func();

console.log(0.1 + 0.2);
console.log(0.1 + 0.2 == 0.3);

const isPalindrome = str =>
  str ===
  str
    .split('')
    .reverse()
    .join('');

console.log(isPalindrome('ana'));
console.log(isPalindrome('anand'));

const sum = x => y => x + y;
console.log(sum(5)(5));

let d = {};

let farm = ['zebra', 'horse'];
farm.forEach(function(k) {
  d[k] = undefined;
});
console.log(d);

const fib = num => {
  if (num === 1) {
    return 1;
  }
  if (num === 2) {
    return 1;
  }

  return fib(num - 1) + fib(num - 2);
};

for (let i = 1; i <= 10; i++) {
  console.log(fib(i));
}

var a = {},
  b = {
    key: 'b'
  },
  c = {
    key: 'c'
  };

a[b] = 123;
a[c] = 456;

console.log(a[b]);

console.log(
  (function f(n) {
    return n > 1 ? n * f(n - 1) : n;
  })(10)
);
