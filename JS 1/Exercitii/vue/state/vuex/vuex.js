import "https://unpkg.com/vue/dist/vue.js"
import "https://unpkg.com/vuex/dist/vuex.js"
import "https://unpkg.com/vue-router/dist/vue-router.js"

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment: state => state.count++,
        decrement: state => state.count--
    }
})

new Vue({
    el: `#app`,
    store,
    template: `
        <div>
            <p>{{count}}</p>
            <p>
                <button @click='increment'>+</button>
                <button @click='decrement'>-</button>
            </p>
        </div>
    `,
    computed: {
        count() {
            return store.state.count
        }
    },
    methods: {
//      ------     () =>    ------ NU PRIMIM NICIUN ARGUMENT, parametru zero
// mai jos facem commit pe doua mutatii
        increment: () => store.commit('increment'),
        decrement: () => store.commit('decrement')
    }
})

