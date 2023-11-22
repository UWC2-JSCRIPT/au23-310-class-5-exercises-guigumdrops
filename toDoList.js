// If an li element is clicked, toggle the class "done" on the <li>
const ulEl = document.querySelector('ul');
const liEl = document.querySelector('li')
ulEl.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('done');
  }
});

// If a delete link is clicked, delete the li element / remove from the DOM
ulEl.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete')) {
    const liElement = event.target.closest('li');
    liElement.parentNode.removeChild(liElement);
  }
});

// If an 'Add' link is clicked, adds the item as a new list item
const addListItem = function (e) {
  e.preventDefault();
  const input = this.parentNode.querySelectorAll('input')[0];
  const text = input.value;
  if (text !== '') {
    const listItem = document.createElement('li');
    listItem.textContent = text;

    const delButton = document.createElement('a');
    delButton.className = 'delete';
    delButton.textContent = 'Delete';

    listItem.appendChild(delButton); 

    const uEl = document.querySelector('.today-list');
    uEl.appendChild(listItem);
    input.value = '';
  }
};

const addEl = document.querySelector('.add-item');
addEl.addEventListener('click', addListItem);