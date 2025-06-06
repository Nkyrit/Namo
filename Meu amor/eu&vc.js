function updateClock() {
  const startDate = new Date('2023-11-19T00:00:00');
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("clock").innerText = `Estamos juntos há ${days} dias, ${hours}h ${minutes}m ${seconds}s 💘`;
}
setInterval(updateClock, 1000);
updateClock();

const hearts = document.querySelector(".hearts");
setInterval(() => {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
  hearts.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 300);



// Carrossel
document.addEventListener("DOMContentLoaded", function () {
  const messages = [
    "Foi assim que a gente começou",
    "O aniversário que comemorei com você!",
    "Nossa primeira 'viagem' ",
    "De olho no cê",
    "Um dos dias com você no seu quarto",
    "E essa... é a minha foto favorita da mulher mais linda que eu já vi na vida 😳❤️",
    "Não decidi se a favorita era essa ou a outra 😅 você ser tão linda confunde a cabeça",
  ];

  const messageBox = document.getElementById("slide-message");

  const swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    spaceBetween: 30,
    on: {
      slideChange: function () {
        const index = this.realIndex;
        messageBox.textContent = messages[index] || "";
      }
    }
  });
});

function abrirCarta() {
    const carta = document.getElementById("carta");
    carta.style.display = (carta.style.display === "none") ? "block" : "none";
  }