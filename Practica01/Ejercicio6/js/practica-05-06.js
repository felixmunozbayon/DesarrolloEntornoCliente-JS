window.onload = inicio; //cargo la funcion inicio desde el comienzo, que contiene el evento de click botones. 

function CadenaSubcadena() {

    var cadena = document.formulario.cadena.value;
    var cadenaMinusculas = cadena.toLowerCase(); 

    var subcadena = document.formulario.subcadena.value;
    var subcadenaMinusculas = subcadena.toLowerCase(); 

    var contador = 0;
    var posicionSubcadena = 0;

    //con el indexOF le digo que compruebe si la cadena contiene algo de lo que he puesto en la subcadena y le digo que lo compruebe inicialmente desde la posicion cero.
     //si el resultado es distinto de -1, es que la cadena sí tiene lo que he puesto en subcadena. 
    //En ese caso al contador se le suma 1 y vuelvo a evaluar desde la posicion de la subcadena si hay mas coincidencias en el string).  
    //Y todo esto esta dentro de un While, porque quiero que lo haga hasta que ya no encuentre más coincidencias de la palabra que haya puesto en la subcadena en toda la cadena. 

    while ((posicionSubcadena = cadenaMinusculas.indexOf(subcadenaMinusculas, posicionSubcadena)) !== -1) { 

        contador++;                                                              

        posicionSubcadena += subcadenaMinusculas.length; //claro, si encuentra por ejemplo una x en el puesto 7, pues dice:    
                                                        //la posicion desde la que se contara ahora es 7 + longitud de la subcadena encontrada (la x longitud 1)
                                                        //por tanto, en la nueva pasada vuelve a buscar la x desde la posicion 8. 

    }


    document.formulario.mensaje.value=contador;
 

} //fin funcion principal

function inicio () { //se carga automaticamente cuando se abre la pagina. Cuando se apriete el botón se pone en marcha la funcion de conversionNumeros. 

document.formulario.boton.onclick = CadenaSubcadena;

}
