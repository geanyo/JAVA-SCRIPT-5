// var app= new Vue({
//     el: '#app', // elementul pe care il controleaza VUE
//     data: {  // datele aplicatiei (model)
//         message: "Hello Vue!"
//     }
// });

Vue.component(
    'hello',
    {
        'template': "<div>Hello world!</div>"
    }
)

var app= new Vue({
    el: '#app', // elementul pe care il controleaza VUE
    data: {  // datele aplicatiei (model)
        message: "Hello Vue!",
        show: true,
        todos: [
            "Learn Java Script",
            "Learn React",
            "Learn Vue.JS",
            "Be free!",
            "Stay safe"
        ],
        title: "This is a welcome message"
    },
    methods: {
        reverse: function() {
            this.message= this.message
                            .split('')
                            .reverse()
                            .join('');
        }
    }
});
