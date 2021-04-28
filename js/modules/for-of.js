/**
 * The for-of loop
 *
 * Shorter syntax of "traditional" For loop.
 *
 */
console.groupCollapsed("%cThe for-of loop", "font-weight: bold");

let items = [1, "abc", true];
for (let i of items) {
  console.log(i);
}

console.groupEnd();
