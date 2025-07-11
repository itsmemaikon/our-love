/** Contador de Tempo */
function atualizarContador() {
  const dataInicio = new Date(2025, 1, 9, 11, 30, 0); // Ano, Mês (0-11), Dia, Hora, Minuto, Segundo
  const agora = new Date();
  const diferenca = agora - dataInicio;

  // Cálculo dos anos
  const anos = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365.25));

  // Cálculo dos meses
  const meses = Math.floor(
    (diferenca % (1000 * 60 * 60 * 24 * 365.25)) /
      (1000 * 60 * 60 * 24 * 30.4375)
  );

  // Cálculo dos dias restantes
  const dias = Math.floor(
    (diferenca % (1000 * 60 * 60 * 24 * 30.4375)) / (1000 * 60 * 60 * 24)
  );

  // Cálculo das horas
  const horas = Math.floor(
    (diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );

  // Cálculo dos minutos
  const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));

  // Cálculo dos segundos
  const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

  // Atualizando o contador com os valores calculados
  document.getElementById(
    "contador1"
  ).innerText = `${anos} anos, ${meses} meses e ${dias} dias`;
  document.getElementById(
    "contador2"
  ).innerText = `${horas} horas, ${minutos} minutos e ${segundos} segundos!`;
}

setInterval(atualizarContador, 1000);
atualizarContador();

/** Carossel de Fotos */
const imagens = document.querySelectorAll(".carousel img");
let index = 0;
function mudarImagem() {
  imagens[index].classList.remove("active");
  index = (index + 1) % imagens.length;
  imagens[index].classList.add("active");
}
setInterval(mudarImagem, 5000);

/** Frases */
const frases = document.querySelectorAll(".frase");
let fraseIndex = 0;

function mudarFrase() {
  // Esconde todas as frases
  frases.forEach((frase) => {
    frase.style.display = "none";
  });

  // Exibe a próxima frase
  frases[fraseIndex].style.display = "block";

  // Atualiza o índice da próxima frase
  fraseIndex = (fraseIndex + 1) % frases.length;
}

// Inicializa o ciclo de mostrar as frases
setInterval(mudarFrase, 5000);

// Exibe a primeira frase logo ao carregar a página
mudarFrase();

/** Chuva de Emojis **/
function gerarChuvaEmojis() {
  const emojis = ["💖", "💌", "😍", "🥰", "😘", "💑", "🌹", "💕", "💋"];
  const numeroEmojis = 50; // Número de emojis que irão cair
  const container = document.getElementById("chuva-emojis");

  for (let i = 0; i < numeroEmojis; i++) {
    const emoji = document.createElement("div");
    emoji.classList.add("emoji");
    emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];

    // Definir a posição inicial aleatória para o emoji
    emoji.style.left = Math.random() * 100 + "vw"; // Em qualquer lugar da tela

    // Definir uma animação de duração aleatória
    emoji.style.animationDuration = Math.random() * (5 - 3) + 3 + "s"; // Entre 3s e 5s

    // Adiciona o emoji ao container
    container.appendChild(emoji);

    // Após a animação terminar, removemos o emoji
    emoji.addEventListener("animationend", () => {
      container.removeChild(emoji);
    });
  }
}

// Chama a função para gerar a chuva de emojis quando a página carregar
window.onload = gerarChuvaEmojis;

// Chama a função para gerar a chuva de emojis a cada 25 segundos
setInterval(gerarChuvaEmojis, 25000); // Intervalo de 25 segundos

function playAudio() {
  let x = document.getElementById("myAudio");
  x.play();
}
function pauseAudio() {
  let x = document.getElementById("myAudio");
  x.pause();
}
