const markCell = (playerSymbol, id) => {
    let cell = document.getElementById(id);
    cell.textContent = playerSymbol;
}

export default markCell;