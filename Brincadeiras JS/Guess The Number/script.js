const submit = document.getElementById('Submit')
let result = document.getElementById('Result')

let Thenumber = Math.floor(Math.random() * 100) + 1;

submit.onclick = () => {

    let text = document.getElementById('imput').value
    text = Number(text)

    if(isNaN(text)){
        alert('Put a Number you fool')
    }

    if(text > Thenumber){
        result.textContent = `Your Choice was ${text} it's Hot Try less`
    }else if(text < Thenumber){
        result.textContent = `Your Choice was ${text} it's Cold Try More`
    }else{
        result.textContent = 'Congratulations You Catch the Number 🎉'
        result.style.color = 'Green'
    }
}
document.addEventListener('keypress', event =>{
    if(event.key === 'Enter'){
        return submit.onclick()
    }
})