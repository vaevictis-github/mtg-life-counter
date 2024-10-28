function setInitialLife() {
    const initialLife = parseInt(document.getElementById('initialLife').value) || 30;
    
    document.getElementById('life1').textContent = initialLife;
    document.getElementById('life2').textContent = initialLife;
}

function resetGame() {
    // Reseta o input para o valor padrão (30)
    document.getElementById('initialLife').value = '30';
    
    // Define a vida inicial dos jogadores para 30 novamente
    document.getElementById('life1').textContent = '30';
    document.getElementById('life2').textContent = '30';
}

function adjustLife(player, change) {
    const lifeElement = document.getElementById(`life${player}`);
    let currentLife = parseInt(lifeElement.textContent);
    currentLife += change;
    lifeElement.textContent = currentLife;
}