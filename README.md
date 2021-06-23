# **Modernising my Javascript**
## **DataTypes - Adat Típusok**
- string pl.: Jani
- number pl.: 3;  34.1
- object pl.: {nev: Jani; hazszam: 32}
- array pl.: [1,2,3,4,5]; [auto,kocsi,gépjármű]
- boolean pl.: true/false
- undefined, null

*A `typeof` operátor megtudja mutatni nekünk, hogy a változónk(variable) milyen adat típusú.*  
  
`typeof "Jani";` Output: `string`

##### **Variable létrehozása**
`let myVariable;`

### **Javascript HTML-hez kötése**
*Kiadjuk a headben a csatolást*  
`<script src="my.js"></script>`  

`alert('Hello World')` *Az alert() metódus egy felugró ablakot hív nekünk elő;*

## **String**  
*(String mappa)*

**String Metódusok**  

*Egy string változó elemeinek száma*  
`myVar.length`

*Egy string eleme az adott indexen*  
`myVar.charAt(0)`

*Azonos karakter/karakterlánc első előfordulása*  
`myVar.indexOf("mi")`

*Azonos karakter/karakterlánc utolsó előfordulása*  
`myVar.lastIndexOf("i")`

*Levágja az adott indexek előtti/mögötti részt és csak a közte lévő karaktereket jeleníti meg*  
`myVar.slice(6,12)` *- ha nincs megadva a végindex akkor a megadott indextől vágja le a végéig*

*toUpperCase/toLowerCase végig nagybetű-kisbetűre formázza át*  
`myVar.toUpperCase()`  
`myVar.toLowerCase()`

*Az includes() metódus megmutatja nekünk hogy a paraméterben megadott karakter/lánc megtalálható-e a stringben*  
`myVar.includes("hosszú")` *-boolean-t ad vissza*

*A split() metódus kettéválasztja a stringet egy array-be, a megadott paraméternek megfelelő karakternél*  
`myVar.split("o")`  
`myVar.split("")` *így pedig minden karaktert *különszed*  
  
  
## **Number**  
*(Number mappa)*  

*Átalakíthatunk string-ben megadott számokat number típusú adattá:*  
`const myStringNumber = 10`  
`console.log(Number(myStringNumber))`
*-A Number() metódussal*

**Number metódusai**

*Eldönti hogy a metódusban megadott paraméter integer-e*  
`Number.isInteger(myNumber)`

*Float-á alakítja a paraméterben megadott(argument) adatot*  
`Number.parseFloat(myNumber)`  

*Szabályozza mennyi szám jelenik meg a tizedes pont után, de stringben adja vissza*  
`myFloat.toFixed(2)`

*A parseInt() metódus integer-t csinál a paraméterből*  
`Number.parseInt(myFloat)`

*Stringgé alakít*  
`myFloat.toString()`

## **Math**  
*(Maths mappa)*  

*Pi értéke*  
`Math.Pi`

*Integerré alakít(leveszi a tizedes utáni számokat)*  
`Math.trunc(Math.Pi)`

*Integerre kerekít*  
`Math.round()`

*A magasabb integerre kerekít pl.: 3.121 -> 4*  
`Math.ceil(3.121)`

*A lenti integerre kerekít pl.: 3.121 -> 3*  
`Math.floor(3.121)`

*Az első számot teszi a második szám négyzetére*  
`Math.pow(5,2)`

*Megadja a legkissebb számot a megadott számok közül*
`Math.min(3,2,1,5)`

*Megadja a legnagyobb számot a megadott számok közül*
`Math.max(3,2,1,5)`

*Ad egy random számot 0-tól 1-ig*  
`Math.random()`  
*1-től 10-ig*  
`Math.floor(Math.random() * 10) + 1`

**Random számok generálásánál mindig a floor metódust használjuk mert a ceil metódusnak van egy csekély esélye, hogy 0-t adjon vissza.**

# **Conditionals**
*(If_Switch_Ternary mappában)*
## **if Statements**

*Syntax:*  
`if(condition){`  
*Ha a condition true, akkor lefut a kód, ha false, akkor átugorja az if-et.*  
`}`  
  
pl.:  
`if (randomNumber > 50) {`  
`console.log("A szám nagyobb mint 50")`      
`}else if(randomNumber < 50){`  
`    console.log("A szám kisebb mint 50")`  
`}`  
*Ha a randomNumber nagyobb mint 50, akkor abban a brackets-ben lévő console.logot futtatja le, ha kisebb, akkor pedig azt.*  

