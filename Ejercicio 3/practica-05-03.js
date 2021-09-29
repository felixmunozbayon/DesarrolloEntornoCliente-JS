window.onload = inicio; 

function llenarMatriz() {
    var primo;
    var totalPrimos=0;
    var arrayPrimos = new Array();
    //var number1 = prompt ("Introduzca el primer numero="); // Este metodo seria util si se hace uso del prompt. 
    //var number2 = prompt ("Introduzca el segundo numero=");

    number1 = parseInt(document.formulario.texto1.value, 10); //lo de 10 creo que ha dicho que era para convertirlos a decimal. Si fuese 8, pues octal. Y así. 
	number2 = parseInt(document.formulario.texto2.value, 10); 
 
    for(var i=Math.min(number1,number2);i<=(Math.max(number1,number2));i++){
        primo=1;
 
            arrayPrimos[totalPrimos]=i;
            totalPrimos++;

        for(var j=2;j<i;j++){ // Se comprueba que el residuo sea diferente de 0 para decidir si es o no primo
            if(i%j==0 ){
                primo=0;
                break;
            }
        }
            if(primo==1)
            {
                arrayPrimos[totalPrimos]=i;
                document.formulario.texto3.value += i.toString() + "|"; //se convierte a toString
                totalPrimos++;
            }
        }
 
    }  

function inicio (){

document.formulario.boton.onclick = llenarMatriz;

}
