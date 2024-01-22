//eventListener 
// events: keyup , keydown
// document.addEventListener(event , callback);
//

document.addEventListener('keypress' , event =>{
    console.log(event.key)
});
document.addEventListener('keyup' , event =>{
    console.log(event.key)
});