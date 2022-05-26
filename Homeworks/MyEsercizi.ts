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

function main() {
    let N1:number = numero();
    let N2:number = numero();

    let risultatoMax = 0;

    if (N1 > N2 || N1 == N2 || (N1 < 0 || N1 > 10000) || (N2 < 0 || N2 > 10000)) 
    {
        alert ("Il primo numero deve essere minore del secondo. \nI numeri non possono essere minori di 0 e maggiori di 10000")
        return;
    }  
       
    for (let i=N1; i<=N2; i++) 
    {
        let risultato:number = calcolaGiro(i);
        if (risultato > risultatoMax) 
        { 
            risultatoMax = risultato;
        }
    }    
    console.log(N1, N2, risultatoMax)
}

main();


-----------Esercizio di Maradona--------------

let cognomi:string[] = [];
let attacco:number[] = [];
let difesa:number[] = [];

for (let i=0; i<10; i++) 
{
    let nome:string = prompt("Inserisci il cognome del " + (i+1) + " giocatore")  
    let lower:string = nome.toLowerCase();
    cognomi.push(lower);
    let votoA:number = +prompt("Inserisci il voto dell'attaco del " + (i+1) +  " giocatore")  
    attacco.push(+votoA);
    let votoD:number = +prompt("Inserisci il voto della difesa del " + (i+1) +  " giocatore")  
    difesa.push(+votoD);
}

function ordinaDecrescente (nomi:string[], ordinatore:number[], ordinato:number[]):void
{ 
    for (let i=0; i< ordinatore.length-1; i++) 
    {
        for (let j=i+1; j< ordinatore.length; j++ )
        { 
            if (ordinatore[i] < ordinatore[j])
            {   
                let X = ordinatore[i];
                ordinatore[i] = ordinatore[j];
                ordinatore[j] = X;

                let Y = nomi[i];
                nomi[i] = nomi[j];
                nomi[j] = Y;

                let Z = ordinato[i];
                ordinato[i] = ordinato[j];
                ordinato[j] = Z;
            } 
        } 
    }
}

ordinaDecrescente(cognomi, attacco, difesa);
console.log(cognomi, attacco, difesa)

let nomiAttaccanti:string[] = [];
let nomiDifensori:string[] = [];

for (let i=0; i<10; i++) 
{
    if(i<=4)
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
                let X = array[i];
                array[i] = array[j];
                array[j] = X;
            } 
        } 
    }
}

ordinaCrescente(nomiAttaccanti)
console.log(nomiAttaccanti)

ordinaCrescente(nomiDifensori)
console.log(nomiDifensori)

-------


// let X:number = +prompt("Inserisci un numero qualsiasi");
// let N:number = +prompt("Quanto lungo deve essere l'aaray?");
// let array:number[] = [];


// for (let i=0; i<N; i++)
// {
//     let input:number = +prompt("Riempi il tuo array");
//     array.push(input);
// }

// console.log(array)

// let A:number[] = [];
// for (let i=0; i<N; i++)
// {
//     if (array[i]<X && (array[i]%2==0))
//     {
//         A.push(array[i]);        
//     }
// }

// let S:string = "";

// for (let i=0; i<A.length; i++)
// {
//     S = S + A[i];
// }
// console.log(S)

// let joinN:number = A.join('');
// console.log(joinN)