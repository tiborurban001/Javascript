
switch (Math.floor(Math.random() * 5 + 1)) {
    case 1:
        console.log("első eset")
    break;

    case 2:
        console.log("második eset, 2es érték")
    break;

    case 3:
        console.log("harmadik eset")
    break;

    default:
    console.log("Akkor fut le ha egyik case sem felel meg az argumentben megadott key-nek")
    break;
}


//Kő Papír Olló

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