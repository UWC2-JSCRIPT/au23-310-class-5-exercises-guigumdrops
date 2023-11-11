// If an li element is clicked, toggle the class "done" on the <li>
const liElements = document.querySelectorAll('li');

liElements.forEach(liElement => {
  liElement.addEventListener('click', function() {
    this.classList.toggle('done');
  });
});

// If a delete link is clicked, delete the li element / remove from the DOM
const delLink = document.getElementsByClassName('delete')
delLink.forEach(deleteLink => {
  deleteLink.addEventListener('click', function() {
    const liElement = this.closest('li');
    liElement.parentNode.removeChild(liElement);
  }

  )
})
// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)
const addListItem = function(e) {
  e.preventDefault();
  const input = this.parentNode.getElementsByTagName('input')[0];
  const text = input.value; // use this text to create a new <li>

  // Finish function here
};
