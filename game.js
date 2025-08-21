let winner = document.getElementById("winner");
let cell = document.querySelectorAll(".cell");
let player1 = document.getElementById("O");
let player2 = document.getElementById("X");
let h2 = document.querySelector("h2");
let reset = document.getElementById("reset");
let newGame = document.getElementById("newGame");

let turn = true;

let combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let functionNotDisabled = true;

cell.forEach((cell) => {
    cell.addEventListener("click", () => {
        if (functionNotDisabled) {
            if (turn) {
                cell.innerText = "O";
                turn = false;
            } else {
                cell.innerText = "X";
                turn = true;
            }
            cell.disabled = true;
            checkwinner();
        }
    });
});

function checkwinner() {

    for (let combination of combinations) {


        if (cell[combination[0]].innerText != "" && cell[combination[1]].innerText != "" && cell[combination[2]].innerText != "") {

            if (cell[combination[0]].innerText == cell[combination[1]].innerText && cell[combination[1]].innerText == cell[combination[2]].innerText) {
                cell[combination[0]].style.backgroundColor = "green";
                cell[combination[1]].style.backgroundColor = "green";
                cell[combination[2]].style.backgroundColor = "green";
                winner.innerText = cell[combination[0]].innerText;
                h2.style.visibility = "visible";
                functionNotDisabled = false;
                if (winner.innerText == "O") {
                    player1.innerText = parseInt(player1.innerText) + 1;
                }
                else if (winner.innerText == "X") {
                    player2.innerText = parseInt(player2.innerText) + 1;
                }
            }

        }


    }
}



reset.addEventListener("click", () => {
    cell.forEach((cell) => {
        cell.innerText = "";
        cell.disabled = false;
        cell.style.backgroundColor = "#56666B";
    });
    winner.innerText = "";
    h2.style.visibility = "hidden";
    functionNotDisabled = true;
});

newGame.addEventListener("click", () => {
    cell.forEach((cell) => {
        cell.innerText = "";
        cell.disabled = false;
        cell.style.backgroundColor = "#56666B";
    });
    winner.innerText = "";
    h2.style.visibility = "hidden";
    functionNotDisabled = true;
    player1.innerText = "0";
    player2.innerText = "0";
});