function createMan() {
  const man = document.createElement('div');
  man.classList.add('man');
  man.style.left = Math.random() * 100 + 'vw';
  man.style.animationDuration = Math.random() * 2 + 3 + 's';
  man.innerText = '👨';
  document.body.appendChild(man);

  setTimeout(() => {
    man.remove();
  }, 5000);
}

setInterval(createMan, 300);
