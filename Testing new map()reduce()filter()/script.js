let numbers = [1,2,3,4,5,6]

let double = numbers.map(toDouble)

console.log(double)


function toDouble(element,index,array){
    
    return array[index] = element * 2
}