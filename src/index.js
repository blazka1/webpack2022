import './style/h1.scss';

import pickha from './img/huinia.jpg'

function component() {
    const element = document.createElement('div');

    element.innerHTML = 'Hello Webpack 5';
    element.classList.add('hello');

    // Пример использования картинки
    const myIcon = new Image();
    myIcon.src = pickha;

    element.appendChild(myIcon);

    return element;
}

document.body.appendChild(component());


