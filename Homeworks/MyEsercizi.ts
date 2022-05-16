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
