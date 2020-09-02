// Select color input
// Select size input

const height = document.getElementById("inputHeight");
const width = document.getElementById("inputWidth");
const table = document.getElementById("pixelCanvas");
const color = document.getElementById("colorPicker");
const tableSize = document.querySelector("#sizePicker");
const h = height.value;
const w = width.value;

tableSize.addEventListener("submit",function(event){
  table.innerHTML= "";
  event.preventDefault();
  makeGrid(h,w);
});

//create a canvas grid
function makeGrid() {
  let table = document.getElementById("pixelCanvas");
  table.innerHTML = "";
  const h = height.value;
  const w = width.value;
  for (var i = 0; i<h; i++){
    let row = table.insertRow(i);
    for(var j = 0; j<w; j++){
      let cell = row.insertCell(j);
      }
    }
};

//add colors to each cell
table.addEventListener("click", function() {
  let cell = [h,w];
  let shade = color.value;
  event.target.style.backgroundColor = shade;
});
