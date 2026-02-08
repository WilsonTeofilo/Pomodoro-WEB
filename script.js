
// Tempo em segundos
let tempo = 0;

// Intervalo do setInterval
let intervalo = null;

// -------------------------------
// Pegando elementos do HTML
// -------------------------------
const timer = document.getElementById("timer");

const minutosInput = document.getElementById("minutos");
const segundosInput = document.getElementById("segundos");

const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");

// -------------------------------
// Som de alarme (arquivo local)
// -------------------------------
function tocarSom() {
  const audio = new Audio("assets/AAAAI.mp3");
  audio.volume = 0.7;
  audio.play();
}

// -------------------------------
// Atualiza o timer na tela
// -------------------------------
function atualizarTela() {
  let minutos = Math.floor(tempo / 60);
  let segundos = tempo % 60;

  // Coloca zero na frente
  if (segundos < 10) {
    segundos = "0" + segundos;
  }

  timer.innerText = `${minutos}:${segundos}`;
}

// -------------------------------
// Define o tempo com base nos inputs
// -------------------------------
function definirTempoInicial() {
  let min = parseInt(minutosInput.value) || 0;
  let seg = parseInt(segundosInput.value) || 0;

  // Limita segundos no máximo 59
  if (seg > 59) seg = 59;

  tempo = (min * 60) + seg;

  atualizarTela();
}

// -------------------------------
// Iniciar contador
// -------------------------------
function iniciar() {
  // Evita criar vários intervalos
  if (intervalo !== null) return;

  // Define o tempo antes de começar
  definirTempoInicial();

  // Se tempo for zero, não inicia
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

// -------------------------------
// Pausar contador
// -------------------------------
function pausar() {
  clearInterval(intervalo);
  intervalo = null;
}

// -------------------------------
// Resetar contador
// -------------------------------
function resetar() {
  clearInterval(intervalo);
  intervalo = null;

  definirTempoInicial();
}

// -------------------------------
// Eventos dos botões
// -------------------------------
startBtn.addEventListener("click", iniciar);
pauseBtn.addEventListener("click", pausar);
resetBtn.addEventListener("click", resetar);

// -------------------------------
// Timer começa atualizado na tela
// -------------------------------
definirTempoInicial();
