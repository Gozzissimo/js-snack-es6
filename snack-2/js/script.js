// Partendo da questo array e aggiungiamo a tutti gli elementi la proprieta age aggiungendo un numero casuale da 3 a 50.

const arrayObj = [
    { 
        name: "Poppy", 
        type: "tshirt",
        color: "red"
    },
    {
        name: "Jumping",
        type: "occhiali",
        color: "blue"
    },
    {
        name: "CrissCross",
        type: "scarpe",
        color: "black"
    },
    {
        name: "Jenny",
        type: "borsa",
        color: "pink"
    },
];

// let nameKey = 'age';
console.log(arrayObj);

arrayObj.forEach((element) => {
    // element = {[namekey]: randominteger};
    element.age = getRndInteger(1,50);
});
console.log(arrayObj);


// funzione
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// Poi stampiamo in pagina