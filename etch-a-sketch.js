const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');
const MOVE_AMOUNT = 25;

const { width, height } = canvas;

// create random starting points on the canvas

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// draw function
function draw({ key }) {
//incriment hue into rainbow

    hue += 1;
    ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
// starting path
    ctx.beginPath();
    ctx.moveTo(x, y);
// move x and y values depending on the user inputs
    switch (key) {
        case 'ArrowUp':
            y -= MOVE_AMOUNT;
            break;
        case 'ArrowRight':
            x += MOVE_AMOUNT;
            break;
        case 'ArrowDown':
            y += MOVE_AMOUNT;
            break;
        case 'ArrowLeft':
            x -= MOVE_AMOUNT;
            break;
            default:
            break;        
    }
    ctx.lineTo(x, y);
    ctx.stroke();

}

// handler for keys
function handleKey(e) {
    if (e.key.includes('Arrow')) {
        e.preventDefault();
        draw({ key: e.key} );
    }
}

// listening for arrow keys
window.addEventListener('keydown', handleKey);