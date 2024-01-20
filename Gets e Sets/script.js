// o underline (_) indica q o Atributo é Privado


class Person{
    constructor(firstName, lastName ,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age
    }
    set firstName(newFirstName){
        if(typeof newFirstName === 'string' && newFirstName.length > 0){
            this._firstName = newFirstName   // _ Atributo Privado e o typeof precisa estar entre '' e em letra minuscula
        }else{
            console.error('First Name must be a non-empty String')
        }
    }
    set lastName(newLastName){
        if(typeof newLastName === 'string' && newLastName.length > 0){
            this._lastName = newLastName   // _ Atributo Privado  e o typeof precisa estar entre '' e em letra minuscula
        }else{
            console.error('Last Name must be a non-empty String')
        }
    }
    set age(newAge){
        if(typeof newAge === 'number' && newAge >= 0){
            this._age = newAge   // _ Atributo Privado  e o typeof precisa estar entre '' e em letra minuscula
        }else{
            console.error('Age must be a non-negative Number')
        }
    }
    get firstName(){
        return this._firstName;
    }
    get lastName(){
        return this._lastName;
    }
    get age(){
        return this._age;
    }


}

const person = new Person('Spongebob' , 'Squarepants' , 30);

console.log(person)

