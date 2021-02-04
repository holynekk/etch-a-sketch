const gridContainer = document.querySelector("#grid-container");
const resetButton = document.querySelector("#reset-button");
let square_num = 16;

window.addEventListener("load", defaultgrid);
resetButton.addEventListener("click", rearrangeSize);

function randomColor(node){
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    node.target.style.backgroundColor = "#"+red.toString(16)+green.toString(16)+blue.toString(16);
}

function defaultgrid(){
    setGrid(square_num);
    addGrid(square_num);
}

function setGrid(num){
    gridContainer.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
}
function addGrid(size){
    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement("div");
        gridElement.classList = "grid-element";
        gridElement.addEventListener("mouseover", randomColor);
        gridContainer.appendChild(gridElement);
    }
}

function rearrangeSize(){
    let new_size = parseInt(prompt("Let's enter a value between 1 and 64: "));
    if(new_size !== null){
        while(new_size < 1 || new_size > 64){
            new_size = parseInt(prompt("The number that you enter should be between 1 and 64. Enter new one or cancel: "));
        }
        rm_grid();
        setGrid(new_size);
        addGrid(new_size);
    }else;
}

function rm_grid(){
    const grid_elements = document.querySelectorAll('.grid-element');
    grid_elements.forEach((element) =>{
        gridContainer.removeChild(element);
    });
}
