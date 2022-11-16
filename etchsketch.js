var grid = document.getElementById('grid');
var columns = 10;
var rows = 10;

for(var i = 0; i < columns; i++) {
    var column = document.createElement('div'); //create column
    column.className = 'column';
    for (var j=0; j < rows; j++) {
        var row = document.createElement('div'); //create row
        row.classList.add('gridsquare');
        row.textContent = i + '-' + j;  //set text placeholders for the divs
        column.appendChild(row);  //append row in column
        
        row.addEventListener('mouseover', colorChange)
        function colorChange () {
            row.setAttribute("style", "background-color: black;")
        }
    }
    grid.appendChild(column); //append column (with rows) inside grid   
}

//Set up a “hover” effect so that the grid divs change color 
//when your mouse passes over them, 
//leaving a (pixelated) trail through your grid
//like a pen would.



