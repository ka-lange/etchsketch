/*var pixel = document.createElement('div');
    pixel.style.width = '25px';
    pixel.style.height = '25px';
    pixel.style.border = 'solid black'
var square = document.getElementById('square');
square.append(pixel); */


    var grid = document.getElementById('grid');
    var columns = 4;
    var rows = 4;

    for(var i = 0; i < columns; i++) {
        var column = document.createElement('div'); //create column
        column.className = 'column';
        for (var j=0; j < rows; j++) {
            var row = document.createElement('div'); //create row
            row.style.border = 'blue';
            row.className = 'gridsquare';
            row.textContent = i + '-' + j;  //set text (?)
            column.appendChild(row);  //append row in column
        }
        grid.appendChild(column); //append column (with rows) inside grid
    }
    
