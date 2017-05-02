
// 1

function greeting(greeting = 'Hello', firstName = 'Peter', lastName = 'Munro') {
  return `${greeting} ${firstName} ${lastName}`;
}

console.log(greeting());
console.log(greeting('Good morning'));
console.log(greeting('Goodbye', 'Mr', 'Chips'));

// 2
