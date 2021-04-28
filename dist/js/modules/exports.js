/**
 * Exports
 *
 * Modules are always in Strict Mode (no need to define "use strict").
 * ! Modules don't have a shared, global scope. Instead each module has its own scope.
 *
 */

let externalValue = 1000;

function externalFn() {
  externalValue = 2000;
  console.log("Hi, I'm an external function.");
}

let externalText = "Some external text";

// Named export (for multiple named exports per file)
export { externalValue, externalFn };

// Default export (for only one default export per file)
export default externalText;
