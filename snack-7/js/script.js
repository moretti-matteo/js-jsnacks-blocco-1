// Generatore di "nomi cognomi" casuali: il Grande Gatsby ha  una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.

const listaNomi = ["Matteo", "Giulia", "Marco", "Viola"];
const listaCognomi = ["Rossi", "Moretti", "Ferrari", "Esposito"];
const listaFalsa = [];

const randomNumber = Math.floor(Math.random() * listaNomi.length);

for (let i = 0; i < listaNomi.length; i++) {
    listaFalsa.push(`${listaNomi[i]} ${listaCognomi[i]}`);
}

console.log(listaFalsa);