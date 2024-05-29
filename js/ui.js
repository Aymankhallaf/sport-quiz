export function displayBoard(game) {
    
    const quizTemplate = document.getElementById("quiz-template")
    let clone = document.importNode(quizTemplate.content, true);
    clone.querySelector('.js-quiz-ttl').innerText = `Question ${game.nQuestion} `;
    clone.querySelector('.js-quiz-score').innerText = `Score ${game.score} `;
    clone.querySelector('.js-quiz__question').innerText = game.currentQuestion.qText;
    //answers
    const answersTemplate = document.getElementById("answers-template");
    const answerSection = document.getElementById("quiz-answers");
    game.currentQuestion.choices.forEach(a => {
        const answerClone = document.importNode(answersTemplate.content, true);
        const answerTag = answerClone.querySelector('.js-quiz__answer');
        answerTag.addEventListener("click", (e) => {
            console.log(e.target.innerText);
            console.log(e.target.innerHTML);
            console.log(game.isCorrect(e.target.innerText.trim()));
            game.updateBoardGame(game.isCorrect(e.target.innerText.trim()));
        })
        answerTag.innerText = a;
        answerSection.appendChild(answerTag);
    });
    const quizSection = document.getElementById("quiz");
    quizSection.innerHTML = '';
    quizSection.appendChild(clone);
    quizSection.appendChild(answerSection);


}




// function checkAnswer(e) {

// }