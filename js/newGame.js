import Field from './Field';
import highlightActivePlayer from './highlightActivePlayer';
import { startRandomizer } from './startRandomizer';
import updateScore from './updateScore';

const newGame = (player1, player2) => {
    let activePlayer, waitingPlayer, score1, score2;
    const canvas = document.getElementById('winnerLine');
    canvas.width += 0;
    canvas.classList.remove('canvas-active');
    const symbols = ['✖', '〇'];
    const gameField = new Field();
    let startingPlayer = startRandomizer();
    if(player1.getName() === startingPlayer){
        activePlayer = player1;
        waitingPlayer = player2;
    } else {
        activePlayer = player2;
        waitingPlayer = player1;
    }
    activePlayer.setStatus(true);
    highlightActivePlayer(activePlayer.getName());
    activePlayer.setSymbol(symbols[0]);
    waitingPlayer.setSymbol(symbols[1]);

    activePlayer.setWinner(false);
    waitingPlayer.setWinner(false);
    activePlayer.purgeCells();
    waitingPlayer.purgeCells();

    score1 = {player: activePlayer.getName(), score: activePlayer.getWins()};
    score2 = {player: waitingPlayer.getName(), score: waitingPlayer.getWins()};
    updateScore('', score1, score2);
    
    let field = document.getElementById('field');
    let fieldCells = field.querySelectorAll('div');
    fieldCells.forEach(element => {
        gameField.addCell(element.id);
        element.textContent = '';
    });
    return gameField;
}

export default newGame;