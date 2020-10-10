import button from './button.js';


const body = document.querySelector('body');

const textContent = (number=0) => {  
    let titles = ['клик', 'клика', 'кликов'];
    const cases = [2, 0, 1, 1, 1, 2];  
    return number + ' ' + titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
}

button(textContent());
button(textContent(2));
button(textContent(5));

body.addEventListener('click', (event) => {
    console.log(event)
    if (event.target.querySelector = '.button-with-counter') {
        let count = parseInt(event.target.textContent)+1;
        event.target.textContent = textContent(count);
    };        
});