const popTypes = { R: { prod: 2, con: 1 }, G: { prod: 3, con: 2 }, B: { prod: 2, con: 1 } };
const stockPile = {};
const popArea = 100;

function makeBoardId(number) {
    return "board-square-" + number;
}

function addSquare(index) {
    let a = document.createElement("div");
    a.classList.add("population-square");
    a.id = makeBoardId(index);
    document.getElementById("game-board").appendChild(a);
}

function makePopulationLocation() {
    Array.from({ length: popArea }, (_, i) => addSquare(i));
}

function createBoard() {
    makePopulationLocation();
}

createBoard();