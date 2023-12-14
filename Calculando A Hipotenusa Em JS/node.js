//tentando calcular a hipotenusa
let cateto1
let cateto2 
let resultado 
cateto1 = Number(cateto1)
cateto2 = Number(cateto2)


document.getElementById('myButton').onclick = function(){
    cateto1 = document.getElementById('myText1').value
    cateto2 = document.getElementById('myText2').value
    resultado = Math.sqrt ((cateto1 * cateto1) + (cateto2 * cateto2)) 
    document.getElementById('Result').innerText = resultado
    //Tambem Da pra usar o InnerHTML
    //Math.sqrt é para Dar um resultado da Raiz Quadrada
    console.log(resultado)


}