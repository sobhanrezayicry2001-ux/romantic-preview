const startBtn = document.getElementById('startBtn');
const screenshot = document.getElementById('screenshot');
const music = document.getElementById('music');
const animatedText = document.getElementById('animatedText');

const textToShow = `این لحظه برای توست…
لحظه‌ای پر از آرامش و عشق
که با هم تجربه می‌کنیم
فقط تو و من`;

startBtn.addEventListener('click', () => {

  startBtn.style.display = 'none';

  // نمایش تصویر
  screenshot.style.display = 'block';
  setTimeout(() => {
    screenshot.style.opacity = 1;
  }, 50);

  // پخش موزیک
  music.play().catch(() => {});

  // تایپ متن
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
