const questionImg = document.querySelector('.questionImg');
const submit = document.querySelector('#submit');
let guessCount = 0;

const locations = {
  'Black Garden': [
    'assets/locations/black-garden/destiny-black-garden-campaign-black-garden.jpg',
    'assets/locations/black-garden/zu4puo78v3j51.webp',
  ],
  Farm: ['assets/locations/farm/destiny-the-farm.avif'],
  Lighthouse: [
    'assets/locations/lighthouse/destiny-2-trials-of-osiris-lighthouse-loot-1.avif',
    'assets/locations/lighthouse/destiny-2-trials-of-osiris.jpg',
  ],
  Menagerie: [
    'assets/locations/menagerie/all-menagerie-triumphs-destiny-2_feature.jpg',
  ],
  Tower: [
    'assets/locations/tower/Destiny_2_Tower_Courtyard.webp',
    'assets/locations/tower/destiny-2-revelry-tower-credit-bungie@2000x1270-1.jpg',
  ],
  'Twilight Gap': [
    'assets/locations/twilight-gap/c999282e1a62b2aea72e527e45e24b85.jpg',
  ],
};
const locationNames = Object.keys(locations);
const randomLocationName =
  locationNames[Math.floor(Math.random() * locationNames.length)];
const locationImages = locations[randomLocationName];
const randomImageUrl =
  locationImages[Math.floor(Math.random() * locationImages.length)];
questionImg.src = randomImageUrl;
function raiseCount() {
  guessCount++;
  console.log(guessCount);
}
function checkGuess() {
  const guess = document.getElementById('guess').value;
  const resultEl = document.getElementById('result');
  if (guess === '' || guess === ' ') {
    alert('Please enter a guess.');
  } else if (guess.toLowerCase() === randomLocationName.toLowerCase()) {
    resultEl.textContent = 'Correct!';
    questionImg.style.transform = 'scale(1)';
  } else {
    resultEl.textContent = 'Incorrect. Try again.';
  }
}
function guessing() {
  raiseCount();
  checkGuess();
}
function zoomOut() {
  const computedStyle = window.getComputedStyle(questionImg);
  const currentScale = parseFloat(computedStyle.transform.split(' ')[3]);
  const newScale = currentScale - 1;
  if (newScale > 0) {
    questionImg.style.transform = `scale(${newScale})`;
  }
}

submit.addEventListener('click', () => {
  if (guess.innerHTML !== randomLocationName) {
    zoomOut();
  }
});
