function mostrar()
{
//tomo la edad  
var valor = document.getElementById("mes").value
switch (valor) {
    case "Enero":
        alert("buen comienso de año")
        
        break;
        case "Marzo":
        alert("buen comienso de clases")
        
        break;

        case"Julio":
        alert("se viene las vaciones")
        break;

        case"Diciembre":
        alert("felices fiestas")
        break;
        
        default:
            alert("MUY BUEN MES ")
            break;

}

}//FIN DE LA FUNCIÓN