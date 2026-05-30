//Prima Versione

// let scelta = 0;

// console.log("DISTRIBUTORE AUTOMATICO");

// while (scelta !== 1 && scelta !== 2 && scelta !== 3) {
    
//     scelta = Number(prompt("Seleziona una bevanda:\n1 - Acqua\n2 - Coca Cola\n3 - Birra"));

//     switch (scelta) {
//         case 1:
//             console.log("Hai scelto l’Acqua");
//             break;
            
//         case 2:
//             console.log("Hai scelto la Coca Cola");
//             break;
            
//         case 3:
//             console.log("Hai scelto la Birra");
//             break;
            
//         default:
//             console.log("Scelta non valida! Inserisci 1, 2 o 3.");
//             break;
//     }
// }


//Versione Extra

let ordineCompletato = false;

console.log("DISTRIBUTORE AUTOMATICO");

while (ordineCompletato === false) {
    
    let inputUtente = prompt("Seleziona una bevanda inserendo il numero o il nome:\n1 - Acqua\n2 - Coca Cola\n3 - Birra");

    if (inputUtente === null) {
        console.log("Hai annullato l'operazione. Arrivederci!");
        break; 
    }

    switch (inputUtente) {
        
        case "1":
        case "Acqua":
            console.log("Hai scelto l’Acqua");
            ordineCompletato = true;
            break;
            
        case "2":
        case "Coca Cola":
            console.log("Hai scelto la Coca Cola");
            ordineCompletato = true;
            break;
            
        case "3":
        case "Birra":
            console.log("Hai scelto la Birra");
            ordineCompletato = true;
            break;
            
        default:
            console.log("Scelta non valida! Fai attenzione a scrivere il nome esatto senza spazi inutili.");
            break;
    }
}
