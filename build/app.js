var acc = document.getElementsByClassName('accordian');


for (i = 0; i < acc.length; i++) {
  /* Toggle between adding and removing the "active" class,
   to highlight the button that controls the panel */
  acc[i].addEventListener('click', function () {
    this.classList.toggle('active');

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
  });
}
