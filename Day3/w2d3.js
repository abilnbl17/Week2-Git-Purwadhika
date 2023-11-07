// Exercise

// Create a function to get the intersection of two object
// example =
// =>> input : {a: 2} & {a: 1}
// =>> output : false

const obj1 = { a : 2, };
const obj2 = { a : 1, };

//-------------------salah---------------------
// function Object (twoObject) {
//     return `${obj1} + ${obj2} = ` + "false";
// }
// console.log (twoObject)
// -------------------salah---------------------

function combineObject (object1, object2){
    // return `${object1.a} + ${object2.a} = ${object1.a} + ${object2.s}`;
    const equal = object1.a === object2.a;
    return `Output: ${equal}`;
}
console.log (combineObject(obj1, obj2));
console.log ("-------------------------------------------------");

// Example =
// >> Input : { a: "Hello" } & {a: 1}
// >> Output : false

const obj01 = { a: "Hello", };
const obj02 = { a: 1, };

function combineObject2 (objectWord, ObjectNumber){
    const equal = objectWord.a === ObjectNumber.a;
    return `Output: ${equal}`;
}
console.log (combineObject2(obj01, obj02));
console.log ("-------------------------------------------------");

// Example = 
// >> Input : { a: 1 } & { a: 1 }
// >> Output : true

const obj001 = { a: 1, };
const obj002 = { a: 1, };

function combineObject3 (ObjectNumber1, ObjectNumber2){
    const equal = ObjectNumber1 !== ObjectNumber2;
    return `Output: ${equal}`;
}
console.log (combineObject3(obj001, obj002));
console.log ("-------------------------------------------------");
console.log ("-------------------------------------------------");



// Create a function to get the intersection of two object
// example =
// >> input : { a: 1, b: 2} & {a: 1, c: 3}
// >> output : { a: 1 }

const object01 = 
{ 
    a: 1, 
    b: 2, 
};

const object02 = 
{
    a: 1,
    c: 3,
};
//-------------------salah---------------------
// function findValue (key1, key2){
//     for (let i = 0; i < key1.length; i++){
//         if (key1[i] === key2){
//             return true;
//         }
//     }
//     return `{a: ${object01.a}}`;
// }
//-------------------salah---------------------
function findValue (obj1, obj2){
    const intersection = {};

    for (const key in obj1) {
        if (obj2.hasOwnProperty(key) && obj2[key] === obj1[key]) {
            intersection[key] = obj1[key];
        }
    }
    return intersection;
}

console.log ("Output:", findValue(object01, object02));
console.log ("-------------------------------------------------");
console.log ("-------------------------------------------------");



// Create a function to merge two array of student data and remove duplicate data
// student data: name & email
/*
    >> Example :
    =>> array1 = [
                { name: "Student1", email: "student1@gmail.com" },
                { name: "Student2", email: "student2@gmail.com" }
    ]
    =>> array2 = [
                { name: "Student1", email: "student1@gmail.com" },
                { name: "Student3", email: "student3@gmail.com" }
    ]

    >> Result : [
                { name: "Student1", email: "student1@gmail.com" },
                { name: "Student2", email: "student2@gmail.com" },
                { name: "Student3", email: "student3@gmail.com" }
    ]
*/
const student1 = [
    { name: "Abil", email: "abil@gmail.com" },
    { name: "Nive", email: "nive@gmail.com" }
];

const student2 = [
    { name: "Abil", email: "abil@gmail.com" },
    { name: "Kucluk", email: "kucluk@gmail.com" }
];

function mergeAndRemoveDuplicates(array1, array2){
    const combinedArray = [...array1, ...array2];
    const uniqueStudents = [];
    const seenStudents = {};

    for (const student of combinedArray) {
        const key = student.name + student.email;
        if (!seenStudents[key]){
            seenStudents[key] = true;
            uniqueStudents.push(student);
        }
    }
    return uniqueStudents;
}

const mergeStudents = mergeAndRemoveDuplicates(student1, student2);
console.log ("Output:", mergeStudents);
console.log ("-------------------------------------------------");
console.log ("-------------------------------------------------");


// Create a function that can accept input as an array of object and switch all values into property and 
// property into value
/*
    Example :
    >> Input : [{ name: "David", age: 20}]
    >> Output : [{ David: "name", 20: "age"}]
*/

function switchPropertiesAndValue(arr){
    const result = [];

    for (const obj of arr) {
        const switchedObj = {};

        for (const key in obj) {
            switchedObj[obj[key]] = key;
        }
        result.push (switchedObj);
    }
    return result;
}

const input = [
    { name: "David", age: 20 }
];
const output = switchPropertiesAndValue(input);
console.log (output);

console.log ("--------------------------------------");

const tukar = (arrObj = [] ) =>
    arrObj.map((val) => {
        let newObj = {};
        Object.keys (val).map((key) => (newObj[val[key]] = key));
        return newObj;
    });

    let arr = [
        {name: "David", age: 20},
    ];
    console.log (tukar(arr));
console.log ("--------------dari kak jordan--------------------------");


// Create a function to ding a factorial number using recusion
// example: input: 5
// output: 5! = 5 x 4 x 3 x 2 x 1 = 120

function factor (n = 0, r = 1){
    if (n > 1) return factor (n - 1, (r *= n));
    console.log (r);
}
factor(5);
console.log ("--------------dari kak jordan--------------------------");
