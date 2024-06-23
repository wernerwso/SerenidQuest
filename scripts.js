<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Serenid Quest</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="game-container">
        <h1>Serenid Quest</h1>
        <div id="welcome-screen">
            <h2>Bem-vindo a Serenia!</h2>
            <p>Você é um explorador em Serenia, uma terra mágica onde o Mestre da Serenidade guia aventureiros como você em busca dos Cristais da Energia e Foco. Esses cristais ajudarão você a descobrir como melhorar sua saúde e bem-estar. Vamos iniciar a sua jornada!</p>
            <label for="explorer-name">Qual é seu nome de explorador?</label>
            <input type="text" id="explorer-name">
            <button onclick="startGame()">Iniciar Jornada</button>
        </div>

        <div id="energy-screen" class="game-screen">
            <h2>O Cristal da Energia</h2>
            <p>O Cristal da Energia é o primeiro passo em sua jornada. A energia é essencial para manter o corpo ativo e saudável. Vamos descobrir se o Serenid Energy é o suplemento certo para você.</p>
            <label for="energy-goal">Qual é seu principal objetivo ao buscar um suplemento?</label>
            <select id="energy-goal">
                <option value="energia">Aumentar energia e performance física</option>
                <option value="foco">Melhorar concentração e foco mental</option>
                <option value="sono">Melhorar a qualidade do sono</option>
                <option value="imunidade">Fortalecer o sistema imunológico</option>
            </select>
            <button onclick="nextEnergyStep()">Próximo</button>
        </div>

        <div id="energy-feedback" class="game-screen">
            <h2>Feedback Energia</h2>
            <p id="energy-feedback-text"></p>
            <label for="fatigue-question">Você sente fadiga muscular frequente?</label>
            <select id="fatigue-question">
                <option value="sim">Sim</option>
                <option value="não">Não</option>
            </select>
            <button onclick="nextFocusScreen()">Próximo</button>
        </div>

        <div id="focus-screen" class="game-screen">
            <h2>O Cristal do Foco</h2>
            <p>O Cristal do Foco é crucial para quem busca melhorar a concentração e produtividade mental. Vamos ver se o Serenid Focus é adequado para você.</p>
            <label for="focus-difficulty">Você tem dificuldade em manter a concentração e foco ao longo do dia?</label>
            <select id="focus-difficulty">
                <option value="sim">Sim</option>
                <option value="não">Não</option>
            </select>
            <button onclick="nextFocusStep()">Próximo</button>
        </div>

        <div id="focus-feedback" class="game-screen">
            <h2>Feedback Foco</h2>
            <p id="focus-feedback-text"></p>
            <label for="focus-activity">Qual destas atividades ajuda a melhorar o foco?</label>
            <select id="focus-activity">
                <option value="meditacao">Meditação</option>
                <option value="junk-food">Comer junk food</option>
                <option value="tv">Assistir TV</option>
                <option value="sono">Ficar sem dormir</option>
            </select>
            <button onclick="showConclusion()">Próximo</button>
        </div>

        <div id="conclusion-screen" class="game-screen">
            <h2>Conclusão</h2>
            <p>Parabéns por concluir o Serenid Quest! Aqui está um resumo das suas recomendações de produtos Serenid com base nas suas respostas.</p>
            <p id="conclusion-text"></p>
            <button onclick="restartGame()">Reiniciar</button>
        </div>
    </div>

    <script src="scripts.js"></script>
</body>
</html>
