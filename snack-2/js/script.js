parola1 = prompt("scrivi la prima parola");
parola2 = prompt("scrivi la seconda parola");

if (parola1.length > parola2.length) {
    console.log(`la parola più lunga è = ${parola1}`);

} else if (parola1.length < parola2.length) {
    console.log(`la parola più lunga è = ${parola2}`);

} else {
    console.log(`Le parole: ${parola1} e ${parola2} sono lunghe uguali`);
}