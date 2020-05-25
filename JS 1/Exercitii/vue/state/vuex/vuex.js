import "https://unpkg.com/vue/dist/vue.js"
import "https://unpkg.com/vuex/dist/vuex.js"
import "https://unpkg.com/vue-router/dist/vue-router.js"

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        increments: 0,
        decrements: 0
    },
    getters: {
        count: state => state.increments - state.decrements
    },
    mutations: {
        increment: (state, n) => state.increments += n,
        decrement: (state, n) => state.decrements += n
    }
})

const PlusButton = {
    template: `<button @click='increment'>+</button>`,
    methods: {
        increment: () => store.commit('increment', 1)
    }
}

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

new Vue({
    el: `#app`,
    store,
    components: {PlusButton, PlusTenButton, MinusButton},
    template: `
        <div>
            <p>{{count}}</p>
            <p>
                <plus-button></plus-button>
                <minus-button></minus-button>
                <plus-ten-button></plus-ten-button>
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
// //      ------     () =>    ------ NU PRIMIM NICIUN ARGUMENT, parametru zero
// // mai jos facem commit pe doua mutatii
//         increment: () => store.commit('increment'),
//         decrement: () => store.commit('decrement')
//     }


