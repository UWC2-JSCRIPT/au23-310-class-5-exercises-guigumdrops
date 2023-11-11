// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"
const headEl = document.getElementById("weather-head");
headEl.textContent = "February 10 Weather Forecast, Seattle";
// Change the styling of every element with class "sun" to set the color to "orange"
const sunEl = document.querySelectorAll('.sun');
sunEl.forEach(element => {
    element.style.color = 'orange';
});
// Change the class of the second <li> from to "sun" to "cloudy"
const li2 = document.querySelectorAll('li')[1];
li2.className = 'cloudy';