window.onload = inicio; //cargo la funcion inicio desde el comienzo, que contiene el evento de click botones. 

function conversionNumeros() {
    
    numeroDecimal = parseInt(document.formulario.decimal.value, 10); //primero pasarlo a decimal y luego ya convertirlo. 

    //Conversion de numeros decimales en hexa, binario y octal y en formato string, para que pueda ser imprimido en la caja de texto
    numeroHex=numeroDecimal.toString(16);
    numeroOct=numeroDecimal.toString(8);
    numBin=numeroDecimal.toString(2);

    //le digo a cada uno de los text que reflejen el resultado correspondiente de la conversion
    document.formulario.hexadecimal.value = numeroHex;
    document.formulario.octal.value = numeroOct;
    document.formulario.binario.value = numBin;

    //¿Faltaría hacer algunas text de solo lectura? 

 
    }  

function inicio (){ //se carga automaticamente cuando se abre la pagina. Cuando se apriete el botón se pone en marcha la funcion de conversionNumeros. 

document.formulario.boton.onclick = conversionNumeros;

}
