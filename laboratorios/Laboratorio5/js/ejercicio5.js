function ejercicio5(arreglo)
{
    let arre=arreglo.length;
    let reverse="";
    for (let i = arre-1; i > -1; i--) {
        reverse += arreglo[i];
        console.log(arreglo[i]);
        }

    if(arreglo===reverse)
    {
        console.log("la palabra es palíndroma");
    }
    else
    {
        console.log("la palabra NO es palíndroma");
        console.log(reverse);
    }
}