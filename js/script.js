const gridElement = document.querySelector('section.grid');


for (let index = 0; index < 100; index++) {
    const squareElement = document.createElement('article');
    squareElement.classList.add('square');
    gridElement.appendChild(squareElement);
}