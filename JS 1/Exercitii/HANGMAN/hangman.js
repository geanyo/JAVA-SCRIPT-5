var game= {
    words: ['apple', 'orange', 'banana'],
    word: undefined,
    letters: [],
    triesLeft: 6,
    start: function() {
        this.word= this.randomWord();
    },
    randomWord: function() {
        let index= Math.floor(Math.random() * this.words.length);
        return this.words[index];
    },
    tryLetter: function(letter) {
        this.letters.push(letter);
        if(!this.word.split('').includes(letter)) {
            this.triesLeft--;
            // if(!this.word.split('').includes(letter)) {
            //     this.triesLeft--; DACA S-A APASAT PE O TASTA, ATUNCI SCADE NUMARUL DE INCERCARI --- 6,5,4,3,2,1,0
        }
    },
    isDead: function() {
        return this.triesLeft== 0;
    },
    isWinner: function() {
        
    }
}

