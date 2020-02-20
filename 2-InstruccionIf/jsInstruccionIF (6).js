function mostrar()
{
//tomo la edad  

var edad
    edad = parseInt(document.getElementById("edad").value ) 
    if (edad>12&&edad<18)
    alert ("eres un adolecente")
    else if (edad>17)
    alert("eres un adulto")
    else 
    alert ("eres un niño ")

}//FIN DE LA FUNCIÓN