// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

const array = [1,2,3,4,5,6,7,8,9];

let somma = 0;

for(let k = 0 ; k < array.length ; k++){
    
    if(k % 2 !== 0){
        somma += array[k];
    }

}

console.log(somma);