/**
 * Array destructuring
 */
console.groupCollapsed("%cArray destructuring", "font-weight: bold");
let letters = ["a", "b", "c"];
let [a, b] = letters;
console.log("a:", a);
console.log("b:", b);

// It also works with Spread operator
let [first, ...other] = letters;
console.log("other:", other);

// It also works with Default values
let [aa, bb, cc, dd = "d"] = letters;
console.log("dd:", dd);

// Skipping values
let [aaa, , ccc] = letters;
console.log(aaa, ccc);

// Swapping values
let num1 = 10;
let num2 = 100;
[num2, num1] = [num1, num2];
console.log(num1);
console.log(num2);

// Immediately destructuring
let [one, two] = ["one", "two", "three", "four", "five"];
console.log(one, two);

console.groupEnd();
