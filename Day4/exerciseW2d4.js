// Inisialisasi data restoran dan cart
const restoran = {name: "Kwetiaw 95", jarak: 5};
const ongkirPerKm = 2000;
const cart = [];

// Fungsi untuk menghitung total biaya
function hitungTotalBiaya() {
    let totalBiayaMakanan = 0;

    for (let i = 0; i < cart.length; i++){
        totalBiayaMakanan += cart[i].price * cart[i].qty;
    }
    const totalOngkir = restoran.jarak * ongkirPerKm;
    return totalBiayaMakanan + totalOngkir;
}

// Fungsi untuk menambahkan makanan ke cart
function addFood(food) {
    const existingItem = cart.find(item => item.name === food.name);

    if (existingItem){
        existingItem.qty += food.qty;
    } else {
        cart.push(food);
    }
}

// Fungsi untuk menghapus makanan dari cart
function hapusMakanan(foodName) {
    for (let i = 0; i < cart.length; i++){
        if (cart[i].name === foodName) {
            cart.splice(i, 1);
            break; // keluar dar perulangan setelah menghapus
        }
    }
}

// Fungsi untuk mengedit qty makanan tertentu didalam cart
function editQtyMakanan(foodName, newQty) {
    for (let i = 0; i < cart.length; i++){
        if (cart[i].name === foodName){
            cart[i].qty = newQty;
            break; // Keluar dari perulangan setelah mengedit
        }
    }
}

const capcay = { name: "Capcay", price: 50000, qty: 2 };
addFood(capcay);
console.log ("Total biaya setelah menambahkan capcay: ", hitungTotalBiaya());

const nasiGoreng = { name: "Nasi Goreng", price: 35000, qty: 3};
addFood(nasiGoreng);
console.log ("Total biaya setelah menambahkan Nasi Goreng: ", hitungTotalBiaya());

hapusMakanan("capcay");
console.log ("Total biaya setelah menghapus Capcay: ", hitungTotalBiaya());

editQtyMakanan("nasi goreng", 5);
console.log ("Total biaya setelah mengedit qty Nasi Goreng: ", hitungTotalBiaya());



console.log ("-----------------------------------------");
console.log ("-----------------------------------------");

function printTriangle1(tinggi){
    for (let i = 1; i <= tinggi; i++) {
        let row = "*".repeat(i);
        console.log (row);
        // console.log ()
    }
}
printTriangle1(4);
console.log (" ");


function printTriangle2(tinggi){
    for (let i = tinggi; i >= 1; i--){
        let row = " ".repeat(tinggi - i) + "*".repeat(i);
        console.log (row);
    }
}
printTriangle2(4);
console.log (" ");


function printTriangle3(tinggi){
    for (let i = 1; i <= tinggi; i++){
        let row = " ".repeat(tinggi - i) + "*".repeat(i);
        console.log (row);
    }
}
printTriangle3(4);
console.log (" ");

function printTriangle4(tinggi){
    for (let i = tinggi; i >= 1; i--){
        let row = "*".repeat(i);
        console.log (row);
    }
}
printTriangle4(4);
console.log (" ");

function printTriangle5(tinggi){
    for (let i = 1; i <= tinggi; i++){
        let row = " ".repeat(tinggi - i);
        for (let j = 1; j <= i; j++){
            if (j < i){
                row += "* ";
            } else {
                row += "*";
            }
        }
        console.log (row);
    }
}
printTriangle5(4);
console.log (" ");

// const tinggi = 4
// console.log (segitigaBintangTerbalik(tinggi));
// console.log (segitigaBintangBerkebalikanTerbalik(tinggi));
// console.log (segitigaBintangSikuKiriTerbalik(tinggi));
// console.log (segitigaBintangSikuKananTerbalik(tinggi));