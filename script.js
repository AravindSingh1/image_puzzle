const rows = 3;
const columns = 3;

let crrTile;
let blankTile;

var imgOrder = ["4", "2", "8", "5", "1", "6", "7", "9", "3"];

// var imgOrder = ["2", "4", "3", "5", "8", "6", "7", "9", "1"];

function loadPuzzle() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            tile.src = imgOrder.shift() + ".jpg";

            tile.addEventListener("click", play);
            document.getElementById("puzzleBoard").appendChild(tile);
        }
    }
}

loadPuzzle();


function play(ev) {

    let blankTileId;
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let id = r.toString() + "-" + c.toString();
            if (document.getElementById(id).src.includes("3.jpg")) {
                blankTile = document.getElementById(id);
                blankTileId = id;
            };
        }
    }


    let blankTileCoordinates = blankTileId.split("-");
    let blanckTileRow = parseInt(blankTileCoordinates[0]);
    let blanckTileColumn = parseInt(blankTileCoordinates[1]);

    let clickedTileId = ev.target.id;
    crrTile = document.getElementById(clickedTileId);
    let CrrCoordinates = clickedTileId.split("-");
    let crrTileRow = parseInt(CrrCoordinates[0]);
    let crrTileColumn = parseInt(CrrCoordinates[1]);

    console.log(CrrCoordinates);


    let moveLeft = crrTileRow == blanckTileRow && crrTileColumn == blanckTileColumn - 1;
    let moveRight = crrTileRow == blanckTileRow && crrTileColumn == blanckTileColumn + 1;
    let moveUp = crrTileRow == blanckTileRow - 1 && crrTileColumn == blanckTileColumn;
    let moveDown = crrTileRow == blanckTileRow + 1 && crrTileColumn == blanckTileColumn;

    let isValidMove = moveLeft || moveRight || moveDown || moveUp;


    if (isValidMove) {

        console.log(clickedTileId, blankTileId);

        let crrImage = crrTile.src;
        let blankImage = blankTile.src;
        console.log(crrImage, blankImage);
        blankTile.src = crrImage;
        crrTile.src = blankImage;

        document.getElementById("stepCount").textContent ++ ;

    }


}

// function getBlanckTileId() {
//     for (let r = 0; r < rows; r++) {
//         for (let c = 0; c < columns; c++) {
//             let id = r.toString() + "-" + c.toString();
//             if (document.getElementById(id).src.includes("3.jpg")) {
//                 blankTile = document.getElementById(id);
//             };
//             blankTileId = id;
//         }
//     }
// }