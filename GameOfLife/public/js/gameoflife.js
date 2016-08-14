

function grid()
{
	alert('buuu');
var height = document.getElementById('GridHeight').value;
var width =  document.getElementById('GridWidth').value;
var tabla   = document.createElement("table");
var tblBody = document.createElement("tbody");
var grid = document.getElementById('grid');

grid.innerHTML='';

for (var i = 0; i <= height; i++) {
var hilera = document.createElement("tr");
hilera.id
for (var j = 0; j <= width; j++) {
  
var celda = document.createElement("td");
celda.setAttribute("id",i+','+j);

celda.setAttribute("onclick",'changeState(this.id);');
hilera.appendChild(celda);
}
tblBody.appendChild(hilera);
}
 tabla.appendChild(tblBody);

 grid.appendChild(tabla);

}

