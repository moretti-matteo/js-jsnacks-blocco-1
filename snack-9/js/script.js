// Crea due array che hanno un numero di elementi diversi.  Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.

//VERSIONE CON CICLO FOR
const arrayLungo = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const arrayCorto = [1, 2, 3, 4, 5];

for (let i = 0; (i < arrayLungo.length) && (arrayCorto.length < arrayLungo.length); i++) {

    const random = Math.floor(Math.random() * 100) + 1;

    arrayCorto.push(random);

}

console.log(arrayCorto);


//VERSIONE CON CICLO WHILE
const arrayLungo2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const arrayCorto2 = [1, 2, 3, 4, 5];

while(arrayCorto2.length < arrayLungo2.length){
    const random = Math.floor(Math.random() * 100) + 1;

    arrayCorto2.push(random);
}

console.log(arrayCorto2);