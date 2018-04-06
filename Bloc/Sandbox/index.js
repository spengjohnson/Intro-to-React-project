//1. Explain what a variable is and why we use them.
/*


//2. What is the DOM?
/*It is the Document Object Model.


//3. Name and describe how to use at least two CSS selectors.
/*There are class selectors and there are id selectors. Class selectors
are for multiple objects. You can label all of these with the same class
and use them to select a group of objects. The ID selector is the most
specific and is only used to identify ONE item. It cannot be used on any other
item in the code.


//4. Name 3 git commands and explain what you use them for.
git status will tell you what the status is of your current file or folder.



5. What is the difference between = and == in Javascript?
A. == is redundant, only ever use =

B. = cares about type, == doesn't

C. = looks at the value, == looks at the type

D. = is used for assigning value and == is used for checking equality

E. = only assigns value, == assigns value and type

6. In the HTML snippet below, identify what the element is, explain what the attribute means, and describe how the final product will look and act:
<button onclick="alert('Hello, world!')">Say hello</button>
7. In the Javascript code below, what will be printed in the output?
var function1 = function(x) {
  return "hello " + function2(x);
}

console.log(function1("world"));

var function2 = function(x) {
  return "to all the " + x;
}
A. "hello to all the world"

B. "worldhello to all the "

C. "to all the hello world"

D. "to all the world hello"

E. It will throw an error

8. In the Javascript below, what will be printed in the output?
function fancyFunction (f) {
  if (f < 0) {
    f += 5;
  }

  return simpleFunction(f);
}

function simpleFunction (g) {
  return 5 - g;
}

console.log(fancyFunction(-2));
A. 0

B. 1

C. 2

D. 5

E. It will throw an error

9. In the Javascript below, what will be printed in the output?
var monkeys = ["Jimmy", "Bart", "Pedro", "Steve"];

var i = 0;

console.log("Somebody stole all my bananas!");

while (i < monkeys.length) {
  console.log("Was it you, " + monkeys[i] + "?");
  i++;
}

console.log("I should buy fewer monkeys and more bananas.");
10. Complete the Javascript code:
// Write a function "biggerOfTwo" above this line that takes
//  in two arguments, both of which are numbers, and returns
//  the larger of the two numbers.

// This should log 5:
console.log(biggerOfTwo(2, 5));

// This should log 3:
console.log(biggerOfTwo(3, 3));

// And this should log 0:
console.log(biggerOfTwo(0, -8));
11. Complete the Javascript code:
var customers = [
  {firstName: "Mike", lastName: "Stowe", title: "Mr."},
  {firstName: "Jack", lastName: "Sparrow", title: "Captain"},
  {firstName: "Euphegenia", lastName: "Doubtfire", title: "Mrs."},
  {firstName: "Obi-Wan", lastName: "Kenobi", title: "Jedi Master"}
];

// Write code after these comments that will print a
//  unique greeting on a new line for each customer in the list.
// The greeting should take the following format:
//  "Hello <title> <last name>!"
// e.g, "Hello Mr. Stowe!"
12. Complete the Javascript code:
// Write a function "foo" above this line that takes
//  in an array of strings and returns the longest string.

// This should log "longest":
console.log(foo(["Give", "me", "the", "longest", "string"]));

// This should log "Pretentiously":
console.log(foo(["Pretentiously", "I", "started", "this", "sentence"]));

// This should log "already":
console.log(foo(["A", "B", "C", "D", "E", "F", "bored", "already"]));
