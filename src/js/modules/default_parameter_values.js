/**
 * Default parameter values
 */
console.groupCollapsed("%cDefault parameter values", "font-weight: bold");

// ES5 way
function multiplyES5(x, y) {
  var a = x || 1,
    b = y || 2;
  return a * b;
}
console.log(multiplyES5(5, 10));
console.log(multiplyES5());

// ES6 way
const multiplyES6 = (x = 1, y = 2) => x * y;
console.log(multiplyES6(5, 10));
console.log(multiplyES6());

const isEqualTo = (number = 100, compare = number) => number == compare;
console.log(isEqualTo());

console.groupEnd();
