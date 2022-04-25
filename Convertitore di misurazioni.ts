function celsiusToFahrenheit (gradiC:number):number {
    return gradiC * 9 / 5 + 32;
}

function fahrenheitToCelsius (gradiF:number):number {
   return (gradiF-32) * 5 / 9;  
}

function milesToKilometers (distanzaM:number):number {
    return distanzaM * 1.60934;
}

function kilometersToMiles (distanzaKm:number):number {
    return distanzaKm / 1.60934;
}



function convertiTemp(misuraOr:number, unitaOr:string):string {    
    if (unitaOr.toUpperCase() == "C") {
        return "Il valore convertito è: " + celsiusToFahrenheit(misuraOr) + "F";
    } else if (unitaOr.toUpperCase() == "F") {
        return "Il valore convertito è: " + fahrenheitToCelsius(misuraOr) + "C";
    }

    return "I valori della temperatura non sono corretti"; 
}


function convertiDist(misuraOr:number, unitaOr:string):string {
    if (unitaOr.toUpperCase() == "KM") {
        return "Il valore convertito è: " + kilometersToMiles(misuraOr) + "Miles";
    } else if (unitaOr.toUpperCase() == "MILES" || unitaOr.toUpperCase() == "MI") {
        return "Il valore convertito è: " + milesToKilometers(misuraOr) + "Km";
    } 
    
    return "I valori della distanza non sono corretti"; 
}

function misuraDaConvertire(misura:number):string {
    
    let unitaOr:string = prompt ("Inserisci unità di misurazione originale");
    let misuraOr:number = prompt ("Inserisci misurazione originale") ;
    
    
    if ( misura == 1) {
        return convertiTemp(misuraOr, unitaOr);     

    } else if ( misura == 2) {
        return convertiDist(misuraOr, unitaOr);  
    }
	
	return "Il risultato non puo essere calcolato";
}


let input:number = prompt ("Che tipo di misurazione vuoi convertire? \nPer gradi inserisci 1, per distanza - 2");

console.log(misuraDaConvertire(input));


