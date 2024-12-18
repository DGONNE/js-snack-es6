// SNACK 1
/* Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore. */

// Array bici
const bikes = [
    {
        brandName: "Grazziella",
        weight: 1000
    },

    {
      brandName: "Pinarello",
      weight: 3000
    },

    {
        brandName: "Atala",
        weight: 600
    }

];

// Ciclo array
let bike = bikes[0]

for(let i = 1; i < bikes.length; i++) {
    if(bikes[i].weight < bike.weight ) {
        bike = bikes[i];
    }
}
console.log(bike);