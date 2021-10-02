window.onload = inicio; //cargo la funcion inicio desde el comienzo, que contiene el evento de click botones. 

function compruebaEmail() {

    var email = document.formulario.email.value;
    let especiales="ñáéíóúü";
    var esEmail=true;

    var arroba = "@";
    var punto = ".";


    if ((email.charAt(0) < "a" || email.charAt(0)>"z") && 
        !especiales.includes(email.charAt(0))) {

            esEmail=false
        }

    else if (!email.includes(arroba)) {
            
            esEmail=false

    }  

    else if (!email.includes(punto)) {
             esEmail=false

    }


    if (esEmail)
       document.formulario.mensaje.value="El email es correcto";
    else 
        document.formulario.mensaje.value="El email es incorrecto";

} //fin funcion 



function inicio () { //se carga automaticamente cuando se abre la pagina. Cuando se apriete el botón se pone en marcha la funcion de conversionNumeros. 

document.formulario.boton.onclick = compruebaEmail;

}
