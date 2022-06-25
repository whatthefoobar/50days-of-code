const sounds = [
  'hell-nah',
  'hello-darkness',
  'jeopardy-waiting',
  'nope',
  'sad-trombone',
  'wrong-answer',
];

sounds.forEach((sound) => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = sound;

  btn.addEventListener('click', () => {
    stopSongs();
    document.getElementById(sound).play();
  });
  document.body.appendChild(btn);
});

const stopSongs = () => {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
};
