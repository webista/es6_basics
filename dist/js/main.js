import * as variables from "./modules/variables.js";
import * as templateLiterals from "./modules/template_literals.js";
import * as stringConcatenation from "./modules/string_concatenation.js";
import * as objectLiteralExtensions from "./modules/object_literal_extensions.js";
import * as arrayDestructuring from "./modules/array_destructuring.js";
import * as objectDestructuring from "./modules/object_destructuring.js";
import * as arrowFunctions from "./modules/arrow_functions.js";
import * as thisKeyword from "./modules/this_keyword.js";
import * as defaultParameterValues from "./modules/default_parameter_values.js";
import * as arrayFunctions from "./modules/array_functions.js";
import * as restAndSpread from "./modules/rest_and_spread.js";
import * as forOf from "./modules/for-of.js";
import * as classes from "./modules/classes.js";
import * as symbols from "./modules/symbols.js";
// import * as iteratorsAndGenerators from "./modules/iterators_and_generators.js";
import * as promises from "./modules/promises.js";
import * as objectExtensions from "./modules/object_extensions.js";
import * as mapsAndSets from "./modules/maps_and_sets.js";
import * as reflectAPI from "./modules/reflect_api.js";
import * as proxyAPI from "./modules/proxy_api.js";

// It can be renamed - "as" syntax
import { externalValue, externalFn as testFn } from "./modules/exports.js";

import externalText from "./modules/exports.js";

// The same as above, it can be whatever name I want
import externalTextWhateverNamed from "./modules/exports.js";

// Everything can be imported as an object
import * as imported from "./modules/exports.js";

console.groupCollapsed("%cExports/Imports", "font-weight: bold");
console.log("externalValue:", externalValue);
testFn();

console.log("externalValue:", externalValue);
console.log("externalText:", externalText);
console.log("externalTextWhateverNamed:", externalTextWhateverNamed);

console.log("imported:", imported);
console.log(imported.externalValue);
console.groupEnd();

imported.externalFn();

console.log("%cSome async stuff here...", "font-weight: bold");
