function mostrar()
{
	
	var numero = prompt("ingrese un número entre 0 y 10.");
	numero=parseInt(numero);
	while(numero<0||numero>10)
	{
	numero = prompt("error, vuelva a ingresar un numero");
	
	}
	alert("bienvenido");
}//FIN DE LA FUNCIÓN