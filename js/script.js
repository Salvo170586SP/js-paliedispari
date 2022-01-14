console.log('js ok');

/* 
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

//recupero elementi in pagina
const inputElement = document.getElementById('input-text');
const buttonElement = document.getElementById('calculate');
const resetElement = document.getElementById('reset');
const resultElement = document.getElementById('result');


//aggancio il bottone 'AVVIA' all'evento
buttonElement.addEventListener('click', function(){
    //creo variabile per definire il valore (stringa scritta) dell'input
    const inputValue = inputElement.value;
    console.log(inputValue);
    //scrivo il risultato in paginas
    resultElement.innerText = `LA PAROLA ${inputValue} ${isPalidroma(inputValue)}`;
    console.log(isPalidroma(inputValue));
})


//aggancio il bottone 'CANCELLA' all'evento
resetElement.addEventListener('click', function(){
    inputElement.value = '';
})




//creo funzione 
function isPalidroma(word) {

    let wordReverse = '';
    //creo ciclo per contare a ritroso le lettere tante quanto sono nella parola partendo dall'ultima
    for (let i = word.length - 1; i >= 0; i--) {
        //aggiungo tutte le lettere partendo dalla fine alla variabile wordReverse
        wordReverse += word[i];
    }
    
    //condizione
    //se la parola è uguale alla parola inversa
    if (word === wordReverse) {
        return  "E' PALIDROMA"; //è vero
    } else { //altrimenti è falso
        return "NON E' PALIDROMA";
    }
}




