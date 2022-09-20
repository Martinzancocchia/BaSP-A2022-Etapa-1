console.log("For")

//5-a)

console.log('5-a) ');

var carBrands = ["nissan", "toyota", "volkswagen", "ford", "chevrolet"];
for (let i = 0; i < carBrands.length; i++) {
    alert('5-a) ' + carBrands[i]);
    
  }
  console.log('');

//5-b)

console.log('5-b) ');

for (let i = 0; i < carBrands.length; i++) {
  carBrands[i] =
    carBrands[i].substring(0, 1).toUpperCase() +
    carBrands[i].substring(1, carBrands[i].length);
  alert('5-b) ' + carBrands[i]);
}
console.log('');

//5-c)

console.log('5-c) ');

var sentence = '';

for (let i = 0; i < carBrands.length; i++) { 
  sentence = sentence + carBrands[i];
}
alert('5-c) sentence: '+ sentence);
console.log('');


//5-d)

console.log('5-d) ');

var numbers = [];

for (let i = 0; i < 10; i++) { 
  numbers[i] = i;
}

console.log('numbers: ', numbers);
console.log('');
console.log('');
