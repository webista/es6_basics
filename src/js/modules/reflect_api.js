/**
 * Reflect API
 *
 * Tools to evaluate our code during runtime, e.g. to find out if the object has a specific property.
 * Has a lot of built-in static ("already known / old school") methods, but it's bundled into one single API, and some new stuff.
 * Works well together with Proxy API.
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect
 *
 */
console.groupCollapsed("%cReflect API", "font-weight: bold");

/**
 * Creating objects
 */

class Person {
  constructor(name) {
    this.name = name;
  }
}

class TheBoss extends Person {
  constructor(skills) {
    super(name);
    this.skills = ["driving", "shooting"];
  }
}

let man = Reflect.construct(Person, ["Ondrej"]);
console.log(man);

let woman = Reflect.construct(Person, ["Maci"], TheBoss);
console.log(woman);

/**
 * Calling functions
 */

class Gun {
  constructor(name, model, cal) {
    this.name = name;
    this.model = model;
    this.cal = cal;
  }
  promo(prefix) {
    console.log(
      `${prefix} ${this.name} ${this.model} ${this.cal} - One Shot, One Kill`
    );
  }
}

let beretta = Reflect.construct(Gun, ["Beretta", "92FS Inox", "9mm"]);
Reflect.apply(beretta.promo, beretta, ["promo:"]);
//Reflect.apply(beretta.promo, {}, []); // "undefined undefined - One Shot, One Kill" -> "this" refers to the empty object

/**
 * Reflect and prototype
 */
let child = new Person("Maximilian");
console.log(Reflect.getPrototypeOf(child) == Person.prototype);

Person.prototype.age = 10;
let proto = {
  age: 0,
  greet() {
    console.log("Hallo");
  }
};
Reflect.setPrototypeOf(child, proto);
console.log(Reflect.getPrototypeOf(child));
Reflect.apply(child.greet, null, []);

/**
 * Accessing properties with Reflect
 */
console.log(Reflect.get(beretta, "model")); // like traditional "beretta.model", but useful in more dynamic environment...
Reflect.set(beretta, "model", "92X Performance");
console.log("Reflect.get():", Reflect.get(beretta, "model"));
console.log("Reflect.has():", Reflect.has(beretta, "model"));

/**
 * Analyzing objects with Reflect.ownKeys()
 */
console.log("Reflect.ownKeys():", Reflect.ownKeys(beretta));

/**
 * Creating and deleting properties with Reflect
 */
Reflect.defineProperty(beretta, "colors", {
  writable: true,
  value: ["black", "chrome", "gold", "nickel", "steel", "titanium"]
});
console.log(beretta.colors);

// delete beretta.model; // "old school" way
// console.log(beretta.model);

// Reflect.deleteProperty(beretta, "model");
// console.log(beretta.model);

/**
 * Preventing object extensions
 */
Reflect.preventExtensions(beretta);
console.log("Reflect.isExtensible():", Reflect.isExtensible(beretta));

console.groupEnd();
