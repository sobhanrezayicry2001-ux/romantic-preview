const startBtn = document.getElementById('startBtn');
const screenshot = document.getElementById('screenshot');
const music = document.getElementById('music');
const animatedText = document.getElementById('animatedText');

const textToShow = `ملیکا، هنر یعنی یه فضا رو انقدر قشنگ بسازی
که آدم روحش اونجا زندانی بشه.
من زندانی شماره 0668 هستم.
می خوام به یه دیت دعوتت کنم
تا بیشتر در مورد حبس طولانی‌تر در این فضا صحبت کنیم.`;

startBtn.addEventListener('click', () => {
  startBtn.style.display = 'none';
  
  screenshot.style.display = 'block';
  setTimeout(() => {
    screenshot.style.opacity = 1;
  }, 50);
  
  music.play();

  let index = 0;
  const duration = 20000; // 20 ثانیه
  const interval = duration / textToShow.length;

  const typing = setInterval(() => {
    animatedText.textContent += textToShow[index];
    index++;
    if(index >= textToShow.length){
      clearInterval(typing);
    }
  }, interval);
});
