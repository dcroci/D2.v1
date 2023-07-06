const questionImg = document.querySelector('.questionImg');
const body = document.querySelector('body');

function zoomOut() {
  const computedStyle = window.getComputedStyle(questionImg);
  const currentScale = parseFloat(computedStyle.transform.split(' ')[3]);
  const newScale = currentScale - 1;
  if (newScale > 0) {
    questionImg.style.transform = `scale(${newScale})`;
  }
}

questionImg.addEventListener('click', () => {
  zoomOut();
});
