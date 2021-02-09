const gridContainer = document.querySelector("#grid-container");
const resetButton = document.querySelector("#reset-button");
const cold_button = document.querySelector("#cold-color");
const warm_button = document.querySelector("#warm-color");
const random_color = document.querySelector("#random-color");
const darken = document.querySelector("#darken");
const grid = document.querySelectorAll(".grid-element");
const clear = document.querySelector(".res-but");
const slide = document.getElementById("range-input");
const dark = document.getElementById("dark-mode");

let darkArray = ["rgb(230, 230, 230)", "rgb(200, 200, 200)", "rgb(160, 160, 160)", "rgb(120, 120, 120)", "rgb(80, 80, 80)", "rgb(40, 40, 40)", "rgb(0, 0, 0)"];
let colorMod = randomColor;
let darkMode = 0;
let gridSize = 16;

window.addEventListener("load", defaultgrid);

dark.addEventListener("click", ()=>{
    const grid_elements = document.querySelectorAll('.grid-element');
    const header = document.getElementById('bumbum');
    if(darkMode){
        document.body.style.backgroundColor = "#F0FFFF";
        header.style.color = "black";
        darkMode = 0;
    }else{
        document.body.style.backgroundColor = "#111111";
        header.style.color = "#F0FFFF";
        darkMode = 1;
    }
});

cold_button.addEventListener("click", ()=>{
    const grid_elements = document.querySelectorAll('.grid-element');
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
    grid_elements.forEach((elmt)=>{
        elmt.removeEventListener("click", colorMod);
        colorMod = randomColor;
        elmt.addEventListener("click", colorMod);
        removeGrid();
        defaultgrid();
    });
});
darken.addEventListener("click", ()=>{
    const grid_elements = document.querySelectorAll('.grid-element');
    grid_elements.forEach((elmt)=>{
        elmt.removeEventListener("click", colorMod);
        colorMod = darkenColor;
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


function darkenColor(node){
    let colorValue = node.target.style.backgroundColor;
    if(!colorValue){
        node.target.style.backgroundColor = "rgb(230, 230, 230)";
    }else{
        if(colorValue === "rgb(0,0,0)"){
            // Pass
        }else{
            node.target.style.backgroundColor = darkArray[darkArray.indexOf(colorValue)+1];
        }
    }
}

function getInput(){
    gridSize = document.getElementById("range-input").value;
    removeGrid();
    defaultgrid(gridSize);
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

function removeGrid(){
    const grid_elements = document.querySelectorAll('.grid-element');
    grid_elements.forEach((element) =>{
        gridContainer.removeChild(element);
    });
}
