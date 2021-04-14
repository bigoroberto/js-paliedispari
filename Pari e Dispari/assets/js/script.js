/* **Pari e Dispari**
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

var pariDispari = prompt("scegli tra pari e dispari");
console.log("La tua scelta è: " + pariDispari);
var numeroUtente = parseInt(prompt("scegli un numero da 1 a 5"));
console.log("Il tuo numero è: " + numeroUtente);
var numeroCpu = random(1,5);
console.log("Il numero della CPU è: " + numeroCpu);
var risultato = somma(numeroUtente,numeroCpu);
console.log("Il totale è: " + somma(numeroUtente,numeroCpu));


console.log(winner(numeroUtente , numeroCpu));






//creo una funzione per generare un numero randon per il pc ed utilizzo una variabile astratta che indichi un numero minimo e massimo

function random(min , max){
  var numeroRdm = Math.floor(Math.random() * ((max + 1) - min)) + min;
  return numeroRdm;
}

function somma (n1 , n2){
  var sun = n1 + n2;
  if(sun % 2 === 0){
    return sun;
  }else{
    return sun;
  }
}

function winner (scelta, totale){
  if(totale % 2 === 0 && scelta == "pari"){
    return " HAI VINTO"
  }else if(totale % 2 !== 0 && scelta == "dispari"){
    return " HAI VINTO"  
  }else{
    return "HAI PERSO"
  }
}