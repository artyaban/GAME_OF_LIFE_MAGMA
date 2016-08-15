var cells;
var cells2=[];


function grid(){

	var height = document.getElementById('GridHeight').value;
	var width =  document.getElementById('GridHeight').value;
	var table  = document.createElement("table");
	var tblBody = document.createElement("tbody");
	var grid = document.getElementById('grid');

	table.style.height = '100%';
	grid.innerHTML='';


	cells = new Array(document.getElementById('GridHeight').value);
	cells2 = new Array(document.getElementById('GridHeight').value);
	
	for (var i = 0; i<=document.getElementById('GridHeight').value ; i++) {
		cells[i]= new Array(document.getElementById('GridHeight').value);
		cells2[i]= new Array(document.getElementById('GridHeight').value);
	}

	for (var i = 0; i <= height; i++) {

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

	table.appendChild(tblBody);
	grid.appendChild(table);
}


function changeState(id){

	var vals = id.split(",");
	var row = vals[0];
	var col = vals[1];

	if(cells[row][col]==1)
	{
		document.getElementById(id).style.backgroundColor = "#000";
		cells[row][col]=0;
	}else
	{
		cells[row][col]=1;
		document.getElementById(id).style.backgroundColor = "red";
	}
}

function stop(){
clearTimeout(speed);
}

function play(){

	var height = document.getElementById('GridHeight').value;
	var width =  document.getElementById('GridHeight').value;
	var numlivecells;
	
	
	
		for (var i = 0; i <= height; i++) {
			for (var j = 0; j <= width; j++) {
				
				numlivecells=0;
				numlivecells = countlives(i,j);
			

					if(cells[i][j]==1 && numlivecells<2){
					cells2[i][j]==0;
					continue;
					}

					if(cells[i][j]==1 && numlivecells>3){
					cells2[i][j]=0;	
					continue;
					}

					if(cells[i][j]==1 && (numlivecells==2 )){
					cells2[i][j]=1;
					continue;
					}
					if(cells[i][j]==1 && (numlivecells==3 )){
					cells2[i][j]=1;
					continue;
					}

					if(cells[i][j]==0 && numlivecells==3){
					cells2[i][j]=1;
					continue;
					}
							
			}
			numlivecells=0;
		}

					

		for (var i = 0; i <= height; i++) {
			for (var j = 0; j <= width; j++) {
				cells[i][j]=cells2[i][j];
			}
		}

		for (var i = 0; i <= height; i++) {
			for (var j = 0; j <= width; j++) {
				cells2[i][j]=0;
			}
		}

		redraw();
		speed = setTimeout(play,1000);
}


function redraw(){	
	
	var col = document.getElementById('GridHeight').value;
	var row =  document.getElementById('GridHeight').value;

	for (var i = 0; i <= col; i++) {

		for (var j = 0; j <= row; j++) {

				if(cells[i][j]==1){
					document.getElementById(i+','+j).style.backgroundColor = "red";
				}else{
					document.getElementById(i+','+j).style.backgroundColor = "#000";
				}
		}
	}
}
				

function countlives(i,j){

var numlivecells=0;
var heigth = document.getElementById('GridHeight').value;
var width = document.getElementById('GridHeight').value;


	for (var col=i-1;col<=i+1;col++) {
		for (var row=j-1;row<=j+1;row++) {
			
			if(col<0 || row < 0 || col > heigth || row >width){
			continue;
			}
			
			if(col==i && row==j){
			continue;
			}
			
			if(cells[col][row]==1){
			numlivecells++;
			}
		}	
		
	}
return numlivecells;
}
