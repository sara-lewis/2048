var board = 
    [[ 2, 0, 0, 0],
     [ 0, 0, 0, 0],
     [ 0, 0, 0, 0],
     [ 0, 0, 0, 0]];

// start game function 
function startGame() {
    for(var i; i<2; i++){
        var row = Math.random(0,3);
        var col = Math.random(0,3);
        if(squareValues[row][col] == 0){
            squareValues[row][col]=2;
        }
    }
};

// movement function 

function arrowPress(e) {
    for( var row = 0; row< squareValues.length; row++) {
        for( var column = 0; column < squareValues[row]; column ++) {
            if (e.keyCode == '38') {
                // up arrow
                squareValues[row-1][column] = squareValues[row][column]

            }
            else if (e.keyCode == '40') {
                // down arrow
                squareValues[row+1][column] = squareValues[row][column] 
            }
            else if (e.keyCode == '37') {
               // left arrow
                squareValues[row][column-1] = squareValues[row][column]
            }
            else if (e.keyCode == '39') {
               // right arrow
                squareValues[row][column+1] = squareValues[row][column]
            }
        }
    }
};

if(board[0][0] == 2){
document.getElementById(boardID).style.background = "#f0e5da";
}
else if(board[i][j] == 4){
document.getElementById(boardID).style.background = "#ede2c8";
}
else if(board[i][j] == 8){
document.getElementById(boardID).style.background = "#feb578";
}
else if(board[i][j] == 16){
document.getElementById(boardID).style.background = "#ff9962";
}
else if(board[i][j] == 32){
document.getElementById(boardID).style.background = "#ff8060";
}
else if(board[i][j] == 64){
document.getElementById(boardID).style.background = "#ff613c";
}
else if(board[i][j] == 128){
document.getElementById(boardID).style.background = "#efd26d";
}
else if(board[i][j] == 256){
document.getElementById(boardID).style.background = "#efd15c";
}
else if(board[i][j] == 512){
document.getElementById(boardID).style.background = "#efcd4a";
}
else if(board[i][j] == 1024){
document.getElementById(boardID).style.background = "#f0ca36";
}
else if(board[i][j] == 2048){
document.getElementById(boardID).style.background = "#eeca00";
}
else{
document.getElementById(boardID).style.background = "#ccc0b3";
}

