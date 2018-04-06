/*Write a function called even that accepts a single number as an argument and returns
true if the number is even and false if the number is odd.*/


function Even(num) {
  if (num % 2 === 0) {
    return true;
}
  else {
  return false;
  }
}


Even(55);

/*Write a function called squared that accepts a single number as an argument
and returns the perfect square of a number. So squared(5) would return 25 and
squared(3) will return 9 */

function Squared(num) {
  return (num ** 2)
}

Squared(5); //25

/*Write a function called food, that accepts no arguments and returns an array
of your 3 favorite foods.*/

function Food () {
  return ["sushi", "pizza", "nachos"]
}

/*Write a function called menu, that accepts no arguments and returns an object
of your 3 favorite foods with the name of the foods as keys and the price of
each item as the values.*/

function menu() {
  var food = {
    sushi: 15,
    pizza : 20,  
    nachos: 12,
  }
 return food;
}
