// Get the container in memory
const container = document.getElementById("container");
// Get the HTML range element
const range = document.getElementById('grid-size');

//
function getGrid(){
  let divs = document.querySelectorAll('.grid_item');
  divs.forEach(grid_item => grid_item.addEventListener('mouseover', paintOn));
  };

/* ======================================
// 1d. Create a grid of divs based on one 
unit selection, e.g. 32 squared pixels.
====================================== */
function makeGrid(size) {
  container.style.setProperty('--grid-size', size);
  for (c = 0; c < (size * size); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid_item";
  };
};

// Load default Grid. Use 48, same as markup.
makeGrid(48);

 /* ===============================
  ENABLE ETCH A SKETCH ON PAGE LOAD
  ============================== */
function paintOn(e) {
  this.classList.add('on');
}
getGrid();

/* =================
END OF GRID CREATION
================= */


// Clear grid before re-creating it.
function clearGrid(){
  document.getElementById('container').innerHTML = '';
};

/* =============
CHANGE GRID SIZE
============= */
// 1. Take an input for Grid size
range.addEventListener('change', (e) => {
  // Set size equal to the input range slider value
  size = e.target.value;
  // Delete existing grid by emptying the innerHTML^
  clearGrid();
  // Create new grid based on size input.
  makeGrid(size);
});

  // At the same time - update the grid size output display
  range.addEventListener('change', (e) => {
  range.nextElementSibling.innerHTML = `${e.target.value}` + " px<sup>2</sup>";
  // Enable Etch-a-sketch after grid is re-drawn.
  getGrid();
  paintOn();
});