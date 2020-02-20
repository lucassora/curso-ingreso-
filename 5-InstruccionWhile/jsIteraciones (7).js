function mostrar()
{
	var numero =0
	var cantidaddenumero =0
	var promedio;
	var continuar="S";
	while(continuar =="S")
	{ 
	  numero+= parseInt (prompt("ingrese un numero "))
		
	  cantidaddenumero+=1

	  continuar =prompt("desea continuar?? S / N" );

	}

	promedio = numero/cantidaddenumero
	alert ("la suma acumulada es "+ numero + " y el promedio es "+ promedio )
}//FIN DE LA FUNCIÓN  //      ToLowerCase()    ToUpperCase()