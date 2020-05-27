import "https://unpkg.com/vue/dist/vue.js";
import "https://unpkg.com/vuex/dist/vuex.js";

class Question {
  constructor(text, answers, correctAnswer) {
    this.text = text;
    this.answers = answers;
    this.correctAnswerIndex = correctAnswer;
    this.answer = null;
  }
  giveAnswer(answer) {
    this.answer = answer;
  }
  hasCorrectAnswer() {
    return this.answer === this.correctAnswer;
  }
  calculatePoints() {
    if (this.hasCorrectAnswer()) {
      return 1;
    }
    return 0;
  }
  isSelectedAnswer(answer) {
    return this.answer == answer;
  }
}

class Quiz {
  constructor(questions) {
    this.questions = questions;
    this.activeQuestion = 0;
    this.finished = false;
  }
  answerQuestion(answer) {
    if (this.finished) {
      return;
    }
    this.questions(this.activeQuestion).giveAnswer(answer);
  }
  next() {
    if (this.isLastQuestion()) {
      this.finished();
    } else {
      this.activeQuestion++;
    }
  }
  isLastQuestion() {
    return this.activeQuestion == this.questions.length - 1;
  }
  finish() {
    this.finished = true;
  }
  calculateScore() {
    this.questions.reduce(
      (score, question) => score + question.calculatePoints(),
      0
    );
  }
  getActiveQuestion() {
    return this.questions[this.activeQuestion];
  }
}

const store = new Vuex.Store({
  state: {
    quiz: new Quiz([
      new Question(
        "Cati litri de apa este bine sa bei pe zi?",
        ["1 litru", "0,5 litri", "2 litri", "5 litri"],
        2
      ),
      new Question(
        "Cum se poate modifica starea din Vuex?",
        [
          "folosind mutatii",
          "modificand direct proprietatile starii",
          "apeland direct metoda din mutatie",
          "starea nu se poate modifica",
        ],
        0
      ),
      new Question(
        "Cum se poate face two-way-binding in Vue?",
        [
          "folosind atributul v-model",
          "nu se poate face two-way-binding in Vue",
          "folosind atributul v-data",
          "folosind v-two-way-binding",
        ],
        0
      ),
    ]),
  },
  mutations: {
    answerQuestion: (state, answer) => state.quiz.answerQuestion(answer),
    next: (state) => state.quiz.next()
  },
  getters: {
    activeQuestion: (state) => state.quiz.getActiveQuestion(),
    isQuizFinished: (state) => state.quiz.finished,
    quizScore: (state) => state.calculateScore(),
  },
})

const quiz = {
  template: `
        <div>
            <p> {{ activeQuestion.text }}</p>
            <ol>
                <li
                    v-for="(answer, index) in activeQuestion.answers"
                    :key="index"
                    @click="answerQuestion(index)"
                    :class="{ selected : activeQuestion.isSelectedAnswer(index) }"
                >
                {{ answer }}
                </li>
            </ol>
            <input type="button" @click="next" value="Next"></input>
        </div>
    `,
  methods: {
    answerQuestion: (answer) => store.commit("answerQuestion", answer),
    next: () => store.commit('next')
  },
  computed: {
    activeQuestion: () => store.getters.activeQuestion,
    isQuizFinished: (state) => store.getters.isQuizFinished,
    quizScore: (state) => store.getters.quizScore,
  },
};

new Vue({
  el: "#app",
  components: { quiz },
  store,
  template: `
    <quiz></quiz>
    `,
});
