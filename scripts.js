// javascript


// create 16 copies of rows containing squares
function generateGrid(){
    const container = document.querySelector(".container");
    for (let i = 0; i<16; i++){
        // create 1 "row" div containing 16 copies of "square" class div
        const rowToAdd = document.createElement("div");
        rowToAdd.classList.add("row");
        for (let j =0; j<16;j++){
            // create 1 square in the row and add an event listener for hover
            const boxToAdd = document.createElement("div");
            boxToAdd.classList.add("square");
            boxToAdd.addEventListener("mouseover", function(event) {
                doHoverEffect(event);
            });
            rowToAdd.appendChild(boxToAdd);
        }
        container.appendChild(rowToAdd);
    }
}

function doHoverEffect(event){
    event.target.style.backgroundColor = "red"
}

// initial grid generation
generateGrid();

// give button at top of screen ability to remove and generate new grid
const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", function(){
    deleteGrid();
    generateGrid();
});

function deleteGrid(){
    const container = document.querySelector(".container");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}