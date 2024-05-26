export function displayBoard(game) {
    const quizTemplate = document.getElementById("quiz-template")
    let clone = document.importNode(quizTemplate.content, true);
    clone.querySelector('.js-quiz-ttl').innerText = `Question ${game.nQuestion} `;
    clone.querySelector('.js-quiz-score').innerText = `Score ${game.score} `;
    clone.querySelector('.js-quiz__question').innerText = game.currentQuestion.qText;
    //clone.querySelector('.js-quiz__question').innerText = game.currentQuestion.qText ;
    const quizSection=document.getElementById("quiz")
    quizSection.appendChild(clone);

    console.log(quizTemplate)

}
