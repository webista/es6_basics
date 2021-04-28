/**
 * Iterators and Generators
 *
 * Iterators are basically all objects that are iterable like arrays. They know how to access to collections.
 * A Generator is a function which doesn't necessarily run to the end when execute it.
 *
 */
console.groupCollapsed("%cIterators and Generators", "font-weight: bold");

let array = [1, 2, 3];
console.log(typeof array[Symbol.iterator]); // well-know built-in Symbol -> "function"

array[Symbol.iterator] = function () {
  let nextValue = 10;
  return {
    next: function () {
      nextValue++;
      return {
        done: nextValue > 15 ? true : false,
        value: nextValue
      };
    }
  };
};

// let it = array[Symbol.iterator](); // makes any Object iterable
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

for (let element of array) {
  console.log(element);
}

/**
 * Creating a custom iterable Object
 */
let person = {
  name: "Ondrej",
  hobbies: ["web development", "fitness", "music"],
  [Symbol.iterator]: function () {
    let i = 0;
    let hobbies = this.hobbies;
    return {
      next: function () {
        let value = hobbies[i];
        i++;
        return {
          done: i > hobbies.length ? true : false,
          value: value
        };
      }
    };
  }
};

for (let hobby of person) {
  console.log(hobby);
}

/**
 * Generators basics
 */
function* select() {
  yield "House";
  yield "Garage";
}

let it = select();
console.log(it.next());

let obj = {
  [Symbol.iterator]: gen
};

function* gen(end) {
  for (let i = 0; i < end; i++) {
    try {
      yield i;
    } catch (e) {
      console.log(e);
    }
  }
}

let iter = gen(2);
console.log(iter.next());
console.log(iter.throw("An error ocurred"));
console.log(iter.next());
console.log(iter.next());

console.groupEnd();
