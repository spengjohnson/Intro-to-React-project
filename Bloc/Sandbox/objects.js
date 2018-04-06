

/* ####Questions
>In your own words, what is a JavaScript object?

A: An object in JavaScript is something that contains properties and values. By using objects in JavaScript, you are sort of organizing the data or information that you have about that object.
While a random group of variables and numbers might seem unrelated by themselves, they might be related to an object. For example, you can say you have an object called "person". With that, you can
bundle up information within that object about that person, like name, age, sex, city, etc. Objects are ways in which to organize information and data.

>What is a property of a JavaScript object?

A: Going off of the example above about our person object, the properties are the specifics about that person. For example,
the name of the person could be Leroy, his age is 33, he is male, and he is living in Denver. Properties are the values of the keys of the object.
*/

/* ####Code
Declare a class expression called Clothes that takes 3 parameters in the constructor,
name, size, price and create a variable called shirt that is equal to a new instance of
Clothes with a name = Biker Jacket, size = medium and price = 20.*/

class Clothes {
  constructor(name, size, price){
    this.name = name;
    this.size = size;
    this.price = price;
  }
}
let shirt = new Clothes('Biker Jacket', 'medium', 20);
console.log(shirt);
