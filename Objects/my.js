//Objects
//You can store anything in an object, string, bool, methods, arrays etc.
//Objects are key-value pairs

const playerObject = {
    name: "Tirion",
    class: "Paladin",
    alive: false,
    desc: ["Human", "Alliance", "Passed Away", "Knights of the Silver Hand"],
    addiction: {
        lifetime: "cigarretes",
        onceMonth: "Bubbles",
        onceYear: "Uther concerts"
    },
    //you can refer to data inside objects with this.
    action: function() {
        return alert(`Time for some ${this.addiction.lifetime}`)
    }
}
console.log(playerObject);

//to get a value you need the name of the key
console.log('---value by key---')
console.log(playerObject.name)

console.log('---with brackets---')
console.log(playerObject["alive"])

console.log('---an element of array by key and position---')
console.log(playerObject.desc[1])

//calling a function from the object
playerObject.action();

//Creating objects
console.log("----Object creating/behaviour----")
const vehicle = {
    wheels: 4,
    engine: function() {
        return "BZZZZZZZZZR!"
    }
}

//creating object with another object as constructor
console.log("---INHERITENCE/ÖRÖKLŐDÉS----")
const truck = Object.create(vehicle);
//Because we gave vehicle to trunk as a constructor, it inherited its object
truck.doors = 2;
console.log(truck);
console.log(truck.wheels);
console.log(truck.engine());

const car = Object.create(vehicle);
car.doors = 4;
car.engine = function() {return "Ratatatatata!"};
console.log(car.engine())


const tesla = Object.create(car);
tesla.engine = function() { return "........."};
console.log(tesla.engine())

//how to get the keys, values of an object
console.log('------The Keys of an Object------')
console.log(Object.keys(playerObject))
console.log('------The Values of an Object-----')
console.log(Object.values(playerObject))

//for in loop
console.log('----the for in Loop----')
const team = {
    dps: "Warrior",
    support: "Druid",
    tank: "Paladin",
    rdps: "Shaman"
}
team.offtank = "Monk";

//to delete
delete team.dps;

//to check if it holds a property:
console.log(team.hasOwnProperty("dps"))


//the loop goes through all the roles in the team obj
for (let role in team){
    console.log(`the ${role} is hold by ${team[role]}`)
}


//Destructuring objects
console.log('----Destructuring Objects----')

//we are making an usable variable from the object's key
const { rdps: myVariable} = team;
console.log(myVariable);
//the shorthand for this is
const {rdps,support,tank,offtank} = team;
console.log(support)

//this is nice to have when you want to define functions
//it works if you do not destructure the object since its a form of destructuring in itself
function fight({rdps, support}){
    return `${rdps} casts Lightning Bolt! \n ${support} heals stack LeafMend on ${tank}!`
}

console.log(fight(team));



