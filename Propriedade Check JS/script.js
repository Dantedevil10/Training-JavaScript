document.getElementById('myBtn').onclick = function (){
const checkbox = document.getElementById('myCheck')
const myass = document.getElementById('Myass')
const pixnes = document.getElementById('MPix')
const dinheru = document.getElementById('MMoney')

if (checkbox.checked){
    alert('Youre Subscribed Thanks')
}else{
    alert('youre not subscribed')
}
if (myass.checked){
    alert('Ill take your ass')
}else if (pixnes.checked){
    alert('Your payment will be in PIx')
}else if (dinheru.checked){
    alert("You'll pay with Monei")
}
else{
    alert('You Must select a payment metohd')
}


}