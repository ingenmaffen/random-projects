const canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

drawBoard = () => {
    ctx.fillStyle = "burlywood";
    ctx.fillRect(150, 50, 500, 500);

    // draw border
    ctx.lineWidth = "6";
    ctx.strokeStyle = "black";
    ctx.rect(150, 50, 500, 500);
    ctx.stroke();

    //draw inner inner squares
    ctx.lineWidth = "2";    
    ctx.rect(187.5, 87.5, 425, 425);
    ctx.stroke();

    ctx.rect(225, 125, 350, 350);
    ctx.stroke();

    ctx.rect(262.5, 162.5, 275, 275);
    ctx.stroke();

    // draw inner lines
    ctx.beginPath();
    ctx.moveTo(400, 87.5);
    ctx.lineTo(400, 162.5);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(400, 600 - 87.5);
    ctx.lineTo(400, 600 - 162.5);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(187.5, 300);
    ctx.lineTo(262.5, 300);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(800 - 187.5, 300);
    ctx.lineTo(800 - 262.5, 300);
    ctx.stroke();

}

createPiece = (color, positionX, positionY, layer) => {
    const piece = new Konva.Circle({
      x: positionX,
      y: positionY,
      radius: 25,
      fill: color,
      stroke: 'black',
      strokeWidth: 4,
      draggable: true,
    });

    // add cursor styling
    piece.on('mouseover', function () {
      document.body.style.cursor = 'pointer';
    });
    piece.on('mouseout', function () {
      document.body.style.cursor = 'default';
    });

    layer.add(piece);
}

drawPieces = () => { 
    const WIDTH = window.innerWidth;
    const HEIGHT = window.innerHeight;
    const stage = new Konva.Stage({
      container: 'container',
      width: WIDTH,
      height: HEIGHT,
    });
    const layer = new Konva.Layer();
    stage.add(layer);
    for (let i = 0; i < 9; i++) {
        createPiece('red', 100, 100 + i * 60, layer);
        createPiece('green', WIDTH - 100, 100 + i * 60, layer);
    }

}

beginGame = () => {
    drawBoard();
    drawPieces();
}

beginGame();