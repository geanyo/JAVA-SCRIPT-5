// construim o noua aplicatie VUE
var app= new Vue({
    el: '#app',
    data: {
        password: '',
        score: 0,
        message: 'very weak',
        messages: [
            'very week',
            'very week',
            'week',
            'medium',
            'strong',
            'very strong'
        ]
    },
    methods: {
        evaluateScore: function() {
            // definim noul scor initial egal cu 0
            let newScore= 0;
            // evaluam fiecare conditie dintre cele 5 - definim cele 5 conditii
            // adaugam 1 la noul scor pentru fiecare conditie adevarata
            if(this.hasSmallLetter()) {
                newScore += 1;
            } 
            if(this.hasUpperLetter()) {
                newScore += 1;
            } 
            if(this.hasDigit()) {
                newScore += 1;
            } 
            if(this.hasSpecialChar()) {
                newScore += 1;
            } 
            if(this.isLongEnough()) {
                newScore += 1;
            } 
            // inlocuim vechiul scor cu noul scor
            this.score= newScore;
            // inlocuim mesajul cu noul mesaj asociat noului scor
            this.message= this.messages[newScore];
        },
        hasSmallLetter: function() {
            return /[a-z]/.test(this.password);
            // /     /------>>>> reprezinta expresie regulata
        },
        hasUpperLetter: function() {
            return /[A-Z]/.test(this.password);
        },
        hasDigit: function() {
            return /[0-9]/.test(this.password);
        },
            hasSpecialChar: function() {
            return /[^a-zA-Z0-9]/.test(this.password);
            //  de asemenea, se foloseste ^ ca sa excludem anumite informatii si ----->>>> toate caracterele, mai putin a-zA-Z0-9
        },
            isLongEnough: function() {
            return this.password.length >=8;
        }
    }
});
