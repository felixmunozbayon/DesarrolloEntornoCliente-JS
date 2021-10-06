window.onload= inicio;

function inicio() {
    document.formulario.boton.onclick= esPalindromo;
}

function esPalindromo() {
    var palindromo= document.formulario.palindromo.value;
    var palindromoAlReves= "";
    //para que no distinga entre mayúsculas y minúsculas al comprobar.
    palindromo= palindromo.toLowerCase();
    palindromoAlReves= palindromoAlReves.toLowerCase();
    
    //para quitar los espacios.
    for(var i=0; i<palindromo.length;i++) { //comprueba todos los caracteres.
        if(palindromo.charAt(i)==" ") 
            palindromo= palindromo.replace(palindromo.charAt(i),"");
    }

    //para dar la vuelta al palindromo.
    for(var i=0; i<palindromo.length;i++) {
        palindromoAlReves= palindromo.charAt(i)+palindromoAlReves;
    }

    if(palindromo==palindromoAlReves) {
        document.formulario.mensaje.value= "Es un palíndromo";
    } else {
        document.formulario.mensaje.value= "No es un palíndromo";
    }
}