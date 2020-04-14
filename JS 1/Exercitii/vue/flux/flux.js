var app= new Vue({
el: '#app',
data: {
    // good: false
    good: false,
    todo: [
        'Stay at home',
        'Be safe',
        'Learn VUEJS'
    ]
},
methods: {
    hour() {
        let now= new Date();
        return now.getHours();
    },
    addNewItem() {
        this.todo.splice(2, 1, 'Test arrays.');
        // this.todo.shift(); ATAT TIMP CAT FAC METODE PE ARRAY< TOTUL FUNCTIONEAZA PERFECT
    }
}
});