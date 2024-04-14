/**
 * To run this file in Gitpod, use the 
 * command node rest-parameter-syntax.js in the terminal
 */


// Rest Parameter Syntax works in the opposite  direction from the spread operator.  
// Where the spread operator can break an array into  its individual elements, the rest parameter syntax  
// combines individual elements into an array. It can  also be used to represent the “rest” of the values  
// when destructuring an array or object


// Regular function call 

const sumAll = (a, b, c) => a + b +c;
let sum = sumAll(1, 2, 3);
console.log("Sum: " + sum);

// Extra arguments are ignored
// The result will still e 6 as the above since the last 3 will be ignored and this is where rest comes in
let sum2 = sumAll(1, 2, 3, 4, 5, 6);
console.log("Sum2: " + sum2);

// Function using ...rest
// Using the three dot syntax again to fo so (the parameteter can be called anything you want but we call it rest here)
const sumRest = (a, b, c, ...rest) => {
    let sum = a + b + c;
    for (let i of rest) {
        sum += i;
    }
    return sum;
}
let sum3 = sumRest(1, 2, 3,  4, 5, 6);
console.log("Sum3: " + sum3);

// Just let sum = a + b + c. Now I'll use a  for...of loop to iterate through the rest array
// and add each additional number to the  existing sum. At the end I'll just return sum.  
// Now if I create a new variable called sum3, set  it equal to sum rest of the numbers 1 through 6,  
// and log it to the console, I get the expected output of 21.
