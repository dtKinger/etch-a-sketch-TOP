/* ================
GLOBAL DECLARATIONS 
================ */

// Get the grid container in memory
const container = document.getElementById("container");
// Get the HTML range element
const range = document.getElementById('grid-size');

/* =============
GRID RE/CREATION
============= */

// Auto-generate a CSS-grid based on one input
function makeGrid(size) {
  container.style.setProperty('--grid-size', size);
  for (c = 0; c < (size * size); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid_item";
  };
};

// Fn to clear grid before re-creating it.
function clearGrid(){
  document.getElementById('container').innerHTML = '';
};

// Add paintOn Event Listener to all grid divs
function getGrid(){
  let divs = document.querySelectorAll('.grid_item');
  divs.forEach(grid_item => grid_item.addEventListener('mouseover', paintOn));
};

// ENABLE ETCH A SKETCH ON PAGE LOAD
function paintOn(e) {
  this.classList.add('on');
}

// Load default Grid. Use 48, same as markup.
makeGrid(48);
getGrid();

/** ================
END OF GRID CREATION
================ **/


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
});

/* ===============
GAME SETTINGS
=============== */

// TOGGLE GRIDLINES BUTTON

// Get Toggle Gridlines Button
const toggleGrid = document.getElementById('toggle-grid');
toggleGrid.addEventListener('click', toggleGridLines); 
// Onclick, do two things:
function toggleGridLines(){
  // 1. Add clicked-in styles to the button
  toggleGrid.classList.toggle('clicked-in');
  // 2. Get all grid items and toggle 'no-border' class
  let divs = document.querySelectorAll('.grid_item');
  divs.forEach(grid_item => grid_item.classList.toggle('no-border'));
};

// CLEAR SKETCH BUTTON


// COLOR SELECTOR BUTTON

/* ================
END - GAME SETTINGS
================ */
