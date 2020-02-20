function mostrar()
{
//tomo la edad  
var mesDelaño = document.getElementById('mes').value;

//alert (mesDelAño);

switch (mesDelaño) {
	case"Febrero":
    alert("este mes no tiene mas de 29 dias")
    break;
        
    default:
    alert("este mes tiene 30 dia o mas")
    break;
}
}//FIN DE LA FUNCIÓN