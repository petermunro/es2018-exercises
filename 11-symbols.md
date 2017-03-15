# Symbols

1. Create a symbol and assign it to a variable. Do two copies of this symbol compare as equal?

2. Create two symbols and give them the same description.
    1. Do these two symbols compare as equal to each other?
    2. Symbols have unique values. Can they be converted to strings so you can see this value?

3. Create a simple object:

        let obj = {a: 1, b: 2};

   1. Add a property to this object whose name is a symbol with the description 'color', and whose value is the string 'blue'.
   2. Can you use this property to look up its value?
   2. Use `Object.getOwnPropertyNames(obj)` on this object. Do the symbols appear?
   3. Do they appear if you use a `for...in` loop?
   4. Now use `Object.getOwnPropertySymbols(obj)`. Do you see their values? Can you do anything with them?


4. The `Symbol` type has some built-in properties for "well-known" symbols. One such is `Symbol.toPrimitive`. Create a property on your object, whose name is `Symbol.toPrimitive` and whose value is a function that returns a primitive representation of this object, for the moment the string `'I am a nice object'`.

    1. Convert your object to a string and view the result:

            "" + obj          // "I am a nice object"

    2. How could you display the values of some of this object's properties instead?
