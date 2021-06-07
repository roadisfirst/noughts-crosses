const highlightActivePlayer = (name) => {
    const players = ['player1', 'player2'];
    const activeIndex = players.indexOf(name);
    const playerActiveId = players[activeIndex];
    const waitingIndex = +!activeIndex;
    const playerWaitingId = players[waitingIndex];
    const playerActive = document.getElementById(playerActiveId);
    const playerWaiting = document.getElementById(playerWaitingId);
    playerActive.classList.add('active-player');
    if(playerWaiting.classList.contains('active-player')){
        playerWaiting.classList.remove('active-player');
    }
    
}

export default highlightActivePlayer;