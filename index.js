//Ejercicio 01
console.log("Calculadora de perritos");
let razaInput = parseInt(
  prompt(
    "¿Qué raza es tu perro? 1. Pequeña , 2. Mediana, 3. Grande. Por favor ingresa el número que corresponde a la raza:"
  )
);
let edadInput = parseInt(prompt("¿Qué edad tiene tu perrito?"));

edadPerruna(razaInput, edadInput);

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

//Ejercicio 02
let edadIdeal = parseInt(prompt("¿Hasta qué edad te gustaría vivir?"));
let edadActual = parseInt(prompt("¿Qué edad tienes actualmente"));
let bocadillo = parseInt(prompt("¿Cuántos bocadillos comes al día"));

function edadMax(edadIdeal, edadActual, bocadillo) {
  console.log(
    "Podrás comer " +
      (edadIdeal - edadActual) * (365 * bocadillo) +
      " bocadillos hasta tus " +
      edadIdeal +
      " años que te gustaría vivir"
  );
}

edadMax(edadIdeal, edadActual, bocadillo);

//Ejercicio 03
let radio = parseInt(prompt("¿Cuánto mide el radio de tu círculo?"));

function circunferencia(radio) {
  console.log("La circunferencia de tu círculo es: " + 3.14 * (radio * 2));

  function area(radio) {
    console.log("El área de tu cículo es: " + 3.14 * radio ** 2);
  }

  return area(radio);
}

circunferencia(radio);

//Ejercicio 04
let grados = parseInt(
  prompt("Ingresa los grados Celsius que quieras convertir:")
);

function celsius(gradosCelsius) {
  function farenheit(gradosCelsius) {
    return gradosCelsius * 1.8 + 32;
  }

  function kelvin(gradosFarenheit) {
    return (gradosFarenheit - 32) * (5 / 9) + 273.15;
  }

  let gradosFarenheit = farenheit(gradosCelsius);
  let gradosKelvin = kelvin(gradosFarenheit);

  console.log("Grados Celsius: " + gradosCelsius);
  console.log("Grados Farenheit: " + gradosFarenheit);
  console.log("Grados Kelvin: " + gradosKelvin);
}

celsius(grados);

//Ejercicio 05


