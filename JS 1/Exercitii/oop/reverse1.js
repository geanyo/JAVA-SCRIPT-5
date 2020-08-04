class ReversibleString extends String {
    reverse() {
        return this
                    .split('')
                    .reverse()
                    .join('');
    }
}

var myName= new ReversibleString("Geanina");
myName.reverse();
console.log(myName.reverse());
console.log(myName.toUpperCase());
console.log(myName.reverse().toUpperCase());