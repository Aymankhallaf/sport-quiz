import data from '../data/quiz2.json' with { type: 'json' };
console.log(data);

class Question {
    constructor(qText, answer) {
        this.qText = qText;
        this.answer = answer;
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


console.log(data.results[0]['question'])
const q1 = new Question(data.results[0]['question'], data.results[0]["correct_answer"])
q1.getChoices(data.results[0]['incorrect_answers']);
console.log(shuffle(q1.choices));
console.log(q1)
class BoardGame {
    constructor(questionList) {
        this.answeredQuestions = []
        this.score = 0;
        this.nQuestion = 0;
        this.questionList = questionList;
    }

    showQuestion() {
        const q = getRandomUniqueQuestion(this.questionList);
        this.answeredQuestions.push(q);
    }


}

/**
 * Shuffles any array.
 * @param {*} array 
 * @returns the same array adter shuffling
 */
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
};


/**
 * Get a random question from list.
 * @param {array} questionsLst a list of question;
 * @returns {array} a random question.
 */
function getRandomQuestion(questionsLst) {

    return questionsLst[Math.floor(Math.random() * array.lenght)];


}
