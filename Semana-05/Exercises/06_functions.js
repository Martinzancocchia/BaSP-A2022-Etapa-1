console.log("Functions");

//6-a)

/* a. Crear una función suma que reciba dos valores numéricos y retorne el resultado.
Ejecutar la función y guardar el resultado en una variable,
mostrando el valor de dicha variable en la consola del navegador. */

console.log('6-a)');

function addNumbers(num1, num2) {
  return num1 + num2;
}

var result = addNumbers(10, 17);
console.log('addNumbers(10, 17) = ', result);
console.log('');

//6-b)

/* b. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número,
mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado. */

console.log('6-b) ');

function addNumbersValidated(num1, num2) {
  if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
    alert('6-b) One of the parameters is not a number.')
    return NaN;
  }
  return num1 + num2;
}

console.log('(2,2) returns ');
console.log(addNumbersValidated(2, 2));
console.log('(100,100) returns ');
console.log(addNumbersValidated(100, 100));
console.log('("100",100) returns ');
console.log(addNumbersValidated('100', 100));
console.log('("a",100) returns ');
console.log(addNumbersValidated('a', 100));
console.log('');

//6-c)

/* c. Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero. */

console.log('6-c) ');

function validateInteger(int) {
  return Number.isInteger(int);
}
console.log('validateInteger(1) returns ');
console.log(validateInteger(1));
console.log('validateInteger("a") returns ');
console.log(validateInteger("a"));
console.log('');

//6-d)

/* d. A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros.
En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado). */

console.log('6-d) ');

function addIntegers(num1, num2) {
  if (!validateInteger(num1)) {
    alert('6-d) there is an error with first parameter.');
  } else if (!validateInteger(num2)) {
    alert('6-d) there is an error with second parameter.');    
  }
  return Math.trunc(num1) + Math.trunc(num2);
}

console.log('addIntegers(1, 2) returns ');
console.log(addIntegers(1,2));
console.log('addIntegers(5.232323, 4) returns ');
console.log(addIntegers(5.232323, 4));
console.log('');

//6-e)

/* e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma
probando que todo siga funcionando igual. */

console.log('6-e) ');

function validateIntegers(num1, num2) {
  if (!validateInteger(num1)) {
    alert('6-e) there is an error with first parameter.');
    return false;
  } else if (!validateInteger(num2)) {
    alert('6-e) there is an error with second parameter.');   
    return false;
  }
  return true;
}

function sumaValidated(num1, num2) {
  if (!validateIntegers(num1, num2)) {
    return Math.trunc(num1) + Math.trunc(num2);
  } else {
    return num1 + num2;
  } 
}

console.log('(2,2) returns ');
console.log(sumaValidated(2, 2));
console.log('(100.1231,100) returns ');
console.log(sumaValidated(100.1231, 100));
console.log('("100",100) returns ');
console.log(sumaValidated('100', 100));
console.log('(100,"a") returns ');
console.log(sumaValidated(100,"a"));
console.log('');
console.log('');
