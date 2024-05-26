import data from '../data/quiz2.json' with { type: 'json' };
import { BoardGame } from './game.js'


//start game button
document.getElementById("start-game_btn").addEventListener("click", () => {
    document.getElementById("start-game").classList.toggle("hidden");
    document.getElementById("quiz").classList.remove("hidden")
});


//Game Board

const game = new BoardGame(data.results);

console.log(game.showQuestion())
