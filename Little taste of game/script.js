const Mybox = document.getElementById('caixita')

let moveAmount = 10; //quantos px vc quer q a imagem se mova (10 vai se mover a 10 px) /isso seria como uma 
//velocidade
let x = 0;
let y = 0;

document.addEventListener('keydown', event =>{

    if(event.key.startsWith('Arrow')){

        event.preventDefault();

        switch(event.key){
            case 'ArrowUp' :
                y -= moveAmount;
            break;
            case 'ArrowDown' :
                y += moveAmount;
            break;
            case 'ArrowLeft' :
                x -= moveAmount;
            break;
            case 'ArrowRight' :
                x += moveAmount;
            break;
        }

        Mybox.style.top = `${y}px`
        Mybox.style.left = `${x}px`
    }
})