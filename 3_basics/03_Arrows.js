const user = {
    username : "akshay",
    rollno : 21,

    fun: function() {
        console.log(`${this.username} is loggedIn`);
    }
}
user.fun();
user.username = "sam";
user.fun();
