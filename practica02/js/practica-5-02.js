window.onload = inicio;

function inicio () {

//aspectosgenerales
document.primero.provincia.readOnly=true;

//todos los botones
//punto1
document.primero.nif.onfocus = cambioColorFondo;
document.primero.nombre.onfocus = cambioColorFondo;
document.primero.apellidos.onfocus = cambioColorFondo;
document.primero.domicilio.onfocus = cambioColorFondo;
document.primero.localidad.onfocus = cambioColorFondo;
document.primero.cp.onfocus = cambioColorFondo;
document.primero.provincia.onfocus = cambioColorFondo;

//punto2
document.primero.nif.onblur = fondoNormalidad;
document.primero.nombre.onblur = fondoNormalidad;
document.primero.apellidos.onblur = fondoNormalidad;
document.primero.domicilio.onblur = fondoNormalidad;
document.primero.localidad.onblur = fondoNormalidad;
document.primero.cp.onblur = fondoNormalidad;
document.primero.provincia.onblur = fondoNormalidad;

//punto3
document.primero.cp.onchange = compruebaCodigoPostal;

//punto4
document.body.onkeyup = cambiaFondoTecla; 

//punto5 y punto6

for (elemento of document.primero.elements) {

	if (elemento.type=="radio") {
		document.onchange = cambiaImagenCiudad;
	} 

	if (elemento.type=="checkbox") {
		document.onclick = cambiaAficiones;
	}
} 

//punto7
alert("Bienvenidos");

//punto8
document.primero.nombre.onkeypress = soloLetras;
document.primero.apellidos.onkeypress = soloLetras;
document.primero.localidad.onkeypress = soloLetras;

//punto9 pulsar el boton limpiar y el formulario se resetea. Onreset es un elemento de formulario, no de botón. 
document.primero.onreset=limpiarFormulario;

//punto10 Creo que con submit sobre el formulario.
document.primero.onsubmit = validarDNI;



}//FUNCION FINAL. 




//punto1
function cambioColorFondo(evento) {

	var otroColor = evento || window.event;

	otroColor.target.style.background="red";
}

//punto2
function fondoNormalidad(evento) {

	var eventos = evento || window.event;

	eventos.target.style.background="white";
}

//punto3
function  compruebaCodigoPostal()  {

	var codigo = document.primero.cp.value;

	if(isNaN(codigo) || codigo<1 || codigo>52) {
    		document.primero.cp.value="Código no válido";
			document.primero.provincia.value="";
  	}

	else {
    switch (codigo) {
      case "01":
      	document.primero.provincia.value="Araba/Álava";
      	break;
      case "02":
      	document.primero.provincia.value="Albacete";
      	break;
      case "03":
      	document.primero.provincia.value="Alicante/Alacant";
      	break;
      case "04":
      	document.primero.provincia.value="Almería";
      	break;
      case "05":
      	document.primero.provincia.value="Ávila";
      	break;
      case "06":
      	document.primero.provincia.value="Badajoz";
      	break;
      case "07":
      	document.primero.provincia.value="Baleares";
      	break;
      case "08":
      	document.primero.provincia.value="Barcelona";
      	break;
      case "09":
      	document.primero.provincia.value="Burgos";
      	break;
      case "10":
      	document.primero.provincia.value="Cáceres";
      	break;
      case "11":
      	document.primero.provincia.value="Cádiz";
      	break;
      case "12":
      	document.primero.provincia.value="Castellón";
      	break;
      case "13":
      	document.primero.provincia.value="Ciudad Real";
      	break;
      case "14":
      	document.primero.provincia.value="Córdoba";
      	break;
      case "15":
      	document.primero.provincia.value="A Coruña";
      	break;
      case "16":
      	document.primero.provincia.value="Cuenca";
      	break;
      case "17":
      	document.primero.provincia.value="Gerona";
      	break;
      case "18":
      	document.primero.provincia.value="Granada";
      	break;
      case "19":
      	document.primero.provincia.value="Guadalajara";
      	break;
      case "20":
      	document.primero.provincia.value="Guipúzcoa";
      	break;
      case "21":
      	document.primero.provincia.value="Huelva";
      	break;
      case "22":
      	document.primero.provincia.value="Huesca";
      	break;
      case "23":
      	document.primero.provincia.value="Jaén";
      	break;
      case "24":
      	document.primero.provincia.value="León";
      	break;
      case "25":
      	document.primero.provincia.value="Lérida";
      	break;
      case "26":
      	document.primero.provincia.value="La Rioja";
      	break;
      case "27":
      	document.primero.provincia.value="Lugo";
      	break;
      case "28":
      	document.primero.provincia.value="Madrid";
      	break;
      case "29":
      	document.primero.provincia.value="Málaga";
      	break;
      case "30":
      	document.primero.provincia.value="Murcia";
      	break;
      case "31":
      	document.primero.provincia.value="Navarra";
      	break;
      case "32":
      	document.primero.provincia.value="Orense";
      	break;
      case "33":
      	document.primero.provincia.value="Asturias";
      	break;
      case "34":
      	document.primero.provincia.value="Palencia";
      	break;
      case "35":
      	document.primero.provincia.value="Las Palmas";
      	break;
      case "36":
      	document.primero.provincia.value="Pontevedra";
      	break;
      case "37":
      	document.primero.provincia.value="Salamanca";
      	break;
      case "38":
      	document.primero.provincia.value="Santa Cruz de Tenerife";
      	break;
      case "39":
      	document.primero.provincia.value="Cantabria";
      case "40":
      	document.primero.provincia.value="Segovia";
      	break;
      case "41":
      	document.primero.provincia.value="Sevilla";
      	break;
      case "42":
      	document.primero.provincia.value="Soria";
      	break;
      case "43":
      	document.primero.provincia.value="Tarragona";
      	break;
      case "44":
      	document.primero.provincia.value="Teruel";
      	break;
      case "45":
      	document.primero.provincia.value="Toledo";
      	break;
      case "46":
      	document.primero.provincia.value="Valencia";
      	break;
      case "47":
      	document.primero.provincia.value="Valladolid";
      	break;
      case "48":
      	document.primero.provincia.value="Vizcaya";
      	break;
      case "49":
      	document.primero.provincia.value="Zamora";
      	break;
      case "50":
      	document.primero.provincia.value="Zaragoza";
      	break;
      case "51":
      	document.primero.provincia.value="Ceuta";
      	break;
      case "52":
      	document.primero.provincia.value="Melilla";
      	break;

      default:
      document.primero.provincia.value="";
    }
  	}
}

