import data from '../data/quiz2.json' with { type: 'json' };
import { BoardGame } from './game.js'
import { displayBoard } from './ui.js';


//start game button
document.getElementById("start-game_btn").addEventListener("click", () => {
    document.getElementById("start-game").classList.toggle("hidden");
    document.getElementById("quiz").classList.remove("hidden");
    startGame();

});

//restart game button
document.getElementById("restart-game_btn").addEventListener("click", () => {
    document.getElementById("game-over").classList.toggle("hidden");
    document.getElementById("quiz").classList.remove("hidden");
    startGame();

});





/**
 * start game by creating a new boardGame and display it.
 */
function startGame() {
    const game = new BoardGame(data.results, 3);
    displayBoard(game);
}

