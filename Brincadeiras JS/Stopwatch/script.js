const Start = document.getElementById('btn1')
const Reset = document.getElementById('btn2')
const Stop = document.getElementById('btn3')
let Time = document.getElementById('Nbrs')
let breakthetime ;// isso aqui é so pra poder parar o loop interval ,. ele vai guardar o valor do loop
let isRunning = false
let minutes = 0
let seconds = 0
let hours = 0

function contador(){
    if(seconds < 59){
        seconds++

    }else if(seconds == 59){
        seconds = 0
        minutes++
    }
    
    if(minutes == 60){
        minutes = 0
        hours++
    }

    return(
    Time.textContent = `${hours}:${minutes}.${seconds}`
    )
    
}

Start.onclick = ()=>{
    breakthetime = setInterval(contador,1000)
    Start.disabled = true
    isRunning = true
}
Reset.onclick = ()=>{
    clearInterval(breakthetime)
     minutes = 0
     seconds = 0
     hours = 0
    Time.textContent = '00:00:00'
    Start.textContent = 'Start'
    Start.disabled = false
    isRunning = false
}
Stop.onclick = ()=>{
    clearInterval(breakthetime)
    Start.textContent = 'Continue'
    Start.disabled = false

    isRunning ? Start.textContent = 'Continue' : Start.textContent = 'Start'
}