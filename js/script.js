import data from '../data/quiz2.json' with { type: 'json' };
import { BoardGame } from './game.js'
import { displayBoard } from './ui.js';


//start game button
document.getElementById("start-game_btn").addEventListener("click", () => {
    document.getElementById("start-game").classList.toggle("hidden");
    document.getElementById("quiz").classList.remove("hidden")
});


// Quiz ui



//Game Board

const game = new BoardGame(data.results, 10);
game.showQuestion();
displayBoard(game)



while (game.isGameOver()) {
    displayBoard(game)
}
