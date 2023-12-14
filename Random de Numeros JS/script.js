let a
let b
let c 


document.getElementById('bt1').onclick = function(){
    a = Math.floor(Math.random() * 6) + 1
    b = Math.floor(Math.random() * 9) + 1
    c = Math.floor(Math.random() * 50) + 1
    
    document.getElementById('n1').innerText = a
    document.getElementById('n2').innerText = b
    document.getElementById('n3').innerText = c
}