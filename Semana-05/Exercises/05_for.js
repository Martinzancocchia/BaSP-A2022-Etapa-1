console.log("For")

//5-a)

var carBrands = ["nissan", "toyota", "volkswagen", "ford", "chevrolet"];
for(i = 0; i < 5; i++)
    {
        alert(carBrands[i]);
    }
console.log("5-a) Car brands: " + carBrands);

//5-b)

var carBrandsB = [];
for (i=0; i<5; i++)
    {
        if(carBrands[i].substring(0,1) != carBrands[i].substring(0,1).toUpperCase)
            {
                carBrandsB[i] = carBrands[i].substring(0,1).toUpperCase() + carBrands[i].substring(1).toLowerCase();
                alert(carBrandsB[i]);
            }
        else
            {
            carBrands[i] = carBrandsB[i];
            }
    }
console.log("5-b) Car brands: " + carBrandsB);