// import functions and grab DOM elements

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
    agility: 1,
    accuracy: 2
};

let goblins = [
    {
        name: 'Hogger',
        hp: Math.ceil(Math.random() * (4)),
        level: 1,
        strength: 1,
        agility: 1,
        accuracy: 1
    },
    {
        name: 'Hogger Jr',
        hp: Math.ceil(Math.random() * (4)),
        level: 1,
        strength: 1,
        agility: 1,
        accuracy: 1
    }
];

// set event listeners 
    // get user input
    // use user input to update state 
    // update DOM to reflect the new state