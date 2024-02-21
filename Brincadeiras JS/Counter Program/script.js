let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let result = document.getElementById('Nbrs');

let count = 0;

btn1.onclick = () => {
    count++;
    result.textContent = count;
};
btn2.onclick = () => {
    count = 0;
    result.textContent = count;
};
btn3.onclick = () => {
    count--;
    result.textContent = count;
};