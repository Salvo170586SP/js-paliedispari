/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/ 

//domando all'utente se vuole pari o dispari
//domando all'utente di scegliere un numero da 1 a 5
//genero un numero a caso da 1 a 5
//faccio la somma del numero dell'utente con il numero random del pc
//confrontiamo i 2 numeri e stabiliamo se sono pari o dispari
//dichiaro chi ha vinto

//domando all'utente se vuole pari o dispari
const userAsk = prompt('scegli pari o dispari').trim();

//domando all'utente di scegliere un numero da 1 a 5
const userNumber = parseInt(prompt('scegli un numero da 1 a 5')); 

//genero un numero a caso da 1 a 5
const randomNumber = Math.floor(Math.random() * 5) + 1; 

//faccio la somma del numero dell'utente con il numero random del pc
sum = userNumber + randomNumber;
console.log(sum);

