window.onload = inicio; //cargo la funcion inicio desde el comienzo, que contiene el evento de click botones. 

function contadorVocales() {

    cadena = document.formulario.cadena.value;
    cadenasinEspacios = cadena.replace(/ /g,""); //no me quita los espacios 

    let vocales= 'aeiouAEIOUáéíóúÁÉÍÓÚ';
    let contadorVocal = 0;
    let contadorConsonantes = 0;

    for (let i=0; i<cadenasinEspacios.length; i++){

        if (vocales.indexOf(cadenasinEspacios[i]) !==-1 ){

            contadorVocal+=1;

        }

        else {
                contadorConsonantes+=1;

        }

    document.formulario.vocales.value = contadorVocal;
    document.formulario.consonantes.value=contadorConsonantes;

    }  

}

function inicio () { //se carga automaticamente cuando se abre la pagina. Cuando se apriete el botón se pone en marcha la funcion de conversionNumeros. 

document.formulario.boton.onclick = contadorVocales;

}
