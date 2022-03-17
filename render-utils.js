export function renderGoblins(goblin) {
    const goblinDiv = document.createElement('div');
    const nameAndHpEl = document.createElement('p');
    const levelEl = document.createElement('p');

    nameAndHpEl.append(`${goblin.name} - HP: ${goblin.hp} `);

    if (goblin.hp >= 5) {
        nameAndHpEl.append('👹');
    } else if (goblin.hp >= 3) {
        nameAndHpEl.append('😈');
    } else if (goblin.hp >= 1) {
        nameAndHpEl.append('👿');
    } else if (goblin.hp === 0) {
        nameAndHpEl.append('💀');
    }

    goblinDiv.append(nameAndHpEl, levelEl);
    return goblinDiv;
}