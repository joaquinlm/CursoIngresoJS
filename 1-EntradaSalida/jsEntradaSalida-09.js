/*Lubo Millán, Joaquin | División H
Ejercicio E/S 9
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento() {
  let sueldo = document.getElementById('txtIdSueldo').value;
  let aumento = sueldo / 10;
  let total = parseInt(sueldo) + parseInt(aumento);
  document.getElementById('txtIdResultado').value =
    'El sueldo más el aumento es: ' + total;
}