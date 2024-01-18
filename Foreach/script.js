let Numbers = [1,2,3,4,5,6,7,8,9,10]

Numbers.forEach(Double)
Numbers.forEach(Display)


function Double(element,index,array){     //se tiver algo fora dessa ordem o JS executa fora da ordem inclui o
    array[index] = element * 2 ;          //forEach
}

function Display(element){
    console.log(element)
}