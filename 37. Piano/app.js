const pianoKeys = document.querySelectorAll('.key');

const playSound = (url) => {
  new Audio(url).play();
};

pianoKeys.forEach((pianoKey, i) => {
  const number = i < 9 ? '0' + (i + 1) : i + 1;
  const newURL = 'piano-keys/key' + number + '.mp3';
  pianoKey.addEventListener('click', () => playSound(newURL));
});
