import "https://unpkg.com/vue/dist/vue.js"
import "https://unpkg.com/vue-router/dist/vue-router.js"


const MagicButton = {
    data() {
        return {
            count: 0
        }
    },
    template: `<button @click='increment'>{{ count }}</button>`,
    methods: {
        increment() {
            this.count++;
        }
    },
}

new Vue({
    el: `#app`,
    components: { MagicButton },
    template: `<magic-button></magic-button>`
})