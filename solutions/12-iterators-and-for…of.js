
// 1

let arr1 = ['one', 'two', 'three', 'four'];
console.log(typeof arr1[Symbol.iterator]);

// 2.1
let it1 = arr1[Symbol.iterator]();
console.log(typeof it1);

// 2.3
console.dir(Object.getPrototypeOf(it1), {showHidden: true, depth: 3, colors: true});

// 3

console.log(it1.next());
console.log(it1.next());
console.log(it1.next());
console.log(it1.next());
console.log(it1.next());
