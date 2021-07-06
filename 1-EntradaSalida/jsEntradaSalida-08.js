/*Lubo Millán, Joaquín | División H
Ejercicio E/S 8
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let num1 = document.getElementById('txtIdNumeroDividendo').value;
	let num2 = document.getElementById('txtIdNumeroDivisor').value;
  let resto = parseInt(num1) % parseInt(num2);
  alert('La resto es: ' + resto);
}
