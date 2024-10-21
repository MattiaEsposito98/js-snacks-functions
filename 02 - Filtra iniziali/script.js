/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
let newArray = []
let word = prompt("Inserisci la lettera iniziale della parola")


// Dichiara la funzione qui.
const findname = (a) => {

  for (i = 0; i < names.length; i++) {
      let newEl = names[i].charAt(0)

      if (word === newEl){
        newArray.push(names[i])
      }       
    }
  return newArray
}

// Invoca la funzione qui e stampa il risultato in console
console.log (findname())



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]