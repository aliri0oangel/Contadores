

/* clase 05/08/2026 */

//Funcion sin parametros

alert(ppt());

/*
  Detalles curiosos de las funciones
*/

let ejemplo3 = ppt; // Asignando la funcion a una variable
ejemplo3(); // Llamando a la funcion desde la variable

/*
  La linea anterior es muy diferente a escribir
  let ejemplo3 = ppt(); 
  ya que en este caso la funcion se ejecuta y se le asigna el valor de retorno a la variable, 
  mientras que en el primer caso se le asigna la funcion en si.
*/

console.log(ejemplo3); // Muestra la funcion en si

/*
  Alcance de las variables (Scope)
*/
let variableLocal = "Soy una variable local"; // Variable global
var variableGlobal = "Soy una variable global"; // Variable global
const constante = "Soy una constante"; // Variable global

if (true) {
  let ejemploLet = "Soy una variable local dentro de un bloque"; // Variable local
  var ejemploVar = "Soy una variable global dentro de un bloque"; // Variable global
}

if (true) {
  let ejemploLet = "Soy una variable local dentro de un bloque"; // Variable local
  var ejemploVar = "Soy una variable global dentro de un bloque"; // da error porque ya fue declarada en el bloque anterior
  const PI = 3.1416; // Variable local
}

console.log(ejemploLet); // Error: ejemploLet is not defined
console.log(ejemploVar); // Muestra Soy una variable global dentro de un bloque
console.log(PI); // Error: PI is not defined

if (true) {
  const K = 4;
  if (true) {
    var color = "Rojo";
    if (true) {
      let hobby = "nadar";
      console.log(K); //4
    }
  } else {
    console.log(hobby); // undefined
  }
  console.log(K); // 4
}
console.log(color); // "Rojo"

/*
  Recursion
*/

function contador(numero, limite) {
  if (numero < limite) {
    console.log(numero);
    numero++;
    contador(numero, limite);
  }
}

contador(0, 10);
