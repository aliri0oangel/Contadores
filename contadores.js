/* 1) Crea una funcion que cuente todos los numeros pares entre un numero de inicio y un limite */

var num_inicio = parseInt(prompt("Digite el numero de inicio a contar"));
var num_limite = parseInt(prompt("Digite el numero de limite a contar"));

function contador(num_inicio, num_limite, par = 0) {
  if(isNaN(num_inicio) || isNaN(num_limite)){
      alert("ErroR: uno de los valores digitados es inválido! Por favor solo ingrese números");
  }else{
    if (num_inicio <= num_limite) {
    if(num_inicio % 2 === 0){
      console.log(num_inicio);
      par++;
    }
    num_inicio++;
    
    contador(num_inicio, num_limite, par);
  }else {
    console.log("Hay "+ par +" numeros pares");
  }
  }
}

contador(num_inicio, num_limite);

/*   2) Crea una funcion que cuente todos los numeros de dos en dos en reversa en una serie de numeros, ejemplo.
Ej: Desde el 100 a 0... 100, 98, 96, 94, 92, 90.... */

var inicio_decremento = parseInt(prompt("Por favor digite un numero desde el cual se empezará a decrementar"));
var limite_decremento = parseInt(prompt("Ahora digite un número limite hasta donde llegará el decremento"));

function contador_invertido(inicio_decremento, limite_decremento){
  if(isNaN(inicio_decremento) || isNaN(limite_decremento)){
    alert("ErroR: uno de los valores digitados es inválido! Por favor solo ingrese números");
  }else{
    if(limite_decremento <= inicio_decremento){
      console.log(inicio_decremento);
      inicio_decremento -= 2;
      contador_invertido(inicio_decremento, limite_decremento);
    }
  }
}
contador_invertido(inicio_decremento, limite_decremento);

/* 3) Crea una funcion que recree la sucesion de Fibonacci hasta el numero deseado mas cercano. */

function fibonacci(limite, inicio = 0, segundo_estado = 1) {
  if (limite <= 0) 
    return;
  console.log(inicio);
  limite--;
  fibonacci(limite, segundo_estado, inicio + segundo_estado);
}

fibonacci(5);
