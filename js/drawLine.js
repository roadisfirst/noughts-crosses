import getPosition from './getPosition';
import Field from './Field';

const drawLine = (arr) => {
    let sortedArr = [...arr].sort();
    let startX, startY, endX, endY;
    const makeHalf = 2;
    const canvas = document.getElementById('winnerLine');
    let canvasPosition = getPosition(canvas);
    let positions = arr.map(element => {
        let domElement = document.getElementById(element);
        let domElementPosition = getPosition(domElement);
        return domElementPosition;
    });
    let diagonal159 = sortedArr.toString() === Field.COMBINATIONS['6'].toString();
    let diagonal357 = sortedArr.toString() === Field.COMBINATIONS['7'].toString();
    if(sortedArr.toString() === Field.COMBINATIONS[0].toString() || 
        sortedArr.toString() === Field.COMBINATIONS[1].toString() || 
        sortedArr.toString() === Field.COMBINATIONS['2'].toString() ){
            startX = 0;
            startY = positions[0].y + positions[0].height / makeHalf - canvasPosition.top;
            endX = canvasPosition.width;
            endY = positions[0].y + positions[0].height / makeHalf - canvasPosition.top;
    } else if (sortedArr.toString() === Field.COMBINATIONS['3'].toString() || 
    sortedArr.toString() === Field.COMBINATIONS['4'].toString() || 
    sortedArr.toString() === Field.COMBINATIONS['5'].toString()){
        startX = positions[0].x + positions[0].width / makeHalf - canvasPosition.left;
        startY = 0;
        endX = positions[0].x + positions[0].width / makeHalf - canvasPosition.left;
        endY = canvasPosition.height;
    } else if (diagonal159 || diagonal357){
        startX = diagonal357 ? canvasPosition.width : 0;
        startY = 0;
        endX = diagonal357 ? 0 : canvasPosition.width;
        endY = canvasPosition.height;
    }
    let ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);

    ctx.lineWidth = 5;
    ctx.strokeStyle = '#ff0000';

    ctx.stroke();
    canvas.classList.add('canvas-active');
}

export default drawLine;