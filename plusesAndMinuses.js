// When a user clicks the + element, the count should increase by 1 on screen.
// When a user clicks the – element, the count should decrease by 1 on screen.
const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const count = document.getElementById('count')
let count = 0;
plusButton.forEach(clickPlus => {
    plusButton.addEventListener('click', function() {
        count++;
        const countElement = document.querySelector('#count');
        countElement.textContent = count;
    });       
});
