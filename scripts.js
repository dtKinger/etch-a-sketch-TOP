const container = document.getElementById("container");
const range = document.getElementById('grid-size');

// 1. Take an input for Grid size

// 1a. Show a greyed-out placeholder text
// showing the entry in real time, e.g. they type 64, grey out "x 64 grid".)

// 1b. Throw error if input is > 100x100.

// 1c. Delete any existing grid

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
range.addEventListener('change', (e) => {
  size = e.target.value;
  //confirm('This will delete your current grid', "Ok", "Cancel");
  clearGrid();
  makeGrid(size);
});

range.addEventListener('change', (e) => {
  range.nextElementSibling.innerHTML = `${e.target.value}` + " px<sup>2</sup>";
})
