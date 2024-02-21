
//eu simplismente desisti e fui fazer outra coisa que não e geradod de password

let numbers = [1,2,3,4,5]

function essaporra(numbers){
    let miapika = []
    for(let i = 0; i < numbers.length; i++){
       
        miapika[i] = Math.pow(numbers[i] , 2)
        
    }
    return miapika
}


let tomanocu = essaporra(numbers)
console.log(tomanocu)
console.log(numbers)