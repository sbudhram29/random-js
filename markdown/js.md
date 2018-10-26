#### Javascript References

**Event Bubbling / Delegation**

putting listener on parent for children

**prototypal inheritances**

Add property or method to the Object to pass done to instance

**iife**

```javascript
(function() {})();
```

provide protection from polluting global scope

**null undefined and undeclate**

null is empty
undefined is initialized but not assigned value
undeclared is not initialize

**closure**

are usually function within a function that have private methods and variable

```javascript
function makeCounter() {
  let count = 0;
  function addOne() {
    count++;
    return count;
  }
  return { addOne: addOne };
}
```

**host object**

determine by browser or global (node)

**native objects**

String, Math, RegExp, Object, Function, ...

**.call and .apply**

.call can pass parameter separated by ,
.apply can pass array

**Function.prototype.bind**

help set this to provided value
in react this.handleChange.bind(this)

**AJAX**

is an asynchronous request for data XML or JSON... JSON is new standard

**XMLHttpRequest or Fetch API**

**Explain how JSONP works (and how it's not really Ajax).**

JSONP (JSON with Padding) is a method commonly used to bypass the cross-domain policies in web browsers because Ajax requests from the current page to a cross-origin domain is not allowed.

**Hoisting**

variables and function are initial at the top of functions

**bubbling**

events on children are shared up to parent

**load vs DOMContentLoaded**

load waits for stylesheets, images, etc

DOMContentLoaded on wait for the DOM to be mounted

**What is "use strict";? What are the advantages and disadvantages to using it?**

'use strict' is a statement used to enable strict mode to entire scripts or individual functions. Strict mode is a way to opt into a restricted variant of JavaScript.

**Advantages:**

Makes it impossible to accidentally create global variables.
Makes assignments which would otherwise silently fail to throw an exception.
Makes attempts to delete undeletable properties throw (where before the attempt would simply have no effect).
Requires that function parameter names be unique.
this is undefined in the global context.
It catches some common coding bloopers, throwing exceptions.
It disables features that are confusing or poorly thought out.

**Array Methods**

- Array.isArray()
- Array.froms()
- .find()
- .map()
- .filter()
- .reduce()
- .splice()
- .slice()
- .unshift()
- .shift()
- .pop()
- .push()
- .values()
- .sort((a, b) => a - b))
- .concat()
- .includes()
- .join()
- .reverse()

**String Methods**

- .concat()
- .endsWith()
- .includes()
- .indexOf()
- .lastIndexOf()
- .match()
- .search()
- .replace()
- .repeat()
- .split()
- .substring()
- .toLowerCase()
- .toUpperCase()
- .trim()
- .trimStart()
- .trimEnd()

**Object Methods**

- Object.assign()
- Object.create()
- Object.freeze()
- Object.entries()
- Object.keys()

**Set Methods**

- .add()
- .clear()
- .delete()
- .entries()
- .has()
- .forEach()
- .values()

**Map Methods**

- .clear()
- .delete()
- .entries()
- .forEach()
- .get()
- .has()
- .keys()
- .set()
- .values()

**JSON**

JSON.stringify() //turns json to string
JSON.parse() //get object/json from string
