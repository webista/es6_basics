/**
 * Array functions
 */
console.groupCollapsed("%cArray functions", "font-weight: bold");
console.log("\n\n%cforEach()", "font-style: italic");

const foodSupplements = ["Digestive enzymes", "Minerals", "Vitamins"];

foodSupplements.forEach((item) => console.log(item));
// Including index
foodSupplements.forEach((item, i) => console.log(`Food supplements no.${i + 1} are ${item}.`));

// "Copy" of the array with Map method
console.log("\n\n%cmap()", "font-style: italic");
const foodSupplementsCopy = foodSupplements.map((item) => console.log(`"Copy" of ${item}`));

// Simply filter the array with Filter method
console.log("\n\n%cfilter()", "font-style: italic");
const foodSupplementsFiltered = foodSupplements.filter((item) => item === "Minerals");
console.log(foodSupplementsFiltered);

console.log("\n\n%cfilter() with reduce()", "font-style: italic");
const laptops = [
  {
    brand: "Lenovo",
    model: "ThinkPad X390",
    price: 35000,
    isAvailable: true
  },
  {
    brand: "Apple",
    model: 'MacBook Air 13"',
    price: 40000,
    isAvailable: true
  },
  {
    brand: "Dell",
    model: "Latitude 5590",
    price: 27000,
    isAvailable: false
  }
];

/**
 * The Reduce method
 *
 * https://www.w3schools.com/jsref/jsref_reduce.asp
 * ! Reduces the array to a single value
 * ! Executes a provided function for each value of the array (from left-to-right)
 * The return value of the function is stored in an accumulator (result/total)
 * array.reduce(function(total, currentValue, currentIndex, arr), initialValue);
 */

// ES5 way
const availableLaptops = laptops
  .filter(function (laptop) {
    return laptop.isAvailable;
  })
  .reduce(function (total, laptop) {
    return total + laptop.price;
  }, 0);

console.log("Price of available laptops:", availableLaptops);

// ES6 way
const unavailableLaptops = laptops.filter((laptop) => !laptop.isAvailable).reduce((total, laptop) => total + laptop.price, 0);

console.log("Price of unavailable laptops:", unavailableLaptops);

console.groupEnd();
