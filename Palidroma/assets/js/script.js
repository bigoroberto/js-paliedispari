/*Palidroma*/

//Chiedo una parola all'utente
var parola_utemte = prompt("inserisci un parola");
console.log(palindroma(parola))


//str è una variante astratta da usare solo nella funzione
function palindroma (str) {

  //split scompone una stringa in un array quindi se la parola è madam con split diventa un var array = [m,a,d,a,m,] no caratteri ma array di piccole stringhe
  //reverse legge al contario l'array creato da split
  // join trasforma l'array al contrario di nuovo in una stringa
  if(str === str.split('').reverse().join('')){
    return str + " questa parola è palindroma"
  }else{
    return str + " questa parola non è palindroma"
  }
}