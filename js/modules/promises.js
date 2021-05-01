/**
 * Promises
 *
 * Better solution of callbacks.
 */
console.groupCollapsed("%cPromises", "font-weight: bold");

// ES5 way
console.log("ES5 way of Promises start (in the code)");

function getData(data, callback) {
  // DB simulation
  setTimeout(function () {
    console.log("ES5 fake and very slow (3s) reading from the database...");
    callback({
      data: data
    });
  }, 3000);
}

getData("Some ES5 incoming data", function (data) {
  console.log(data);
});

console.log("ES5 way of Promises finish (in the code)");

// ES6 way
console.log("ES6 way of Promises start (in the code)");

// Resolve
const promise = new Promise((resolve, reject) => {
  // DB simulation
  setTimeout(() => {
    console.log("ES6 fake and very slow (3s) reading from a database...");
    resolve({
      data: "Some ES6 incoming data"
    });
  }, 3000);
});

promise.then((data) => console.log(data)).then(() => console.log(`another "then" :)`));

// Reject
const promiseAnother = new Promise((resolve, reject) => {
  // "DB simulation"
  setTimeout(() => {
    console.log("ES6 fake and very slow (3s) reading from a database once again...");
    reject(new Error("Something went wrong"));
  }, 3000);
});

promiseAnother.then((data) => console.log(data)).catch((err) => console.warn(err));

/**
 * Chaining Promises and catching errors
 */
function waitOneSecond(seconds) {
  return new Promise((resolve, reject) => {
    if (seconds > 2) {
      reject("Rejected: seconds > 2");
    } else {
      setTimeout(() => {
        console.log("New Promise after a second");
        seconds++;
        resolve(seconds);
      }, 1000);
    }
  });
}

waitOneSecond(2)
  .then(waitOneSecond)
  .then((seconds) => console.log(`seconds: ${seconds}`))
  .catch((error) => console.warn(`error: ${error}`));

/**
 * Promise.prototype.finally()
 */
document.getElementById("js-form-posts").addEventListener("submit", fetchData);

function fetchData(ev) {
  ev.preventDefault();

  cleanPosts();
  showLoader();

  // Always gets a response, unless there is network error
  // It never throws an error for 4xx or 5xx response
  // setTimeout here for Loader visibility only
  setTimeout(() => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
      .then((response) => response.json())
      .then(showData)
      .catch(() => console.log("Connection error"))
      .finally(hideLoader);
  }, 400);
}

function showLoader() {
  document.getElementById("js-form-posts").insertAdjacentHTML("afterend", `<span id="js-data-loader" class="Loader Loader--data mt20"></span>`);
}

function hideLoader() {
  document.getElementById("js-data-loader").remove();
}

function showData(data) {
  if (data.length) {
    console.log("Posts", data);
    let limit = document.getElementById("js-form-posts-limit").value;
    let html = `<ol id="js-posts" class="OrderedList OrderedList--animated mt20">`;

    for (let i = 0; i < limit; i++) {
      html += `<li class="ta-left" style="animation-delay: ${i / 10}s"><code>${JSON.stringify(data[i])}</code></li>`;
    }

    html += "</ol>";
    document.getElementById("js-form-posts").insertAdjacentHTML("afterend", html);
  }
}

function fail(error) {
  console.warn(error.message);
}

function cleanPosts() {
  if (document.getElementById("js-posts")) {
    document.getElementById("js-posts").innerHTML = "";
  }
}

/**
 * all() built-in method
 * 
 * Waits for last the Promise to finish.
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
 * 
 * The Promise.all() method returns a single Promise that fulfills when all of the promises passed as an iterable have been fulfilled or when the iterable contains no promises or when the iterable contains promises that have been fulfilled and non-promises that have been returned. It rejects with the reason of the first promise that rejects, or with the error caught by the first argument if that argument has caught an error inside it using try/catch/throw blocks.

   It is typically used after having started multiple asynchronous tasks to run concurrently and having created promises for their results, so that one can wait for all the tasks being finished.
  */
let promise_1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(console.log("Resolved after 4s!"));
  }, 4000);
});

let promise_2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Rejected after 5s!");
  }, 5000);
});

Promise.all([promise_1, promise_2])
  .then((success) => console.log(success))
  .catch((error) => console.warn(error));

/**
 * race() built-in method
 *
 * Waits for the first to finish and only take the result of that first Promise.
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race
 *
 * The Promise.race() method returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, with the value or reason from that promise.
 */

let promise_3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(console.log("Resolved after 6s!"));
  }, 6000);
});

let promise_4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Rejected after 7s!");
  }, 7000);
});

Promise.race([promise_3, promise_4])
  .then((success) => console.log(success))
  .catch((error) => console.warn(error));

console.log("ES6 way of Promises finish (in the code)");

console.groupEnd();
