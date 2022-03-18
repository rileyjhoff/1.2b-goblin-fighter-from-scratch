// import functions and grab DOM elements
import { renderGoblins } from './render-utils.js';
const defeatedGoblinsEl = document.querySelector('#defeated-goblins-count');
const playerLevelEl = document.querySelector('#player-level');
const playerHpEl = document.querySelector('#player-hp');
const goblinFormEl = document.querySelector('#goblin-form');
const goblinListEl = document.querySelector('#goblins-container');


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
        goblinListEl.append(goblinDiv);
    }
}

displayGoblins();