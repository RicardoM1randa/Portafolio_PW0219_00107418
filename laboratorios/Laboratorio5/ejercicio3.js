var arr = [1,2,3,1];
var numero = 1;
var funcion = (a,n) =>{
    let array = [];
    let ocurrencias  = 0;
    
    a.forEach(element => {
        if(element == n){
            ocurrencias++;
        }
    });
    console.log(ocurrencias);
}