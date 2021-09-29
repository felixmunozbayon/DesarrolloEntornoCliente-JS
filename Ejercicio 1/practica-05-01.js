window.onload = esPrimo; 

function esPrimo () {

    document.formulario.TextArea.value = "  ";

    for(var i=1; i<=100; i++) {
             let contador = 0;
            for(var j=1;j<=i;j++){
                if(i%j==0){
                    contador++;
                }
            }
            if(contador==2){
                document.formulario.TextArea.value += i.toString() + "|"; 


            }
    }

    
}


