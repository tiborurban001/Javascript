let myVar = "valamihosszúString"

//A változó hosszúsága
console.log(myVar.length)

//Az adott indexú elem
console.log(myVar.charAt(0))

//Megmondja hol kezdődik az első olyan karakterlánc mint ez
console.log(myVar.indexOf("mi"))

console.log(myVar.lastIndexOf("i"))

//a slice metódus felvágja a megadott indextől a megadott indexig a stringet
console.log(myVar.slice(6,12))

console.log(myVar.toUpperCase())
console.log(myVar.toLowerCase())

//Ellenőrzi tartalmazza e
console.log(myVar.includes("hosszú"))

//Kettészedi
console.log(myVar.split("o"))