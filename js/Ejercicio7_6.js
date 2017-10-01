//Ejercicio 5-4 


// La variable contador es el índice con el que se accederá a los arrays con las imágenes
// y los textos a mostrar
var contador=0;


// Array con la localización de los ficheros de las imágenes
var img = new Array(
	"img/fotoCiencias.jpg",
	"img/fotoDerecho.jpg",
	"img/fotoEconomicas.jpg",
	"img/fotoEducacion.jpg",
	"img/fotoFilologia.jpg",
	"img/fotoFilosofia.jpg",
	"img/fotoGeografiaHistoria.jpg",
	"img/fotoIndustriales130.jpg",
	"img/fotoInformatica.jpg",
	"img/fotoPsicologia.jpg"
);


// Array con los textos a mostrar
var tittle = new Array(
	"Facultad de Ciencias",
	"Facultad de Derecho",
	"Facultad de Economicas",
	"Facultad de Educacion",
	"Facultad de Filologia",
	"Facultad de Filosofia",
	"Facultad de Geografia e Historia",
	"Facultad de Industriales",
	"Facultad de Informatica",
	"Facultad de Psicologia"
);


function change(){

	document.getElementById("facultades").src = img[contador];
	document.getElementById("titulos").innerHTML = tittle[contador];
	
	// Actualizar contador. Los array tienen una longitud de 10, pero el contador
	// tiene que ir desde 0 hasta 9, por eso se pone el -1
	if(contador== img.length-1)
		contador=0;
	else	
		contador++;
	
}


onload = function(){
	
	// LLamar por primera vez a la función change() para que coloque los primeros valores
	change();
	
	// Llamar a la función change() cada 2000 milisegundos = 2 segundos
	setInterval(change,2000);
	
}