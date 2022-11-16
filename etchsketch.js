var grid = document.getElementById('grid');
var columns = 10;
var rows = 10;

for(var i = 0; i < columns; i++) {
    var column = document.createElement('div'); //create column
    column.className = 'column';
    for (var j=0; j < rows; j++) {
        var row = document.createElement('div'); //create row
        row.className = 'gridsquare';
        row.textContent = i + '-' + j;  //set text (?)
        column.appendChild(row);  //append row in column
    }
    grid.appendChild(column); //append column (with rows) inside grid
}