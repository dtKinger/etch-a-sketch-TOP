const container = document.getElementById("container");
const range = document.getElementById('grid-size');

// 1a. Show a greyed-out placeholder text
// showing the entry in real time, e.g. they type 64, grey out "x 64 grid".)

// 1b. Delete any existing grid

// Move the oninput handler to become an addEventListener
// so I can have a second one that appends
// oninput="this.value.appendChild('px<sup>2</sup>)"


/* =================================
// 1d. Create a grid of divs,
e.g. 32 divs in a row by 32 columns.
================================= */
function makeGrid(size) {
  container.style.setProperty('--grid-size', size);
  for (c = 0; c < (size * size); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid_item";
  };
};

// Load default Grid. Use 48, same as markup.
makeGrid(48);

/* =================
END OF GRID CREATION
================= */

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
});

/* ==========
ETCH A SKETCH
========== */
function paintOn(e) {
  this.classList.add('on');
}

let divs = document.querySelectorAll('.grid_item');
divs.forEach(grid_item => grid_item.addEventListener('mouseenter', paintOn));

// const keys = document.querySelectorAll('.key');
// keys.forEach(key => key.addEventListener('transitionend', removeTransition));