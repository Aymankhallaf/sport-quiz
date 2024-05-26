
class Question {
    constructor(q) {
        this.qText = q.question;
        this.correctAnswer = q.correct_answer;
        this.choices = [];
        this.getChoices(q);

    }
    /**
     * puts the correct answer and incorrect answers in one array.
     * 
     *      */
    getChoices(q) {

        q.incorrect_answers.forEach(a => {
            this.choices.push(a);
        }
        );
        this.choices.push(this.correctAnswer)

    }

}


// console.log(data.results[0]['question'])
// const q1 = new Question(data.results[0]['question'], data.results[0]["correct_answer"])
// q1.getChoices(data.results[0]['incorrect_answers']);
// console.log(shuffle(q1.choices));
// console.log(q1)
class BoardGame {
    constructor(questionList, numberOFQuestions) {
        this.answeredQuestions = []
        this.score = 0;
        this.nQuestion = 0;
        this.questionList = questionList;
        this.currentQuestion = null;
        this.numberOFQuestions = numberOFQuestions;
    }

    showQuestion() {
        const q = getRandomQuestion(this.questionList);
        this.answeredQuestions.push(q);
        this.currentQuestion = new Question(q);
        console.log(this.currentQuestion);
    }

    isGameOver() {
        return this.nQuestion > this.numberOFQuestions;
    }




}

/**
 * Shuffles any array.
 * @param {*} array 
 * @returns the same array after shuffling
 */
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
};


/**
 * Get a random question from list.
 * @param {array} questionsLst a list of question;
 * @returns {object} a random question.
 */
function getRandomQuestion(questionsLst) {

    return questionsLst[Math.floor(Math.random() * Object.keys(questionsLst).length)];


}


export { BoardGame }