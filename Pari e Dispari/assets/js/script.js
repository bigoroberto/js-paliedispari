/* **Pari e Dispari**
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

var pariDispari = prompt("scegli tra pari e dispari");
var numeroUtente = parseInt(prompt("scegli un numero da 1 a 5"));
var numeroCpu = random(1,5);



console.log(pariDispari);
console.log(numeroUtente);
console.log(numeroCpu);
console.log(somma(numeroUtente , numeroCpu));

//creo una funzione per generare un numero randon per il pc ed utilizzo una variabile astratta che indichi un numero minimo e massimo

function random(min , max){
  var numeroRdm = Math.floor(Math.random() * ((max + 1) - min)) + min;
  return numeroRdm;
}

function somma (n1 , n2){
  var sun = n1 + n2;
  if(sun % 2 === 0){
    return sun + " questa somma di numeri è pari"
  }else{
    return sun + " questa somma di numeri è dispari"
  }
}

function winner (p1 , p2){
  var vittoria = 
}