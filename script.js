//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
/*
  let num1 = prompt("Inserisci il primo numero:")
  num1 = parseInt(num1)
  let num2 = prompt("Inserisci il secondo numero:")
  num2 = parseInt(num2)

  if (num1 > num2) {
    alert("Il numero più grande è " + num1)

  } else {
    alert("Il numero più grande è " + num2)
  }
*/
/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

/*
  let num3 = prompt("Inserisci il numero")

  if (num3 < 5) {
    alert(num3 + " è Tiny")
  } else if (num3 < 10) {
    alert(num3 + " è Small") 
  } else if (num3 < 15) {
    alert(num3 + " è Medium")
  } else if (num3 < 20) {
    alert(num3 + " è Large")
  } else if (num3 >= 20) {
    alert(num3 + " è Huge")
  }
*/

//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/
/*
  for (let x = 0 ; x <= 10 ; x++ ) { 
  if ((x === 3) || (x === 8)) {
  
  continue;
    }
  console.log(x)
}
*/

/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/


  for (let n = 0; n < 15; n++) {
    if (n % 2 === 0) {
    console.log( n + " Pari ")
    } else 
    console.log( n + " Dispari ")
  }


//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/*
  let num5 = 18
  let num6 = 10

  if((num5 === 8 || num6 === 8) || (num5 + num6 === 8 || num5 - num6 === 8)) 
  console.log("Si è verificato uno dei casi")
*/

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/


 let totalShoppingCart = prompt("Inserisci il prezzo:")
 totalShoppingCart = parseInt(totalShoppingCart)
 let totaleSpedizione = 0
 let spedizioneAggiunta = 10

 if (totalShoppingCart > 50) 
    totaleSpedizione = totalShoppingCart
    
 else 
    totaleSpedizione = totalShoppingCart + spedizioneAggiunta
 
 alert("Il totale della spedizione totale è: " + totaleSpedizione)

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/