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
        let numbers = array[i]; // 1, 2 ..

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

function addNumbers(num1,num2) {
    let result = num1 + num2;

    return result;
    

}

function subtractNumber(num1, num2) {
    let result = num1 - num2;

    return result;
}

console.log(calculator(5,77, addNumbers, subtractNumbers));