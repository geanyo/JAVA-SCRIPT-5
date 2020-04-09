class Person {
    constructor(name, age, height) {
        this.name= name;
        this.age= age;
        this.height= height;
    }
    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
        // `` ------>>>>>ghilimele intoarse se folosesc pentru interpolare
    }
}

class Student extends Person {
    constructor(name, age, height, course) {
        super(name, age, height);
        // apelam constructorul parintelui
        // super.constructor(name, age, height); SAU ASA
        
        this.course= course;
        // adaugam proprietatile in plus
    }
    // suprascrierea metodelor - adaug proprietati noi la parintele meu
    sayHello() {
        console.log(`Hello, my name is ${this.name} and I like ${this.course}`);
    }
}

var radu= new Person("Radu", 33, 170);
var andreea= new Student("Andreea", 26, 168, "Java Script");

radu.sayHello();
andreea.sayHello();