function celsiusToFahrenhait(gradiC:number):number {
    return (gradiC*1.8) + 32;
}
function fahrenhaitToCelsius(gradiF:number):number {
    return (gradiF -32) * (1.8);
}
function kilometerToMile(distanzaK:number):number {
    return distanzaK * 0.6214;
}
function mileToKilometer(distanzaM:number):number {
    return distanzaM * 1.6090;;
}

function misuraDaConvertire(misura:number):string {
    let unitaOr:string = prompt ("Inserisci unità di misurazione originale");
    let misuraOr:number = prompt ("Inserisci misurazione originale") ;
    
    
    if ( misura == 1) {
        if (unitaOr == "c" || unitaOr == "C") {
            return "Il valore convertito è: " + celsiusToFahrenhait(misuraOr) + "F";
        } else 
        if (unitaOr == "f" || unitaOr == "F") {
            return "Il valore convertito è: " + fahrenhaitToCelsius(misuraOr) + "C";
        } 
    } else 
    
    if ( misura == 2) {
        if (unitaOr == "km" || unitaOr == "KM" || unitaOr == "Km") {
            return "Il valore convertito è: " + kilometerToMile(misuraOr) + "Milles";
        } else 
        if (unitaOr == "Miles" || unitaOr == "MILLES" || unitaOr == "milles") {
            return "Il valore convertito è: " + mileToKilometer(misuraOr) + "Km";
        }
    }
}

let input:number = prompt ("Che tipo di misurazione vuoi convertire? \nPer gradi inserisci 1, per distanza - 2");
console.log(misuraDaConvertire(input));
