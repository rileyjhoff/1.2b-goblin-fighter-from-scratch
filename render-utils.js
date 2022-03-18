export function renderGoblins(goblin) {
    const goblinDiv = document.createElement('div');
    const nameAndHpEl = document.createElement('p');
    const levelEl = document.createElement('p');

    nameAndHpEl.append(`${goblin.name} `);

    if (goblin.hp >= 5) {
        nameAndHpEl.append(' 👹 ');
    } else if (goblin.hp >= 3) {
        nameAndHpEl.append(' 😈 ');
    } else if (goblin.hp >= 1) {
        nameAndHpEl.append(' 👿 ');
    } else if (goblin.hp === 0) {
        nameAndHpEl.append(' 💀 ');
    }

    nameAndHpEl.append(`   HP: ${goblin.hp}`);
    levelEl.append(`Level ${goblin.level}`);

    goblinDiv.append(nameAndHpEl, levelEl);
    return goblinDiv;
}