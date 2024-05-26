
class Question {
    constructor(q) {
        console.log(q)
        this.qText = q.question;
        this.correctAnswer = q.correct_answer;
        this.incorrect_answers = q.incorrect_answers;
        this.choices = [];
        console.log(this.choices)
        this.getChoices();

    }
    /**
     * puts the correct answer and incorrect answers in one array.
     * 
     *      */
    getChoices() {
        this.incorrect_answers.forEach(a => {
            this.choices.push(a);
        }
        );
        this.choices.push(this.correctAnswer)

    }

}


class BoardGame {
    constructor(questionList, numberOFQuestions) {
        this.questionList = questionList;
        this.numberOFQuestions = numberOFQuestions;
        this.answeredQuestions = []
        this.score = 1;
        this.nQuestion = 1;
        this.currentQuestion = this.showQuestion();
    }

    showQuestion() {
        const q = getRandomQuestion(this.questionList);
        this.answeredQuestions.push(q);
        this.currentQuestion = new Question(q);
        console.log(this.currentQuestion);
        return this.currentQuestion
    }

    isGameOver() {
        return this.nQuestion > this.numberOFQuestions;
    }

    isRightAnswer(choiceAnswer) {
        return (choiceAnswer === this.currentQuestion.correctAnswer)
    }

    updateBoardGame() {
        this.nQuestion = +1;
        if (this.isRightAnswer) {
            this.score = +1;
        }
        this.showQuestion()
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


export { BoardGame }