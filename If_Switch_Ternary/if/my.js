let randomNumber = Math.floor(Math.random() * 100) + 1
console.log(randomNumber)

if (randomNumber > 50) {
    console.log("A szám nagyobb mint 50")    
}else if(randomNumber < 50){
    console.log("A szám kisebb mint 50")
}

//The Fantasy Blacksmith
let ForeignAdventurer = true;
let weapon = "Sword of Coding";
let speech;

if (ForeignAdventurer) {
    speech = "I don't make weapons for those who I don't know"
}else if (weapon) {
    speech = `Here is your ${weapon}`
}else{
    speech = `your ${weapon} is not ready yet.`
}
console.log(speech);