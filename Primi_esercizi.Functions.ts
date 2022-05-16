--------------------------Esercizio1 IN Maiuscolo-------------------------------------


function maiuscolo(nome:string, cognome:string):string {
    let inMaiuscolo:string = nome + ' ' + cognome;
    inMaiuscolo = inMaiuscolo.toUpperCase();
    return inMaiuscolo;
}

let nomeUtente:string = prompt ("Inserisci il tuo nome");
let cognomeUtente:string = prompt ("Inserisci il tuo cognome");

let nome_cognome = maiuscolo(nomeUtente,cognomeUtente);
console.log(nome_cognome);

--------------------------Esercizio2 IN Minuscolo-------------------------------------

function minuscolo(nome:string, cognome:string):string {
    let inMinuscolo:string = nome.toLowerCase() + ' ' + cognome.toLowerCase();
    return inMinuscolo;
}

let nomeUtente:string = prompt ("Inserisci il tuo nome");
let cognomeUtente:string = prompt ("Inserisci il tuo cognome");

let nome_cognome = minuscolo(nomeUtente, cognomeUtente);
console.log(nome_cognome);

--------------------------Esercizio 3 Base e perimetro-------------------------------------
va1

let b:number = prompt ("inserisci la base");

let h:number = prompt ("inserisci l'altezza");

const area:number = (b*h);
const perimetro:number = (2*b+2*h);

console.log (area);
console.log (perimetro);

--------------------------------------------------
var 2

let input:string = prompt ("inresci la base");
let base:number = +input;

input = prompt ("inserisci l'altezza");
let altezza:number = +input;

const area = (altezza * base);
console.log (area);

const perimetro = (2*(base + altezza));
console.log (perimetro);

--------------------------Esercizio 4-------------------------------------
var 1

let first:string = prompt ("Inserisci una parola");
let second:string = prompt ("Inserisci un'altra parola");

const frase1:string = (first + second);
const frase2:string = (second + first);

console.log (frase1);
console.log (frase2);

----------------------------------------------------------
var 2

let first:string = prompt ("Inserisci una parola");
let second:string = prompt ("Inserisci un'altra parola");

console.log (first + second);
console.log (second + first);

--------------------------Esercizio 5-------------------------------------

let input:string = prompt ("inserisci un numero");
let number1:number = +input;
console.log (number1);

input = prompt ("inserisci un altro numero");
let number2:number = +input;
console.log (number2);

const somma = (number1 + number2);
console.log (somma);

const sottrazione = (number1 - number2);
console.log (sottrazione);

const moltiplicazione  = (number1 * number2);
console.log (moltiplicazione );

const divisione  = (number1 / number2);
console.log (divisione );