function ejercicio4 (numero)
{
    valores=[];
    var numeroaleatorio;

    for (let i = 0; i < 20; i++) {
        numeroaleatorio =(Math.floor(Math.random()*100)+1);
        valores.push(numeroaleatorio);
    }
    for (let j = 0; j < 20; j++) {
        if(numero === valores[j])
        {
            console.log("ganaste");
        }
        else{
            console.log("perdiste");
        }
        
    }
    return valores;
}