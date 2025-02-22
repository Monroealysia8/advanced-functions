"use strict";
/*Define a factory function for creating Person objects. 
Create an object using the factory function and log its properties.*/

function createPerson(name, age, isAdmin) {
  const person = { name: name, age: age, isAdmin: isAdmin };
  return person;
}
const person1 = createPerson("Sarah", 20, false);
const person2 = createPerson("James", 45, true);

console.log(person1);
console.log(person2);
