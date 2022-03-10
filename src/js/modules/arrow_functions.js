/**
 * Arrow functions (with custom styled Select)
 *
 * ! They do not get their own value of "this" like a regular function expression does
 * They are always anonymous which means they are not named functions
 */

// Stuff with the form (see static HTML in the index.html)
const formMusic = document.getElementById("js-form-music");
const formCustomSelectContainer = formMusic.querySelector("#js-custom-select-container");
const formMusicSubmitBtn = formMusic.querySelector("#js-form-music-submit");
const formMusicResult = formMusic.querySelector("#js-form-music-result");
const formMusicResultDelay = 500;

console.groupCollapsed("%cArrow functions", "font-weight: bold");

var isUserLoggedIn = function () {
  return false;
};
console.log("isUserLoggedIn: " + isUserLoggedIn());

const isUserLoggedInES6 = () => false;
console.log("isUserLoggedInES6: " + isUserLoggedInES6());

// Only one fn argument, doesn't need parentheses
const fnWithOneArg = (a) => a * a;
console.log(`The square of number 5 is ${fnWithOneArg(5)}`);

// Needed parentheses, otherwise an error
const makeCard = () => ({ suit: "hearts", val: 3 });

// An example from JobsDev lecture https://youtu.be/QrFDUphm2jg?t=1397 [in Czech]
function greetings(options) {
  return {
    name: options.name,
    hello: function () {
      return "Hello " + options.name;
    }
  };
}
console.log(greetings({ name: "ES5" }).hello());

const greetingsES6 = ({ name }) => ({ name, hello: () => `Hello ${name}` });
console.log(greetingsES6({ name: "ES6" }).hello());

// Fn returns fn example
function greeter(greeting) {
  return function (name) {
    return greeting + " " + name;
  };
}
var greet = greeter("Hello");
console.log(greet("ES5"));

const greeterES6 = (greeting) => (name) => `${greeting} ${name}`;
const greetES6 = greeterES6("Hello");
console.log(greetES6("ES6"));

// Some data
const movies = [
  {
    title: "The Game",
    director: "David Fincher",
    summary: "...",
    cast: ""
  },
  {
    title: "Interstellar",
    director: "Christopher Nolan",
    summary: "...",
    cast: ""
  },
  {
    title: "Anthropoid",
    director: "Sean Ellis",
    summary: "...",
    cast: ""
  }
];

// When arrow fn contains more than one statement, needed to wrap all of them in curly braces and use the "return" keyword
const moviesList = movies.map((movie) => {
  const container = {};
  container.title = movie.title;
  container.director = movie.director;

  // explicit return
  return container;
});

console.table(moviesList);

// Some data
const music = [
  {
    style: "Folk metal",
    bands: ["Equilibrium", "Ensiferum", "Skálmöld"]
  },
  {
    style: "Glam metal",
    bands: ["Bon Jovi", "Mötley Crüe", "Skid Row"]
  },
  {
    style: "Gothic metal",
    bands: ["Cradle of Filth", "Leaves' Eyes", "Nachtblut"]
  },
  {
    style: "Heavy metal",
    bands: ["Black Sabbath", "Burning Witches", "Dio", "Iron Maiden", "Judas Priest", "Manowar", "Queensrÿche", "Savatage", "Twisted Sister"]
  },
  {
    style: "Industrial metal",
    bands: ["Eisbrecher", "Pain", "Rammstein", "Raubtier"]
  },
  {
    style: "Melodic death metal",
    bands: ["Aephanemer", "Amon Amarth", "Children of Bodom", "Die Apokalyptischen Reiter", "Debauchery", "Heathen Foray"]
  },
  {
    style: "Power metal",
    bands: ["Accept", "Battle Beast", "Bloodbound", "Dark Moor", "Helloween", "Heavatar", "Heavenly", "Hulkoff", "Lost Horizon", "Sabaton", "Stormwarrior", "Stratovarius"]
  },
  {
    style: "Progressive metal",
    bands: ["Amorphis", "Crimson Glory", "Dyscordia"]
  },
  {
    style: "Trash metal",
    bands: ["Iced Earth", "Kreator", "Machine Head", "Metallica", "Slayer"]
  }
];

// Custom Select box
const customSelect = (data) => {
  let htmlOptions = `<option value="">--Choose one--</option>`;
  let customSelectOptions = "";

  data.forEach((item, i) => {
    htmlOptions += `<option value="${i}">${item.style}</option>`;
    customSelectOptions += `<li data-option="${i}">${item.style}</li>`;
  });

  let htmlCustomSelect = `
  <div class="CustomSelect" id="js-custom-select">
    <select>
      ${htmlOptions}
    </select>
    <ul class="CustomSelect-options" id="js-custom-select-options">
      ${customSelectOptions}
    </ul>
  </div>  
  `;

  formCustomSelectContainer.innerHTML = htmlCustomSelect;

  const customSelect = document.getElementById("js-custom-select");
  const select = customSelect.querySelector("select");
  const customOptions = document.getElementById("js-custom-select-options");

  const openCustomSelect = () => {
    customSelect.classList.add("is-active");
    customOptions.classList.add("is-active");
  };

  const closeCustomSelect = () => {
    customSelect.classList.remove("is-active");
    customOptions.classList.remove("is-active");
  };

  const handleOutsideCustomSelect = (e) => {
    if (!customSelect.contains(e.target)) {
      closeCustomSelect();
    }
  };

  const handleCustomSelect = (e) => {
    e.preventDefault();

    if (customSelect.classList.contains("is-active")) {
      closeCustomSelect();
      document.removeEventListener("click", handleOutsideCustomSelect);
    } else {
      openCustomSelect();
      customOptions.querySelectorAll("[data-option]").forEach((option) => option.addEventListener("mousedown", handleCustomOption));
      document.addEventListener("click", handleOutsideCustomSelect);
    }
  };

  const handleCustomOption = (e) => {
    select.value = e.target.getAttribute("data-option");
    select.dispatchEvent(new Event("change"));
  };

  customSelect.addEventListener("mousedown", handleCustomSelect);

  document.addEventListener("keydown", (e) => {
    const key = e.key;
    if (key === "Escape") {
      closeCustomSelect();
    }
  });

  select.addEventListener("change", () => {
    console.log("Select changed to value:", select.value);
  });
};

customSelect(music);

const renderBands = (bands) => {
  let htmlTiles = `<ul class="Tiles mt30">`;
  bands.forEach((band, i) => {
    htmlTiles += `<li class="Tile" style="animation-delay: ${i / 10}s;"><h4 class="Tile-heading">${band}</h4></li>`;
  });
  htmlTiles += `</ul>`;
  formMusicResult.innerHTML = htmlTiles;
};

const showBandsByStyle = (e) => {
  e.preventDefault();
  const optionId = document.querySelector("#js-custom-select select").value;
  if (optionId) {
    formMusicSubmitBtn.classList.add("is-active");
    setTimeout(() => {
      renderBands(music[optionId].bands);
      formMusicSubmitBtn.classList.remove("is-active");
    }, formMusicResultDelay);
  } else {
    alert("You didn't choose anything :-(");
  }
};

formMusic.addEventListener("submit", showBandsByStyle);

console.groupEnd();
