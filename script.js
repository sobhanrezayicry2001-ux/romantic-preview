const startBtn = document.getElementById('startBtn');
const screenshot = document.getElementById('screenshot');
const music = document.getElementById('music');
const animatedText = document.getElementById('animatedText');

const textToShow = `Melika, art is creating a space so beautiful and rare
that a soul would willingly choose to be captured there.
I’m prisoner number 0668 at Vie House…
and I’d love to invite you on a date,
just to sit somewhere quiet, talk sincerely,
and get to know you more — if you feel the same.`;

startBtn.addEventListener('click', () => {

  startBtn.style.display = 'none';

  // 1️⃣ موزیک
  music.play().catch(() => {});

  // 2️⃣ بعد 1 ثانیه → تصویر
  setTimeout(() => {
    screenshot.style.display = 'block';

    setTimeout(() => {
      screenshot.style.opacity = 1;
    }, 50);

  }, 1000);

  // 3️⃣ بعد 2 ثانیه → شروع متن
  setTimeout(() => {

    let index = 0;
    animatedText.textContent = "";

    const totalDuration = 20000; // 20 ثانیه
    const speed = totalDuration / textToShow.length;

    function typeText() {
      if (index < textToShow.length) {
        animatedText.textContent = textToShow.substring(0, index + 1);
        index++;
        setTimeout(typeText, speed);
      }
    }

    typeText();

  }, 2000);
});
