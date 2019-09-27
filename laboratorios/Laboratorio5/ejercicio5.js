var pal = "momia";
var funcion = x =>{
    var array = x.split("");
    var reversed = x.split("");

    if(array == reversed.reverse()){
        console.log("Palindrome")
    }
    else{
        console.log(" NO Palindrome")
    }
}