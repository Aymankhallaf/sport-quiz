
class Question {
    constructor(q) {
        this.qText = q.question;
        this.correctAnswer = q.correct_answer;
        this.incorrect_answers = q.incorrect_answers;
        this.choices = this.getChoices();


    }
    /**
     * puts the correct answer and incorrect answers in one array.
     * 
     *      */
    getChoices() {
        const choices = [...this.incorrect_answers, this.correctAnswer];
        return shuffle(choices);

    }

}


class BoardGame {
    constructor(questionList, numberOFQuestions) {
        this.questionList = questionList;
        this.numberOFQuestions = numberOFQuestions;
        this.answeredQuestions = []
        this.score = 0;
        this.nQuestion = 1;
        this.currentQuestion = this.showQuestion();
    }

    showQuestion() {
        const q = getRandomQuestion(this.questionList);
        this.answeredQuestions.push(q);
        this.currentQuestion = new Question(q);
        return this.currentQuestion
    }

    isGameOver() {
        return this.nQuestion > this.numberOFQuestions;
    }

    isCorrect(choiceAnswer) {
        return (choiceAnswer === this.currentQuestion.correctAnswer)
    }

    updateBoardGame(isCorrect) {
        if (this.isGameOver()) {

            console.log("gameover");
            return
        }
        this.showQuestion();
        this.nQuestion++;
        if (isCorrect) {
            this.score += 10;
        }
    }



}


/**
 * Get a random question from list.
 * @param {array} questionsLst a list of question;
 * @returns {object} a random question.
 */
function getRandomQuestion(questionsLst) {

    return questionsLst[Math.floor(Math.random() * Object.keys(questionsLst).length)];


}

/**
 * Shuffles any array.
 * @param {*} array 
 * @returns the same array after shuffling
 */
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
};



export { BoardGame }