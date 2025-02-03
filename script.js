const player = document.querySelector('.player');
const enemy = document.querySelector('.enemy');
const moveLeftButton = document.getElementById('move-left');
const moveRightButton = document.getElementById('move-right');
const jumpButton = document.getElementById('jump');

let playerX = 20;
let playerY = 10;
let isJumping = false;
let jumpVelocity = 0;

const moveSpeed = 10;
const gravity = 1;
const jumpForce = 15;

function updatePlayerPosition() {
    player.style.left = playerX + 'px';
    player.style.bottom = playerY + 'px';
}

function jump() {
    if (!isJumping) {
        isJumping = true;
        jumpVelocity = jumpForce;
    }
}

function applyGravity() {
    if (isJumping) {
        playerY += jumpVelocity;
        jumpVelocity -= gravity;

        if (playerY <= 10) {
            playerY = 10;
            isJumping = false;
        }
    }
}

function gameLoop() {
    applyGravity();
    updatePlayerPosition();
    requestAnimationFrame(gameLoop);
}

moveLeftButton.addEventListener('click', () => {
    playerX -= moveSpeed;
    if (playerX < 0) playerX = 0;
    updatePlayerPosition();
});

moveRightButton.addEventListener('click', () => {
    playerX += moveSpeed;
    if (playerX > 370) playerX = 370;
    updatePlayerPosition();
});

jumpButton.addEventListener('click', jump);

gameLoop();
