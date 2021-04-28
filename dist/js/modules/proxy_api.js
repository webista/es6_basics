/**
 * Proxy API
 *
 */
console.groupCollapsed("%cProxy API", "font-weight: bold");

/**
 * Traps on action, Proxies and Reflect
 */
let gun = {
  name: "Beretta",
  model: "92G ELITE LTT 3-10RD",
  cal: "9mm"
};

// Placeholder object which contains Traps
let handler = {
  // The handler.get() method is a Trap for getting a property value.
  get: function (target, name) {
    return name in target ? target[name] : "Not specified";
  },
  /**
   * The set() method should return a boolean value.
   * Return true to indicate that assignment succeeded.
   * If the set() method returns false, and the assignment happened in strict-mode code, a TypeError will be thrown.
   */
  set: function (target, property, value) {
    if (value.length >= 2) {
      return Reflect.set(target, property, value);
    }
  }
};

let proxy = new Proxy(gun, handler);

console.log(proxy.model); // "92G ELITE LTT 3-10RD"
console.log(proxy.price); // "Not specified"

proxy.model = "M9";
console.log(proxy.model); // "M9"

/**
 * Proxies as prototypes
 */
let proxy_2 = new Proxy({}, handler);

Reflect.setPrototypeOf(gun, proxy_2);

console.log(gun.price); // "Not specified"

/**
 * Wrapping functions
 */
function log(message) {
  console.log("Log entry created, message: " + message);
}

let handler_2 = {
  apply: function (target, thisArg, listArgs) {
    if (listArgs.length == 1) {
      return Reflect.apply(target, thisArg, listArgs);
    }
  }
};

let proxy_3 = new Proxy(log, handler_2);

proxy_3("Hello"); // "Log entry created, message: Hello"
proxy_3("Hello", 10); // ""

/**
 * Revocable proxies
 */
let handler_3 = {
  get: function (target, property) {
    return Reflect.get(target, property);
  }
};

let { proxy: proxy_4, revoke } = Proxy.revocable(gun, handler_3);

console.log(proxy_4.model); // "M9"
revoke();
// console.log(proxy_4.model); // "Cannot perform 'get' on a proxy that has been revoked"

console.groupEnd();
