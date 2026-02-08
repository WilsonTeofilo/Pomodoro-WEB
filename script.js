
// Tempo total em segundos
let tempo = 0;

// Controle do intervalo
let intervalo = null;

// Pegando elementos do HTML

const timer = document.getElementById("timer");

const minutosInput = document.getElementById("minutos");
const segundosInput = document.getElementById("segundos");

const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");

// Botão e link de tema
const temaBtn = document.getElementById("temaBtn");
const temaLink = document.getElementById("tema");

// Controle do tema
let modoEscuro = false;


//  Som do alarme (arquivo local)

function tocarSom() {
  const audio = new Audio("assets/AAAAI.mp3");
  audio.volume = 0.7;
  audio.play();
}


// Atualiza o timer na tela

function atualizarTela() {
  let minutos = Math.floor(tempo / 60);
  let segundos = tempo % 60;


  if (segundos < 10) {
    segundos = "0" + segundos;
  }

  timer.innerText = `${minutos}:${segundos}`;
}


function definirTempo() {
  let min = parseInt(minutosInput.value) || 0;
  let seg = parseInt(segundosInput.value) || 0;

  // Limita segundos até 59
  if (seg > 59) seg = 59;

  tempo = (min * 60) + seg;

  atualizarTela();
}


//  Iniciar Pomodoro

function iniciar() {
  // Impede vários intervalos
  if (intervalo !== null) return;

  // Define tempo antes de iniciar
  definirTempo();

  // Se for zero, não começa
  if (tempo <= 0) {
    alert("Coloque um tempo válido!");
    return;
  }

  intervalo = setInterval(() => {
    if (tempo > 0) {
      tempo--;
      atualizarTela();
    } else {
      clearInterval(intervalo);
      intervalo = null;

      tocarSom();
      alert("⏰ Tempo acabou!");
    }
  }, 1000);
}


//  Pausar

function pausar() {
  clearInterval(intervalo);
  intervalo = null;
}

//  Resetar

function resetar() {
  clearInterval(intervalo);
  intervalo = null;

  definirTempo();
}

//  Trocar Tema

function trocarTema() {
  if (modoEscuro) {
    // Volta pro claro 
    temaLink.href = "style.css";
    temaBtn.innerText = "🌙";
    modoEscuro = false;
  } else {
    // Vai pro escuro
    temaLink.href = "escuro.css";
    temaBtn.innerText = "☀️";
    modoEscuro = true;
  }
}


startBtn.addEventListener("click", iniciar);
pauseBtn.addEventListener("click", pausar);
resetBtn.addEventListener("click", resetar);

temaBtn.addEventListener("click", trocarTema);

definirTempo();
