var activePlayer= 'x';

var app= new Vue({
    el: "#app",
    data: {
        table: [
            '', '', '', '', '', '', '', '', '', 
        ],
        activePlayer: "X",
        finished: false
    },
    methods: {
        // index reprezinta celula din tabel pe care se face mutarea
        makeMove(index) {
            // (guard clause) ----- verificam daca este ceva pe acea casuta/celula
            if (this.table[index] != '') return;
            //  folosim splice pentru a permite reactivitatea proprietatii tabelului
            this.table.splice(index, 1, this.activePlayer);
            // schimbam jucatorul activ si verificam daca s-a terminat jocul dupa aceasta mutare
            this.activePlayer= this.activePlayer== 'x' ? 'o' : 'x';
            this.checkFinished();
        },
        checkFinished() {
            this.checkComplete(this.table.filter((value, index) => index<3));
            this.checkComplete(this.table.filter((value, index) => index>2 && index<6));
            this.checkComplete(this.table.filter((value, index) => index>=5));
            this.checkComplete(this.table.filter((value, index) => index % 3 ==0));
            this.checkComplete(this.table.filter((value, index) => index % 3 ==1));
            this.checkComplete(this.table.filter((value, index) => index % 3 ==2));
            this.checkComplete(this.table.filter((value, index) => index % 3 ==2));
            this.checkComplete(this.table.filter((value, index) => index % 4 ==0));
            this.checkComplete(this.table.filter((value, index) => [2, 4, 6].includes(index)));
        },
        checkComplete(cells) {
            if(cells.every(cell => cell == 'x')
            || cells.every(cell => cell == 'o')
            ) {
                this.finished= true;
            }
        }
    }
})