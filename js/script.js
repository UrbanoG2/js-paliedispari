// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// (prima senza funzione e poi con funzione)



//chiedo all'utente di inserire una parola

// const userWord = prompt ("Inserisci una parola");
// console.log(userWord);

// //la divido in lettere (creando un array), giro l'array al contrario e lo riunisco.

// let reverseWord = userWord.split ("").reverse("").join ("");
// console.log(reverseWord + " parola al contrario lettera per lettera");

// //verifico se la parola girata è uguale alla parola inserita dall'utente

// if (reverseWord == userWord) {
//     console.log("La parola è palindroma!");
// } else {
//     console.log("La parola non è palindroma!");

// }


// //faccio tutto con una funzione (??)


// let check = palindrome (userWord, wordReverse); //specificare l'argomento della funzione da invocare

// if (check = palindrome (userWord, wordReverse)) {

//     console.log("la parola è palindroma");

// } else {

//     console.log("la parola non è palindroma");
    
// }



// function palindrome (userWord, wordReverse) {

//     let found = false;
//     //confronto le due parole
//     if (userWord == wordReverse) {
//         //parola palindroma
//         found = true;
//     }
//     return found;
// }

























// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari
// Dichiariamo chi ha vinto
// (corrispondenza tra scelta pari e dispari e somma pari o dispari)
// In un secondo momento creiamo delle funzioni per i numeri random e per il check pari dispari



// l'utente inserisce un numero da 1 a 5





const choice = prompt ("Pari o dispari?");
console.log(choice + " (scelta dell'utente)");

const userNum = parseInt(prompt("Inserisci un numero da 1 a 5"));
console.log(userNum + " Numero Utente");
 
let included = false;

if (userNum >= 1 && userNum <= 5) {

    included = true;
} 

let compNumber = Math.floor(Math.random() * 6);
    console.log(compNumber + " Numero Computer");

let sum = userNum + compNumber;
console.log(sum + " Somma Numeri");


if (included == true) {
    console.log("Numero utente valido");


    
    if (sum % 2 == 0) {

        console.log("Il numero è pari!");

    } else {
        console.log("il numero è dispari!");
    }


} else {
    console.log("Numero utente non valido");
}

// check pari dispari 

if (choice == "pari" && sum % 2 == 0) {
    alert ("User wins");
} else if (choice == "dispari" && sum % 2 != 0) {
    alert ("User wins");
} else if (choice != "pari" || choice != "dispari") {
    alert ("Valore non valido")
} else {
    alert ("Computer wins");
}    







function getRandNumber () {
    return Math.floor(Math.random() * (max - min ) ) + min;
}

function checkEvenOdd (number, valueString) {
    let found = false;
    if (valueString == "pari" && number % 2 == 0 || valueString == "dispari" && sum % 2 != 0 ){
        found = true;
    } 
    return found;
}

