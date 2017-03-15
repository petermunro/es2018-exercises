# Iterators and for…of

## Getting Started with Iterators

1. In the Chrome console, create an array `arr1` and assign it to a variable.

   What is the type of `arr1[Symbol.iterator]`?

2. Assign the result of calling `arr1[Symbol.iterator]()` to a variable, `it1`.

   1. What is its type?
   2. Inspect it. What fields does it have?
   3. Inspect `Object.getPrototypeOf(it1)`.

3. Call `it1.next()`. What is returned? Call it again and again until you reach the end of the array, and note how you are informed of the reaching the end.

4. For each of the following values, (1) investigate the `myObject[Symbol.iterator]` property, and (2) call the iterator's `next()` function a few times to retrieve its values, and (3) use the `for...of` statement to iterate over the values:

    1. A `String`, eg `"abcd"`.
    2. A `Set`.
    3. A `Map`. What value is returned by the iterator each time?
    4. A `TypedArray`.
    5. Are plain objects iterable?

## Consuming _iterables_

You've already used the `for...of` loop to consume iterables.
Investigate some other ways:

- Destructuring using an Array pattern
- `Array.from()``
- The spread operator
- Constructors of Maps and Sets


## Creating your own _iterator_

1. Write a function `makeIntIterator` that can be used as follows:

    ```
    let it = makeIntIterator(4);    // count of 4
    it.next();                      // {value: 0, done: true}
    it.next();                      // {value: 1, done: true}
    it.next();                      // {value: 2, done: true}
    it.next();                      // {value: 3, done: false}
    ```

## Creating your own _iterable_

1. Create an object which conforms to the _iterable_ interface. The object should return an iterator that returns integers in increasing value, stopping after 10 such values.
2. Consume these values using the `for...of` loop, and then the four other methods listed above.
