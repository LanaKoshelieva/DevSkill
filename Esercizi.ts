Esercizio 1 Positivo o Negativo

let numero:number = prompt ("Inserisci un numero");

if (numero > 0) {
    console.log("Il numero inserito è Positivo");
} else if (numero < 0) {
    console.log("Il numero inserito è Negativo");
} else {
    console.log("Hai inserito lo zero")
}

----------Funzione------------------

function isPositivo (numero:number):boolean {
    if (numero > 0) {
        return true;
    } else {
        return false;
    }
}

let numero:number = prompt ("Inserisci un numero");
console.log(isPositivo(numero));
-------------------------------------------------------------------
Esercizio 2 Pari o Dispari

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
----------Funzione------------------

function isPari(numero:number):boolean {
    if (numero %2 == 0) {
        return true;
    } else {
        return false;
    }
}

let numero:number = prompt ("Inserisci qualsiasi numero tranne 0");
console.log(isPari(numero))
-------------------------------------------------------------------
Esercizio 3 Numero Maggiore

let numero1:number = prompt ("Inserisci un numero")*1;
let numero2:number = prompt ("Inserisci un altro numero")*1;
let numero3:number = prompt ("Inserisci qualsiasi numero diverso dai primi due")*1;

if (numero1 > numero2) {
    if (numero1 > numero3) {
        console.log("Il numero più grande è:" +numero1);
    } else 
	if (numero2 > numero3) {
    console.log("Il numero più grande è:" +numero2);
    }
else {console.log("Il numero più grande è:" +numero3);
    }

----------Funzione------------------

function scegliMaggiore (numero1:number, numero2:number, numero3:number):number {
    
        if (numero1 > numero2 && numero1 > numero3) {
            return numero1;
        }
        if (numero2 > numero1 && numero2 > numero3) {
            return numero2;
        }
        if (numero3 > numero2 && numero3 > numero1) {
            return numero3;
        }
}

let numero1:number = prompt ("Inserisci un numero");
let numero2:number = prompt ("Inserisci un altro numero");
let numero3:number = prompt ("Inserisci qualsiasi numero diverso dai primi due");

console.log("Il numero maggiore e' numero: " + scegliMaggiore(numero1, numero2, numero3));

----------Vettori------------------

function scegliMaggiore (numero1:number, numero2:number, numero3:number):number {
    
        if (numero1 > numero2 && numero1 > numero3) {
            return numero1;
        }
        if (numero2 > numero1 && numero2 > numero3) {
            return numero2;
        }
        if (numero3 > numero2 && numero3 > numero1) {
            return numero3;
        }
}

let maggiore:number[] = [];
maggiore.push(22)
maggiore.push(17)
maggiore.push(18)

console.log("Il numero maggiore è: " +scegliMaggiore(maggiore[0], maggiore[1], maggiore[2]))
-------------------------------------------------------------------
Esercizio 4 Eta della persona

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

----------Funzione------------------

function calcolaEta (annoNascita:number):number {
    let eta:number = 2022 - annoNascita;
    return eta;
}

let annoNascita:number = prompt("Inserisci l'anno di nascita");
let etaUtente = calcolaEta(annoNascita);
console.log(etaUtente);
-------------------------------------------------------------------
Esercizio 5 Anno Bisestile 

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

----------Funzione------------------

function isBisestile(anno:number):boolean {
    if ( anno%400 == 0 || anno%4 ==0 && anno%100 !=100) {
    return true;
    } else {
        return false;
    }
}

let anno:number = prompt ("Inserisci qualsiasi anno");
console.log(isBisestile(anno));