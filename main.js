const canvas = document.getElementById('effects');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const bluefalls = []; 

function initBlueFalls() {
    for (let i = 0; i < 100; i++) {
        bluefalls.push({ 
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            length: Math.random() * 20 + 5,
            speed: Math.random() * 10 + 5,
            thickness: Math.random() * 2 + 1,
        });
    }
}

function drawFalling() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const bluefall of bluefalls) { 
        ctx.beginPath();
        ctx.moveTo(bluefall.x, bluefall.y);
        ctx.lineTo(bluefall.x, bluefall.y + bluefall.length);
        ctx.strokeStyle = '#00f';
        ctx.lineWidth = bluefall.thickness;
        ctx.stroke();

       
        bluefall.y += bluefall.speed;

   
        if (bluefall.y > canvas.height) {
            bluefall.y = 0 - bluefall.length;
        }
    }

    requestAnimationFrame(drawFalling);
}

initBlueFalls();
drawFalling();
