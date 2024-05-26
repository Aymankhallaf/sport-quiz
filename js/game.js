
class Question {
    constructor(qText, answer) {
        this.qText = qText;
        this.correctAnswer = answer;
        this.choices = [];
    }
    /**
     * puts the correct answer and incorrect answers in one array.
     * 
     *      */
    getChoices(array) {
        array.forEach(element => {
            this.choices.push(element);
        }
        );
        this.choices.push(this.answer)

    }

}


// console.log(data.results[0]['question'])
// const q1 = new Question(data.results[0]['question'], data.results[0]["correct_answer"])
// q1.getChoices(data.results[0]['incorrect_answers']);
// console.log(shuffle(q1.choices));
// console.log(q1)
class BoardGame {
    constructor(questionList) {
        this.answeredQuestions = []
        this.score = 0;
        this.nQuestion = 0;
        this.questionList = questionList;
        console.log(questionList)
        this.currentQuestion = null;
    }

    showQuestion() {
        const q = getRandomQuestion(this.questionList);
        console.log(q)
        this.answeredQuestions.push(q);
        // this.currentQuestion = new Question(q.question, q.correct_answer);
        // this.currentQuestion.getChoices(q.indexOf)
        // console.log(this.currentQuestion);



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

    console.log(Object.keys(questionsLst).length)
    return questionsLst[Math.floor(Math.random() * Object.keys(questionsLst).length)];


}


export { BoardGame }