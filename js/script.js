console.log('js ok');

/* 
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/



//PALIDROMA
//chiedo all'utente inserire parola
//Creo una funzione per capire se la parola inserita è palindroma

//chiedo all'utente inserire parola
const userWord = prompt('inserisci una parola','ciao').trim();

//creo variabile d'appoggio
let wordReverse = '';

//creo ciclo per contare a ritroso le lettere tante quanto sono nella parola partendo dall'ultima
for (let i = userWord.length - 1; i >= 0; i--) {
    //aggiungo tutte le lettere partendo dalla fine alla variabile wordReverse
    wordReverse += userWord[i];
}

console.log(wordReverse);
