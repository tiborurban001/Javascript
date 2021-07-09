//Metódus => Beépített Funkciók
//Methods => Built-in Functions

//Function létrehozása
//"Function declaration Syntax":

function myfunction() {
    return 2 + 2;
}

//We need to call our function!
console.log(myfunction())

//If we give parameters to our functions, we need to declare them when we call it.
function otherfunction(num1, num2){
    //If we decide to not declare all parameters when we call the function, we can do this:
    if (num2 == undefined) {
        return num1 + num1;
    }
    return num1 + num2;

}
console.log(otherfunction(1,))

let myEmail = prompt("please enter your email to make an username!")
//Now, we make a function that makes an Username from your email address
function makeMyUsername(email){
 let username = email.slice(0,email.indexOf("@"))
 return username;
}
console.log(makeMyUsername(myEmail))


//Anonymus functions
const  makeMyUsername1 = function(email){
    let username = email.slice(0,email.indexOf("@"))
    return username;
   }
console.log(makeMyUsername1(myEmail))


//Arrow functions
const  makeMyUsername2 = (email) => {
    let username = email.slice(0,email.indexOf("@"))
    return username;
   }
console.log(makeMyUsername2(myEmail))

//Practice Arrow

dollar = prompt("How many usd you want to convert to huf?")
const usd2huf = (dollar) => {
    let huf = dollar * 300 + `ft`;
    return huf;
}
console.log(usd2huf(dollar))


//THE BEST FUNCTION IS A CODE, THAT IS FREQUENTLY REUSABLE!


