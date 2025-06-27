class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`User Name is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        // username = "akshay"
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A Course Was Added By ${this.username}`);
        
    }
}
const newUser = new Teacher("Kireedula Naresh", "naresh@3112@gmail.com", "123456");
console.log(newUser);
 