//Ejercicio 01
console.log("Calculadora de perritos");
let razaInput = parseInt(prompt(
  "¿Qué raza es tu perro? 1. Pequeña , 2. Mediana, 3. Grande. Por favor ingresa el número que corresponde a la raza:"
));
let edadInput = parseInt(prompt("¿Qué edad tiene tu perrito?"));

edadPerruna(razaInput,edadInput);

function edadPerruna(raza, edad) {
  if ((raza === 1 || raza === 2 || raza === 3) && edad <= 2) {
    console.log(edad * 12);
  } else if ((raza === 1 || raza === 2 || raza === 3) && edad <= 5) {
    console.log(edad * 5 + 24);
  } else if (raza === 1 && edad >= 6) {
    console.log(edad * 4 + 39);
  } else if (raza === 2 && edad >= 6) {
    console.log(edad * 6 + 39);
  } else if (raza === 3 && edad >= 6) {
    console.log(edad * 8 + 39);
  } else {
    console.log("Datos incorrectos");
  }
}
