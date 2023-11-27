/* Pari e Dispari: 
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto. */

// Variabili preimpostate
let scommessa = 0;
let numeroGiocatore = 0;
let numeroComputer = 0;
let somma = 0;


// Giocatore scommette se pari o dispari scegliendo opzione 1 o 2.
scommessa = parseInt(prompt("Inserisci 1 se scommetti su PARI oppure 2 per DISPARI"));
// Output scommessa giocatore
if(scommessa === 1) {
    console.log("Giocatore scommette su PARI");
} else if (scommessa === 2){
    console.log("Giocatore scommette su DISPARI");
} else {
    alert("Refresha la pagina e digita 1 o 2 per giocare!");
}
// Giocatore sceglie un numero da 1 a 5  escommette pari o dispari
numeroGiocatore = parseInt(prompt("Inserisci un numero da 1 a 5"));
console.log("Giocatore ha scelto il numero: " + numeroGiocatore);

// Creo funzione per generare numero random 1 a 5
function numeroComputerRandom_da_1_a_5 (min, max){
    const numRandom1to5 = Math.floor(Math.random() * (max - min)) + min;
    return numRandom1to5;
}

// Comuter sceglie un numero random da 1 a 5
numeroComputerRandom_da_1_a_5(1, 5);
numeroComputer = numeroComputerRandom_da_1_a_5(1, 5);
console.log("Computer ha scelto il numero: " + numeroComputer);

// Sommiamo i 2 numeri
somma = numeroGiocatore + numeroComputer;
console.log("la somma è di: " + somma);

// Creo funzione per capire se il risultato è pari o dispari
function pari_O_Dispari(somma) {
    if(somma % 2 === 0 && scommessa === 1){
        return "Ha vinto il Giocatore!";
    } 
    else if(somma % 2 && scommessa === 2) {
        return "Ha vinto il Giocatore!";
    } 
    else {
        return "Ha vinto il Computer!";
    }
}

// Dichiaro il vincitore
pari_O_Dispari(somma);
console.log(pari_O_Dispari(somma));