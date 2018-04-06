//Recursions

/* ####Questions

>What is recursion?

A: Recursion is the ability to call a function within itself. A recursion
will iterate over an operation by having a function call itself over and over again
until it arrives at some result.

>Why would a programmer want to write a recursive function instead of an iterative one?

A: A recursive function is not very efficient in terms of space, but a programmer would
like to use one over an iterative function because you're able to solve a large problem by
breaking it up into smaller pieces, making it easier to solve. This could be helpful if
you have a big problem to solve and you're not sure where to start.

>What is a base case and what is its role in a recursive function?

A: A base case is a specific condition that causes the function to return a value
instead of calling itself over and over again, as it does in a recursion. This  needs to
exist in order to prevent the recursive function from going indefinitely. A base case is the
answer to a problem at the lowest possible level.

>What would happen if a programmer did not utilize a base case within a recursive function?

A: If there is no base case, then the function will keep running. You cannot have
a recursive function without a base case without resulting in a stack overfow. Base cases are
the building blocks of recursion.

####Code
Create a function that will take a positive integer parameter n and returns the factorial of n.

function factorialize(n) {
    if (n <0)
        return -1;
    else if (n == 0)
        return 1;
    else {
        return (n * factorialize(n-1));
    }
}

factorialize(4); //24
