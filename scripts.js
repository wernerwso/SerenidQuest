// scripts.js

function startGame() {
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('energy-screen').style.display = 'block';
}

function nextScreen(currentScreenId) {
    if (currentScreenId === 'energy-goal') {
        const goal = document.getElementById('energy-goal').value;
        let feedbackText = '';
        switch (goal) {
            case 'energia':
                feedbackText = 'Você escolheu aumentar energia e performance física. Vamos explorar mais sobre sua necessidade de energia.';
                break;
            case 'foco':
                feedbackText = 'Você escolheu melhorar concentração e foco mental. Vamos explorar mais sobre sua necessidade de foco na próxima fase.';
                break;
            case 'sono':
                feedbackText = 'Você escolheu melhorar a qualidade do sono. Vamos explorar mais sobre sua necessidade de sono na fase correspondente.';
                break;
            case 'imunidade':
                feedbackText = 'Você escolheu fortalecer o sistema imunológico. Vamos explorar mais sobre sua necessidade de imunidade na fase correspondente.';
                break;
        }
        document.getElementById('energy-feedback-text').textContent = feedbackText;
        document.getElementById('energy-screen').style.display = 'none';
        document.getElementById('energy-feedback').style.display = 'block';
    } else if (currentScreenId === 'fatigue-question') {
        document.getElementById('energy-feedback').style.display = 'none';
        document.getElementById('focus-screen').style.display = 'block';
    } else if (currentScreenId === 'focus-difficulty') {
        const difficulty = document.getElementById('focus-difficulty').value;
        let feedbackText = '';
        if (difficulty === 'sim') {
            feedbackText = 'Você escolheu melhorar a concentração e foco. Vamos aprofundar nisso.';
        } else {
            feedbackText = 'Tudo bem, vamos continuar explorando suas necessidades.';
        }
        document.getElementById('focus-feedback-text').textContent = feedbackText;
        document.getElementById('focus-screen').style.display = 'none';
        document.getElementById('focus-feedback').style.display = 'block';
    } else if (currentScreenId === 'focus-activity') {
        const activity = document.getElementById('focus-activity').value;
        let feedbackText = '';
        switch (activity) {
            case 'meditacao':
                feedbackText = 'Correto! A meditação pode ajudar a melhorar o foco.';
                break;
            case 'junk-food':
                feedbackText = 'Essa não é a melhor opção para melhorar o foco.';
                break;
            case 'tv':
                feedbackText = 'Assistir TV pode não ser eficaz para melhorar o foco.';
                break;
            case 'sono':
                feedbackText = 'Ficar sem dormir prejudica o foco.';
                break;
        }
        document.getElementById('conclusion-text').textContent = feedbackText;
        document.getElementById('focus-feedback').style.display = 'none';
        document.getElementById('conclusion-screen').style.display = 'block';
    }
}

function restartGame() {
    document.getElementById('conclusion-screen').style.display = 'none';
    document.getElementById('welcome-screen').style.display = 'block';
    document.getElementById('explorer-name').value = '';
    document.getElementById('energy-goal').value = '';
    document.getElementById('fatigue-question').value = '';
    document.getElementById('focus-difficulty').value = '';
    document.getElementById('focus-activity').value = '';
}
