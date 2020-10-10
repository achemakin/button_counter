import style from './button.css';

const button = text => {
    let btn = document.createElement('button');
    btn.className = 'button-with-counter';    
    btn.textContent = text;    
    document.querySelector('body').append(btn);   
}

export default button;