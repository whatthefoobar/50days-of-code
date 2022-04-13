const progress = document.querySelector('#progress');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
});

prev.addEventListener('click', () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

function update() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });
  const actives = document.querySelectorAll('.active');
  //get a percentage for our progress length that way we can add to our blue .progress width once we progress from circle to circle
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%';
  // 75% is over our 3rd circle so we actually need smaller percentages for the progress line to stop at correct circle
  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    true.disabled = false;
  }
}
