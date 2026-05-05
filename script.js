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

  // تصویر فول‌اسکرین
  screenshot.style.display = 'block';
  setTimeout(() => {
    screenshot.style.opacity = 1;
  }, 50);

  // موزیک
  music.play().catch(() => {});

  // تایپ تمیز از چپ به راست
  let index = 0;
  animatedText.textContent = "";

  function typeText() {
    if (index < textToShow.length) {
      animatedText.textContent = textToShow.substring(0, index + 1);
      index++;
      setTimeout(typeText, 50);
    }
  }

  typeText();
});
