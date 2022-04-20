let pesoLi:number = prompt ("Inserisci il tuo peso in libbre");
let altezzaP:number = prompt ("Inserisci la tua altezza in piedi");
  
let pesoKg:number = pesoLi / 2.20462;
let altezzaM:number = altezzaP / 3.28084;

altezzaM = altezzaM / 100;

let BMI:number = pesoKg/(altezzaM * altezzaM);

if (BMI < 16.5) {
    console.log("Sottopeso severo");
} else if (BMI >= 16.5 && BMI <= 18.4) {
    console.log("Sottopeso");
} else if (BMI >= 18.5 && BMI <= 24.9) {
    console.log("Peso normale");
} else if (BMI >= 25 && BMI <= 30) {
    console.log("Sovrappeso");
} else if (BMI >= 30.1 && BMI <= 34.9) {
    console.log("Obesità primo grado");
} else if (BMI >= 35 && BMI < 40) {
    console.log("Obesità secondo grado");
} else if (BMI >= 40) {
    console.log("Obesità terzo grado");
} else {
    console.log ("Errore nei dati inseriti");
}


let risposta:string = prompt ("Vuoi effettuare una misurazione più precisa? (inserisci si o no)");
 if (risposta == "si") {

     let polso:number = prompt ("Inserisci la circonferenza del polso");
     let sesso:string = prompt ("Inserisci la circonferenza del sesso (inserendo M o F)");

    
    if (polso > 16 && sesso == "F" || polso > 18 && sesso == "M" ) {
         console.log("Costituzione Robusto");
    } else if (polso >= 15 && sesso == "F" || polso >= 17 && sesso == "M" ) {
         console.log("Costituzione Normale")     
    } else {
        console.log("Costituzione Esile")
    }

 } console.log("Grazie. Buona giornata!");