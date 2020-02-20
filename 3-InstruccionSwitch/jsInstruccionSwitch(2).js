function mostrar()
{
//tomo la edad  

var valor = document.getElementById("mes").value;
switch (valor) {
    case "Enero":
    case "Febrero":
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Junio":
        alert("Falta para el invierno")
        
    break;
    case "Julio":
    case "Agosto":
        alert("Abrigate que hace frio")
        
        break;
        
    default:
            alert("ya pasamos el frio ahora el calor")
            break;


}
}//FIN DE LA FUNCIÓN