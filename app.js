function greeting(name, callback) {
    let sentence = 'Hello, my name is ' + name + ' ';

    let otherSentence = callback();

    return sentence + otherSentence;
}


function anotherGreeting() {
    let sentence = 'I forgot my last name';
    
    return sentence;
}

let myName = 'Philip';
console.log(greeting(myName, anotherGreeting));

function printArray(array, callback) {
    for(let i = 0; i < array.length; i++) {
        let number = array[i]; // 1, 2 ..

        console.log(number); // 1
    }

    callback(array);
}

function printArrayAgain(array) {
    for (let i = 0; i < array.length; i++) {
        let number = array[i]; //1,2 ..

        console.log(number);//1,2 ..
    }

}

const numbersArray = [1,2,3,4,9,9,7,6];

printArray(numbersArray, printArrayAgain);

function calculator(num1, num2, callbackOne, callbackTwo) {
    let result = callbackOne(num1, num2) + callbackTwo(num1, num2);
    // 82 + -72 = 10
    return result;
} 

function addNumbers(num1, num2) {
    let result = num1 + num2;

    return result;
    

}

function subtractNumbers(num1, num2) {
    let result = num1 - num2;

    return result;
}

console.log(calculator(5,77, addNumbers, subtractNumbers));

// make asuperhero function
//take in two callbacks
//return a string in each callback describing the superhero

function superman (superPower1, superPower2) {

    let result = superPower1() + ' and ' + superPower2();

    return result;

} 

function fly() {
    let power = 'i can fly';

    return power;
}

function strength(){
    let punch = 'i can punch you to dead';

    return punch;
}

console.log(superman(fly, strength));

function blastoff() {
    let num = 0;

    for (let i = 10; i >= num; i--) {
        console.log(i); // 10, 9, 8, ...
    }
    console.log('BlastOff');
}

setTimeout(blastoff, 5000);

//function printName(){
//    console.log('Philip');
//}
//setTimeout(printName, 5000);

function printName(name){
    console.log(name);
}

let printNameTwo = 'philip';
setTimeout(function(){
    printName(printNameTwo);
}, 5000);


// Iterators
//forEach

const collectables = ['Bomag', 'CMI Corp', 'Wirtgen', 'Catepillar'];
collectables.forEach(function(element) {
    console.log(element);
}) ;

//or

const collectables1 = ['Bomag', 'CMI Corp', 'Wirtgen', 'Catepillar'];
collectables1.forEach(element => {
    console.log(element);
})

// or

const collectables2 = ['Bomag', 'CMI Corp', 'Wirtgen', 'Catepillar'];
collectables2.forEach(element => {
    if (element.length >6) {
        console.log(element);
    }
});

// map

const someNumbers = [24, 65,347,34];

const addFive = someNumbers.map(element =>{

//someNumbers.map(element => {

    return element + 5 ;
}); // map return to array

console.log(addFive);

// filter

const filterNumbers = someNumbers.filter(element => {
    if(element > 50){
        return element;
    }
})

console.log(filterNumbers);