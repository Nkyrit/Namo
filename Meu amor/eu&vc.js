// Relógio desde 19/nov/2023
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

// Corações animados
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
  new Swiper('.swiper-container', {
    loop: true,
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    spaceBetween: 30,
  });
});