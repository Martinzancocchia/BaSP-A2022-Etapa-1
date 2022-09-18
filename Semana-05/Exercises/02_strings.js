console.log("Strings")

//2-a)

var myStringA = "This text will be displayed in uppercase.";
console.log(`2-a) /Text: '${myStringA}' /Uppercase: ${myStringA.toUpperCase()}`);

//2-b)

var myStringB = "This is a example string.";
console.log(`2-b) The first 5 characters of '${myStringB}' are: ${myStringB.slice(0, 5)}`);

//2-c)

var myStringC= "This is a example string.";
console.log(`2-C) The last 3 characters of '${myStringC}' are: ${myStringB.slice(-3)}`);

//2-d)

var myStringD = "thIS Is A EXAMple sTRinG.";
var myStringDFirstChar = myStringD.substring(0,1).toUpperCase();
var myStringDRemain = myStringD.substring(1).toLowerCase();
var wholeTextD = myStringDFirstChar + myStringDRemain;
console.log(`The correct format of '${myStringD}' is: ${wholeTextD}`);

//2-e)

var myStringE = "This is a example string.";
var myStringEBlank = myStringE.indexOf(" ");
console.log(`2-e) The position of the first blank space on '${myStringE}' is: ${myStringEBlank}`);

//2-f)

var myStringF = "suPERCalifRAStIliGIco oTORRiNOnarINgOloGO";
var exercise2FAnswer = myStringF.substring(0,1).toUpperCase() + myStringF.substring(1, myStringF.indexOf(' ')).toLowerCase()
    + myStringF.substring(myStringF.indexOf(' ') + 1, (myStringF.indexOf(' ') + 2)).toUpperCase() + myStringF.substring(myStringF.indexOf(' ') + 2).toLowerCase();
console.log(exercise2FAnswer);


