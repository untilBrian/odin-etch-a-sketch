// generate boxes (10px = 1600px)
// user hovers over box
// box turns color
// reset effect 
const sketchGrid = document.querySelector('#sketch-grid');
const restartButton = document.querySelector('button');
const inputField = document.querySelector('input');
let boxCount; 

restartButton.addEventListener('click', () => {
    boxCount = parseInt(inputField.value);
    sketchGrid.innerHTML = '';
    generateSketchGrid(boxCount);
});
//recor userinput 
//generate grid based off of user input

function generateBox(num) {
    length = Math.round(Math.sqrt((160000/num)));

    const box = document.createElement('div');
    box.classList.add('box');
    box.style.width = length + 'px';
    box.style.height = length + 'px';
    box.style.backgroundColor = 'gray';
    box.addEventListener('mouseover', () => {
        box.style.backgroundColor = 'black';
    });
    return box;
}

function generateSketchGrid(num) {
    for (let i = 0; i < num; i++) {
        const box = generateBox(num);
        box.style.flex = '0 0 auto';
        sketchGrid.appendChild(box);
    }
}
    //boxes must change color when hovered