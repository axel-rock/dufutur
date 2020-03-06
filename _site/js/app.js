var toggles = document.querySelectorAll('.js-off-canvas-toggle');
for (var i = 0; i < toggles.length; i++) {
  toggles[i].addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.js-off-canvas-toggle').classList.toggle('is-active');
    document.querySelector('.js-off-canvas-container').classList.toggle('is-active');
  })
}
