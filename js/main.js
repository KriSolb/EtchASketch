let grids;
let x = 16;

function gridder(x) {
  let container = document.createElement("div");
  container.id = "container";
  document.body.appendChild(container);
  container.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${x}, 1fr)`;

  for (let i = 0; i < x * x; i++) {
    let row = document.createElement("div");
    row.classList.add("rowClass");
    container.appendChild(row);
  }
  grids = document.querySelectorAll(".rowClass");
  grids.forEach((rowClass) => {
    rowClass.addEventListener("mouseenter", (e) => {
      rowClass.classList.add("active");
    });
  });
}

//eventListener for reset button
const btnReset = document.getElementById("reset");
btnReset.addEventListener("click", reseter);

//function "reseter" for reset-button
function reseter() {
  grids.forEach((rowClass) => {
    rowClass.classList.remove("active")
  });
}

//eventListener for resize button
const btnResize = document.getElementById("resize");
btnResize.addEventListener("click", resizer);

function resizer() {

  let container = document.getElementById("container");
  document.body.removeChild(container);

  x = prompt("Please enter number for grids * grids: ");

  gridder(x);
}

//start function "gridder"
gridder(x);