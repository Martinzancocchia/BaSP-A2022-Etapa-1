console.log("if-else");

//4-a)
var randomN= Math.random();
if(randomN >= 0.5)
    {
        alert("Greater than 0.5");
    }
    else
    {
        alert("Lower than 0.5");
    }
console.log("4-a) The random number is: " + randomN);

//4-b)

var age = 23;
if(age < 2)
    {
        alert("Bebe");
    }
if(age >= 2 && age <=12) 
    {
        alert("Niño");
    }
if(age >= 13 && age <=19)
    {
        alert("Adolecente");
    }
if(age >= 20 && age <= 30)
    {
        alert("Joven");
    }
if(age >= 31 && age <= 60)
    {
        alert("Adulto");
    }
if(age >= 61 && age <= 75)
    {
        alert("Adulto mayor");
    }
if(age >= 75)
    {
        alert("Anciano");
    }