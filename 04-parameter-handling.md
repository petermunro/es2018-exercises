# Parameter Handling

1. Write a function that takes three parameters: a `greeting`, a `firstName` and a `lastName`. Provide default parameters for each of these of "Hello", your first name and your last name, so you can call it like this:

        console.log(greeting());                          // Hello Peter Munro
        console.log(greeting('Good morning'));            // Good morning Peter Munro
        console.log(greeting('Goodbye', 'Mr', 'Chips'));  // Goodbye Mr Chips

2. Can default parameter expressions be computed? Is this function valid? Try it.

        function getTotalPrice(price, tax = price * 0.2) {
          return price + tax;
        }

   1. Does the order of the parameters matter?
   2. Could the `0.2` be replaced by another variable or function call?

3. Write a function that you can call as follows:

        search('headphones', '4.1', 'noise-cancelling', 'bluetooth');

   - The first parameter is a category
   - The subsequent 0 or more parameters are tags that aid the search

4. 1. Can you spread a String? Try doing this and passing the result to `console.log()`.
   2. How would you generate an array where each element is a single character from the string?
