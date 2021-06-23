let myNumber = 5;

//While

//Amég az állítás nem igaz addig lefut a függvény újra és újra
while (myNumber < 15) {
  myNumber++;
  console.log(myNumber);
}
//SOHA NE HOZZ LÉTRE EGY VÉGTELEN LOOPOT

//do while
// a do while és a while közötti különbség abban rejlik
// hogy a do-ban lévő kódblokkot minimum egyszer biztos lefogja futtatni
// akkor is ha az állítás már igaz
do {
  myNumber++;
  console.log(`${myNumber} ez a do while`);
} while (myNumber < 15);

//For loop
// 3 elemből áll, 1.változó, 2.állítás 3.művelet
// addig adunk hozzá az index-hez amég 10-nél kisebb vagy egyenlő
for (let index = 0; index <= 10; index++) {
  console.log(`for loop ${index}`);
}

let myName = "UrbánTibor";
for (let index = 0; index < myName.length; index++) {
  console.log(myName.charAt(index));
}

let counter = 1;
let howMany = prompt("Meddig számoljon?");
while (true) {
  console.log(counter);
  if (counter === 3) {
      counter += 10;
//A continue előlről kezdi a loopot, nem foglalkozva az utánna lévő kóddal
      continue;
  }
  if (counter === Number(howMany)) break;
  counter++;
}


