// javascript


// create 16 copies of rows containing squares
const container = document.querySelector(".container");
for (let i = 0; i<16; i++){
    // create 1 "row" div containing 16 copies of "square" class div
    const rowToAdd = document.createElement("div");
    rowToAdd.classList.add("row");
    for (let j =0; j<16;j++){
        const boxToAdd = document.createElement("div");
        boxToAdd.classList.add("square");
        rowToAdd.appendChild(boxToAdd);
    }
    container.appendChild(rowToAdd);
}
