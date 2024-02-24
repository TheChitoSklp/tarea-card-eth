function generarTablaMultiplicar(numero, limite) {
  console.log(`Tabla de multiplicar del ${numero} hasta el ${limite}:`);
  for (let i = 1; i <= limite; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}
function esPrimo(numero) {
  if (numero <= 1) return false; 
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) return false;
  }
  return true;
}
function calcularFactorial(numero) {
  if (numero < 0) return "Error: No existe factorial de números negativos.";
  let factorial = 1;
  for (let i = 2; i <= numero; i++) {
    factorial *= i;
  }
  return factorial;
}
generarTablaMultiplicar(5, 10);
console.log(esPrimo(11));
console.log(calcularFactorial(5));
