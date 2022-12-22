
// 1. Take an input for Grid size

// 1a. Show a greyed-out placeholder text
// showing the entry in real time, e.g. they type 64, grey out "x 64 grid".)

// 1b. Throw error if input is > 100x100.

// 1c. Delete any existing grid


/* =================================
// 1d. Create a grid of divs,
e.g. 32 divs in a row by 32 columns.
================================= */
const container = document.getElementById("container");

function makeGrid(size) {
  container.style.setProperty('--grid-size', size);
  for (c = 0; c < (size * size); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
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

/* ===============
CHANGE GRID SIZE
=============== */
const range = document.getElementById('grid-size');
range.addEventListener('change', (e) => {
  size = e.target.value;
  confirm('This will delete your current grid', "Ok", "Cancel");
  clearGrid();
  makeGrid(size);
});
