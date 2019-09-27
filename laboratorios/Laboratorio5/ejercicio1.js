var arr = [1,"hola",3,true,[1,2,3]];

var funcion = x =>{
    let typearr = [];
    let counts = {};

    x.forEach(element => {
        typearr.push(typeof element);
    });

    typearr.forEach(element =>{
        counts[element] = (counts[element] || 0)+1;
    })
    console.log(typearr);
    console.log(counts);
}