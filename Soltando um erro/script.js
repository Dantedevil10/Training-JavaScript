//try {} = (encapsula) um codigo que potencialmente pode causar um erro
//catch {} = catch and handle any errors from try 
//finally {} = (opcional) sempre é executado
//


try{
    const dividend = Number(window.prompt('Enter a dividend: '))
    const divisor = Number(window.prompt('Enter a divisor: '))

    if(divisor == 0){
        throw new Error('you cant divide by 0')
    }
    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error('Values must be a Number')
    }

    const result = dividend / divisor
    console.log(result)
} 
catch(error){
    console.error(error)
}
