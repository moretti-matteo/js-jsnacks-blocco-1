// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

parola1 = prompt("scrivi la prima parola");
parola2 = prompt("scrivi la seconda parola");

if (parola1.length > parola2.length) {
    console.log(`la parola più corta è = ${parola2}`);
    console.log(`la parola più lunga è = ${parola1}`);

} else if (parola1.length < parola2.length) {
    console.log(`la parola più corta è = ${parola1}`);
    console.log(`la parola più lunga è = ${parola2}`);
    
} else {
    console.log(`Le parole: ${parola1} e ${parola2} sono lunghe uguali`);
}