// 1

let swap = (...[a, b]) => [b, a];
console.log(...swap(2, 3));

// 2

let arr1 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];

let [a, b, ...c] = arr1;
console.log(`a: ${a}`);
console.log(`b: ${b}`);
console.log(`c: ${c}`);


// 3

let phonetic = ['sierra', 'charlie'];
let [p1, p2, p3 = 'delta'] = phonetic;

console.log(p3);


// 4

let arr2 = ['one', 'two', ['three', ['four', ['five', 'six', 'seven']], 'eight']];
let [, m, [, [, [, n]], o]] = arr2;
console.log(m, n, o);

// 5

let stats = {
  packetForwarded: 5345,
  redirectSent: 427,
  forwardCacheHit: 4821,
  forwardCacheMiss: 524,
};

// 5.1

let { forwardCacheHit: hits, forwardCacheMiss: misses } = stats;
console.log(hits);
console.log(misses);

// 5.2

let { forwardCacheHit: myhits, forwardCacheMiss: mymisses } = stats;


// 6

let [ , vowel1, , , vowel2 ] = "hello";

// 7

function connectTo(host, port) {
  console.log(`Connecting to ${host} on port ${port}`);
}

// This could be refactored even further
function initialize({ host = 'localhost', port = 8080}) {
 connectTo(host, port);
}

initialize({host: 'localhost', port: 8080});
