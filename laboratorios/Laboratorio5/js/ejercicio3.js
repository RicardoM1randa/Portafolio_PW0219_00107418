function ejercicio3 (numero, arreglo)
{
    let total = 0;
    for (let i = 0; i < arreglo.length; i++) {
        
        if(numero === arreglo[i])
        {
            total ++;
        }
    }
    console.log("el numero se repite "+total+" veces");
}