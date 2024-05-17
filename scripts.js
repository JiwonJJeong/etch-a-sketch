// javascript

// create 16*16-1 copies of "square" class div
const box = document.querySelector(".square");
const container = document.querySelector(".container");
for (let i =1; i<16*16;i++){
    const boxToAdd = document.createElement("div");
    boxToAdd.classList.add("square");
    container.appendChild(boxToAdd);
}