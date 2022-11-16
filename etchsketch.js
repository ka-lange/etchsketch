var grid = document.getElementById('grid');
var columns = 10;
var rows = 10;

for(var i = 0; i < columns; i++) {
    var column = document.createElement('div'); //create column
    column.className = 'column';
    for (var j=0; j < rows; j++) {
        var row = document.createElement('div'); //create row
        row.classList.add('gridsquare');
        row.textContent = '.';  //set text placeholders for the divs
        column.appendChild(row);  //append row in column
    }
    grid.appendChild(column); //append column (with rows) inside grid   
}

//this below adds a class to all the new divs when hovered 
//and the css file targets the new class
grid.addEventListener('mouseover', function (e) {
    // Add the "active" class to only divs with a "gridsquare" class
    if (e.target.matches('.gridsquare')) {
      e.target.classList.add('active');
    }
  });
  





