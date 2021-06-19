# **Modernising my Javascript**
### **DataTypes - Adat Típusok**
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

*+------------------------------------------------------------------------------+*

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
`myVar.split("")` *így pedig minden karaktert különszed*

*+------------------------------------------------------------------------------+*
## **Number**  
*(Number mappa)*

  