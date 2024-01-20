// funções dentro de outras funções 


function createGame(){

    let score = 0;

    function increaseScore(points){
        score += points;
        console.log(`+${points}pts`)
    }
    function decreseScore(points){
        score -= points;
        console.log(`-${points}pts`)
    }
    function getScore(){
        return score;
    }

    return {increaseScore,decreseScore,getScore};   
}

const game = createGame();

game.increaseScore(10)
game.decreseScore(20000000000)
game.getScore()
console.log(`The Final Score is ${game.getScore()}pts`)