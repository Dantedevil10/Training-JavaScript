//callback (Função faça isso depois chame essa outra função para ser executada)

//hello(wait);

//function hello(callback){
  //  console.log('Teste 1')  //Vai Funcionar mais vai dar erro callback Não é uma Função
  //  callback();             // => Quando adicionar wait no Hello(wait)
                            //o Erro Deverá sumir
//}

//function wait(){
 //   console.log('Teste 2')
//}

sum(Displayconsole, 1 ,2)    //Resultado = 3  (1 + 2 = 3)

function sum(callback ,x ,y){
    let result = x + y
    callback(result);
}

function Displayconsole(result){
    console.log(result)
}