// OOP (Object Oriented Programming)
/*
    object itu adalah ciri2 sebuah barang (properties and method)
    berbeda dengan array

    menciptakan class atau tamplate dari sebuah object
*/
// contoh 
const BMW = {
    brand : "BMW",
    model : "m135i",
    price : 800000000,
};

const toyota = {
    brand : "Toyota",
    model : "Innova",
    price : 500000000,
};
// tamplate = class
/*
    class itu merupakan tamplate dari sebuah object
*/
class Car {
    type = "mobil";
    constructor (brand, model, price) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
}
console.log (BMW, toyota);

console.log ("--------------------------------------------");

const honda = new Car ("Honda", "Jazz", 300000000);
const ferrari = new Car ("ferrari", "model ferrari", 3000000000);

console.log (honda);
console.log (ferrari);
console.log ("--------------------------------------------");

// add & delete 
let person = {
    name : "frenky",
    age : 26,
};

person.hobby = "basket"; // tambah key baru
person.age = 20; // menjadi replace dari 26 menjadi 20
delete person.hobby; // menghapus key didalam object

// person = variable = object
// variable object akan memiliki keys
// kita tidak mengubah / reassign value dari object. tapi kita mengubah keynya

console.log (person);
console.log ("--------------------------------------------");

// optional chaining "?"
/*
    nested object didalam object akan ditambah object lagi
*/

// Encapsulation
/*
    concept in OOP sebuah data yang didalam object
    ketika menciptakan sebuah class 
*/
// contoh
class product {
    #stock;
    // #price;

    constructor(name, price){
        this.name = name;
        this.price = price;
        // this.stock = stock;
        // this.price = price;
    }
    showStock(){
        if (!this.#stock) return "set stock terlebih dahulu";
        return this.#stock;
    }
    setStock(value){
       if (typeof value == "number") return this.#stock = value;
        return console.log (value, "bukan tipe data number");
    }
}

// getter setter tidak bisa untuk private key

const keyboard = new product("keyboard razer", 500000);
keyboard.setStock(5);
keyboard.setStock("10");
console.log (keyboard);
console.log (keyboard.showStock());
console.log ("--------------------------------------------");


// advantages of encapsulation
/*
    read only or write only
    membuat function dan set ulang => write

 */

// inheritance
/*
    inheritance => mewariskan

    didalam class bisa mewariskan properties atau method atau bisa disebut key-nya
    ada sebuah properties yang diwariskan ke bawahannya
*/

// keyboard
// buku

// nama, warna, berat, panjang, lebar

//buku =>> author, release year

const komikNaruto = new product("buku komik naruto", 5000);
komikNaruto.author = "si udin";
komikNaruto.releaseYear = 1999;
console.log (komikNaruto);

const komikShinchan = new product("buku komik shinchan", 4000);
komikShinchan.author = "si ujang";
komikShinchan.releaseYear = 1990;
console.log (komikShinchan)

class Book extends product {
    constructor(name, price, author, releaseYear) {
        super (name, price); // super adalah method yang menjalankan constructor class product
        this.author = author;
        this.releaseYear = releaseYear;
    }
    showStock() {
        console.log ("hehehehe");
    } // override method showstock atau bisa dibilang ditimpa
}

const komikOnePiece = new Book("buku komik one piece", 5000, "si Yuyun", 1998);
console.log (komikOnePiece);
komikOnePiece.setStock(50);
console.log (komikOnePiece.showStock());

// instanceof operator

console.log (komikOnePiece instanceof Book); // true
console.log (komikOnePiece instanceof product); // true
console.log (komikNaruto instanceof Book); // false

// contoh getter dan setter
class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName () {
        return this.firstName + " " + this.lastName; 
    }

    set fullName(fullName = ""){
        const spillted = fullName.split(" ");
        this.firstName = spillted[0];
        this.lastName = spillted[1];
    }
}

// getter setter maka function akan dianggap sebagai sebuah property
const person1 = new Person ("udin", "uzumaki");

console.log (person1);
console.log (person1.fullName);
// person1.setFullName("ujang Uchiha");
person1.fullName = "ujang uchiha";
console.log (person1.fullName);