# Promises

## Create a Function that returns a Promise

1. Create a function, `delay5()`, that returns a new Promise.
   At this stage, keep it simple. The function simply returns
   a new Promise. Without parameters.

1. What parameters _should_ the promise take?
   Create the function that is passed to the promise constructor.
   What arguments does _that_ take?

1. Let's just return synchronously (we'll change it later).
   So to return a value, call the resolve parameter as
   a function, passing it the value you want to return,
   say `"Timer done."`.

1. Finally, just so we know that `delay5()` has been called,
   use `console.log` to print out `"delay5 called"`.


## Consuming (using) a Promise

Now to create code that consumes this promise.

1. Create a `var` that is assigned the return value from `delay5()`.
   What is a good name for this variable?

1. With your variable (which will be the promise),
   you can you can now do something when it changes state.
   It has a `then()` method, which takes two parameters,
   on `onResolve` and an `onReject` handler.

   Each of these in turn takes a parameter.
   What are the parameters that each takes?

1. Write the call to _yourpromise_`.then()`.
   In the `onResolve` handler, use console.log to display
   the parameter provided.

## Make `delay5()` Asynchronous

1. Modify your `delay5()` so that after 5 seconds,
   the promise resolves.

1. Test your consuming code again to ensure that it works.


## Converting to Promises

1. The code in `geolocation.js` (below) contains traditional
   callback-based code. Convert this to use promises instead.

        function geoSuccessCallback(position) {
        	console.log('Your position:', position);
        }

        function geoErrorCallback(err) {
	        console.error('An error occurred:', err);
        }

        if (navigator.geolocation) {
	        // we have geolocation, so get the position
	        navigator.geolocation.getCurrentPosition(geoSuccessCallback, geoErrorCallback);
        } else {
	        error('Sorry, your browser does not support geolocation');
        }
