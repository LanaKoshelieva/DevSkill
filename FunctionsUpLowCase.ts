Esercizio1 IN Maiuscolo

function maiuscolo(nome:string, cognome:string):string {
    let inMaiuscolo:string = nome + ' ' + cognome;
    inMaiuscolo = inMaiuscolo.toUpperCase();
    return inMaiuscolo;
}

let nomeUtente:string = prompt ("Inserisci il tuo nome");
let cognomeUtente:string = prompt ("Inserisci il tuo cognome");

let nome_cognome = maiuscolo(nomeUtente,cognomeUtente);
console.log(nome_cognome);
---------------------------------------------------------------

Esercizio2 IN Minuscolo

function minuscolo(nome:string, cognome:string):string {
    let inMinuscolo:string = nome.toLowerCase() + ' ' + cognome.toLowerCase();
    return inMinuscolo;
}

let nomeUtente:string = prompt ("Inserisci il tuo nome");
let cognomeUtente:string = prompt ("Inserisci il tuo cognome");

let nome_cognome = minuscolo(nomeUtente, cognomeUtente);
console.log(nome_cognome);
---------------------------------------------------------------


