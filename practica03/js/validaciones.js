

//funcion dni

function idDNI(dni){
  var salida=1;
  var letraControl=["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X" ,"B" ,"N" ,"J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

  var numerosDni=dni.substring(0,dni.length-1); //Recordemos que el último parámetro no se muestra. Es decir, si el DNI es 50556234A:
    // dni.length = es 9. Si quiero que me coja los numeros, es 9-1=8. de 0 a 8, porque la A, que ocupa la 8, no la cogería.
  var resto=0; var letra;
  if(numerosDni.length<6 || numerosDni.length>8 || numerosDni<100000){
    salida= 3;
  }//de if
  else{
    if(isNaN(numerosDni)){
        salida=0;
      }//de if
    else{
      resto=numerosDni%23;
      letra=letraControl[resto];
      if(letra!=dni.charAt(dni.length-1)){ //Aqui si tengo que usar el dni.length-1, porque coge directamente esa posición del DNI, en este caso la A. 
        salida= 2;
      }//de if
    }//de else
  }//de else principal
  return salida;
}


//funcion nif

/* La función nos va a permitir comprobar si una cadena se corresponde con un CIF y ¿cómo es? si es correcto o erróneo. 
La función nos va a devolver un valor que nos va a indicar que tipo de valor se ha introducido, los valores que devuelve son los anteriores. 

El CIF es el código de identificación fiscal de las personas jurídicas, de las empresas. El CIF va a tener el siguiente formato: Una letra (A..H, J, U, V), 
luego siete dígitos y por último el carácter de control que va a ser un número. Una letra (P, Q, R, S, W), luego siete dígitos y por último el carácter de control que va a ser una letra. 
Para el cálculo del carácter de control se cogen los 7 dígitos. D7 D6 D5 D4 D3 D2 D1. Para los dígitos que ocupan posiciones impares, cogeremos cada dígito se multiplica por 2. 
Si el resultado > 9 se suman los dígitos entre sí, sino se coge el valor de la multiplicación Se suman los valores de operar con cada dígito. 
Se suman entre si los dígitos que ocupan posiciones pares. Se suman los dos valores obtenidos. Dividimos el valor obtenido entre 10 y nos quedamos con el resto. 
Obtenemos el complemento a 10 (10 - número) del valor anterior, si el valor obtenido es 10 se utiliza el 0. Si el carácter-control es un dígito el valor anterior es el carácter de control. 
Si el carácter-control es una letra se hace la siguiente conversión.*/

function esCif (cif) {
  var cadenaCif = cif.trim().toUpperCase();
  var inicio="ABCDEFGHJUVPQRSW";
  var inicio1 = "ABCDEFGHJUV";
  var inicio2 = "PQRSW";
  var letras ="JABCDEFGHI";
  var resultado;
  if (!inicio.include(cadenaCif.charAt(0)) || candenaCif.length!=9) { //Se comprueba si el nif empieza por inicio1 y si tiene un tamaño diferente a 9. Luego seguimos comprobando. 
      resultado="0"; 
  } else {
      var digitos=true;   
      for (var i=1; i<8; i++) { //se comprueba si el cif sigue con 7 digitos. Desde la posicion 1 a la 8 (siete digitos).
        if (candenaCif.charAt(i)<0 || cadenaCif.charAt(i)>9) {
          digitos=false;
        }//condicion digitos if 
      }//bucle for
      if (digitos) {//si es un digito, comprueba lo de pares e impares. 
        var sumaPares=0; //posicionpares
        var sumaImpares=0; //posicionimpares
        for (var i=1; i<8; i+=2) { //Primero analizamos los impares. 
         var numeroPosicionImpar = parseInt(cadenaCif.charAt(i),10)*2; //Si el digito ocupa una posicion impar, coge cada digito y multiplica por dos. 
          if (numeroPosicionImpar>9) {//si el resultado es mayor que 9, ¿SUMA LOS DÍGITOS ENTRE SÍ?
            sumaImpares += 1 + (numeroPosicionImpar % 10) ; //no entiendo por qué. "Si el resultado > 9 se suman los dígitos entre sí". ¿Pero qué dígitos se suman? 
          }//bucle if impares
           else sumaImpares+= numeroPosicionImpar; //SI NO es mayor que 9, coge el valor de la multiplicacion (y se añade a la suma de los impares). 
        }//bucle for
     for (var j=2;j < 8 ; j+=2) {
          sumaPares += parseInt(cadenaCif.charAt(j),10); //se suman entre sí los dígitos que ocupan posiciones pares
        }
        var todos=sumaPares + sumaImpares; //se suman los dos valores obtenidos
        var division = todos % 10; //Dividimos el valor obtenido entre 10 y nos quedamos con el resto.
        var complemento = (10 - division) % 10; //Obtenemos el complemento a 10 (10 - número) del valor anterior, 
        //si el valor obtenido es 10 se utiliza el 0.
        //Si el carácter-control es un dígito el valor anterior es el carácter de control. Si el carácter-control es una letra se hace la siguiente conversión.
        
        // si empieza por una de las letras indicadas, va a terminar por un dígito
        if (inicio1.includes(cadenaCif.charAt(0)){
            if (cadenaCif.charAt(0)==complemento.toString())
                // cif correcto
            else
               // cif erróneo
            } else {
          // si no empiza por una de esas letras, empieza por el otro conjunto de letras y el caracter de control es una letra.
              if (cadenaCif.charAt(0)==letras.charAt(complemento))
                // cif correcto
            else
               // cif erróneo
        }
      }//de if (digitos)
  }
  return resultado; 
}
