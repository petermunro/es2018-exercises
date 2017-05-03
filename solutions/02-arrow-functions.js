
// 1

let add = (a, b) => a + b;

// 2

let square = x => x * x;

// 3

let pi = () => Math.PI;

// 4

let makeObj = (a, b, c) => ({
  first: a,
  second: b,
  third: c
});

let res = makeObj(1, 2, 3);
console.log(res);

// 5

let values = [1, 2, 3, 4, 5, 6];
let squares = values.map(x => x * x);
console.log(squares);
