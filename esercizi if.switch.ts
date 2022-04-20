Esercizio 1

let numero:number = prompt ("Inserisci un numero");

if (numero > 0) {
    console.log("Il numero inserito è Positivo");
} else if (numero < 0) {
    console.log("Il numero inserito è Negativo");
} else {
    console.log("Hai inserito lo zero")
}
-------------------------------------------------------------------
Esercizio 2

var 1
let numero:number = prompt ("Inserisci qualsiasi numero tranne 0");

if (numero %2 == 0) {
    console.log("Il numero e` pari");
} else {
    console.log("Il numero e` dispari")
}

var 2
let numero:number = prompt ("Inserisci qualsiasi numero tranne 0");

switch (numero %2) {
    case 0: {console.log("Il numero e` pari"); break};
    default: {
	console.log("Il numero e` dispari"); break};
}
-------------------------------------------------------------------
Esercizio 3

let numero1:number = prompt ("Inserisci un numero")*1;
let numero2:number = prompt ("Inserisci un altro numero")*1;
let numero3:number = prompt ("Inserisci qualsiasi numero diverso dai primi due")*1;

if (numero1 > numero2) {
    if (numero1 > numero3) {
        console.log("Il numero più grande è:" +numero1);
    }
} else if (numero2 > numero3) {
    console.log("Il numero più grande è:" +numero2);
    }
else {console.log("Il numero più grande è:" +numero3);
    }
-------------------------------------------------------------------
Esercizio 4

var 1
let annoNascita:number = prompt ("Inserisci l'anno di nascita");
let anno:number = 2022;
const eta:number = (anno - annoNascita);

if (eta <=30) {
    console.log("La tua età è:" +eta);
} else {
    console.log("Chi se ne frega dell'età")
}

var 2
let annoNascita:number = prompt ("Inserisci l'anno di nascita");
let anno:number = 2022;
const eta:number = (anno - annoNascita);

if (eta <=30) {
    alert ("La tua età è: " +eta + "\nGoditi la vita");
} else{
    alert ("La tua età è: " +eta + "\nMuoviti la nonna vuole dei nipoti")
} 
-------------------------------------------------------------------
Esercizio 5

let anno:number = prompt ("Inserisci qualsiasi anno")*1;

if (anno%400 ==0) {
    console.log("L'anno e` bisestile");
} else if (anno%4 == 0){
    if (anno%100 != 0) {
        console.log("L'anno e` bisestile");
    }
} else {
    console.log("L'anno non e` bisestile");
}