/**
 * Object extensions
 *
 * Some new useful methods.
 *
 * See for more:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/
 *
 */
console.groupCollapsed("%cObject extensions", "font-weight: bold");

/**
 * Object.assign()
 *
 * Copies the values of all enumerable own properties from one or more source objects to a target object.
 */

let obj_1 = {
  a: 1
};

let obj_2 = {
  b: 2
};

let obj_merged = Object.assign(obj_1, obj_2);
console.log("obj_merged:", obj_merged);

/**
 * The Math Object
 */

let number_1 = 10;
console.log(Math.sign(number_1)); // returns either a positive or negative +/- 1

let number_2 = 2.77;
console.log(Math.trunc(number_2)); // cut off the decimal places

/**
 * Strings
 */

let name = "Ondrej";
console.log(name.startsWith("Ond")); // "true"
console.log(name.endsWith("EJ")); // "false" -> case-sensitive
console.log(name.includes("dre")); // "true"

/**
 * The Number Object
 */

let number_3 = NaN;
console.log(Number.isNaN(number_3)); // "true"

let number_4 = 10.1;
console.log(Number.isInteger(number_4)); // "false"

/**
 * Arrays
 */

let array = Array.of(1, 2, 3);
console.log(array);

let arrayNew = Array.from(array, (val) => val * 2);
console.log(arrayNew);

array.fill(100, 1, 2);
console.log(array);

console.log(array.find((val) => val > 1)); // "100" -> return only the first match

// Useful example of Array find() method - finds the Object by a value
let inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 }
];
const findCherries = (fruit) => fruit.name === "cherries";
console.log(inventory.find(findCherries));

let array_1 = ["a", "b", "c"];
console.log(array_1.copyWithin(1, 2)); // "[a, c, c]"
console.log(array_1); // "[a, c, c]" -> the method changed the original array

console.log(array_1.entries()); // "Array Iterator"
let iterator = array_1.entries();
for (let element of iterator) {
  console.log(element);
}

console.groupEnd();
