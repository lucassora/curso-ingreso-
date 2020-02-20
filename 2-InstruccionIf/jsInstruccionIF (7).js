function mostrar()
{
//tomo la edad  

var edad
var estadocivil
edad = parseInt(document.getElementById("edad").value ) 
estadocivil= document.getElementById("estadoCivil").value
if (edad<18&&estadocivil!="Soltero" )

{
    alert ("eres muy pequeño para NO estar soltero")
}

}//FIN DE LA FUNCIÓN