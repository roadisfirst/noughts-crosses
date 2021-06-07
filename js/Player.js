class Player {
    constructor(name){
        this._wins = 0;
        this._isWinner = false;
        this._symbol = '';
        this._active = false;
        this._cells = [];
        this._name = name;
    }
    getName(){
        return this._name;
    }
    getStatus(){
        return this._active;
    }
    setStatus(status){
        this._active = status;
    }
    getSymbol(){
        return this._symbol;
    }
    setSymbol(symbol){
        this._symbol = symbol;
    }
    getWins(){
        return this._wins;
      }
    setWins(number){
    this._wins = number;
    }
    addWin(){
        this._wins +=1;
      }
    checkWinner(){
        return this._isWinner;
    }
    setWinner(status){
        this._isWinner = status;
    }
    chooseCell(cellId){
        this._cells.push(cellId);
    }
    getCells(){
        return this._cells;
    }
    purgeCells(){
        this._cells = [];
        return this._cells;
    }
}

export default Player;