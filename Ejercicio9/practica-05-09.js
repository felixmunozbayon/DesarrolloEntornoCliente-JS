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
    
    var posicionArroba = email.indexOf("@"); //devuelve la posicion del arroba

    for (var i=1; i<posicionArroba; i++) {

    if ((email.charAt(i) < "a" || email.charAt(i)>"z") && 
                !especiales.includes(email.charAt(i)) && 
                (email.charAt(i)<"0" || email.charAt(i) > "9")  
                && !arroba.includes(email.charAt(i))) {

                esEmail=false;
        }

    }

    var emailPunto = email.substring(posicionArroba+1, email.lastIndexOf("."));
    var posicionPunto = emailPunto.lastIndexOf("."); //o last index

    for (var i=0; i<posicionPunto; i++) {

    if ((emailPunto.charAt(i) < "a" || emailPunto.charAt(i)>"z") && 
                !especiales.includes(emailPunto.charAt(i)) && 
                (emailPunto.charAt(i)<"0" || emailPunto.charAt(i) > "9")){

                esEmail=false;
        }

    }

    var emailFinal=email.substring(posicionPunto+1, email.length-1);
    var posicionFinal=emailFinal.length-1;

    for (var i= 0; i<posicionFinal; i++) {

    if ((emailFinal.charAt(i)<"a" || emailFinal.charAt(i>"z")) &&
            (emailFinal.length < 2 || emailFinal.length > 4)) {

            esEmail=false;
        }
    }
    
    if (esEmail)
       document.formulario.mensaje.value="El email es correcto";
    else 
        document.formulario.mensaje.value="El email es incorrecto";

} //fin funcion 



function inicio () { //se carga automaticamente cuando se abre la pagina. Cuando se apriete el botón se pone en marcha la funcion de conversionNumeros. 

document.formulario.boton.onclick = compruebaEmail;

}
