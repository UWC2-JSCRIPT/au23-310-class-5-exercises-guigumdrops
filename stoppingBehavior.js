// Do not change
document.getElementById('cat').addEventListener('click', (event) => {
  alert('meow!');
});

// When clicked, "More info" link should alert "Here's some info"
// instead of going to a new webpage
const moreInfoEl = document.getElementById('more-info');
moreInfoEl.removeAttribute('href');
moreInfoEl.setAttribute('href', '#');
moreInfoEl.setAttribute('onclick', `alert("Here's some info");`)
// When the bark button is clicked, should alert "Bow wow!"
// Should *not* alert "meow"
const dogEl = document.getElementById('dog')
dogEl.addEventListener('click', function(event) {
  event.stopPropagation();   
  alert('Bow wow!');
});