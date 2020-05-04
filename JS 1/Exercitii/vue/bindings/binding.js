var app= new Vue ({
    el: '#app',
    data: {
        isActive: true
    },
    methods: {
        toggleActive() {
            this.isActive= !this.isActive;
        },
        randomColor() {
           return '#' + Math.floor(Math.random()*16777215).toString(16); 
        }
    },
});


// var app= new Vue ({
//     el: '#app',
//     data: {
//         isActive: true
//     },
//     methods: {
//         toggleActive() {
//             this.isActive= !this.isActive;
//         }
//     },
//         computed: {
//         randomColor() {
//            return '#' + Math.floor(Math.random()*16777215).toString(16); 
//         }
//     }
// }); IN ACEST CAZ< SE MODIFICA SI IN HTML: ------ div :style="{ color: randomColor() } DEVINE -------- div :style="{ color: randomColor }



// 16581375 -------- TOATE COMBINATIILE DE CULORI DIN RGB
// DIFERENTA INTRE METHODS SI computed
// METHODS ----- de fiecare data cand se randeaza DOM-ul pe baza proprietatilor, se reapeleaza metoda si se schimba culoarea
// COMPUTED ---- proprietate calculata, culoarea ramane aceeasi pana se randeaza DOM-ul, functia se reapeleaza la nevoie