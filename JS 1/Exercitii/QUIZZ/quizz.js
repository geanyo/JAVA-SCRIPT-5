import "https://unpkg.com/vue/dist/vue.js"
import "https://unpkg.com/vuex/dist/vuex.js"

class Question {
    constructor(text, answers, correctAnswer) {
        this.text = text
        this.answers = answers
        this.correctAnswerIndex = correctAnswer
        this.answer = null
    }
    giveAnswer(answer) {
        this.answer = answer
    }
    hasCorrectAnswer() {
        return this.answer === this.correctAnswer
    }
    calculatePoints() {
        if(this.hasCorrectAnswer()) {
            return 1;
        }
        return 0;
    }
}

class Quiz {
    constructor(questions) {
        this.questions = questions
        this.activeQuestion = 0
        this.finished = false
    }
    answerQuestion(answer) {
        if (this.finished) {
            return;
        }
        this.questions(this.activeQuestion).giveAnswer(answer)
        if (this.isLastQuestion()) {
            this.finished()
        } else {
            this.activeQuestion++
        }
    }
    isLastQuestion() {
        return this.activeQuestion == this.questions.length - 1
    }
    finish() {
        this.finished = true
    }
    calculateScore() {
        this.questions.reduce(
            (score, question) => score + question.calculatePoints(),
            0
        )
    }
}

new Vuex.Store({
    state: {
        quiz: new Quiz(
            [
                new Question(
                    'Cati litri de apa este bine sa bei pe zi?',
                    [
                        '1 litru',
                        '0,5 litri',
                        '2 litri',
                        '5 litri',
                    ],
                    3
                ),
                new Question(
                    'Cum se poate modifica starea din Vuex?',
                    [
                        'folosind mutatii',
                        'modificand direct proprietatile starii',
                        'apeland direct metoda din mutatie',
                        'starea nu se poate modifica',
                    ],
                    1
                )
            ]
        )
    },
    mutations: {
        answerQuestion: (state, answer) => state.quiz.answerQuestion(answer)
    },
    getters: {
        currentQuestionAnswers: (state) => state.quizz.question[state.quiz.activeQuestion].answers,
        isQuizFinished: (state) => state.quiz.finished,
        quizScore: (state) => state.calculateScore()
    }
});

const quiz = {
    template: `

    `,
    methods: {
        answerQuestion(answer) {
            store.commit('answerQuestion', answer)
        }
    },
    computed: {
        currentQuestionAnswers: () => store.state.getters.currentQuestionAnswers,
        isQuizFinished: (state) => state.quiz.finished,
        quizScore: (state) => state.calculateScore()
    },
}