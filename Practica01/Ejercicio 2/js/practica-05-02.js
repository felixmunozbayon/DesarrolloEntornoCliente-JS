window.onload = esPrimo; 

function esPrimo () {

    document.formulario.TextArea.value = "  "; //Esto no hace nada especial. 

    //variable que contiene el numero que se está probando
        var n = 2
        //variable que contiene el total de numeros primos encontrados
        var total = 1;

        //iterar mientras el total de numeros primos no se mayor a 100
        while (total <= 100){

            //variable que indica si un numero es primo o no
            esPrimo = true;

            //se divide el numero (n) entre todos los numeros anterios a el
            //si el modulo de la division es 0 significa que el numero no es primo
            //y se marca la variable esPrimo = false y se termina el ciclo for
            for (var i = 2; i < n; i++) {
                if(n % i == 0)
                {
                    esPrimo = false;
                    break;
                }

            }

            //si despues de ejecutar el ciclo for la variable esPrimo sigue
            //teniendo un valor true entonces se imprime el numero y se incrementa
            // el contador de numeros encontrados total++
            if(esPrimo)
            {  
             document.formulario.TextArea.value += i.toString() + "|"; 
                total++;
            }
            //se incrementa para evaluar el siguiente número
            n++;
        }

}
