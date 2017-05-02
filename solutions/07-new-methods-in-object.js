# New Methods in Object

// 1

let state = { isVisible: true };

let newState = Object.assign({}, state, {expertMode: false});

// Explanation: we create a new state object (with `{}`),
// and using this as the target, merge the existing state
// into it, plus an object containing the new property.


// 2

let originalObject = { foo: 'bar', nested: { a: 'one', b: 'two' } };
let clone = Object.assign({}, originalObject);

console.log(clone.nested === originalObject.nested);   // true, so it's a shallow copy

// 3

// Properties that already exist in the target are overwritten:

let clone2 = Object.assign({foo: 'this gets overwritten'}, originalObject);
console.log(clone2.foo);          // "bar"


// 4

function initializeTestFramework(options) {
  let defaults = {
    testDirectory: './tests',
    pauseBetweenTests: true,
    runConcurrently: false,
  };

  // We write the computed options into a new empty object (rather
  // than say overwrite the `options` object that was passed in),
  // then merge the defaults, then overwrite those with the passed in
  // `options` properties.
  let computedOptions = Object.assign({}, defaults, options);

  console.log(`testDirectory:     ${computedOptions.testDirectory}`);
  console.log(`pauseBetweenTests: ${computedOptions.pauseBetweenTests}`);
  console.log(`runConcurrently:   ${computedOptions.runConcurrently}`);
}

// Test code:
let options = {
  testDirectory: './my-tests-folder',
  pauseBetweenTests: false
};

initializeTestFramework(options);


// 5

NaN === NaN;                // false
Object.is(NaN, NaN);        // true
