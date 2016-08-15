var cells;
var cells2=[];

// fuction to generate the Grid for the play.
function grid(){

	var height = document.getElementById('GridHeight').value; // get size for Grid.
	var width =  document.getElementById('GridHeight').value;	
	var table  = document.createElement("table"); 	// Create Element table in the DOM. 
	var tblBody = document.createElement("tbody");	// Create the body of the table.
	var grid = document.getElementById('grid'); // Get the Grid.

	table.style.height = '100%'; 
	grid.innerHTML=''; // Clear Grid.


	cells = new Array(document.getElementById('GridHeight').value); // Create array to safe the positions of cells.
	cells2 = new Array(document.getElementById('GridHeight').value); // Create second array for the next state.
	
	for (var i = 0; i<=document.getElementById('GridHeight').value ; i++) { //Generate the Grid.
		cells[i]= new Array(document.getElementById('GridHeight').value);
		cells2[i]= new Array(document.getElementById('GridHeight').value);
	}

	for (var i = 0; i <= height; i++) {   //Generate the Table

		var row = document.createElement("tr");
		for (var j = 0; j <= width; j++) {

			var cell = document.createElement("td");
			cell.setAttribute("id",i+','+j);
			cells[i][j]=0;
			cells2[i][j]=0;
			cell.setAttribute("onclick",'changeState(this.id);');
			row.appendChild(cell);
		}
		tblBody.appendChild(row);
	}

	table.appendChild(tblBody); // append the table body into the table 
	grid.appendChild(table); 	// append the table into the grid.
}


function changeState(id){  // function to safe the state of each cell selected or unselected.

	var vals = id.split(",");
	var row = vals[0];
	var col = vals[1];

	if(cells[row][col]==1)
	{
		document.getElementById(id).style.backgroundColor = "#000"; // color the cell black for unselected
		cells[row][col]=0;
	}else
	{
		cells[row][col]=1;
		document.getElementById(id).style.backgroundColor = "red"; // color the cell red for select.
	}
}

function stop(){ // function to stop the play.
clearTimeout(speed); 
}

function play(){ // function where all the play is developed. (Main Function).

	var height = document.getElementById('GridHeight').value; 
	var width =  document.getElementById('GridHeight').value;
	var numlivecells; // variable to count the number of live cells around the cell checking.
	
	
	
		for (var i = 0; i <= height; i++) {
			for (var j = 0; j <= width; j++) {
				
				numlivecells=0;
				numlivecells = countlives(i,j); // Call to function that check the number of live cells.
			

					if(cells[i][j]==1 && numlivecells<2){ // condition that checks if the number of live cells is minor to 2. and the cell is live
					cells2[i][j]==0;
					continue;
					}

					if(cells[i][j]==1 && numlivecells>3){ // condition that checks if the number of live cells is mayor to 3. and the cell is live
					cells2[i][j]=0;	
					continue;
					}

					if(cells[i][j]==1 && (numlivecells==2 )){// condition that checks if the number of live cells is 2 and the cell is live.
					cells2[i][j]=1;
					continue;
					}
					if(cells[i][j]==1 && (numlivecells==3 )){// condition that checks if the number of live cell is 3 and the cell is live.
					cells2[i][j]=1;
					continue;
					}

					if(cells[i][j]==0 && numlivecells==3){// condition that checks if the number of live cells is 3 and the cell is dead.
					cells2[i][j]=1;
					continue;
					}
							
			}
			numlivecells=0;
		}

					

		for (var i = 0; i <= height; i++) { // pass all the new positions of the cells to the array. 
			for (var j = 0; j <= width; j++) {
				cells[i][j]=cells2[i][j];
			}
		}

		for (var i = 0; i <= height; i++) { // clear the array to safe the new values in the next state.
			for (var j = 0; j <= width; j++) {
				cells2[i][j]=0;
			}
		}

		redraw(); // call to function to redraw the Grid with the new state.
		speed = setTimeout(play,1000); // set the speed of repetition of the function play.
}


function redraw(){	 // function to redraw the Grid.
	
	var col = document.getElementById('GridHeight').value;
	var row =  document.getElementById('GridHeight').value;

	for (var i = 0; i <= col; i++) {

		for (var j = 0; j <= row; j++) {

				if(cells[i][j]==1){ // draw red if the cell is live , draw black if the cell is dead.
					document.getElementById(i+','+j).style.backgroundColor = "red"; 
				}else{
					document.getElementById(i+','+j).style.backgroundColor = "#000";
				}
		}
	}
}
				

function countlives(i,j){ // function to count the live cells around the cell sended.

var numlivecells=0;
var heigth = document.getElementById('GridHeight').value;
var width = document.getElementById('GridHeight').value;


	for (var col=i-1;col<=i+1;col++) { // checking the 8 position around the cell.
		for (var row=j-1;row<=j+1;row++) {
			
			if(col<0 || row < 0 || col > heigth || row >width){ // condition to know if the cell is in the border of the grid.
			continue;
			}
			
			if(col==i && row==j){ // condition to not count the cell is not neighbour.
			continue;
			}
			
			if(cells[col][row]==1){ // condition to count the live cells.
			numlivecells++;
			}
		}	
		
	}
return numlivecells; // return number of live cells.
}
