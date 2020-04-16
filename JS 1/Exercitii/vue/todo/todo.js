var app= new Vue({
    el: '#app',
    data: {
        todos: [],
        task: ''
    },
    methods: {
        saveItem() {
            // adaugam valoare din task in lista de todo
            this.todos.push();
            // resetam task-ul
            this.task= '';
        }
    }
});