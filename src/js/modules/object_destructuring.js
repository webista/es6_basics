/**
 * Object destructuring
 */
console.groupCollapsed("%cObject destructuring", "font-weight: bold");

const foodSupplement = {
  name: "Maca červená",
  manufacturer: "Natu",
  isBIO: true,
  isRAW: true,
  netWeightGrams: 200,
  servingSizeGrams: 2,
  buyLink: "www.natu.cz/maca-cervena-bio-prasek-80g",
  sayPromo: function () {
    console.log("Buy me!");
  },
  sayMsg: function () {
    console.log("Just a test message.");
  }
};

// {} - new ES6 syntax for the Object destructuring
const { name, isBIO, isRAW, netWeightGrams, buyLink, sayPromo } = foodSupplement;

// Easy access to object prop - it not need to be declared as vars, e.g. var name = foodSupplement.name; etc.
console.log(name, isBIO, isRAW, netWeightGrams);
console.log(`${name} (${netWeightGrams} g) ${isBIO && isRAW ? "is" : "is not"} available in organic quality.`);
sayPromo();
console.log(`${buyLink}`);

// Alias in the Object destructuring
const { sayMsg: getTestMsg } = foodSupplement;
getTestMsg();

// ES5 object as a return value
function getFoodSupplement(name, manufacturer) {
  return {
    name: name,
    manufacturer: manufacturer
  };
}
var supplement = getFoodSupplement("ZMA Max", "Czech Virus");
console.log(supplement);

// ES6 object as a return value - no key-value needed
function getFoodSupplementES6(name, manufacturer) {
  return {
    name,
    manufacturer
  };
}
let supplementES6 = getFoodSupplementES6("Zinc Matrix", "Reflex Nutrition");
console.log(supplementES6);

console.groupEnd();
