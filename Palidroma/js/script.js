/* 
Palidroma:
Chiedere all’utente di inserire una parola.
Creare una funzione per capire se la parola inserita è palindroma. */

// Variabili Preimpostate
let parolaScelta = "";
let parolaAlContrario = "";

// Inserisci una parola
parolaScelta = prompt("Inserisci una parola in minuscolo");
console.log("La parola scelta è: " + parolaScelta);

// crea funzione per invertire la parola
function invertiParola(parolaScelta){
    let parolaAlContrario = '';
    let i = parolaScelta.length - 1;
    while (i >= 0) {
        parolaAlContrario += parolaScelta[i];
        i--;
    }
  
    return parolaAlContrario;
  }

// definisco la parola al contrario

parolaAlContrario = invertiParola(parolaScelta);
console.log("La parola al contrario è: " + parolaAlContrario);

// output Risultato

if(parolaScelta === parolaAlContrario){
    console.log("La parola è palindroma!");
  } else {
    console.log("La parola non è palindroma!");
}
