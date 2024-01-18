
//expressar é diferente de declarar uma funçao

//expressar = define a função como valores ou variaveis

const Numbers = [1,2,3,4,5]

const showme = Numbers.map(function(element){
    let show = element * 2
    return show
})

console.log(showme)