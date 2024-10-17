let animations = {
  revealDistance: 150,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration: '1.5s',
  transitionTimingFunction: 'ease'
};

$(document).ready(function () {
  function isElementInViewport(el, threshold = 0.5) {
    var rect = el.getBoundingClientRect();
    var viewportHeight = (window.innerHeight || document.documentElement.clientHeight);
    return (
      rect.top <= viewportHeight * threshold &&
      rect.bottom >= 0
    );
  }

  function checkContent() {
    var animatedContentElements = document.querySelectorAll('.animated-content');
    animatedContentElements.forEach(function (el) {
      if (isElementInViewport(el)) {
        el.classList.add('show');
      }
    });
  }

  checkContent();

  $(window).on('scroll', function () {
    checkContent();
  });
});
