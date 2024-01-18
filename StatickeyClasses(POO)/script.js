//uma key static Significa q a variavel pertence somente a classe 
//so é possivel altera-la usando User.----- pois ela so pode se alterada na
//classe

class User{
    static Usercount = 0;

    constructor(username){
        this.username = username;
        User.Usercount++;
    }

    static getUsercount(){
        console.log(`There are ${User.Usercount} users Online`);
    }
    sayHello(){
        console.log(`Hello My Name is ${this.username}`)
    }
}

const user1 = new User("tua mae");
const user2 = new User("tua irma");
const user3 = new User("tuécorno");
const user4 = new User("tuabunda");

user1.sayHello();
user2.sayHello();
user3.sayHello();
user4.sayHello();

User.getUsercount();