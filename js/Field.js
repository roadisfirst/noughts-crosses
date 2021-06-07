class Field {
    static get COMBINATIONS(){
        if (!this._COMBINATIONS){
            this._COMBINATIONS = [
                ['cell-1', 'cell-2', 'cell-3'],
                ['cell-4', 'cell-5', 'cell-6'],
                ['cell-7', 'cell-8', 'cell-9'],
                ['cell-1', 'cell-4', 'cell-7'],
                ['cell-2', 'cell-5', 'cell-8'],
                ['cell-3', 'cell-6', 'cell-9'],
                ['cell-1', 'cell-5', 'cell-9'],
                ['cell-3', 'cell-5', 'cell-7']
            ];
        }
        return this._COMBINATIONS;
    }
    constructor(){
        this._cells = [];
    }
    getAvailableCells(){
        return this._cells;
    }
    addCell(id){
        this._cells.push(id);
    }
    removeCellFromAvailable(cellId){
        this._cells.forEach((item, i) => {
            if( item === cellId){
                this._cells.splice(i, 1);
            }
        });
      }

}

export default Field;