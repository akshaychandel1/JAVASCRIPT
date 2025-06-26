class User {
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password 
}
    encryptPassword(){
        return `${this.password}abc`
    }
}

const userDetails = new User("Akshay","akshay@gmail.com", "123")
console.log(userDetails);
console.log(userDetails.encryptPassword());

