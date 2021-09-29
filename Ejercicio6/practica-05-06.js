window.onload = inicio; //cargo la funcion inicio desde el comienzo, que contiene el evento de click botones. 

function CadenaSubcadena() {

    var cadena = document.formulario.cadena.value;
    var cadenaMinusculas = cadena.toLowerCase(); 
    var cadenaMinusculasSinEspacios = cadenaMinusculas.replace(/ /g,"");

    var subcadena = document.formulario.subcadena.value;
    var subcadenaMinusculas = subcadena.toLowerCase(); 
    var subcadenaMinusculasSinEspacios = subcadenaMinusculas.replace(/ /g,"");


    var contador=0;

    if (cadenaMinusculasSinEspacios.includes(subcadenaMinusculasSinEspacios)) {
        contador+=1;

    }

    document.formulario.mensaje.value=contador;
 

} //fin funcion principal

function inicio () { //se carga automaticamente cuando se abre la pagina. Cuando se apriete el botón se pone en marcha la funcion de conversionNumeros. 

document.formulario.boton.onclick = CadenaSubcadena;

}
