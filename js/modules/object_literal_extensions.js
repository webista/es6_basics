/**
 * Object literal extensions
 */
console.groupCollapsed("%cObject literal extensions", "font-weight: bold");

let fullName = "Ondřej Kučera";
let countryField = "country";

let me = {
  fullName,
  // Dynamically assignment a property
  [countryField]: "Czech Republic",
  greet() {
    console.log(`Ahoj, já jsem ${this.fullName}.`);
  },
  "greet in English"() {
    console.log(`Hi! My name is ${this.fullName}. I'm from the ${this.country}.`);
  }
};

console.table(me);

me.greet();
me["greet in English"]();

console.groupEnd();
