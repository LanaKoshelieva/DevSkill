//Scrivere un programma che sceglie numero massimo e numero minimo in un vettore di dimensione 10 ( valori scelti a piacimento)

function scegliMinore(array:number []):number {
    
    let min = array[0];

    for (let i=1; i<array.lenght; i++) {
        
        if (array[i] < min )
        {
            min = array[i];
        } 
    }

    return min;
}

function scegliMaggiore(array:number []):number {
    
    let max = array[0];

    for (let i=1; i<array.lenght; i++) {
        
        if (array[i] > max )
        {
            max = array[i];
        } 
    }

    return max;
}

let array:number [] = [13, 7, 21, 11, 3, 32, 1, 8, 9, 24];
let min = scegliMinore(array);
let max = scegliMaggiore(array);

console.log("Il numero maggiore dell'Array è: " + max);
console.log("Il numero minore dell'Array è: " + min);

-------------------------------------------------------------------

// Scrivere un programma che calcoli il massimo in un vettore di dimensione 10 (valori presi da input)

let lista:number[] = []
let domanda:number = prompt ("Quanti numeri vuoi scegliere?");

for (let i = 0; i < domanda; i++ ) {
    let input:number = prompt ("Inscerisci il numero " + (i+1));
    lista.push(+input);
}

console.log(lista);

function trovaMaggiore(array:number[]):number {
    let numero = array[0];
    for (let i=0;  i < array.length; i++ ) {
        if (array[i] > numero) {
            numero = array [i];
        } 
    }
    return numero;
}

console.log(trovaMaggiore(lista))

--------------------------------------------------------------------

//Scrivere un programma che prenda in input una sequenza di numeri, e quando l'utente inserisce -1 termini restituendo il valore piu` grande inserito

let numero:number = +prompt ("Inserisci qualsiasi numero \n(-1 per tirminare)");
let max:number = numero;

while (numero != -1) {
    if (numero > max) {
        max = numero;        
    }
    numero = +prompt ("Inserisci qualsiasi numero \n(-1 per tirminare)");
}

console.log("Il numero maggiore è: " + max)

--------------------------------------------------------------------------------

//Scrivere un programma che prenda in input una sequenza di numeri, e quando l'utente inserisce -1 termini restituendo il valore piu` piccolo inserito

let numero:number = +prompt ("Inserisci qualsiasi numero \n(-1 per tirminare)");
let min:number = numero;

while (numero != -1) {
    if (numero < min) {
        min = numero;        
    }
    numero = +prompt ("Inserisci qualsiasi numero \n(-1 per tirminare)");
}

console.log("Il numero maggiore è: " + min)

----------------------------------------------------------------------

// Scrivere un programma prenda una sequenza di numeri, terminata -1. Restituisca il numero con il piu` alto numero di occorrenze .
 

let numero:number = +prompt ("Inserisci un numero per iniziare");
let array:number[] = [];

while (numero != -1) {    
    array.push(numero);
    numero = +prompt ("Inderisci un altro numero per procedere \n(-1 per terminare)");
}

console.log(array)

let tasca:number = -1;
let max:number = -1;

for (let valore=0; valore<array.length; valore++){
    let t = array[valore];
    let nt = 0;
    for (let i=0; i<array.length; i++) {
        if (t == array[i]) {
        nt = nt + 1;                 
        }   
    }
    
    if (nt > max) {
        tasca = t;
        max = nt;
    } 
} 

console.log("Il numero che capita più volte è: " +tasca)

//Scrivere un programma restituisca i primi 30 numeri primi.

function sonoprimo(n:number):boolean {    
    for(let i = 2; i<n; i++)
    {
        if(n%i == 0)
        {
            return false;
        }
    }
    return true;
}

let numeri_primi = [];
let numero = 2;

while(numeri_primi.length < 30) { 
   if(sonoprimo(numero))
    {
        numeri_primi.push(numero);
    }
    numero = numero + 1;
}

console.log(numeri_primi);