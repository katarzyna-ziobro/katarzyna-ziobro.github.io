const img = document.getElementById('buttonImage');

img.addEventListener('mousedown', () => {
  img.classList.add('pressed');
});

img.addEventListener('mouseup', () => {
  img.classList.remove('pressed');
});

img.addEventListener('mouseleave', () => {
  img.classList.remove('pressed');
});

