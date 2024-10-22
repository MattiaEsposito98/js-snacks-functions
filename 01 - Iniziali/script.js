/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

const firstLetter = (a) => {
  let arrayFirstLetter = []
  for (i = 0; i < names.length; i++) {
    let newEl = names[i].charAt(0)
    arrayFirstLetter.push(newEl);
  }
  return arrayFirstLetter
}


// Invoca la funzione qui e stampa il risultato in console
console.log(firstLetter())


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]