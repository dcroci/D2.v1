//list of all exotics
const destinyExotics = [
  {
    name: "Leviathan's Breath",
    type: "Combat Bow",
    slot: "Power",
    description: "This weapon fires a massive heavy bolt that staggers unshielded enemies and deals massive damage to shielded enemies."
  },
  {
    name: "Lord of Wolves",
    type: "Shotgun",
    slot: "Energy",
    description: "This weapon fires a burst of flames that deals massive damage at short range. Kills with this weapon restore health."
  },
  {
    name: "Lumina",
    type: "Hand Cannon",
    slot: "Kinetic",
    description: "This weapon heals allies and grants them a damage bonus for a short time after firing. Kills with this weapon leave behind Remnants that restore health and can be picked up by allies."
  },
  {
    name: "Monte Carlo",
    type: "Auto Rifle",
    slot: "Kinetic",
    description: "This weapon has a chance to fully recharge the melee ability on a kill. Melee kills also grant a chance to fully recharge this weapon's magazine."
  },
  {
    name: "One Thousand Voices",
    type: "Fusion Rifle",
    slot: "Power",
    description: "This weapon fires a beam of fire that deals massive damage over time to enemies in its path. Kills with this weapon can create a pool of fire that continues to damage enemies."
  },
  {
    name: "Phoenix Protocol",
    type: "Warlock Chest Armor",
    slot: "Chest",
    description: "Kills and assists while standing in a Well of Radiance super restore super energy. Additionally, the first kill with this super refunds a significant amount of super energy."
  },
  {
    name: "Raiden Flux",
    type: "Hunter Chest Armor",
    slot: "Chest",
    description: "Arc Staff kills extend the duration of the super and increase its damage. Dodging during the super also restores health."
  },
  {
    name: "Skull of Dire Ahamkara",
    type: "Warlock Helmet",
    slot: "Helmet",
    description: "Nova Bomb kills restore super energy. Damage resistance is also increased while charging Nova Bomb."
  },
  {
    name: "The Stag",
    type: "Warlock Helmet",
    slot: "Helmet",
    description: "When critically wounded, this helmet creates a healing rift around the wearer. Additionally, if the wearer is defeated, it creates a stronger healing rift for allies."
  },
  {
    name: "Wardcliff Coil",
    type: "Rocket Launcher",
    slot: "Power",
    description: "This weapon fires a volley of rockets that deal massive damage to enemies. Its unique perk causes it to consume ammo more quickly for increased damage output."
  },
  {
    name: "Whisper of the Worm",
    type: "Sniper Rifle",
    slot: "Power",
    description: "This weapon fires a powerful, high-impact shot that deals massive damage. Precision kills with this weapon refill its magazine and grant a damage bonus for a short time."
  },
  {
    name: "Wormhusk Crown",
    type: "Hunter Helmet",
    slot: "Helmet",
    description: "Dodging immediately after taking damage grants a small amount of health and starts health regeneration. Additionally, dodging increases the wearer's movement speed."
  },
  {
      name: "Ace of Spades",
      type: "Hand Cannon",
      slot: "Kinetic",
      description: "Fires high-caliber rounds. Reloading after a kill loads magazine with a few extra-damage bullets. Precision kills move one round from reserves to magazine."
   },
  {
      name: "Anarchy",
      type: "Grenade Launcher",
      slot: "Power",
      description: "Fires arc traps that stick to surfaces and chain lightning to other traps. Hold fire to create a second set of traps. "
  },
  {
      name: "Astrocyte Verse",
      type: "Warlock Helmet",
      slot: "Helmet",
      description: "After blinking, weapon and movement speed are greatly increased."
  },
  {
      name: "Black Talon",
      type: "Sword",
      slot: "Power",
      description: "Press and hold to launch a projectile that does massive damage. The projectile can also reflect incoming projectiles."
  },
  {
      name: "Coldheart",
      type: "Trace Rifle",
      slot: "Energy",
      description: "This weapon shoots a steady cold fusion-powered laser. The longer it's fired, the more damage it deals."
  },
  {
      name: "Crimson",
      type: "Hand Cannon",
      slot: "Kinetic",
      description: "This weapon fires a three-round burst. Kills with this weapon heal the wielder and refill the magazine."
  },
  {
      name: "Fighting Lion",
      type: "Grenade Launcher",
      slot: "Energy",
      description: "This weapon fires grenades that bounce and detonate on impact. Direct hits do more damage."
  },
  {
      name: "The Fourth Horseman",
      type: "Shotgun",
      slot: "Energy",
      description: "This weapon fires fully automatic. Dealing sustained damage to a target increases the rate of fire."
  },
  {
      name: "Gjallarhorn",
      type: "Rocket Launcher",
      slot: "Power",
      description: "Fires two rockets that seek out targets. The rockets can track different targets."
  },
  {
      name: "Hawkmoon",
      type: "Hand Cannon",
      slot: "Kinetic",
      description: "Randomly grants bonus damage, extra bullets in the magazine, or regenerates health on kills. "
  },
  {
      name: "Lament",
      type: "Sword",
      slot: "Power",
      description: "This weapon deals bonus damage against enemies that are shielded or have swords. Hold the heavy attack button to rev the blade and deal even more damage."
  },
  {
      name: "Thunderlord",
      type: "Machine Gun",
      slot: "Power",
      description: "This weapon fires powerful bullets that can chain lightning between enemies. Kills with this weapon can generate orbs of light."
  }
    ];
  

//guessing game
const randomIndex = Math.floor(Math.random() * destinyExotics.length);
const randomExotic = destinyExotics[randomIndex];
console.log(randomExotic.name)

const descriptionEl = document.getElementById('description');
descriptionEl.textContent = randomExotic.description;
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
  } else if (guess.toLowerCase() === randomExotic.name.toLowerCase()) {
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
hint1El.textContent = randomExotic.slot;

const hint2El = document.getElementById('hint2');
hint2El.textContent = randomExotic.type;

const hint3El = document.getElementById('hint3');
hint3El.textContent = randomExotic.name;
  