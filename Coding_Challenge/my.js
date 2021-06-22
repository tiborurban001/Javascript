//1. kód ami kiadja egy random betűjét a nevemnek
let nevem = "UrbánTibor"
let randomIndex = Math.floor(Math.random() * nevem.length)
console.log(nevem.charAt(randomIndex))

//2. Switches Kő-Papír-Olló
let játékos1 = "Olló"
let játékos2 = "Papír"

//Vizsgáljuk a játékos1-értékét.
switch (játékos1) {
    case játékos2:
        console.log("Döntetlen!")
        break;

    //Ha játékos1 Papír és játékos2 Kő, akkor játékos 2 nyert
    //Minden más opciónál játékos1 nyer    
    case "Papír": 
    if (játékos2 === "Kő") {
        console.log("játékos2 nyert!!")
    }else{
        console.log("játékos1 nyert!")
    }
    break;

    case "Olló": 
    if (játékos2 === "Papír") {
        console.log("játékos1 nyert!!")
    }else{
        console.log("játékos2 nyert!!")
    }
    break;

    case "Kő": 
    if (játékos2 === "Olló") {
        console.log("játékos1 nyert!!")
    }else{
        console.log("játékos2 nyert!!")
    }
    break;

    default:
        break;
}

//3. Ternary Kő-Papír-Olló
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