// Exercise week2 Day 1

// Write a function to get the lowest, highest and average value in the array (with and without sort function)
// Example: arr = [12, 5, 23, 18, 4, 45, 32] => (lowest: 4, highest: 45. average: 19.8xxxx)


function valueNumber(arr){
    
    if (arr.length === 0){
        return undefined;
    }

    let lowest = arr[0];
    let highest = arr[0];
    let sum = 0;
    
    for (let i = 1; i < arr.length; i++){
        sum += arr[i];

        if (arr[i] < lowest){
            lowest = arr[i];
        }
        if (arr[i] > highest){
            highest = arr[i];
        }
    }

    let average = sum / arr.length; // masih salah outputnya

    return `Lowest: ${lowest}, Highest: ${highest}, Average: ${average}`;
    // masih salah outputnya
    
}

const arr = [12, 5, 23, 18, 4, 45, 32]; 
console.log (valueNumber(arr));
console.log ("----------------------------------------------------------No 1");

// Write a function that takes an array of word and returns a string by concatenaning the words in the array
// separated by commas and - the last word - by an "and"
// example: arr = ["apple","banana","cherry","date"] => "apple,banana, cherry, and date"


function wordsArray(arrWord){

    if (arrWord.length === 0){
        return "";
    }
    
    if (arrWord.length === 1){
        return arrWord[0];
    }

    let result = "";
    for (let i = 0; i < arrWord.length - 1; i++){
        result += arrWord[i] + ", ";
    }

    result += "and " + arrWord[arrWord.length - 1];
    return result;
}

const arrWord = ["apple","banana","cherry","date"];
const result = wordsArray(arrWord);

console.log (result);
console.log ("----------------------------------------------------------No 2");


// Write a function to split a string and convert it into an array of word
// Example: "Hello World" => ["Hello","World"]

function splitWord(word){

    let wordSplit = word.split(" ");
    return wordSplit;

}

let word = "Hello World";
let resultWord = splitWord(word);

console.log (resultWord);
console.log ("----------------------------------------------------------No 3");


// Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are
// of the same length.
// Example: [1,2,3] + [3,2,1] => [4,4,4]



function calculateArray(arrCalculate1, arrCalculate2){

    if (arrCalculate1.length !== arrCalculate2.length){
        return undefined;
    }

    let result = [];
    
    for (let i = 0; i < arrCalculate1.length; i++){
        result.push (arrCalculate1[i] + arrCalculate2[i]);
    }
    return result;
}
const arrCalculate1 = [1,2,3];
const arrCalculate2 = [3,2,1];
const resultArray = calculateArray(arrCalculate1, arrCalculate2);
console.log (arrCalculate1, " + ", arrCalculate2, " => ", resultArray);

// const sumArr = (arr1 = []. arr2 = []) => arr1.map((val, i) => val + arr2[i]);
// console.log (sumArr([1, 2, 3], [3, 2, 1]));
// console.log ("******************Dari Kak Jordan**********************")
console.log ("----------------------------------------------------------No 4");


// Write a function that adds an element to the end of an array. However, the element should only be added if it is not already in the array
// Example: arr = [1,2,3,4], newElement = 4 => [1,2,3,4]
// Example: arr = [1,2,3,4], newElement = 7 => [1,2,3,4,7]

function addElement (arr, newElement){
    if (!arr.includes(newElement)){
        arr.push (newElement)
    }
    return arr;
}

const addArr1 = [1, 2, 3, 4];
const newElement1 = 4;
console.log (addElement(addArr1, newElement1));

const addArr2 = [1, 2, 3, 4];
const newElement2 = 7;
console.log (addElement(addArr2, newElement2));

console.log ("----------------------------------------------------------No 5");


// Write a function to remove all odd number in an array and return a new array that contains even numbers only
// Example: number = [1,2,3,4,5,6] => [2,4,6]

function allOddNumber(arr){
    
    let evenNumber = [];

    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 === 0){
            evenNumber.push(arr[i]);
        }
    }
    return `[${arr}] => [${evenNumber}]`;
}
console.log (allOddNumber([1, 2, 3, 4, 5, 6]));
console.log ("----------------------------------------------------------No 6");


