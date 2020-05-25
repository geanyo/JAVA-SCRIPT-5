import "https://unpkg.com/vue/dist/vue.js"
import "https://unpkg.com/vuex/dist/vuex.js"
import "https://unpkg.com/vue-router/dist/vue-router.js"

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment: state => state.count++,
        decrement: state => state.count--
    }
})

const PlusButton = {
    template: `<button @click='increment'>+</button>`,
    methods: {
        increment: () => store.commit('increment')
    }
}

const MinusButton = {
    template: `<button @click='decrement'>-</button>`,
    methods: {
        decrement: () => store.commit('decrement')
    }
}

new Vue({
    el: `#app`,
    store,
    components: {PlusButton, MinusButton},
    template: `
        <div>
            <p>{{count}}</p>
            <p>
                <plus-button></plus-button>
                <minus-button></minus-button>
            </p>
        </div>
    `,
    computed: {
        count() {
            return store.state.count  
            // return this.$store.state.count   ------ SAU ASA
        }
    }
})
//     methods: {
// //      ------     () =>    ------ NU PRIMIM NICIUN ARGUMENT, parametru zero
// // mai jos facem commit pe doua mutatii
//         increment: () => store.commit('increment'),
//         decrement: () => store.commit('decrement')
//     }


