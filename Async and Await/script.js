//Async = faz a função retornar uma promessa
//Await = faz a função Async esperar uma promessa

function walkdog(){
    return new Promise((resolve ,reject) => {
        setTimeout(() => {

            const dogwalked = true

            if(dogwalked){
                resolve('You Walk The Dog!')
            }else{
                reject('You Didnt Walk The Dog')
            }
        },1000);
    });
}
function taketrash(){
    return new Promise((resolve ,reject) => {
        setTimeout(() => {

            const taketr = true

            if(taketr){
                resolve('You take The trash!')
            }else{
                reject('You Didnt take The trash')
            }
        },1500);
    });
}

async function showthis(){
try{
    const wakdogResult = await walkdog();
    console.log(wakdogResult);
    const taketrashResult = await taketrash();
    console.log(taketrashResult);
}
catch(error){
    console.error(error)
}
}

showthis();