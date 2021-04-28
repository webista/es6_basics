/**
 * String concatenation
 */
console.groupCollapsed("%cString concatenation", "font-weight: bold");

const myName = "Ondřej Kučera";
console.log(`My name is ${myName}.`);

let date = new Date();

// Anything can be inside of the curly braces
console.log(
  `It's ${
    "'" + date.toLocaleDateString() + "'"
  } and this is the ES6 way of String concatenation`
);

// "backslahed" is also possible
console.log(`Test of the escape: \${myName}`);

console.groupEnd();
