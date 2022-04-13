const themeToggler = document.querySelector('#theme-toggler');
themeToggler.addEventListener('click', () => {
  themeToggler.classList.toggle('fa-sun');
  if (themeToggler.classList.contains('fa-sun')) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
});
