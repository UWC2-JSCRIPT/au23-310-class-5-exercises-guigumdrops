// Create a new <a> element containing the text "Buy Now!" 
// with an id of "cta" after the last <p>
const aEl = document.createElement('a')
aEl.textContent = 'Buy Now!'
aEl.id = 'cta'
const lastP = document.querySelector('p:last-child')
lastP.after(aEl);


// Access (read) the data-color attribute of the <img>,
// log to the console
const imgEl = document.querySelector('img')
const datacolor = imgEl.dataset.color;
console.log(datacolor);

// Update the third <li> item ("Turbocharged"), 
// set the class name to "highlight"
const li3 = document.querySelectorAll('li')[2];
li3.classList.add('highlight')

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")
const pEl = document.querySelector('p:last-child');
debugger
pEl.parentNode.removeChild(pEl);