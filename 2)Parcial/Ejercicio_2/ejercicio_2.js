function calcularPromedio(a, b, c) {
    if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
      throw new Error("Todos los parámetros deben ser números.");
    }
    return (a + b + c) / 3;
  }
  
  const determinarMayor = function (a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Todos los parámetros deben ser números.");
    }
    return a > b ? a : b;
  };
  
  const esPar = (num) => {
    if (typeof num !== "number") {
      throw new Error("El parámetro debe ser un número.");
    }
    return num % 2 === 0;
  };
  
  (function () {
    try {
      const promedio = calcularPromedio(4, 8, 6);
      console.log(`El promedio es: `+promedio);
  
      const mayor = determinarMayor(10, 20);
      console.log(`El mayor es: `+mayor);
  
      const numeroPar = esPar(10);
      console.log(`Número par: `+numeroPar);
    } catch (error) {
      console.error(error.message);
    }
  })();
  
