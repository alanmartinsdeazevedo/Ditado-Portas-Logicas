const canvas = document.getElementById("ditadoGameCanvas");
const ctx = canvas.getContext("2d");

const portasLogicas = [
    { name: "NOT", image: 'assets/img/not.jpg'},
    { name: "NAND", image: 'assets/img/nand.jpg' },
    { name: "NOR", image: 'assets/img/nor.jpg' },
    { name: "XNOR", image: 'assets/img/xnor.jpg'},
    { name: 'AND', image: 'assets/img/and.jpg'},
    { name: "OR", image: 'assets/img/or.jpg' },
    { name: "XOR", image: 'assets/img/xor.jpg' },
];

function getPorta() {
    const randomIndex = Math.floor(Math.random() * portasLogicas.length);
    return doors[randomIndex];
}

let Index = 0;
let pontos = 0;
let timer = 60;
let playerInput = "";
let timerId;

const errouAudio = document.getElementById("errouAudio");

const backgroundImage = new Image();
backgroundImage.src = '/assets/img/board.jpg';
backgroundImage.onload = function() {
    drawAtual();
};

function playErrou() {
    if (errouAudio.readyState === HTMLMediaElement.HAVE_ENOUGH_DATA) {
        errouAudio.play();
    }
}

function playFail() {
    if (failAudio.readyState === HTMLMediaElement.HAVE_ENOUGH_DATA) {
        failAudio.play();
    }
}

function drawAtual() {
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    ctx.font = "20px Arial";
    
    const portaImage = new Image();
            portaImage.src = portasLogicas[Index].image;
            portaImage.onload = function() {
                ctx.drawImage(portaImage, 225, 150, 180, 100);
            };

    ctx.fillText(`Tempo: ${timer}`, 85, 93);
    ctx.fillText(`Resposta: ${playerInput}`, 70, 320);
    ctx.fillText(`Pontos: ${pontos}`, 450, 93);
}

function updateTimer() {
    timer--;
    drawAtual();

    if (timer <= 0) { 
        backgroundMusic.pause();
        playFail();
        alert(`Tempo esgotado! T.T | Resposta: ${portasLogicas[Index].name}`);
    } else {
        timerId = setTimeout(updateTimer, 1000);
    }
}

function restartGame() {
    clearTimeout(timerId); // Corrige bug do timer
    backgroundMusic.play();
    Index = 0;
    pontos = 0;
    timer = 60;
    playerInput = "";
    drawAtual();
    updateTimer();
    
}

function verificar() {
    const respostaCorreta = portasLogicas[Index].name.toUpperCase();
    if (pontos === 100) {
        alert("Você ganhou o jogo!");
        return;
    } else if (playerInput.toUpperCase() === respostaCorreta) {
        pontos += 10;
    } else {
        timer -= 5;
        playErrou();
        drawAtual();
    }

    // Próxima porta
    Index = (Index + 1) % portasLogicas.length;
    playerInput = "";
    drawAtual();
}

window.addEventListener("keydown", function (e) {
if (e.key === "Enter") {
    verificar();
} else if (e.key === "Backspace") {
    // Corrigir o bug do backspace
    playerInput = playerInput.slice(0, -1);
    drawAtual();
} else {
    playerInput += e.key;
    drawAtual();
}
});

drawAtual();
updateTimer();
backgroundMusic.play();