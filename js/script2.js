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



//recupero elementi in pagina
const optionElement = document.getElementById('pari-dispari');
const numbElement = document.getElementById('input-number');
const buttonElement = document.getElementById('calculate');
const resetButtonElement = document.getElementById('delete');
const resultElement = document.getElementById('placeholder');


//BOTTONE AVVIA
//aggancio il bottone 'AVVIA' all'evento
buttonElement.addEventListener('click', function () {

    //VALIDAZIONE
    //se non contiene testo o se non contiene numero BLOCCA TUTTO
    if (!optionElement.value || !numbElement.value) {
        alert("inserisci dati");
    } else {

        //creo variabile per definire il valore (stringa scritta) dell'input
        const optionValue = optionElement.value;
        
        const cpuNumber = randomizer(1, 5);
        console.log(cpuNumber);
        
               
        //2 faccio la somma del numero dell'utente con il numero random del pc
        let sum = Number(numbElement.value) + cpuNumber;
        console.log(sum);
        
        
        //3 stabiliamo se la somma è pari o dispari
        //ho creato una variabile che ingloba il risultato della somma con la funzione
        let evenOr = isEoS(sum);
        console.log(evenOr);
        
        
        //4 dichiaro chi ha vinto
        let message;
        //CONDIZONE SE MESSAGGIO E' UGUALE ALLA SCELTA DELL'UTENTE
        if (optionElement.value === evenOr) {
            message = 'hai vinto';
            console.log('hai vinto');
        } else {
            message = 'hai perso';
            console.log('hai perso');
        }

        resultElement.innerHTML = `hai scelto ${optionValue}. Il risultato è ${sum} ${evenOr}. <strong>${message}</strong> `;
    }
})



//BOTTONE CANCELLA
//aggancio il bottone 'CANCELLA' all'evento
resetButtonElement.addEventListener('click', function () {
    optionElement.value = '';
    numbElement.value = '';
    resultElement.innerHTML = '';
})





//CREO FUNZIONE PER RANDOMIZZARE DUE NUMERI
function randomizer(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//CREO FUNZIONE 
//SE CONDIZONE PARI O DISPARI
function isEoS(num) {
    //stabiliamo se la somma è pari o dispari
    if (num % 2 === 0) {
        return 'pari';
    } else {
        return 'dispari';
    }
}


