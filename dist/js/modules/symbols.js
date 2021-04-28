/**
 * Symbols
 *
 * New primitive type (not object!).
 * ! They provide unique IDs as symbols, new every time.
 * They are usable as "hidden" object keys - great for storing some metadata
 * They are not iterable.
 *
 */
console.groupCollapsed("%cSymbols", "font-weight: bold");

let symbol = Symbol("debug");

let obj = {
  name: "Some object",
  [symbol]: 100
};

console.log(obj);

/**
 * Shared symbols (useful for reused IDs)
 */
let symbol_1 = Symbol.for("age");
let symbol_2 = Symbol.for("age");
console.log(symbol_1 == symbol_2);

let person = {
  name: "Anna",
  age: 39
};

function makeAge(person) {
  let ageSymbol = Symbol.for("age");
  person[ageSymbol] = 18;
}

makeAge(person);

console.log(person[symbol_1]);
console.log(person[symbol_2]);
console.log(person.age);

/**
 * Well-known symbols
 *
 * See "Well-known symbols" at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#Properties
 */

class Person {}

Person.prototype[Symbol.toStringTag] = "Person";

let person_1 = new Person();
console.log(person_1);

let numbers = [1, 2, 3];

numbers[Symbol.toPrimitive] = function () {
  return 999; // just for a test
};
console.log(numbers + 1);

console.groupEnd();
