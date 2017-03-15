# Array Functions

1. Visit the page <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from>

   1. Extract the collection of paragraphs from this page into a
   variable. Note: you can use `document.getElementsByTagName('p');`.

   2. Now use the array `map` function to show each element's `innerText`.
      If `map` is unavailable, that is because the collection is not a
      JavaScript array, but an _array-like_ object retrieved from the DOM.
      Use one of the Array functions mentioned to convert it, then use `map()`.
