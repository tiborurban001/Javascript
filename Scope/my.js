//Scope, var,let,const

//var
//Javascript used var for declaring variables since the beginning right until 2015.
//Now its outdated, and a setback because how it behaves.
//Pretty much only in legacy codes.
var x = 2;
var x = 3;
console.log(x);
//var doesn't throw an error if you redefine the same variable.


//let
//it is the prefferred variable creation tool IF you create a variable that has multiple re-assignments.
//example: you can store counter in let, because its always goes 1-2-3-4...
let l = 1;
l = 2;
console.log(l);

//const
//const on the other hand is for data thats not going to change, it is constant.
//example: a function, family name etc.
const k = "Tibi";
//If we would to reassing this, this would throw an error, cause you can't change const's value after declaring it.
// k = "Más"
console.log(k);


//Global Scope
//a global scope is when you create a varible and its available everywhere.
var a = 1; //-global
let b = 2; //-global
const c = 3; //-global

//Local Scope
//opposite of global scope, only available locally.
{
    //A variable created in the curly brackets is a local scope variable.
    let a = 1;
    console.log(`${a} this is a local scope var. inside curly brackets.`)
}

function localScope(){
    const z = 8;
    console.log(`${z} this is a local scope variable inside a function`)
}

//local
function funcblock(){
    const z = 4;
    console.log(`${z} this is a local scope variable inside a function`)

    {
        //A variable created in the curly brackets is a local scope variable.
        let a = 1;
        console.log(`${a} this is a block scope inside a function`)
    }

}
localScope()
funcblock()

console.log(`Global scope variables are \n ${a} ${b} ${c}`);