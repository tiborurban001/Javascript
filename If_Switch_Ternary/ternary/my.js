
//Létrehozunk egy változót
let sword = "Frostmourne"
//Megkérdezzük van e értéke
let response = sword ? "Igen ebben a változóban van egy kard" : "Ebben a változóban nincs semmi";
console.log(response)

let aNumber = 3
let numberResponse = aNumber = 3 ? "Az értéke 3" : "Nem 3 az értéke";
console.log(numberResponse)

//Láncolva is működik
let coffee = "Latte"
let isCoffeeOut = false

let isThereCoffeeLeft = 
//Ha isCoffeeOut true
isCoffeeOut ? "Sorry, we're out" : coffee
//Ha isCoffeeOut false
? `We got some ${coffee} left` : "Nope."

console.log(isThereCoffeeLeft)



//"Gradient-mérleg példa"
//Dolgozat jegyek
let pont = 30
let myJegy = pont > 90 ? "5" 
: pont > 70 ? "4" 
: pont > 50 ? "3"
: pont > 30 ? "2" : "1" 

console.log(`A jegyem: ${myJegy}`)


//Gyakorló Kő papír ólló
let playerOne = "Kő"
let playerTwo = "Papír"

let result = 
//Döntetlen
playerOne = playerTwo === playerOne ? "Döntetlen" 
//Kő-Olló
: playerOne === "Kő" && playerTwo ==="Olló" ? "Player 1 nyert"
//Olló-Kő
: playerOne === "Olló" && playerTwo === "Kő" ? "Player 2 nyert"
//Papír-Kő
: playerOne === "Papír" && playerTwo === "Kő" ? "Player 1 nyert"
//Kő-Papír
: playerOne === "Kő" && playerTwo === "Papír" ? "Player 2 nyert"
//Papír-Olló
: playerOne === "Papír" && playerTwo === "Olló" ? "Player 2 nyert"
//Olló-Papír
: playerOne === "Olló" && playerTwo === "Papír" ? "Player 1 nyert" : "Nem volt szabályos"

console.log(result)