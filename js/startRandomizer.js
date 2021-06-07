export const startRandomizer = () => {
    const players = ['player1', 'player2'];
    const maxRange = 2;
    return players[Math.floor(Math.random() * maxRange)];
}