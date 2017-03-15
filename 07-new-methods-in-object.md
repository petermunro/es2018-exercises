# New Methods in Object

1. In React, a component's state currently looks like this:

      let state = { isVisible: true }

   Use `Object.assign()` to create a new state object which also contains the property `expertMode` which is currently `false`.

2. How would you clone an object using `Object.assign()`?
   Does it do a deep copy or a shallow copy?

3. What happens to properties that already exist in the target?

4. Suppose you are writing a function `initializeTestFramework(options)` which initializes a system based on the provided `options` object, for example:

        let options = {
          testDirectory: './tests',
          pauseBetweenTests: true,
          runConcurrently: false,
        };

        initializeTestFramework(options);

      How could you use `Object.assign()` to provide default values if some are not provided in the `options` object?

5. Check using `===` whether `NaN` is the same as `NaN`. Then do a similar comparison with `-0` and `+0`. What happens? Perform the same checks using `Object.is()`.
