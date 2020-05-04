Vue.component('task', {
    template: `
        <li :class="{ done: isDone }" class="task" @click="$emit('checked')">  
        <div class="color_and_title">   
            <div class="color" :style="{ backgroundColor: todo.color }"></div> 
            <div class="title">{{ todo.title }}</div>
        </div>
            <div class="controls">
                <!-- <div class="check" @click="$emit('checked')">&#x2713;</div> -->
                <div class="delete" @click="$emit('deleted')">
                    <i class="material-icons">delete</i></div>
            </div>
        </li>
    `,
    props: ['todo']
    // props: ['title', 'isDone', 'color']
});