/*  Write a function to insert multiple given integer (not an array) to an array and have a maximum size input.
    The array can only have maximum size from a given input. (if the maximum size of the given input is 5 than the
    array can only contain 5 elements).

    Example: maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8
             The Function will return [5, 10, 24, 3, 6]

*/

console.log ("----------------------------------------------------------N 7");


// write a function that will combine 2 given array into one way
// Example: arr1 = [1,2,3], arr2 = [4,5,6] => [1,2,3,4,5]

function combineArray (arr1, arr2){

    for (let i = 0; i < arr2.length; i++){
        arr1.push(arr2[i]);
    }
    return arr1;
}

const arr1 = [1,2,3];
const arr2 = [4,5,6];

console.log (combineArray(arr1, arr2));
console.log ("----------------------------------------------------------No 8");


// Write a function to find duplicate values in an array
// Example: arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] => [2, 3, 5]

const findDuplicate = (...arr) => {

    const duplicate = arr
    .sort ()
    .filter ((val, index) => 
        val == arr[index + 1] ? arr.indexOf(val) === index : null
    );
    return duplicate;
}
// const arrDuplicateValue = [1, 2, 2, 2, 3, 3, 4, 5, 5];
console.log (findDuplicate (1, 2, 2, 2, 3, 3, 4, 5, 5));
console.log ("----------------------------------------------------------No 9");


// Write a function to find the difference in 2 given array
// Example: arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] => [1, 2, 6, 7]

const diff = (arr = [], arr2 = []) =>
    arr1.filter((val) => arr2.indexOf(val) == -1);
    console.log (diff ([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]), "Diff");


console.log ("----------------------------------------------------------No 10");


// Based on the array below write a function that will return primitive data types only
// arr = [1, [], undefined, {}, "string", {}, []]
// The function will return [1, undefined, "string"]

const primitive = (...arr) => arr.filter((val) => typeof val != "object");
console.log (primitive(1, [], undefined, {}, "string", {}, []));

console.log ("----------------------------------------------------------No 11");


// Write a function a given array of numbers and return the second smallest number
// example: numbers = [5, 3, 1, 7, 2, 6] => 2

const secondSmallest = (...arr) => arr.sort((a, b) => a - b)[1];
console.log (secondSmallest(5, 3, 1, 7, 2, 6), "2nd Smallest");

console.log ("----------------------------------------------------------No 12");


// Write a function from a given array of mixed data types and return the sum of all the number
// Example: mixedArray = ["3", 1, "string", null, false, undefined, 2] => 3

const sum = (...mixed) =>
mixed.reduce(
    (sum, current) => (typeof current === "number" ? sum + current : sum),
    0
);
console.log (sum ("3", 1, "string", null, false, undefined, 2));
console.log ("----------------------------------------------------------No 13");


// Write a function from the below array of number that will return sum of duplicate values
// arr = [10, 20, 40, 10, 50, 30, 10, 60, 10]
// The function will return 40

const sumDuplicate = (... numbers) => 
    numbers
        .sort ((a, b) => a - b)
        .filter ((val, i) => val == numbers [i + 1] || val == numbers [i - 1])
        .reduce ((sum, val) => sum + val, 0);

console.log (sumDuplicate(10, 20, 40, 10, 50, 30, 10, 60, 10));
console.log ("----------------------------------------------------------No 14");


// Write a game of rock, paper, scissor function that will return "Win" or lose. The function will randomly pick
// between rock, papaer, or scissor
// Example: if you throw a rock as an argument and the function pick a scissor then it will return "Win"

const suit = (pick = "") => {
    const options = ["rock", "paper", "scissor"];
    const playIndex = options.indexOf(pick.toLowerCase());
    const computerIndex = Math.floor(Math.random() * 3);
    console.log (options[playIndex], "vs", options[computerIndex]);

    if (
        (playIndex == 0 && computerIndex == 2) ||
        (playIndex == 1 && computerIndex == 0) ||
        (playIndex == 2 && computerIndex == 1)
        )
        return "Win";
        else if (playIndex == computerIndex) return "draw";
        return "lose";
};
console.log (suit("paper"));
console.log ("----------------------------------------------------------No 15");



