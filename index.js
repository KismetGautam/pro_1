/*to hid nav  when scroll goes out of y range*/
window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    if (window.scrollY > 100) {
      nav.classList.add('hide-nav');
    } else {
      nav.classList.remove('hide-nav');
    }
  });