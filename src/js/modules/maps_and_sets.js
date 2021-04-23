/**
 * Maps and Sets
 *
 * New kinds of collections.
 *
 */
console.groupCollapsed("%cMaps and Sets", "font-weight: bold");

/**
 * Maps
 *
 * Key-value collection.
 */

let glutamin = {
  name: "Mutant L-Glutamine"
};

let preWorkout = {
  name: "Mutant Madness"
};

let supplements = new Map();
//let supplements = new Map([["glut", glutamin], ["pre", preWorkout]]); // possible shorter syntax
supplements.set("glut", glutamin);
supplements.set("pre", preWorkout);
console.log("supplements:", supplements);
console.log("supplements.size:", supplements.size);

console.log("supplements Get the one", supplements.get("pre", preWorkout));

// supplements.delete("pre");
// console.log("supplements after Delete the one:", supplements);

// supplements.clear();
// console.log("supplements after Clear:", supplements);

console.log("supplements.keys():", supplements.keys()); // "MapIterator"
for (let key of supplements.keys()) {
  console.log("key:", key);
}

console.log("supplements.values():", supplements.values()); // "MapIterator"
for (let value of supplements.values()) {
  console.log("value:", value);
}

// obsolete Entries method
// console.log("supplements.entries():", supplements.entries()); // "MapIterator"
// for (let entry of supplements.entries()) {
//   console.log("entry:", entry);
// }

// the same as above
for (let entry of supplements) {
  console.log("entry:", entry);
}

/**
 * WeakMap
 *
 * The same as Map, but it is not enumerable (can't loop through it, don't know the length) and it has no size property.
 * Holds weak references to the stored values.
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap
 * The WeakMap object is a collection of key/value pairs in which the keys are weakly referenced. The keys must be objects and the values can be arbitrary values.
 */

/**
 * Sets
 *
 * Like the Array, but stores only unique values (it doesn't matter where they are stored in the Set).
 */

let set = new Set([1, 1, 2, 5]);

set.add(10);
set.delete(1);
// set.clear();
console.log("set.has(2):", set.has(2));

for (let element of set) {
  console.log("element of the set:", element);
}

for (let element of set.entries()) {
  console.log("element of the set (entries):", element);
}

for (let element of set.keys()) {
  console.log("element of the set (keys):", element);
}

for (let element of set.values()) {
  console.log("element of the set (values):", element);
}

/**
 * WeakSet
 *
 * Comparable to a "normal" Set, but it only holds weak references.
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet
 * The WeakSet object lets you store weakly held objects in a collection.
 */

console.groupEnd();
