const hint1 = document.querySelector('.hint1');
const popup = document.querySelector('#popup');
const closeBtn = document.querySelector('#close-btn');

hint1.addEventListener('click', function() {
    popup.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
    popup.style.display = 'none';
});


const destinyExotics = [
    "Ace of Spades",
    "Anarchy",
    "Arbalest",
    "Black Talon",
    "Borealis",
    "Cerberus+1",
    "Chaperone",
    "Cloudstrike",
    "Coldheart",
    "Crimson",
    "D.A.R.C.I.",
    "Devil's Ruin",
    "Eriana's Vow",
    "Fighting Lion",
    "Fourth Horseman",
    "Graviton Lance",
    "Hard Light",
    "Heir Apparent",
    "Jade Rabbit",
    "Le Monarque",
    "Legend of Acrius",
    "Malfeasance",
    "Monte Carlo",
    "No Time to Explain",
    "One Thousand Voices",
    "Outbreak Perfected",
    "Polaris Lance",
    "Prometheus Lens",
    "Riskrunner",
    "Skyburner's Oath",
    "Sleeper Simulant",
    "Sturm",
    "SUROS Regime",
    "Telesto",
    "The Last Word",
    "Thorn",
    "Thunderlord",
    "Ticuu's Divination",
    "Trinity Ghoul",
    "Truth",
    "Two-Tailed Fox",
    "Vex Mythoclast",
    "Whisper of the Worm",
    "Xenophage"
  ];
  
  let randomItem = null;
  function getRandomItem() {
    // Generate a random index between 0 and the length of the array minus 1
    const randomIndex = Math.floor(Math.random() * destinyExotics.length);

    // Get the element at the random index
    randomItem = destinyExotics[randomIndex];
    console.log(randomItem)
  }

  function handleGuess(event) {
    event.preventDefault();

    const guess = document.getElementById("guess").value;

    if (guess === randomItem) {
      alert("You guessed correctly! The item was " + randomItem);
      window.location.href = "index.html";
    } else {
      alert("Sorry, that was incorrect. Try again!");
    }

    // Reset the input field
    document.getElementById("guess").value = "";
  }

  // Call the function once on page load
  getRandomItem();

  // Attach event listener to the form
  document.querySelector("form").addEventListener("submit", handleGuess);
  