const startBtn = document.getElementById('startBtn');

const screenshot1 = document.getElementById('screenshot1');
const screenshot2 = document.getElementById('screenshot2');

const music = document.getElementById('music');

const animatedText = document.getElementById('animatedText');

const endScreen = document.getElementById('endScreen');
const endText = document.getElementById('endText');

const textToShow = `Melika, art is creating a space so beautiful and rare
that a soul would willingly choose to be captured there.
I’m prisoner number 0668 at Vie House…
and I’d love to invite you on a date,
just to sit somewhere quiet, talk sincerely,
and get to know you more — if you feel the same.`;

startBtn.addEventListener('click', () => {

  // حذف دکمه
  startBtn.style.display = 'none';

  // موزیک
  music.play().catch(() => {});

  // بعد 1 ثانیه → عکس اول
  setTimeout(() => {

    screenshot1.style.opacity = 1;

  }, 1000);

  // بعد 2 ثانیه → متن
  setTimeout(() => {

    let index = 0;

    const totalDuration = 26000;

    const speed = totalDuration / textToShow.length;

    function typeText() {

      if (index < textToShow.length) {

        animatedText.textContent =
          textToShow.substring(0, index + 1);

        index++;

        setTimeout(typeText, speed);
      }
    }

    typeText();

  }, 2000);

  // ثانیه 20 → عکس دوم
  setTimeout(() => {

    screenshot1.style.opacity = 0;

    screenshot2.style.opacity = 1;

  }, 20000);

  // پایان سینمایی
  setTimeout(() => {

    // محو شدن تصویر و متن
    screenshot2.style.opacity = 0;
    animatedText.style.opacity = 0;

    // سیاه شدن صفحه
    endScreen.style.opacity = 1;

    // ظاهر شدن END
    setTimeout(() => {

      endText.style.opacity = 1;

    }, 3000);

  }, 34000);

});
