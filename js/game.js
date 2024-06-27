
/**
 * class question has qText(question text), the correct answer and incorrect answer.
 */
class Question {
    constructor(q) {
        this.qText = q.question;
        this.correctAnswer = q.correct_answer;
        this.incorrect_answers = q.incorrect_answers;
        this.choices = this.getChoices();


    }
    /**
     * gets the correct answer and incorrect answers in one array.
     * 
     *      */
    getChoices() {
        const choices = [...this.incorrect_answers, this.correctAnswer];
        return shuffle(choices);

    }

}

/**
 * have all board information and logic. question list, score, question numeber,..
 */
class BoardGame {
    constructor(questionList, numberOFQuestions) {
        this.questionList = questionList;
        this.numberOFQuestions = numberOFQuestions;
        this.answeredQuestions = []
        this.score = 0;
        this.nQuestion = 1;
        this.currentQuestion = this.getQuestion();
    }

    /**
     * get a random unique question from the list.and push it in an answered question array.
     * @returns {object} the current question.
     */
    getQuestion() {
        let q;
        do {
            q = getRandomQuestion(this.questionList);
        } while (this.answeredQuestions.includes(q));

        this.answeredQuestions.push(q);
        this.currentQuestion = new Question(q);
        return this.currentQuestion;
    }

    /**
     * check if the game is over or not.
     * @returns {boolean}true if the game is over false if it isn't over
     */
    isGameOver() {
        return this.nQuestion > this.numberOFQuestions;
    }

    /**
     * check is the anwer is correct or not.
     * @param {Text} choiceAnswer 
     * @returns {boolean} true if the question is correct and false if it is false.
     */
    isCorrect(choiceAnswer) {
        return (choiceAnswer === this.currentQuestion.correctAnswer)
    }

    /**
     * update the score and the number of question and the shown question.
     * @param {boolean} isCorrect true if the question is correct and false if it is false.
     * @returns 
     */
    updateBoardGame(isCorrect) {
        if (this.isGameOver()) {

            console.log("gameover");
            return
        }
        this.getQuestion();
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