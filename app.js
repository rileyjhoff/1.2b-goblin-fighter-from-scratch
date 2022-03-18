// import functions and grab DOM elements
import { renderGoblins } from './render-utils.js';
const defeatedGoblinsEl = document.querySelector('#defeated-goblins-count');
const playerLevelEl = document.querySelector('#player-level');
const playerHpEl = document.querySelector('#player-hp');
const goblinFormEl = document.querySelector('#goblin-form');
const goblinListEl = document.querySelector('#goblins-container');
const playerXpEl = document.querySelector('#player-xp');

// let state
let defeatedGoblinCount = 0;
let player = {
    hp: 10,
    level: 1,
    strength: 1,
    agility: 2,
    accuracy: 2,
    xp: 0
};

let goblins = [
    {
        name: 'Hogger',
        hp: 4,
        level: 1,
        strength: 1,
        agility: 1,
        accuracy: 1
    },
    {
        name: 'Hogger Jr',
        hp: 2,
        level: 1,
        strength: 1,
        agility: 1,
        accuracy: 1
    }
];

console.log(defeatedGoblinsEl, defeatedGoblinCount, goblinFormEl, goblinListEl, goblins, player, playerHpEl, playerLevelEl);

// set event listeners 
    // get user input
    // use user input to update state 
    // update DOM to reflect the new state

// Math.ceil(Math.random() * (4))

goblinFormEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(goblinFormEl);
    const newGoblin = {
        name: data.get('goblin-name'),
        hp: Math.ceil(Math.random() * (3 + player.level)),
        level: Math.ceil(Math.random() * player.level)
    };
    newGoblin.strength = newGoblin.level;
    newGoblin.agility = newGoblin.level;
    newGoblin.accuracy = newGoblin.level;
    goblins.push(newGoblin);
    console.log(goblins);
    displayGoblins();
    goblinFormEl.reset();
});

function displayGoblins() {
    goblinListEl.textContent = '';
    for (let goblin of goblins) {
        const goblinDiv = renderGoblins(goblin);
        goblinDiv.addEventListener('click', () => {
            if (goblin.hp > 0) {
                hitRolls(goblin);
                levelUp();
                displayGoblins();
            }
        });
        goblinListEl.append(goblinDiv);
    }
}

// function displayGoblins() {
//     goblinListEl.textContent = '';
//     for (let goblin of goblins) {
//         const goblinDiv = renderGoblins(goblin);
//         goblinDiv.addEventListener('click', () => {
//             if (goblin.hp > 0) {
//                 if (Math.random() > 0.5) {
//                     goblin.hp--;
//                 }
//                 if (Math.random() > 0.66 && goblin.hp !== 0) {
//                     player.hp--;
//                     playerHpEl.textContent = player.hp;
//                 }
//                 displayGoblins();
//                 if (goblin.hp === 0) {
//                     alert(`You have defeated ${goblin.name}. ${1 + goblin.level}xp gained.`);
//                     defeatedGoblinCount++;
//                     defeatedGoblinsEl.textContent = defeatedGoblinCount;
//                     player.xp = player.xp + 1 + goblin.level;
//                     playerXpEl.textContent = player.xp;
//                 }
//             }
//         });
//         goblinListEl.append(goblinDiv);
//     }
// }

displayGoblins();

function hitRolls(goblin) {
    if (Math.random() < (0.5 + ((player.accuracy - goblin.agility) / 10))) {
        goblin.hp = goblin.hp - Math.ceil(Math.random() * player.strength);
        alert(`You hit ${goblin.name} for ${player.strength} damage.`);
    } else {
        alert('You missed!');
    }
    if (Math.random() > (0.50 + ((player.agility - goblin.accuracy) / 10)) && goblin.hp !== 0) {
        player.hp = player.hp - Math.ceil(Math.random() * goblin.strength);
        playerHpEl.textContent = player.hp;
        alert(`${goblin.name} hit you for ${goblin.strength} damage.`);
    } else if (goblin.hp !== 0) {
        alert(`${goblin.name} missed!`);
    }
    if (goblin.hp === 0) {
        alert(`You have defeated ${goblin.name}. ${1 + goblin.level}xp gained. Healed for ${goblin.level} HP`);
        defeatedGoblinCount++;
        defeatedGoblinsEl.textContent = defeatedGoblinCount;
        player.hp = player.hp + goblin.level;
        playerHpEl.textContent = player.hp;
        player.xp = player.xp + 1 + goblin.level;
        playerXpEl.textContent = player.xp;
    }
}

function levelUp() {
    if (player.xp >= 5) {
        player.level = 2;
        player.strength = 2;
        player.accuracy = 3;
        player.agility = 3;
        playerLevelEl.textContent = player.level;
    }
    if (player.xp >= 12) {
        player.level = 3;
        player.strength = 3;
        player.accuracy = 4;
        player.agility = 4;
        playerLevelEl.textContent = player.level;
    }
}