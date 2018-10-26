class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get getAge() {
    return this.age;
  }

  get getName() {
    return this.name;
  }
}

const sean = new Person('Sean', 35);

console.log(`hi ${sean.name} welcome year ${sean.age}`);
