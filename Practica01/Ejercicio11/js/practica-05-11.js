window.onload = inicio; //cargo la funcion inicio desde el comienzo, que contiene el evento de click botones. 

function compruebaLocalidad() {


    var localidad = document.formulario.localidad.value.toLowerCase();
    var esLocalidad = true;

    if (localidad.length < 7 || localidad.length > 35) {
        esLocalidad= false;

    } else if(esLocalidad) {

    //primeros caracteres 
    for (var i=0; i<3; i++) {

        if (localidad.charAt(i) < "a" || localidad.charAt(i)> "z") {
             esLocalidad=false;
        }
    } 

          for (var i=3; i<=localidad.length-3; i++) {

                if ((localidad.charAt(i) < "a" || localidad.charAt(i) > "z") &&
                    localidad.charAt(i)!=" ") {

                     esLocalidad=false

                }

            }//cierre bucle for

            if ((localidad.charAt(localidad.length-2) < "a" || localidad.charAt(localidad.length-2) > "z") 
                || (localidad.charAt(localidad.length-1) < "a" || localidad.charAt(localidad.length-1) > "z")) {

                esLocalidad=false;
            }
    }

    if (esLocalidad)
       document.formulario.mensaje.value="La localidad es valida";
    else 
        document.formulario.mensaje.value="La localidad es incorrecta";

} //fin funcion 



function inicio () { //se carga automaticamente cuando se abre la pagina. Cuando se apriete el botón se pone en marcha la funcion de conversionNumeros. 

document.formulario.boton.onclick = compruebaLocalidad;

}
