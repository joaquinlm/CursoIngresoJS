/*Lubo Millán, Joaquín | División H
Ejercicio E/S 7
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/

function sumar() {
	let num1 = document.getElementById('txtIdNumeroUno').value;
	let num2 = document.getElementById('txtIdNumeroDos').value;
  let suma = parseInt(num1) + parseInt(num2);
  alert('La suma es: ' + suma);
}

function restar() {
	let num1 = document.getElementById('txtIdNumeroUno').value;
	let num2 = document.getElementById('txtIdNumeroDos').value;
  let resta = parseInt(num1) - parseInt(num2);
  alert('La resta es: ' + resta);
}

function multiplicar() {
	let num1 = document.getElementById('txtIdNumeroUno').value;
	let num2 = document.getElementById('txtIdNumeroDos').value;
  let multiplicacion = parseInt(num1) * parseInt(num2);
  alert('La multiplicación es: ' + multiplicacion);
}

function dividir() {
	let num1 = document.getElementById('txtIdNumeroUno').value;
	let num2 = document.getElementById('txtIdNumeroDos').value;
  let multiplicacion = parseInt(num1) / parseInt(num2);
  alert('La división es: ' + multiplicacion);
}