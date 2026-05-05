const startBtn = document.getElementById('startBtn');
const screenshot = document.getElementById('screenshot');
const music = document.getElementById('music');
const animatedText = document.getElementById('animatedText');

const textToShow = "این لحظه برای توست… لحظه‌ای پر از آرامش و عشق که با هم تجربه می‌کنیم.";

startBtn.addEventListener('click', () => {
  startBtn.style.display = 'none';
  
  // نمایش تصویر با fade-in
  screenshot.style.display = 'block';
  setTimeout(() => {
    screenshot.style.opacity = 1;
  }, 50);
  
  music.play();

  // تایپ متن رمانتیک
  let index = 0;
  const duration = 12000; // 12 ثانیه
  const interval = duration / textToShow.length;

  const typing = setInterval(() => {
    animatedText.textContent += textToShow[index];
    index++;
    if(index >= textToShow.length){
      clearInterval(typing);
    }
  }, interval);
});
