// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// (prima senza funzione e poi con funzione)


















// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari
// Dichiariamo chi ha vinto
// (corrispondenza tra scelta pari e dispari e somma pari o dispari)
// In un secondo momento creiamo delle funzioni per i numeri random e per il check pari dispari



//l'utente inserisce un numero da 1 a 5

const userNum = parseInt(prompt("Inserisci un numero da 1 a 5"));
console.log(userNum + " Numero Utente");
 
let included = false;

if (userNum >= 1 && userNum <= 5) {

    included = true;
} 

if (included == true) {
    console.log("Numero utente valido");

    let compNumber = Math.floor(Math.random() * 6);
    console.log(compNumber + " Numero Computer");

    let sum = userNum + compNumber;
    console.log(sum + " Somma Numeri");

    if (sum % 2 == 0) {

        console.log("Il numero è pari!");

    } else {
        console.log("il numero è dispari!");
    }


} else {
    console.log("Numero utente non valido");
}




//if pari? 