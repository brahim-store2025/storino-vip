
let current = 0;
const slides = document.querySelectorAll('.slide');
setInterval(() => {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(-${current * 100}%)`;
  });
  current = (current + 1) % slides.length;
}, 3000);
