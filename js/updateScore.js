const updateScore = (message, score1, score2) => {
    let scoreSpan1 = document.getElementById(`${score1.player}Score`);
    scoreSpan1.textContent = score1.score;
    let scoreSpan2 = document.getElementById(`${score2.player}Score`);
    scoreSpan2.textContent = score2.score;
    let messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
}

export default updateScore;