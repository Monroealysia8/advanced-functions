"use strict";

/*Constructor Function, Instantial Person, and log properties*/
function Person(name, age, isAdmin) {
  this.name = name;
  this.age = age;
  this.isAdmin = isAdmin;
}

const person1 = new Person("Sarah", 54, true);

console.log(person1.name);
console.log(person1.age);
console.log(person1.isAdmin);


