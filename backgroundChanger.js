const button = document.querySelector('button');
const body = document.querySelector('body');
const h1 = document.querySelector('h1');
button.addEventListener('click', () => {
    let random = Math.floor(Math.random() * 255) + 1;
    let random2 = Math.floor(Math.random() * 255) + 1;
    let random3 = Math.floor(Math.random() * 255) + 1;
    body.style.backgroundColor = `rgb(${random}, ${random2}, ${random3})`;
    h1.innerText = `rgb(${random}, ${random2}, ${random3})`;
})
