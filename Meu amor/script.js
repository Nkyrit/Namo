const messages = [
    "Tem certeza disso?",
    "Certeza mesmo??",
    "Você pensou bem?",
    "Mais uma chance, vai",
    "Eu tô ficando triste...",
    "Muito triste",
    "Última vez que eu peço... (talvez)",
    "Tá bom... parei de insistir 😔",
    "Mentira, me diz que sim, vai! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "eu&vc.html";
}

function handleYesClick() {
  document.body.innerHTML = "<h1 style='color: white; text-align: center;'>Te amo, meu amor! ❤️<br>Levando você pro nosso cantinho...</h1>";
  setTimeout(() => {
    window.location.href = "eu&vc.html";
  }, 3000);
}