//Arrays

const myArray = [];

//assigning elements to indexes of an array
myArray[0] = "Tibi";
myArray[1] = 18;
myArray[2] = false;
myArray[3] = 12;
myArray[4] = "Hellscream";
myArray[5] = "Vol'jin";


//referring to an array
console.log(myArray);

//the number of elements in an Array
console.log(myArray.length)

//the last element of an array
console.log(myArray[myArray.length - 1])

//adding to an array, (always to the back)
myArray.push("Summer");

//Removing from an array
const lastItem = myArray.pop();
console.log(lastItem);

//adding to the beginning of the array
myArray.unshift("front");
//removing from the beginning
const removedItem = myArray.shift();
console.log(removedItem);
console.log(myArray);


//removing an element in a specific index from the array
//delete doesnt remove the position, it just empties it, so the length is still the same
delete myArray[0];
console.log(myArray);


//for proper removing of an element
//we use the splice method
myArray.splice(0,1)
console.log(myArray);

//it can also return the deleted elements
const splicedElements = myArray.splice(0,1);
console.log(splicedElements)

//you can also use it to replace them
myArray.splice(0,1,"Sylvanas");
console.log(myArray);

//or to insert(if you give 0 for deleteCount parameter.)
myArray.splice(2,0,"Thrall");
console.log(myArray);

console.log('------------------New Array-------------------------')
const newArray = ['A', 'B', 1,2,'Gamon',false,'Tibi']
console.log(newArray);

//slice cuts off the whole array from the the given position and holds it 
const slicedArray = newArray.slice(2);
console.log(slicedArray)

//you can slice from x to y too.
const slicedtoArray = newArray.slice(2,5);
console.log(slicedtoArray)


//to reverse an array
newArray.reverse();
console.log(newArray);


//join binds the elements together and converts it to a string
const createdString = newArray.join();
console.log(createdString);

//to convert it back to an array(of strings)
const joinedArray = createdString.split(",");
console.log(joinedArray);


//Joining 2 arrays together

const array1 = ["Warrior", "Mage", "Hunter"];
const array2 = ["Druid", "Priest", "Shaman"];

//the concat combines 2 or more arrays into 1
const theClasses = array1.concat(array2);
console.log(theClasses);

//OR
console.log(...theClasses)

//Spread operator. (It makes elements of array to become individual elements)
const spreadOpArray = [...array1,...array2]
console.log(spreadOpArray);

console.log('-------------------------Nested Array-------------------')


//Nested arrays
const nestedArrays = [theClasses,newArray]
console.log(nestedArrays)



//Accessing values from SINGLE DIMENSIONAL and MULTIPLE DIMENSIONAL ARRAYS
console.log('-----------------------------DIMENSIONS---------------------')
const equipmentDPS = ["Sword", "Bow", "Gun", "Axe", "Hammer"]
const equipmentSupport = ["Staff", "Rod", "Wand", "Mace", "Shield"]

const armorDPS = ["Plate", "Mail"]
const armorSupport = ["Leather", "Cloth"]

//single dimension
console.log('----single dimension-----')
console.log(equipmentDPS[1]);
console.log(armorDPS[1]);

//multi dimensional
//nested arrays (arrays in arrays)
const dpsInventory = [equipmentDPS, armorDPS];
const supportInventory = [equipmentSupport, armorSupport];

console.log('----multiple dimension-----')
console.log(dpsInventory[0][2])
console.log(supportInventory[1][1])

//1 more dimension (now 3)
console.log('-----3 dimensions----')
const possibleLoot = [supportInventory,dpsInventory];
console.log(possibleLoot[0][0][0])













