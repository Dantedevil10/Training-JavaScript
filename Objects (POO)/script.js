//object model (tipo nome = {})
//object model (tipo nome = {
    // (variavel : ,) ("," necessario)
//})
//this. não funciona em função arrow

const Person1 = {
    firstname:"Tua", 
    lastname:"Mae",
    age:"Todos",
    hasacar: false,
    isgay: true,
    saysomethinggay: function(){
        console.log(`me ${this.lastname} dont like pizza`)
    }
};

console.log(Person1);
Person1.saysomethinggay();

const Person2 = {
    firstname:"Tua", 
    lastname:"Irma",
    age:"15",
    hasacar: false,
    isgay: false,
    saysomethinglikeabitch: () => {
        console.log('i like modern pop')
    }
};

console.log(Person2);
Person2.saysomethinglikeabitch();

const Person3 = {
    firstname:"Teu", 
    lastname:"primo",
    age:"18",
    hasacar: false,
    isgay: false,
    saysomethinglikeaman: () => {
        console.log(`${this.lastname} Mindflow Is a Powerfull Band`)     //vai dar undefined
    }
};

console.log(Person3);
Person3.saysomethinglikeaman();