function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
	
var valor = document.getElementById("mes").value;
switch (valor) {
    case "Enero":
    case "Marzo":
    case "Mayo":
    case "Junio":
     case"Agosto":
     case"Octubre":
     case"Diciembre":   
        alert("este mes tiene 31 dia")
        
    break;
    case "febrero":
        alert("este mes tiene 28 dias")
        
        break;
        
    default:
            alert("este mes tiene 30 dias")
            break;


}


}//FIN DE LA FUNCIÓN