var arr = [1,2,3,4,5];

var funcion = x =>{
    let suma = 0;
    let promedio = 0;

    x.forEach(element =>{
        suma = suma + element;
    })
    promedio = suma / x.length;
    
    console.log(suma);
    console.log(promedio);
}