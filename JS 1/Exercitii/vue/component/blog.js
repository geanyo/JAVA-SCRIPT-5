Vue.component('hello', {
    // template-ul (html-ul) componentei
   template: '<h3>Welcome to my site</h3>',
//    proprietatile componentei pot fi transmise din exterior // 
    props: [
        'text'
    ]
});

Vue.component('button-counter', {
    template: '<button @click="click">You clicked me {{ clicks }} times</button>',
    data() {
        return {
            clicks: 0
    },
    methods: {
        click() {
            this.clicks++;
        }
    }
});

var app= new Vue({
    el: '#app',
}); 