console.log("Arrays");

//3-a)

var myArray = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log("3-a) The month 5 is: " + myArray[4] + " and the month 11 is: " + myArray[10]);

//3-b)

console.log("3-b) The months arranged in alphabetical order are: " + myArray.sort());

//3-c)

myArray.unshift(" Months: ");
myArray.push(" Hasta la vista!");
console.log("3-c)" + myArray);

//3-d)

myArray.shift();
myArray.pop();
console.log("3-d) " + myArray);

//3-e)

console.log("3-e Reversed: " + myArray.reverse());

//3-f)

console.log("3-f) Spaced with '-': " + myArray.join("-"));

//3-g)

var myArray2 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log("3-g) Sliced: " + myArray2.slice(4, 11).join("-"));




