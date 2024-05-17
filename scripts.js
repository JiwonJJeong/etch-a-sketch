// javascript


// create 16 copies of rows containing squares
function generateGrid(squaresPerEdge){
    const container = document.querySelector(".container");
    for (let i = 0; i<squaresPerEdge; i++){
        // create 1 "row" div containing 16 copies of "square" class div
        const rowToAdd = document.createElement("div");
        rowToAdd.classList.add("row");
        for (let j =0; j<squaresPerEdge;j++){
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

// initial grid generation to 16x16
generateGrid(16);

// give button at top of screen ability to remove and generate new grid
const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", function(){
    let gridSize = askGridSize();
    if (gridSize !== null){
        deleteGrid();
        generateGrid(gridSize);
    }
});

function deleteGrid(){
    const container = document.querySelector(".container");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

// prompts user to input grid size (1-100)
function askGridSize(){
    let userSizeInput;
    userSizeInput =  prompt("How many squares per edge? Limited to 100 squares.");
    // reprompts while input is not valid range or type AND they didn;t cancel
    while ((Number(userSizeInput)>100 || Number(userSizeInput)<=0 ||
            isNaN(Number(userSizeInput)) )&& userSizeInput !== null) 
        {  
            if (Number(userSizeInput)>100 || Number(userSizeInput)<=0){
                userSizeInput = prompt("Please select a number between 1 and 100.");
            } else if (isNaN(Number(userSizeInput))) {
                userSizeInput = prompt("Please select a number.");
            }
        }
    // allows cancel (return "null") or allows returning a valid number
    if (userSizeInput === null){
            return userSizeInput;
    } else return Number(userSizeInput);

}