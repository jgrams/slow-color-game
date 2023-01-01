const popArea = 100;
const board = document.getElementById("game-board");

function makeBoardId(number) {
    return "board-square-" + number;
}

function setBoardGridWidth() {
    let value = "repeat(" + parseInt(Math.sqrt(popArea)) + ", minmax(0, 1fr))";
    board.style.gridTemplateColumns = value;
    board.style.gridTemplateRows = value;
}

function addSquare(element, index) {
    let a = document.createElement("div");
    a.classList.add("population-square");
    a.dataset.currentPopulation = "";
    a.id = makeBoardId(index);
    element.appendChild(a);
}

function makePopulationLocation() {
    Array.from({ length: popArea }, (_, i) => addSquare(board, i));
}

function createBoard() {
    setBoardGridWidth();
    makePopulationLocation();
}

createBoard();