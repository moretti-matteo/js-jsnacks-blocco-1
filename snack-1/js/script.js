// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

const num1 = prompt("Scrivi il primo numero");
const num2 = prompt("Scrivi il secondo numero");

if (num1 > num2) {
    console.log(num1);
} else if (num1 < num2) {
    console.log(num2);
} else {
    console.log("i due numeri sono uguali");
}