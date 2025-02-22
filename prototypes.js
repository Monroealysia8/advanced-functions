"use strict"

function Animal(species, inside, maintenance){
  this.species = species;
  this.inside = inside;
  this.maintenance = maintenance;
}
const animal1 = new Animal("cat", true, "low");
console.log(animal1);

Animal.prototype.talk = function(){
    console.log("A " + this.species + " seems to be a good fit if you are looking to for an indoor pet that doesnt require alot of maintenance.")
}

animal1.talk();