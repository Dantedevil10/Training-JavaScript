let Score = 0;


document.getElementById('BTN').onclick = function(){
    Score++;
    document.getElementById('Myscorem').innerText = Score;
}
document.getElementById('BTNT').onclick = function(){
    if(Score >= 0 && Score <= 10){
        document.getElementById('Terminado').innerText = 'tu ta acabado';
    }else if (Score >= 10 && Score <= 20){
        document.getElementById('Terminado').innerText = 'tu ta melhorando';
    }else if (Score >= 20 && Score <= 40){
        document.getElementById('Terminado').innerText = 'tu ta melhorando pa caraio';
    }else{
        document.getElementById('Terminado').innerText = 'tu ja ta monxtru';
    }
}
