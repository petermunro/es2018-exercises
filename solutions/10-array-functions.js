
// 1.1
let paras = document.getElementsByTagName('p');

// 1.2
Array.from(paras).map(e => e.innerText).join('\n');
