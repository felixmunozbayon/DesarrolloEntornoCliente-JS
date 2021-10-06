window.onload = inicio; //cargo la funcion inicio desde el comienzo, que contiene el evento de click botones. 

function compruebaDireccion() {


    var direccion = document.formulario.direccion.value.toLowerCase();
    var esDireccion= true; 
    var ultimoCaracter = direccion.length-1;
    caracteresEspeciales= "ºª/-";

    //evaluamos el primer caracter de la cadena

    if (direccion.charAt(0) < "a" || direccion.charAt(0) > "z") {
        esDireccion=false;
    } 

    else if ((direccion.charAt(ultimoCaracter) < "a" || direccion.charAt(ultimoCaracter) > "z") &&
            (direccion.charAt(ultimoCaracter) < "0" || direccion.charAt(ultimoCaracter) > "9")) {

        esDireccion=false;

    } else {

        for (var i=1; i<ultimoCaracter; i++){

            if ((direccion.charAt(i) < "a" || direccion.charAt(i) > "z") &&  
                (direccion.charAt(i) < "0" || direccion.charAt(i) > "9") &&
                !caracteresEspeciales.includes(direccion.charAt(i))) {

                     esDireccion=false;
                }
        }//cierre bucle for
                 if (direccion.length < 8 || direccion.length > 42) {
                    esDireccion=false
                }
          
        }//cierre primer else

    if (esDireccion)
       document.formulario.mensaje.value="La localidad es valida";
    else 
        document.formulario.mensaje.value="La localidad es incorrecta";

} //fin funcion 



function inicio () { //se carga automaticamente cuando se abre la pagina. Cuando se apriete el botón se pone en marcha la funcion de conversionNumeros. 

document.formulario.boton.onclick = compruebaDireccion;

}
