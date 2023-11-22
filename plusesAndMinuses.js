// When a user clicks the + element, the count should increase by 1 on screen.
// When a user clicks the – element, the count should decrease by 1 on screen.
const plusEl = document.getElementById('plusIMG');
const minusEl = document.getElementById('minusIMG');
const countEl = document.getElementById('count');
let counter = 0
plusEl.addEventListener('click', () => {
    counter++;
    countEl.textContent = `Count: ${counter}`;
});
minusEl.addEventListener('click', () => {
    counter--;
    countEl.textContent = `Count: ${counter}`;
});