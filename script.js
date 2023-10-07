window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector('.nav-container').style.height = '50px';
  } else {
    document.querySelector('.nav-container').style.height = '100px';
  }
}
