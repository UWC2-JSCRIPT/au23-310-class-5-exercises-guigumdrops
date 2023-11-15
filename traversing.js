// Given the <body> element as variable body,
// access the <main> node and log to the console.
const body = document.body;
const mainEl = body.querySelector('main');
console.log(mainEl);
// Given the <ul> element as variable ul,
// access <body>  and log to the console.
const ul = document.querySelector('ul');
const bodyEl = ul.parentNode.parentNode;
console.log(bodyEl);
// Given the <p> element as var p,
// access the 3rd <li>  and log to the console.
const pEl = document.querySelector('p');
const thirdLi = pEl.previousSibling.previousSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling;
console.log(thirdLi);