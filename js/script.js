const gridElement = document.querySelector('section.grid');


for (let index = 1; index < 101; index++) {
    const squareElement = document.createElement('article');
    squareElement.classList.add('square');

    const contentEL = document.createElement('span');
    contentEL.classList.add('content');
    contentEL.append(index);
    squareElement.appendChild(contentEL)
    
    squareElement.addEventListener('click', function(){
        squareElement.classList.add('active');
    });
     gridElement.appendChild(squareElement);
}