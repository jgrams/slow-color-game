const popArea = 100;
const board = document.getElementById("game-board");
let boardSquares = [];

function makeBoardId(number) {
    return "board-square-" + number;
}

function setBoardGridWidth() {
    let value = "repeat(" + parseInt(Math.sqrt(popArea)) + ", minmax(0, 1fr))";
    board.style.gridTemplateColumns = value;
    board.style.gridTemplateRows = value;
}

function addSquare(element, index) {
    let square = document.createElement("div");
    square.classList.add("population-square");
    square.dataset.currentPopulation = "";
    square.id = makeBoardId(index);
    element.appendChild(square);
    return square;
}

function makePopulationLocation() {
    boardSquares = Array.from({ length: popArea }, (_, i) => addSquare(board, i));
}

function createBoard() {
    setBoardGridWidth();
    makePopulationLocation();
}

createBoard();

const popTypes = { R: { prod: 2, con: 1, display: "R" }, G: { prod: 3, con: 2, display: "G" }, B: { prod: 2, con: 1, display: "B" } };
const popKeys = Object.keys(popTypes);
const stockPile = {};
const existingGame = {};

function initGame() {
    let storedGame = localStorage.getItem('currentGame');
    if (storedGame == null) {
        createNewSetup();
    } else {
        existingGame = JSON.parse(storedGame);
    }
}

function createNewSetup() {
    boardSquares.slice(0,5).forEach(element => {
        setPopulation(chooseRandomPopulation(), element);
    });
}

function chooseRandomPopulation() {
    return popTypes[popKeys[~~(popKeys.length * Math.random())]];
}

function setPopulation(popType, boardSquare) {
    boardSquare.dataset.currentPopulation = popType.display;
}

initGame();