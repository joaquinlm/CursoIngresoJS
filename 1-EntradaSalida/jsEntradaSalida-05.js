/*Lubo Millán, Joaquin | División H
Ejercicio E/S 5
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombre = document.getElementById('txtIdNombre').value;
	let edad = document.getElementById('txtIdEdad').value;
	alert("Su nombre es: " + nombre + " y su edad es: " + edad);
}

