export function displayBoard(game) {
    const quizTemplate = document.getElementById("quiz-template")
    let clone = document.importNode(quizTemplate.content, true);
    clone.querySelector('.js-quiz-ttl').innerText = `Question ${game.nQuestion} `;
    clone.querySelector('.js-quiz-score').innerText = `Score ${game.score} `;
    clone.querySelector('.js-quiz__question').innerText = game.currentQuestion.qText;
    //answers
    const choices = shuffle(game.currentQuestion.choices);
    const answersTemplate = document.getElementById("answers-template");
    const answerSection = document.getElementById("quiz-answers");
    choices.forEach(a => {
        console.log(a)
        const answerClone = document.importNode(answersTemplate.content, true);
        const answerTag = answerClone.querySelector('.js-quiz__answer');
        answerTag.innerText = a;
        answerSection.appendChild(answerTag);
    });
    const quizSection = document.getElementById("quiz");
    quizSection.innerHTML = '';
    quizSection.appendChild(clone);
    quizSection.appendChild(answerSection);

    console.log(answerSection)

}


/**
 * Shuffles any array.
 * @param {*} array 
 * @returns the same array after shuffling
 */
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
};
