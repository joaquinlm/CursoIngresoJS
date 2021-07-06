/*Lubo Millán, Joaquín | División H
Ejercicio E/S 10
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe = document.getElementById('txtIdImporte').value;
  let descuento = parseInt(importe) / 4;
  let total = parseInt(importe) - parseInt(descuento);
  document.getElementById('txtIdResultado').value ='El precio con descuento es: ' + total;
}