## **switch Statements**  

*Syntax:*  

*Megadunk egy kulcsértéket vagy kifejezést a switch argumentben majd létrehozunk case-eket amik vizsgálják igaz-e, ha egyezést talál lefut a kód, ha nem átugrik a következőre, ha semelyik nem egyezik, akkor a default fog lefutni*  
` switch (2) { `
`case 1: `  
 `console.log("első eset")`  
  `break;`
  
 `case 2:`  
  `console.log("második eset, 2es érték")`
   ` break;`
  
 `case 3:`  
  `console.log("harmadik eset")`  
   ` break;`  
  
 `default:`  
  `console.log("Akkor fut le ha egyik case sem`    `felel meg az argumentben megadott key-nek")`  
   ` break; `  
`} `

**A mappában lévő my.js fájlban egy kő-papír-olló játék található, ami körülfoglalja a switch működését**


## **Ternary**  

*Syntax:*  
*A Ternary kifejezés igazából egy shorthand az if-es szerkezethez*  
**Condition ? ifTrue : ifFalse**  

**Láncolás**  
`let pont = 30`  
`let myJegy = pont > 90 ? "5"`  
`: pont > 70 ? "4"`  
`: pont > 50 ? "3"`  
`: pont > 30 ? "2" : "1"`  

*Ha a pont nagyobb mint 90, akkor 5-öst kapok vissza, ha nem(false) akkor tovább megy, és ellenőrzi hogy 70-nél nagyobb-e..stb..végül pedig ha 30nál nem nagyobb, akkor csakis kisébb lehet, tehát (false) és ezért 1-est kapunk vissza.*

**Ismét, egy Kő-Papír-Olló gyakorló feladat a my.js-fájlban**

  
# **User Input**

**prompt()**  
*A prompt egy felugró ablak felület amiben a felhasználótól kérhetünk be adatot*  
`let myBoolean = confirm("Ok -> True \nCancel -> False")`  

**confirm()**  
*A confirm egy felugró ablak felület, amivel a felhasználó true/false értéket tud visszaadni ha az ok/cancel gombra kattint*  
`let myName = prompt("Kérlek add meg a neved")`

**A ?? kifejezéssel tudjuk ellenőrizni hogy az érték null-e pl:. `name ?? "Ha nem null : Ha igen`**

# **An Easy Game**
*A Coding_Challenge mappában lévő An_Easy_Game mappában*  
*Egy kő papír olló játék az eddigi anyag felhasználásával.*
- Megkérdezzük a felhasználót akar e játszani
- Ha igen, akkor megkell adnia, hogy rock, paper, vagy scissors-t választ
- Ellenőrizzük megadott e valamit a felhasználó
- Levesszük a szóközöket és kisbetűre alakítjuk

- Példányosítjuk a választását, és a játékost
- Létrehozzuk a gép random választás generátorát
- létrehozzuk a küzdelem menetét

- Ellenőrizzük az eseteket, amikor nem igaz/null-t kapunk vissza

- Kiírjuk a képernyőre az eredményt
# **Fantasy Battle**
*Egy gyors gyakorló mini feladat*
- Megkérdezzük a felhasználót részt akar venni-e a harcban.
- Ha igen megkérdezzük milyen fegyvert szeretne használni.
- Kiírjuk mekkora sebzést okozott a fegyverrel, vagy ha nem jó fegyvert használt, hogy nem találja.
- Megkérdezzük újra akarja-e kezdeni.

# **Loops**

## **while**  
*Megadunk egy állítást az argumentben és amég az nem igaz a kódblokkban lévő kód lefog futni*  
`while (myNumber < 15){`  
`myNumber++;`  
`  console.log(myNumber);`  
`}`
## **while do**  
*Ugyanaz szinte mint a while csak itt a do-ban lévó kódblokk minimum 1x lefut akkor is ha már igaz a while*  
`do {`  
 ` myNumber++;`  
`  console.log(``${myNumber} ez a do while``);`  
`} while (myNumber < 15);`

## **for**  
*3 elemből áll, 1.változó, 2.állítás 3.művelet
addig adunk hozzá az index-hez amég 10-nél kisebb vagy egyenlő*  
*A leggyakrabban használt loop*
*akár array-eken, stringeken, indexeken is végigmegy*    
`for (let index = 0; index <= 10; index++) {`  
 ``console.log(`for loop ${index}`);``  
`}`
















  