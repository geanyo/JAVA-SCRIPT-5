import "https://cdnjs.cloudflare.com/ajax/libs/js-sha1/0.6.0/sha1.min.js"
class User {
    constructor(email, password) {
        this.email = email
        this.hashedPassword = sha1('password')
        this.isLoggedIn = false
        this.cart = null
    }
    logIn(password) {
        if (this.hashedPassword != sha1(password)) {
            return false;
        }
        this.isLoggedIn = true
        if (!this.cart) {
            this.cart = new ShoppingCart()
        }  
    }
}

class Users {
    constructor() {
        this.users = []
    }
    searchUserWithEmail(email) {
        this.users.find(user => user.email == email)
    }
    userExists(email) {
        return this.users.some(user => user.email == email)
    }
    addUser(email, password) {
        if (this.userExists(email)) {
            throw new Error('User already exists')
        }
        let newUser = new User(user, password)
        this.users.push(newUser)
    }
}