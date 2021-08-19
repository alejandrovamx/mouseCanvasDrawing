var cuadro = document.getElementById("milienzo");
var papel = cuadro.getContext("2d");
var color = document.getElementById("colorfacha");
var boton = document.getElementById("botonfacha");
boton.addEventListener("click", limpiarCanvas);
var grosor = document.getElementById("grosorfacha");
var estado = 0; 	//estado del click, click status
var x;		//guardar coordenadas de x, save x coordinates
var y;		//guardar coordenadas de y, save y coordinates
document.addEventListener("mousedown", presionarMouse);
document.addEventListener("mouseup", soltarMouse);
document.addEventListener("mousemove", dibujarMouse);

function dibujarMouse(evento){
	var colorLinea = color.value;
	var grosorLinea = grosor.value;
	if(estado==1){
		dibujarLineaCanvas(colorLinea, grosorLinea, x, y, evento.layerX, evento.layerY, papel);
	}
	x = evento.layerX;
	y = evento.layerY;
}

function presionarMouse(evento){
	estado = 1;		//click presionado, click pressed
	x = evento.layerX;
	y = evento.layerY;
}

function soltarMouse(evento){
	estado = 0;		//click no presionado, non pressed click
	x = evento.layerX;
	y = evento.layerY;
}

//funcion para dibujar las lineas del usuario, draw the user lines 
function dibujarLineaCanvas(color, grosor, x_inicial, y_inicial, x_final, y_final, lienzo){
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.lineWidth = grosor;
	lienzo.moveTo(x_inicial, y_inicial);
	lienzo.lineTo(x_final, y_final);
	lienzo.stroke();
	lienzo.closePath();
}

//funcion para dibujar las lineas del borde, draw the canvas´ edges lines
function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final, lienzo){
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo(x_inicial, y_inicial);
	lienzo.lineTo(x_final, y_final);
	lienzo.stroke();
	lienzo.closePath();
}

//Bordes del canvas inicial, initial canvas edges
dibujarLinea("black",1,1,1,599,papel);
dibujarLinea("black",599,1,1,1,papel);
dibujarLinea("black",599,1,599,599,papel);
dibujarLinea("black",1,599,599,599,papel);

//funcion limpiar el canvas, clean the canvas
function limpiarCanvas(){
	papel.clearRect(1,1,599,599);
	//Bordes del canvas para que al limpiar, se integren de nuevo
}

//funcion para mostrar el grosor en numero del rango, show the width´s value
function rangoValor(grosorfacha){
	document.getElementById("textogrosorfacha").value=grosorfacha;
}

console.log("Desarrollado por 1,13,6,11,1,16,4,21,18");