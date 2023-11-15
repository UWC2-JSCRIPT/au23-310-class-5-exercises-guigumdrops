// Attach one listener that will detect clicks on any of the <td>
// elements.  Should update that element's innerHTML to be the
// x, y coordinates of the mouse at the time of the click
const tbl = document.querySelector('table');
tbl.addEventListener('click', function(event) {
  const tdEl = event.target;
  const x = event.clientX;
  const y = event.clientY;
  tdEl.innerHTML = `x: ${x}, y: ${y}`;
});