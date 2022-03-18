export function renderGoblins(goblin) {
    const goblinDiv = document.createElement('div');
    const nameAndHpEl = document.createElement('p');
    const levelEl = document.createElement('p');

    goblinDiv.classList.add('goblin');

    nameAndHpEl.append(`${goblin.name} `);
    levelEl.append(`Level ${goblin.level}`);

    if (goblin.hp >= 5) {
        nameAndHpEl.append(' 👹 ');
    } else if (goblin.hp >= 3) {
        nameAndHpEl.append(' 😈 ');
    } else if (goblin.hp >= 1) {
        nameAndHpEl.append(' ' + ' 👿 ');
    } else if (goblin.hp === 0) {
        nameAndHpEl.append(' 💀 ');
        goblinDiv.classList.add('defeated');
        levelEl.append(' (click to remove goblin)');
    }

    nameAndHpEl.append(`   HP: ${goblin.hp}`);

    goblinDiv.append(nameAndHpEl, levelEl);
    return goblinDiv;
}