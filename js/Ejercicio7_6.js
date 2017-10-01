//Ejercicio 7-6 
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

function cambiarFoto(){
	var texto = document.getElementById("titulos");
	var foto = document.getElementById("facultades");

	var randomArray = Math.floor(Math.random() * fotos.length);

	texto.innerHTML = textos[randomArray];
	foto.src = fotos[randomArray];
}

onload = function() {
	cambiarFoto();
	setInterval(cambiarFoto,2000);
}
