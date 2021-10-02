window.onload = inicio; //cargo la funcion inicio desde el comienzo, que contiene el evento de click botones. 

function compruebaFecha() {

    var fecha = document.formulario.fecha.value;

    var fechaCorrecta = true;

    var fechaPartes = fecha.split("/");

    var dia = fechaPartes[0];
    var mes = fechaPartes[1];
    var ano = fechaPartes[2];

    if ((dia.length < 1 || dia.length > 2) || (mes.length < 1 || mes.length > 2)) {

        fechaCorrecta=false; 
    }

    else if (ano.length != 4) {

        fechaCorrecta=false; 
    }

    if (fechaCorrecta)
       document.formulario.mensaje.value="La fecha es correcta";
    else 
        document.formulario.mensaje.value="La fecha es incorrecta";

} //fin funcion 



function inicio () { //se carga automaticamente cuando se abre la pagina. Cuando se apriete el botón se pone en marcha la funcion de conversionNumeros. 

document.formulario.boton.onclick = compruebaFecha;

}
