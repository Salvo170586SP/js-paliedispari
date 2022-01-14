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
//stabiliamo se la somma è pari o dispari
//dichiaro chi ha vinto





//domando all'utente se vuole pari o dispari
const userAsk = prompt('scegli pari o dispari', 'pari').trim();

//domando all'utente di scegliere un numero da 1 a 5
const userNumber = parseInt(prompt('scegli un numero da 1 a 5', '5'));

//numeri da randomizzare (da 1 a 5)
const cpuNumber = randomizer(1, 5);


//CREO FUNZIONE PER RANDOMIZZARE
function randomizer(min, max) {
    //genero un numero a caso tra due numeri
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//faccio la somma del numero dell'utente con il numero random del pc

sum = userNumber + cpuNumber;
console.log(sum);

//ho creato una variabile che ingloba il risultato della somma con la funzione
let evenOr = isEoS(sum);
console.log(evenOr);

//CREO FUNZIONE 
//SE CONDIZONE SE PARI O DISPARI
function isEoS(num) {
    //stabiliamo se la somma è pari o dispari
    if (num % 2 === 0) {
        //è pari
        return 'pari';
    } else {
        //è dispari
       return 'dispari';
    }
}


//CONDIZONE SE MESSAGGIO E' UGUALE ALLA SCELTA DELL'UTENTE
if (evenOr === userAsk) {
    console.log('ha vinto');
} else {
    console.log('hai perso');
}
