const allItems = document.querySelectorAll('.nav-menu ul li a');

allItems.forEach((item) => {
  item.addEventListener('click', function (e) {
    //remove prev classes
    for (let i = 0; i < allItems.length; i++) {
      allItems[i].classList.remove('active');
    }
    this.classList.add('active');
  });
});
