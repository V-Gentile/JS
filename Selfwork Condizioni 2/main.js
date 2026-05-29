let temp = Number(prompt("Che temperatura c'è fuori?"));

console.log("RISULTATO CON IF/ELSE:");

if (temp < -10) {
    console.log("copriti…ancora ti raffreddi");
} else if (temp < 0) {
    console.log("non è tanto il freddo quanto l’umidità’");
} else if (temp < 20) {
    console.log("non ci sono più le mezze stagioni");
} else if (temp < 30) {
    console.log("mi dia una peroni sudata");
} else if (temp >= 30) {
    console.log("lu mare, lu sole, lu ientu");
} else {
    console.log("Inserisci un valore numerico valido!");
}


console.log("RISULTATO CON SWITCH:");

switch (true) {
    case (temp < -10):
        console.log("copriti…ancora ti raffreddi");
        break;
        
    case (temp < 0):
        console.log("non è tanto il freddo quanto l’umidità’");
        break;
        
    case (temp < 20):
        console.log("non ci sono più le mezze stagioni");
        break;
        
    case (temp < 30):
        console.log("mi dia una peroni sudata");
        break;
        
    case (temp >= 30):
        console.log("lu mare, lu sole, lu ientu");
        break;
        
    default:
        console.log("Inserisci un valore numerico valido!");
        break;
}
