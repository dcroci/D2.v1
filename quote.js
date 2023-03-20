const destinyQuotes = [
    {
      quote: "If They Want War, Give Them War.",
      person: "Lord Shaxx"
    },
    {
      quote: "I Don't Have Time To Explain What I Don't Have Time To Understand.",
      person: "Cayde-6"
    },
    {
      quote: "There Are Things Out In The Dark That Only The Dark Can Overcome. Trust Me.",
      person: "The Drifter"
    },
    {
      quote:"The Line Between Light And Dark Is So Very Thin. Do You Know Which Side You’re On?",
      person: "Uldren Sov"
    }
  ]

  //guessing game
const randomIndex = Math.floor(Math.random() * destinyQuotes.length);
const randomQuote = destinyQuotes[randomIndex];
console.log(randomQuote.person)

const descriptionEl = document.getElementById('description');
descriptionEl.textContent = randomQuote.quote;
let guessCount = 0;
function raiseCount(){
    guessCount ++;
    console.log(guessCount)
}
function checkGuess() {
  const guess = document.getElementById('guess').value;
  const resultEl = document.getElementById('result');
  if (guess === '' || guess === ' ') {
    alert('Please enter a guess.');
  } else if (guess.toLowerCase() === randomQuote.name.toLowerCase()) {
    resultEl.textContent = 'Correct!';
  } else {
    resultEl.textContent = 'Incorrect. Try again.';
  }
}
function guessing(){
    raiseCount();
    checkGuess();
}
//hints
const hint1 = document.querySelector('.hint1');
const hint2 = document.querySelector('.hint2');
const hint3 = document.querySelector('.hint3');
const popup = document.querySelector('#popup');
const popup2 = document.querySelector('#popup2');
const popup3 = document.querySelector('#popup3');

hint1.addEventListener('click', function() {
popup.style.display = 'block';
});
hint2.addEventListener('click', function() {
    popup2.style.display = 'block';
});
hint3.addEventListener('click', function() {
    popup3.style.display = 'block';
});


const hint1El = document.getElementById('hint1');
hint1El.textContent = randomQuote.slot;

const hint2El = document.getElementById('hint2');
hint2El.textContent = randomQuote.type;

const hint3El = document.getElementById('hint3');
hint3El.textContent = randomQuote.name;
  