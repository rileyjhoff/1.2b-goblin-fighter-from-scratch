export function renderGoblins(goblin) {
    const goblinDiv = document.createElement('div');
    const nameAndLvlEl = document.createElement('p');
    const hpEl = document.createElement('p');

    goblinDiv.classList.add('goblin');

    nameAndLvlEl.append(`${goblin.name} (Lvl ${goblin.level})`);
    hpEl.append(`HP: ${goblin.hp}`);

    if (goblin.hp >= 5) {
        hpEl.append(' 👹 ');
    } else if (goblin.hp >= 3) {
        hpEl.append(' 😈 ');
    } else if (goblin.hp >= 1) {
        hpEl.append(' ' + ' 👿 ');
    } else if (goblin.hp === 0) {
        hpEl.append(' 💀 ');
        goblinDiv.classList.add('defeated');
        hpEl.append(' (click to remove)');
    }

    goblinDiv.append(nameAndLvlEl, hpEl);
    return goblinDiv;
}