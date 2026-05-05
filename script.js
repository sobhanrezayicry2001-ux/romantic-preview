const startBtn = document.getElementById('startBtn');
const screenshot = document.getElementById('screenshot');
const music = document.getElementById('music');
const animatedText = document.getElementById('animatedText');

const textToShow = `Melika, art is creating a space so beautiful
that a soul would choose to stay there forever.
I’m prisoner number 0668 at Vie House…
and I’d love to take you on a date,
to talk about being lost there a little longer — together.`;

startBtn.addEventListener('click', () => {

  startBtn.style.display = 'none';

  screenshot.style.display = 'block';
  setTimeout(() => {
    screenshot.style.opacity = 1;
  }, 50);

  music.play().catch(() => {});

  let index = 0;
  const speed = 60;

  function typeText() {
    if (index < textToShow.length) {
      animatedText.textContent += textToShow[index];
      index++;
      setTimeout(typeText, speed);
    }
  }

  typeText();
});
