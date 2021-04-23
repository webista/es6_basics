/**
 * Classes
 *
 * [in Czech] https://www.itnetwork.cz/javascript/oop/prvni-objektova-aplikace-v-javascriptu
 * Třída je vzor, podle kterého se objekty vytváří. Definuje jejich vlastnosti a metody.
 * Objekt, který se vytvoří podle třídy, se nazývá instance.
 * Třídy pojmenováváme pomocí PascalCase, první písmeno je velké, aby se poznalo, že se jedná o vzor.
 * Instance má zpravidla název třídy, jen má první písmeno malé.
 *
 * https://www.w3schools.com/react/react_es6.asp
 * A class is a type of function, but instead of using the keyword "function" to initiate it, we use the keyword "class", and the properties are assigned inside a "constructor()" method.
 *
 * [in Czech] https://www.dzejes.cz/babel.html
 * Rozlučte se s prototype. Máme tu novou hezčí syntax, která podporuje prototypovou dědičnost, volání rodičovské metody, statické metody či konstruktory. U zkušenějších JS vývojářů se však často setkáte s názorem, že tato nová syntax je velkou chybou, protože bude svádět nováčky ke klasickému OOP, což je v JS považováno z mnoha důvodů za špatné.
 *
 */

console.groupCollapsed("%cClasses", "font-weight: bold");

// ES5 way
function FoodSupplementES5(name, manufacturer) {
  this.name = name;
  this.manufacturer = manufacturer;
}

// https://www.w3schools.com/js/js_object_prototypes.asp

// The JavaScript prototype property also allows you to add new methods to objects constructors
FoodSupplementES5.prototype.getName = function () {
  return this.name;
};

// The JavaScript prototype property allows you to add new properties to object constructors
FoodSupplementES5.prototype.BBE = "06-09-2021";

// Creates new object according the class
var ZincMatrix = new FoodSupplementES5("ZINC MATRIX", "REFLEX NUTRITION");
console.log(ZincMatrix);
console.log(ZincMatrix.getName());
console.log("Best before end: " + ZincMatrix.BBE);

// Inheritance
function ZMA(name, manufacturer, ingredients, dosage) {
  FoodSupplementES5.call(this, name, manufacturer);
  this.ingredients = ingredients;
  this.dosage = dosage;
}

ZMA.prototype = Object.create(FoodSupplementES5.prototype);

var ZMA_MAX = new ZMA(
  "ZMA Max",
  "Czech Virus",
  "Hydroxid hořečnatý (Aquamin® Mg), Magnesium Bisglycinát, Zinek Bisglycinát, mikrokrystalická celulóza, vitamín B6 (Pyridoxine HCL), veganská kapsle (Hydroxypropylmethylcelulóza)",
  "4 kapsle denně před spaním"
);
console.log(ZMA_MAX);
console.log(ZMA_MAX.getName());

// ES6 way
class FoodSupplementES6 {
  constructor(name, manufacturer) {
    this.name = name;
    this.manufacturer = manufacturer;
  }
  sayPromo() {
    console.log(`${this.name} is an awesome food supplement. Buy it now! :-)`);
  }
}
const MCT = new FoodSupplementES6("MCT Oil", "Mutant");
console.log(MCT);
MCT.sayPromo();

//console.log(MCT.__proto__ === FoodSupplementES6.prototype);

// Inheritance - new keywords "extends" and "super"
class ProteinPowder extends FoodSupplementES6 {
  constructor(name, manufacturer, flavour, isLactoseFree) {
    // "super" refers to the parent class "FoodSupplementES6"
    super(name, manufacturer);
    this.flavour = flavour;
    this.isLactoseFree = isLactoseFree;
  }
}
const proteinPowderIsoWorx = new ProteinPowder(
  "Iso Worx",
  "NutriWorks",
  "vanilla",
  true
);
console.log(proteinPowderIsoWorx);
proteinPowderIsoWorx.sayPromo();

/**
 * Static methods
 *
 * "Static" keyword - access to a class without instantiating, e.g. let helper = new Helper(); see below
 */
class Helper {
  static logTwice(message) {
    console.log(message);
    console.log(message);
  }
}

Helper.logTwice("Logged!");

/**
 * Getters and setters
 */
class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name.toUpperCase();
  }

  set name(value) {
    if (value.length > 2) {
      this._name = value;
    } else {
      console.log("Rejected!");
    }
  }
}

let person = new Person("Max");
console.log("person.name:", person.name);

person.name = "Ed";
console.log("person.name:", person.name);

person.name = "Brad";
console.log("person.name:", person._name);

/**
 * Extending built-in objects
 *
 * See "Subclassing" at https://kangax.github.io/compat-table/es6/
 */

class ConvertableArray extends Array {
  convert() {
    let returnArray = [];
    this.forEach((value) => returnArray.push("Converted! " + value));
    return returnArray;
  }
}

let numberArray = new ConvertableArray();
numberArray.push(1);
numberArray.push(2);
numberArray.push(3);

console.log("converted array: " + numberArray.convert());

console.groupEnd();
