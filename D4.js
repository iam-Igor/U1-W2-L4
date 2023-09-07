/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

function area(n1, n2) {
  if (typeof n1 === "number" && typeof n2 === "number") {
    let result = n1 * n2;
    return result;
  }
}
console.log(area(11, 12));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(n1, n2) {
  if (n1 === n2) {
    return (n1 + n2) * 3;
  } else {
    let result = n1 + n2;
    return result;
  }
}
console.log(crazySum(parseInt(18), parseInt(18)));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(n1) {
  if (n1 > 19) {
    return Math.abs(n1 - 19) * 3;
  } else {
    let result = n1 - 19;

    return result;
  }
}
console.log(crazyDiff(parseInt(21), 19));
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
  if (n > 20 && n < 101) {
    return true;
  } else if (n === 400) {
    return true;
  } else {
    return false;
  }
}
console.log(boundary(parseInt(100)));
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(a) {
  if (a.startsWith("EPICODE")) {
    return a;
  } else {
    return "EPICODE" + a;
  }
}
console.log(epify("EPICODE"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(n3) {
  if (n3 % 3 === 0) {
    return true;
  } else if (n3 % 7 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(check3and7(parseInt(28)));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(EPICODE) {
  return EPICODE.split("").reverse().join("");
}

console.log(reverseString("EPICODE"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

const upperFirst = "milano, napoli, genova";

console.log(upperFirst.slice(0, 1).toUpperCase() + upperFirst.slice(1));
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(ciao) {
  let myString = ciao;

  return myString.slice(1, 3);
}
console.log(cutString("ciao"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(n) {
  const randomArray = [];

  for (let i = 0; i < n; i++) {
    const randomNumber = Math.floor(Math.random() * 11);
    randomArray.push(randomNumber);

    return randomArray;
  }
}
console.log(giveMeRandom(1));
/* SCRIVI QUI LA TUA RISPOSTA */
