import capitalize from './capitalize';
import checkCombination from './checkCombination';
import drawLine from './drawLine';
import highlightActivePlayer from './highlightActivePlayer';
import markCell from './markCell';
import updateScore from './updateScore';

const play = (player1, player2, field, cellId) => {
    let message, score1, score2;
    const row = 3;
    if(!player1.checkWinner() && !player2.checkWinner() && field.getAvailableCells().length > 0){

        let playerCells, activePlayer, waitingPlayer;
        if(player1.getStatus()){
            activePlayer = player1;
            waitingPlayer = player2;
        } else if(player2.getStatus()){
            activePlayer = player2;
            waitingPlayer = player1;
        }

        activePlayer.chooseCell(cellId);
        markCell(activePlayer.getSymbol(), cellId);
        field.removeCellFromAvailable(cellId);
        playerCells = activePlayer.getCells();
        if(playerCells.length >= row){
            let result = checkCombination(playerCells);
            if(result.result){
                activePlayer.setWinner(true);
                activePlayer.addWin();
                score1 = {player: activePlayer.getName(), score: activePlayer.getWins()};
                score2 = {player: waitingPlayer.getName(), score: waitingPlayer.getWins()};
                let name = capitalize(activePlayer.getName());
                message = `${name} won!`;
                updateScore(message, score1, score2);
                drawLine(result.arr);
            } else if (field.getAvailableCells().length === 0){
                message = 'Draw!';
                activePlayer.addWin();
                waitingPlayer.addWin();
                score1 = {player: activePlayer.getName(), score: activePlayer.getWins()};
                score2 = {player: waitingPlayer.getName(), score: waitingPlayer.getWins()};
                updateScore(message, score1, score2);
            }
        }
        if (!message){
            activePlayer.setStatus(false);
            waitingPlayer.setStatus(true);
            highlightActivePlayer(waitingPlayer.getName());
        }
    }
}

export default play;