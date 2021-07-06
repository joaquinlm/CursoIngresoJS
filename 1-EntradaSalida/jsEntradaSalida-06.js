/*Lubo Millán, Joaquin | División H
Ejercicio E/S 6
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar() {
  let num1 = document.getElementById('txtIdNumeroUno').value;
  let num2 = document.getElementById('txtIdNumeroDos').value;
  let suma = parseInt(num1) + parseInt(num2);
  alert(suma);
}
