/**
 * Variables
 *
 * New ways of defining variables - "const" and "let"
 * ! Both have block scope and they are not hoisted ("var" has a function scope and is hoisted)
 *
 * const
 * - that once it has been created, its value can never change
 * - "immutable variable" - more used
 *
 * let
 * - block scoped {...} version of "var"
 * - used everywhere else where I don't plan to change a value of variable
 *
 */
console.groupCollapsed("%cVariables", "font-weight: bold");

// Hoisting of "var" (does not work for "const" and "let", see below)
abc = "abc";
console.log(abc);
var abc;

// x = 0;
// console.log(x); // "Cannot access 'x' before initialization"
// let x;

function doSomething() {
  y = 0;
}
let y;
doSomething();
// console.log(x); // This works, because the function is calling after declaring the variable

// "const" is just a constant, it cannot be further changed. only the value in the background can be changed, in other words - the pointer isn't changed, only the value. see below
const toBuyList = ["MCT oil", "Zinc", "Magnesium"];
toBuyList.push("Vitamin D3");
console.log(toBuyList);

const obj = {
  value: 0
};
console.log(obj);
obj.value = 1;
console.log(obj);

let cnt = 10;
// let cnt = 5; // Cannot be "re-declared" -> "Identifier 'cnt' has already been declared")

let list = [1, 2, 3, 4, 5];

console.log("Iterate with var and scoping");
for (var i = 0; i < list.length; i++) {
  console.log(i);
}
console.log(i); // The variable is still available outside the loop/block - usually unwanted -> "5"

console.log("Iterate with let and scoping");
for (let j = 0; j < list.length; j++) {
  console.log(j);
}
//console.log(j); // Outside the block scope -> "j is not defined"

if (true) {
  let age = 27;
}
//console.log(age); // The same here - outside the block scope -> "age is not defined"

console.groupEnd();
