let sommaDispari = 0;
let conteggioDispari = 0;

console.log("--- NUMERI PARI ---");

for (let i = 1; i <= 20; i++) {
    

    if (i % 2 === 0) {
        console.log(i);
    } else {

        sommaDispari = sommaDispari + i;
        conteggioDispari++;
    }
}

let mediaDispari = sommaDispari / conteggioDispari;

console.log("--- MEDIA NUMERI DISPARI ---");
console.log(`La media di tutti i numeri dispari da 1 a 20 è: ${mediaDispari}`);
