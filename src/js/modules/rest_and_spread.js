/**
 * The Rest parameter
 *
 * It takes a list of values and creates an array off it.
 */
console.groupCollapsed("%cThe Rest parameter", "font-weight: bold");

function sumUp(...toAdd) {
  console.log("array of numbers:", toAdd);
  let result = 0;
  for (let i = 0; i < toAdd.length; i++) {
    result += toAdd[i];
  }
  return result;
}
console.log(`sum: ${sumUp(100, 1000, 10000)}`);

console.groupEnd();

/**
 * The Spread operator
 *
 * "Opposite" of the Rest parameter
 * It takes an array and splits it up into individual values.
 */
console.groupCollapsed("%cThe Spread operator", "font-weight: bold");
let numbers = [1, 2, 3, 4, 5];
console.log("individual numbers:", ...numbers);
console.log(`max: ${Math.max(...numbers)}`);

console.groupEnd();
