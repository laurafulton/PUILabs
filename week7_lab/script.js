function Dog(name, age) {
  this.name = name;
  this.age = age;
  this.type = "Dog";
  this.image = "peach.jpg";
}

function Cat(name, age) {
  this.name = name;
  this.age = age;
  this.type = "Cat";
  this.image = "claws.jpg";
}

function Panda(name, age) {
  this.name = name;
  this.age = age;
  this.type = "Panda";
  this.image = "panda.jpg";
}

var animals = [new Dog(), new Cat(), new Panda()];
var names = ["Peaches","Puddles","Cheddar", "Scratches", "Nutella", "Snuggles", "Paws"];


/*Functions*/

function getRandomIndex(maxIndex){
	return Math.floor(Math.random() * maxIndex);

}

function generateRandomAnimal(){
	var randomIdx = getRandomIndex(animals.length);
	var randomAnimal = animals[randomIdx];


	  if (randomAnimal instanceof Dog) 
	  {
	    return new Dog(generateRandomName(), generateRandomAge());
	  } 
	  else if (randomAnimal instanceof Cat) 
	  {
	    return new Cat(generateRandomName(), generateRandomAge());
	  } 
	  else if (randomAnimal instanceof Panda) 
	  {
	    return new Panda(generateRandomName(), generateRandomAge());
	  }
	}

}


function generateRandomName(){

	var randomIdx = getRandomIndex(names.length);
	return names[randomIdx];

}


function generateRandomAge(){
	var randIdx = generateRandomIndex(10);
	return randIdx;
}


$(document).ready(function() {

  // generate a random animal when the document opens
  var animal = generateRandomAnimal();
  // update the page based on the animal properties
  $("#animal-properties").text(animal.name + "  " + animal.age + "years old");
  $("#animal-img").attr("src", animal.image);

});

