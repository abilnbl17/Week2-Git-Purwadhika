// Create a function to calculate array of student data
// the object has this following properties:
/*
    Name => String
    Email => String
    Age => Date
    Scroe => Number
*/
// Parameters:  array of Student
// Return Values:
/*
    Object with this following properties
    => Score
        >> Highest
        >> Lowest
        >> Average

    => Age
        >> Highest
        >> Lowest
        >> Average
 */

const students = [
    {
    name : "ABIL",
    email : "abil01@gmail.com",
    age : new Date ("1996-12-12"),
    score : 95,


},
    {
        name : "Nive",
        email : "nivenia@gmail.com",
        age : new Date ("1997-11-25"),
        score : 80,


    },

];
// console.log (students);

function calculateStudent (students){
    if (!Array.isArray(students) || students.length === 0){
        return {
            Score : {
                Highest : null,
                Lowest : null,
                Average : null,
            },
            Age : {
                Highest : null,
                Lowest : null,
                Average : null,
            },
        };
    }

    const scoreValue = students
    .map ((student) => student.score)
    .filter ((score) => typeof score === "number");

    const ageValue = students
    .map ((student) => student.age)
    .filter ((age) => age instanceof Date);


    const scoreStats = {
        Highest : Math.max(...scoreValue),
        Lowest : Math.min(...scoreValue),
        Average : scoreValue.reduce((acc, score) => acc + score, 0) / scoreValue.length, 
    };

    const ageStats = {
        Highest : new Date (Math.max(...ageValue)),
        Lowest : new Date (Math.min(... ageValue)),
        Average : new Date (ageValue.reduce((acc, age) => acc + age.getTime(), 0) / ageValue.length),
    };
    return {
        // name : "Abil",
        score : scoreStats,
        age : ageStats,
    };
    // return data;
}

const statisticsStudent = calculateStudent(students);
console.log (statisticsStudent);

console.log ("--------------------------------------------------");

class student1 {
    constructor (name, email, age, score){
        this.name = name;
        this.email = email;
        this.age = age;
        this.score = score;
    }
}
const students1 = [
    new student1("naruto", "n@gmail.com", 17, 60),
    new student1("sasuke", "s@gmail.com", 18, 90),
    new student1("sakura", "sa@gmail.com", 19, 100),
];

// age

const hla = ( students1 = [], key = "") => {
    students1.sort ((a, b) => b[key] - a[key]); // urutkan array besar ke kecil based on kry paramnya
    const Highest = students1[0][key];
    const Lowest = students1[students1.length - 1][key];
    const avg = students1.reduce((sum, current) => sum + current[key], 0) / students1.length;
    
    return { Highest, Lowest, avg };

};

console.log (hla(students1, "score"));                                                                
console.log ("-------------------Dari Kak Jordan-------------------------------");



// Create a program to create transaction
// product class
/*
    properties
    >> Name
    >> price
*/
// Transaction Class
/*
    Properties
    >> total
    >> product
        =>> All product data
        =>> Qty
    >> Add to cart method => Add product to transaction
    >> show total method => show total current transaction
    >> checkout method => finalize transaction, return transaction data
*/

class Product {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }    
}

class Transaction {
    constructor() {
        this.total = 0;
        this.Product = [];
        this.qty = [];
    }

    addToCart (product, quantity) {
        this.Product.push(product);
        this.qty.push(quantity);
        this.total += product.price * quantity;
    }
    showTotal() {
        return this.total;
    }

    cheackout() {
        const transactionData = {
            total: this.total,
            product: this.Product,
            qty: this.qty,
        };
        return transactionData;
    }
}

const laptop = new Product("Laptop", 800000000);
const mouse = new Product("Mouse", 200000);
const keyboard = new Product("Keyboard", 30000000);

const newTransaction = new Transaction();

newTransaction.addToCart(laptop, 2);
newTransaction.addToCart(mouse, 1);
newTransaction.addToCart(keyboard, 1);

const totalAmount2 = newTransaction.showTotal();
console.log (`Total amount: ${totalAmount2}`);

const complatedTransaction2 = newTransaction.cheackout();
console.log ("Transaction Data: ");
console.log (complatedTransaction2);
