let header = document.querySelectorAll('.header');
let text = document.querySelectorAll('.text');
let icon = document.querySelectorAll('span');

let prevIndex = null;

for (let i = 0; i < header.length; i++) {
  header[i].addEventListener('click', () => {
    for (let j = 0; j < text.length; j++) {
      text[j].classList.remove('active');
      icon[j].innerText = '+';
    }
    if (prevIndex === i) {
      text[i].classList.remove('active');
      prevIndex = null;
    } else {
      text[i].classList.add('active');
      icon[i].innerText = '-';
      prevIndex = i;
    }
  });
}
