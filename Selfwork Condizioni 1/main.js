let v = 20;

console.log("RISULTATO CON IF/ELSE:");

if (v < 18) {
    console.log("insufficiente");
} else if (v >= 18 && v < 21) {
    console.log("sufficiente");
} else if (v >= 21 && v < 24) {
    console.log("buono");
} else if (v >= 24 && v < 27) {
    console.log("distinto");
} else if (v >= 27 && v <= 29) {
    console.log("ottimo");
} else if (v === 30) {
    console.log("eccellente");
} else {
    // È sempre buona pratica aggiungere un'ultima opzione di "sicurezza"
    console.log("Voto non valido <0(inserisci un numero tra 0 e 30)"); 
}


console.log("RISULTATO CON SWITCH:");

switch (true) {
    case (v < 18):
        console.log("insufficiente");
        break; // Il break è fondamentale, dice al programma di fermarsi e uscire dallo switch!
        
    case (v >= 18 && v < 21):
        console.log("sufficiente");
        break;
        
    case (v >= 21 && v < 24):
        console.log("buono");
        break;
        
    case (v >= 24 && v < 27):
        console.log("distinto");
        break;
        
    case (v >= 27 && v <= 29):
        console.log("ottimo");
        break;
        
    case (v === 30):
        console.log("eccellente");
        break;
        
    default:
        // Il default fa la stessa cosa dell'ultimo "else", scatta se nessun caso è valido
        console.log("Voto non valido (inserisci un numero tra 0 e 30)");
        break;
}
