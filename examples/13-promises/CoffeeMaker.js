// CONSUMER

let coffeePromise = heyBaristaMakeACoffee();
coffeePromise
  .then(msg => {
    console.log('SUCCEEDED:', msg);
    return `I have made you a nice cup of: ${msg}`;
  })
  .then(andAPastryToo)
  .then(pastryMsg => {
    console.log(`Second then: ${pastryMsg}`);
  })
  .catch(errorMsg => console.log(`FAILED: ${errorMsg}`));


// -------------------------------------------------------
// PROVIDER

function andAPastryToo() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      const success = 0;
      if (success) {
        resolve('pastry ready');
      } else {
        reject(new Error('no pastries left'));
      }
    }, 1000);
  });
}

function heyBaristaMakeACoffee() {
  const errors = [
    'I spilled the coffee',
    'The coffee machine broke',
    'No water',
    'No coffee'
  ];

  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      const success = randomInt(0,1);
      console.log(success);
      if (success) {
        resolve('cappuccino ready');
      } else {
        const errorMsg = errors[randomInt(0, errors.length - 1)];
        reject(errorMsg);
      }
    }, 1000);
  });
}

function randomInt(start, end) {
  return Math.floor(Math.random() * (end - start + 1)) + start;
}
