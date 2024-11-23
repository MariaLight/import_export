import { getRandomColor } from './utils.js';

export default function initApp() {
    console.log('Hello world');

    const changeColorButton = document.createElement('button');
    changeColorButton.classList.add('button');
    changeColorButton.textContent = 'Изменить цвет страницы';
    document.body.append(changeColorButton);

    changeColorButton.addEventListener('click', getRandomColor)
}