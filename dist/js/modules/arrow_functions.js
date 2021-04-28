/**
 * Arrow functions (with custom styled Select)
 *
 * ! They do not get their own value of "this" like a regular function expression does
 * They are always anonymous which means they are not named functions
 */

// Stuff with the form (see static HTML in the index.html)
const formMusic = document.getElementById("js-form-music");
const formMusicSelect = formMusic.querySelector("#js-form-music-select");
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
var fnWithOneArg = (a) => a * a;
console.log(`The square of number 5 is ${fnWithOneArg(5)}`);

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
console.log(greetings({ name: "ES6" }).hello());

// Needed parentheses, otherwise an error
const makeCard = () => ({ suit: "hearts", val: 3 });

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
const customSelect = (music) => {
  let isOpen = false;

  let htmlOptions = `<option value="">--Choose one--</option>`;
  let customSelectOptions = "";

  music.forEach((item, i) => {
    htmlOptions += `<option value="${i}">${item.style}</option>`;
    customSelectOptions += `<li data-option="${i}">${item.style}</li>`;
  });

  let htmlCustomSelect = `
  <div class="pos-rel">
    <select class="CustomSelect" id="js-CustomSelect">
      ${htmlOptions}
    </select>
    <ul class="CustomSelect-options" id="js-CustomSelect-options">
      ${customSelectOptions}
    </ul>
  </div>  
  `;

  formMusicSelect.innerHTML = htmlCustomSelect;

  const select = document.getElementById("js-CustomSelect");
  const options = document.getElementById("js-CustomSelect-options");

  const handleOutsideSelect = (e) => {
    if (!select.contains(e.target)) {
      console.log("Click outside the select");
      select.classList.remove("is-active");
      options.classList.remove("is-active");
      isOpen = false;
      console.log("Custom select box is closed!");
    }
  };

  const handleSelect = (e) => {
    e.preventDefault();

    if (select.classList.contains("is-active")) {
      select.classList.remove("is-active");
      options.classList.remove("is-active");
      isOpen = false;
      console.log("Custom select box is closed!");
      document.removeEventListener("click", handleOutsideSelect);
    } else {
      select.classList.add("is-active");
      options.classList.add("is-active");
      isOpen = true;
      console.log("Custom select box is open!");
      options.querySelectorAll("[data-option]").forEach((option) => option.addEventListener("mousedown", handleOption));
      document.addEventListener("click", handleOutsideSelect);
    }
  };

  const handleOption = (e) => {
    select.value = e.target.getAttribute("data-option");
    select.classList.remove("is-active");
    options.classList.remove("is-active");
  };

  document.getElementById("js-CustomSelect").addEventListener("mousedown", handleSelect);
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
  const optionId = document.getElementById("js-CustomSelect").value;
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
