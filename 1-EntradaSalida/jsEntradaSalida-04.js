/* Lubo Millán, Joaquín | División H
Ejercicio E/S 4
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar() {
  let nombre = prompt('Cuál es tu nombre?');
  let cajaDeTexto = document.getElementById('txtIdNombre');
  cajaDeTexto.value = 'Tu nombre es: ' + nombre;
}