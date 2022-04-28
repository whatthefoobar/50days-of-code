const sidebar = document.querySelector('nav');
const toggle = document.querySelectorAll('.toggle');

for (let i = 0; i <= toggle.length; i++) {
  toggle[i].addEventListener('click', function () {
    sidebar.classList.toggle('active');
  });
}
