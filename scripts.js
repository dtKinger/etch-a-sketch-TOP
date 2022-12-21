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

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(50, 50);

/* =================
END OF GRID CREATION
================= */