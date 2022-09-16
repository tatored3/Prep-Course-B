// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:
    let suma =0;
    for (let i = 1; i <= 10; i++){
      suma += i;
    }
    return suma;
}

function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
  resultado = [];
  for (let i = 0; i <= array.length-1; i++){
    if (array[i] % 2 === 0)
      resultado.push(array[i]);
  }
  return resultado;
}

function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
  resultado = [];
  for (let i = 0; i <= array.length-1; i++){
    resultado.push(Math.pow(array[i],2));
  }
  return resultado;
}

function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
  resultado = 0;
  for (let i = 0; i <= array.length-1; i++){
    resultado = resultado + array[i];
  }
  return resultado;
}

function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
  return num.toString().length;
}
  
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
