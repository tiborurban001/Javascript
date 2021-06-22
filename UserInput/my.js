//Confirm

//Amikor a confirm popup-on a felhasználó Ok-ra klikkel true-t kapunk vissza/false-t ha Cancelre
let myBoolean = confirm("Ok -> True \nCancel -> False")
console.log(`A vissza adott bool érték: ${myBoolean}`)

//Prompt
//A user közvetlen megadhat adatot a promptban
let myName = prompt("Kérlek add meg a neved")
if (myName) {
    let myNameDisplay = alert(myName)
}else{
    let myNameDisplay = alert("Nem adtad meg a neved")
}
//a dupla ? -> ?? ellenőrzi hogy egy változó üres-e (null)


