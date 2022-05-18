ESERCIZI 27.04

//Scrivere un programma che sceglie numero massimo e numero minimo in un vettore di dimensione 10 ( valori scelti a piacimento)

function scegliMinore(array:number []):number {
    
    let min = array[0];

    for (let i=1; i<array.length; i++) {
        
        if (array[i] < min )
        {
            min = array[i];
        } 
    }
    return min;
}

function scegliMaggiore(array:number []):number {
    
    let max = array[0];

    for (let i=1; i<array.length; i++) {
        
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

-----------------------------------------------------------------Esercizio 1-----------------------------------------

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

-----------------------------------------------------------------Esercizio 2-----------------------------------------

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

-----------------------------------------------------------------Esercizio 3-----------------------------------------

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

-----------------------------------------------------------------Esercizio 3n +1 -----------------------------------------

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

if (N1 > N2 || N1 == N2 || (N1 < 0 || N1 > 10000) || (N2 < 0 || N2 > 10000)) 
{
  alert ("Il primo numero deve essere minore del secondo. \nI numeri non possono essere minori di 0 e maggiori di 10000")
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

-----------------------------------------------------------------Esercizio Ugly numbers -----------------------------------------

function isUgly (n:number):boolean 
{
    while (n != 1) 
    {
        if (n%2 == 0) 
        {
            n = n /2
        } else
        if (n%3 == 0) 
        {
            n = n /3
        } else
        if (n%5 == 0) 
        {
            n = n /5
        } else 
        return false
    } 
    return true;
}

let x = 1;
let contare = 0
while (contare < 1500)
{
    if (isUgly(x) == true) 
    {
        contare = contare+1;
    }
    x = x+1;
}    
console.log("Il 1500-simo UglyNumber è: " +(x-1))

-----------------------------------------------------------------Esercizio-----------------------------------------

// Scrivere un programma che preso in input, la dimensione di un array N e i suoi valori, ordini l'array in ordine crescente / decrescente

MODO 1 

let A:number[] = [];
let volume:number = + prompt ("Quanti numeri vuoi inserire ?");

for (let i=0; i < volume; i++) 
{ 
    let input:number = + prompt ("Inserisci il "+ (i+1) +"-o numero");
    A.push(+input);
}

console.log(volume, A)

function ordinaArray (array:number[], crescente:boolean):void
{ 
    for (let i=0; i< array.length-1; i++) 
    {
        for (let j=i+1; j< array.length; j++ )
        { 
            if (crescente)
            {
                if (array[i] < array[j])
                {   
                    let X = array[i];
                    array[i] = array[j];
                    array[j] = X;
                } 
            }
            else
            {   
                if (array[i] > array[j])
                {
                    let X = array[i];
                    array[i] = array[j];
                    array[j] = X;
                }
            }           
        } 
    }
}

ordinaArray(A,false);
ordinaArray(A,true);
console.log(A)

--------
MODO 2 

let A:number[] = [];
let volume:number = + prompt ("Quanti numeri vuoi inserire ?");

for (let i=0; i < volume; i++) 
{ 
    let input:number = + prompt ("Inserisci il "+ (i+1) +"-o numero");
    A.push(+input);
}

console.log(volume, A)

function ordinaArray (array:number[]):number[]
{ 
    for (let i=0; i< array.length-1; i++) 
    {
        for (let j=i+1; j< array.length; j++ )
        { 
            if (array[i] < array[j])
            {   
                let X = array[i];
                array[i] = array[j];
                array[j] = X;
            } 
        } 
    }
    return array;
}

let crescente:number[] = ordinaArray(A);
let decrescente:number [] = [];

for (let i=crescente.length-1; i>=0; i--)
{
    decrescente.push(crescente[i]);
}

console.log(crescente);
console.log(decrescente);

--------
MODO 3 

let A:number[] = [];
let volume:number = + prompt ("Quanti numeri vuoi inserire ?");

for (let i=0; i < volume; i++) 
{ 
    let input:number = + prompt ("Inserisci il "+ (i+1) +"-o numero");
    A.push(+input);
}

console.log(volume, A)

function ordinaCrescente (array:number[]):number[]
{ 
    for (let i=0; i< array.length-1; i++) 
    {
        for (let j=i+1; j< array.length; j++ )
        { 
            if (array[i] > array[j])
            {   
                let X = array[i];
                array[i] = array[j];
                array[j] = X;
            } 
        } 
    }
    return array;
}

function ordinaDecrescente (array:number[]):number[]
{ 
    for (let i=0; i< array.length-1; i++) 
    {
        for (let j=i+1; j< array.length; j++ )
        { 
            if (array[i] < array[j])
            {   
                let X = array[i];
                array[i] = array[j];
                array[j] = X;
            } 
        } 
    }
    return array;
}

let crescente:number[] = ordinaCrescente(A);
console.log("Cre " +crescente)

let decrescente:number[] = ordinaDecrescente(A);
console.log("DeCre " +decrescente)


-----------------------------------------------------------------Esercizio giocatori di Maradona-----------------------------------------

let cognomi:string[] = [];
let attacco:number[] = [];
let difesa:number[] = [];

for (let i=0; i<10; i++) 
{
    let nome:string = prompt("Inserisci il cognome del " + (i+1) + " giocatore")  
    let lower:string = nome.toLowerCase();
    cognomi.push(lower);
    let votoA:number = +prompt("Inserisci il voto dell'attaco di " + lower)  
    attacco.push(votoA);
    let votoD:number = +prompt("Inserisci il voto della difesa di " + lower)  
    difesa.push(votoD);
}

function scambia(arrayA:number[],i:number,j:number)
{
    let temp = arrayA[i];
    arrayA[i] = arrayA[j];
    arrayA[j] = temp;
}

function ordinaDecrescente (nomi:string[], ordinatore:number[], ordinato:number[]):void
{ 
    for (let i=0; i< ordinatore.length-1; i++) 
    {
        for (let j=i+1; j< ordinatore.length; j++ )
        { 
            if (ordinatore[i] < ordinatore[j])
            {   
                scambia(ordinatore,i,j);
                scambia(ordinato,i,j);
                scambia(nomi,i,j);
            } 
            else if (ordinatore[i] == ordinatore[j] && ordinato[i] > ordinato[j])
            {   
                scambia(ordinatore,i,j);
                scambia(ordinato,i,j);
                scambia(nomi,i,j);
            }
            else if (ordinatore[i] == ordinatore[j] && ordinato[i] == ordinato[j] && nomi[i] > nomi[j])
            {   
                scambia(ordinatore,i,j);
                scambia(ordinato,i,j);
                scambia(nomi,i,j);
            }
        } 
    }
}

ordinaDecrescente(cognomi, attacco, difesa);
console.log(cognomi, attacco, difesa)

let nomiAttaccanti:string[] = [];
let nomiDifensori:string[] = [];

for (let i=0; i<difesa.length; i++) 
{
    if(i<difesa.length/2)
    {
        nomiAttaccanti.push(cognomi[i])
    }
    else
    {
        nomiDifensori.push(cognomi[i])
    }
}

console.log(nomiAttaccanti)
console.log(nomiDifensori)

function ordinaCrescente (array:string[])
{ 
    for (let i=0; i< array.length-1; i++) 
    {
        for (let j=i+1; j< array.length; j++ )
        { 
            if (array[i] > array[j])
            {   
               scambia(array,i,j);
            } 
        } 
    }
}

ordinaCrescente(nomiAttaccanti)
console.log(nomiAttaccanti)

ordinaCrescente(nomiDifensori)
console.log(nomiDifensori)

-----------------------------------------------------------------Esercizio Mario che salva i muri-----------------------------------------------------------------------------

let quantita:number = +prompt("Quanti quantita deve saltare Mario? \nMassimo numero di salti - 50");
let array:number[] = [];

let su = 0;
let giu = 0;
let limite:number = 50;

if (quantita > limite) 
{
    alert ("Mario non puo saltare piu' di 50 muri");
} 
else 
{ 
    for (let i=0; i<quantita; i++) 
    {
        let altezza:number = +prompt("Quanto alto deve essere il " + (i+1) + "-mo muro?");
        array.push(altezza);
    }
    {
        for (let i=0; i<array.length-1; i++)
        {
            let j = array[i+1];
            if (array[i] > j) 
            {
                giu++
            }
            else if (array[i] < j)
            {
                su++
            }
        }
    }

}

console.log(array)
console.log(su, giu)

----------------------------------------------------------Esercizio n36 di 16.05-----------------------------------------------

let X:number = +prompt ("Inserisci un numero X");
let array:number[] = [];

for (let i=0; i<10; i++)
{
    let input:number = +prompt ("Inserisci il " + (i+1) + " numero");
    array.push(input);
}

let Y:number = 0;

for (let j=0; j<array.length; j++)
{
    if (array[j] % X == 0) 
    {
        Y++
    }
}

if (Y==0) 
{
    console.log("OK")
}
else
{
    console.log("NO")
}

----------------------------------------------------------Esercizio n7b di 16.05-----------------------------------------------

let X:number = +prompt("Inserisci un numero qualsiasi");
let N:number = +prompt("Quanto lungo deve essere l'aaray?");
let array:number[] = [];


for (let i=0; i<N; i++)
{
    let input:number = +prompt("Riempi il tuo array");
    array.push(input);
}
console.log(array)

let S:string = "";
for (let i=0; i<N; i++)
{
    if (array[i]<X && (array[i]%2==0))
    {
        S = S + array[i];       
    }
}
console.log(S)


----------------------------------------------------------Esercizio n27 di 16.05-----------------------------------------------

let N:number = +prompt("Inserisci un numero positivo intero");
console.log(N);

let array:number [] = [];

let numero:number = 0;
while (numero != -1)
{        
    numero = +prompt("Riempi il tuo array con dei numeri positivi interi\n -1 per terminare");
    if (numero<-1 )
    {
        alert ("Inserisci numeri maggiori di 0")
    }
    else
    {
        array.push(numero);
    }
}

console.log(array);

let x:number = 0;
let t:number = 0;
for (let i=0; i<array.length-1; i++)
{
    if (array[i] <= N)
    {
        x++
        if (x>t)
        {
            t = x;
        }
    }
    else
    {       
        x = 0;
    }      
}
console.log(t)

if (t>=N)
{
    console.log("OK")
} else
{
    console.log("NO")
}

----------------------------------------------------------Esercizio n10 di 16.05-----------------------------------------------

let N:string = prompt("Inserisci un numero intero positivo")

let S:string = "";
for (let i=N.length-1; i>=0; i--)
{
    S = S + N[i]
}

let A:number = +N;
let B:number = +S;

let risultato:number = (A-B);
if (risultato < 0)
{
    console.log(risultato * (-1));
}
else 
{
    console.log(risultato);
}

----------------------------------------------------------Esercizio n14 di 16.05-----------------------------------------------
MODO 1

function main()
{
    let array:number[] = [];
    let input: number = 0;
   
    while (input != -1)
    {
        input = +prompt ("Riempi il tuo array \n-1 per terminare");
        if (input != -1)
        {
            array.push(input);
        }
        
    }
    
    if (array.length == 0)
    {
        console.log("VUOTO")
        return;        
    }
    
    let risultato:number = 0;
    for (let i=0; i<array.length; i++)
    {
        if (array[i]<0 || array[i]>9)
        {
            console.log("ERRORE")
            return;
        }
        let A:number = array.length - i - 1;
        let T:number = array[i];
        for (let j=0; j<A; j++)
        {
            T = T*10;
        }
        risultato = risultato + T;
    }
    if (risultato %3 == 0)
    {
        console.log("SI")
    } 
    else
    {
        console.log("NO")
    }
}

main()

------------------------------------
MODO 1

----------------------------------------------------------Esercizio n32 di 16.05-----------------------------------------------

let array:number[] = [];
let input: number = -1;
    
while (input != 0)
{
    input = +prompt ("Riempi il tuo array \n 0 per terminare");
    if (input != 0)
    {
        array.push(input);
    }    
}

let risultato = controlla(array);
console.log(risultato);

function controlla(a:number[]):string
{
    if (array.length == 0) 
    {
        return "NO";               
    }
    let crescente = true;
    for (let i=0; i<array.length-1; i++)
    {   
        let j:number = i+1;
        if (array[i] < array[j])
        {
            if (crescente == false)
            {
                return "NO";
            }
        }
        else if (array[i] > array[j])
        {
            crescente = false; 
            if (i == 0) 
            {
                return "NO";               
            }
        }
        else 
        {
            return "NO";
        }        
    }
    if (crescente == true)
    {
        return "NO"
    }
    return "OK";
}