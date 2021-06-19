
const myConstNumber = 22;

const myFloat = 19.5321;

const myStringNumber = "10";

let myNumber = 233;

//Átalakítjuk a stringet számmá
console.log(Number(myStringNumber) + 3);


//Eldönti hogy a szám integer-e
console.log(Number.isInteger(myNumber));

//Mennyi szám a tizedes után
console.log(myFloat.toFixed(2));


//Integerré alakít, stringet is
console.log(Number.parseInt(myFloat));

//stringgé alakít
console.log(myFloat.toString());
