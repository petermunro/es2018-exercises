
// 1

function greeting(greeting = 'Hello', firstName = 'Peter', lastName = 'Munro') {
  return `${greeting} ${firstName} ${lastName}`;
}

console.log(greeting());
console.log(greeting('Good morning'));
console.log(greeting('Goodbye', 'Mr', 'Chips'));

// 2

function getTotalPrice(price, tax = price * 0.2) {
  return price + tax;
}

console.log(getTotalPrice(10));

// 2.1
// Order matters: parameters are declared from left to right,
// so we can't use a parameter declared to the right.
/*
function getTotalPrice2(tax = price * 0.2, price = 10) {
  return price + tax;
}

console.log(getTotalPrice2());
*/


// 2.2
// Any JavaScript expression is allowed as the default parameter value:

function getTaxRate() {
  return 0.2;
}

function getTotalPrice3(price, tax = price * getTaxRate()) {
  return price + tax;
}

console.log(getTotalPrice3(10));


// 3
function search(category, ...tags) {
  console.log(`Searching for ${category} with tags: ${tags}`)
}
search('headphones', '4.1', 'noise-cancelling', 'bluetooth');


// 4.1
console.log('Spreading a string:', ...'abcdef');

// 4.2
let characters = [...'abcdef'];
console.log('Using spread to generate an array of characters:', characters);
