import "https://unpkg.com/vue/dist/vue.js"
import "https://unpkg.com/vuex/dist/vuex.js"
import "https://unpkg.com/vue-router/dist/vue-router.js"

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        increments: 0,
        decrements: 0,
        mesage: 'Hello Vuex!'
    },
    getters: {
        count: state => state.increments - state.decrements
    },
    mutations: {
        increment: (state, n) => state.increments += n,
        decrement: (state, n) => state.decrements += n,
        updateMessage: (state, newMessage) => state.message = newMessage
    }
})

const PlusButton = {
    template: `<button @click='increment'>+</button>`,
    methods: {
        increment: () => store.commit('increment', 1)
    }
}
        // ------     () =>    ------ METODA CARE NU PRIMESTE NICIUN PARAMETRU

const MinusButton = {
    template: `<button @click='decrement'>-</button>`,
    methods: {
        decrement: () => store.commit('decrement', 1)
    }
}

const PlusTenButton = {
    template: `<button @click='increment'>+ 10</button>`,
    methods: {
        increment: () => store.commit('increment', 10)
    }
}

const MinusTenButton = {
    template: `<button @click='decrement'>- 10</button>`,
    methods: {
        decrement: () => store.commit('decrement', 10)
    }
}

const MyInput = {
    template: `<input type="text" :value="message" @input="updateMessage"></input>`,
    methods: {
        updateMessage: (event) => store.commit('updateMessage', event.target.value)
    },
    computed: {
        message: () => store.state.mesage
    }
}

new Vue({
    el: `#app`,
    store,
    components: {PlusButton, PlusTenButton, MinusButton, MinusTenButton, MyInput},
    template: `
        <div>
            <p>{{count}}</p>
            <p>
                <plus-button></plus-button>
                <minus-button></minus-button>
                <plus-ten-button></plus-ten-button>
                <minus-ten-button></minus-ten-button>
                <my-input></my-input>
            </p>
        </div>
    `,
    computed: {
        count() {
            return this.$store.getters.count  
            // return store.getters.count   ------ SAU ASA
        }
    }
})

// const store = new Vuex.Store({
//     state: {
//     count: 0
//     },
//     mutations: {
//         increment: state => state.count++,
//         decrement: state => state.count--
//     }
// })

// const PlusButton = {
//     template: `<button @click='increment'>+</button>`,
//     methods: {
//         increment: () => store.commit('increment')
//     }
// }

// const MinusButton = {
//     template: `<button @click='decrement'>-</button>`,
//     methods: {
//         decrement: () => store.commit('decrement')
//     }
// }

// new Vue({
//     el: `#app`,
//     store,
//     components: {PlusButton, MinusButton},
//     template: `
//         <div>
//             <p>{{count}}</p>
//             <p>
//                 <plus-button></plus-button>
//                 <minus-button></minus-button>
//             </p>
//         </div>
//     `,
//     computed: {
//         count() {
//             return store.state.count  
//             // return this.$store.state.count   ------ SAU ASA
//         }
//     }
// })



//     methods: {
// //      ------     () =>    ------ METODA CARE NU PRIMESTE NICIUN PARAMETRU
// // mai jos facem commit pe doua mutatii
//         increment: () => store.commit('increment'),
//         decrement: () => store.commit('decrement')
//     }
// GETTERS ----- PROPRIETATI CALCULATE


