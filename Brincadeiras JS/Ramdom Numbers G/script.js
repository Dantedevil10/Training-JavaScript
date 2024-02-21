// let max = 100
// let min = 50

// let ramdonnumb = Math.floor(Math.random() * max) + min //neste exemplo pode passar dos 100 ja que e o maximo

// console.log(ramdonnumb)

//para que o max 100 não seja ultrapassado temos que adicionar o * max - min no math ramdon
//ficaria assim

let max = 100
let min = 50

let ramdonnumb = Math.floor(Math.random() * (max - min)) + min //neste exemplo pode passar dos 100 ja que e o maximo

console.log(ramdonnumb)
