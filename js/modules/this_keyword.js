/**
 * "This" keyword in a function
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 * Before arrow functions, every new function defined its own this value based on how the function was called:
 * - A new object in the case of a constructor.
 * - undefined in strict mode function calls.
 * - The base object if the function was called as an "object method".
 * - etc.
 * This proved to be less than ideal with an object-oriented style of programming.
 * ! An arrow function does not have its own "this".
 * The "this" value of the enclosing lexical scope is used; arrow functions follow the normal variable lookup rules.
 * So while searching for "this" which is not present in current scope, an arrow function ends up finding the "this" from its enclosing scope.
 */

console.groupCollapsed("%c'This' keyword in a function", "font-weight: bold");

// Some data and methods
const band = {
  name: "Equilibrium",
  musicStyles: ["folk metal", "pagan metal", "epic metal"],
  members: [
    {
      name: 'Robert "Robse" Dahn',
      role: "vocalist"
    },
    {
      name: 'René "Berthammer" Berthiaume',
      role: "lead and rhythm guitar player"
    },
    {
      name: 'Tuval "Hati" Refaeli',
      role: "drummer"
    },
    {
      name: "Dom R. Crey",
      role: "rhythm and lead guitar player"
    },
    {
      name: 'Martin "Skar" Berger',
      role: "bass player and vocalist"
    },
    {
      name: "Skadi Rosehurst",
      role: "keyboard player"
    }
  ],
  studioAlbumsQnt: 5,
  getMembers: function () {
    console.log("Members of " + this.name + " (ES5 way):", this.members);
    // ! Bad practice to avoid an "undefined" error, "this" has another context (Window object)
    var that = this;
    var leadVocalist = function () {
      console.log("The lead vocalist of " + that.name + " is " + that.members[0].name);
    };
    leadVocalist();
  },
  // https://stackoverflow.com/questions/31095710/methods-in-es6-objects-using-arrow-functions
  getMembersES6() {
    console.log(`Members of ${this.name} (ES6 way):`, this.members);
    // An arrow function ends up finding the "this" from its enclosing scope
    const leadVocalist = () => console.log(`The lead vocalist of ${this.name} is ${this.members[0].name}`);
    leadVocalist();
  }
};
band.getMembers();
band.getMembersES6();

const vocalist = {
  name: "Michael Kiske",
  sayHi: function () {
    console.log(this.name, "says hi! in ES5"); // => Michael Kiske says hi! in ES5
  },
  sayHiES6: () => {
    // console.log(this); // => "this" as Window object - unwanted, see below why
    // console.log(this.name, "says hi! in ES6"); // => <<BS_START>>{"bs":{"hardReload":true,"scroll":{"x":0,"y":0}}}<<BS_START>> says hi! in ES6
  }
};
vocalist.sayHi();
vocalist.sayHiES6();

const btnES5 = document.getElementById("js-btn-es5");
const btnES6 = document.getElementById("js-btn-es6");

btnES5.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(this); // => <button>
  if (this.classList.contains("Button--primary")) {
    btnES5.className = "Button Button--secondary mt10 mr5 ml5";
  } else {
    btnES5.className = "Button Button--primary mt10 mr5 ml5";
  }
});

btnES6.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(this); // => undefined
  if (btnES6.classList.contains("Button--secondary")) {
    btnES6.className = "Button Button--primary mt10 mr5 ml5";
  } else {
    btnES6.className = "Button Button--secondary mt10 mr5 ml5";
  }
});

console.groupEnd();
