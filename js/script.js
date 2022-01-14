console.log('js ok');

/* 
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

 

const userWord = prompt('inserisci parola').trim();

console.log(isPalidroma(userWord));

//creo funzione 
function isPalidroma(word){

    let wordReverse = '';
    //creo ciclo per contare a ritroso le lettere tante quanto sono nella parola partendo dall'ultima
    for (let i = word.length - 1; i >= 0; i--) {
        //aggiungo tutte le lettere partendo dalla fine alla variabile wordReverse
        wordReverse += word[i];
    }
    
    //condizione
    //se la parola è uguale alla parola inversa
    if(word === wordReverse){
        return true; //è vero
    }else{ //altrimenti è falso
        return false;
    }
}
    