//punto4

function cambiaFondoTecla (evento) {

	var capturaTecla = evento || window.event;

	if (capturaTecla.ctrlKey && capturaTecla.keyCode === 114) { //ahora al presionar control + f3 si me cambia el color. 
		numeroAleatorio = Math.floor(Math.random()*4+1);

		switch(numeroAleatorio) {
			case 1: document.body.style.backgroundImage="url(imagenes/paris.jpg)";
				  break;
			case 2: document.body.style.backgroundImage="url(imagenes/torre-belen.jpg)";
				  break;
			case 3: document.body.style.backgroundImage="url(imagenes/fontana-trevi.jpg)";
				  break;
	  		case 4: document.body.style.backgroundImage="url(imagenes/acropolis-atenas.jpg)";
				  break;
			case 5: document.body.style.backgroundImage="url(imagenes/plaza-san-marcos.jpg)";
				  break;
		}
	} 
}

//punto5
function cambiaImagenCiudad() {

	if (document.primero.provin[0].checked) {
		document.imgprovincia.src="imagenes/cordoba.jpg";
	}
	if (document.primero.provin[1].checked) {
		document.imgprovincia.src="imagenes/leon.jpg";
	}
	if (document.primero.provin[2].checked) {
		document.imgprovincia.src="imagenes/segovia.jpg";
	}
	if (document.primero.provin[3].checked) {
		document.imgprovincia.src="imagenes/sevilla.jpg";
	}
}

//punto6
function cambiaAficiones() {

	var imagenes = new Array();
	var contador=0;

	if (document.primero.viajar.checked) {
			imagenes.push("imagenes/viajar.jpg");

	}
	if (document.primero.leer.checked) {
			imagenes.push("imagenes/leer.jpg");

	} 
	if (document.primero.musica.checked) {
			imagenes.push("imagenes/musica.jpg");

	}
	if (document.primero.cine.checked) {
			imagenes.push("imagenes/cine.jpg");

	}
	if (document.primero.deporte.checked) {
			imagenes.push("imagenes/deporte.jpg");

	}
	if (document.primero.cena.checked) {
			imagenes.push("imagenes/cenar.jpg");
	}

	var VnbIntervalo = setInterval(loop,10000);


	function loop (){
		document.imgaficion.src=imagenes[contador%imagenes.length];
		contador+=1;

	}//salen las imagenes, pero si se hace clic en todas. Y el tiempo de 10 segundos no se cumple.

}//funcion CAMBIA AFICIONES

//punto 8 

function soloLetras (evento) {

	let eventos = evento || Windows.event;
	let especiales="ñáéíóúü";
	let enviar = true;
	let espacioBlanco=" ";
	let caracter = String.fromCharCode(eventos.charCode).toLowerCase(); //la otra forma es eventos.target.value y luego recorrer cada posicion con bucle.
																		//ejemplo: for (var i=0; caracter.length; i++) {
																		// if(contenido[i]<"a" || caracter > "z") eventos.target.value="Contenido no valido";
																		//}

	if ((caracter < "a" || caracter > "z") && !especiales.includes(caracter) && eventos.keyCode!=8 //tecla de retroceso
	&& !espacioBlanco.includes(caracter))  { 
	
	enviar=false;
	}

	return enviar;
}


//punto 9
function limpiarFormulario(){

	document.primero.imgprovincia.src=" ";

}

//punto 10

	function validarDNI(dni) {
    var numero, otro, letra;
    var expresion_regular_dni = /^[XYZLKM]?\d{5-8}[A-Z]$/;

    dni = document.primero.nif.value;
    dnimayusculas = dni.toUpperCase();

    if(expresion_regular_dni.test(dnimayusculas) === true){
        numero = dnimayusculas.substr(0,dnimayusculas.length-1);
        numero = numero.replace('X', 0);
        numero = numero.replace('Y', 1);
        numero = numero.replace('Z', 2);
        numero = numero.replace('L', 3);
        numero = numero.replace('K', 4);
        numero = numero.replace('M', 5);
        otro = dnimayusculas.substr(dnimayusculas.length-1, 1);
        numero = numero % 23;
        letra = 'TRWAGMYFPDXBNJZSQVHLCKE';
        letra = letra.substring(numero, numero+1);
        if (letra != otro) {
            alert('Dni erroneo, la letra del NIF no se corresponde');
            return false;
        }else{
            alert('Dni correcto');
            return true;
        }
    }else{
        alert('Dni erroneo, formato no válido');
        return false;
    }
	}



