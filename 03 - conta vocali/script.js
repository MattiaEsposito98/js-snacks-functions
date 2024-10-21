/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript'
let res= ''
let count = ''


// Dichiara la funzione qui.
const countVowels = (vowels) => {

  for (i = 0; i < word.length; i++) {
    let newEl = word[i]
    console.log (newEl)
  
    if (newEl === "a" || newEl === "e" || newEl === "i" || newEl === "o" || newEl === "u") {
      count += newEl
      res += newEl + ','
    }
  }
  return res
}

// Invoca la funzione qui e stampa il risultato in console
console.log (countVowels())
console.log (count.length)


//Risultato atteso se si passa 'javascript': 3 (a, a, i)