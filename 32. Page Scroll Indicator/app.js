const container = document.querySelector('.container');
const progressBar = document.querySelector('.progress');

window.addEventListener('scroll', () => {
  let scrollValue = window.scrollY;
  let containerHeight = container.clientHeight - window.innerHeight;

  let progressPercentage = (scrollValue / containerHeight) * 100;

  progressBar.style.width = `${progressPercentage}%`;
});
