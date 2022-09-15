const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 600;

const background = new Image();
background.src = "resources/images/space.png";

function game() {
    console.log("game runs...");
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);


}

setInterval(game, 1000 / 60);