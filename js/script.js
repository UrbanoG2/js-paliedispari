// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// (prima senza funzione e poi con funzione)



//chiedo all'utente di inserire una parola

const userWord = prompt ("Inserisci una parola");
console.log(userWord);

//se la parola, al contrario, è uguale a userWord, allora è palindroma.
//devo prendere lettera per lettera


//creo un array vuoto
let wordArr = [];
let reverseArr = [];

//divido la parola in lettere
let splitWord = userWord.split("");
// console.log(splitWord +  " parola lettera per lettera");


//inserisco le lettere singole nell'array vuoto
wordArr.push(splitWord);
console.log(wordArr);


//leggo le lettere al contrario


let reverseWord = splitWord.reverse();
// console.log(reverseWord + " parola al contrario lettera per lettera");

reverseArr.push(reverseWord);
console.log(reverseArr);

//NON SO COSA STO FACENDO























// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari
// Dichiariamo chi ha vinto
// (corrispondenza tra scelta pari e dispari e somma pari o dispari)
// In un secondo momento creiamo delle funzioni per i numeri random e per il check pari dispari



//l'utente inserisce un numero da 1 a 5





//const choice = prompt ("Pari o dispari?");
//console.log(choice + " (scelta dell'utente)");

//const userNum = parseInt(prompt("Inserisci un numero da 1 a 5"));
//console.log(userNum + " Numero Utente");
 
//let included = false;

//if (userNum >= 1 && userNum <= 5) {

//    included = true;
//} 

//let compNumber = Math.floor(Math.random() * 6);
//    console.log(compNumber + " Numero Computer");

//let sum = userNum + compNumber;
//console.log(sum + " Somma Numeri");


//if (included == true) {
//    console.log("Numero utente valido");


    
//    if (sum % 2 == 0) {

//        console.log("Il numero è pari!");

//    } else {
//        console.log("il numero è dispari!");
//    }


//} else {
//    console.log("Numero utente non valido");
//}

//check pari dispari 

//if (choice == "pari" && sum % 2 == 0) {
//    alert ("User wins");
//} else if (choice == "dispari" && sum % 2 != 0) {
//    alert ("User wins");
//} else if (choice != "pari" || choice != "dispari") {
//    alert ("Valore non valido")
//} else {
//    alert ("Computer wins");
//}    



