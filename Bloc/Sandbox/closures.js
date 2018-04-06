What does "lexical scope" mean in Javascript?

A: Lexical scope refers to the variables that are defined within a function. The variable that is defined within a function can only be referenced within that function, or block of code.

What is an advantage of a programming language that uses lexical scoping?

A: When you are using lexical scoping, you are basically creating "bubbles" of data that you can utilize. You can create separate "bubbles" depending on what your needs are (closures).

What is a closure?

A: A closure is basically a function with preserved data in it. A function can be declared within another function, where the inner function is recreated each time the outer function is called. Any function that uses a variable outside of its scope is a closure, so the inner function accessed outside of the function- if this is the case, then it is a closure.

What would be a use case of a closure?

A: I think use of a closure would be useful for music notes. Recalling an example I reviewed, you can make a closure/function that has 2 DOM elements, with 2 different timers running at different intervals. One could be incremeting up by 1 every 5 seconds, while the other is incrementing up every 2 seconds. In terms of music notes, I could see closures being very useful as the timing of notes in a song can be very important.

####code

function makeHuman() {
	let name = "Cara";

    return function() {
		console.log("Hey there, " + name);
    };
}
let name = "Jack";
let person = makeHuman();
person(); //Hey there, Cara

console.log(name); //Jack
