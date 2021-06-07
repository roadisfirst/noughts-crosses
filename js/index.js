import play from './play';
import Player from './Player';
import newGame from './newGame';

import '../css/style1.scss';
import '../css/buttons.sass';
import '../css/canvas.less';

let player1 = new Player('player1');
let player2 = new Player('player2');

let field = document.getElementById('field');

let gameField = newGame(player1, player2);

field.addEventListener('click', (event) => {
    let cellId = event.target.closest('div').id;
    const availableCells = gameField.getAvailableCells();
    if(availableCells.includes(cellId)){
        play(player1, player2, gameField, cellId);
    }
})

document.addEventListener('click', (event) => {
    if(event.target.id === 'newGameBtn'){
        gameField = newGame(player1, player2);
    }
    if(event.target.id === 'resetBtn'){
        player1 = new Player('player1');
        player2 = new Player('player2');
        gameField = newGame(player1, player2);
    }
})