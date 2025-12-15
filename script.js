const container = document.querySelector("#container");


const size = 16*16;
for(let i = 0; i<size; i++) {
    const cells = document.createElement("div");
    cells.className = "cells";
    container.appendChild(cells);
}