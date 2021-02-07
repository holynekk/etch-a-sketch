const gridContainer = document.querySelector("#grid-container");
const resetButton = document.querySelector("#reset-button");
const cold_button = document.querySelector("#cold-color");
const warm_button = document.querySelector("#warm-color");
const random_color = document.querySelector("#random-color");
const grid = document.querySelectorAll(".grid-element");
const clear = document.querySelector(".res-but");
const slide = document.getElementById("#range-input");

let colorMod = randomColor;
let gridSize = 16;

window.addEventListener("load", defaultgrid);
resetButton.addEventListener("click", rearrangeSize);

cold_button.addEventListener("click", ()=>{
    const grid_elements = document.querySelectorAll('.grid-element');
    console.log(grid_elements.length);
    grid_elements.forEach((elmt)=>{
        elmt.removeEventListener("click", colorMod);
        colorMod = randomCold;
        elmt.addEventListener("click", colorMod);
        removeGrid();
        defaultgrid();
    });
});
warm_button.addEventListener("click", ()=>{
    const grid_elements = document.querySelectorAll('.grid-element');
    console.log(grid_elements.length);
    grid_elements.forEach((elmt)=>{
        elmt.removeEventListener("click", colorMod);
        colorMod = randomWarm;
        elmt.addEventListener("click", colorMod);
        removeGrid();
        defaultgrid();
    });
});
random_color.addEventListener("click", ()=>{
    const grid_elements = document.querySelectorAll('.grid-element');
    console.log(grid_elements.length);
    grid_elements.forEach((elmt)=>{
        elmt.removeEventListener("click", colorMod);
        colorMod = randomColor;
        elmt.addEventListener("click", colorMod);
        removeGrid();
        defaultgrid();
    });
});

function randomColor(node){
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    node.target.style.backgroundColor = "#"+red.toString(16)+green.toString(16)+blue.toString(16);
}

function randomCold(node){
    const red = Math.floor(Math.random()*128);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*128+128);
    node.target.style.backgroundColor = "#"+red.toString(16)+green.toString(16)+blue.toString(16);
}

function randomWarm(node){
    const red = Math.floor(Math.random()*128+128);
    const green = Math.floor(Math.random()*128);
    const blue = Math.floor(Math.random()*256);
    node.target.style.backgroundColor = "#"+red.toString(16)+green.toString(16)+blue.toString(16);
}

clear.addEventListener("click", ()=>{
    removeGrid();
    defaultgrid();
});


function defaultgrid(){
    setGrid(gridSize);
    addGrid(gridSize);
}

function setGrid(num){
    gridContainer.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
}
function addGrid(size){
    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement("div");
        gridElement.classList = "grid-element";
        gridElement.addEventListener("mouseover", colorMod);
        gridContainer.appendChild(gridElement);
    }
}

function rearrangeSize(){
    gridSize = prompt("Enter ne value: ");
    if(gridSize !== null){
        while(gridSize < 1 || gridSize > 72){
            gridSize = parseInt(prompt("The number that you enter should be between 1 and 72. Enter new one or cancel: "));
        }
        removeGrid();
        setGrid(gridSize);
        addGrid(gridSize);
    }else;
}

/*
function rearrangeSize(){
    gridSize = prompt("Enter ne value: ");
    if(gridSize !== null){
        while(gridSize < 1 || gridSize > 72){
            gridSize = parseInt(prompt("The number that you enter should be between 1 and 72. Enter new one or cancel: "));
        }
        removeGrid();
        setGrid(gridSize);
        addGrid(gridSize);
    }else;
}
*/

function removeGrid(){
    const grid_elements = document.querySelectorAll('.grid-element');
    grid_elements.forEach((element) =>{
        gridContainer.removeChild(element);
    });
}
