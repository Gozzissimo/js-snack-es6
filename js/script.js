// Scrivere una funzione(e lanciarla) che accetti tre argomenti, un array e due numeri(a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.

const numbers = [
    1,
    2,
    3,
    5,
    7,
    9,
    22,
    44
]

function newArray(array, num1, num2) {
    let Arr = array.filter((element, index) => {
        return index > num1 && index < num2;
    });
    return Arr
}

let test = newArray(numbers, 2, 22);

console.log(test);