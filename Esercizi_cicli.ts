ESERCIZI 27.04

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

----------------------------------------------------------------------

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

----------------------------------------------------------------------


ESERCIZI 05.05

-----------------------------Esercizio 1-----------------------------------------

//Scrivere un programma che popoli due array A , B di dimensione N identica ed arbitraria ( min 5 , Max 10 ) i cui valori sono presi in input.
//Successivamente creare un terzo array C di dimensione N dove nelle posizioni pari verranno inseriti i valori dell'array A e in quelle dispari i valori dell'array B

let numeriA = +prompt ("Inserisci un numero per popolare array A");
let A:number[] = [];
A.push(numeriA);

while (A.length != 7) {
    A.push(numeriA);
    numeriA = +prompt ("Inderisci un altro numero");
}

let numeriB = +prompt ("Inserisci un numero per popolare array B");
let B:number[] = [];
B.push(numeriB);

while (B.length != 7) {
    B.push(numeriB);
    numeriB = +prompt ("Inderisci un altro numero");
}

let C = riempiC(A, B);

console.log("A: ", + A)
console.log("B: ", + B)

function riempiC (A:number[], B:number[]):number[] {
	let C:number[] = [];
	for( let i = 0; i < (A.length) ; i++ ){
		if(i%2==0)
		C.push (A[i]);
		else
		C.push (B[i]);
	}
    return C;
}
console.log("C: ", + C)

----------------------------------------------------------------

let domanda:number = +prompt("Inserisci la dimansione degli Array \nMin 5 Max 10 ")

if (domanda<5 || domanda>10) {
    alert ("I valori devono essere compresi da 5 a 10");
} else {
    let A:number[] = [];
    let B:number[] = [];
    let C:number[] = [];

    for (let i=0; i < domanda; i++){
        let input: number = +prompt ("Inscerisci il numero " + (i+1) + " di A");
        A[i] = input;
    }
    console.log("A: ", + A)
    
    for (let i=0; i < domanda; i++){
        let input: number = +prompt ("Inscerisci il numero " + (i+1) + " di B");
        B[i] = input;
    }
    console.log("B: ", + B)

    for (let i=0; i < domanda; i++){
        if(i%2==0) {
            C[i]= A[i];
        } else {
            C[i] = B[i];
		}
    }
console.log("C: ", + C);
}

-----------------------------Esercizio 2-----------------------------------------

// Prendere in input una sequenza di numeri terminata da -1 e stampare a schermo la lunghezza della sequenza ripetuta piu` lunga.
// Una sequenza e` la successione di numeri uguali e consecutiva senza interruzioni di almeno lunghezza 2
// Se esistono piu` sequenze con lo stesso valore, stampare la prima di esse

let input:number = +prompt ("Inserisci un numero");
let array:number[] = [];
array.push(input);

while (input != -1) {
    input = +prompt ("Inserisci un altro numero \n -1 per terminare");   
    array.push(input);
}

console.log (array)

let tasca = 1; 
let valore; 
let tascaMax = 1;

for (let i=1; i< array.length; i++) {
    if (array[i] == array[i-1]) {
        tasca = tasca +1; 
        if (tasca > tascaMax){
        valore = array[i];
        tascaMax = tasca;
        } 
    }else 
    {
        tasca = 1;
    }
}
if (tascaMax <= 2) {
    console.log("La sequenza non è valida")
} else {
    console.log("Numero " + valore + " con la lunghezza " + tascaMax)
}

-----------------------------Esercizio 3-----------------------------------------

// Scrivere un programma che popoli due array A , B di dimensione N,M arbitraria ( min 5 , Max 10 ) i cui valori sono presi in input.
// Successivamente creare un terzo array C di dimensione N+M dove nelle posizioni da 0 a N inserite i valori A e nelle posizioni da N+1 a M inserite i valori di B al contrario

let A:number[] = [];
let domandaA:number = +prompt ("Quanti numeri vuoi scegliere per A?");

let B:number[] = [];
let domandaB:number = +prompt ("Quanti numeri vuoi scegliere per B?");


if ((domandaA >= 5 && domandaB >= 5) && (domandaA <=10 && domandaB <=10)) {
    let C:number[] = [];

    for (let i = 0; i < domandaA; i++ ) {
        let input:number = +prompt ("Inscerisci il numero " + (i+1) + " di A");
        A.push(input);
    }

    for (let i = 0; i < domandaB; i++ ) {
        let input:number = +prompt ("Inscerisci il numero " + (i+1) + " di B");
        B.push(input);
    }     

      console.log(A);
      console.log(B);
    
    for (let i=0; i < A.length; i++) {
        C.push(A[i]);
    }

    for (let i=B.length-1; i>=0; i--) {
        C.push(B[i]);
    }

    console.log(C);

} else {
    alert ("I valori devono essere compresi da 5 a 10");
}

-----------------------------Esercizio 3n +1 -----------------------------------------

let N1:number = numero();
let N2:number = numero();

function numero():number 
{
    return +prompt("Inserisci un numero");
}

function calcolaGiro (numero:number):number 
{
    let count:number = 1; 
    while (numero != 1) 
    {
        if (numero %2 == 0) 
        {
            numero = numero /2;
        } 
        else 
        {
            numero = numero*3 +1;
        } 
        count ++;
    } 
    return count;

} 

let risultatoMax = 0;

if (N1 > N2) 
{
  alert ("Il primo numero deve essere minore del secondo")
} 
else {
  for (let i=N1; i<=N2; i++) 
  {
      let risultato:number = calcolaGiro(i);
      if (risultato > risultatoMax) 
      { 
          risultatoMax = risultato;
      }
  }
}
console.log(N1, N2, risultatoMax )