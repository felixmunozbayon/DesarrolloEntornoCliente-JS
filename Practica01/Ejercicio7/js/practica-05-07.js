window.onload = inicio; //cargo la funcion inicio desde el comienzo, que contiene el evento de click botones. 

function CompruebaNombre() {

    var nombre = document.formulario.nombre.value;
    var nombreMinusculas = nombre.toLowerCase(); 
    let adicionales="ñáéíóúüºª-";

    var nombreCorrecto = true;
        

    if ((nombreMinusculas.charAt(0) < "a" || nombreMinusculas.charAt(0) > "z") && !adicionales.includes(nombreMinusculas.charAt(0))) {
            nombreCorrecto = false;                 

    }

    else if ((nombreMinusculas.charAt(nombreMinusculas.length-1) < "a" || nombreMinusculas.charAt(nombreMinusculas.length-1) > "z") 
        && !adicionales.includes(nombreMinusculas.charAt(nombreMinusculas.length-1))) {
    
            nombreCorrecto = false;   

    }

    else if (nombreMinusculas.length<3 || nombreMinusculas.length>27) {

            nombreCorrecto = false;   

    }

    else {
    // la cadena en medio puede tener letras, números, espacios, guiones, 
    // y los caracteres ºª/
        let posicion=1;
        let otros="-ºª/ ";
        while (nombreCorrecto && posicion < nombreMinusculas.length -1){
            if ((nombreMinusculas.charAt(posicion) < "a" || nombreMinusculas.charAt(posicion)>"z") && 
                !adicionales.includes(nombreMinusculas.charAt(posicion)) && 
                (nombreMinusculas.charAt(posicion)<"0" || nombreMinusculas.charAt(posicion) > "9") &&
                !otros.includes(nombreMinusculas.charAt(posicion)))
                    nombreCorrecto=false;
            posicion+=1;
        }
    }

    if (nombreCorrecto)
       document.formulario.mensaje.value="Se admite el nombre";
    else 
        document.formulario.mensaje.value="El nombre no es correcto";
}



function inicio () { //se carga automaticamente cuando se abre la pagina. Cuando se apriete el botón se pone en marcha la funcion de conversionNumeros. 

document.formulario.boton.onclick = CompruebaNombre;

}
