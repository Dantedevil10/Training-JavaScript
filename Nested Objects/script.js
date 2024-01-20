//Objetos dentro de outros objetos....


class Person{
    constructor(name ,age,...address){
        this.name = name
        this.age = age
        this.address = new Address(...address);
    }
}
class Address{
    constructor(Street ,city , country){
        this.Street = Street
        this.city = city
        this.country = country
    }
}

const person1 = new Person('Spongebob',30,'Rock bt','Bikini Bottom','Ocean');

console.log(person1)